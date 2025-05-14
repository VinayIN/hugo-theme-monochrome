---
title: 'Regular Page (Collapsible)'
bookcase_cover_src: 'cover/catalogue.png'
bookcase_cover_src_dark: 'cover/catalogue_dark.png'
collapse: true
---

This is a regular page in the bookcase layout that demonstrates the collapsible content feature. The content of this page is initially collapsed and can be expanded by clicking on the title.

## Using the Collapse Feature

The collapsible content feature is useful for pages with extensive content that might otherwise overwhelm visitors. By setting `collapse: true` in the front matter, you can provide a cleaner initial view.

### How to Enable

Simply add the following to your page's front matter:

```yaml
---
collapse: true
---
```

## When to Use Collapsible Content

Collapsible content is ideal for:

1. Documentation pages with detailed explanations
2. Tutorial pages where users may want to focus on one section at a time
3. FAQ pages where multiple questions and answers are displayed
4. Any content that benefits from progressive disclosure

By using this feature appropriately, you can enhance the readability and user experience of your Hugo site.
