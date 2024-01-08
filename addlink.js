$(document).ready(function () {
  var asins = []
  $("input[name='asin']").each(function () {
    const asin = $(this).val()
    if (asins.indexOf(asin) == -1) {
      asins.push(asin)
    }
  })

  $('.adbl-library-item').each(function (index) {
    const thisAsin = asins[index]
    console.log(asins[index])
    const bookUrl = 'https://' + document.domain + '/webplayer?asin=' + thisAsin
    $(this).after(
      "<a href='" +
        bookUrl +
        "' target='_blank'><button>Play in Tab</button></a>",
    )
  })

  // Play in tab on the page of the book
  $("button[name='playButton']").each(function () {
    const asin = $(this).attr('asin')
    const bookUrl = 'https://' + document.domain + '/webplayer?asin=' + asin
    $(this).parent().after(
      "<a href='" +
        bookUrl +
        "' target='_blank'><button>Play in Tab</button></a>",
    )
  })
})
