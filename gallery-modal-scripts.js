/* Include this file at the bottom of your webpage, AFTER the elements you wish the modal to run on, so it runs only after the DOM elements have loaded 
 * ex: <script src="yourfolder/gallery-modal-scripts.js"></script>
 *
 */
const imageGalleryModal = (function() {
	//gallery is closed by default, and so no valid image index is available
	let currentImageIndex = -1;

	//listen for user clicks on the modal buttons
	document.querySelector('.modal-close-button').addEventListener('click', () => closeGalleryModal());
	document.querySelector('.modal-close-button').addEventListener('focus', showFeaturesIfHidden);

	document.querySelector('.modal-prev-button').addEventListener('click', () => prevGalleryImage());
	document.querySelector('.modal-prev-button').addEventListener('focus', showFeaturesIfHidden);

	document.querySelector('.modal-next-button').addEventListener('click', () => nextGalleryImage());
	document.querySelector('.modal-next-button').addEventListener('focus', showFeaturesIfHidden);

	document.querySelector('.gallery-modal-image').addEventListener('click', toggleModalFeatures);
	document.querySelector('.gallery-modal-image').addEventListener('mouseout', showFeaturesIfHidden);
	
	// not sure if this works with <picture> elements
	document.querySelector('.gallery-modal-ready').addEventListener('click', () => openGalleryModal(event));

	// event listener; lets arrows keys handle gallery navigation and esc close the modal
	document.addEventListener('keyup', function(e) {
	    let allowedKeys = {
	        37: 'left',
	        39: 'right',
	        27: 'esc'
	    };

	    handleInput(allowedKeys[e.keyCode]);
	});

	/* IMPORTANT:
	 * Move this variable down to local function scopes if your webpage dynamically
	 * adds or removes images from the DOM.
	 */
	const galleryImages = document.querySelectorAll('.gallery-modal-ready img');

	//------Exported Functions------
	const openGalleryModal = function(e) {
		//end operation if click event target is not an image
		if(e.target.nodeName !== 'IMG') return;
		
		loadGalleryImage(e);
		document.querySelector('.gallery-modal-container').classList.toggle('modal-display');
		document.querySelector('.gallery-modal-container').focus();
		toggleGalleryImageFx();
	};

	const closeGalleryModal = function() {
		toggleGalleryImageFx();
		setTimeout(toggleModalDisplay, 100);
		currentImageIndex = -1;
	};

	const prevGalleryImage = function() {
		//if displaying the first image, end operation
		if(currentImageIndex == 0) return;

		currentImageIndex--;
		openGalleryImage();
	};

	const nextGalleryImage = function() {
		//if displaying the last image, end operation
		if(currentImageIndex + 1 ==  galleryImages.length) return;

		currentImageIndex++;
		openGalleryImage();
	};

	//opens an image based on the click event target
	const loadGalleryImage = function(e) {
		document.querySelector('.gallery-modal-image').src = e.target.src;

		//iterate through images to find the current image's index (its position in order)
		for(let x = 0; x < galleryImages.length; x++) {
			if(galleryImages.item(x).src == e.target.src) currentImageIndex = x;
		}
		imageIndexDidUpdate();

		showFeaturesIfHidden();
	};

	//opens an image based on its index in the gallery image list
	const openGalleryImage = function() {
		let newImgSrc = galleryImages.item(currentImageIndex).src;
		document.querySelector('.gallery-modal-image').src = newImgSrc;
		imageIndexDidUpdate();

		showFeaturesIfHidden();
	}


	//------Helper Functions------
	function toggleGalleryImageFx() {
		document.querySelector('.gallery-modal-image').classList.toggle('image-fx');
	}

	function toggleModalDisplay() {
		document.querySelector('.gallery-modal-container').classList.toggle('modal-display');
	}

	//hides or shows all of the gallery modal buttons and the modal index
	function toggleModalFeatures() {
		let buttons = document.querySelectorAll('.gallery-modal-button');
		for(const button of buttons) {
			button.classList.toggle('modal-features-hide');
		}
		document.querySelector('.gallery-modal-index').classList.toggle('modal-features-hide');
	}

	function showFeaturesIfHidden() {
		//no need to check every feature individually since they're always toggled together
		let feature = document.querySelector('.gallery-modal-index');
		//show features if they're currently hidden
		if(feature.classList.contains('modal-features-hide')) {
			toggleModalFeatures();
			return true;
		}
		return false;
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

	//adjusts modal content to reflect the image index, e.g. displaying 2 / 5 
	function imageIndexDidUpdate() {
		const imageIndexString = `${currentImageIndex + 1} / ${galleryImages.length}`;
		//console.log(imageIndexString);
		document.querySelector('.gallery-modal-index').innerText = imageIndexString;
	};

	return {
		openGalleryModal: openGalleryModal,
		closeGalleryModal: closeGalleryModal,
		prevGalleryImage: prevGalleryImage,
		nextGalleryImage: nextGalleryImage
	}
}());