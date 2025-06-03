# Air Quality Analysis in Greece - WebGIS Project

## Project Overview

This is a WebGIS-based air quality analysis and monitoring project for Greece. By integrating multi-source remote sensing data and geographic information system technology, this project provides comprehensive analysis and visualization of air pollution across Greece.

**Website URL**: [https://guojialegeographer.github.io/polimi-webgis-class-2025/index.html](https://guojialegeographer.github.io/polimi-webgis-class-2025/index.html)

## Project Features

- Interactive WebGIS map built with OpenLayers 8.2.0
- Multi-page presentation including home page, workflow, analysis results, and interactive map
- Responsive design, compatible with various device screens
- Integration of multiple base maps and thematic layers
- Detailed air pollution data analysis and visualization

## Research Content

This project focuses on analyzing three major air pollutants in Greece:
- **NO₂** (Nitrogen Dioxide)
- **PM2.5** (Fine Particulate Matter)
- **PM10** (Inhalable Particulate Matter)

The research includes:
1. Time series analysis of pollutant concentrations from 2013-2022
2. Spatial distribution and classification of pollutants in 2020
3. Comparative analysis between 2022 and the 2017-2021 average
4. Study of the relationship between land cover and pollutants
5. Population exposure risk assessment

## Technical Architecture

### Frontend Technologies

- **HTML5/CSS3/JavaScript**: Basic frontend technologies
- **HTML5 UP Massively Template**: Responsive website framework
- **Bootstrap 5.3.3**: UI component library
- **jQuery**: JavaScript functionality library
- **Vite 6.3.4**: Frontend build tool

### Mapping Technologies

- **OpenLayers 8.2.0**: Main map rendering library
- **ol-layerswitcher 4.1.1**: Layer switching control
- **GeoServer**: Map server (WMS service)
- **Bing Maps**: Third-party base map service

## Project Structure

```
polimi-webgis-class-2025/
├── index.html              # Home page
├── pages/                  # Pages directory
│   ├── workflow.html       # Workflow page
│   ├── results.html        # Results display page
│   └── webgis.html         # WebGIS map page
├── assets/                 # Resource files
│   ├── css/
│   │   ├── main.css        # Main stylesheet
│   │   ├── noscript.css    # No-JS stylesheet
│   │   └── custom-styles.css  # Custom styles
│   ├── js/
│   │   ├── map.js          # Map configuration file
│   │   └── [Other JS files]
│   └── libraries/
│       ├── ol-8.2.0/       # OpenLayers library
│       └── bootstrap-5.0.2-dist/  # Bootstrap library
├── images/                 # Website image resources
├── pictures/               # Analysis result images
└── symbology/              # Symbol style files
```

## Main Functions

### 1. Website Navigation System

The website contains four main pages:
- **Home**: Project introduction and research area overview
- **Workflow**: Data processing and analysis workflow
- **Results**: Analysis results and validation
- **WebGIS**: Interactive map application

### 2. WebGIS Map Functions

#### Base Map Layers
- OpenStreetMap (default base map)
- Bing Maps road map and satellite imagery (alternative base maps)

#### Thematic Layers
- Air pollutant concentration distribution layers (NO₂, PM2.5, PM10)
- Population density distribution layer
- Land cover classification layer
- Pollutant and population bivariate analysis layer

#### Map Controls
- Scale line
- Full screen control
- Mouse position display
- Layer switcher

### 3. Data Analysis and Visualization

- Pollutant time series trend charts
- Pollutant spatial distribution heat maps
- Population exposure risk assessment pie charts
- Land cover and pollution relationship analysis charts

## Research Methods

### 1. Data Collection

- **Air Quality Monitoring Data**: CAMS European Air Quality Reanalysis dataset (2013-2022)
- **Land Cover Data**: ESA CCI Land Cover dataset (2022)
- **Population Data**: WorldPop 2020 population statistics
- **Administrative Boundary Data**: GAUL Level 2 administrative division data

### 2. Data Processing and Integration

- Data clipping to Greece's national boundary
- Unified coordinate system (WGS84 EPSG:4326)
- NetCDF data processing and monthly aggregation
- Raster data annual average calculation and classification

### 3. Spatial Analysis and Modeling

- Land cover reclassification (IPCC classification system)
- Zonal statistics (urban built-up areas)
- Pollutant trend analysis (2013-2022)
- Population exposure level classification (quintile method)

### 4. Exposure and Risk Assessment

- Pollutant classification based on EU standards
- Bivariate mapping (pollution level × population density)
- Population exposure proportion calculation and pie chart visualization

## Key Findings

1. Between 2013-2022, air pollution levels in Greece showed an overall upward trend
2. Pollutants are mainly concentrated in urban areas, especially in city centers like Athens
3. PM2.5 poses the highest exposure risk to the population, with the entire population exposed to relatively high pollution levels
4. NO₂ and PM10 have relatively lower population exposure levels
5. Urban areas, while occupying only a small proportion of the national territory, bear most of the pollution burden and population density

## Recommended Measures

1. **Optimize Urban Transportation**: Promote electric vehicles and public transportation, restrict high-emission vehicles in city centers
2. **Strengthen Industrial Emission Control**: Implement time-based production restrictions and real-time monitoring for factories near urban areas
3. **Increase Green Coverage**: Develop urban forests and green belts to absorb pollutants and improve dispersion conditions
4. **Deploy High-Resolution Monitoring Networks**: Install sensors in high-risk areas for real-time tracking and early warning
5. **Enhance Public Health Protection**: Provide timely pollution warnings and encourage reduced outdoor activities during pollution peaks

## Project Team

This project was completed by Group 5.

## License

This project uses the [CCA 3.0 license](https://html5up.net/license), with the website template based on [HTML5 UP](https://html5up.net/)'s Massively template.
