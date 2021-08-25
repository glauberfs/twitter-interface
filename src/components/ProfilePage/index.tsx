import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Glauber Felipe</h1>
        <h2>@glauberfelipe79</h2>

        <p>
          Developer at <a href="https://twitter.com/glauberfelipe79">@glauberfelipe79</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Minas Gerais, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 24 de janeiro de 1994
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>9</strong>
          </span>
          <span>
            <strong>11 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
