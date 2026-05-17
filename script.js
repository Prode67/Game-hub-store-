/* ============================================
   GAME HUB STORE – MAIN SCRIPT
   ============================================ */

'use strict';

// ============ DEFAULT GAME DATA ============
const DEFAULT_GAMES = [
  {
    id: 1, name: "Cyber Assault 2077",
    category: "Action", platform: "PC",
    price: 49.99, size: "65 GB", rating: 4.8,
    downloads: 12450, featured: true,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    desc: "Experience the ultimate cyberpunk action RPG set in a dystopian future. Hack, slash, and shoot your way through neon-lit streets.",
    downloadLink: "#", trailer: "https://www.youtube.com/embed/8X2kIfS6fb8",
    tags: "RPG, cyberpunk, open-world", badge: "featured", year: 2026
  },
  {
    id: 2, name: "Street Racer GT",
    category: "Racing", platform: "Both",
    price: 29.99, size: "18 GB", rating: 4.5,
    downloads: 9870, featured: true,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    desc: "High-speed street racing with 200+ cars. Compete in worldwide tournaments across stunning city circuits.",
    downloadLink: "#", trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: "racing, multiplayer, cars", badge: "hot", year: 2025
  },
  {
    id: 3, name: "FIFA Pro 2026",
    category: "Football", platform: "Both",
    price: 59.99, size: "55 GB", rating: 4.7,
    downloads: 22100, featured: true,
    image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=600&h=400&fit=crop",
    desc: "The most realistic football simulation ever made. Play with 700+ clubs and 17,000+ real players worldwide.",
    downloadLink: "#", trailer: "",
    tags: "football, sports, multiplayer", badge: "new", year: 2026
  },
  {
    id: 4, name: "Shadow Horror",
    category: "Horror", platform: "PC",
    price: 19.99, size: "12 GB", rating: 4.3,
    downloads: 6700, featured: false,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop",
    desc: "Survive the terrifying darkness. Every shadow hides a monster. Use your wits and limited resources to escape.",
    downloadLink: "#", trailer: "",
    tags: "horror, survival, scary", badge: "", year: 2025
  },
  {
    id: 5, name: "Dragon Quest Legends",
    category: "Adventure", platform: "PC",
    price: 39.99, size: "42 GB", rating: 4.9,
    downloads: 15800, featured: true,
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
    desc: "Embark on an epic fantasy adventure. Slay dragons, discover ancient magic, and save the realm from eternal darkness.",
    downloadLink: "#", trailer: "",
    tags: "RPG, fantasy, adventure", badge: "featured", year: 2026
  },
  {
    id: 6, name: "Subway Dash",
    category: "Android", platform: "Android",
    price: 0, size: "180 MB", rating: 4.2,
    downloads: 45000, featured: false,
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
    desc: "Run, jump and slide in this addictive endless runner. Collect coins and unlock amazing characters.",
    downloadLink: "#", trailer: "",
    tags: "android, casual, endless-runner", badge: "free", year: 2025
  },
  {
    id: 7, name: "Sniper Elite Ghost",
    category: "Action", platform: "PC",
    price: 34.99, size: "28 GB", rating: 4.6,
    downloads: 8900, featured: false,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    desc: "Precision tactical shooter. Infiltrate enemy territory, neutralize targets, and complete covert missions alone.",
    downloadLink: "#", trailer: "",
    tags: "shooter, tactical, stealth", badge: "", year: 2025
  },
  {
    id: 8, name: "Turbo Kart Racing",
    category: "Racing", platform: "Android",
    price: 2.99, size: "500 MB", rating: 4.1,
    downloads: 31000, featured: false,
    image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=600&h=400&fit=crop",
    desc: "Fun kart racing game for Android with dozens of tracks and crazy power-ups. Race with friends!",
    downloadLink: "#", trailer: "",
    tags: "android, racing, kart", badge: "", year: 2025
  },
  {
    id: 9, name: "Zombie Apocalypse",
    category: "Horror", platform: "Both",
    price: 24.99, size: "22 GB", rating: 4.4,
    downloads: 11200, featured: false,
    image: "https://images.unsplash.com/photo-1535223289429-462ea9301402?w=600&h=400&fit=crop",
    desc: "The undead have risen. Survive, scavenge, and build your base against endless zombie hordes.",
    downloadLink: "#", trailer: "",
    tags: "zombie, survival, horror", badge: "hot", year: 2026
  },
  {
    id: 10, name: "Offline City Builder",
    category: "Offline", platform: "Android",
    price: 4.99, size: "350 MB", rating: 4.6,
    downloads: 18700, featured: false,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop",
    desc: "Build your dream city completely offline. No internet required. Manage resources, citizens, and grow your empire.",
    downloadLink: "#", trailer: "",
    tags: "strategy, city-builder, offline", badge: "", year: 2025
  },
  {
    id: 11, name: "Battle Royale X",
    category: "Action", platform: "Both",
    price: 0, size: "8 GB", rating: 4.5,
    downloads: 67000, featured: false,
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=400&fit=crop",
    desc: "100 players drop in, only one survives. The ultimate mobile battle royale experience with console-quality graphics.",
    downloadLink: "#", trailer: "",
    tags: "battle-royale, shooter, free-to-play", badge: "free", year: 2026
  },
  {
    id: 12, name: "Pro Rugby Manager",
    category: "Football", platform: "PC",
    price: 14.99, size: "5 GB", rating: 3.9,
    downloads: 4200, featured: false,
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop",
    desc: "Take charge of your favourite rugby team. Manage tactics, transfers, and lead your squad to championship glory.",
    downloadLink: "#", trailer: "",
    tags: "rugby, sports, management", badge: "", year: 2025
  }
];

const CATEGORIES = [
  { name: "Action", icon: "⚔️", color: "#ef4444" },
  { name: "Football", icon: "⚽", color: "#10b981" },
  { name: "Racing", icon: "🏎️", color: "#f59e0b" },
  { name: "Horror", icon: "👻", color: "#8b5cf6" },
  { name: "Adventure", icon: "🗺️", color: "#3b82f6" },
  { name: "Offline", icon: "📴", color: "#6b7280" },
  { name: "Android", icon: "🤖", color: "#06b6d4" },
  { name: "PC", icon: "💻", color: "#ec4899" }
];

// ============ STATE ============
let games = [];
let filteredGames = [];
let displayCount = 8;
let currentSlide = 0;
let sliderInterval;
let currentPaymentGame = null;

// ============ STORAGE HELPERS ============
function getGames() {
  const stored = localStorage.getItem('gamehub_games');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('gamehub_games', JSON.stringify(DEFAULT_GAMES));
  return DEFAULT_GAMES;
}
function saveGames(data) {
  localStorage.setItem('gamehub_games', JSON.stringify(data));
}
function genId() {
  return Date.now() + Math.random().toString(36).slice(2, 6);
}

// ============ TOAST ============
function showToast(msg, type = 'info') {
  const c = document.getElementById('toastContainer');
  if (!c) return;
  const icons = { success: 'check-circle', error: 'times-circle', warning: 'exclamation-triangle', info: 'info-circle' };
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<i class="fas fa-${icons[type]||'info-circle'}" style="color:var(--accent-${type==='success'?'green':type==='error'?'red':type==='warning'?'':'blue'})"></i> ${msg}`;
  c.appendChild(t);
  setTimeout(() => { t.style.animation = 'slideOut 0.3s ease forwards'; setTimeout(() => t.remove(), 300); }, 3000);
}

// ============ THEME ============
function initTheme() {
  const saved = localStorage.getItem('gamehub_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('gamehub_theme', next);
  updateThemeIcon(next);
}
function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ============ STARS ============
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) html += '<i class="fas fa-star"></i>';
    else if (i === full && half) html += '<i class="fas fa-star-half-alt"></i>';
    else html += '<i class="far fa-star" style="opacity:0.3"></i>';
  }
  return html;
}

// ============ GAME CARD ============
function createGameCard(game) {
  const priceLabel = game.price === 0 ? '<span class="game-price free">FREE</span>' : `<span class="game-price">$${Number(game.price).toFixed(2)}</span>`;
  const badge = game.badge ? `<span class="card-badge badge-${game.badge}">${game.badge.toUpperCase()}</span>` : '';
  const platform = game.platform === 'Android' ? '<i class="fab fa-android"></i>' : game.platform === 'PC' ? '<i class="fas fa-desktop"></i>' : '<i class="fas fa-layer-group"></i>';
  return `
    <div class="game-card" data-id="${game.id}">
      <div class="game-card-img">
        <img src="${game.image}" alt="${game.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop'" />
        <div class="game-card-overlay">
          <button class="overlay-btn" title="View Details" onclick="openGameModal(${game.id})"><i class="fas fa-eye"></i></button>
          ${game.trailer ? `<button class="overlay-btn" title="Watch Trailer" onclick="openTrailer(${game.id})"><i class="fas fa-play"></i></button>` : ''}
        </div>
        ${badge}
        <div class="card-platform">${platform}</div>
      </div>
      <div class="game-card-body">
        <div class="game-card-category">${game.category.toUpperCase()}</div>
        <div class="game-card-title">${game.name}</div>
        <div class="game-card-desc">${game.desc.slice(0, 90)}...</div>
        <div class="game-card-meta">
          <div class="game-rating">${renderStars(game.rating)} <span style="color:var(--text-muted)">${game.rating}</span></div>
          <div class="game-size"><i class="fas fa-hdd"></i> ${game.size}</div>
        </div>
      </div>
      <div class="game-card-footer">
        ${priceLabel}
        <div class="card-actions">
          <button class="btn btn-ghost btn-sm" onclick="downloadGame(${game.id})"><i class="fas fa-download"></i></button>
          <button class="btn btn-primary btn-sm" onclick="buyGame(${game.id})"><i class="fas fa-shopping-cart"></i> Buy</button>
        </div>
      </div>
    </div>`;
}

// ============ RENDER GAMES ============
function renderGames() {
  const grid = document.getElementById('gamesGrid');
  const info = document.getElementById('resultsInfo');
  if (!grid) return;
  if (filteredGames.length === 0) {
    grid.innerHTML = `<div class="no-games"><i class="fas fa-search"></i><p>No games found. Try a different search.</p></div>`;
    if (info) info.textContent = '';
    return;
  }
  const visible = filteredGames.slice(0, displayCount);
  grid.innerHTML = visible.map(createGameCard).join('');
  if (info) info.textContent = `Showing ${Math.min(displayCount, filteredGames.length)} of ${filteredGames.length} games`;
  const btn = document.getElementById('loadMoreBtn');
  if (btn) btn.style.display = filteredGames.length > displayCount ? 'inline-flex' : 'none';
}

// ============ SEARCH & FILTER ============
function initSearch() {
  const input = document.getElementById('searchInput');
  const catFilter = document.getElementById('categoryFilter');
  const sortFilter = document.getElementById('sortFilter');
  const clearBtn = document.getElementById('searchClear');
  if (!input) return;
  const apply = () => {
    const q = input.value.toLowerCase().trim();
    const cat = catFilter ? catFilter.value : '';
    const sort = sortFilter ? sortFilter.value : 'newest';
    if (clearBtn) clearBtn.classList.toggle('visible', q.length > 0);
    filteredGames = games.filter(g => {
      const matchQ = !q || g.name.toLowerCase().includes(q) || g.desc.toLowerCase().includes(q) || (g.tags && g.tags.toLowerCase().includes(q));
      const matchCat = !cat || g.category === cat;
      return matchQ && matchCat;
    });
    if (sort === 'popular') filteredGames.sort((a, b) => b.downloads - a.downloads);
    else if (sort === 'price-low') filteredGames.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') filteredGames.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') filteredGames.sort((a, b) => b.rating - a.rating);
    else filteredGames.sort((a, b) => b.id - a.id);
    displayCount = 8;
    renderGames();
  };
  input.addEventListener('input', apply);
  if (catFilter) catFilter.addEventListener('change', apply);
  if (sortFilter) sortFilter.addEventListener('change', apply);
  if (clearBtn) clearBtn.addEventListener('click', () => { input.value = ''; clearBtn.classList.remove('visible'); apply(); });
}

// ============ CATEGORIES ============
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(cat => {
    const count = games.filter(g => g.category === cat.name).length;
    return `<div class="category-card" onclick="filterByCategory('${cat.name}')">
      <div class="category-icon">${cat.icon}</div>
      <div class="category-name">${cat.name}</div>
      <div class="category-count">${count} games</div>
    </div>`;
  }).join('');
}
function filterByCategory(cat) {
  const catFilter = document.getElementById('categoryFilter');
  const searchInput = document.getElementById('searchInput');
  if (catFilter) catFilter.value = cat;
  if (searchInput) searchInput.value = '';
  document.querySelector('#games')?.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => { catFilter && catFilter.dispatchEvent(new Event('change')); }, 400);
}

// ============ FEATURED SLIDER ============
function renderSlider() {
  const track = document.getElementById('featuredSlider');
  const dots = document.getElementById('sliderDots');
  if (!track) return;
  const featured = games.filter(g => g.featured).slice(0, 5);
  if (featured.length === 0) return;
  track.innerHTML = featured.map((g, i) => `
    <div class="slide-item" onclick="openGameModal(${g.id})">
      <img src="${g.image}" alt="${g.name}" onerror="this.src='https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=400&fit=crop'" />
      <div class="slide-overlay"></div>
      <div class="slide-content">
        <span class="slide-badge">${g.category}</span>
        <div class="slide-title">${g.name}</div>
        <div class="slide-desc">${g.desc.slice(0, 100)}...</div>
        <div class="slide-meta">
          <div class="game-rating">${renderStars(g.rating)}</div>
          <span style="color:var(--text-muted);font-size:0.8rem">${g.size}</span>
        </div>
        <div class="slide-price">${g.price === 0 ? 'FREE' : '$' + Number(g.price).toFixed(2)}</div>
        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();buyGame(${g.id})"><i class="fas fa-shopping-cart"></i> Buy Now</button>
      </div>
    </div>`).join('');
  if (dots) {
    dots.innerHTML = featured.map((_, i) => `<div class="dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>`).join('');
  }
  startSlider(featured.length);
}
function goToSlide(n) {
  const track = document.getElementById('featuredSlider');
  const dotEls = document.querySelectorAll('.dot');
  if (!track) return;
  currentSlide = n;
  track.style.transform = `translateX(-${n * 100}%)`;
  dotEls.forEach((d, i) => d.classList.toggle('active', i === n));
}
function startSlider(len) {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(() => { goToSlide((currentSlide + 1) % len); }, 5000);
}
function initSliderButtons() {
  const prev = document.getElementById('sliderPrev');
  const next = document.getElementById('sliderNext');
  const featured = games.filter(g => g.featured).slice(0, 5);
  if (prev) prev.addEventListener('click', () => { goToSlide((currentSlide - 1 + featured.length) % featured.length); startSlider(featured.length); });
  if (next) next.addEventListener('click', () => { goToSlide((currentSlide + 1) % featured.length); startSlider(featured.length); });
}

// ============ TOP DOWNLOADS ============
function renderTopDownloads() {
  const grid = document.getElementById('topGrid');
  if (!grid) return;
  const sorted = [...games].sort((a, b) => b.downloads - a.downloads).slice(0, 10);
  const maxDl = sorted[0]?.downloads || 1;
  grid.innerHTML = sorted.map((g, i) => {
    const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const pct = Math.round((g.downloads / maxDl) * 100);
    return `<div class="top-item" onclick="openGameModal(${g.id})">
      <div class="top-rank ${rankClass}">#${i + 1}</div>
      <img class="top-img" src="${g.image}" alt="${g.name}" onerror="this.src='https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=200&fit=crop'" />
      <div class="top-info">
        <div class="top-name">${g.name}</div>
        <div class="top-cat">${g.category}</div>
        <div class="top-downloads-count"><i class="fas fa-download"></i> ${g.downloads.toLocaleString()} downloads</div>
        <div class="top-dl-bar"><div class="top-dl-fill" style="width:${pct}%"></div></div>
      </div>
    </div>`;
  }).join('');
}

// ============ COUNTER ANIMATION ============
function animateCounters() {
  document.querySelectorAll('.stat-num[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current >= 1000 ? Math.round(current).toLocaleString() : Math.round(current);
      if (current >= target) clearInterval(timer);
    }, 20);
  });
}

// ============ PARTICLES ============
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      animation-duration: ${Math.random() * 10 + 8}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: ${Math.random() * 0.5 + 0.1};
    `;
    container.appendChild(p);
  }
}

// ============ NAVBAR ============
function initNavbar() {
  const nav = document.getElementById('navbar');
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  });
  if (ham && links) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('active');
      links.classList.toggle('open');
    });
  }
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (links) links.classList.remove('open');
      if (ham) ham.classList.remove('active');
    });
  });
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
}

// ============ MODALS ============
function openGameModal(id) {
  const game = games.find(g => g.id == id);
  if (!game) return;
  const content = document.getElementById('modalContent');
  if (!content) return;
  content.innerHTML = `
    <img class="modal-game-img" src="${game.image}" alt="${game.name}" onerror="this.src='https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=250&fit=crop'" />
    <div class="modal-title">${game.name}</div>
    <div class="modal-meta">
      <span><i class="fas fa-tag" style="color:var(--neon-blue)"></i> ${game.category}</span>
      <span><i class="fas fa-desktop"></i> ${game.platform}</span>
      <span><i class="fas fa-hdd"></i> ${game.size}</span>
      <span class="game-rating">${renderStars(game.rating)} ${game.rating}/5</span>
      <span><i class="fas fa-download"></i> ${game.downloads?.toLocaleString()} downloads</span>
    </div>
    <div class="modal-desc">${game.desc}</div>
    ${game.tags ? `<div style="margin-bottom:20px">${game.tags.split(',').map(t => `<span style="display:inline-block;padding:4px 10px;background:rgba(59,130,246,0.12);border-radius:100px;font-size:0.75rem;color:var(--accent-blue);margin:3px">${t.trim()}</span>`).join('')}</div>` : ''}
    <div class="modal-actions">
      <button class="btn btn-primary" onclick="buyGame(${game.id});closeModal('gameModal')"><i class="fas fa-shopping-cart"></i> Buy — ${game.price === 0 ? 'FREE' : '$' + Number(game.price).toFixed(2)}</button>
      <button class="btn btn-ghost" onclick="downloadGame(${game.id})"><i class="fas fa-download"></i> Download</button>
      ${game.trailer ? `<button class="btn btn-ghost" onclick="openTrailer(${game.id})"><i class="fas fa-play"></i> Trailer</button>` : ''}
    </div>`;
  document.getElementById('gameModal')?.classList.add('open');
}
function openTrailer(id) {
  const game = games.find(g => g.id == id);
  if (!game || !game.trailer) return;
  const content = document.getElementById('modalContent');
  if (!content) return;
  const ytEmbed = game.trailer.includes('youtube.com/watch') ? game.trailer.replace('watch?v=', 'embed/') : game.trailer;
  content.innerHTML = `
    <div class="modal-title">${game.name} – Trailer</div>
    <iframe class="trailer-frame" src="${ytEmbed}" allowfullscreen></iframe>`;
  document.getElementById('gameModal')?.classList.add('open');
}
function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
}
window.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
  }
});

// ============ BUY & DOWNLOAD ============
function buyGame(id) {
  const game = games.find(g => g.id == id);
  if (!game) return;
  currentPaymentGame = game;
  openPayment('mpesa');
}
function downloadGame(id) {
  const game = games.find(g => g.id == id);
  if (!game) return;
  game.downloads = (game.downloads || 0) + 1;
  games = games.map(g => g.id == id ? game : g);
  saveGames(games);
  showToast(`Downloading ${game.name}...`, 'success');
  if (game.downloadLink && game.downloadLink !== '#') window.open(game.downloadLink, '_blank');
  else showToast('Download link not available for demo', 'warning');
}

// ============ PAYMENT ============
function openPayment(method) {
  const content = document.getElementById('paymentContent');
  if (!content) return;
  const game = currentPaymentGame;
  const gameInfo = game ? `<div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--bg-secondary);border-radius:var(--radius);margin-bottom:16px">
    <img src="${game.image}" style="width:60px;height:60px;border-radius:8px;object-fit:cover" />
    <div><div style="font-weight:700">${game.name}</div><div style="color:var(--text-muted);font-size:0.8rem">${game.category}</div></div>
  </div>` : '';
  const amount = game ? `$${Number(game.price).toFixed(2)}` : '$0.00';
  const configs = {
    mpesa: {
      icon: '📱', name: 'M-Pesa Payment', color: '#00a544',
      steps: ['Dial *150*00# on your M-Pesa phone', `Enter amount: ${amount}`, 'Enter PayBill Number: 880880', 'Account: GAMEHUB-' + (game?.id || '000'), 'Enter your M-Pesa PIN', 'You will receive a confirmation SMS']
    },
    tigopesa: {
      icon: '💳', name: 'Tigo Pesa Payment', color: '#0077c8',
      steps: ['Open Tigo Pesa App or dial *150*01#', `Select "Pay Bill" — Amount: ${amount}`, 'Business Number: 771771', 'Reference: GAMEHUB-' + (game?.id || '000'), 'Confirm with your PIN', 'Check SMS for confirmation']
    },
    airtel: {
      icon: '📶', name: 'Airtel Money Payment', color: '#e7001b',
      steps: ['Dial *150*60# or open Airtel App', `Select "Pay" — Amount: ${amount}`, 'Merchant Code: 440440', 'Reference: GAMEHUB-' + (game?.id || '000'), 'Enter your Airtel PIN', 'Await SMS confirmation']
    },
    paypal: {
      icon: '🌐', name: 'PayPal Payment', color: '#0070ba',
      steps: ['Click the PayPal button below', 'Log into your PayPal account', `Confirm payment of ${amount}`, 'You will be redirected back automatically', 'Download link sent to your email', 'Check spam folder if not received']
    }
  };
  const cfg = configs[method] || configs.mpesa;
  content.innerHTML = `
    <div class="payment-form">
      <h3 style="color:${cfg.color}">${cfg.icon} ${cfg.name}</h3>
      <p>Complete your purchase securely</p>
      ${gameInfo}
      <div class="payment-amount">${amount}</div>
      <ol class="payment-steps">${cfg.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="confirmPayment()"><i class="fas fa-check"></i> I've Completed Payment</button>
        <button class="btn btn-ghost" onclick="closeModal('paymentModal')">Cancel</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
        ${['mpesa','tigopesa','airtel','paypal'].map(m => `<button class="btn btn-ghost btn-sm" onclick="openPayment('${m}')" style="${m===method?'border-color:var(--neon-blue);color:var(--neon-blue)':''}">${configs[m].icon}</button>`).join('')}
      </div>
    </div>`;
  document.getElementById('paymentModal')?.classList.add('open');
}
function confirmPayment() {
  closeModal('paymentModal');
  showToast('Payment received! Check your email for download link.', 'success');
  setTimeout(() => showToast('Thank you for purchasing from GameHub Store! 🎮', 'info'), 1500);
}

// ============ CONTACT ============
function sendMessage() {
  showToast('Message sent! We will reply within 24 hours.', 'success');
}

// ============ LOADER ============
function hideLoader() {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
    setTimeout(() => { if (loader) loader.remove(); }, 500);
    animateCounters();
  }, 2200);
}

// ============ LOAD MORE ============
function initLoadMore() {
  const btn = document.getElementById('loadMoreBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    displayCount += 8;
    renderGames();
    showToast('More games loaded!', 'info');
  });
}

// ============ ADMIN FUNCTIONS ============
function adminLogin() {
  const user = document.getElementById('adminUser')?.value.trim();
  const pass = document.getElementById('adminPass')?.value.trim();
  if (user === 'admin' && pass === 'admin123') {
    sessionStorage.setItem('adminLoggedIn', '1');
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'flex';
    initAdmin();
  } else {
    showToast('Invalid username or password', 'error');
    document.getElementById('adminPass').value = '';
  }
}
function adminLogout() {
  sessionStorage.removeItem('adminLoggedIn');
  location.reload();
}
function togglePassword() {
  const inp = document.getElementById('adminPass');
  inp.type = inp.type === 'password' ? 'text' : 'password';
}
document.getElementById('adminPass')?.addEventListener('keydown', e => { if (e.key === 'Enter') adminLogin(); });

function showPanel(name) {
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  if (panel) panel.classList.add('active');
  const title = document.getElementById('adminPanelTitle');
  const labels = { dashboard: 'Dashboard', games: 'Manage Games', add: 'Add New Game', analytics: 'Analytics' };
  if (title) title.textContent = labels[name] || name;
  const links = document.querySelectorAll('.sidebar-link');
  links.forEach(l => { if (l.getAttribute('onclick')?.includes(`'${name}'`)) l.classList.add('active'); });
  if (name === 'games') renderAdminTable();
  if (name === 'analytics') renderAnalytics();
}

function initAdmin() {
  games = getGames();
  renderDashboard();
  renderAdminTable();
}

function renderDashboard() {
  const el = document.getElementById('totalGames');
  if (el) el.textContent = games.length;
  const recent = document.getElementById('recentGames');
  if (recent) {
    const sorted = [...games].sort((a, b) => b.id - a.id).slice(0, 5);
    recent.innerHTML = sorted.map(g => `
      <div class="recent-item">
        <img src="${g.image}" alt="${g.name}" onerror="this.src='https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop'" />
        <div class="recent-item-info">
          <div class="recent-item-name">${g.name}</div>
          <div class="recent-item-cat">${g.category} · ${g.price === 0 ? 'FREE' : '$' + Number(g.price).toFixed(2)}</div>
        </div>
        <button class="btn btn-ghost btn-sm" onclick="editGame(${g.id})"><i class="fas fa-edit"></i></button>
      </div>`).join('');
  }
}

function renderAdminTable() {
  const tbody = document.getElementById('adminGamesTable');
  if (!tbody) return;
  if (games.length === 0) { tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text-muted)">No games yet</td></tr>'; return; }
  tbody.innerHTML = games.map(g => `
    <tr>
      <td><img src="${g.image}" alt="${g.name}" onerror="this.src='https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop'" /></td>
      <td style="font-weight:600;max-width:180px">${g.name}</td>
      <td><span style="padding:3px 10px;border-radius:100px;background:rgba(59,130,246,0.12);font-size:0.75rem;color:var(--accent-blue)">${g.category}</span></td>
      <td style="font-family:var(--font-display)">${g.price === 0 ? '<span style="color:var(--accent-green)">FREE</span>' : '$' + Number(g.price).toFixed(2)}</td>
      <td><span style="color:#f59e0b">${g.rating}</span> ⭐</td>
      <td>${(g.downloads || 0).toLocaleString()}</td>
      <td>
        <div class="table-actions">
          <button class="btn btn-ghost btn-sm" onclick="editGame(${g.id})" title="Edit"><i class="fas fa-edit"></i></button>
          <button class="btn btn-danger btn-sm" onclick="deleteGame(${g.id})" title="Delete"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>`).join('');
}

function filterAdminGames() {
  const q = document.getElementById('adminSearch')?.value.toLowerCase() || '';
  const rows = document.querySelectorAll('#adminGamesTable tr');
  rows.forEach(r => {
    const text = r.textContent.toLowerCase();
    r.style.display = !q || text.includes(q) ? '' : 'none';
  });
}

function saveGame() {
  const name = document.getElementById('gameName')?.value.trim();
  const cat = document.getElementById('gameCategory')?.value;
  const price = parseFloat(document.getElementById('gamePrice')?.value) || 0;
  const size = document.getElementById('gameSize')?.value.trim() || 'Unknown';
  const rating = parseFloat(document.getElementById('gameRating')?.value) || 4.0;
  const image = document.getElementById('gameImage')?.value.trim();
  const download = document.getElementById('gameDownload')?.value.trim();
  const trailer = document.getElementById('gameTrailer')?.value.trim();
  const desc = document.getElementById('gameDesc')?.value.trim();
  const tags = document.getElementById('gameTags')?.value.trim();
  const featured = document.getElementById('isFeatured')?.checked;
  const platform = document.getElementById('gamePlatform')?.value;
  const editId = document.getElementById('editGameId')?.value;

  if (!name || !cat || !image || !desc) { showToast('Please fill required fields (Name, Category, Image, Description)', 'error'); return; }
  if (rating < 0 || rating > 5) { showToast('Rating must be between 0 and 5', 'error'); return; }

  if (editId) {
    games = games.map(g => g.id == editId ? { ...g, name, category: cat, price, size, rating, image, downloadLink: download || '#', trailer: trailer || '', desc, tags, featured, platform } : g);
    showToast(`"${name}" updated successfully!`, 'success');
    document.getElementById('editGameId').value = '';
  } else {
    const newGame = { id: genId(), name, category: cat, price, size, rating, image, downloadLink: download || '#', trailer: trailer || '', desc, tags, featured, platform, downloads: 0, badge: '', year: new Date().getFullYear() };
    games.unshift(newGame);
    showToast(`"${name}" added successfully!`, 'success');
  }
  saveGames(games);
  resetForm();
  showPanel('games');
}

function editGame(id) {
  const game = games.find(g => g.id == id);
  if (!game) return;
  showPanel('add');
  setTimeout(() => {
    document.getElementById('editGameId').value = game.id;
    document.getElementById('gameName').value = game.name;
    document.getElementById('gameCategory').value = game.category;
    document.getElementById('gamePrice').value = game.price;
    document.getElementById('gameSize').value = game.size;
    document.getElementById('gameRating').value = game.rating;
    document.getElementById('gameImage').value = game.image;
    document.getElementById('gameDownload').value = game.downloadLink || '';
    document.getElementById('gameTrailer').value = game.trailer || '';
    document.getElementById('gameDesc').value = game.desc;
    document.getElementById('gameTags').value = game.tags || '';
    document.getElementById('isFeatured').checked = game.featured;
    document.getElementById('gamePlatform').value = game.platform || 'PC';
    document.getElementById('formTitle').innerHTML = '<i class="fas fa-edit"></i> Edit Game';
    previewImage();
  }, 100);
}

function deleteGame(id) {
  const game = games.find(g => g.id == id);
  if (!game) return;
  if (!confirm(`Delete "${game.name}"? This cannot be undone.`)) return;
  games = games.filter(g => g.id != id);
  saveGames(games);
  renderAdminTable();
  renderDashboard();
  showToast(`"${game.name}" deleted`, 'warning');
}

function resetForm() {
  ['gameName','gamePrice','gameSize','gameRating','gameImage','gameDownload','gameTrailer','gameDesc','gameTags'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  const cat = document.getElementById('gameCategory'); if (cat) cat.value = '';
  const feat = document.getElementById('isFeatured'); if (feat) feat.checked = false;
  const eid = document.getElementById('editGameId'); if (eid) eid.value = '';
  const ft = document.getElementById('formTitle'); if (ft) ft.innerHTML = '<i class="fas fa-plus-circle"></i> Add New Game';
  const prev = document.getElementById('imagePreview'); if (prev) prev.innerHTML = '';
}

function previewImage() {
  const url = document.getElementById('gameImage')?.value.trim();
  const prev = document.getElementById('imagePreview');
  if (!prev) return;
  if (url) {
    prev.innerHTML = `<img src="${url}" alt="Preview" onerror="this.parentElement.innerHTML='<span style=color:var(--accent-red)>Invalid image URL</span>'" />`;
  } else { prev.innerHTML = ''; }
}

function renderAnalytics() {
  const chart = document.getElementById('categoryChart');
  const topRated = document.getElementById('topRatedList');
  if (chart) {
    const cats = {};
    games.forEach(g => { cats[g.category] = (cats[g.category] || 0) + 1; });
    const max = Math.max(...Object.values(cats)) || 1;
    chart.innerHTML = Object.entries(cats).sort((a,b) => b[1]-a[1]).map(([k, v]) => `
      <div class="bar-item">
        <div class="bar-label">${k}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(v/max*100).toFixed(0)}%"></div></div>
        <div class="bar-count">${v}</div>
      </div>`).join('');
  }
  if (topRated) {
    const sorted = [...games].sort((a,b) => b.rating - a.rating).slice(0, 6);
    topRated.innerHTML = sorted.map((g, i) => `
      <div class="ranked-item">
        <div class="ranked-num">${i + 1}</div>
        <div class="ranked-info">
          <div class="ranked-name">${g.name}</div>
          <div class="ranked-rating"><i class="fas fa-star"></i> ${g.rating}/5</div>
        </div>
      </div>`).join('');
  }
}

function toggleSidebar() {
  document.getElementById('adminSidebar')?.classList.toggle('open');
}

// ============ MAIN INIT ============
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initParticles();

  // Check if on main page
  if (document.getElementById('gamesGrid')) {
    games = getGames();
    filteredGames = [...games];
    renderCategories();
    renderSlider();
    initSliderButtons();
    renderGames();
    renderTopDownloads();
    initSearch();
    initLoadMore();
    hideLoader();
  }

  // Admin password enter key
  const passInput = document.getElementById('adminPass');
  if (passInput) {
    passInput.addEventListener('keydown', e => { if (e.key === 'Enter') adminLogin(); });
  }
});
