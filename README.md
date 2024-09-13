# Rastaurant react website

This project is a rastaurant website built using React.js. The website allows users to browse the menu, order online, and book a table. The website is responsive and includes multiple sections showcasing different food categories like Main Dishes, Breakfast, Drinks, and Desserts.

![image](https://github.com/user-attachments/assets/ff04f2ae-161b-45f1-8bff-3ea4e51fdbef)
![image](https://github.com/user-attachments/assets/8d191cfe-15c3-43b3-9dfc-15797ef6abc6)


## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Features

- **Navbar**: Responsive navigation bar with links to various sections of the website (Home, About, Menu, Pages, Cart).
- **Header Section**: Features the main message "Your Favorite Food Delivered Hot & Fresh" along with options to browse the menu, order online, or book a table.
- **Menu Categories**: Displayed categories include Main Dishes, Breakfast, Drinks, and Desserts, each with a brief description and a link to explore the full menu.
  

## Project Structure
```
movie-stream/
│
├── public/
│   ├── index.html          # Main HTML file
│   └── ...                 # Other public assets
│
├── src/
│   ├── assets/              #Images of website 
│   │   |__ welcome.png
|        
│   ├── App.js              # Root component
|   |__ App.css
│   ├── index.js            # Entry point of the application
│   |__ index.css           # Global and component-specific styles
|   |__ components
|        |__ Navbar
|            |__Navbar.jsx
|            |__Navbar.css
|        |__ index.js
|   |__ constants
|        |__ Images.js
|        |__ index.js
|   |__ container
|        |__ Header
|            |__ Header.jsx
|            |__ Header.css
|        |__ Menu
|            |__ Menu.jsx
|            |__ Menu.css
|        |__ Order
|            |__ Order.jsx
|            |__ Order.css
│
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **CSS**: Custom styles for layout and design.
- **FontAwesome**: Icons used in the UI.
