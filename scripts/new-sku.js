#!/usr/bin/env node
/* Crea la estructura de trabajo de un SKU. Sin dependencias. Ejecutar: npm run new-sku -- 001 */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const productsFile = path.join(root, 'products.json');

function nextSku(requested) {
  if (requested !== undefined) {
    if (!/^\d{3}$/.test(requested)) {
      console.error('El SKU debe tener 3 dígitos, por ejemplo: 001');
      process.exit(1);
    }
    return requested;
  }
  let products = [];
  try {
    products = JSON.parse(fs.readFileSync(productsFile, 'utf8'));
  } catch (_) {
    products = [];
  }
  const max = products.reduce((highest, product) => {
    const value = Number.parseInt(product.id, 10);
    return Number.isNaN(value) ? highest : Math.max(highest, value);
  }, 0);
  return String(max + 1).padStart(3, '0');
}

const sku = nextSku(process.argv[2]);
const targets = [
  [path.join(root, 'templates', 'script-template.md'), path.join(root, 'scripts', sku, 'script.md')],
  [path.join(root, 'templates', 'visual-prompts-template.md'), path.join(root, 'assets', sku, 'prompts.md')]
];

targets.forEach(([source, destination]) => {
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  if (fs.existsSync(destination)) {
    console.log(`Ya existe: ${path.relative(root, destination)}`);
  } else {
    fs.copyFileSync(source, destination);
    console.log(`Creado: ${path.relative(root, destination)}`);
  }
});

console.log(`\nSKU #${sku} listo. Deep link: /?p=${sku}`);
console.log('Siguiente paso: completar el guion según SCRIPT_RULE.md y añadir el producto a products.json.');
