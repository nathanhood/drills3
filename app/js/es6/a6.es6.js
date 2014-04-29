/* global _:true */
/* jshint unused:false */
/* global moment:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $('document').ready(init);

  function init(){
    $('#go').click(go);
  }

  function go(){
    var number = $('#number').val().trim();
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=' + number + '&page=1&country=us&apikey=b652cath8f67fx7cnjrfc5f9&callback=?';
    $.getJSON(url, createPoster);
  }

  function createPoster(data){
    debugger;
    // var ratedMovies = _(data.movies).filter(n=>n.audience_score > parseInt($('#score').val())).value();
    // console.log(ratedMovies);
    for(var i = 0; i < data.movies.length; i++){
      if(data.movies[i].ratings.audience_score > parseInt($('#score').val())){
        var $div = $('<div class="box">');
        var img = `<img src="${data.movies[i].posters.detailed}">`;
        $div.text(`${data.movies[i].title}`).append(img);
        $('#output').append($div);
      }
    }
  }


})();
