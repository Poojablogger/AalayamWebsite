import "./SplashScreen.css";
import logo from "../../assets/images/logo.jpeg";

function SplashScreen() {

  const flowers = ["🌸", "🌼", "🌺"];

  return (
    <div className="splash-screen">

      <div className="petals">

        {[...Array(180)].map((_, index) => (

          <span
            key={index}
            className="petal"
            style={{
  left: `${Math.random() * 100}%`,
  top: `${-Math.random() * 120}vh`,
  animationDuration: `${2.5 + Math.random() * 1}s`,
  fontSize: `${10 + Math.random() * 16}px`,
}}
          >
            {flowers[Math.floor(Math.random() * flowers.length)]}
          </span>

        ))}

      </div>

      <div className="splash-content">

        <img
          src={logo}
          alt="Aalayam Logo"
          className="splash-logo"
        />

        <h1>Aalayamapp</h1>

        <p>Your Divine Companion</p>

        <div className="loader"></div>

      </div>

    </div>
  );
}

export default SplashScreen;