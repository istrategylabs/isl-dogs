# UX Engineer Requirements

First, paste this code into the `<main>` element:

```html
<div data-template>
    <img src="{{ url }}" />
</div>
```

Any markup you put inside this `<div>` will automatically be used as a template for every photo from the API (the photos should appear on page load). You can add any markup inside this template that you like, and add styles in `static/style.css`.

1. Each photo should be accompanied by the following UI elements:
   - A button to "like" the dog
   - A button to "hide" the dog (this should hide the photo)
   - A button to "expand" the dog (this should display the photo at a larger size)
   - For both "liking" and "hiding," the user's choices do not need to persist across sessions, but should be tracked until the user exits the page
2. The user should be able to toggle between viewing thumbnail versions of the photos and seeing them at their actual proportions (not necessarily actual _sizes_).

Beyond these requirements, the page should look both beautiful and usable. We'll evaluate your response not only on the code you write, but also on:

- Your design choices (typography, layout, hierarchy, color palette, etc.)
- How accessible the site is (keyboard navigation, ARIA tags, etc.)

While you don't have to optimize for a mobile/touch device, the page should be responsive and scale to any screen size.

[Back to README](README.md#installation)
