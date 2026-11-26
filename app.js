/* Vetted Gear Lab — catalog rendering, search, filters, deep links and SEO tags. */
'use strict';

const DISCLOSURE = 'As an Amazon Associate I earn from qualifying purchases.';
const state = {
  products: [],
  query: '',
  category: '',
  featuredSku: new URLSearchParams(window.location.search).get('p') || ''
};

const catalog = document.getElementById('catalog');
const emptyState = document.getElementById('empty');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function absolute(path) {
  return new URL(path, window.location.href).href;
}

function setMeta(selector, attribute, value) {
  const tag = document.querySelector(selector);
  if (tag && value) tag.setAttribute(attribute, value);
}

function populateCategories() {
  const categories = [...new Set(state.products.map((product) => product.category))].sort();
  categories.forEach((category) => {
    const option = node('option', '', category);
    option.value = category;
    categorySelect.append(option);
  });
  categorySelect.hidden = categories.length === 0;
}

function matchingProducts() {
  const query = state.query.trim().toLowerCase();
  return state.products.filter((product) => {
    const matchesCategory = !state.category || product.category === state.category;
    const haystack = [
      product.title, product.category, product.verdict,
      ...(product.pros || []), ...(product.cons || [])
    ].join(' ').toLowerCase();
    return matchesCategory && (!query || haystack.includes(query));
  });
}

function createCard(product) {
  const card = node('article', 'card');
  card.dataset.sku = product.id;

  const media = node('div', 'card-media');
  if (product.image && !/^https?:\/\//i.test(product.image)) {
    const image = node('img');
    image.src = product.image;
    image.alt = `Original AI-generated product visual for ${product.title}`;
    image.loading = 'lazy';
    media.append(image);
  } else {
    media.append(node('span', '', 'AI visual pending'));
  }
  card.append(media);

  const head = node('div', 'card-head');
  const heading = node('h2', '', product.title);
  head.append(heading, node('span', 'badge', String(product.score) + '/5'));
  card.append(head);

  card.append(node('span', 'score', product.category));

  const lists = node('div', 'pros-cons');
  const pros = node('ul', 'pros');
  (product.pros || []).forEach((item) => pros.append(node('li', '', item)));
  const cons = node('ul', 'cons');
  (product.cons || []).forEach((item) => cons.append(node('li', '', item)));
  lists.append(pros, cons);
  card.append(lists);

  card.append(node('p', 'verdict', product.verdict));

  const actions = node('div', 'card-actions');
  const cta = node('a', 'cta', 'Check Current Price on Amazon');
  cta.href = product.affiliate_url;
  cta.target = '_blank';
  cta.rel = 'sponsored nofollow noopener noreferrer';
  const permalink = node('a', 'permalink', `Item #${product.id}`);
  permalink.href = `?p=${encodeURIComponent(product.id)}`;
  actions.append(cta, permalink);
  card.append(actions);

  return card;
}

function updateSeo() {
  const featured = state.products.find((product) => product.id === state.featuredSku);
  const title = featured
    ? `${featured.title} — Vetted Gear Lab`
    : 'Vetted Gear Lab — Spec-driven product analysis';
  const description = featured
    ? featured.verdict.slice(0, 155)
    : 'Short, analytical product breakdowns for US buyers. Specs, honest limitations, and clear verdicts — no hype.';

  document.title = title;
  setMeta('meta[name="description"]', 'content', description);
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:url"]', 'content', featured ? absolute(`?p=${featured.id}`) : absolute('index.html'));
  setMeta('meta[property="og:image"]', 'content', featured && featured.image ? absolute(featured.image) : absolute('assets/og-default.png'));
}

function highlightFeatured() {
  if (!state.featuredSku) return;
  const target = catalog.querySelector(`[data-sku="${CSS.escape(state.featuredSku)}"]`);
  if (!target) return;
  target.classList.add('is-featured');
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function render() {
  let products = matchingProducts();
  if (state.featuredSku) {
    products = [...products].sort((a, b) => (a.id === state.featuredSku ? -1 : b.id === state.featuredSku ? 1 : 0));
  }

  catalog.replaceChildren(...products.map(createCard));
  emptyState.hidden = products.length > 0;
  if (emptyState.hidden === false && state.products.length === 0) {
    emptyState.textContent = 'Reviews are being prepared. Check back soon.';
  }
  updateSeo();
  requestAnimationFrame(highlightFeatured);
}

async function loadProducts() {
  try {
    const response = await fetch('products.json', { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    state.products = Array.isArray(data) ? data : [];
    populateCategories();
    render();
  } catch (error) {
    catalog.replaceChildren();
    emptyState.hidden = false;
    emptyState.textContent = `Could not load reviews (${error.message}). Please try again later.`;
  }
}

let debounceTimer;
searchInput.addEventListener('input', (event) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(() => {
    state.query = event.target.value;
    render();
  }, 120);
});

categorySelect.addEventListener('change', (event) => {
  state.category = event.target.value;
  render();
});

window.addEventListener('popstate', () => {
  state.featuredSku = new URLSearchParams(window.location.search).get('p') || '';
  render();
});

// Runtime disclosure guard: keep the required notice present even if markup changes.
if (!document.body.textContent.includes(DISCLOSURE)) {
  console.warn('Vetted Gear Lab: missing Amazon Associates disclosure on this page.');
}

loadProducts();
