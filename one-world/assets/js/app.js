$(document).ready(function(){
    $(".animal-list>li>a").click(function(){
        $(".navbar-collapse").collapse("hide");
    });
});

mybutton = document.getElementById("myBtnb");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




$(document).on("click", ".toggle-text-button", function() {


  if ($(this).text() == "Read More") {

    $(this).text("Read Less");
    
    $("#toggle-text-" + $(this).attr("toggle-text")).slideDown();

  } else {

    $(this).text("Read More");
    
    $("#toggle-text-" + $(this).attr("toggle-text")).slideUp();
  
  }

});


