# PulsoGen IT Academy — 3D Rich UI & Cosmic Career Accelerator

A futuristic, modern, high-performance one-page website designed specifically for an **IT Coaching Class / Academy**. Built with semantic **HTML5, modern responsive CSS3, and Vanilla JavaScript** featuring a **Professional Rich Royal Indigo, Sapphire & Aurora Cyan** design system with **3D Illustrative Celestial Graphics (Earth, Moon, Galaxy, Saturn), Antigravity particle engine, and cinematic slow-reveal navigation**.

---

## 🌟 Major Highlights & New Features

### 1. 🎨 Professional Rich UI Color System
Upgraded from basic sky blue to a world-class, enterprise-grade palette:
- **Primary Brand Accent**: Royal Electric Indigo (`#4F46E5` / `#6366F1`) & Deep Royal Indigo (`#4338CA` / `#3730A3`)
- **High-Tech Radiant Energy**: Electric Sapphire (`#2563EB`) & Aurora Cyber Cyan (`#06B6D4` / `#00F0FF`)
- **Luxury Multi-Stop Gradients**: `linear-gradient(135deg, #4f46e5 0%, #2563eb 55%, #06b6d4 100%)` applied to headings (`.text-sky`, `.highlight`), buttons, borders, and glass highlights.
- **Surface & Backgrounds**: Crisp Platinum White (`#ffffff`), Silk Slate (`#f8fafc`, `#f5f7ff`), and Obsidian Navy glass for an ultra-premium look.

---

### 2. 🪐 3D Illustrative Graphics (Galaxy, Earth, Moon, Saturn)
Real-time 3D rendered celestial bodies with smooth GPU-accelerated keyframe physics:
1. **🌍 Earth (Terra Realm)**:
   - 3D spherical orb with 23.5° axial tilt, realistic atmospheric breathing cyan haze, layered continents, and rotating cloud layers (`@keyframes earthRotate`).
2. **🌙 Moon (Luna Realm)**:
   - Spherical lunar body with dark mare basins, crater topography, pearl-silver specular rim lighting, and tidal librations (`@keyframes moonOrbitSway`).
3. **🌌 Galaxy (Andromeda Realm)**:
   - 3D tilted spiral disc (`rotateX(62deg) rotateY(15deg)`) featuring a radiant central singularity, multi-arm conic ultraviolet-cyan stardust arms, and accelerating spin on hover (`@keyframes galaxySpin`).
4. **🪐 Saturn (Chronos Realm)**:
   - Banded gas-giant sphere with 3D tilted planetary rings (`rotateX(74deg) rotateY(18deg)`), specular glints, and planet shadows (`@keyframes saturnRingGlint`).

---

### 3. 🚀 Cinematic Slow Warp Transit & Section Appearance
- Clicking any 3D celestial graphic (in the Hero arena or the dedicated **`#cosmic-navigator`** command dock) triggers a luxurious slow camera glide down the page over **1600ms** using a mathematical `easeInOutCubic` interpolation.
- **Slow Page Appearance & Luminous Reveal**:
  - When the viewport settles on the target dimension, the destination section gently lifts and illuminates with a cosmic glowing aura (`.cosmic-revealed-active`, `box-shadow: 0 0 70px 18px rgba(99, 102, 241, 0.5)`).
  - Displays a floating badge: `"✦ Teleported from [Terra/Luna/Andromeda/Chronos] Realm ✦"`.

---

### 4. 📋 Dual Google Forms Integration
- **Confirm Batch Enrollment**: [`Google Form 1`](https://docs.google.com/forms/d/e/1FAIpQLSe8PyJWpAnaB-I1SDaE77lYGbn2ikJCYH2c-09KhsDJ2MzQzw/viewform?usp=dialog)
- **Book Free Demo & Admissions**: [`Google Form 2`](https://docs.google.com/forms/d/e/1FAIpQLScu2wUqKz4HDeXM9sKUUvp8BlwebQ2eAm156qD3MqVPBlk1_w/viewform?usp=dialog)

---

### 5. 🌀 3D Moving Reviews Marquee Wall & Partners
- Dual-track infinite review wall with 3D perspective depth (`rotateX(2deg)`).
- Pause on hover and manual toggle pill (`⏸ Pause` / `▶ Resume`).
- Moving hiring partners marquee (TCS, Infosys, Wipro, Accenture, Cognizant, Tech Mahindra, etc.).

---

### 6. 💬 WhatsApp Direct Academic Counsellor
- Direct WhatsApp connection: `https://wa.me/919503800703?text=...`
- Interactive counsellor prompt bubble with session-based dismissal.

---

## 📂 Project Structure

```text
Pulso_Gen/
├── index.html              # Semantic HTML5 with 3D canvas, cosmic navigator, 3D celestial bodies & JSON-LD
├── css/
│   └── style.css           # Modern CSS3 with Royal Indigo/Sapphire palette, 3D planets & slow reveal keyframes
├── js/
│   └── main.js             # Vanilla JS: 3D particle canvas, card tilt, slow camera warp transit & reveal engine
├── assets/
│   ├── favicon.svg         # SVG icon with sky gradient & pulse waveform
│   └── manifest.json       # PWA & Web App Manifest
└── README.md               # Technical documentation
```

---

## 🛠️ How to Preview & Run

Open [**`index.html`**](file:///c:/Users/rk07p/OneDrive/Desktop/Pulso_Gen/index.html) in your browser or run:
```powershell
python -m http.server 8080
```
Then visit `http://localhost:8080`.
