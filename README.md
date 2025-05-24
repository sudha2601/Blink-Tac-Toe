# 🎮 Emoji Matching Game

A fun and interactive emoji matching game built using **React**. Users are presented with a grid of emojis, and must click on matching pairs to make them vanish from the board. The game tracks the winner and displays a responsive result screen.

---

## 🔧 Tech Stack

- **React** (Frontend Library)
- **Tailwind CSS** (For responsive and utility-first styling)
- **React Router DOM** (For navigation between routes like Home and Game Over)

---

## 😄 Emoji Categories

The game currently uses a variety of fun emoji categories including:
Weather: ['🌞', '🌧️', '⛈️', '❄️'],

Emotions: ['😄', '😢', '😠', '😲'],
  
Transport: ['🚗', '🚲', '✈️', '🚀'],

Emojis are selected and randomized to create a dynamic board each game session.

---

## ✨ “Vanishing” Feature

When two matching emojis are clicked:

1. They are temporarily shown.
2. If they match, the pair “vanishes” from the board using:
   - **Conditional rendering**: Emojis are removed from the state and no longer rendered.
   - **Smooth UI update**: Achieved with React’s reactivity and optional transition classes.

This provides a satisfying match-and-clear experience.

---

## 📱 Responsive Design

- The layout is fully responsive.
- The navbar, buttons, and winner screen adjust smoothly for **mobile**, **tablet**, and **desktop** screens using Tailwind CSS.

---

## 🔄 Game Flow

1. Home screen contains a navbar and profile icon.
2. Players are directed to the game board.
3. Emojis vanish upon correct matching.
4. Winner is declared and shown on a styled Game Over screen.

---

## 🚀 Future Improvements

Given more time, I would enhance the project by:

- Introducing **timed challenges** or **levels**.
- Creating **user login and high score tracking**.
- Adding **animations** for better visual feedback.

---
