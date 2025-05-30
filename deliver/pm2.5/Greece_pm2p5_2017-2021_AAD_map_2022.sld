<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:sld="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" version="1.0.0">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>Greece_pm2p5_2017-2021_AAD_map_2022</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="intervals">
              <sld:ColorMapEntry color="#fde725" label="&lt;= -1.5000" quantity="-1.5"/>
              <sld:ColorMapEntry color="#fde725" label="-1.5000 - 0.0000" quantity="0"/>
              <sld:ColorMapEntry color="#5dc963" label="0.0000 - 1.5000" quantity="1.5"/>
              <sld:ColorMapEntry color="#21908d" label="1.5000 - 3.0000" quantity="3"/>
              <sld:ColorMapEntry color="#440154" label="> 3.0000" quantity="inf"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
