/* global _:true */
/* jshint unused:false */

(function(){
  'use strict';

  $('document').ready(init);

  function init(){
    $('#go').click(makeStars);
  }

  function makeStars(){
    var first = $('#first').val().trim().toLowerCase();
    var last = $('#last').val().trim().toLowerCase();
    var movie = $('#movie').val().trim().toUpperCase();

    var output = `${first} ${last} loves ${movie}`;
    $('#output').text(output);
  }

})();
