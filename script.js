// Your JS goes here

$(function() {
    $("<div class='container'></div>").appendTo("body");
    $(".container").css({
      "height": "960px",
      "width": "990px",
      "border": "10px solid black",
      "margin": "0px",
      "overflow": "0"
    })


    for (var i = 0; i < 72; i++) {
    $("<div class='interior'></div>").appendTo($(".container"));
   }
    $(".interior").css({
      'background-color': 'black',
      'height': '10px',
      'width': '11.1%',
      'float': 'left',
      'padding-bottom': '11.1%',
      'position': 'relative',
    });

    $(".interior:nth-child(even)").css({
      "background-color": "black",
    })

    $(".interior:nth-child(even)").css({
      "background-color": "red",
    })

  });
