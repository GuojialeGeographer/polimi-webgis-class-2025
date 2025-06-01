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

// Map Initialization
let map = new ol.Map({
    target: document.getElementById('map'),
    layers: [basemapLayers], 
    view: new ol.View({
        center: ol.proj.fromLonLat([23.7275, 37.9838]), // Center on Athens
        zoom: 7
    })
});

// 添加地图控件
map.addControl(new ol.control.ScaleLine());
map.addControl(new ol.control.FullScreen());
map.addControl(
    new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        className: 'custom-control',
        placeholder: '0.0000, 0.0000'
    })
);

// 添加图层切换控件
var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);

// 添加 Bing Maps 图层
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
