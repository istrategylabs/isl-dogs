# ISL Dogs: An Assignment for You!

Hi there! We're really glad you're here &mdash; if you're reading this, it means that we've enjoyed talking with you and are excited to move forward with this process.

This is a **brief but open-ended** code challenge meant to get a better sense of your front-end development skills in a hands-on environment. **Please don't spend more than four hours on this.** We're not looking for perfection, but want to be able to see your thought process and how you approach problems.

## Overview

We'd like to build a site that uses the [Dog API](https://dog.ceo/dog-api/) to fetch (ha!) and display photos of dogs. It should also allow the user to filter dogs by type (i.e. Chihuahua, Boxer, Terrier) &mdash; you should use the Dog API's [JSON endpoint](https://dog.ceo/dog-api/documentation/) to get the data for the list in order to display it.

## Requirements

1. On page load, make a request to the list endpoint and populate a dropdown with the results of this data.
   - ** NOTE:** Because of requirement 4, this does **not** need to be a native `<select>` element. However, you should keep in mind accessibility! (Keyboard navigation, ARIA tags, etc.)
2. Whenever the user selects a dog type, 10 random dogs of that type appear. (To be clear, we mean _photos_ of random dogs, not dogs themselves. The tech just isn't there yet.)
3. The images should load lazily &mdash; i.e. we should never see an image before it's completely loaded.
4. The user should also be able to enter text into an input, and have the dropdown show the types that match this string. The user should be able to select by using arrow keys, by clicking, or by pressing `enter` / `return`.

Beyond all of these requirements, the page should look beautiful &mdash; or, barring that, should adhere to best practices around typography, hierarchy, color palette, and layout. While you don't have to optimize for a mobile/touch device, the page should be responsive and scale to any screen size.

## Installation

Clone this repo, `cd` into the directory, and then:

```
npm install
npm run start
```

^^ _Note:_ The app is a very simple Express.js back-end. No knowledge of Express is required, but you do need to install it. _If you have any questions or issues with the installation process, please let us know right away! We do not want any environment issues to get in the way of the challenge._

Once you run the above commands, visit `http://localhost:3000` in the browser of your choosing to see the site running locally.

The main files you'll be working with are:

```
index.html
static/style.css
script.js
```

When you make changes to any of these files, you should refresh the browser to see them.

There are no external dependencies. We encourage you to keep it that way and stick to vanilla JS and CSS! If you decide to add a library or framework, please make note of what it is and why you're using it.

## Finishing Up

Edit `NOTES.md` and describe the work you did (which features you implemented), and anything else you want us to know about your thought process and general strategy. Then, once you're all done, ZIP up the directory, and send it to us as an attachment in an email.

Thank you for reading this far, thank you for your interest in this position, and thank you again for your time! We are so excited to see what you come up with 🌱.
