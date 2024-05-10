# E-Commerce Admin 🛍️

(You can see the Store at my other repo [HERE](https://github.com/guillaume-flambard/nextjs-e-commerce-store))

`E-commerce Admin` is a starter template made with Next.js 14, allowing you to quickly create an e-commerce administration interface.

---
<div style="display:flex;">
    <img style:"border-radius:10px;" src="public/dashboard.png" alt="e-commerce-admin" width="350" height="auto" >
    <img style:"border-radius:10px;" src="public/products.png" alt="e-commerce-admin" width="350" height="auto" >
</div>

## 🤔 Why use E-Commerce Admin

`E-Commerce Admin` helps users manage their online store by providing a robust and modern solution for e-commerce administration. With this template, you can manage products, track orders, and handle customer inquiries all in one place.

## 🚀 Quick Start

### 🛠 Install dependencies

### 1.Use NPM ( Recommend )

```bash
npm install
```

### 2.Build

```bash
npm run build
```

### 3.Start the server

```bash
npm run dev
```

## ☔️ Dependencies

- [Next.js 14](https://nextjs.org/)
- [Clerk](https://clerk.dev/) (Authentication)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Cloudinary](https://cloudinary.com/)
- [Stripe API](https://stripe.com/docs/api)
- [ShadcnUI](https://shadcn.github.io/)
- [Zod](https://zod.dev/)

### ⚙️ Configuration

To configure the project, create a `.env.local` file in the root directory and add the following environment variables:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="go to your clerk.dev account to get this key"
CLERK_SECRET_KEY="go to your clerk.dev account to get this key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Prisma
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/e-commerce?schema=public"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="choose a name"

# Stripe
STRIPE_SECRET_KEY="go to your stripe account to get this key"
STRIPE_PUBLIC_KEY="go to your stripe account to get this key"
FRONTEND_STORE_URL=http://localhost:3001 # the url of your store
STRIPE_WEBHOOK_SECRET="go to your stripe account to get this key"
```

### 🙃 Start managing your e-commerce

- Navigate to the admin dashboard at `localhost:3000/admin`
- Use the provided interfaces to manage products, orders, and customer inquiries.