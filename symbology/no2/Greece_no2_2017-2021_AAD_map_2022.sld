<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:sld="http://www.opengis.net/sld" version="1.0.0" xmlns:ogc="http://www.opengis.net/ogc">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>Greece_no2_2017-2021_AAD_map_2022_new</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="intervals">
              <sld:ColorMapEntry label="&lt;= -5.0000" quantity="-5" color="#30123b"/>
              <sld:ColorMapEntry label="-5 - -2" quantity="-2" color="#467df4"/>
              <sld:ColorMapEntry label="-2 - 0" quantity="0" color="#19e3ba"/>
              <sld:ColorMapEntry label="0 - 2" quantity="2" color="#ccfcc0"/>
              <sld:ColorMapEntry label="2 - 5" quantity="5" color="#f8721c"/>
              <sld:ColorMapEntry label="> 5" quantity="8" color="#7a0403"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
