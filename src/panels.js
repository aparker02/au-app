//import { bindable, customElement } from 'aurelia-framework';
import $ from 'jquery';
import GoldenLayout from 'golden-layout/dist/goldenlayout';

export class Panels {

    attached() {
        var config = {
            // settings: {
            //     hasHeaders: true,
            //     reorderEnabled: true,
            //     selectionEnabled: true,
            //     popoutWholeStack: false,
            //     closePopoutsOnUnload: true
            // },
            content: [{
                type: 'row',
                content: [{
                    type: 'component',
                    componentName: 'testComponent',
                    componentState: { label: 'Maps' }
                }, {
                    type: 'column',
                    content: [{
                        type: 'component',
                        componentName: 'testComponent',
                        componentState: { label: 'Charts' }
                    }, {
                        type: 'component',
                        componentName: 'testComponent',
                        componentState: { label: 'Graphs' }
                    }]
                }]
            }]
        };

        var myLayout = new GoldenLayout(config, $('#panelContainer'));
        //var myLayout = new GoldenLayout(config);

        myLayout.registerComponent('testComponent', function(container, componentState) {
            container.getElement().html('<h2>' + componentState.label + '</h2>');
        });

        myLayout.init();

        return;
    }
    unbind() { // GoldenLayout is leaving behind these two divs 
        // when navigating to other views
        // myLayout.destroy();
        $('.lm_dropTargetIndicator').remove();
        $('.lm_transition_indicator').remove();
    }
}