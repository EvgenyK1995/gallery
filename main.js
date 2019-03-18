import './main.styl';
import $ from 'jquery';
import jqui from 'jqueryui';

$(document).ready(function() {
	let main = $('.main-image');
	let otherImages = $('.other-images');

	$(function() {
		main.sortable();
		otherImages.sortable({
			connectWith: main
		});
	});
});

$('.uploader__btn').change(function() {
	const len = this.files.length;

	for (let i = 0; i < len; i++) {
		renderImage(this.files[i], i);
	}
});

function renderImage(file, index) {
	const reader = new FileReader();

	reader.onload = function(event) {
		let theUrl = event.target.result;

		if (0 === index) {
			$('.main-image').append('<img src="' + theUrl + '" class="img-' + index + ' main-image__img" alt="mainImg" />');
		} else {
			$('.other-images').append('<div class="draggable"><img src="' + theUrl + '" class="img-' + index + ' other-images__img" alt="otherImg" /></div>');
		}
	};
	reader.readAsDataURL(file);
}
