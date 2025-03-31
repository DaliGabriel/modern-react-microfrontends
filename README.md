# Modern Micro-Frontend Example with React + Vite (No Webpack)

This project demonstrates how to build a modern micro-frontend architecture using **React**, **Vite**, and **native ES Modules**—**without Webpack** or Module Federation.

## Overview

We split the app into two independent frontends:

1. **Home App (host)** – loads and renders the remote component dynamically  
2. **Product App (remote)** – builds a self-contained ES module (via Vite) and exposes a React component

## Project Structure

```
microFrontendExample/
│
├── home-app/          # Host app (React + Vite)
└── product-app/       # Remote micro-frontend (React + Vite)
```

---

## Features

- No Webpack or Module Federation
- Dynamic `import()` of remote components
- Production-ready Vite build
- Cross-origin support with CORS
- Clean separation between frontends
- Optional versioning, CDN hosting, and environment setup

---

## How It Works

### 1. Product App (Remote)

- Built as a library using Vite’s `build.lib` config
- Output: `product-list.js` (ES module)
- Can be hosted on a CDN, subdomain, or simple static server

```jsx
// Home App dynamically loads this
const ProductList = () => (
  <div>
    <h2>Products</h2>
    <ul>
      <li>Phone</li>
      <li>Laptop</li>
    </ul>
  </div>
);
```

### 2. Home App (Host)

- Uses `import("http://localhost:3001/product-list.js")` to fetch the module
- Renders the remote React component inside the local React app
- Works with Suspense or error boundaries for better UX

```jsx
useEffect(() => {
  import("http://localhost:3001/product-list.js")
    .then((mod) => setRemoteComponent(() => mod.default))
    .catch(console.error);
}, []);
```

---

## Dev Setup

### 1. Start the remote app

```bash
cd product-app
npm install
npm run build
npx serve dist --cors -l 3001
```

### 2. Start the host app

```bash
cd home-app
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## Production Tips

- Add CORS headers based on allowed origins
- Version or hash remote JS files to avoid cache issues
- Use `.env.production` for safe, scoped environment variables
- Optional: Serve remotes from CDN, subdomains, or isolated backends

---

## Credits

Built by GDRA — feel free to fork and extend!

---

## License

MIT