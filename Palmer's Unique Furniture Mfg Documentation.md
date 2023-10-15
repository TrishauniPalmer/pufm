**Table of Contents**

1. **Introduction**
2. **HTML Structure**
3. **CSS Styles**
4. **JavaScript Functionality**
5. **Media Queries for Responsiveness**

------

**1. Introduction**

This documentation provides an overview of the HTML, CSS, and JavaScript code for the Palmer's Unique Furniture Manufacturing website. The website showcases custom-made furniture and includes sections for "About," "Gallery," and "Contact."

------

**2. HTML Structure**

The HTML structure consists of several sections that organize the content of the website.

- **Header Section** (`<section class="page-header">`):
  - Contains the website title and navigation links.
- **About Section** (`<section id="para">`):
  - Provides information about Palmer's Unique Furniture Manufacturing, its dedication to craftsmanship, and its legacy.
- **Gallery Section** (`<section id="images">`):
  - Displays images of the furniture gallery.
  - Includes a "Load More" button that dynamically loads additional images when clicked.
- **Contact Section** (`<footer id="footer">`):
  - Displays contact information, including an email address that is clickable.

------

**3. CSS Styles**

The CSS styles define the visual appearance of the website. Here's an overview of the key style elements:

- **Background Styles**:
  - Background images and gradients are applied to create an appealing visual background.
- **Header Styles**:
  - Custom fonts and styles are used for the website title and tagline.
  - Navigation links are styled with colors and hover effects.
- **About Section Styles**:
  - Paragraph text is styled for readability with fonts and padding.
- **Gallery Styles**:
  - Images in the gallery are displayed with fixed dimensions and a border radius.
  - The "Load More" button is styled with background colors and a hover effect.
- **Contact Section Styles**:
  - Contact information and the clickable email address are styled for readability.
- **Media Queries for Responsiveness**:
  - Media queries are used to adjust styles for different screen sizes, making the website responsive.

------

**4. JavaScript Functionality**

JavaScript is used to implement dynamic functionality on the website:

- Load More Images

  :

  - A JavaScript function `loadMoreImages` is called when the "Load More" button is clicked.
  - This function replaces the previously loaded images in the gallery with a new set of images from the `allImages` array.

------

**5. Media Queries for Responsiveness**

Media queries are defined to make the website responsive on different screen sizes:

- For screens with a max width of 768px, the font sizes are adjusted to improve readability.
- For screens with a max width of 480px, further adjustments are made to ensure content fits well on smaller screens.
