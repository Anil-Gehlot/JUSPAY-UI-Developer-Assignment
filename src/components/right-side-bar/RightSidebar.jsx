import Activities from "../activities/activities";
import Contacts from "../contacts/contacts";
import Notifications from "../notifications/notifications";
import "./right-side-bar.css";

function RightSidebar() {
  return (
    <aside className="right-sidebar hide-scrollbar">
      <Notifications />
      <Activities />
      <Contacts />
    </aside>
  );
}

export default RightSidebar;
