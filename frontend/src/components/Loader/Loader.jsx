import LogoTP from "../../assets/LogoTP";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader-container">
        <div className="loader-logo-container" />
        <div className="loader-logo-container1" />
        <div className="loader-logo-container2" />
        <div className="logo-test">
          <LogoTP />
        </div>
      </div>
    </div>
  );
}
