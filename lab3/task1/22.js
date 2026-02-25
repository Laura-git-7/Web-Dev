if (-1 || 0) alert( 'first' );//-1 truthy
if (-1 && 0) alert( 'second' ); //doesn't run, bs 0 falsy
if (null || -1 && 1) alert( 'third' );//null||1 is truthy