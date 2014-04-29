/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go-strings').click(strings);
    $('#go-nums').click(nums);
  }

  function strings(){
    debugger;
    var s = $('#strings').val();
    var es5 = 'my favorite string is' + s;
    var es6 = `my favorite string is ${s}`;
    // var multi = `this
    //             is
    //             a
    //             multi line string`;
    console.log(es5);
    console.log(es6);
    // console.log(multi);
  }

  function nums(){
    var numbers = $('#nums').val();

    var begin = $('#begin').val();
    var end = $('#end').val();
    var step = $('#step').val();

    //numbers = numbers.split(',').map(function(n){return n.trim();}); //es5
    //numbers = numbers.split(',').map(n=>n.trim().map(n=>n*n).filter(n=>n%2===0).map(n=>Math.pow(n,5))); //es6 using arrow functions

    numbers = _.range(begin, end, step);
    // numbers = _.collect(numbers, x=>x*x); // these two lines can be written below.

    numbers = _(numbers).collect(x=>x*x).map(n=>Math.pow(n,3)); // turns 'numbers' array into a 'lo dash' array

    console.log(numbers.value()); /* Once wrapped in lo dash, it is a lo dash object, not a normal array.
    If you need to turn it back into array, you need to request .val(). */
  }

})();
