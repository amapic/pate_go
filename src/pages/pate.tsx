import React, { Suspense } from "react";
// import { Navbar, NavItem } from "../component/navbar/navbar";
import Questionnaire from "../component/questionnaire";
import Recherches_recentes from "../component/recherches_recentes";
import Carousel from "../component/carousel2";
import Passion from "../component/passion";
import Liste_Region from "../component/liste_region";
import Footer from "../component/footer";
import Article from "../component/article";
// import Total_planete../component/carouselanet/chiffre'
import "bootstrap/dist/css/bootstrap.css";
// import AA from '../component/aba'
// import { liste_planete_par_systeme } from '../fonction/fonction'
// import CountUp from 'react-countup';
// import Login from '../Login/Login';

// const GraphiqueSystemeSolaire = React.lazy(() => import('../component_planet/graph_planet'));
export default function Dashboard(): JSX.Element {
  return (
    <div id="wrapper">
      {/* <React.StrictMode> */}
      {/* <div id="content" style={{ width: '100%', height: "60px" }} > */}
      <div style={{ height: "250px" }}></div>
      <div style={{ maxWidth: "1100px", margin: "auto" }} className="bg-white">
        <div
          style={{ width: "100%", margin: "auto", height: "60px" }}
          className="menu"
        >
          <div style={{ maxWidth: "1100px", margin: "auto" }}>
            {/* <Navbar  >
                <NavItem  >
                </NavItem>
              </Navbar> */}
            aaaaaaaaaaaaaaaa
          </div>
        </div>
        webpâté
        
        <div
          style={{ fontSize: "24px" }}
          className="pt-5 pb-5 w-100 m-auto text-center"
        >
          Des millions de petites annonces et autant d’occasions de se faire
          plaisir
        </div>
        barGraphique alcool herbe ? chevreau carte du monde en 3D avec la
        localisation des patés ?
        <Article />
        <div className="my-5"></div>
        <div className="my-5"></div>
        <div
          style={{
            maxWidth: "1066px",
          }}
          className="m-auto"
        >
          <Passion />
        </div>
        <div className="my-3"></div>
        <div id="footer_wrapper">
          <Liste_Region />
          <Footer />
        </div>
      </div>
    </div>
  );
}
