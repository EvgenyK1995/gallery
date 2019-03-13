import './main.styl';
import $ from 'jquery';

$('.uploader__btn').change(function() {
	console.log(this.files);
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
			$('.main-image').html('<img src="' + theUrl + '" class="img-' + index + '" alt="mainImg" />');
			console.log('done: '+ index);
		} else {
			$('.other-images').append('<img src="' + theUrl + '" alt="otherImg" />');
			console.log('done: '+ index);
		}
	};
	reader.readAsDataURL(file);
}
