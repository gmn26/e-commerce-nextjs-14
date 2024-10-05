import Sidebar from "./component/Sidebar";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <h1 className="text-3xl">Content</h1>
    </div>
  );
}

export default Dashboard;
