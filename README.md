# ISL Dogs: An Assignment for You!

Hi there! We're really glad you're here &mdash; if you're reading this, it means that we've enjoyed talking with you and are excited to move forward with this process.

This is a **brief but open-ended** code challenge meant to get a better sense of your front-end development skills in a hands-on environment. **Please don't spend more than two hours on this.** We're not looking for perfection, but want to be able to see your thought process and how you approach problems.

## Overview

This single-page site uses the [Dog API](https://dog.ceo/dog-api/) to fetch (ha!) photos of dogs and display them. Only, it's not working right now 😞. At a bare minimum, we're hoping you can fix some of the bugs in the code and make it functional.

Beyond that, the client (us) has some features for you to implement. Please work on **at least two** of the following:

1. **Layout** &mdash; What might be a better layout for the photos than we have now? Some ideas:
    - Horizontally and vertically centering the photos in their container
    - Creating a horizontally scrolling, single-row layout
    - Making the photos responsive to screen size
2. **Other types of dogs** &mdash; The [Dog API](https://dog.ceo/dog-api/) also has endpoints for other types of dogs (i.e. Chihuahua, Boxer, Terrier). Implement a way to update the view so the user can choose whether to view all dogs or specific types.
3. **Load more dogs** &mdash; The site is hard-coded to show 10 random dogs on page load. Implement a way for the user to load more (and perhaps specify how many they would like to see).
4. **Accessibility** &mdash; The experience of this site could be better for users with different devices and abilities. Improve the site's accessibility.
5. **`Like` and `dislike` dogs** &mdash; Implement a way for a user to `like` or `dislike` a dog and display this visually. It does not have to persist (i.e. in cookies or other storage).
6. **Animations** &mdash; Along with other features, implement animations for actions such as loading content from the API or liking/disliking. (Design skills aren't required for this position, but we'd love to see what you come up with...)
7. **Sharing** &mdash; Implement a way for a user to share a dog (to the network(s)) of your choosing, as well as share the entire site.
8. **Wild Card** &mdash; If you've got a great idea for a feature that isn't listed here, go for it! Make sure to describe it in detail in `NOTES.md` and let us know what it is.

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

Outside of Google Fonts, there are no external dependencies. We encourage you to keep it that way and stick to vanilla JS and CSS! If you decide to add a library or framework, please make note of what it is and why you're using it.

## Finishing Up

Edit `NOTES.md` and describe the work you did (which features you implemented), and anything else you want us to know about your thought process and general strategy. Then, once you're all done, ZIP up the directory, and send it to us as an attachment in an email. 

Thank you for reading this far, thank you for your interest in this position, and thank you again for your time! We are so excited to see what you come up with 🌱.