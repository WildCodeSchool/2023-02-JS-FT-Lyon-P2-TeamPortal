import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader-container">
        <div className="loader-logo-container" />
        <div className="loader-logo-container1" />
        <div className="loader-logo-container2" />
        <img
          src="../src/assets/teamportal-logo.png"
          alt="logo"
          className="loader-logo"
        />
      </div>
    </div>
  );
}
