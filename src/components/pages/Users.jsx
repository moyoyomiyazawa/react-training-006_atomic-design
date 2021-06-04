import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

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
  return (
    <div>
      <SContainer>
        <h2>ユーザー一覧</h2>
        <SearchInput />
        <SUserArea>
          {users.map((user) => (
            <UserCard {...{ user }} />
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
