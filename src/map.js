import { inject } from 'aurelia-framework';
import mapsapi from 'google-maps-api'; // { mapsapi } Error: mapsapi is not a function

@inject(mapsapi('AIzaSyBvhy_Kawzbz5Mv5YQiJm9kbaGJaN-ndPs'))
export class Map {

    constructor(mapsAPI) {

        this.mapLoadingPromise = mapsAPI.then(maps => {
            this.maps = maps;
            this.label = "hi from map.js";
            console.log(this);
        });
    }
    createMap() {
            this.mapLoadingPromise.then(() => {

                var startCoords = {
                    lat: 32.920707,
                    long: -117.063331
                };
                var latlng = new this.maps.LatLng(startCoords.lat, startCoords.long);

                var map = new this.maps.Map(document.getElementById('map-div'), {
                    center: latlng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.SATELLITE
                });
                var marker = new this.maps.Marker({
                    position: latlng,
                    map: map
                });

            });
            return this;

        }
        // For now, leave this in for Map view
    attached() {
        this.mapLoadingPromise.then(() => {

            var startCoords = {
                lat: 32.920707,
                long: -117.063331
            };
            var latlng = new this.maps.LatLng(startCoords.lat, startCoords.long);

            var map = new this.maps.Map(document.getElementById('map-div'), {
                center: latlng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            });
            var marker = new this.maps.Marker({
                position: latlng,
                map: map
            });

        });
    }
}