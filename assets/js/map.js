/**
 * Final validated OpenLayers code for GeoServer integration.
 * Includes all air quality and land use WMS layers from workspace gisgeoserver_05.
 * All SRS set to EPSG:4326. Layer titles aligned with GeoServer layer names.
 */

// ==============================
// 1. Base Map (OpenStreetMap)
// ==============================
let osm = new ol.layer.Tile({
    title: "OpenStreetMap",
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});

// ==============================
// 2. GeoServer WMS Service URL
// ==============================
const geoserverUrl = 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_05/wms';

// ==============================
// 3. Layer Definition Helper
// ==============================
function createWMSLayer(title, layerName) {
    return new ol.layer.Tile({
        title: title,
        visible: false,
        source: new ol.source.TileWMS({
            url: geoserverUrl,
            params: {
                'LAYERS': `gisgeoserver_05:${layerName}`,
                'TILED': true,
                'SRS': 'EPSG:4326'
            },
            serverType: 'geoserver',
            transition: 0
        })
    });
}

// ==============================
// 4. Define Layer Groups
// ==============================
let no2Layers = new ol.layer.Group({
    title: 'NO2 Layers',
    fold: 'close',
    layers: [
        createWMSLayer('Greece_no2_2017-2021_AAD_map_2022', 'Greece_no2_2017-2021_AAD_map_2022'),
        createWMSLayer('Greece_no2_2020_bivariate', 'Greece_no2_2020_bivariate'),
        createWMSLayer('Greece_no2_concentration_map_2020', 'Greece_no2_concentration_map_2020'),
        createWMSLayer('greece_no2_zonal_statistics_2013-2022', 'greece_no2_zonal_statistics_2013-2022')
    ]
});

let pm10Layers = new ol.layer.Group({
    title: 'PM10 Layers',
    fold: 'close',
    layers: [
        createWMSLayer('Greece_pm10_2017-2021_AAD_map_2022', 'Greece_pm10_2017-2021_AAD_map_2022'),
        createWMSLayer('Greece_pm10_2020_bivariate', 'Greece_pm10_2020_bivariate'),
        createWMSLayer('Greece_pm10_concentration_map_2020', 'Greece_pm10_concentration_map_2020'),
        createWMSLayer('Greece_pm10_zonal_statistics_2013-2022', 'Greece_pm10_zonal_statistics_2013-2022')
    ]
});

let pm25Layers = new ol.layer.Group({
    title: 'PM2.5 Layers',
    fold: 'close',
    layers: [
        createWMSLayer('Greece_pm2p5_2017-2021_AAD_map_2022', 'Greece_pm2p5_2017-2021_AAD_map_2022'),
        createWMSLayer('Greece_pm2p5_2020_bivariate', 'Greece_pm2p5_2020_bivariate'),
        createWMSLayer('Greece_pm2p5_concentration_map_2020', 'Greece_pm2p5_concentration_map_2020'),
        createWMSLayer('Greece_pm2p5_zonal_statistics_2013-2022', 'Greece_pm2p5_zonal_statistics_2013-2022')
    ]
});

let camsLayers = new ol.layer.Group({
    title: 'CAMS Layers',
    fold: 'close',
    layers: [
        createWMSLayer('Greece_CAMS_no2_2022_12', 'Greece_CAMS_no2_2022_12'),
        createWMSLayer('Greece_CAMS_pm10_2022_12', 'Greece_CAMS_pm10_2022_12'),
        createWMSLayer('Greece_CAMS_pm2p5_2022_12', 'Greece_CAMS_pm2p5_2022_12')
    ]
});

let averageLayers = new ol.layer.Group({
    title: 'Average Layers',
    fold: 'close',
    layers: [
        createWMSLayer('Greece_average_no2_2022', 'Greece_average_no2_2022'),
        createWMSLayer('Greece_average_pm10_2022', 'Greece_average_pm10_2022'),
        createWMSLayer('Greece_average_pm2p5_2022', 'Greece_average_pm2p5_2022')
    ]
});

let landUseLayers = new ol.layer.Group({
    title: 'Land Use Layers',
    fold: 'close',
    layers: [
        createWMSLayer('Greece_LC_reclassified_2022', 'Greece_LC_reclassified_2022')
    ]
});

// ==============================
// 5. Combine All Data Layers
// ==============================
let airQualityLayers = new ol.layer.Group({
    title: 'Air Quality and Land Use',
    layers: [
        no2Layers,
        pm10Layers,
        pm25Layers,
        camsLayers,
        averageLayers,
        landUseLayers
    ]
});

let basemapLayers = new ol.layer.Group({
    title: "Base Maps",
    layers: [osm]
});

// ==============================
// 6. Initialize Map
// ==============================
let map = new ol.Map({
    target: document.getElementById('map'),
    layers: [
        basemapLayers,
        airQualityLayers
    ],
    view: new ol.View({
        projection: 'EPSG:4326',
        center: [23.7275, 37.9838],
        zoom: 7
    })
});

// ==============================
// 7. Map Controls
// ==============================
map.addControl(new ol.control.ScaleLine());
map.addControl(new ol.control.FullScreen());
map.addControl(new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    className: 'custom-control',
    placeholder: '0.0000, 0.0000'
}));

var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);

// ==============================
// 8. Feature Info Popup on Click
// ==============================
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var overlay = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 250
    }
});
map.addOverlay(overlay);

closer.onclick = function() {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
};

map.on('singleclick', function(evt) {
    var coordinate = evt.coordinate;
    var viewResolution = map.getView().getResolution();
    var infoContent = '';
    var layerFound = false;

    map.getLayers().forEach(function(layerGroup) {
        if (layerGroup instanceof ol.layer.Group) {
            layerGroup.getLayers().forEach(function(subGroup) {
                if (subGroup instanceof ol.layer.Group) {
                    subGroup.getLayers().forEach(function(layer) {
                        if (layer instanceof ol.layer.Tile && layer.getVisible() && layer.getSource() instanceof ol.source.TileWMS) {
                            var source = layer.getSource();
                            var url = source.getFeatureInfoUrl(
                                coordinate,
                                viewResolution,
                                'EPSG:4326',
                                {'INFO_FORMAT': 'text/html'}
                            );
                            if (url) {
                                layerFound = true;
                                fetch(url)
                                    .then(response => response.text())
                                    .then(html => {
                                        if (html && html.trim() !== '') {
                                            infoContent += `<h4>${layer.get('title')}</h4>`;
                                            infoContent += html;
                                            content.innerHTML = infoContent;
                                            overlay.setPosition(coordinate);
                                        }
                                    });
                            }
                        }
                    });
                }
            });
        }
    });

    if (!layerFound) {
        content.innerHTML = 'No queryable layer at this location';
        overlay.setPosition(coordinate);
    }
});
