import React from 'react';
import {
  ColorBox, MapFrame, MapWrapper, Title,
} from './styles';

export default function DeliveryMap() {
  return (
    <MapWrapper>
      <Title>Regiões de entrega</Title>
      <ColorBox color="#A8B78A">Entrega Grátis (Vila Sônia e região)</ColorBox>
      <ColorBox color="#FFA473">R$20,00 por entrega (até 10km)</ColorBox>
      Demais localidades: Uber Frete (Valor a Calcular)
      <MapFrame
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
