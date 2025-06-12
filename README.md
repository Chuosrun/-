# Lim Chhay Electronic Store Website

A clean, responsive website for an electronics store with a white, cyan, and yellow color scheme.

## Project Structure

- `index.html`: The main HTML file containing the website structure
- `styles.css`: CSS file with all styling for the website
- `script.js`: JavaScript file for interactive elements

## Features

- Responsive design that works on mobile, tablet, and desktop
- Clean and organized layout with a focus on product display
- Interactive elements like smooth scrolling and cart notifications
- Placeholder images that can be easily replaced with actual product images
- Mobile-friendly navigation menu

## How to Customize

### Replacing Images

All images in the website are using placeholder images. To replace them with your own:

1. Find the `<img>` tags in the HTML file
2. Replace the `src` attribute with the path to your own images
3. Update the `alt` text to describe your images

Example:
```html
<!-- Original -->
<img src="https://via.placeholder.com/200x200?text=Smartphones" alt="Smartphones">

<!-- Replace with -->
<img src="images/your-smartphone-image.jpg" alt="Latest Smartphone Models">
```

### Updating Text Content

To update text content:

1. Open the `index.html` file
2. Find the text you want to change
3. Replace it with your own content

### Changing Colors

The color scheme is defined using CSS variables at the top of the `styles.css` file:

```css
:root {
    --primary-color: #00b8d4; /* Cyan */
    --secondary-color: #ffeb3b; /* Yellow */
    --accent-color: #00e5ff; /* Light Cyan */
    /* other colors */
}
```

To change the colors, simply update these values with your preferred colors.

### Adding More Products

To add more products:

1. Copy an existing product div in the "Featured Products" section
2. Paste it where you want the new product to appear
3. Update the image, title, price, and description

Example:
```html
<div class="product">
    <div class="product-image">
        <img src="your-product-image.jpg" alt="Product Name">
    </div>
    <div class="product-info">
        <h3>Your Product Name</h3>
        <p class="price">$XX.XX</p>
        <p class="description">Your product description here</p>
        <button class="btn">Add to Cart</button>
    </div>
</div>
```

## Additional Features You Can Enable

### Image Slider

There's a commented-out image slider function in the `script.js` file. To enable it:

1. Open `script.js`
2. Uncomment the last line: `// createImageSlider();`
3. Add your own images to the `images` array in the `createImageSlider()` function

## Browser Compatibility

This website is compatible with modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Need Help?

If you need help customizing this website further, please contact the developer. 