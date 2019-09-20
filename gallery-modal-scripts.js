function run() {
	//save the NodeList of all gallery images globally
	const galleryImages = document.querySelectorAll('.gallery-modal-ready img');

	//gallery is closed by default, and so no valid image index is available
	let currentImageIndex = -1;

	// event listener; also support arrow key navigation
	// not sure if this works with <picture> elements
	document.querySelector('.gallery-modal-ready').addEventListener('click', evt => openGalleryModal(evt));
}

// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') run();
});

function openGalleryModal(evt) {
	if(!(evt.target.nodeName === 'IMG')) return;

	document.querySelector('#gallery-modal-image').src = evt.target.src;
	document.querySelector('.gallery-modal-container').style.display = 'block';
}

function closeGalleryModal() {

}

function nextGalleryImage() {

}

function loadGalleryImage() {

}

function prevGalleryImage() {

}

function updateGalleryIndex(index, totalCount) {

}

function updateModalTabindex() {

}