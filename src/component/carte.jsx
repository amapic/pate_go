import React from "react";

import Image from 'next/image'

export default function Footer() {

    return (
        <div id="footer" className="">
            <div style={{maxWidth:"1066px"}} className="d-flex m-auto corps_footer">
                <div className="w-25 pe-3">
                    <ul className="titre_footer">A PROPOS DU BON COIN</ul>

                        <ul>Qui sommes-nous ?</ul>
                        <ul>Nous rejoindre</ul>
                        <ul>Acteur responsable de l’économie française</ul>
                        <ul>L’Avenir a du bon</ul>
                        <ul className="ul-last">Le bon observatoire</ul>
                    {/* </p> */}

                    {/* <div className="border-cate"></div> */}
                    <ul className="titre_footer" >NOS APPLICATIONS</ul>
                    <div>
                        <img src="img/download_on_app_store.avif" />
                        <img src="img/download_on_google_play.avif"/>
                    </div>
                    {/* <p> */}
                    {/* <ul>Voitures</ul>
                    <ul>Motos</ul>
                    <ul> Caravaning</ul>
                    <ul>Utilitaires</ul>
                    <ul> Camions</ul>
                    <ul> Nautisme</ul>
                    <ul>Équipement auto</ul>
                    <ul>  Équipement moto</ul>
                    <ul> Équipement caravaning</ul>
                    <ul> Équipement nautisme</ul> */}
                    {/* </p> */}


                </div>
                <div className="w-25 pe-3">
                    <ul className="titre_footer"> INFORMATIONS LEGALES </ul>
                    {/* <p> */}
                    <ul> Conditions générales d’utilisation</ul>
                    <ul> Règles de diffusion, de référencement et de déréférencement</ul>
                    <ul>  Conditions générales de vente</ul>
                    <ul>  Vie privée / cookies</ul>
                    <ul>  Vos droits et obligations</ul>
                    <ul> Critères de classement</ul>
                    <ul> Décisions de justice</ul>
                    {/* </p> */}

                </div>
                <div className="w-25 pe-3">
                    <ul className="titre_footer">NOS SOLUTIONS PROS</ul>
                    {/* <p> */}
                    <ul>  Vêtements</ul>
                    <ul>  Chaussures</ul>
                    <ul>  Accessoires & Bagagerie</ul>
                    <ul>  Montres & Bijoux</ul>
                    <ul>  Équipement bébé</ul>
                    <ul>   Vêtements bébé</ul>
                    <ul>  Luxe et Tendance</ul>
                    {/* </p> */}

                </div>

                <div className="w-25 pe-3">
                    <ul className="titre_footer">DES QUESTIONS ?</ul>
                    {/* <p> */}
                        <ul>Aide</ul>
                        <ul>  Le service de paiement sécurisé et la livraison</ul>
                        <ul>   Le service de réservation de vacances en ligne pour les hôtes</ul>
                        <ul>  Votre dossier de location en ligne</ul>
                        <ul>  Demandez conseil à la Communauté</ul>
                        <ul className="ul-last">  Statut de nos services</ul>
                    {/* </p> */}
                    <div className="border-cate"></div>
                    <ul className="titre_footer"> VOUS ÊTES À L’ÉTRANGER ?</ul>
                    <div style={{height:"20px"}} className="rounded justify-content-between bg-white align-items-center d-flex px-2 py-3">
                        <div className="d-flex align-items-center">
                        <img style={{width:"20px",height:"13px"}} src="img/fr.png"/>
                        <div className="ps-1 text-dark">France</div>
                        </div>
                        <img style={{width:"20px",height:"13px"}} src="img/fleche_bas_1.svg"/>
                    </div>
                   

                </div>
            </div>
            <div className="border-cate text-center">
            leboncoin : 
            AVendreALouer . 
            leboncoin Immobilier Neuf . 
            L'argus . 
            Agriaffaires . 
            MachineryZone . 
            Truckscorner . 
            Locasun . 
            Locasun-vp . 
            Videdressing . 
            LeDénicheur . 
            <br />
            Younited Credit
            </div>

            <div className="d-flex flex-row justify-content-between">
            <span className="text-left fsize13">leboncoin 2006 - 2022</span>

            <span className="text-right fsize13">Retrouvez-nous sur
            <img className="mx-1" src="/img/reseau/facebook.svg"/>
            <img className="mx-1" src="/img/reseau/twitter.svg"/>
            <img className="mx-1" src="/img/reseau/instagram.svg"/>
            <img className="mx-1" src="/img/reseau/pinterest.svg"/>
            {/* <img src="/img/reseau/faebook.svg"/> */}
            </span>
            </div>

        </div >



    )
}