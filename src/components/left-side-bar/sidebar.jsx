import DashboardComp from "../dashboards/Dashboards";
import Favorites from "../favorites/favorites";
import Pages from "../Pages/pages";
import "./sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="user-section">
        <img className="user-section-img" src="/ByeWind.png" alt="" />
        <h2 className="siderbar-text">ByeWind</h2>
      </div>

      <Favorites />
      <DashboardComp />
      <Pages />
    </aside>
  );
}

export default Sidebar;
