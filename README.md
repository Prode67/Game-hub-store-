# 🎮 GAME HUB STORE

> A professional gaming store website — lightweight, fast, and ready for GitHub Pages hosting.

![Dark Theme](https://img.shields.io/badge/Theme-Dark%20Gaming-blueviolet)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%26%20Desktop-blue)
![No Backend](https://img.shields.io/badge/Backend-LocalStorage-green)

---

## 🚀 Features

### 🏠 Home Page
- **Hero Section** with animated neon grid background, floating particles, and animated counters
- **Featured Games Slider** — auto-rotating with dot navigation
- **Live Statistics** (games count, downloads, players)

### 🧭 Navigation
- Sticky navbar with glass morphism effect
- Responsive hamburger menu for mobile
- Dark/Light mode toggle

### 🎮 Games Section
- 12 demo games pre-loaded
- Game cards with: image, name, category, size, price, rating stars
- Hover overlay with quick-view and trailer buttons
- **Search** by name or keyword
- **Filter** by category and sort order
- **Load More** pagination

### 📂 Categories
- 8 categories: Action, Football, Racing, Horror, Adventure, Offline, Android, PC
- Click any category to instantly filter games

### 🔝 Top Downloads
- Ranked list of top 10 most downloaded games
- Animated download percentage bars

### 💳 Payment Section
- M-Pesa step-by-step instructions
- Tigo Pesa payment guide
- Airtel Money payment guide
- PayPal payment option
- Beautiful modal UI with game info

### 🛡️ Admin Panel (`admin.html`)
- Secure login (default: `admin` / `admin123`)
- **Dashboard** with stats overview
- **Manage Games** table with edit/delete
- **Add New Game** form with image preview
- **Analytics** — bar charts and top rated list
- All data saved to **LocalStorage**

### 📞 Contact Section
- WhatsApp button
- Telegram button
- Email section
- Social media icons (Facebook, Twitter, Instagram, YouTube, Discord)
- Contact form

---

## 📁 Folder Structure

```
GameHubStore/
├── index.html      — Main store page
├── admin.html      — Admin panel
├── style.css       — All styles (dark gaming theme)
├── script.js       — All JavaScript logic
└── README.md       — This file
```

---

## 🎨 Design System

| Element | Value |
|---------|-------|
| Font Display | Orbitron |
| Font Body | Rajdhani |
| Font Mono | Share Tech Mono |
| Primary Color | `#00d4ff` (Neon Blue) |
| Secondary | `#9d4edd` (Neon Purple) |
| Background | `#080b14` (Deep Dark) |
| Card BG | `#111827` |

---

## 🌐 Hosting on GitHub Pages

1. Create a new GitHub repository
2. Upload all files to the repo root
3. Go to **Settings → Pages**
4. Set source to **main branch / root**
5. Your site will be live at `https://yourusername.github.io/gamehub-store`

---

## 🔐 Admin Login

- **URL:** `yoursite/admin.html`
- **Username:** `admin`
- **Password:** `admin123`

> ⚠️ Change credentials in `script.js` before deploying publicly.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| Desktop (1280px+) | Full 4-column grid |
| Tablet (1024px) | 2-3 column grid |
| Mobile (768px) | Hamburger menu, 2-column grid |
| Small (480px) | Single column, stacked UI |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup, SEO meta tags
- **CSS3** — Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)** — Modules, LocalStorage, DOM manipulation
- **Google Fonts** — Orbitron, Rajdhani, Share Tech Mono
- **Font Awesome 6** — Icons
- **No frameworks** — Pure vanilla, zero dependencies

---

Made with ❤️ for gamers by GameHub Store
