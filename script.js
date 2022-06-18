$(document).ready(function () {
  var zindex = 10;

  $("div.card").click(function (e) {
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true;
    }

    if ($("div.cards").hasClass("showing")) {
      // chans cardi
      $("div.card.show").removeClass("show");

      if (isShowing) {
        // es cardi archanda; reset grid
        $("div.cards").removeClass("showing");
      } else {
        // ar chans
        $(this).css({ zIndex: zindex }).addClass("show");
      }

      zindex++;
    } else {
      // ar chans cardebi
      $("div.cards").addClass("showing");
      $(this).css({ zIndex: zindex }).addClass("show");

      zindex++;
    }
  });
});
