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
    debugger;
    var parameters = $('#input').val().split(',');
    var start = parameters[0];
    var stop = parseInt(parameters[1]) + 1;
    var step = parameters[2];

    var answer = _.range(start,stop,step);

    _(answer).map(n=>Math.pow(n,3)).map(n=>`<div class="box">${n}</div>`).forEach(n=>$('#output').append(n));
    //wrapping the 'answer' array creates a lodash object which allows you to apply multiple lodash methods
  }

})();
