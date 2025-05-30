This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Document Intelligence Q&A App

This is a Q&A web application built with Next.js (React) as the frontend and Django as the backend. Users can upload documents and ask questions related to those documents via a custom API.

## Features

- Upload and manage documents
- Ask questions and get AI-powered answers
- Clean, responsive UI using Tailwind CSS

## Prerequisites

- Node.js v18 or higher
- Python 3.12 or higher
- Django 5.2+
- SQLite (default database for Django)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Navigate to frontend directory (if separate)
cd frontend

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev

# Create and activate virtual environment
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Run backend server
python manage.py runserver


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx or app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Screenshots

![Home Page/Dashboard](./../screenshots/Dashboard_Screenshot.png)
![Q&A Interface](./../screenshots/QA_Screenshot.png)
![Upload Interface](./../screenshots/Upload_Screenshot.png)

## Sample Questions and Answers
Q: What is the document about?
A: This document provides an overview of the system architecture and setup instructions.

Q: How do I upload a file?
A: Go to the upload page, select a PDF, and submit it to add it to the system.

Q: What technologies are used?
A: The system uses Next.js for the frontend and Django REST Framework for the backend API.

Q: Can I clear the input field?
A: Yes, click the CLEAR button to reset the question and answer fields.

## Learn More


To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
