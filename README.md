# Image Gallery Modal
A self-contained collection of HTML, CSS, and JS that can be added to a webpage to create *a simple, responsive image gallery overlay* on click. It's written without any additional libraries or frameworks.

## Why I made this
While there are plenty of tutorials and examples of image galleries that open a larger view modal when one of its images is clicked, the ones that I found weren't quite what I was looking for in terms of modularity and scalability. 

Ideally this module can be inserted into any webpage (with some adjustments), and will create the necessary html without the user having to create a separate element, and specify a unique source address, for every modal image. As the gallery grows, it shouldn't become more tedious to add additional images. Automation is the dream.

## What does the modal support
The modal is what I consider the essentials, though it is possible what I think that entails could change. For now that means the overlay contains:
* an enlarged view of the image clicked
* a button to close the overlay
* buttons to navigate to the previous and next image in the gallery
* an index to show what image out of x total you are currently viewing

## Contained files
* gallery-modal-overlay.html
* gallery-modal-scripts.js
* gallery-modal-style.css

## How to use 


## Things to note
* If your webpage has html classes prefixed with `.gallery-modal` or `.modal`, be sure to check that there is no overlap between the classes you already wrote and the classes found in this project. 
* The overlay, i.e. `.gallery-modal-container`, should have a z-index value greater than all elements it should appear in front (on top) of. If you didn't specify the z-index of any elements on your webpage, you can leave the value as is (z-index: 100).

## Future changes & additions
1. Maybe have two sets, one for a version where [A] the module builds the gallery from scratch, and [B] one where it controls only the modals, and overlays it on top of the webpage (currently functionality as of 9/2019)
