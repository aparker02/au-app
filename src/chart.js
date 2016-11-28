import { PLATFORM } from 'aurelia-pal';
import $ from 'jquery';
import 'amcharts/dist/amcharts/amcharts';
import 'amcharts/dist/amcharts/serial';
import 'amcharts/dist/amcharts/themes/light';

export class Chart {

  waitForChartDiv = function waitForChartDiv() {
    if (!$('#chart-div').length > 0) {
      PLATFORM.requestAnimationFrame(this.waitForChartDiv);
    } else {
      console.log('chart div exists');
      //createChart();
      return;
    }
  }

  createChart = function createChart() {
    this.waitForChartDiv();
    AmCharts.isReady = true;
    let chart = AmCharts.makeChart('chart-div', {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': [{
        'name': 'John',
        'points': 35654,
        'color': '#7F8DA9',
        'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'
      }, {
        'name': 'Damon',
        'points': 65456,
        'color': '#FEC514',
        'bullet': 'https://www.amcharts.com/lib/images/faces/C02.png'
      }, {
        'name': 'Patrick',
        'points': 45724,
        'color': '#DB4C3C',
        'bullet': 'https://www.amcharts.com/lib/images/faces/D02.png'
      }, {
        'name': 'Mark',
        'points': 13654,
        'color': '#DAF0FD',
        'bullet': 'https://www.amcharts.com/lib/images/faces/E01.png'
      }],
      'valueAxes': [{
        'maximum': 80000,
        'minimum': 0,
        'axisAlpha': 0,
        'dashLength': 4,
        'position': 'left'
      }],
      'startDuration': 1,
      'graphs': [{
        'balloonText': "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
        'bulletOffset': 10,
        'bulletSize': 52,
        'colorField': 'color',
        'cornerRadiusTop': 8,
        'customBulletField': 'bullet',
        'fillAlphas': 0.8,
        'lineAlpha': 0,
        'type': 'column',
        'valueField': 'points'
      }],
      'marginTop': 0,
      'marginRight': 0,
      'marginLeft': 0,
      'marginBottom': 0,
      'autoMargins': false,
      'categoryField': 'name',
      'categoryAxis': {
        'axisAlpha': 0,
        'gridAlpha': 0,
        'inside': true,
        'tickLength': 0
      },
      'export': {
        'enabled': true
      }
    }, 1);
    return;
  }
    // }

  attached() {
    if ($('#chart-div').length > 0) AmCharts.isReady = true;
    let chart = AmCharts.makeChart('chart-div', {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': [{
        'name': 'John',
        'points': 35654,
        'color': '#7F8DA9',
        'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'
      }, {
        'name': 'Damon',
        'points': 65456,
        'color': '#FEC514',
        'bullet': 'https://www.amcharts.com/lib/images/faces/C02.png'
      }, {
        'name': 'Patrick',
        'points': 45724,
        'color': '#DB4C3C',
        'bullet': 'https://www.amcharts.com/lib/images/faces/D02.png'
      }, {
        'name': 'Mark',
        'points': 13654,
        'color': '#DAF0FD',
        'bullet': 'https://www.amcharts.com/lib/images/faces/E01.png'
      }],
      'valueAxes': [{
        'maximum': 80000,
        'minimum': 0,
        'axisAlpha': 0,
        'dashLength': 4,
        'position': 'left'
      }],
      'startDuration': 1,
      'graphs': [{
        'balloonText': "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
        'bulletOffset': 10,
        'bulletSize': 52,
        'colorField': 'color',
        'cornerRadiusTop': 8,
        'customBulletField': 'bullet',
        'fillAlphas': 0.8,
        'lineAlpha': 0,
        'type': 'column',
        'valueField': 'points'
      }],
      'marginTop': 0,
      'marginRight': 0,
      'marginLeft': 0,
      'marginBottom': 0,
      'autoMargins': false,
      'categoryField': 'name',
      'categoryAxis': {
        'axisAlpha': 0,
        'gridAlpha': 0,
        'inside': true,
        'tickLength': 0
      },
      'export': {
        'enabled': true
      }
    });
  }
}
