# Assignment 03 – Adding Interactivity with JavaScript

**Name:** Sukaina Al-Akwaa  
**Student Number:** 101347833  
**Course:** IMD1005  

---

# Client & Purpose

Make It Charm is a pop-up charm-making and bedazzling experience designed for birthdays, workshops, and small events.

The purpose of this website is to present the brand, explain how the experience works, showcase available packages, and allow users to inquire or book through a contact form.

This project is also being developed as a real concept that I may continue using outside of the course, so I focused on creating a layout and design that could realistically support a small creative business.

---

# Pages Included

### Landing Page (Home)
- Hero section introducing the brand
- "How it works" explanation
- Package previews
- FAQ section

### Supporting Page (Packages)
- Package comparison using CSS Grid
- Detailed package descriptions

### Form Page (Contact)
- Booking and inquiry form
- Input validation and error messages

---

# Features Implemented (Assignment 3)

### 1. Responsive Navigation with Hamburger Menu
- On screens smaller than 768px the navigation collapses into a hamburger icon
- Clicking the icon opens a sliding mobile menu
- Selecting a link closes the menu

### 2. Form Validation with Error Messages
The contact form validates user input before submission.

Validation includes:
- Full name required
- Valid email format required
- Phone number required
- Event date required
- Package selection required
- Event details must contain at least 10 characters

Error messages appear next to the fields and disappear when corrected.

### 3. Back to Top Button
- Appears when the user scrolls down the page
- Smoothly scrolls the page back to the top
- Positioned in the bottom-right corner

### 4. Dynamic Content Rendering (JavaScript)
The FAQ section is generated using JavaScript instead of static HTML.

- FAQ data is stored in a JavaScript array
- A loop creates each FAQ item dynamically
- Each item displays a question and answer

### 5. Accordion FAQ Section
- Clicking a question expands the answer
- Only one FAQ item can be open at a time
- Clicking the question again collapses the answer

---

# Design Improvements Since Assignment 2

- Improved spacing and hierarchy for readability
- Refined gradients and color contrast
- Added interactive navigation for mobile devices
- Improved form structure and validation feedback
- Added interactive FAQ section

---

# Technical Concepts Demonstrated

- Semantic HTML (header, nav, main, section, article, footer)
- Flexbox (navigation and layout structure)
- CSS Grid (package and form layout)
- Responsive design using media queries
- DOM manipulation using JavaScript
- Event listeners
- Dynamic rendering from JavaScript data
- Form validation using JavaScript
- Smooth scrolling interactions

---

# AI Usage Documentation

I used ChatGPT to support the development process by:

- Explaining JavaScript concepts such as event listeners and DOM manipulation
- Debugging issues with form validation
- Helping structure the FAQ data array
- Assisting with the responsive navigation behavior

All generated suggestions were reviewed, adjusted, and implemented by me to ensure I understood the logic before including it in the project.