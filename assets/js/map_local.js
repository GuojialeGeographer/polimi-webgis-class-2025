//OpenStreetMap
let osm = new ol.layer.Tile({
    title: "OpenStreetMap",
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});

//Create the layer groups and add the layers to them
let basemapLayers = new ol.layer.Group({
    title: "Base Maps",
    layers: [osm]
});

//Environmental Factors Layers group
let dtm = new ol.layer.Image({
    title: "DTM",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:dtm' }
    })
});

let ndvi = new ol.layer.Image({
    title: "NDVI",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:ndvi' }
    })
});

let aspect = new ol.layer.Image({
    title: "Aspect",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:aspect' }
    })
});

let dusaf = new ol.layer.Image({
    title: "DUSAF",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:dusaf' }
    })
});

let faults = new ol.layer.Image({
    title: "Faults",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:faults' }
    })
});

let plan = new ol.layer.Image({
    title: "Plan Curvature",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:plan' }
    })
});

let profile = new ol.layer.Image({
    title: "Profile Curvature",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:profile' }
    })
});

let rivers = new ol.layer.Image({
    title: "Rivers",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:rivers' }
    })
});

let roads = new ol.layer.Image({
    title: "Roads",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:roads' }
    })
});

let slope = new ol.layer.Image({
    title: "Slope",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:slope' }
    })
});

let envFactorsLayers = new ol.layer.Group({
    title: "Environmental Factors",
    layers: [dtm, ndvi, aspect, dusaf, faults, plan, profile, rivers, roads, slope]
});

//landslideSusceptibilityMap
let landslideSusceptibilityMap = new ol.layer.Image({
    title: "Landslide Susceptibility Map",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:LandslideSusceptibilityMap' }
    })
});

let NLZ = new ol.layer.Image({
    visible: false,
    title: "No Landslide Zones",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:NLZ' }
    })
});

let LS = new ol.layer.Image({
    visible: false,
    title: "Landslide Inventory",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:LS' }
    })
});

let landslideMap = new ol.layer.Group({
    title: "Landslide Susceptibility Map",
    layers: [landslideSusceptibilityMap, NLZ, LS]
});


//Training and testing points
let trainingPoints = new ol.layer.Image({
    visible: false,
    title: "Training points",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:trainPoints' }
    })
});

let testingPoints = new ol.layer.Image({
    visible: false,
    title: "Testing points",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:testPoints' }
    })
});

let trainTestPoints = new ol.layer.Group({
    title: "Training and testing points",
    layers: [trainingPoints, testingPoints]
});

//Exposure assessment
let reclass = new ol.layer.Image({
    title: "Landslide Susceptibility Map_Reclass",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:reclass' }
    })
});

let pop = new ol.layer.Image({
    title: "Population Map",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:population' }
    })
});

let exposureAssess = new ol.layer.Group({
    title: "Exposure assessment",
    layers: [reclass, pop]
});

//Study area
let area = new ol.layer.Image({
    title: "Study area",
    source: new ol.source.ImageWMS({
        url: 'http://192.168.10.131:8082/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:g6_area' }
    })
});

// Map Initialization
let map = new ol.Map({
    target: document.getElementById('map'),
    layers: [basemapLayers, exposureAssess, landslideMap, trainTestPoints, envFactorsLayers, area],
    view: new ol.View({
        center: ol.proj.fromLonLat([9.3770, 46.0010]),
        zoom: 12
    })
});

// Add the map controls:
map.addControl(new ol.control.ScaleLine()); //Controls can be added using the addControl() map function
map.addControl(new ol.control.FullScreen());
map.addControl(
    new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        className: 'custom-control',
        placeholder: '0.0000, 0.0000'
    })
);

// Add the layer switch
var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);

//Add the Bing Maps layers
var BING_MAPS_KEY = "Ajrza5Uk8_QGVZMe5ReBVmyutydBHz1WSIr-2DeCoOYPaAkr1Y8HdB9DXUSfyNpe";
var bingRoads = new ol.layer.Tile({
    title: 'Bing Maps—Roads',
    type: 'base',
    visible: false,
    source: new ol.source.BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Road'
    })
});
var bingAerial = new ol.layer.Tile({
    title: 'Bing Maps—Aerial',
    type: 'base',
    visible: false,
    source: new ol.source.BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Aerial'
    })
});
 basemapLayers.getLayers().extend([bingRoads, bingAerial]);

//Add the code for the Pop-up
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new ol.Overlay({
    element: container
});
map.addOverlay(popup);

// This ensures that JQuery ($) is already available in the page.
$(document).ready(function () {
    map.on('singleclick', function (event) {
        //This iterates over all the features that are located on the pixel of the click (can be many)
        var feature = map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
            return feature;
        });

        //If there is a feature, open the popup by setting a position to it and put the data from the feature
        if (feature != null) {
            var pixel = event.pixel;
            var coord = map.getCoordinateFromPixel(pixel);
            popup.setPosition(coord);
            content.innerHTML =
                '<h5>Colombia Water Areas</h5><br><b>Name: </b>' +
                feature.get('NAME') +
                '</br><b>Description: </b>' +
                feature.get('HYC_DESCRI');
        } else {
            var viewResolution = (map.getView().getResolution());
            var url = colombiaRoads.getSource().getFeatureInfoUrl(event.coordinate, viewResolution, 'EPSG:3857', { 'INFO_FORMAT': 'text/html' });

            if (url) {
                var pixel = event.pixel;
                var coord = map.getCoordinateFromPixel(pixel);
                popup.setPosition(coord);
                //We do again the AJAX request to get the data from the GetFeatureInfo request
                $.ajax({ url: url })
                    .done((data) => {
                        //Put the data of the GetFeatureInfo response inside the pop-up
                        //The data that arrives is in HTML
                        content.innerHTML = data;
                    });
            }
        }
    });
});

// The click event handler for closing the popup.
closer.onclick = function () {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};

// Adding map event for pointermove
map.on('pointermove', function (event) {
    var pixel = map.getEventPixel(event.originalEvent);
    var hit = map.hasFeatureAtPixel(pixel);
    map.getTarget().style.cursor = hit ? 'pointer' : '';
});
