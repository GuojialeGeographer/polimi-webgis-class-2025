import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import { Map, View, Overlay } from 'ol';
import { Tile, Image, Group, Vector } from 'ol/layer';
import { OSM, ImageWMS, XYZ, StadiaMaps } from 'ol/source';
import VectorSource from 'ol/source/Vector';
import { GeoJSON } from 'ol/format';
import { fromLonLat } from 'ol/proj';
import { ScaleLine, FullScreen, MousePosition, defaults as defaultControls } from 'ol/control';
import LayerSwitcher from 'ol-layerswitcher';
import { createStringXY } from 'ol/coordinate';
import { Style, Fill, Stroke } from 'ol/style';
import { click } from 'ol/events/condition';

// OpenStreetMap base layer
let osm = new Tile({
    title: "OpenStreetMap",
    type: "base",
    visible: true,
    source: new OSM()
});

// Create layer group and add layers
let basemapLayers = new Group({
    title: "Base Maps",
    layers: [osm]
});

// Air quality monitoring stations layer
let monitoringStations = new Image({
    title: "Monitoring Stations",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_air_monitoring_stations' }
    }),
    visible: true
});

// Urban areas layer
let urbanAreas = new Image({
    title: "Urban Areas",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_urban_areas' }
    }),
    visible: false
});

// Road network layer
let roadNetwork = new Image({
    title: "Road Network",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_road_network' }
    }),
    visible: false
});

// Industrial areas layer
let industrialAreas = new Image({
    title: "Industrial Areas",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_industrial_areas' }
    }),
    visible: false
});

// Land use layer
let landUse = new Image({
    title: "Land Use",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_land_use' }
    }),
    visible: false
});

// Meteorological stations layer
let meteoStations = new Image({
    title: "Meteorological Stations",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_meteo_stations' }
    }),
    visible: false
});

// Port and shipping lanes layer
let shippingLanes = new Image({
    title: "Ports and Shipping Lanes",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_shipping_lanes' }
    }),
    visible: false
});

// Tourist areas layer
let touristAreas = new Image({
    title: "Tourist Areas",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_tourist_areas' }
    }),
    visible: false
});

// Base data layers group
let baseDataLayers = new Group({
    title: "Base Data Layers",
    layers: [monitoringStations, urbanAreas, roadNetwork, industrialAreas, landUse, meteoStations, shippingLanes, touristAreas],
    fold: 'open'
});

// Air quality index map
let aqiMap = new Image({
    title: "Air Quality Index Map",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_air_quality_index' }
    }),
    visible: true
});

let pm25Map = new Image({
    visible: false,
    title: "PM2.5 Concentration",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_pm25_concentration' }
    })
});

let pm10Map = new Image({
    visible: false,
    title: "PM10 Concentration",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_pm10_concentration' }
    })
});

let no2Map = new Image({
    visible: false,
    title: "Nitrogen Dioxide (NO2) Concentration",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_no2_concentration' }
    })
});

let o3Map = new Image({
    visible: false,
    title: "Ozone (O3) Concentration",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_o3_concentration' }
    })
});

let so2Map = new Image({
    visible: false,
    title: "Sulfur Dioxide (SO2) Concentration",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_so2_concentration' }
    })
});

let airQualityLayers = new Group({
    title: "Air Quality Maps",
    layers: [aqiMap, pm25Map, pm10Map, no2Map, o3Map, so2Map],
    fold: 'open'
});

// Validation points
let validationPoints = new Image({
    visible: false,
    title: "Validation Points",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_validation_points' }
    })
});

let calibrationPoints = new Image({
    visible: false,
    title: "Calibration Points",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_calibration_points' }
    })
});

let modelValidation = new Group({
    title: "Model Validation",
    layers: [validationPoints, calibrationPoints],
    fold: 'close'
});

// Health risk assessment
let populationDensity = new Image({
    title: "Population Density",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_population_density' }
    }),
    visible: false
});

let vulnerablePopulation = new Image({
    title: "Vulnerable Population",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_vulnerable_population' }
    }),
    visible: false
});

let healthRiskMap = new Image({
    title: "Health Risk Index",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_health_risk_index' }
    }),
    visible: false
});

let seasonalTourismImpact = new Image({
    title: "Seasonal Tourism Impact",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_tourism_impact' }
    }),
    visible: false
});

let healthRiskAssessment = new Group({
    title: "Health Risk Assessment",
    layers: [populationDensity, vulnerablePopulation, healthRiskMap, seasonalTourismImpact],
    fold: 'close'
});

// Study area - Greece
let greeceOutline = new Image({
    title: "Greece Outline",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:greece_outline' }
    }),
    visible: true
});

// Map Initialization - Centered on Greece
let map = new Map({
    target: document.getElementById('map'),
    layers: [basemapLayers, baseDataLayers, airQualityLayers, modelValidation, healthRiskAssessment, greeceOutline],
    view: new View({
        center: fromLonLat([23.7275, 37.9838]), // Athens, Greece coordinates
        zoom: 7 // Zoom level to show most of Greece
    }),
    controls: defaultControls().extend([
        new ScaleLine(),
        new FullScreen(),
        new MousePosition({
            coordinateFormat: createStringXY(4),
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
let stadiaOutdoors = new Tile({
    title: 'Stadia Outdoors',
    type: 'base',
    visible: false,
    source: new StadiaMaps({
        layer: 'outdoors',
        apiKey: 'your-api-key' // Replace with your API key or use demo key for testing
    })
});

let stadiaAlidade = new Tile({
    title: 'Stadia Alidade',
    type: 'base',
    visible: false,
    source: new StadiaMaps({
        layer: 'alidade_smooth',
        apiKey: 'your-api-key' // Replace with your API key or use demo key for testing
    })
});

// Add OpenTopoMap
let openTopoMap = new Tile({
    title: 'OpenTopoMap',
    type: 'base',
    visible: false,
    source: new XYZ({
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
            if (layer instanceof Group) {
                collectVisibleLayers(layer);
            } else if (layer.getVisible() && layer.getSource() instanceof ImageWMS) {
                visibleLayers.push(layer);
            }
        });
    }
    
    // Start with the top-level layers
    map.getLayers().forEach(layer => {
        if (layer instanceof Group) {
            collectVisibleLayers(layer);
        } else if (layer.getVisible() && layer.getSource() instanceof ImageWMS) {
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
    if (layer instanceof Group) {
        layer.getLayers().forEach(subLayer => {
            subLayer.on('change:visible', createLegend);
        });
    } else {
        layer.on('change:visible', createLegend);
    }
});

// Create popup overlay
const popup = new Overlay({
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
        if (layer instanceof Image && layer.getVisible() && layer.getSource() instanceof ImageWMS) {
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
