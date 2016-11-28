import 'bootstrap';
import { LogManager } from 'aurelia-framework';
import { ConsoleAppender } from 'aurelia-logging-console';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-google-maps', config => {
            config.options({
                apiKey: 'AIzaSyBvhy_Kawzbz5Mv5YQiJm9kbaGJaN-ndPs',
                apiLibraries: 'drawing,geometry', //get optional libraries like drawing, geometry, ... - comma seperated list
                options: { panControl: true, panControlOptions: { position: 9 } } //add google.maps.MapOptions on construct (https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions)
            });
        })
        // TODO -- get the API key from here instead of Map class
        // .plugin('google-maps-api', config => {
        //     config.option({
        //         mapsapi: 'AIzaSyBvhy_Kawzbz5Mv5YQiJm9kbaGJaN-ndPs'
        //     });
        // });


    //Uncomment the line below to enable animation.
    //aurelia.use.plugin('aurelia-animator-css');
    //if the css animator is enabled, add swap-order="after" to all router-view elements

    //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
    //aurelia.use.plugin('aurelia-html-import-template-loader')

    aurelia.start().then(() => aurelia.setRoot());
}