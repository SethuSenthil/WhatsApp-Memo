// JS code for the textbox
function getnum( element ) {

  var inputBox = element;
  var cssRules = window.getComputedStyle(inputBox);
  var maxFontSize = parseInt(cssRules.getPropertyValue("font-size"));
  var minFontSize = 11;
  var currentFontSize = maxFontSize;
  var maxScrollWidth = parseInt(cssRules.getPropertyValue("width"))
  var fontFamily = cssRules.getPropertyValue("font-family");
  var currentText = inputBox.value;

  // Canvas used to check text widths.
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  var initialize = function() {

      inputBox.oninput = onUpdate;
  }

  var onUpdate = function(event) {

      var width;
      // Some text has been deleted!
      if (inputBox.value.length < currentText.length) {
          width = checkTextWidth(inputBox.value, currentFontSize + 1);

          while (width < maxScrollWidth && currentFontSize < maxFontSize) {
              currentFontSize += 1;
              inputBox.style.fontSize = currentFontSize + 'px';
              width = checkTextWidth(inputBox.value, currentFontSize + 1);
          }

          currentText = inputBox.value;
          return;

      }

      var width = checkTextWidth(inputBox.value, currentFontSize);

      // Shrink
      while (currentFontSize > minFontSize && width > maxScrollWidth) {
          currentFontSize -= 1;
          inputBox.style.fontSize = currentFontSize + 'px';
          width = checkTextWidth(inputBox.value, currentFontSize);
      }

      currentText = inputBox.value;
  }

  var checkTextWidth = function(text, size) {
      context.font = size + "px " + fontFamily;

      if (context.fillText) {
          return context.measureText(text).width;
      } else if (context.mozDrawText) {
          return context.mozMeasureText(text);
      }
  }

  // Initialize the auto adapt functionality.
  initialize();
  //Js code for the button
  $(function() {
$( "#button" ).click(function() {
  $( "#button" ).addClass( "onclic", 250, validate);
});

function validate() {
  setTimeout(function() {
    $( "#button" ).removeClass( "onclic" );
    $( "#button" ).addClass( "validate", 450, callback );
  }, 2250 );
}
  function callback() {
    setTimeout(function() {
      $( "#button" ).removeClass( "validate" );
    }, 1250 );
  }
});
}
getnum( document.getElementById( 'getnum' ) );
var Affix = function (element, options) {
 this.options = $.extend({}, $.fn.affix.defaults, options)
 this.$window = $(window).on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
 this.$element = $(element)
 this.checkPosition()
}

Affix.prototype.checkPosition = function () {
 if (!this.$element.is(':visible')) return

 var scrollHeight = $(document).height()
   , scrollTop = this.$window.scrollTop()
   , position = this.$element.offset()
   , offset = this.options.offset
   , offsetBottom = offset.bottom
   , offsetTop = offset.top
   , reset = 'affix affix-top affix-bottom'
   , affix

 if (typeof offset != 'object') offsetBottom = offsetTop = offset
 if (typeof offsetTop == 'function') offsetTop = offset.top()
 if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

 affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
   false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
   'bottom' : offsetTop != null && scrollTop <= offsetTop ?
   'top'    : false

 if (this.affixed === affix) return

 this.affixed = affix
 this.unpin = affix == 'bottom' ? position.top - scrollTop : null

 this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
}
function fourerror() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
