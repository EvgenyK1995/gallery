import './main.styl';
import $ from 'jquery';
import jqui from 'jqueryui';

$(document).ready(function() {
	$(function() {
		$('.draggable').draggable({
			containment: 'parent'
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
			$('.main-image').html('<img src="' + theUrl + '" class="img-' + index + ' main-image__img" alt="mainImg" />');
		} else {
			$('.other-images').append('<img src="' + theUrl + '" class="img-' + index + ' other-images__img" alt="otherImg" />');
		}
	};
	reader.readAsDataURL(file);
}
