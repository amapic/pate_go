import React from "react";
// import {
//     CarouselProvider,
//     Slider,
//     Slide,
//     ButtonBack,
//     ButtonNext,
//     SliderContext,
//     CarouselContext
// } from "pure-react-carousel";
import Image from 'next/image'

// import "pure-react-carousel/dist/react-carousel.es.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import vacances from "../img/slideshow/vacances.png";



// export function MyComponentUsingContext() {
//     const carouselContext = useContext(CarouselContext);
//     const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide);
//     useEffect(() => {
//         function onChange() {
//             setCurrentSlide(carouselContext.state.currentSlide);
//         }
//         carouselContext.subscribe(onChange);
//         return () => carouselContext.unsubscribe(onChange);
//     }, [carouselContext]);
//     return `The current slide is: ${currentSlide}`;
// }

export default function Passion() {

    return (
        <div className="">
            {/* <h1>AAA</h1>
            <h3>AAA</h3>
            <h4>AAA</h4>
            <h5>AAA</h5>
            <h6>AAA</h6>
            <h2>AAA</h2> */}
            <div className="position-relative communaute mx-3 px-5 py-3 w-100">
                <div className="d-flex flex-row">
                    <div style={{ width: "350px" }} className="text-left">
                        <h5 className="text-left">
                            Avoir une passion c'est bien
                        </h5>
                        <h5 className="text-left">
                            Le partager avec les autres c'est mieux
                        </h5>
                        <div>
                            Jardinage, mode, vélo... , ils sont nombreux à en parler sur la Communauté leboncoin ! Rejoignez-les !
                        </div>
                        <div style={{ textAlign: "center" }} className="orange w-100 border rounded mt-3 p-1 text-white text-center ">

                            <h6 className="m-auto">Découvrir la communauté</h6>
                        </div>
                    </div>
                    <img style={{ height: "200px" }} className="" src="/img/communaute.png" />
                </div>



            </div>
            <div style={{ fontSize: "12px" }} className="text-center m-3 px-5 py-3 ">
                Avec leboncoin, trouvez la bonne affaire sur le site référent de petites annonces de particulier à particulier et de professionnels. Avec des millions de petites annonces, trouvez la bonne occasion dans nos catégories voiture, immobilier, emploi, location de vacances, vêtements, meubles, bricolage, téléphonie, jeux vidéo, etc… Déposez une annonce gratuite en toute simplicité pour vendre, rechercher, donner vos biens de seconde main ou promouvoir vos services. Achetez en toute sécurité avec notre système de paiement en ligne et de livraison pour les annonces éligibles.
            </div>
        </div >
    )
}