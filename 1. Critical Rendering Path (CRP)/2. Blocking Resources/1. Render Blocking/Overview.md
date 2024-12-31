## Render Blocking

- Refers to `resources` that `block the browser` from `rendering the page` until they are `completely downloaded and processed`
- The resources which cause to render-blocking includes
  . Javascript (included at `head tag` or `start of the body tag`)
  . CSS (included at `head tag` or `start of the body tag`)
  . Images
  . Web Fonts
  . SVG Files
  . Embedded Video or Audio

## How to fix

- Javascript
  . `async`: download the script asynchronously without blocking the page render
  . `defer`: download the script asynchronously but `execute it only` after the document `has been parsed`
  . Move JavaScript to the bottom
  . Minify and combine scripts

- CSS
  . Inline critical CSS: Place `CSS directly` in the HTML <head>, so it's `immediately available` to the browser.
  . Use `media` attributes: For case when some CSS is only needed `for specific screen sizes` (e.g., for mobile or print)
  . Minimize and combine CSS

- Image
  . Lazy load images
  . Optimize images: compressing, WebP format
