import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Mordomo Alfredo"
            date="17/07/2020"
            content="Realizada atualização no repositório."
            isBot
          />
        ))}

        <ChannelMessage
          author="Yuri Palacio"
          date="17/07/2020"
          content="Concluído desenvolvimento da interface do Discord"
        />

        <ChannelMessage
          author="Felipe Camillo"
          date="17/07/2020"
          content={
            <>
              <Mention>@Yuri Palacio</Mention>, já que você terminou bora jogar
              um CS?!
            </>
          }
          hasMention
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
