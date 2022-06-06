import React from "react";

import { } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel3 = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5
        }
    };
    return (
        <div style={{maxWidth: '1066px'}} className=" m-auto m-5">
            <h2 className="m-5">Top catégories</h2>
            <Carousel responsive={responsive}
                infinite={true}
                // autoPlay={true}
                partialVisible={true}
                autoPlaySpeed={120000}
            >
                <div className="">
                    <div className="display-relative carousel_img_container rounded mx-2 px-1 bg-white">
                        <img className="img_carousel" src="/img/carousel/vetements.avif" />
                        <h5 className="display-absolute fixed-bottom text-white text-center">Vêtements</h5>
                    </div>

                </div>
                <div>
                    <div className="carousel_img_container rounded mx-2 px-1 bg-white">
                        <img className="img_carousel" src="/img/carousel/offres_emploi.avif" />
                        <h5 className="display-absolute fixed-bottom text-white text-center">Offre d'emploi</h5>
                    </div>

                </div>
                <div>
                    <div className="carousel_img_container rounded mx-2 px-1 bg-white">
                        <img className="img_carousel" src="/img/carousel/vacances.avif" />
                        <h5 className="display-absolute fixed-bottom text-white text-center">Vacances</h5>
                    </div>

                </div>
                <div>
                    <div className="carousel_img_container rounded mx-2 px-1 bg-white">
                        <img className="img_carousel" src="/img/carousel/ventes_immo.avif" />
                        <h5 className="display-absolute fixed-bottom text-white text-center">Vente immo</h5>
                    </div>

                </div>
                <div>
                    <div className="carousel_img_container rounded mx-2 px-1 bg-white">
                        <img className="img_carousel" src="/img/carousel/voitures.avif" />
                        <h5 className="display-absolute fixed-bottom text-center text-white">Voitures</h5>
                    </div>

                </div>
            </Carousel>
        </div>
    )
}

export default Carousel3