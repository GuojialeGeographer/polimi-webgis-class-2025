<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:sld="http://www.opengis.net/sld" version="1.0.0" xmlns:ogc="http://www.opengis.net/ogc">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>Greece_no2_concentration_map_2020</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="intervals">
              <sld:ColorMapEntry label="&lt;= 1.4000" quantity="1.3999999999999999" color="#3e9cfe"/>
              <sld:ColorMapEntry label="1.4000 - 1.8000" quantity="1.8" color="#48f882"/>
              <sld:ColorMapEntry label="1.8000 - 2.2000" quantity="2.2000000000000002" color="#e2dc38"/>
              <sld:ColorMapEntry label="2.2000 - 2.6000" quantity="2.6000000000000001" color="#ef5911"/>
              <sld:ColorMapEntry label="> 2.6000" quantity="inf" color="#7a0403"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
