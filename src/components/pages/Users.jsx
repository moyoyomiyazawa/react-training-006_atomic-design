import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
// import { useContext } from 'react';
// import { UserContext } from '../../providers/UserProvider';
import { useRecoilState } from 'recoil';
import { userState } from '../../store/userState';

// 表示確認のためにオブジェクトを10個生成
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `猫太郎 ${val}`,
    image: 'https://source.unsplash.com/featured/?cat',
    email: 'yoichi91@example.net',
    phone: '090-0876-1705',
    company: {
      name: '有限会社田辺電気',
    },
    website: 'https://nakatsugawa.com/',
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  console.log(userInfo);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <div>
      <SContainer>
        <h2>ユーザー一覧</h2>
        <SearchInput />
        <br />
        <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
        <SUserArea>
          {users.map((user) => (
            <UserCard key={user.id} {...{ user }} />
          ))}
        </SUserArea>
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  text-align: center;
  margin: 0 10px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 12px;
`;
