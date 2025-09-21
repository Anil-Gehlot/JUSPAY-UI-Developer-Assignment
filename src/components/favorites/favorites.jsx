import { Link } from "react-router-dom";
import "./favorites.css";
import SvgDot from "./icons/Dot";
function Favorites() {
  return (
    <div className="favorites">
      <div className="fav-title">
        <h2 className="fav-title-text">Favorites</h2>
        <h2 className="fav-title-text fav-title-text-two">Recently</h2>
      </div>

      <div className="fev-menu">
        <button>
          <div className="dot-icon">
            <SvgDot />
          </div>
          <h2 className="titles"> Overview</h2>
        </button>
        <button>
          <div className="dot-icon">
            <SvgDot />
          </div>
          <h2 className="titles"> Projects</h2>
        </button>
        <button>
          <div className="dot-icon">
            <SvgDot />
          </div>
          <Link to="/orders" className="titles order-list"> Order List</Link>
        </button>
      </div>
    </div>
  );
}

export default Favorites;
