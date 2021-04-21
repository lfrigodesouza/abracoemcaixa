import React from 'react';
import { H2, SubTitle, Text } from '../../styles';

export default function Festa() {
  return (
    <div>
      <Text>
        &quot;Quem teve a ideia de cortar o tempo em fatias, a que se deu o nome de ano, foi um
        indivíduo genial. Industrializou a esperança fazendo-a funcionar no limite da exaustão.
      </Text>
      <Text>
        Doze meses dão para qualquer ser humano se cansar e entregar os pontos. Aí entra o milagre
        da renovação e tudo começa outra vez com outro número e outra vontade de acreditar que daqui
        pra adiante vai ser diferente
      </Text>
      <Text>
        Para você, desejamos o sonho realizado. O amor esperado. A esperança renovada.&quot;
      </Text>
      <Text style={{ textAlign: 'right' }}>Autor: Roberto Pompeu de Toledo</Text>
      <SubTitle style={{ fontWeight: 'bold' }}>
        Estes são os desejos da equipe &apos;Abraço em Caixa&apos; para você neste dia tão especial
        ❤
      </SubTitle>

      <SubTitle>Dicas de como aproveitar o seu presente</SubTitle>
      <H2>Bolo e brigadeiros</H2>
      <Text>Conserve o bolo e os brigadeiros em geladeira e consuma em até 2 dias!</Text>
    </div>
  );
}
