import DashboardLayout from "../../layouts/dashboardLayouts";
import Card from "../../components/card/Card";
import "./dashboard.css";
import TopSelling from "./components/TopSelling/TopSelling";
import Location from "./components/Location/Location";

function Dashboard() {
  return (
    <DashboardLayout>
      <div>
        <h2 className="secondary-heading">eCommerce</h2>
      </div>

      <div className="main-sections">
        <div className="dashboard-grid">
          <div className="dashboard-grid-left">
            <Card
              className="customers-card"
              title="Customers"
              value="3,781"
              change="+11.01%"
              link="/orders"
            />
            <Card
              className="orders-card"
              title="Orders"
              value="1,219"
              change="-0.03%"
              link="/orders"
            />
            <Card
              className="revenue-card"
              title="Revenue"
              value="$695"
              change="+15.03%"
              link="/orders"
            />
            <Card
              className="growth-card"
              title="Growth"
              value="30.1%"
              change="+6.08%"
              link="/orders"
            />
          </div>

          <div>
            <img
              src="/ProjectionsVsActuals_light.png"
              alt="Dashboard Light Theme"
              className="theme-image light-image projections-vs-actuals-image"
            />
            <img
              src="/ProjectionsVsActuals_dark.png"
              alt="Dashboard Dark Theme"
              className="theme-image dark-image projections-vs-actuals-image"
            />
          </div>
        </div>

        <div className="dashboard-grid-two">
          <div className="dashboard-grid-right-one">
            <img src="/revenue_light.png" alt="Revenue Light Theme" className="theme-image light-image revenue-image" />
            <img src="/revenue_dark.png" alt="Revenue Dark Theme" className="theme-image dark-image revenue-image" />
          </div>
          <div className="dashboard-grid-right dashboard-grid-right-two">
            <Location />
          </div>
        </div>

        <div className="dashboard-grid-three">
          <div className="dashboard-grid-right dashboard-grid-right-one">
            <TopSelling />
          </div>
          <div className="sales-image">
            <img src="/top-sales-light.png" alt="Total Sales Light Theme" className="theme-image light-image" />
            <img src="/top-sales-dark.png" alt="Total Sales Dark Theme" className="theme-image dark-image" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
