# RishabhInfoTech — Brand Identity & Logo Package

![RishabhInfoTech Logo](/Users/rishabh/.gemini/antigravity/brain/eaf102c8-27c7-40c6-8f17-4ac71b958be3/rishabh_infotech_logo_1791010651282.jpg)

---

## 💡 Concept & Symbology

| Element | Symbolic Meaning |
| :--- | :--- |
| **Open Book** | Foundation of learning, knowledge sharing, and education. |
| **Graduation Cap (Mortarboard)** | Academic achievement, degree completion, and career milestones. |
| **Circuit Traces & Nodes** | Technology, software engineering, digital literacy, and IT skills. |
| **Upward Swoop / Growth Arrow** | Career advancement, continuous skill progression, and forward momentum. |
| **Monogram 'R' Silhouette** | Built into the stylized pages and curve for distinct brand recognition. |

---

## 🎨 Color Palette

| Role | Color Name | HEX Code | Preview |
| :--- | :--- | :--- | :--- |
| **Primary Base** | Deep Midnight Navy | `#0B1938` | `rgb(11, 25, 56)` |
| **Primary Brand** | Royal Cobalt Blue | `#1A4FD8` | `rgb(26, 79, 216)` |
| **Accent / Energy** | Vivid Tech Cyan | `#00C2FF` | `rgb(0, 194, 255)` |
| **Highlight** | Soft Cyan / Aqua | `#4EE5E8` | `rgb(78, 229, 232)` |
| **Neutral Light** | Pure Snow White | `#FFFFFF` | `rgb(255, 255, 255)` |

---

## ✒️ Recommended Typography

- **Primary Font:** Inter, Montserrat, or Plus Jakarta Sans (Bold / Semi-bold for "Rishabh", Medium / Regular for "InfoTech")
- **Tagline Font:** Roboto or DM Sans (e.g., *"Empowering Future Tech Leaders"*)

---

## 📐 Scalable Vector (SVG) Code

You can copy and embed this scalable SVG directly into websites, web apps, or vector tools:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <!-- Background / Accent Gradients -->
    <linearGradient id="primaryGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0B1938" />
      <stop offset="50%" stop-color="#184BBF" />
      <stop offset="100%" stop-color="#00C4FF" />
    </linearGradient>

    <linearGradient id="cyanGlow" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#184BBF" />
      <stop offset="100%" stop-color="#00F0FF" />
    </linearGradient>

    <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0E3894" />
      <stop offset="70%" stop-color="#00C4FF" />
      <stop offset="100%" stop-color="#67F5FF" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="500" height="500" fill="#FFFFFF" rx="32" />

  <!-- Graduation Cap (Mortarboard) -->
  <polygon points="250,90 400,165 250,225 100,165" fill="url(#primaryGrad)" />
  <polygon points="250,225 400,165 400,185 250,245 100,185 100,165" fill="#0B1938" opacity="0.3" />

  <!-- Tassel -->
  <path d="M 390 170 Q 395 210 392 245" fill="none" stroke="#00C4FF" stroke-width="4" stroke-linecap="round" />
  <circle cx="392" cy="250" r="7" fill="#00C4FF" />

  <!-- Open Book Base -->
  <g fill="none" stroke="url(#primaryGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <!-- Left Book Outline -->
    <path d="M 250 340 C 205 320 150 320 135 326 L 135 220 C 155 212 205 212 250 230 Z" fill="#FFFFFF" fill-opacity="0.9" />
    <!-- Right Book Outline -->
    <path d="M 250 340 C 295 320 350 320 365 326 L 365 220 C 345 212 295 212 250 230 Z" fill="#FFFFFF" fill-opacity="0.9" />
  </g>

  <!-- Circuit Lines & Digital Nodes (Tech details) -->
  <g stroke="#00C4FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <!-- Left page circuits -->
    <path d="M 160 250 H 185 V 275 H 205" fill="none" />
    <circle cx="205" cy="275" r="4" fill="#00C4FF" />
    <path d="M 165 295 H 215" fill="none" />
    <circle cx="215" cy="295" r="4" fill="#00C4FF" />

    <!-- Right page circuits -->
    <path d="M 340 250 H 315 V 275 H 295" fill="none" />
    <circle cx="295" cy="275" r="4" fill="#00C4FF" />
    <path d="M 335 295 H 285" fill="none" />
    <circle cx="285" cy="295" r="4" fill="#00C4FF" />
  </g>

  <!-- Central 'R' Swoop & Growth Arrow -->
  <path d="M 155 315 C 210 300 270 240 330 145" fill="none" stroke="url(#arrowGrad)" stroke-width="16" stroke-linecap="round" />
  <polygon points="330,125 348,155 315,150" fill="#00C4FF" />

  <!-- Typography -->
  <text x="250" y="420" text-anchor="middle" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-size="34" font-weight="800">
    <tspan fill="#0B1938">Rishabh</tspan><tspan fill="#00B4D8">InfoTech</tspan>
  </text>
  <text x="250" y="450" text-anchor="middle" font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#7A889B" letter-spacing="3.5">
    EMPOWERING TECH EDUCATION
  </text>
</svg>
```
