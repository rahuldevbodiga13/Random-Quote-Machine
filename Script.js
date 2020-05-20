var colors = ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];
var currQuote = '',currAuthor = '';
var quotesData;

$(document).ready(function() {
	$("#new-quote").on('click',getQuote);
});

function getQuotes(){
	return $.ajax({
		url : 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
		success : function(jsonQuotes){
			if(typeof jsonQuotes == 'string'){
				quotesData = JSON.parse(jsonQuotes);
				console.log(quotesData);
			}
		}
	});
}

function getRandomQuotes() {
	return quotesData.quotes[Math.floor (Math.random() * quotesData.quotes.length)];
}

function getQuote() {
	var randomQuote = getRandomQuotes();
	currQuote = randomQuote.quote;
	currAuthor = randomQuote.author;

	$('#text').animate(
	{opacity: 0},
	500,
	function(){
		$(this).animate({opacity:1},500);
		$("#data").html(randomQuote.quote);
	});

	$('#author').animate(
		{opacity:0},
		500,
		function(){
			$(this).animate({opacity:1},500);
			$("#auth").html(randomQuote.author);
	});

	var colorIndex = Math.floor(Math.random() * colors.length);

	$('html body').animate(
	{
		backgroundColor: colors[colorIndex];
		color: colors[colorIndex];
	},1000);

	$('buttons').animate(
	{
		backgroundColor: colors[colorIndex];
	},1000);

}