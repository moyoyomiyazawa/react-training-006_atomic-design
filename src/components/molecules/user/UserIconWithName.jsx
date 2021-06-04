import styled from 'styled-components';

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <Scontainer>
      <Simg src={image} alt='プロフィール' width={160} height={160} />
      <SName>{name}</SName>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;

const Simg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
