// Your JS goes here

$(function() {
            // $("<div class='container'></div>").appendTo("body");
            // $(".container").css({
            //   "height": "960px",
            //   "width": "990px",
            //   "border": "10px solid black",
            //   "margin": "0px",
            //   "overflow": "0"
            // })

            function rgb() {
                var r = Math.floor(Math.random() * 256)
                var g = Math.floor(Math.random() * 256)
                var b = Math.floor(Math.random() * 256)

                return "rgb(" + r + "," + g + "," + b + ")";
            }

            for (var i = 0; i < 72; i++) {
              var $div = $("<div class='interior'></div>").appendTo("body");
                $div.css("background-color:" + rgb());
                console.log("test");
                // $(".interior:nth-child(even)").css("background-color:" + rgb())
              }
            });
                        $(".interior").css({
                            'background-color': rgb(),
                            'height': '10px',
                            'width': '11.1%',
                            'float': 'left',
                            'padding-bottom': '11.1%',
                        });
        // $(".interior").css({
        //   'background-color': rgb(),
        //   'height': '10px',
        //   'width': '11.1%',
        //   'float': 'left',
        //   'padding-bottom': '11.1%',
        // });

        // $(".interior:nth-child(even)").css({
        //   "background-color": "black",
        //   // "background-color": rgb();
        // })
        // $(".interior:nth-child(odd)").css("background-color:" + rgb())
        // $(".interior:nth-child(even)").css("background-color:" + rgb())
