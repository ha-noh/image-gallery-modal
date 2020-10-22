/* TODO: 
 * (1) Find a more efficient solution for determining the gallery index number (faster than linear runtime)
 *
 * HOW TO USE: 
 * (1) Add the "gallery-modal-ready" HTML class to the HTML element that contains the images you wish to affect.
 * (2) Include this file as a script element at the bottom of your webpage (so it only runs after the DOM has loaded), i.e.
 * <script src="yourfolder/gallery-modal-scripts.js"></script>
 */
const imageGalleryModal = (function() {
	//gallery is closed by default, therefore the index is set to a negative value
	let currentImageIndex = -1;

	/* IMPORTANT:
	 * If your webpage dynamically removes or adds images to the DOM,
	 * you will need to use imageGalleryModal.unreadyGallery() before the DOM change,
	 * and imageGalleryModal.readyGallery() after the change is done.
	 */
	let galleryImages = document.querySelectorAll('.gallery-modal-ready img');


	//------Exported Functions------

	const openGalleryModal = function(e) {
		//end operation if click event target is not an image
		if(e.target.nodeName !== 'IMG') return;
		
		loadGalleryImage(e);
		document.querySelector('.gallery-modal__container').classList.toggle('gallery-modal_display');
		document.querySelector('.gallery-modal__container').focus();
		toggleGalleryImageFx();
	};

	const closeGalleryModal = function() {
		toggleGalleryImageFx();
		setTimeout(toggleModalDisplay, 200);
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
		document.querySelector('.gallery-modal__image').src = e.target.src;

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
		document.querySelector('.gallery-modal__image').src = newImgSrc;
		
		imageIndexDidUpdate();
		showFeaturesIfHidden();
	}

	const readyGalleryListener = function() {
		try {
			// not sure if this listener works with <picture> elements
			document.querySelector('.gallery-modal-ready').addEventListener('click', openGalleryModal);
		} 
		catch(error) {
			console.error(error);
			return false;
		}

		//update the list of gallery images
		galleryImages = document.querySelectorAll('.gallery-modal-ready img');
		return true;
	}

	const unreadyGalleryListener = function() {
		document.querySelector('.gallery-modal-ready').removeEventListener('click', openGalleryModal);
		galleryImages = null;
		return true;
	}


	//------Helper Functions------

	function toggleGalleryImageFx() {
		document.querySelector('.gallery-modal__image').classList.toggle('gallery-modal_image-fx');
	}

	function toggleModalDisplay() {
		document.querySelector('.gallery-modal__container').classList.toggle('gallery-modal_display');
	}

	//hides or shows all of the gallery modal buttons and the modal index
	function toggleModalFeatures() {
		let buttons = document.querySelectorAll('.gallery-modal__button');
		for(const button of buttons) {
			button.classList.toggle('gallery-modal_hide-features');
		}
		document.querySelector('.gallery-modal__index').classList.toggle('gallery-modal_hide-features');
	}

	function showFeaturesIfHidden() {
		//no need to check every feature individually since they're always toggled together
		let feature = document.querySelector('.gallery-modal__index');
		//show features if they're currently hidden
		if(feature.classList.contains('gallery-modal_hide-features')) {
			toggleModalFeatures();
			return true;
		}
		return false;
	}

	const handleInput = function(keystroke) {
		//if the modal isn't open, exit
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
		document.querySelector('.gallery-modal__index').innerText = imageIndexString;
	};


	//------ Initialize listeners on buttons and gallery ------

	//modal buttons
	document.querySelector('.gallery-modal__button_close').addEventListener('click', closeGalleryModal);
	document.querySelector('.gallery-modal__button_close').addEventListener('focus', showFeaturesIfHidden);

	document.querySelector('.gallery-modal__button_prev').addEventListener('click', prevGalleryImage);
	document.querySelector('.gallery-modal__button_prev').addEventListener('focus', showFeaturesIfHidden);

	document.querySelector('.gallery-modal__button_next').addEventListener('click', nextGalleryImage);
	document.querySelector('.gallery-modal__button_next').addEventListener('focus', showFeaturesIfHidden);

	document.querySelector('.gallery-modal__image').addEventListener('click', toggleModalFeatures);
	document.querySelector('.gallery-modal__image').addEventListener('mouseout', showFeaturesIfHidden);
	
	document.querySelector('.gallery-modal__button_invisible').addEventListener('click', toggleModalFeatures);

	//listen for clicks on gallery elements
	readyGalleryListener();

	// event listener; lets arrows keys handle gallery navigation and esc close the modal
	document.addEventListener('keyup', function(e) {
	    let allowedKeys = {
	        37: 'left',
	        39: 'right',
	        27: 'esc'
	    };

	    handleInput(allowedKeys[e.keyCode]);
	});

	return {
		open: openGalleryModal,
		close: closeGalleryModal,
		prevImage: prevGalleryImage,
		nextImage: nextGalleryImage,
		readyGallery: readyGalleryListener,
		unreadyGallery: unreadyGalleryListener
	}
}());