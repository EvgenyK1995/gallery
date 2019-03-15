import './main.styl';
import $ from 'jquery';
import jqui from 'jqueryui';

$(document).ready(function() {
	let drag = $('.draggable');
	const dragW = drag.width();
	const dragH = drag.height();
	let drpbl = $('.droppable');

	$(function() {
		drag.draggable({
			containment: 'parent',
			snap: '.droppable',
			snapMode: 'inner'
		});

		drpbl.droppable({
			drop: function () {
				drag.text('in Droppable');
				drag.width(drpbl.width()).height(drpbl.height());
				//console.log();
				//drag.offset({ top: drpbl.offsetTop, left: drpbl.offsetLeft });
			},
			out: function () {
				drag.text('Drag me');
				drag.width(dragW).height(dragH);
			}
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
