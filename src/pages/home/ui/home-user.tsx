import { useQuery } from "@tanstack/react-query";
import { homeQueries } from "../api/home.queries";

export const HomeUser = () => {
  const { data: users, isLoading } = useQuery(homeQueries.list());

  if (isLoading) return <div>로딩중...</div>;

  return (
    <div>
      <h1>사용자 리스트</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
