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

// Air Quality Monitoring Points - Custom Vector Layer
// Define styles for different pollution levels
const createPointStyle = (color, size = 8) => {
    return new ol.style.Style({
        image: new ol.style.Circle({
            radius: size,
            fill: new ol.style.Fill({ color: color }),
            stroke: new ol.style.Stroke({ color: '#000000', width: 1.5 })
        }),
        // Add a larger semi-transparent circle for better visibility when zoomed out
        zIndex: 1
    });
};

const createHaloStyle = (color, size = 8) => {
    return new ol.style.Style({
        image: new ol.style.Circle({
            radius: size + 6,
            fill: new ol.style.Fill({ color: color.replace(')', ', 0.3)').replace('rgb', 'rgba') }),
            stroke: new ol.style.Stroke({ color: color.replace(')', ', 0.5)').replace('rgb', 'rgba'), width: 1 })
        }),
        zIndex: 0
    });
};

// Define pollution level styles with colors - using blue color scheme
const pollutionStyles = {
    'very_low': [createHaloStyle('rgb(179, 215, 237)'), createPointStyle('rgb(179, 215, 237)')],
    'low': [createHaloStyle('rgb(128, 185, 227)'), createPointStyle('rgb(128, 185, 227)')],
    'moderate': [createHaloStyle('rgb(77, 145, 217)'), createPointStyle('rgb(77, 145, 217)')],
    'high': [createHaloStyle('rgb(26, 115, 207)'), createPointStyle('rgb(26, 115, 207)')],
    'very_high': [createHaloStyle('rgb(3, 98, 167)'), createPointStyle('rgb(3, 98, 167)')],
    'hazardous': [createHaloStyle('rgb(2, 58, 107)'), createPointStyle('rgb(2, 58, 107)')]
};

// Sample monitoring station data
const monitoringStations = [
    { name: 'Athens Central Station', lon: 23.7275, lat: 37.9838, pollutionLevel: 'high', pm25: 42, pm10: 68, no2: 45, o3: 62 },
    { name: 'Thessaloniki City Center Station', lon: 22.9444, lat: 40.6401, pollutionLevel: 'high', pm25: 38, pm10: 60, no2: 40, o3: 58 },
    { name: 'Patras Station', lon: 21.7351, lat: 38.2466, pollutionLevel: 'moderate', pm25: 28, pm10: 45, no2: 30, o3: 50 },
    { name: 'Heraklion Station', lon: 25.1436, lat: 35.3387, pollutionLevel: 'moderate', pm25: 25, pm10: 42, no2: 28, o3: 48 },
    { name: 'Larissa Station', lon: 22.4176, lat: 39.6394, pollutionLevel: 'low', pm25: 18, pm10: 30, no2: 22, o3: 45 },
    { name: 'Volos Station', lon: 22.9403, lat: 39.3619, pollutionLevel: 'low', pm25: 15, pm10: 28, no2: 18, o3: 42 },
    { name: 'Rhodes Station', lon: 28.2176, lat: 36.4349, pollutionLevel: 'moderate', pm25: 20, pm10: 35, no2: 24, o3: 47 },
    { name: 'Ioannina Station', lon: 20.8522, lat: 39.6649, pollutionLevel: 'low', pm25: 12, pm10: 25, no2: 15, o3: 40 },
    { name: 'Chania Station', lon: 24.0176, lat: 35.5138, pollutionLevel: 'very_low', pm25: 10, pm10: 22, no2: 12, o3: 38 },
    { name: 'Piraeus Port Station', lon: 23.6483, lat: 37.9427, pollutionLevel: 'very_high', pm25: 56, pm10: 85, no2: 58, o3: 72 },
    { name: 'Olympia Station', lon: 21.6298, lat: 37.6379, pollutionLevel: 'low', pm25: 16, pm10: 34, no2: 20, o3: 46 },
    { name: 'Delphi Station', lon: 22.5011, lat: 38.4824, pollutionLevel: 'very_low', pm25: 9, pm10: 20, no2: 14, o3: 44 },
    { name: 'Mycenae Station', lon: 22.7264, lat: 37.7306, pollutionLevel: 'moderate', pm25: 24, pm10: 42, no2: 26, o3: 52 },
    { name: 'Knossos Station', lon: 25.1628, lat: 35.2980, pollutionLevel: 'low', pm25: 17, pm10: 32, no2: 21, o3: 45 },
    { name: 'Eastern Crete Station', lon: 25.7473, lat: 35.2089, pollutionLevel: 'moderate', pm25: 22, pm10: 40, no2: 25, o3: 51 },
    { name: 'Industrial Zone Station', lon: 22.8732, lat: 40.5123, pollutionLevel: 'hazardous', pm25: 68, pm10: 120, no2: 75, o3: 85 }
];

// Create features from the monitoring stations
const monitoringFeatures = monitoringStations.map(station => {
    const feature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([station.lon, station.lat])),
        name: station.name,
        pollutionLevel: station.pollutionLevel,
        pm25: station.pm25,
        pm10: station.pm10,
        no2: station.no2,
        o3: station.o3
    });
    
    // Set the style based on pollution level
    feature.setStyle(pollutionStyles[station.pollutionLevel]);
    
    return feature;
});

// Create the vector source and layer
const monitoringSource = new ol.source.Vector({
    features: monitoringFeatures
});

const monitoringLayer = new ol.layer.Vector({
    title: "Air Quality Monitoring Stations",
    source: monitoringSource,
    zIndex: 10
});

// Air Quality Layers Group
let airQualityLayers = new ol.layer.Group({
    title: "Air Quality Data",
    layers: [monitoringLayer]
});

// Map Initialization
let map = new ol.Map({
    target: document.getElementById('map'),
    layers: [basemapLayers, airQualityLayers], // Only keep base map and air quality data layers
    view: new ol.View({
        center: ol.proj.fromLonLat([23.7275, 37.9838]), // Center on Athens
        zoom: 7
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

// Popup functionality
const container = document.getElementById('popup');
const content = document.getElementById('popup-content');
const closer = document.getElementById('popup-closer');

const overlay = new ol.Overlay({
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

// Add click event to display popup
map.on('click', function(evt) {
    const feature = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
        return feature;
    });
    
    if (feature && feature.get('name')) {
        const coordinates = feature.getGeometry().getCoordinates();
        const name = feature.get('name');
        const pollutionLevel = feature.get('pollutionLevel');
        const pm25 = feature.get('pm25');
        const pm10 = feature.get('pm10');
        const no2 = feature.get('no2');
        const o3 = feature.get('o3');
        
        // Map pollution levels to English descriptions
        const pollutionLevelMap = {
            'very_low': 'Very Low',
            'low': 'Low',
            'moderate': 'Moderate',
            'high': 'High',
            'very_high': 'Very High',
            'hazardous': 'Hazardous'
        };
        
        // Create popup content
        let popupContent = `
            <div class="feature-info">
                <h3>${name}</h3>
                <table class="info-table">
                    <tr>
                        <td class="info-key">Pollution Level:</td>
                        <td class="info-value">${pollutionLevelMap[pollutionLevel]}</td>
                    </tr>
                    <tr>
                        <td class="info-key">PM2.5:</td>
                        <td class="info-value">${pm25} μg/m³</td>
                    </tr>
                    <tr>
                        <td class="info-key">PM10:</td>
                        <td class="info-value">${pm10} μg/m³</td>
                    </tr>
                    <tr>
                        <td class="info-key">Nitrogen Dioxide (NO₂):</td>
                        <td class="info-value">${no2} μg/m³</td>
                    </tr>
                    <tr>
                        <td class="info-key">Ozone (O₃):</td>
                        <td class="info-value">${o3} μg/m³</td>
                    </tr>
                </table>
            </div>
        `;
        
        content.innerHTML = popupContent;
        overlay.setPosition(coordinates);
    }
});

// Create legend content
const legendContent = document.getElementById('legend-content');
legendContent.innerHTML = `
    <div class="legend-item">
        <div class="legend-color" style="background-color: rgb(179, 215, 237);"></div>
        <div class="legend-text">Very Low</div>
    </div>
    <div class="legend-item">
        <div class="legend-color" style="background-color: rgb(128, 186, 221);"></div>
        <div class="legend-text">Low</div>
    </div>
    <div class="legend-item">
        <div class="legend-color" style="background-color: rgb(77, 157, 205);"></div>
        <div class="legend-text">Moderate</div>
    </div>
    <div class="legend-item">
        <div class="legend-color" style="background-color: rgb(26, 128, 189);"></div>
        <div class="legend-text">High</div>
    </div>
    <div class="legend-item">
        <div class="legend-color" style="background-color: rgb(3, 98, 167);"></div>
        <div class="legend-text">Very High</div>
    </div>
    <div class="legend-item">
        <div class="legend-color" style="background-color: rgb(2, 58, 107);"></div>
        <div class="legend-text">Hazardous</div>
    </div>
`;
