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
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=8&page=1&country=us&apikey=b652cath8f67fx7cnjrfc5f9&callback=?';
    $.getJSON(url, createPoster);
  }

  function createPoster(data){
    for(var i = 0; i < data.movies.length; i++){
    var $div = $('<div class="box">');
    var img = '<img src="' + data.movies[i].posters.detailed + '">';
    $div.text(`${data.movies[i].title}`).append(img);
    $('#output').append($div);
    }
  }

})();
