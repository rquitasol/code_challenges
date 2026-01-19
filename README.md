# Code Challenges - Next.js Edition 🚀

A modern Next.js web application featuring JavaScript coding challenges organized into three categories: Fundamentals, Arrays, and Objects.

## Features

- 📚 **50+ JavaScript Challenges** - Practice problems covering fundamental concepts, array manipulation, and object operations
- 🎨 **Beautiful UI** - Modern, responsive design with smooth animations
- 🔍 **Easy Navigation** - Browse challenges by category and navigate between them
- 💻 **Code Solutions** - View working solutions for each challenge
- ✅ **Test Cases** - See example inputs and expected outputs

## Project Structure

```
CodeChallenges/
├── app/
│   ├── layout.js                    # Root layout
│   ├── page.js                      # Home page
│   ├── globals.css                  # Global styles
│   ├── category/
│   │   └── [category]/
│   │       └── page.js              # Category listing page
│   └── challenge/
│       └── [category]/
│           └── [id]/
│               └── page.js          # Individual challenge page
├── data/
│   └── challenges.js                # All challenge data
├── arrays/                          # Original challenge files (legacy)
├── fundamentals/                    # Original challenge files (legacy)
├── objects/                         # Original challenge files (legacy)
├── package.json
└── next.config.js
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
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

## Categories

### 📚 Fundamentals (19 challenges)

Basic JavaScript concepts including strings, numbers, and operators

### 📊 Arrays (17 challenges)

Array manipulation, iteration, and transformation techniques

### 🎯 Objects (14 challenges)

Object creation, property access, and manipulation

## Technology Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **CSS Modules** - Scoped styling
- **Static Site Generation** - Pre-rendered pages for optimal performance

## Converting from Original Project

This project was converted from a collection of standalone JavaScript files into a full-fledged Next.js application. The original challenge files are preserved in their respective folders (arrays/, fundamentals/, objects/) for reference.

## License

This project is for educational purposes.

## Contributing

Feel free to add more challenges or improve the UI!
