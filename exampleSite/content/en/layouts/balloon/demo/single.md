---
title: 'balloon layout single demo'
type: 'balloon'
balloon_img_src: "icons/balloon.svg"
balloon_img_src_dark: "icons/balloon_dark.svg"
balloon_circle: false
balloon_resources: "/about"
collapse: true
---

Balloon layout can also be used in regular page. This particular page demonstrates the collapsible content feature of the Monochrome theme, using the `collapse: true` parameter in the front matter.

## How the Collapsible Content Feature Works

When you set `collapse: true` in a page's front matter, the entire content of the page will initially be collapsed. Users can click on the page title to expand or collapse the content.

## Benefits of Collapsible Content

- Saves screen space for lengthy content
- Improves user experience by allowing focused reading
- Makes documentation more manageable
- Ideal for FAQ sections or detailed explanations

## Implementation Details

The collapsible content feature uses HTML, CSS, and JavaScript:

- The collapse state is toggled using JavaScript
- The styling is handled by CSS transitions
- The rendering is managed by Hugo templates

## Code Example

```yaml
---
title: 'My Page Title'
collapse: true
---
```

[Go to list demo](/hugo-theme-monochrome/layouts/balloon/demo)
