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
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:dtm' }
    })
});

let ndvi = new ol.layer.Image({
    title: "NDVI",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:ndvi' }
    })
});

let aspect = new ol.layer.Image({
    title: "Aspect",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:aspect' }
    })
});

let dusaf = new ol.layer.Image({
    title: "DUSAF",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:dusaf' }
    })
});

let faults = new ol.layer.Image({
    title: "Faults",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:faults' }
    })
});

let plan = new ol.layer.Image({
    title: "Plan Curvature",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:plan' }
    })
});

let profile = new ol.layer.Image({
    title: "Profile Curvature",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:profile' }
    })
});

let rivers = new ol.layer.Image({
    title: "Rivers",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:rivers' }
    })
});

let roads = new ol.layer.Image({
    title: "Roads",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:roads' }
    })
});

let slope = new ol.layer.Image({
    title: "Slope",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
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
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:LandslideSusceptibilityMap' }
    })
});

let NLZ = new ol.layer.Image({
    visible: false,
    title: "No Landslide Zones",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:NLZ' }
    })
});

let LS = new ol.layer.Image({
    visible: false,
    title: "Landslide Inventory",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
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
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:trainPoints' }
    })
});

let testingPoints = new ol.layer.Image({
    visible: false,
    title: "Testing points",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
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
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:LandslideSusceptibilityMap_reclass' }
    })
});

let pop = new ol.layer.Image({
    title: "Population Map",
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
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
        url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_06/wms',
        params: { 'LAYERS': 'gisgeoserver_06:g6_area' }
    })
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
    'very_low': [createHaloStyle('rgb(198, 233, 255)'), createPointStyle('rgb(198, 233, 255)')],
    'low': [createHaloStyle('rgb(142, 202, 240)'), createPointStyle('rgb(142, 202, 240)')],
    'moderate': [createHaloStyle('rgb(74, 141, 183)'), createPointStyle('rgb(74, 141, 183)')],
    'high': [createHaloStyle('rgb(42, 111, 151)'), createPointStyle('rgb(42, 111, 151)')],
    'very_high': [createHaloStyle('rgb(22, 65, 114)'), createPointStyle('rgb(22, 65, 114)')],
    'hazardous': [createHaloStyle('rgb(8, 37, 103)'), createPointStyle('rgb(8, 37, 103)')]
};

// Sample monitoring station data
const monitoringStations = [
    { name: '雅典中心站', lon: 23.7275, lat: 37.9838, pollutionLevel: 'high', pm25: 42, pm10: 68, no2: 45, o3: 62 },
    { name: '塞萨洛尼基站', lon: 22.9444, lat: 40.6401, pollutionLevel: 'moderate', pm25: 28, pm10: 48, no2: 32, o3: 58 },
    { name: '帕特雷站', lon: 21.7369, lat: 38.2466, pollutionLevel: 'low', pm25: 15, pm10: 32, no2: 22, o3: 48 },
    { name: '伊拉克利翁站', lon: 25.1442, lat: 35.3387, pollutionLevel: 'very_low', pm25: 8, pm10: 18, no2: 12, o3: 42 },
    { name: '拉里萨站', lon: 22.4225, lat: 39.6391, pollutionLevel: 'moderate', pm25: 26, pm10: 45, no2: 28, o3: 55 },
    { name: '罗德岛站', lon: 28.2278, lat: 36.4511, pollutionLevel: 'low', pm25: 14, pm10: 30, no2: 18, o3: 50 },
    { name: '科孚岛站', lon: 19.9217, lat: 39.6243, pollutionLevel: 'very_low', pm25: 10, pm10: 22, no2: 15, o3: 45 },
    { name: '圣托里尼站', lon: 25.4615, lat: 36.3932, pollutionLevel: 'low', pm25: 12, pm10: 25, no2: 16, o3: 47 },
    { name: '伯罗奔尼撒站', lon: 22.3735, lat: 37.5088, pollutionLevel: 'high', pm25: 38, pm10: 65, no2: 42, o3: 60 },
    { name: '比雷埃夫斯港站', lon: 23.6483, lat: 37.9427, pollutionLevel: 'very_high', pm25: 56, pm10: 85, no2: 58, o3: 72 },
    { name: '奥林匹亚站', lon: 21.6298, lat: 37.6379, pollutionLevel: 'low', pm25: 16, pm10: 34, no2: 20, o3: 46 },
    { name: '德尔菲站', lon: 22.5011, lat: 38.4824, pollutionLevel: 'very_low', pm25: 9, pm10: 20, no2: 14, o3: 44 },
    { name: '迈锡尼站', lon: 22.7264, lat: 37.7306, pollutionLevel: 'moderate', pm25: 24, pm10: 42, no2: 26, o3: 52 },
    { name: '克里特岛西部站', lon: 23.8183, lat: 35.5138, pollutionLevel: 'low', pm25: 18, pm10: 36, no2: 22, o3: 49 },
    { name: '克里特岛东部站', lon: 25.7473, lat: 35.2089, pollutionLevel: 'moderate', pm25: 22, pm10: 40, no2: 25, o3: 51 },
    { name: '工业区站', lon: 22.8732, lat: 40.5123, pollutionLevel: 'hazardous', pm25: 68, pm10: 120, no2: 75, o3: 85 }
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
    title: "空气质量监测站",
    source: monitoringSource,
    zIndex: 10
});

// Air Quality Layers Group
let airQualityLayers = new ol.layer.Group({
    title: "空气质量数据",
    layers: [monitoringLayer]
});

// Map Initialization
let map = new ol.Map({
    target: document.getElementById('map'),
    layers: [basemapLayers, airQualityLayers, exposureAssess, landslideMap, trainTestPoints, envFactorsLayers, area],
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
        
        // Translate pollution levels to Chinese
        const pollutionLevelMap = {
            'very_low': '非常低',
            'low': '低',
            'moderate': '中等',
            'high': '高',
            'very_high': '非常高',
            'hazardous': '危险'
        };
        
        // Create popup content
        let popupContent = `
            <div class="feature-info">
                <h3>${name}</h3>
                <table class="info-table">
                    <tr>
                        <td class="info-key">污染等级:</td>
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
                        <td class="info-key">二氧化氮 (NO₂):</td>
                        <td class="info-value">${no2} μg/m³</td>
                    </tr>
                    <tr>
                        <td class="info-key">臭氧 (O₃):</td>
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
        <div class="legend-color" style="background-color: rgb(198, 233, 255);"></div>
        <div class="legend-text">非常低</div>
    </div>
    <div class="legend-item">
        <div class="legend-color" style="background-color: rgb(142, 202, 240);"></div>
        <div class="legend-text">低</div>
    </div>
    <div class="legend-item">
        <div class="legend-color" style="background-color: rgb(74, 141, 183);"></div>
        <div class="legend-text">中等</div>
    </div>
    <div class="legend-item">
        <div class="legend-color" style="background-color: rgb(42, 111, 151);"></div>
        <div class="legend-text">高</div>
    </div>
    <div class="legend-item">
        <div class="legend-color" style="background-color: rgb(22, 65, 114);"></div>
        <div class="legend-text">非常高</div>
    </div>
    <div class="legend-item">
        <div class="legend-color" style="background-color: rgb(8, 37, 103);"></div>
        <div class="legend-text">危险</div>
    </div>
`;
