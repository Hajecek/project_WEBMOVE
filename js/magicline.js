var $el, leftPos, newWidth;
$mainNav2 = $("#example-two");

/*
        EXAMPLE ONE
    */

/* Add Magic Line markup via JavaScript, because it ain't gonna work without */
$(".current_page_item a").append("<span id='magic-line'></span>");

/* Cache it */
var $magicLine = $("#magic-line");

$magicLine

.width($(".current_page_item").width())
.data("origWidth", $magicLine.width())  
  .data("origLeft", $magicLine.position().left)


$("#example-one li")
  .find("a")
  .hover(
    function() {
      $el = $(this);
      leftPos = $el.position().left;
      newWidth = $el.parent().width();

      $magicLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
    },
    function() {
      $magicLine.stop().animate({
        left: $magicLine.data("origLeft"),
        width: $magicLine.data("origWidth")
      });
    }
  );

