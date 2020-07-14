import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 2</Role>
      <UserRow nickname="Yuri Palacio" />
      <UserRow nickname="Felipe Camillo" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Mordomo Alfredo" isBot />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Sicrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Sicrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Sicrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Sicrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Sicrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Sicrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Sicrano" />
    </Container>
  );
};

export default UserList;
