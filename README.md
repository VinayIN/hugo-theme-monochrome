# Monochrome - Hugo Theme

A clean, fast and responsive Hugo theme for personal websites.

![Monochrome Screenshot](images/screenshot.png)

## Features

- **Clean, minimal design** with ~5KB gzipped CSS
- **Light/Dark mode** with user preference memory
- **Multiple layouts**: Default, Balloon, Bookcase, Gallery, Postcard, and Blank
- **Site search** powered by uFuzzy
- **SEO optimized** with proper metadata support
- **Math support** via MathJax v4
- **Syntax highlighting** options with code copying

## Quick Start

### Option 1: Using Hugo Modules (Recommended)

```bash
# Create a new Hugo site
hugo new site my-personal-site
cd my-personal-site

# Initialize Hugo Modules
hugo mod init github.com/username/my-personal-site

# Add the theme
cat << EOF >> config/_default/module.toml
[[imports]]
path = "github.com/VinayIN/hugo-theme-monochrome"
EOF

# Get the module
hugo mod get

# Run the server
hugo serve
```

## Example Site

An example site is included in the `exampleSite` directory. To use it, you have two options:

### Option 1: Run the example site directly

```bash
# Navigate to the theme directory
cd hugo-theme-monochrome

# Run the server with the example site
cd exampleSite && hugo serve --themesDir ../ --theme .
```

### Option 2: Copy example site to your project

1. Copy its contents: `cp -r themes/monochrome/exampleSite/* .`
2. Update `baseURL` in `config/_default/config.toml`
3. Run the site: `hugo server`

## Customization

- Edit parameters in `config/_default/params.toml`
- Modify navbars in `config/_default/menus.toml`
- Add custom CSS in `assets/css/custom.css`

## Layouts

Different layout types can be specified in front matter:
- Default: Standard content layout
- Balloon: Step-by-step information
- Bookcase: Grid with cover images
- Gallery: Image showcase
- Postcard: Card-style presentation

## Requirements

- Hugo Extended v0.128.0+
- Go v1.23+ (for Hugo Modules)

## Hugo Compatibility

Monochrome requires Hugo Extended version 0.128.0 or higher due to:
- Use of modern Hugo features
- SCSS processing requirements
- Updated pagination syntax (`pagination.pagerSize`)
- Modern template lookup system

## Acknowledgements

Note: This theme was created by referring to the theme created by [kaiiiz/hugo-theme-monochrome](https://github.com/kaiiiz/hugo-theme-monochrome)

This theme integrates these excellent open-source projects:

* [PrismJS/prism](https://github.com/PrismJS/prism) - Syntax highlighting (MIT License)
* [leeoniya/uFuzzy](https://github.com/leeoniya/uFuzzy) - Fuzzy search engine (MIT License)
* [mathjax/MathJax](https://github.com/mathjax/MathJax) - Mathematical notation (Apache-2.0 License)
* [kingdido999/zooming](https://github.com/kingdido999/zooming) - Image zooming (MIT License)
* [feathericons/feather](https://github.com/feathericons/feather) - Feather icons (MIT License)
* [simple-icons/simple-icons](https://github.com/simple-icons/simple-icons) - Brand icons (CC0-1.0 License)

## Encountered Issue?

If you find a bug or have a feature request, [create a new issue](https://github.com/VinayIN/hugo-theme-monochrome/issues/new) with detailed information.
