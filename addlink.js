$(document).ready(function() {
	var asins = []
	$("input[name='asin']").each(function() {
		const asin = $(this).val()
		if (asins.indexOf(asin) == -1) {
			asins.push(asin)
		}
	})

	$('.adbl-library-item').each(function(index) {
		const thisAsin = asins[index]
		const bookUrl = "https://www.audible.com/cloudplayer?asin="+thisAsin;
		$(this).after("<a href='"+bookUrl+"' target='_blank'><button>Play in Tab</button></a>")
	})
}
