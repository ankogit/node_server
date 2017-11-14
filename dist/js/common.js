      $( "form" ).delegate( "input", "focus", function() {
        var elem = $( this );
        setTimeout(function() {
          if(elem.data('placeholder')) {
            //alert(elem.data('placeholder'));
            var placeholder_text = elem.data('placeholder');
            elem.toggleClass( "focused", elem.is( ":focus" ) );
            $( '<span class="place">'+placeholder_text+'</span>' ).insertAfter(elem);
          }
        }, 0 );
      });
      $( "form" ).delegate( "input", "blur", function() {
        var elem = $( this );
        setTimeout(function() {
          $( ".place" ).remove();
        }, 0 );
      });
     