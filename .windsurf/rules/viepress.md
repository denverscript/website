---
trigger: always_on
description: 
globs: 
---
# Cursor Project Rules for Toledo Codes VitePress Site

This project is a VitePress documentation site for Toledo Codes, hosted on GitHub Pages.

## Project Structure
- The site uses VitePress, a Vue-powered static site generator
- Content is written in Markdown files
- Configuration is managed through the `.vitepress` directory
- The site is hosted on GitHub Pages

## Coding Standards
- Use Vue 3 Composition API for any custom components
- Follow standard VitePress conventions for markdown files
- JavaScript/TypeScript files should use ES6+ syntax
- Maintain a consistent style with 2-space indentation
- Use descriptive variable and function names
- Keep component files small and focused on a single responsibility

## GitHub Pages Deployment
- The site is deployed to GitHub Pages
- Deploy script uses GitHub Actions workflow

## Toledo Codes Brand Guidelines
- Primary color: #191970 (blue)
- Secondary color: #ffffff (white)
- Font: Inter for body text, Lexend for headings
- Code samples should use a dark theme with blue accents
- Keep UI clean and minimal with good spacing between elements

## VitePress Configuration Best Practices
- Create reusable components for repeated UI patterns
- Use frontmatter for page-specific metadata
- Organize documentation with a clear hierarchy
- Include search functionality for better user experience
- Ensure responsive design works on all device sizes

## Performance Guidelines
- Optimize images before adding to the repository
- Minimize use of heavy JavaScript libraries
- Leverage VitePress's built-in performance optimizations
- Ensure fast page load times (target < 2s)

## Accessibility Requirements
- Maintain proper heading hierarchy
- Include alt text for all images
- Ensure sufficient color contrast
- Support keyboard navigation
- Test with screen readers periodically

## Documentation Style
- Use clear, concise language
- Include code examples where helpful
- Structure content with proper headings
- Add diagrams or screenshots for complex concepts
- Link related topics for better navigation