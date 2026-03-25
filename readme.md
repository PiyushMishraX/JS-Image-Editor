# Image Editor
A sleek, browser-based image processing tool built with HTML5 Canvas and Vanilla JavaScript. Apply professional-grade filters and presets to your photos instantly without uploading them to a server.

### 🕹️ Features
* **Real-time Canvas Editing:** High-performance image rendering using the HTML5 Canvas API and `ctx.filter`.
* **Comprehensive Filter Suite:** Fine-tune brightness, contrast, saturation, hue, blur, and more via interactive sliders.
* **One-Click Presets:** 12 professionally curated styles including *Cyberpunk*, *Noir*, *Vintage*, and *Retro Pop*.
* **Dynamic UI Generation:** Filters and presets are generated dynamically from JavaScript objects for easy extensibility.
* **Instant Download:** Export your edited masterpieces as high-quality PNG files directly from the browser.
* **Dark Mode Aesthetic:** A modern, deep-gray interface designed to make your colors pop.

### 🚀 Quick Start
1.  **Clone or download** the repository.
2.  **Ensure** your file structure has `styles/` and `scripts/` folders containing the provided CSS and JS.
3.  **Open `index.html`** in any modern web browser.
4.  **Click Choose Image** to load a photo and start experimenting!

### 🔗 Live Demo
Check out the working project here: 👉 [https://image-editor-piyush.vercel.app]

### 🛠️ Technical Overview
* **Image Processing:** Utilizes the `CanvasRenderingContext2D.filter` property for hardware-accelerated visual effects.
* **State Management:** Maintains a centralized `filters` object that syncs slider values with the canvas render loop.
* **Non-Destructive Workflow:** The "Reset" functionality restores the original image state by clearing the canvas and resetting the filter object.
* **Responsive Design:** Uses CSS Custom Properties (Variables) and Flexbox to ensure the editor remains functional across different screen sizes.

Made by [https://github.com/PiyushMishraX]