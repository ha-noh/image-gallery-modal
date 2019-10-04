# Image Gallery Modal
A self-contained module of HTML, CSS, and JavaScript that can be added to a webpage to create **a simple, responsive image gallery overlay** on click. It's written without any additional libraries or frameworks. Note: I will use the word "modal" and "overlay" interchangeably in this file - mostly because I'm not sure which term would be more meaningful to the reader.

## Why I made this
While there are plenty of tutorials and examples of what I'll refer to as 'image galleries' (code that opens a modal window with a larger view when an image is clicked), the ones that I found weren't quite modular or customizable enough for my personal needs. The goal is for this module to be flexible and usable in any webpage. 

As an `<aside>`, it's kind of funny to me that this all started with googling "clicking on image to enlarge html". I've made a lot of progress since then!

## What does the overlay support
The modal contains only what I consider the essentials, though it is possible these opinions will change. For now that means:
* an enlarged view of the image clicked
* a button to close the overlay
* buttons to navigate to the previous and next image in the gallery
* support for arrow key (left and right) navigation and esc to close
* ~~an index to show what image out of x total you are currently viewing~~

## Contained files
* **gallery-modal.html** - the html needed to display the modal
* **gallery-modal-scripts.js** - code that will change the content of the modal based on user events
* **gallery-modal-style.css** - styling for the modal

## Set-up
1. Add the `gallery-modal-ready` class to the element containing all of the images you want the gallery modal to apply to, e.g. `<div class="gallery-modal-ready">`. *All* the images within this container will be given modal functionality.
2. Copy the contents of gallery-modal.html into your webpage, preferably at the top of your webpage's HTML to reflect where it will appear when rendered. 
3. Include a stylesheet `<link>` tag in your webpage's head that links to the location of your gallery-modal-style.css.
3. Add a `<script>` tag, with its src pointing to your gallery-modal-scripts.js, **at the bottom** of your webpage's HTML (i.e. right before the closing `</body>` tag) to prevent the code from running before the DOM is loaded.

## Usage Notes & Possible Issues
* **The image used in the modal has the same source as the image being clicked on** - if you are using a lower resolution version of your image as a thumbnail or as a responsive element, the module won't work the way it was intended (it will just display a tiny picture).
* **Be wary of the webpage's css from overwriting or conflicting with this module's.** If your webpage has html classes prefixed with `gallery-modal` or `modal`, be sure to check that there is no overlap between the classes you already wrote and the classes found in this module. Make sure you don't have broad css element selectors like `img { ... }` which will override the module. 
* **If your webpage removes or inserts images dynamically, the variable `galleryImages` in gallery-modal-scripts.js has to be moved down from the topmost scope** to a local variable in each of the functions it appears in.
* Currently there is no way to exempt an image from having the modal applied if it's contained in the div marked with the `gallery-modal-ready` class.
* Furthermore, **all** imgs contained within divs marked with `gallery-modal-ready` will be compiled into a single gallery. Therefore, if you have (for example) 3 divs on a single page for concept art, 3D models, and paintings, they will all share a single modal. If you want each to have their own separate modal, you would have to implement some code to mark only the active gallery with the `gallery-modal-ready` class.
* The overlay, i.e. `gallery-modal-container`, should have a z-index value greater than all elements it should appear in front (on top) of. If you didn't specify the z-index of any elements on your webpage, you can leave the value as is (`z-index: 100`).
* If you wish to change the background color, look in `.gallery-modal-container`. For text/button color, adjust the values in the `.gallery-modal-button` selector.
* The button controls on the modal may appear small if the webpage is not pixel-density independent. Try including a rule like `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to make the modal, and your webpage, more responsive.

## Demo
https://imgur.com/a/SXGo1nz