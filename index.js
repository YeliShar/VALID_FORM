	'use strict';

	var formTag=document.forms.INFO; 
	let developersId = document.getElementById('developersId');
	let devSpan = document.getElementById('developersSpan');
	function developersFunc ()	{
	let developers = developersId.value;
	let developersSplit = developers.split('  ');
	if ( developers == '' || developers == ' ' ) {
		devSpan.innerText = 'Вы ввели пустое поле или пробел!';
	}
	else if (developersSplit.length > 1) {
		devSpan.innerText = 'Вы ввели больше двух пробелов!';
	}
	else {
		devSpan.innerText = '';
	}
}
developersId.addEventListener("blur",developersFunc);

	let nameSiteId = document.getElementById('nameSite');
	let nameSiteSpan = document.getElementById('nameSiteSpan');
	function nameSiteFunc() { 
	let nameSite = nameSiteId.value;
	nameSite = nameSite.toLowerCase();
	let cirillica = /а|б|в|г|д|е|ё|ж|з|и|ё|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я/gi;
	if ( nameSite == '' || nameSite == ' ' ) {
		nameSiteSpan.innerText = 'Вы ввели пустое поле или пробел!';
	}
	else if (cirillica.test(nameSite)) {
		nameSiteSpan.innerText = 'Вы ввели русские буквы!';
	}
	else {
		nameSiteSpan.innerText = '';
	}
}
nameSiteId.addEventListener("blur",nameSiteFunc);

	let urlSiteId = document.getElementById('urlSite');
	let urlSiteSpan = document.getElementById('urlSiteSpan');
	function urlSiteFunc() { 
	let urlSite = urlSiteId.value;
	let urlSiteIndexOf = urlSite.indexOf('.com', urlSite.length-5)
	if ( urlSite == '' || urlSite == ' ' ) {
		urlSiteSpan.innerText = 'Вы ввели пустое поле или пробел!';
	}
	else if ( urlSiteIndexOf == -1 ) {
		urlSiteSpan.innerText = 'Введите URL, заканчивающийся на ".com"!';
	}
	else {
		urlSiteSpan.innerText = '';
	}
}
urlSiteId.addEventListener("blur",urlSiteFunc);

	let siteLaunchDateId = document.getElementById('siteLaunchDate');
	let siteLaunchDateSpan = document.getElementById('siteLaunchDateSpan');
	function siteLaunchDateFunc() { 
	let siteLaunchDate = siteLaunchDateId.value;
	let siteLaunchDateNoPoint = siteLaunchDate.split('.').join('');
	let siteLaunchDateNumder = parseInt(siteLaunchDateNoPoint);
	let siteLaunchDateSplit = siteLaunchDate.split('.');
	let dataSiteLaunchDate = new Date(siteLaunchDateSplit[2], siteLaunchDateSplit[1]-1, siteLaunchDateSplit[0])
	let dataFirstSite = new Date('1991-08-06');
	if ( siteLaunchDate == '' || siteLaunchDate == ' ' ) {
		siteLaunchDateSpan.innerText = 'Вы ввели пустое поле или пробел!';
	}
	else if ( isNaN(siteLaunchDateNumder)) {
		siteLaunchDateSpan.innerText = 'Введите только цифры!';
	}
	else if (dataSiteLaunchDate < dataFirstSite) {
		siteLaunchDateSpan.innerText = 'Введите дату, больше чем "06.08.1991"!';
	}
	else {
		siteLaunchDateSpan.innerText = '';
	}
}
siteLaunchDateId.addEventListener("blur",siteLaunchDateFunc);

	let visitorsDayId = document.getElementById('visitorsDay');
	let visitorsDaySpan = document.getElementById('visitorsDaySpan');
	function visitorsDayFunc() { 
	let visitorsDay = visitorsDayId.value;
	let visitorsDayNumber = Number(visitorsDay);
	if ( visitorsDay == '' || visitorsDay == ' ' ) {
		visitorsDaySpan.innerText = 'Вы ввели пустое поле или пробел!';
	}
	else if ( isNaN(visitorsDayNumber)) {
		visitorsDaySpan.innerText = 'Введите только цифры!';
	}
	else {
		visitorsDaySpan.innerText = '';
	}
}
visitorsDayId.addEventListener("blur",visitorsDayFunc);

	let emailComId = document.getElementById('emailCom');
	let emailComSpan = document.getElementById('emailComSpan');
	function emailComFunc() { 
	let emailCom = emailComId.value;
	if ( emailCom == '' || emailCom == ' ' ) {
		emailComSpan.innerText = 'Вы ввели пустое поле или пробел!';
	}
	else if ( !emailCom.includes("@") ) {
		emailComSpan.innerText = 'Введите E-mail с символом "@"';
	}
	else {
		emailComSpan.innerText = '';
	}
}
emailComId.addEventListener("blur",emailComFunc);

	let commentId = document.getElementById('comment');
	let commentSpan = document.getElementById('commentSpan');
	function commentFunc() { 
	let comment = commentId.value;
	if ( comment == '' || comment == ' ' ) {
		commentSpan.innerText = 'Вы ввели пустое поле или пробел!';
	}
	else if ( comment.length < 10 ) {
		commentSpan.innerText = 'Введите больше 10 символов!';
	}
	else {
		commentSpan.innerText = '';
	}
}
commentId.addEventListener("blur",commentFunc);

	let catalogHeadingId = formTag.elements.catalogHeading;
	let catalogHeadingSpan = document.getElementById('catalogHeadingSpan');
	function catalogHeadingFunc() { 
	let catalogHeading = catalogHeadingId.value;
	if (catalogHeading == 'appliances') {
		catalogHeadingSpan.innerText = 'Выберете иной вариент, чем "Бытовая техника"!';
	}
	else {
		catalogHeadingSpan.innerText = '';
	}
}
catalogHeadingId.addEventListener("change",catalogHeadingFunc);

	let reviewsId = document.getElementById('reviews');
	let reviewsSpan = document.getElementById('reviewsSpan');
	function reviewsFunc() { 
	let reviews = reviewsId.checked;
	if ( !reviews ) {
		reviewsSpan.innerText = 'Поставьте галочку!';
	}
	else {
		reviewsSpan.innerText = '';
	}
}
reviewsId.addEventListener("change",reviewsFunc);

	let accommodationId = formTag.elements.accommodation;
	let accommodationP = document.getElementById('accommodationP');
	function accommodationFunc() { 
	let accommodationSpan = document.getElementById('accommodationSpan');
	let accommodation = accommodationId.value;
	if (accommodation == '') {
		accommodationSpan.innerText = 'Вы не выбрали вариант размещения!';
	}
	else if (accommodation == 'Бесплатное'){
		accommodationSpan.innerText = 'Бесплатно нельзя!';
	}
	else {
		accommodationSpan.innerText = '';
	}
}
console.log(accommodationId);
accommodationP.addEventListener("click", accommodationFunc);

function submitSite(EO) {
	EO=EO||window.event;

	developersFunc();
	nameSiteFunc();
	urlSiteFunc();
	siteLaunchDateFunc();
	visitorsDayFunc();
	emailComFunc();
	commentFunc();
	catalogHeadingFunc();
	accommodationFunc();
	reviewsFunc();

	let developersMess = document.getElementById('developersSpan').innerText;
	let nameSiteMess = document.getElementById('nameSiteSpan').innerText;
	let urlSiteMess = document.getElementById('urlSiteSpan').innerText;
	let siteLaunchDateMess = document.getElementById('siteLaunchDateSpan').innerText;
	let visitorsDayMess = document.getElementById('visitorsDaySpan').innerText;
	let emailComMess = document.getElementById('emailComSpan').innerText;
	let commentMess = document.getElementById('commentSpan').innerText;
	let catalogHeadingMess = document.getElementById('catalogHeadingSpan').innerText;
	let reviewsMess = document.getElementById('reviewsSpan').innerText;
	let accommodationMess = document.getElementById('accommodationSpan').innerText;

	if (developersMess !='') {
		developersId.scrollIntoView();
		developersId.focus(); 
		EO.preventDefault();
	}
	else if (nameSiteMess !='') {
		nameSiteId.scrollIntoView();
		nameSiteId.focus();
		EO.preventDefault();
	}
	else if (urlSiteMess !='') {
		urlSiteId.scrollIntoView();
		urlSiteId.focus();
		EO.preventDefault();
	}
	else if (siteLaunchDateMess !='') {
		siteLaunchDateId.scrollIntoView();
		siteLaunchDateId.focus();
		EO.preventDefault();
	}
	else if (visitorsDayMess !='') {
		visitorsDayId.scrollIntoView();
		visitorsDayId.focus();
		EO.preventDefault();
	}
	else if (emailComMess !='') {
		emailComId.scrollIntoView();
		emailComId.focus();
		EO.preventDefault();
	}
	else if (catalogHeadingMess !='') {
		catalogHeadingId.scrollIntoView();	
		catalogHeadingId.focus();	
		EO.preventDefault();
	} 
	else if (reviewsMess !='') {
		reviewsId.scrollIntoView();	
		reviewsId.focus();	
		EO.preventDefault();
	} 
	else if (accommodationMess !='') {
		accommodationId.scrollIntoView();	
		accommodationId.focus();	
		EO.preventDefault();
	} 
	else if (commentMess !='') {
		commentId.scrollIntoView();	
		commentId.focus();	
		EO.preventDefault();
	} 
	return false;
}
