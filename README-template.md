# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [https://github.com/bhzeuscagd/conference-ticket-generator](https://github.com/bhzeuscagd/conference-ticket-generator)
- Live Site URL: [https://conference-ticket-generator-eight-delta.vercel.app/](https://conference-ticket-generator-eight-delta.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

This project helped me reinforce my skills in handling form validations and file uploads using JavaScript. I learned how to create a drag-and-drop interface for image uploads and how to generate a dynamic ticket based on user input.

```js
// Example of handling file upload
const dropArea = document.querySelector(".upload-area");

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("active");
});
```

### Continued development

I plan to continue improving the accessibility of the form and exploring more advanced image processing techniques in the browser.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - Indispensable for checking HTML and CSS references.

## Author

- Website - [Portfolio](https://portfolio-cagd.vercel.app/)
- Frontend Mentor - [@bhzeuscagd](https://www.frontendmentor.io/profile/bhzeuscagd)
- GitHub - [@bhzeuscagd](https://github.com/bhzeuscagd)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge.
