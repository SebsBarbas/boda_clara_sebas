# Wedding Website - Victoria & Vicente

A beautiful, responsive wedding invitation website with an embroidered fabric aesthetic.

## Features

- **Responsive Design**: Optimized for both mobile and desktop devices
- **Clean Architecture**: Modular structure for easy customization
- **Embroidered Aesthetic**: Styled to mimic a hand-embroidered fabric design
- **Smooth Animations**: Elegant transitions and entrance effects
- **Interactive Navigation**: Click menu items to view different sections

## Project Structure

```
boda_webpage/
├── index.html              # Main HTML file
├── styles/
│   ├── reset.css           # CSS reset and base styles
│   ├── main.css            # Main stylesheet (imports components)
│   ├── responsive.css      # Responsive breakpoints
│   └── components/
│       ├── header.css      # Header (date and names) styles
│       ├── illustration.css # Champagne glasses illustration styles
│       ├── navigation.css  # Navigation menu styles
│       └── content.css     # Content sections styles
├── js/
│   └── main.js             # Main JavaScript functionality
└── README.md               # This file
```

## Customization Guide

### Changing Colors

The color scheme is defined in the component CSS files. Main colors:
- **Purple/Rose**: `#8b6f7d` (used for date and navigation)
- **Green**: `#6b8e6b` (used for names and glass outlines)
- **Background**: `#f5f1e8` (fabric beige)

### Modifying Content

1. **Date and Names**: Edit the `.header` section in `index.html`
2. **Menu Items**: Modify the `.nav-list` in `index.html`
3. **Section Content**: Update the `.content-section` divs in `index.html`

### Adding New Sections

1. Add a new `<li>` item in the `.nav-list` with a `data-section` attribute
2. Add a corresponding `<section>` in `.content` with matching `id`
3. The JavaScript will automatically handle the navigation

### Styling Adjustments

- **Fonts**: Change font-family in `styles/reset.css`
- **Spacing**: Adjust margins and padding in component CSS files
- **Animations**: Modify transition values in `js/main.js`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design tested on various screen sizes

## Development

Simply open `index.html` in a web browser. No build process or dependencies required.

For local development with live reload, you can use:
- Python: `python -m http.server 8000`
- Node.js: `npx http-server`
- VS Code Live Server extension

## License

This project is created for personal use. Feel free to modify as needed.

