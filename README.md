# Muzic Quiz App - React App

This is a personal project built by [Ave Nurme](https://www.avenurme.dev).

## Table of contents

- [Overview](#overview)
  - [Project Description](#project-description)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### Project Description

Test your music knowledge with this web app! Can you get all the questions right? ;)

In this React project I'm fetching data from the Open Trivia Database based on user input and the user has the chance to test their knowledge about music history.

Utilizing useState and useEffect (for fetching data) here. I also decided to use useContext for the question index number, user selected answer and score as this data is required in several components.

I'm implementing the Framer Motion library here for those quiz panels to shift smoothly from left to right.

Since fetching data takes a few seconds I added a little spinner on the START! button. The button becomes active after the user has made their choices and the data has been fetched successfully.

### Screenshot

![Screenshot of my solution](/src/images/music_quiz.png)

### Links

- Live Site URL: [Vercel](https://react-muzic-quiz.vercel.app/)

### Built with

- ReactJS

## Author

- Website - [Ave Nurme](https://www.avenurme.dev)
- Github - [@nurme-ave](https://github.com/nurme-ave)