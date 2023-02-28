# profit-margin-calculator

use `vite` + `react-ts` + `tailwindcss` build a profit-margin-calculator

## Install Tailwind CSS with Vite

Create project and select react-ts

```bash
npm create vite@latest my-project -- --template react
cd my-project
```

Installing Tailwind CSS as a PostCSS plugin

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure your template paths in `tailwind.config.cjs`

```cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start your build process

```bash
npm run dev
```

[Read the Docs to Learn More](https://tailwindcss.com/docs/guides/vite#react).


# Reference

- https://github.com/codeofrelevancy/profit-margin-calculator