import getUsers from "../actions/getUsers";
import SiderBar from "../components/sidebar/Sidebar";
import UserList from "./components/UserLists";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  return (
    <SiderBar>
      <UserList items={users} />
      <div className="h-full">{children}</div>
    </SiderBar>
  );
}
