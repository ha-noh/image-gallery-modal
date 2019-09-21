# Image Gallery Modal
A self-contained module of HTML, CSS, and JS that can be added to a webpage to create *a simple, responsive image gallery overlay* on click. It's written without any additional libraries or frameworks.

## Why I made this
While there are plenty of tutorials and examples of image galleries that open a larger view modal when one of its images is clicked, the ones that I found weren't quite what I was looking for in terms of modularity and scalability. 

Ideally this module can be inserted into any webpage (with some adjustments), function, and will continue to even as the gallery grows (or shrinks) in size.

As an `<aside>`, it's kind of funny to me that this all started with me googling "clicking on image to enlarge html".

## What does the modal support
The modal is what I consider the essentials, though it is possible what I think that entails could change. For now that means the overlay contains:
* an enlarged view of the image clicked
* a button to close the overlay
* buttons to navigate to the previous and next image in the gallery
* ~~an index to show what image out of x total you are currently viewing~~
* supports arrow key (left and right) navigation and esc keystroke to close

## Contained files
* gallery-modal-overlay.html
* gallery-modal-scripts.js
* gallery-modal-style.css

## Set-up
1. Add the `.gallery-modal-ready` class to the element containing all of the images you want the gallery modal to apply to 
2. Copy the contents of gallery-modal-overlay.html into your webpage, including the `<link>` tag that refers to gallery-modal-style.css
3. Add a `<script>` tag with its src pointing to gallery-modal-scripts.js at the bottom of your webpage


## Notes & Possible issues
* If your webpage has html classes prefixed with `.gallery-modal` or `.modal`, be sure to check that there is no overlap between the classes you already wrote and the classes found in this project. 
* **If your webpage removes or inserts images dynamically, the variable `galleryImages` in gallery-modal-scripts.js has to be moved from the topmost scope** to a local variable in each of the functions it appears in.
* The overlay, i.e. `.gallery-modal-container`, should have a z-index value greater than all elements it should appear in front (on top) of. If you didn't specify the z-index of any elements on your webpage, you can leave the value as is (`z-index: 100`).
* If you wish to change the background color, look in `.gallery-modal-container`. For text color, adjust the values in the `.gallery-modal-button` selector.
* The button controls on the modal may appear small if the webpage is not pixel-density independent. Try including a rule like `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to make the modal more responsive.
* Currently there is no way to exempt an image from having the modal applied if it's contained in the div marked with the `.gallery-modal-ready` class.

## Future changes & additions