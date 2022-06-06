import React from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    SliderContext,
    CarouselContext
} from "pure-react-carousel";
import Image from 'next/image'

import "pure-react-carousel/dist/react-carousel.es.css";
import 'bootstrap/dist/css/bootstrap.css';
import vacances from "../img/slideshow/vacances.png";

// const InnerSlide({ id }) => {
//     const { isUserMouseMoving } = useContext(SliderContext);

//     const handleClick = useCallback((e) => {
//         if (isUserMouseMoving) { e.preventDefault(); return; }

//         // handle the click with props id
//     }, [isUserMouseMoving, id]);

//     return <div className="inner" onClick={handleClick}> my super inner slide {id}</div>;
// };

export function MyComponentUsingContext() {
    const carouselContext = useContext(CarouselContext);
    const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide);
    useEffect(() => {
        function onChange() {
            setCurrentSlide(carouselContext.state.currentSlide);
        }
        carouselContext.subscribe(onChange);
        return () => carouselContext.unsubscribe(onChange);
    }, [carouselContext]);
    return `The current slide is: ${currentSlide}`;
}

export default class Carousel extends React.Component {

    render() {
        return (
            <>

                {/* <CarouselProvider
                    naturalSlideWidth={180}
                    naturalSlideHeight={120}
                    totalSlides={8}
                    visibleSlides={3}
                    currentSlide={1}
                >
                    <Slider>
                        <Slide index={0}>
                            <div className="rounded mx-2 h-100 bg-primary">
                                {/* <div>
                                    <Image
                                        layout="fill"
                                        src={vacances} />
                                </div> */}
                {/* <img className="img_carousel" src="/img/vacances.png" /> */}
            </div>

                        </Slide >
                        <Slide index={1}>
                            {/* <div className="rounded mx-2  bg-primary"> */}
                            {/* <Image
                                    layout="fill"
                                    src={vacances} /> */}
                            <img className="img_carousel" src="/img/vacances.png" />
                            {/* </div> */}
                        </Slide>
                        <Slide index={2}>
                            <div className="rounded mx-2  bg-primary">
                                {/* <img src="../img/github.png" /> */}
                                fgfgfg
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="rounded mx-2  bg-primary">
                                {/* <img src="../img/github.png" /> */}
                                fgfgfg
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="rounded mx-2  bg-primary">
                                {/* <img src="../img/github.png" /> */}
                                fgfgfg
                            </div>
                        </Slide>
                        <Slide index={5}>
                            <div className="rounded mx-2   bg-primary">
                                {/* <img src="../img/github.png" /> */}
                                fgfgfg
                            </div>
                        </Slide>
                        <Slide index={6}>
                            <div className="rounded mx-2 bg-primary">
                                {/* <img src="../img/github.png" /> */}
                                fgfgfg
                            </div>
                        </Slide>
                        <Slide index={7}>
                            <div className="rounded mx-2 bg-primary">
                                {/* <img src="../img/github.png" /> */}
                                fgfgfg
                            </div>
                        </Slide>
                    </Slider >
            <ButtonBack><img className="button_slideshow_gauche" src="/img/fleche_bas_1.svg" />AAAAA</ButtonBack>
        {/* onClick="[props.onClick]" */ }
                    <img className="button_slideshow_droit" src="/img/fleche_bas_1.svg" />
                    <ButtonNext>Next</ButtonNext>
                </CarouselProvider > * /}
            </>
        );
    }
}
