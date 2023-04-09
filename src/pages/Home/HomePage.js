import Avances from "../../components/Avances/Avances";
import Popular from "../../components/Popular/Popular";
import Tendencias from "../../components/Tendencias/Tendencias";
import "./HomePage.scss";
import HeaderBackground from "../../assets/header-img.png";
import Unete from "../../assets/unete.png";
import Gratis from "../../components/Gratis/Gratis";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <div className="home__background">
        <div className="home__backround-container">
          <img className="home__background-container-image" src={HeaderBackground} />
        </div>
        <div className="home__background-text">
          <p className="home__background-text--first">Bienvenidos.</p>
          <p className="home__background-text--second">Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</p>
        </div>
      </div>
      <Tendencias></Tendencias>
      <Avances></Avances>
      <Popular></Popular>
      <div className="home__background">
        <div className="home__backround-container">
          <img className="home__background-container-image" src={Unete} />
        </div>
        <div className="home__background-text">
          <p className="home__background-text--first">Únete hoy.</p>
          <p className="home__background-text--second">Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, Disney Plus, fuboTV y Apple TV Plus.</p>
        </div>
      </div>
      <Gratis></Gratis>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
