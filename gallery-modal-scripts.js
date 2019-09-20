/* Include this file at the bottom of your webpage, AFTER the elements you wish the modal to run on, so it runs only after the DOM elements have loaded 
 * ex: <script src="yourfolder/gallery-modal-scripts.js"></script>
 *
 */
const imageGalleryModal = (function(){
	//----------- Initialization & Global variables ----------

	//gallery is closed by default, and so no valid image index is available
	let currentImageIndex = -1;

	// event listener; also support arrow key navigation
	// not sure if this works with <picture> elements
	document.querySelector('.gallery-modal-ready').addEventListener('click', evt => openGalleryModal(evt));

	//---------- Helper Functions ----------------
	const openGalleryModal = function(evt) {
		if(!(evt.target.nodeName === 'IMG')) return;

		loadGalleryImage(evt);
		document.querySelector('.gallery-modal-container').style.display = 'block';
		console.log(currentImageIndex);
	};

	const closeGalleryModal = function() {
		document.querySelector('.gallery-modal-container').style.display = 'none';
	};

	const prevGalleryImage = function() {

	};

	const nextGalleryImage = function() {

	};

	const loadGalleryImage = function(e) {
		document.querySelector('#gallery-modal-image').src = e.target.src;
	};

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