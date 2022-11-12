# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-yLzNu1uDhn](https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-yLzNu1uDhn)
- Live Site URL: [https://seranela.github.io/base-apparel-coming-soon/](https://seranela.github.io/base-apparel-coming-soon/)

## My process

### Built with

- HTML5
- CSS
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow

### What I learned

The `input` doesn't seem to allow the use of the `::after` pseudo selector. I was going to use it to show the red warning icon graphic. Instead, I used the `:invalid` selector to show it as a background to the input when the form isn't valid. I think this approach is better anyways since the show/hide is handled by pure CSS.

## Author

- Frontend Mentor - [@seranela](https://www.frontendmentor.io/profile/seranela)