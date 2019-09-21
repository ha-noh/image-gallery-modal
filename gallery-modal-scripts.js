/* Include this file at the bottom of your webpage, AFTER the elements you wish the modal to run on, so it runs only after the DOM elements have loaded 
 * ex: <script src="yourfolder/gallery-modal-scripts.js"></script>
 *
 */
const imageGalleryModal = (function(){
	//gallery is closed by default, and so no valid image index is available
	let currentImageIndex = -1;

	// not sure if this works with <picture> elements
	document.querySelector('.gallery-modal-ready').addEventListener('click', evt => openGalleryModal(evt));

	// event listener; lets arrows keys handle gallery navigation and esc close the modal
	document.addEventListener('keyup', function(e) {
	    var allowedKeys = {
	        37: 'left',
	        39: 'right',
	        27: 'esc'
	    };

	    handleInput(allowedKeys[e.keyCode]);
	});

	/* Move this variable down to local function scopes if your webpage dynamically
	 * adds or removes images from the DOM.
	 */
	const galleryImages = document.querySelectorAll('.gallery-modal-ready img');

	//---------- Helper Functions ----------------
	const openGalleryModal = function(evt) {
		if(!(evt.target.nodeName === 'IMG')) return;

		loadGalleryImage(evt);
		document.querySelector('.gallery-modal-container').style.display = 'block';
	};

	const closeGalleryModal = function() {
		document.querySelector('.gallery-modal-container').style.display = 'none';
		currentImageIndex = -1;
	};

	const prevGalleryImage = function() {
		//currently displaying the first image
		if(currentImageIndex == 0) return;
		currentImageIndex--;
		openGalleryImage();
	};

	const nextGalleryImage = function() {
		//currently displaying the last image
		if(currentImageIndex + 1 ==  galleryImages.length) return;
		currentImageIndex++;
		openGalleryImage();
	};

	//opens an image after it's clicked
	const loadGalleryImage = function(e) {
		document.querySelector('#gallery-modal-image').src = e.target.src;

		for(let x = 0; x < galleryImages.length; x++) {
			if(galleryImages.item(x).src == e.target.src) currentImageIndex = x;
		}
	};

	//opens an image from its index in the list of gallery images
	const openGalleryImage = function() {
		let currentImgSrc = galleryImages.item(currentImageIndex).src;
		document.querySelector('#gallery-modal-image').src = currentImgSrc;
	}

	const handleInput = function(keystroke) {
		if(currentImageIndex == -1) return;
		switch(keystroke) {
			case 'left':
				prevGalleryImage();
				break;
			case 'right':
				nextGalleryImage();
				break;
			case 'esc':
				closeGalleryModal();
				break; 
		}
	}

	//optional function for adjusting modal content to reflect the image index, e.g. displaying 2 / 5 
	const updateGalleryIndex = function() {

	};

	const updateModalTabindex = function() {

	};

	//public functions for the modal html to use
	return {
		openGalleryModal: openGalleryModal,
		closeGalleryModal: closeGalleryModal,
		prevGalleryImage: prevGalleryImage,
		nextGalleryImage: nextGalleryImage
	}
}());