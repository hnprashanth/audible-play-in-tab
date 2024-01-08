$(document).ready(function () {
  var asins = []
  var buttonStyle = `
  <style>
    .custom-play-button {
      background-color: #FF9900;
      padding: 10px 20px; /* Adjust space around the button */
      border: none; /* Remove default border */
      color: black; /* Text color */
      cursor: pointer; /* Change cursor to indicate it's clickable */
      margin: 5px; /* Space around the button */
      transition: background-color 0.3s; /* Smooth transition for color change */
    }
    .custom-play-button:hover {
      background-color: #FFB84D; /* Lighter shade on hover */
    }
  </style>
`;
  $('head').append(buttonStyle);  

  $('.adbl-library-item').each(function () {
    var asinElement = $(this).find('input[name="asin"]');
    var asin = asinElement.val();
    const bookUrl = 'https://' + document.domain + '/webplayer?asin=' + asin
    $(this).after(
      "<a href='" +
        bookUrl +
        "' target='_blank'><button class='custom-play-button'>Play in Tab</button></a>",
    );
  })

  // Play in tab on the page of the book
  $("button[name='playButton']").each(function () {
    const asin = $(this).attr('asin')
    const bookUrl = 'https://' + document.domain + '/webplayer?asin=' + asin
    $(this).parent().after(
      "<a href='" +
        bookUrl +
        "' target='_blank'><button class='custom-play-button'>Play in Tab</button></a>",
    );
  })
})
