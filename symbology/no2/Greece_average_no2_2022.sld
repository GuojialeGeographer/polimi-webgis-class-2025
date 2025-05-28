<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:sld="http://www.opengis.net/sld" version="1.0.0" xmlns:ogc="http://www.opengis.net/ogc">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>Greece_average_no2_2022</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="ramp">
              <sld:ColorMapEntry label="-3.7293" quantity="-3.7292616000000001" color="#30123b"/>
              <sld:ColorMapEntry label="-0.8783" quantity="-0.87828399999999995" color="#28bceb"/>
              <sld:ColorMapEntry label="1.9727" quantity="1.9726935999999999" color="#a4fc3c"/>
              <sld:ColorMapEntry label="4.8237" quantity="4.8236711999999997" color="#fb7e21"/>
              <sld:ColorMapEntry label="7.6746" quantity="7.6746487999999999" color="#7a0403"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
