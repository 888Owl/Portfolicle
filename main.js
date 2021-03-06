
//quote machine js


$(document).ready(function() {
  function quoteMe() {
    var quoteArr = [
      "If the purpose for learning is to score well on a test, we've lost sight of the real reason for learning.",
      "The fact that no one understands you doesn't mean you're an artist.",
      "There's no point in being grown up if you can't be childish sometimes.",
      "I need to update my resume. Would you put day drinking under experience or special skills?",
      "The intention (of an artist) is (the same as a scientist)...to discover and reveal what is unsuspected but significant in life.",
      "Even the finest sword plunged into salt water will eventually rust.",
      "Information is a lot like water; it's hard to hold on to, and hard to keep from leaking away.",
      "Wise men speak because they have something to say; fools because they have to say something.",
      "Be who you are and say what you feel because those who mind don’t matter and those who matter don’t mind.",
      "I cannot teach anybody anything. I can only make them think.",
      "I like the night. Without the dark, we'd never see the stars.",
      "It may have been in pieces, but I gave you the best of me.",
      "You can’t let your failures define you. You have to let your failures teach you.",
      "Whoever controls the media, controls the mind.",
      "It simply isn't an adventure worth telling if there aren't any dragons.",
      "Change is never easy, but always possible.",
      "Every man should marry. After all, happiness is not the only thing in life.",
      "好折凳！折凳的奧妙之處，它可以藏在民居之中，隨手可得，還可以坐著它來隱藏殺機，就算被警察抓了也告不了你，真不愧為七種武器之首!"
    ];
    var authorArr = [
      " - Jeannie Fullbright",
      " - Stephen Hawking",
      " - Doctor Who",
      " - Jessica Jones",
      " - H W Leggett",
      " - Sun Tzu",
      " - Ruth Ozeki",
      " - Plato",
      " - DR. Seuss",
      " - Socrates",
      " - Stephenie Meyer",
      " - Jim Morrison",
      " - Barack Obama",
      " - Jim Morrison",
      " - J.R.R. Tolkien",
      " - Barack Obama",
      " - Stephen Hawking",
      " - 食神"
    ];

    var quoteNum = Math.floor(Math.random() * quoteArr.length);

    var quote = quoteArr[quoteNum];
    var aQuote = authorArr[quoteNum];

    $(".quote").text(quote);
    $(".author").text(aQuote);
  }
  $("#generateMe").on("click", function() {
    quoteMe();
  });
});(jQuery);
//end quote machine js
//
//
//
//start wiki search
//
//
//
//
$(document).ready(function() {



  $("form").submit(function(e) {
    e.preventDefault();
    var message = $("#search-bar").val();
    var url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      message +
      "&limit=10&namespace=0&format=json&callback=?";

    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      async: true,
      success: function(data) {
        $('#reciever').empty();
        for (var i = 0; i < data[1].length; i++) {
          $('#reciever').append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li><hr>");
        };
        $("#search-bar").val(" ");
      },
      error: function(errorMessage) {
        alert("Error: " + errorMessage);
      }
    });
    $("#search-bar").keyup(function(enter) {
      if (enter.which == 13) {
        $("#search-bar").click();
      }
    });

  });
});


/////////end wikipedia searchbar code


/////////start Weather app space


let latitude;
let longitude;
$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let api =
      "https://api.weatherbit.io/v2.0/current?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&key=d966d0f9f9b44ed48df9e2073cd18c4e";

    $.getJSON(api, function(data) {
      let tempBut = false;
      let weather = data.data[0].weather.description;
      $("#weather").html(weather);
      let location = data.data[0].city_name;
      $("#location").html(location);
      let temperatureC = data.data[0].temp;
      let temperatureF = temperatureC * 9 / 5 + 32;
      let c = Math.floor(temperatureC);
      let f = Math.floor(temperatureF);
      let cTemp = "°Celcius";
      let fTemp = "°Fahrenheit";
      $("#display").html(c + cTemp);
      $("#temperature").click(function() {
        if (tempBut === true) {
          $("#display").html(c + cTemp);
          tempBut = false;
        } else {
          $("#display").html(f + fTemp);
          tempBut = true;
        }
      });
    });
  });
});
