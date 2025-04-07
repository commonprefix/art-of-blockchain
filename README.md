# The Art of Blockchain Programming Documentation

This repository contains the documentation for The Art of Blockchain Programming, a guide to take you from zero to hero in the world of web3.

## Instructions

1. Install [Node.js](https://nodejs.org/) (version >= 18.0)
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. The site will be available at `http://localhost:3000`

> For development: Run `npm start` to start the development server. The site will automatically reload when you make changes to the source files.

## Static files

The `/static` directory holds all static files: stylesheets, images, fonts, and documents. For large images, please follow these guidelines:

- Place all images in the `/static/img` directory
- For large images, create a compressed version with width 150px
- Use the suffix `_w150` for compressed images (e.g. `example_w150.jpg`)

## Documentation Structure

The documentation is organized into three main sections:

1. **Prerequisites** - Fundamental web2 knowledge required before diving into blockchain development
2. **Foundations** - Core blockchain concepts and technologies
3. **Specialization** - Deep dives into specific blockchain platforms

## Contributing

1. Create a new branch for your changes
2. Make your changes following the existing documentation structure
3. Test locally using `npm start`
4. Submit a pull request with a clear description of your changes

## Deployment

The site is automatically deployed to Vercel when changes are pushed to the main branch. Make sure to:

1. Ensure the build succeeds by running `npm run build` locally 
2. Verify all links are working