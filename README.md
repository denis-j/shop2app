# shop2app

A modern e-commerce homescreen built with Next.js and TypeScript, featuring a Shopify-like product display.

## Features

- 🏠 Beautiful homescreen with featured products
- 🛍️ Product grid layout with 8 test products
- 📱 Responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with smooth animations and hover effects
- 🧩 Reusable ProductCard component
- 💙 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
shop2app/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage with product grid
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   └── ProductCard.tsx    # Product display component
├── data/                  # Test data
│   └── products.ts        # 8 test products
├── types/                 # TypeScript types
│   └── product.ts         # Product interface
└── package.json           # Dependencies and scripts
```

## Test Products

The homescreen displays 8 test products across different categories:
- Electronics (Wireless Headphones, Smart Watch)
- Home & Kitchen (Coffee Maker, Desk Lamp)
- Fashion (Leather Backpack, Sunglasses)
- Sports (Running Shoes, Yoga Mat)