import { useState, useEffect } from 'react';
import * as React from 'react';
import Image from 'next/image'
import Router, { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
import github from "../../img/bon_coin/github.svg";
import loupe from "../../img/bon_coin/loupe.svg";
import bon_coin from "../../img/bon_coin/bon_coin.svg";
import menu from "../../img/bon_coin/menu.svg";
import perso from "../../img/bon_coin/perso.svg";
import coeur from "../../img/bon_coin/coeur.svg";
import msg from "../../img/bon_coin/msg.svg";
import cloche from "../../img/bon_coin/cloche.svg";
import plus from "../../img/bon_coin/plus.svg";

import shortid from 'shortid'
import { motion, useViewportScroll, useAnimation, useTransform } from "framer-motion";

export function Navbar(props: any) {
  const { scrollY } = useViewportScroll();
  const controls = useAnimation();

  useEffect(() => {
    scrollY.onChange(v => {

      if (v > 0) {
        controls.start("pasenhaut")
      }
      if (v === 0) {
        controls.start("enhaut")
      }
    });

  }, []);


  return (
    <motion.div
      key={shortid.generate()}
      initial="enhaut"
      animate={controls}
      variants={{
        enhautPlanet: {
          height: '80px',
          position: 'sticky',
          top: '0px',
          zIndex: 7
        },
        enhaut: {
          height: '40px',
          position: 'sticky',
          top: '0px',
          zIndex: 7
        },
        pasenhaut: {
          height: '40px',
          position: 'sticky',
          top: '0px',
          zIndex: 7
        }
      }}
      transition={{ type: "spring", duration: 1 }}

    >
      <nav className="">

        {props.children}
      </nav>
    </motion.div>

  );
}



export function NavItem(props: any) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter()


  // let hover: string = ""
  // let hover_planet: string = ""
  // hover_planet = router.pathname === '/planet' ? "nav-item noselect nav_item_selected" : "nav-item noselect"
  // hover = router.pathname === '/planet' ? "nav-item noselect" : "nav-item noselect nav_item_selected"
  return (
    // <div className="fixed-top">
      <>
      <div style={{maxWidth:"1066px", height: "60px" }} className="d-flex flex-row justify-content-between m-auto">
        <div id="bloc1" className="d-flex flex-row justify-content-center align-items-center">
          <div style={{ width: "170px" }} className="d-flex flex-column justify-content-center align-items-left">
            <Image
              width={140}
              height={24}
              src={bon_coin} />
          </div>
          <div>
            <div style={{ height: "40px", }} className="p-10 orange justify-content-center align-items-center border rounded d-flex flex-row">
              {/* <div className=""> */}
              <Image
                width={24}
                height={24}
                src={plus} />
              {/* </div> */}
              <div className="ps-2" style={{ color: "#fff", fontSize: "14px" }} >
                Déposer une annonce
              </div>
            </div>
            {/* <div className="img_navbar">
              Déposer une annonce
            </div> */}
          </div>
          <div style={{ padding: "0 10px 0 10px" }} className="h-100 d-flex flex-row justify-content-center align-items-center">
            <div className="img_navbar">
              <Image
                width={24}
                height={24}
                src={loupe} />
            </div>
            <div className="text-bold ps-2" style={{ fontSize: "14px" }} >
              Rechercher
            </div>
          </div>
        </div>

        <div id="bloc2" className="d-flex flex-row justify-content-center align-items-center">
          <div style={{ padding: "0 10px 0 10px" }} className="nav-item d-flex flex-column justify-content-center align-items-center">
            <div className="img_navbar">
              <Image
                width={24}
                height={24}
                src={cloche} />
            </div>
            <div style={{ fontSize: "12px" }} className="txt_sous_img_navbar">
              Mes recherches
            </div>
          </div>
          <div className="px-10 nav-item d-flex flex-column justify-content-center align-items-center">
            <div className="img_navbar">
              <Image
                width={24}
                height={24}
                src={coeur} />
            </div>
            <div style={{ fontSize: "12px" }} className="txt_sous_img_navbar">
              Favoris
            </div>
          </div>
          <div style={{ padding: "0 10px 0 10px" }} className="nav-item d-flex flex-column justify-content-center align-items-center">
            <div className="img_navbar">
              <Image
                width={24}
                height={24}
                src={msg} />
            </div>
            <div style={{ fontSize: "12px" }} className="txt_sous_img_navbar">
              Messages
            </div>
          </div>
          <div style={{ padding: "0 10px 0 10px" }} className="nav-item d-flex flex-column justify-content-center align-items-center">
            <div className="img_navbar">
              <Image
                width={24}
                height={24}
                src={perso} />
            </div>
            <div style={{ fontSize: "12px" }} className="txt_sous_img_navbar">
              Se connecter
            </div>
          </div>
        </div>
      </div>

      </>
    // </div>
  );
}
