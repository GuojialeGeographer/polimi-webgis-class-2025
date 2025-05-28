<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:sld="http://www.opengis.net/sld" version="1.0.0" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>Greece_average_pm10_2022</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="ramp">
              <sld:ColorMapEntry color="#d7191c" quantity="9.3419791492082993" label="9.3420"/>
              <sld:ColorMapEntry color="#fdae61" quantity="17.959348516759725" label="17.9593"/>
              <sld:ColorMapEntry color="#ffffbf" quantity="26.576717884311151" label="26.5767"/>
              <sld:ColorMapEntry color="#abdda4" quantity="35.194087251862577" label="35.1941"/>
              <sld:ColorMapEntry color="#2b83ba" quantity="43.811456619414002" label="43.8115"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
