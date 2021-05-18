import React from 'react';
import {
  ColorBox, MapFrame, MapWrapper, Title,
} from './styles';

export default function DeliveryMap() {
  function mapClickHandle() {
    window.alert('asd');
  }

  return (
    <MapWrapper>
      <Title>Regiões de entrega</Title>
      <ColorBox color="#A8B78A">Entrega Grátis</ColorBox>
      <ColorBox color="#FFA473">R$20 por entrega</ColorBox>
      <ColorBox color="#DEDEDE">Uber Frete (valor a calcular)</ColorBox>
      <MapFrame
        onPointerDown={mapClickHandle}
        title="Região de Entrega"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/d/embed?mid=17wDPMxfHRo5qh7idAkse7LCl4e1Fnvy5"
        loading="lazy"
        allowFullScreen
      />
    </MapWrapper>
  );
}