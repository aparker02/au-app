import { inject } from 'aurelia-framework';
import $ from 'jquery';
import GoldenLayout from 'golden-layout/dist/goldenlayout';
import { Map } from './map';
import { Chart } from './chart';

@inject(Map, Chart)
export class Panels {
  constructor(map, chart) {
    this.map = map;
    this.chart = chart;
  }

  attached(map, chart) {
    let config = {
      content: [{
        type: 'row',
        content: [{
          type: 'component',
          componentName: 'map',
          componentState: { label: 'Maps' }
        }, {
          type: 'column',
          content: [{
            type: 'component',
            componentName: 'chart',
            componentState: { label: 'Charts' }
          }, {
            type: 'component',
            componentName: 'testComponent',
            componentState: { label: 'Graphs' }
          }]
        }]
      }]
    };

    let myLayout = new GoldenLayout(config, $('#panelContainer'));
    let googleMap = this.map;
    let newChart = this.chart;

    myLayout.registerComponent('testComponent', function(container, componentState) {
      container.getElement().html('<h2>' + componentState.label + '</h2>');
    });
    myLayout.registerComponent('map', function(container) {
      container.getElement()[0].setAttribute('id', 'map-div');
      googleMap.createMap();
    });
    myLayout.registerComponent('chart', function(container) {
      container.getElement()[0].setAttribute('id', 'chart-div');
      newChart.waitForChartDiv();
      newChart.createChart();
    });

    myLayout.init();
    return;
  }
  unbind() { // GoldenLayout is leaving behind these two divs when navigating to other views
    $('.lm_dropTargetIndicator').remove();
    $('.lm_transition_indicator').remove();
  }
}
