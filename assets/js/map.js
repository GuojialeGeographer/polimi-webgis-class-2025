// 使用全局对象替代ESM导入
// 地图初始化，使用从HTML加载的OpenLayers库

// OpenStreetMap base layer
let osm = new ol.layer.Tile({
    title: "OpenStreetMap",
    type: "base",
    visible: true,
    source: new ol.source.OSM()
});

// Create layer group and add layers
let basemapLayers = new ol.layer.Group({
    title: "Base Maps",
    layers: [osm]
});

// Air quality monitoring stations layer
let monitoringStations = new ol.layer.Image({
    title: "Monitoring Stations",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_air_monitoring_stations' }
    }),
    visible: true
});

// Urban areas layer
let urbanAreas = new ol.layer.Image({
    title: "Urban Areas",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_urban_areas' }
    }),
    visible: false
});

// Road network layer
let roadNetwork = new ol.layer.Image({
    title: "Road Network",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_road_network' }
    }),
    visible: false
});

// Industrial areas layer
let industrialAreas = new ol.layer.Image({
    title: "Industrial Areas",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_industrial_areas' }
    }),
    visible: false
});

// Land use layer
let landUse = new ol.layer.Image({
    title: "Land Use",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_land_use' }
    }),
    visible: false
});

// Meteorological stations layer
let meteoStations = new ol.layer.Image({
    title: "Meteorological Stations",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_meteo_stations' }
    }),
    visible: false
});

// Port and shipping lanes layer
let shippingLanes = new ol.layer.Image({
    title: "Ports and Shipping Lanes",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_shipping_lanes' }
    }),
    visible: false
});

// Tourist areas layer
let touristAreas = new ol.layer.Image({
    title: "Tourist Areas",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_tourist_areas' }
    }),
    visible: false
});

// Base data layers group
let baseDataLayers = new ol.layer.Group({
    title: "Base Data Layers",
    layers: [monitoringStations, urbanAreas, roadNetwork, industrialAreas, landUse, meteoStations, shippingLanes, touristAreas],
    fold: 'open'
});

// Air quality index map
let aqiMap = new ol.layer.Image({
    title: "Air Quality Index Map",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_air_quality_index' }
    }),
    visible: true
});

let pm25Map = new ol.layer.Image({
    visible: false,
    title: "PM2.5 Concentration",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_pm25_concentration' }
    })
});

let pm10Map = new ol.layer.Image({
    visible: false,
    title: "PM10 Concentration",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_pm10_concentration' }
    })
});

let no2Map = new ol.layer.Image({
    visible: false,
    title: "Nitrogen Dioxide (NO2) Concentration",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_no2_concentration' }
    })
});

let o3Map = new ol.layer.Image({
    visible: false,
    title: "Ozone (O3) Concentration",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_o3_concentration' }
    })
});

let so2Map = new ol.layer.Image({
    visible: false,
    title: "Sulfur Dioxide (SO2) Concentration",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_so2_concentration' }
    })
});

let airQualityLayers = new ol.layer.Group({
    title: "Air Quality Maps",
    layers: [aqiMap, pm25Map, pm10Map, no2Map, o3Map, so2Map],
    fold: 'open'
});

// Validation points
let validationPoints = new ol.layer.Image({
    visible: false,
    title: "Validation Points",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_validation_points' }
    })
});

let calibrationPoints = new ol.layer.Image({
    visible: false,
    title: "Calibration Points",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_calibration_points' }
    })
});

let modelValidation = new ol.layer.Group({
    title: "Model Validation",
    layers: [validationPoints, calibrationPoints],
    fold: 'close'
});

// Health risk assessment
let populationDensity = new ol.layer.Image({
    title: "Population Density",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_population_density' }
    }),
    visible: false
});

let vulnerablePopulation = new ol.layer.Image({
    title: "Vulnerable Population",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_vulnerable_population' }
    }),
    visible: false
});

let healthRiskMap = new ol.layer.Image({
    title: "Health Risk Index",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_health_risk_index' }
    }),
    visible: false
});

let seasonalTourismImpact = new ol.layer.Image({
    title: "Seasonal Tourism Impact",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_tourism_impact' }
    }),
    visible: false
});

let healthRiskAssessment = new ol.layer.Group({
    title: "Health Risk Assessment",
    layers: [populationDensity, vulnerablePopulation, healthRiskMap, seasonalTourismImpact],
    fold: 'close'
});

// Study area - Greece
let greeceOutline = new ol.layer.Image({
    title: "Greece Outline",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_outline' }
    }),
    visible: true
});

// Map Initialization - Centered on Greece
let map = new ol.Map({
    target: document.getElementById('map'),
    layers: [basemapLayers, baseDataLayers, airQualityLayers, modelValidation, healthRiskAssessment, greeceOutline],
    view: new ol.View({
        center: ol.proj.fromLonLat([23.7275, 37.9838]), // Athens, Greece coordinates
        zoom: 7 // Zoom level to show most of Greece
    }),
    controls: ol.control.defaults().extend([
        new ol.control.ScaleLine(),
        new ol.control.FullScreen(),
        new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(4),
            projection: 'EPSG:4326',
            className: 'custom-control',
            placeholder: '0.0000, 0.0000'
        })
    ])
});

// Add the layer switcher
let layerSwitcher = new LayerSwitcher({
    tipLabel: 'Legend', // Optional label for button
    groupSelectStyle: 'children' // Can be 'children' [default], 'group' or 'none'
});
map.addControl(layerSwitcher);

// Add Stadia Maps basemaps
let stadiaOutdoors = new ol.layer.Tile({
    title: 'Stadia Outdoors',
    type: 'base',
    visible: false,
    source: new ol.source.XYZ({
        url: 'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}.png',
        attributions: 'Map tiles by <a href="https://stadiamaps.com/">Stadia Maps</a>, under CC BY 3.0. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under ODbL.'
    })
});

let stadiaAlidade = new ol.layer.Tile({
    title: 'Stadia Alidade',
    type: 'base',
    visible: false,
    source: new ol.source.XYZ({
        url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png',
        attributions: 'Map tiles by <a href="https://stadiamaps.com/">Stadia Maps</a>, under CC BY 3.0. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under ODbL.'
    })
});

// Add OpenTopoMap
let openTopoMap = new ol.layer.Tile({
    title: 'OpenTopoMap',
    type: 'base',
    visible: false,
    source: new ol.source.XYZ({
        url: 'https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png',
        attributions: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    })
});

// Add these basemaps to the basemap layer group
basemapLayers.getLayers().extend([stadiaOutdoors, stadiaAlidade, openTopoMap]);

// Function to create the legend for the active layers
function createLegend() {
    const legendElement = document.getElementById('legend-content');
    legendElement.innerHTML = ''; // Clear existing legend content
    
    // Get all visible layers that have WMS sources
    const visibleLayers = [];
    
    function collectVisibleLayers(layerGroup) {
        layerGroup.getLayers().forEach(layer => {
            if (layer instanceof ol.layer.Group) {
                collectVisibleLayers(layer);
            } else if (layer.getVisible() && layer.getSource() instanceof ol.source.ImageWMS) {
                visibleLayers.push(layer);
            }
        });
    }
    
    // Start with the top-level layers
    map.getLayers().forEach(layer => {
        if (layer instanceof ol.layer.Group) {
            collectVisibleLayers(layer);
        } else if (layer.getVisible() && layer.getSource() instanceof ol.source.ImageWMS) {
            visibleLayers.push(layer);
        }
    });
    
    // Create legend items for each visible WMS layer
    visibleLayers.forEach(layer => {
        const title = layer.get('title');
        const source = layer.getSource();
        const url = source.getUrl();
        const params = source.getParams();
        const legendUrl = `${url}?SERVICE=WMS&REQUEST=GetLegendGraphic&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${params.LAYERS}`;
        
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        
        const legendTitle = document.createElement('p');
        legendTitle.innerText = title;
        legendItem.appendChild(legendTitle);
        
        const legendImage = document.createElement('img');
        legendImage.src = legendUrl;
        legendImage.alt = `Legend for ${title}`;
        legendImage.onerror = function() {
            this.style.display = 'none';
            const errorText = document.createElement('p');
            errorText.innerText = 'Legend not available';
            errorText.className = 'legend-error';
            legendItem.appendChild(errorText);
        };
        legendItem.appendChild(legendImage);
        
        legendElement.appendChild(legendItem);
    });
    
    // Show message if no layers are visible
    if (visibleLayers.length === 0) {
        const noLayersMsg = document.createElement('p');
        noLayersMsg.innerText = 'No layers visible. Use the layer switcher to display layers.';
        legendElement.appendChild(noLayersMsg);
    }
}

// Create initial legend
createLegend();

// Update legend when layer visibility changes
map.getLayers().forEach(layer => {
    if (layer instanceof ol.layer.Group) {
        layer.getLayers().forEach(subLayer => {
            subLayer.on('change:visible', createLegend);
        });
    } else {
        layer.on('change:visible', createLegend);
    }
});

// Create popup overlay
const popup = new ol.Overlay({
    element: document.getElementById('popup'),
    autoPan: true,
    autoPanAnimation: {
        duration: 250
    }
});
map.addOverlay(popup);

// Popup closer element
const closer = document.getElementById('popup-closer');
if (closer) {
    closer.onclick = function() {
        popup.setPosition(undefined);
        closer.blur();
        return false;
    };
}

// Handle map clicks - show feature info
map.on('singleclick', function(evt) {
    const coordinate = evt.coordinate;
    const pixel = map.getEventPixel(evt.originalEvent);
    const popupContent = document.getElementById('popup-content');
    
    // Clear previous content
    popupContent.innerHTML = '';
    
    // Check visible WMS layers for feature info
    let hasFeatureInfo = false;
    
    map.forEachLayerAtPixel(pixel, function(layer) {
        if (layer instanceof ol.layer.Image && layer.getVisible() && layer.getSource() instanceof ol.source.ImageWMS) {
            hasFeatureInfo = true;
            const source = layer.getSource();
            const url = source.getFeatureInfoUrl(
                coordinate,
                map.getView().getResolution(),
                map.getView().getProjection().getCode(),
                {'INFO_FORMAT': 'application/json', 'FEATURE_COUNT': 10}
            );
            
            if (url) {
                fetch(url).then(response => {
                    return response.json();
                }).then(data => {
                    if (data.features && data.features.length > 0) {
                        // Create header for the layer
                        const layerTitle = document.createElement('h5');
                        layerTitle.innerText = layer.get('title');
                        popupContent.appendChild(layerTitle);
                        
                        // Process each feature
                        data.features.forEach(feature => {
                            const properties = feature.properties;
                            const featureInfo = document.createElement('div');
                            featureInfo.className = 'feature-info';
                            
                            // Create a table for the properties
                            const table = document.createElement('table');
                            table.className = 'info-table';
                            
                            Object.entries(properties).forEach(([key, value]) => {
                                if (key !== 'bbox' && value !== null) {
                                    const row = document.createElement('tr');
                                    
                                    const keyCell = document.createElement('td');
                                    keyCell.className = 'info-key';
                                    keyCell.innerText = key;
                                    row.appendChild(keyCell);
                                    
                                    const valueCell = document.createElement('td');
                                    valueCell.className = 'info-value';
                                    valueCell.innerText = value;
                                    row.appendChild(valueCell);
                                    
                                    table.appendChild(row);
                                }
                            });
                            
                            featureInfo.appendChild(table);
                            popupContent.appendChild(featureInfo);
                        });
                        
                        // Show the popup
                        popup.setPosition(coordinate);
                    }
                }).catch(error => {
                    console.error('Error fetching feature info:', error);
                });
            }
        }
    });
    
    // If no visible WMS layers at click point, hide popup
    if (!hasFeatureInfo) {
        popup.setPosition(undefined);
    }
});

// Add hover effect for interactive layers
map.on('pointermove', function(evt) {
    if (evt.dragging) return;
    
    const pixel = map.getEventPixel(evt.originalEvent);
    const hasFeature = map.hasFeatureAtPixel(pixel);
    
    map.getTargetElement().style.cursor = hasFeature ? 'pointer' : '';
});
