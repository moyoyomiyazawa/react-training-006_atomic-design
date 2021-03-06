import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
// import { UserContext } from '../../../providers/UserProvider';
import { userState } from '../../../store/userState';

export const UserIconWithName = memo((props) => {
  console.log('UserIconWithName');

  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo =  useRecoilValue(userState);

  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <Scontainer>
      <Simg src={image} alt='プロフィール' width={160} height={160} />
      <SName>{name}</SName>
      {isAdmin && <span>編集</span>}
    </Scontainer>
  );
});

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
