/* global _:true */
/* jshint unused:false */

(function(){
  'use strict';

  $('document').ready(init);

  function init(){
    $('#go').click(go);
  }

  function go(){
    var $div = $('#numbers').val().split(',').map(n=>n.trim()).map(n=>Math.pow(n,2)).map(n=>`<div class="box">${n}</div>`).forEach(n=>$('#output').append(n));
  }

  // function div(number){ //I implemented Chyld's inline arrow functions in place of this function.
  //   var $div = $('<div class="box">').text(number);
  //   $('#output').append($div);
  // }

})();
