# JavaScript Focus Requirements

Most of your work will be in `static/script.js`. You will also probably need to edit the markup in `index.html` and style in `static/style.css`. The requirements for this assignment are:

1. On page load, make a request to the [list endpoint](https://dog.ceo/dog-api/documentation/) and populate a dropdown with the results of this data.
   - ** NOTE:** Because of requirement 4, this does **not** need to be a native `<select>` element. However, you should keep in mind accessibility! (Keyboard navigation, ARIA tags, etc.)
2. Whenever the user selects a dog type, 10 dogs of that type appear. (To be clear, we mean _photos_ of random dogs, not dogs themselves. The tech just isn't there yet.)
3. The images should load lazily &mdash; i.e. we should never see an image before it's completely loaded.
4. The user should also be able to enter text into an input, and have the dropdown show the types that match this string. The user should be able to select by using arrow keys, by clicking, or by pressing `enter` / `return`.

Beyond all of these requirements, the page should look beautiful &mdash; or, barring that, should adhere to best practices around typography, hierarchy, color palette, and layout. While you don't have to optimize for a mobile/touch device, the page should be responsive and scale to any screen size.

[Back to README](README.md#installation)
