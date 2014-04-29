/* global _:true */
/* jshint unused:false */
/* global moment:true */

(function(){
  'use strict';

  $('document').ready(init);

  function init(){
    $('#go').click(go);
  }

  function go(){
    $('#output').text(moment($('#calendar').val(), 'YYYYMMDD').fromNow());
  }

  // function div(number){ //I implemented Chyld's inline arrow functions in place of this function.
  //   var $div = $('<div class="box">').text(number);
  //   $('#output').append($div);
  // }

})();
