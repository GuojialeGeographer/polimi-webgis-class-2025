<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:sld="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" version="1.0.0">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>Greece_pm10_2017-2021_AAD_map_2022</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="intervals">
              <sld:ColorMapEntry color="#d7191c" label="&lt;= -10.0000" quantity="-10"/>
              <sld:ColorMapEntry color="#d74322" label="-10.0000 - -4.0000" quantity="-4"/>
              <sld:ColorMapEntry color="#e58235" label="-4.0000 - 0.0000" quantity="0"/>
              <sld:ColorMapEntry color="#fee6a2" label="0.0000 - 4.0000" quantity="4"/>
              <sld:ColorMapEntry color="#54a0b3" label="4.0000 - 10.0000" quantity="10"/>
              <sld:ColorMapEntry color="#2046ba" label="> 10.0000" quantity="inf"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
