/* global _:true */
/* jshint unused:false */
/* global moment:true */
/* jshint camelcase:false */
/* global AmCharts:true */

(function(){
  'use strict';

  $('document').ready(init);

  function init(){
    $('#block').click(block);
    $('#default').click(defparams);
    $('#rest').click(rest);
    $('#spread').click(spread);
  }
  //spread parameter

  function spread(){
    var nums = _(_.range(10,25,5)).shuffle().value();
    var x = vol(...nums);
    console.log(x); //this will tak
  }



  //rest parameter
  function people(...other){ //first argument goes into 'first'. The rest goes into an array.
    console.log(first);
    console.log(other);
  }

  function rest(){
    people('bob', 'frank', 'sally', 'jim', 'nora');
  }




  //default parameters
  function vol(l, w, h=5){ //can set default parameters
    return l * w * h;
  }

  function defparams(){
    console.log('default params');
    console.log(vol(2,3,4));
    console.log(vol(2,3)); //leaving out h from argument. default parameter allows it to calculate.
  }





  function block(){
    var a = 1;

    {
      var b = 2; //available inside entire function.
      let c = 3;
      console.log('c -' + c); //allows you to access this variable outside of normal scope.
    }

    if(3<5){
      let d = 4; // this variable cannot be seen outside of if statement
      console.log('d inner - ' +d);
    }

    for(let i = 0; i < 5; i++){
      console.log(i);
    }

    console.log('a' + a);
    console.log('b' + b);
    console.log(c);
    console.log(d);
    console.log(i);


  }



})();
;
