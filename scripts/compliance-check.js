#!/usr/bin/env node
/* Auditoría estática de cumplimiento. Sin dependencias. Ejecutar: npm run check */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const failures = [];
const warnings = [];

const DISCLOSURE = 'As an Amazon Associate I earn from qualifying purchases.';
const PAGES = ['index.html', 'about.html', 'contact.html', 'disclosure.html', 'privacy.html'];
const REQUIRED = [...PAGES, 'styles.css', 'app.js', 'products.json', 'robots.txt', 'sitemap.xml', 'SCRIPT_RULE.md'];
const WEB_FILES = [...PAGES, 'styles.css', 'app.js', 'products.json', 'robots.txt', 'sitemap.xml'];

function fail(message) { failures.push(message); }
function warn(message) { warnings.push(message); }
function read(relative) {
  const absolute = path.join(root, relative);
  return fs.existsSync(absolute) ? fs.readFileSync(absolute, 'utf8') : null;
}

// 1. Archivos obligatorios.
REQUIRED.forEach((file) => {
  if (read(file) === null) fail(`Falta el archivo obligatorio: ${file}`);
});

// 2. Disclosure exacto en todas las páginas públicas.
PAGES.forEach((page) => {
  const content = read(page);
  if (content !== null && !content.includes(DISCLOSURE)) {
    fail(`${page}: falta el disclosure exacto "${DISCLOSURE}"`);
  }
});

// 3. Sin precios estáticos en archivos web.
WEB_FILES.forEach((file) => {
  const content = read(file);
  if (content === null) return;
  const lines = content.split(/\r?\n/);
  lines.forEach((line, index) => {
    if (/\$\s?\d|\bUSD\s?\d|\bUS\$\s?\d/.test(line)) {
      fail(`${file}:${index + 1}: precio estático detectado (${line.trim().slice(0, 90)})`);
    }
  });
});

// 4. Sin imágenes de Amazon ni acortadores externos.
const AMAZON_IMAGE = /m\.media-amazon\.com|images-na\.ssl-images-amazon\.com|amazon\.com\/images/i;
const SHORTENER = /https?:\/\/(bit\.ly|tinyurl\.com|goo\.gl|t\.co|ow\.ly|cutt\.ly|is\.gd|rebrand\.ly)/i;
WEB_FILES.forEach((file) => {
  const content = read(file);
  if (content === null) return;
  if (AMAZON_IMAGE.test(content)) fail(`${file}: contiene una URL de imagen de Amazon`);
  if (SHORTENER.test(content)) fail(`${file}: contiene un acortador externo`);
});

// 5. Esquema de products.json y links.
let products = [];
const productsContent = read('products.json');
if (productsContent !== null) {
  try {
    products = JSON.parse(productsContent);
    if (!Array.isArray(products)) fail('products.json debe ser un array');
  } catch (error) {
    fail(`products.json no es JSON válido: ${error.message}`);
  }
}

if (Array.isArray(products)) {
  const seen = new Set();
  const requiredFields = ['id', 'title', 'category', 'score', 'pros', 'cons', 'verdict', 'image', 'affiliate_url'];
  products.forEach((product, index) => {
    const label = `products.json[${index}]`;
    requiredFields.forEach((field) => {
      if (product[field] === undefined || product[field] === '') fail(`${label}: falta el campo "${field}"`);
    });
    if (typeof product.id !== 'string' || !/^\d{3}$/.test(product.id)) fail(`${label}: id debe ser un SKU de 3 dígitos`);
    if (seen.has(product.id)) fail(`${label}: SKU duplicado ${product.id}`);
    seen.add(product.id);
    if (typeof product.score !== 'number' || product.score < 0 || product.score > 5) fail(`${label}: score debe ser un número entre 0 y 5`);
    ['pros', 'cons'].forEach((field) => {
      if (!Array.isArray(product[field]) || !product[field].every((item) => typeof item === 'string')) {
        fail(`${label}: "${field}" debe ser un array de strings`);
      }
    });
    if (product.image && (/^https?:/i.test(product.image) || AMAZON_IMAGE.test(product.image))) {
      fail(`${label}: "image" debe ser una ruta local generada por IA, no una URL remota`);
    }
    if (product.affiliate_url && !/^https:\/\/amzn\.to\//i.test(product.affiliate_url)) {
      fail(`${label}: "affiliate_url" debe ser un link oficial de SiteStripe (https://amzn.to/...)`);
    }
  });
}

// 6.placeholders pendientes de reemplazo (informativo).
if (/YOUR_USERNAME/.test(read('sitemap.xml') || '') || /YOUR_USERNAME/.test(read('robots.txt') || '')) {
  warn('Queda YOUR_USERNAME en robots.txt/sitemap.xml: reemplazar por el usuario real de GitHub');
}
if (/YOUR_USERNAME/.test(read('contact.html') || '')) {
  warn('Queda YOUR_USERNAME en contact.html: reemplazar por el usuario real de GitHub');
}

// Reporte.
console.log('Vetted Gear Lab — compliance check');
if (warnings.length) {
  console.log('\nAdvertencias:');
  warnings.forEach((message) => console.log(`  ! ${message}`));
}
if (failures.length) {
  console.log('\nErrores:');
  failures.forEach((message) => console.log(`  x ${message}`));
  console.log(`\nFALLÓ: ${failures.length} error(es).`);
  process.exit(1);
}
console.log(`\nOK: ${REQUIRED.length} archivos obligatorios, ${PAGES.length} disclosures, ${products.length} producto(s) validados.`);
