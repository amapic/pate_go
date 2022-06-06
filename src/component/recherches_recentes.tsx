import React from 'react'
import Image from 'next/image'
import Router, { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
// import menu from "../img/bon_coin/menu.svg";
import menu from "../img/bon_coin/menu.svg";
import fleche_bas_1 from "../img/bon_coin/fleche_bas_1.svg";
import fleche_bas_2 from "../img/bon_coin/fleche_bas_2.svg";
import loupe from "../img/bon_coin/loupe.svg";
import pointer from "../img/bon_coin/pointer.svg";
import { relative } from 'path';

const Recherches_recentes = () => {

    return (
        <>
            <div style={{maxWidth: '1066px'}} className="m-auto mt-5" >
                <div className="d-flex flex-row mb-3">
                    {/* style={{ paddingBottom: "16px" }} */}
                    <div className="d-flex flex-row mr-3">
                        <Image
                            width={24}
                            height={24}
                            src={loupe} />
                    </div>
                    {/* <span>Recherches récentes</span> */}
                    <h4 className="ps-3">Recherches récentes</h4>
                </div>
                <div style={{ width: "100%" }} className="d-flex flex-row justify-content-between">
                    {/* <div className="row"> */}
                    <div className="position-relative col-3 card_perso d-flex flex-column flex-grow-1 mx-3">
                        <span style={{ fontSize: "18px" }} className="mb-2">Pc portable sans écran</span>
                        <span className="mb-4">Toutes catégories - 200€ et moins</span>
                        <div className="mb-2">
                            <Image
                                width={12}
                                height={16}
                                src={pointer} />
                            <span className="ms-2">Toute la france</span>
                        </div>
                        <img className="pointer croix_recherche" src="/img/croix-grise.svg" />
                    </div>
                    <div className="col-3 card_perso d-flex flex-column flex-grow-1 mx-3">
                        <span style={{ fontSize: "18px" }} className="mb-2">Pc portable sans écran</span>
                        <span className="mb-4">Toutes catégories - 200€ et moins</span>
                        <div className="mb-2">
                            <Image
                                width={12}
                                height={16}
                                src={pointer} />
                            <span className="ms-2">Toute la france</span>
                        </div>
                        <img className="pointer croix_recherche" src="/img/croix-grise.svg" />
                    </div>
                    <div className="col-3 card_perso d-flex flex-column flex-grow-1 mx-3">
                        <span style={{ fontSize: "18px" }} className="mb-2">Pc portable sans écran</span>
                        <span className="mb-4">Toutes catégories - 200€ et moins</span>
                        <div className="mb-2">
                            <Image
                                width={12}
                                height={16}
                                src={pointer} />
                            <span className="ms-2">Toute la france</span>
                        </div>
                        <img className="pointer croix_recherche" src="/img/croix-grise.svg" />
                    </div>
                    {/* </div> */}
                </div >
            </div>
        </>
    )
}
export default Recherches_recentes