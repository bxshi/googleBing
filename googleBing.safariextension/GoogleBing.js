var baseURL = 'https://www.google.com/search?'
function appendGoogleSearchButton() {
	var parentObj = $('div .b_searchboxForm');
	parentObj.append('<input id="searchGoogle">');

	var searchButton = $('#searchGoogle');

	// set CSS style
	searchButton.css('border','none');
	searchButton.css('width', '32px');
	searchButton.css('height', '32px');
	searchButton.css('background-image', 'url('+safari.extension.baseURI+'google-icon.png)');
	searchButton.css('background-position', '0px 0px');
	searchButton.css('background-repeat', 'no-repeat');
	searchButton.css('border', 'none');

	// set redirect function
	searchButton.click(function() {
		var keyword = $('#sb_form_q').val();
		var targetURL = baseURL+'q='+encodeURIComponent(keyword).replace('%20', '+');
		window.location.replace(targetURL);
	});
}

if (window.location.href.startsWith('https://www.bing.com/search?'))
	appendGoogleSearchButton();
