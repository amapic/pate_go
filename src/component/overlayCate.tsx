import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Router, { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
// import menu from "../img/bon_coin/menu.svg";
import menu from "../img/bon_coin/menu.svg";
import fleche_bas_1 from "../img/bon_coin/fleche_bas_1.svg";
import fleche_bas_2 from "../img/bon_coin/fleche_bas_2.svg";
import loupe from "../img/bon_coin/loupe.svg";
import croix from "../img/bon_coin/croix.svg";
import Modal_window from './modal';
import { Modal, Overlay } from "react-bootstrap";
const OverlayCate = (props) => {
    const [open, setOpen] = React.useState(false);
    const targetCategories = useRef(null);

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        console.log(open);
        setOpen(!open);
    }
    return (
        <>
            <a className="" href="#" style={{ textDecoration: "none", color: 'black' }} ref={targetCategories} onClick={handleOpen}>
                <Image
                    width={16}
                    height={16}
                    src={menu} />
            </a>
            < Overlay rootClose onHide={handleClose} target={targetCategories} show={open} placement="bottom-start" >
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <div
                        {...props}
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            padding: '16px',
                            color: 'black',
                            width: "80%",
                            borderRadius: 3,
                            ...props.style,

                        }}
                    >
                        <div className="container g-0 pointer border-right ">
                            <div className="row g-0">
                                <div className="col-4 caca border-3">
                                    <div className="item_categories">
                                        <img className="svg_categories mx-3" src="/img/categories/suitecase.svg" />
                                        <span>Toutes catégories</span>
                                    </div>
                                    <div className="item_categories">
                                        {/* <img className="svg_categories mx-3" src="/img/categories/soleil.svg" /> */}
                                        <svg className="svg_categories mx-3" viewBox="0 0 20 20">
                                            {/* <use xlinkHref="/img/categories/soleil.svg" /> */}
                                            <image x="0" y="0" width="20" height="20" href="/img/categories/soleil.svg" />
                                        </svg>
                                        <span>Vacances</span>
                                    </div>
                                    <div className="item_categories">
                                        <img className="svg_categories mx-3" src="/img/categories/suitecase.svg" />
                                        Emploi</div>
                                    <div className="item_categories">
                                        <img className="svg_categories mx-3" src="/img/categories/car.svg" />
                                        Véhicules</div>
                                    <div className="item_categories">
                                        <img className="svg_categories mx-3" src="/img/categories/immo.svg" />
                                        Immobilier</div>
                                    <div className="item_categories">
                                        <img className="svg_categories mx-3" src="/img/categories/shirt.svg" />
                                        Mode</div>
                                    <div className="item_categories">

                                        <img className="svg_categories mx-3" src="/img/categories/armchair.svg" />
                                        Maison</div>
                                    <div className="item_categories">
                                        <img className="svg_categories mx-3" src="/img/categories/multimedia.svg" />
                                        Multimédia</div>
                                    <div className="item_categories">
                                        <img className="svg_categories mx-3" src="/img/categories/loisirs.svg" />
                                        Loisirs</div>
                                    <div className="item_categories">
                                        <img className="svg_categories mx-3" src="/img/categories/animaux.svg" />
                                        Animaux</div>
                                    <div className="item_categories">
                                        <img className="svg_categories mx-3" src="/img/categories/pro.svg" />
                                        Matériel professionnel</div>
                                    <div className="item_categories">
                                        <img className="svg_categories mx-3" src="/img/categories/services.svg" />
                                        Service</div>
                                    <div className="item_categories">
                                        <img className="svg_categories mx-3" src="/img/categories/autre.svg" />
                                        Divers</div>
                                    {/* One of three columns */}
                                </div>
                                <div className="col-8 pe-2 border-left-3">
                                    <div className="item_categories pe-3">
                                        <img className="svg_categories mx-3" src="/img/categories/soleil.svg" />

                                        <span>Vacances</span>
                                    </div>
                                    <div className="item_categories ps-3">
                                        {/* <img className="svg_categories mx-3" src="/img/categories/soleil.svg" /> */}
                                        <span>Locations et gîtes</span>
                                    </div>
                                    <div className="item_categories ps-3">
                                        {/* <img className="svg_categories mx-3" src="/img/categories/soleil.svg" /> */}
                                        <span>Chambres d'hôtes</span>
                                    </div>
                                    <div className="item_categories ps-3">
                                        {/* <img className="svg_categories mx-3" src="/img/categories/soleil.svg" /> */}
                                        <span>Campings</span>
                                    </div>
                                    <div className="item_categories ps-3">
                                        {/* <img className="svg_categories mx-3" src="/img/categories/soleil.svg" /> */}
                                        <span>Hébergements insolites</span>
                                    </div>
                                    <div className="item_categories ps-3">
                                        {/* <img className="svg_categories mx-3" src="/img/categories/soleil.svg" /> */}
                                        <span>Hôtels</span>
                                    </div>
                                    <div className="item_categories ps-3">
                                        {/* <img className="svg_categories mx-3" src="/img/categories/soleil.svg" /> */}
                                        <span>Ventes privées vacances</span>
                                    </div>
                                    <div className="item_categories ps-3">
                                        {/* <img className="svg_categories mx-3" src="/img/categories/soleil.svg" /> */}
                                        <span>Location en Espagne</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
                }
            </Overlay >
        </>
    )
}
export default OverlayCate