<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:sld="http://www.opengis.net/sld" version="1.0.0" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>Greece_pm10_concentration_map_2020</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="intervals">
              <sld:ColorMapEntry color="#f59053" quantity="1.2" label="&lt;= 1.2000"/>
              <sld:ColorMapEntry color="#fedf99" quantity="1.3999999999999999" label="1.2000 - 1.4000"/>
              <sld:ColorMapEntry color="#ddf1b4" quantity="1.6000000000000001" label="1.4000 - 1.6000"/>
              <sld:ColorMapEntry color="#abdda4" quantity="1.8" label="1.6000 - 1.8000"/>
              <sld:ColorMapEntry color="#abdda4" quantity="inf" label="> 1.8000"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
