import { useContext } from 'react';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { UserContext } from '../../providers/UserProvider';
import { userState } from '../../store/userState';

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push('/users');
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push('/users');
  };
  return (
    <div>
      <SContainer>
        <h2>TOPページです</h2>
        <button onClick={onClickAdmin}>管理者</button>
        <br />
        <button onClick={onClickGeneral}>一般</button>
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
