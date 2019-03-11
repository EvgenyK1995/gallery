import './main.styl';
import $ from 'jquery';

$('.uploader__btn').click((e) => {
	$(e.target).toggleClass('btn');
});
