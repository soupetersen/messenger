import SiderBar from "../components/sidebar/Sidebar";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiderBar>
      <div className="h-full">{children}</div>
    </SiderBar>
  );
}
