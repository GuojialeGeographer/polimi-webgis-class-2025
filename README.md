# 希腊空气质量分析 - WebGIS项目 | Air Quality Analysis in Greece - WebGIS Project

[中文版](#chinese) | [English Version](#english)

<a id="chinese"></a>
## 中文版

### 项目概述

这是一个基于WebGIS的希腊空气质量分析与监测项目。通过整合多源遥感数据和地理信息系统技术，本项目提供了希腊全境空气污染的综合分析与可视化。

**网站访问地址**：[https://guojialegeographer.github.io/polimi-webgis-class-2025/index.html](https://guojialegeographer.github.io/polimi-webgis-class-2025/index.html)

### 项目特点

- 基于OpenLayers 8.2.0构建的交互式WebGIS地图
- 包含主页、工作流程、分析结果和交互式地图的多页面展示
- 响应式设计，兼容各种设备屏幕
- 集成多种底图和专题图层
- 详细的空气污染数据分析与可视化

### 研究内容

本项目重点分析希腊的三种主要空气污染物：
- **NO₂**（二氧化氮）
- **PM2.5**（细颗粒物）
- **PM10**（可吸入颗粒物）

研究内容包括：
1. 2013-2022年污染物浓度的时间序列分析
2. 2020年污染物的空间分布与分级
3. 2022年与2017-2021年平均值的对比分析
4. 土地覆盖与污染物之间的关系研究
5. 人口暴露风险评估

### 技术架构

#### 前端技术

- **HTML5/CSS3/JavaScript**：基础前端技术
- **HTML5 UP Massively 模板**：响应式网站框架
- **Bootstrap 5.3.3**：UI组件库
- **jQuery**：JavaScript功能库
- **Vite 6.3.4**：前端构建工具

#### 地图技术

- **OpenLayers 8.2.0**：主要地图渲染库
- **ol-layerswitcher 4.1.1**：图层切换控件
- **GeoServer**：地图服务器（WMS服务）
- **Bing Maps**：第三方底图服务

### 项目结构

```
polimi-webgis-class-2025/
├── index.html              # 主页
├── pages/                  # 页面目录
│   ├── workflow.html       # 工作流程页面
│   ├── results.html        # 结果展示页面
│   └── webgis.html         # WebGIS地图页面
├── assets/                 # 资源文件
│   ├── css/
│   │   ├── main.css        # 主样式表
│   │   ├── noscript.css    # 无JS样式表
│   │   └── custom-styles.css  # 自定义样式
│   ├── js/
│   │   ├── map.js          # 地图配置文件
│   │   └── [其他JS文件]
│   └── libraries/
│       ├── ol-8.2.0/       # OpenLayers库
│       └── bootstrap-5.0.2-dist/  # Bootstrap库
├── images/                 # 网站图片资源
├── pictures/               # 分析结果图片
└── symbology/              # 符号样式文件
```

### 主要功能

#### 1. 网站导航系统

网站包含四个主要页面：
- **Home**：项目介绍与研究区概况
- **Workflow**：数据处理与分析工作流程
- **Results**：分析结果与验证
- **WebGIS**：交互式地图应用

#### 2. WebGIS地图功能

##### 底图图层
- OpenStreetMap（默认底图）
- Bing Maps道路图与卫星影像（备选底图）

##### 专题图层
- 空气污染物浓度分布图层（NO₂、PM2.5、PM10）
- 人口密度分布图层
- 土地覆盖分类图层
- 污染物与人口双变量分析图层

##### 地图控件
- 比例尺
- 全屏控件
- 鼠标位置显示
- 图层切换器

#### 3. 数据分析与可视化

- 污染物时间序列趋势图表
- 污染物空间分布热力图
- 人口暴露风险评估饼图
- 土地覆盖与污染关系分析图表

### 研究方法

#### 1. 数据收集

- **空气质量监测数据**：CAMS欧洲空气质量再分析数据集（2013-2022）
- **土地覆盖数据**：ESA CCI土地覆盖数据集（2022）
- **人口数据**：WorldPop 2020年人口统计
- **行政边界数据**：GAUL Level 2行政区划数据

#### 2. 数据处理与整合

- 数据裁剪至希腊国界范围
- 统一坐标系（WGS84 EPSG:4326）
- NetCDF数据处理与月度聚合
- 栅格数据年均值计算与分级

#### 3. 空间分析与建模

- 土地覆盖重分类（IPCC分类系统）
- 分区统计（城市建成区）
- 污染物趋势分析（2013-2022）
- 人口暴露等级划分（五分位法）

#### 4. 暴露与风险评估

- 基于欧盟标准的污染物分级
- 双变量制图（污染水平×人口密度）
- 人口暴露比例计算与饼图可视化

### 主要发现

1. 2013-2022年间，希腊空气污染水平总体呈上升趋势
2. 污染物主要集中在城市区域，尤其是雅典等城市中心
3. PM2.5对人口的暴露风险最高，全部人口均暴露在相对较高的污染水平中
4. NO₂和PM10的人口暴露水平相对较低
5. 城市区域虽然仅占国土面积的小部分，但承担了大部分的污染负担和人口密度

### 建议措施

1. **优化城市交通**：推广电动车和公共交通，限制高排放车辆进入市中心
2. **加强工业排放控制**：对城市附近工厂实施时段性生产限制和实时监控
3. **增加绿化覆盖**：发展城市森林和绿化带，吸收污染物并改善扩散条件
4. **部署高分辨率监测网络**：在高风险区域安装传感器，实现实时跟踪和预警
5. **加强公共健康保护**：提供及时的污染警告，鼓励在污染高峰期减少户外活动

### 项目团队

本项目由第5组完成。

### 许可证

本项目使用[CCA 3.0许可证](https://html5up.net/license)，网站模板基于[HTML5 UP](https://html5up.net/)的Massively模板。

---

<a id="english"></a>
## English Version

### Project Overview

This is a WebGIS-based air quality analysis and monitoring project for Greece. By integrating multi-source remote sensing data and geographic information system technology, this project provides comprehensive analysis and visualization of air pollution across Greece.

**Website URL**: [https://guojialegeographer.github.io/polimi-webgis-class-2025/index.html](https://guojialegeographer.github.io/polimi-webgis-class-2025/index.html)

### Project Features

- Interactive WebGIS map built with OpenLayers 8.2.0
- Multi-page presentation including home page, workflow, analysis results, and interactive map
- Responsive design, compatible with various device screens
- Integration of multiple base maps and thematic layers
- Detailed air pollution data analysis and visualization

### Research Content

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

### Technical Architecture

#### Frontend Technologies

- **HTML5/CSS3/JavaScript**: Basic frontend technologies
- **HTML5 UP Massively Template**: Responsive website framework
- **Bootstrap 5.3.3**: UI component library
- **jQuery**: JavaScript functionality library
- **Vite 6.3.4**: Frontend build tool

#### Mapping Technologies

- **OpenLayers 8.2.0**: Main map rendering library
- **ol-layerswitcher 4.1.1**: Layer switching control
- **GeoServer**: Map server (WMS service)
- **Bing Maps**: Third-party base map service

### Project Structure

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

### Main Functions

#### 1. Website Navigation System

The website contains four main pages:
- **Home**: Project introduction and research area overview
- **Workflow**: Data processing and analysis workflow
- **Results**: Analysis results and validation
- **WebGIS**: Interactive map application

#### 2. WebGIS Map Functions

##### Base Map Layers
- OpenStreetMap (default base map)
- Bing Maps road map and satellite imagery (alternative base maps)

##### Thematic Layers
- Air pollutant concentration distribution layers (NO₂, PM2.5, PM10)
- Population density distribution layer
- Land cover classification layer
- Pollutant and population bivariate analysis layer

##### Map Controls
- Scale line
- Full screen control
- Mouse position display
- Layer switcher

#### 3. Data Analysis and Visualization

- Pollutant time series trend charts
- Pollutant spatial distribution heat maps
- Population exposure risk assessment pie charts
- Land cover and pollution relationship analysis charts

### Research Methods

#### 1. Data Collection

- **Air Quality Monitoring Data**: CAMS European Air Quality Reanalysis dataset (2013-2022)
- **Land Cover Data**: ESA CCI Land Cover dataset (2022)
- **Population Data**: WorldPop 2020 population statistics
- **Administrative Boundary Data**: GAUL Level 2 administrative division data

#### 2. Data Processing and Integration

- Data clipping to Greece's national boundary
- Unified coordinate system (WGS84 EPSG:4326)
- NetCDF data processing and monthly aggregation
- Raster data annual average calculation and classification

#### 3. Spatial Analysis and Modeling

- Land cover reclassification (IPCC classification system)
- Zonal statistics (urban built-up areas)
- Pollutant trend analysis (2013-2022)
- Population exposure level classification (quintile method)

#### 4. Exposure and Risk Assessment

- Pollutant classification based on EU standards
- Bivariate mapping (pollution level × population density)
- Population exposure proportion calculation and pie chart visualization

### Key Findings

1. Between 2013-2022, air pollution levels in Greece showed an overall upward trend
2. Pollutants are mainly concentrated in urban areas, especially in city centers like Athens
3. PM2.5 poses the highest exposure risk to the population, with the entire population exposed to relatively high pollution levels
4. NO₂ and PM10 have relatively lower population exposure levels
5. Urban areas, while occupying only a small proportion of the national territory, bear most of the pollution burden and population density

### Recommended Measures

1. **Optimize Urban Transportation**: Promote electric vehicles and public transportation, restrict high-emission vehicles in city centers
2. **Strengthen Industrial Emission Control**: Implement time-based production restrictions and real-time monitoring for factories near urban areas
3. **Increase Green Coverage**: Develop urban forests and green belts to absorb pollutants and improve dispersion conditions
4. **Deploy High-Resolution Monitoring Networks**: Install sensors in high-risk areas for real-time tracking and early warning
5. **Enhance Public Health Protection**: Provide timely pollution warnings and encourage reduced outdoor activities during pollution peaks

### Project Team

This project was completed by Group 5.

### License

This project uses the [CCA 3.0 license](https://html5up.net/license), with the website template based on [HTML5 UP](https://html5up.net/)'s Massively template.
