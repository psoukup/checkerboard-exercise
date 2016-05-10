// Your JS goes here

$(function() {
    $("<div class='container'></div>").appendTo("body");
    $("body .container").css({
      "height": "1000px",
      "width": "1000px",
      "border": "10px solid black",
      "background-color": "red",
    })


    for (var i = 0; i < 100; i++) {
    $("<div class=interior'></div>").appendTo(".container");
}
    $(".interior").css({
      'background-color': 'black',
      'height': '10px',
      'width': '11.1%',
      'float': 'left',
      'border': '2px solid black',
      'padding-bottom': '11.1%',
      'position': 'relative',
    });

    // $('div:nth-child(odd)').css({"background-color", "red"});
    //
    // $('div:nth-child(even)').css({"background-color", "black"});

  });
