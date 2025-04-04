# Jibon Organic - E-commerce App

A Next.js e-commerce application for Jibon Organic products, featuring premium organic oil products such as ghee, mustard oil, and coconut oil.

## Features

- Responsive design with mobile-first approach
- Product browsing with category filtering
- Product details page with add to cart functionality
- Shopping cart with quantity management
- Checkout process with shipping options
- Order confirmation with email notifications

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **State Management**: Zustand
- **Form Handling**: React Hook Form with Zod validation
- **Email Service**: Resend

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/jibon-organic-app.git
cd jibon-organic-app
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables
   Create a `.env.local` file in the root directory with the following variables:

```
RESEND_API_KEY=your_resend_api_key_here
ADMIN_EMAIL=your_email@example.com
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/src/app`: App router pages and layouts
- `/src/components`: Reusable components
- `/src/data`: Mock data for products and categories
- `/src/lib`: Utility functions and server actions
- `/src/store`: State management using Zustand
- `/src/types`: TypeScript type definitions
- `/public`: Static assets including images

## Customization

- Replace placeholder images in `/public/images/` with actual product images
- Update product and category data in `/src/data/index.ts`
- Modify shipping costs in the same file

## Deployment

This application can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/jibon-organic-app)

## License

MIT

---

Developed by Your Name - © 2023
# jibon-organic
