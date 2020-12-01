# Image Gallery Modal
A plug-and-play module that turns any webpage's images into a functional modal gallery via a single HTML class. It is self-contained and written with vanilla HTML, CSS, and JavaScript with no additional libraries or frameworks.

## Why I made this
While there are plenty of tutorials and examples for what I'll refer to as 'image galleries' (a modal that shows a larger view of an image), the ones that I found weren't quite modular or customizable enough for my personal needs. The goal is for this module to be flexible and usable in any webpage. 

As an `<aside>`, it's kind of funny to me that this all started with the google search "clicking on image to enlarge html". I've made a lot of progress since then!

## What does the overlay support
The modal contains only what I consider the essentials, though it is possible these opinions will change. For now that means:
* an enlarged view of the image clicked
* a button to close the overlay
* buttons to navigate to the previous and next image in the gallery
* support for arrow key (left and right) navigation and esc to close
* an index to show what image out of x total you are currently viewing

## Contained files
* **gallery-modal.html** - the html needed to display the modal
* **gallery-modal-scripts.js** - code that will change the content of the modal based on user events
* **gallery-modal-style.css** - styling for the modal

## Set-up
1. Add the `gallery-modal-ready` class to the element containing all of the images you want the gallery modal to apply to, e.g. `<div class="gallery-modal-ready">`. *All* the images within this container will be given modal functionality.
2. Copy the contents of gallery-modal.html into your webpage, preferably at the top of your webpage's HTML to reflect where it will appear when rendered. 
3. Include a stylesheet `<link>` tag in your webpage's head that links to the location of your gallery-modal-style.css.
3. Add a `<script>` tag, with its src pointing to your gallery-modal-scripts.js, **at the bottom** of your webpage's HTML (i.e. right before the closing `</body>` tag). This prevents the code from running before the DOM is loaded.

## Usage Details & Possible Issues
* **The image used in the modal has the same source as the image being clicked on** - if you are using a lower resolution version of your image as a thumbnail or as a responsive element, the module won't work the way it was intended (it will just display a tiny picture).
* **Be wary of the webpage's css from overwriting or conflicting with this module's.** ~~If your webpage has html classes prefixed with `gallery-modal` or `modal`, be sure to check that there is no overlap between the classes you already wrote and the classes found in this module. Make sure you don't have broad css element selectors like `img { ... }` which will override the module.~~
The HTML class names have been updated to follow the BEM naming convention, so a name conflict should be much less likely now.
* **If your webpage removes or inserts images dynamically, the variable `galleryImages` in gallery-modal-scripts.js has to be moved down from the topmost scope** to a local variable in each of the functions it appears in.
* Currently there is no way to exempt an image from having the modal applied if it's contained in the div marked with the `gallery-modal-ready` class.
* Furthermore, **all** imgs contained within divs marked with `gallery-modal-ready` will be compiled into a single gallery. Therefore, if you have (for example) 3 divs on a single page for concept art, 3D models, and paintings, they will all share a single modal. If you want each to have their own separate modal, you would have to implement some code to mark only the active gallery with the `gallery-modal-ready` class. I have provided ready/unready functions to prime the click event listener should you go this route.
* The overlay, i.e. `gallery-modal-container`, should have a z-index value greater than all elements it should appear in front (on top) of. If you didn't specify the z-index of any elements on your webpage, you can leave the value as is (`z-index: 10`).
* If you wish to change the background color, look in `.gallery-modal-container`. For text/button color, adjust the values in the `.gallery-modal-button` selector.
* The button controls on the modal may appear small if the webpage is not pixel-density independent. Try including a rule like `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to make the modal, and your webpage, more responsive.

## Demo
Open the `demo/demo.html` file in you preferred web browser.
I also use this module on my personal site, https://ha-noh.github.io/gallery.
