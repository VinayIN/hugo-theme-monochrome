---
title: Collapsible and Last Updated Demos
weight: 30
bookcase_cover_src: 'cover/collapse.png'
bookcase_cover_src_dark: 'cover/collapse_dark.png'
---

# Collapsible Shortcode Demo

Use the collapse shortcode to hide lengthy content sections.

{{< collapse title="Read more about collapsible content" collapsed=true >}}
This content is initially hidden. You can place any Markdown here, including lists, code blocks, images, etc.

- Item A
- Item B

```bash
# Code block example
printf "Hello from inside a collapsible!\n"
```
{{< /collapse >}}

# Site Last Updated Demo

Use the last-updated shortcode to display the site's last update time derived from content and Git history.

Last updated: {{< site-last-updated "January 2, 2006" >}}

