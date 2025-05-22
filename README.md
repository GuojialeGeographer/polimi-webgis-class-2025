# GIS 2025 - Politecnico di Milano
Repository for the Web Development part of the GIS lessons 2025.

The contents of this repository are entirely for learning purposes. All contents and code is completely open and available and based on open-source software.

Students are encouraged to fork and modify this template as much as they want.

https://guojialegeographer.github.io/polimi-webgis-class-2025/

## Installing
Clone the repository using the command 
```sh
git clone https://github.com/Diuke/polimi-webgis-class-2025 
```

Or fork the repository for having your own copy.

This application uses npm as the package manager and Vite as the web server.
It uses Node version 16 or higher.

First, install the dependencies using the command:
```sh
npm install
```

Run the project using the command.
```sh
npm run start
```

This will start a Vite server. Open the application in http://localhost:5173/

Using Vite it is possible to follow the examples of OpenLayers, as well as use more advanced TypeScript and Visual Studio Code capabilities, such 
as intellisense, fast reload, documentation, and code completion.

## Building
For testing, it is recomended to first try a local build with the command:
```sh
npm run build-local
```

Then, for testing the local build, run the preview command:
```sh
npm run preview
```

If everything is correct, generate the production build by running the production build command:
```sh
npm run build-production
```

This will create the folder /docs (or overwrite it, if it is already created) with all the necessary files for hosting the website in GitHub Pages.

In case the name of the repository is changed during fork, modify the configuration file (vite.config.js), and the package.json file accordingly for different build configurations and folder structures.

## Credits
This project is entirely academic and non-profit.

The website is based on the template:

Twenty by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

Adaptation to Vite and OpenLayers by Diuke
https://github.com/Diuke

Attributions for basemaps:

© Stadia Maps - https://stadiamaps.com/

© OpenMapTiles - https://openmaptiles.org/

© OpenStreetMap - https://www.openstreetmap.org/copyright

© Stamen Design - https://stamen.com/

© ArcGIS World Topo Map Tiles - https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer

© ArcGIS World Imagery Tiles - https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer


