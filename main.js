$(document).ready(function () {

  var url = "https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=9&items=1";


  //genero la griglia
  var square = '<div class="square"></div>';
  grid = $("#grid");
  for (var i = 0; i < 36; i++) {
    grid.append(square);
  }

  $(".square").on("click", function () {

    var questo = $(this);

    if (questo.hasClass("active")) {
      return;
    } else {

      //se clicco su un quadrato, aggiungo classe active...
      questo.addClass("active");


      //...richiedo il numero dal server 
      $.ajax({
        url: url,
        method: "GET",
        success: function(data){
          
          var myNum = data.response[0];
          if (myNum <= 5){
            questo.addClass("yellow");
          } else if (myNum > 5 ){
            questo.addClass("green");
          }
    
        },
        error: function(req, state, err){
          alert("Qualcosa è andato storto");
          console.log(err);
        }
      })

     
    }



  })

 
   

  




})