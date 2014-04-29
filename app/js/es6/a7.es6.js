/* global _:true */
/* jshint unused:false */
/* global moment:true */
/* jshint camelcase:false */
/* global AmCharts:true */

(function(){
  'use strict';

  $('document').ready(init);

  function init(){
    $('#go').click(go);
  }

  function go(){
    var number = $('#number').val().trim();
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=' + number + '&page=1&country=us&apikey=b652cath8f67fx7cnjrfc5f9&callback=?';
    $.getJSON(url, generateChartData);
  }

  // function createPoster(data){
  //   debugger;
  //   for(var i = 0; i < data.movies.length; i++){
  //     if(data.movies[i].ratings.audience_score > parseInt($('#score').val())){
  //       var $div = $('<div class='box'>');
  //       var img = `<img src='${data.movies[i].posters.detailed}'>`;
  //       $div.text(`${data.movies[i].title}`).append(img);
  //       $('#output').append($div);
  //     }
  //   }
  // }
  function generateChartData(data) {
      // var chartData = [];
      // var firstDate = new Date();
      // firstDate.setDate(firstDate.getDate() - 100);

      for (var i = 0; i < data.movies.length; i++) {

          // var newDate = new Date(firstDate);
          // newDate.setDate(newDate.getDate() + i);

          var movie = data.movies[i].title;
          var audience = data.movies[i].ratings.audience_score;
          var critic = data.movies[i].ratings.critics_score;

          // var visits = Math.round(Math.random() * 40) + 100;
          // var hits = Math.round(Math.random() * 80) + 500;
          // var views = Math.round(Math.random() * 6000);

          chartData.push({
              movie: movie,
              visits: audience,
              hits: critic,
              // views: views
          });
      }
      createChart();
      // return chartData;
  }

  var chartData = [];
  var chart;

  function createChart(){
    chart = AmCharts.makeChart('chartdiv', {
        'type': 'serial',
        'theme': 'chalk',
        'pathToImages': 'http://www.amcharts.com/lib/3/images/',
        'legend': {
            'useGraphSettings': true
        },
        'dataProvider': chartData,
        'valueAxes': [{
            'id':'v1',
            'axisColor': '#FF6600',
            'axisThickness': 2,
            'gridAlpha': 0,
            'axisAlpha': 1,
            'position': 'left',
            'minimum': 0,
            'maximum': 100
        }],
        // {
        //     'id':'v2',
        //     'axisColor': '#FCD202',
        //     'axisThickness': 2,
        //     'gridAlpha': 0,
        //     'axisAlpha': 1,
        //     'position': 'right',
        //     'minimum': 0,
        //     'maximum': 100
        // }
        // {
        //     'id':'v3',
        //     'axisColor': '#B0DE09',
        //     'axisThickness': 2,
        //     'gridAlpha': 0,
        //     'offset': 50,
        //     'axisAlpha': 1,
        //     'position': 'left',
        //     'minimum': 0,
        //     'maximum': 100
        // }
        'graphs': [{
            'valueAxis': 'v1',
            'lineColor': '#FF6600',
            'bullet': 'round',
            'bulletBorderThickness': 1,
            'hideBulletsCount': 30,
            'title': 'audience',
            'valueField': 'visits',
    		'fillAlphas': 0
        }, {
            'valueAxis': 'v2',
            'lineColor': '#FCD202',
            'bullet': 'square',
            'bulletBorderThickness': 1,
            'hideBulletsCount': 30,
            'title': 'critics',
            'valueField': 'hits',
    		'fillAlphas': 0
        }],
        // {
        //     'valueAxis': 'v3',
        //     'lineColor': '#B0DE09',
        //     'bullet': 'triangleUp',
        //     'bulletBorderThickness': 1,
        //     'hideBulletsCount': 30,
        //     'title': 'green li',
        //     'valueField': 'views',
    		//     'fillAlphas': 0
        // }
        'chartScrollbar': {},
        'chartCursor': {
            'cursorPosition': 'mouse'
        },
        'categoryField': 'movie',
        'categoryAxis': {
            'parseDates': false,
            'axisColor': '#DADADA',
            'minorGridEnabled': true
        }
    });

    chart.addListener('dataUpdated', zoomChart);
    zoomChart();
  }


  function zoomChart(){
      chart.zoomToIndexes(0, parseInt($('#number').val().trim()));
  }



})();
