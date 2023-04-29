import "./Loader.css";

export default function Loader() {
  return (
    <div>
      <div className="loader">
        <div className="loader-logo-container">
          <img
            src="../src/assets/teamportal-logo.png"
            alt="logo"
            className="loader-logo"
          />
        </div>
      </div>
    </div>
  );
}
