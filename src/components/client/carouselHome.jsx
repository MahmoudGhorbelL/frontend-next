'use client';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const tabSliders = [
        {
            src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703754829/images/pc_portable_cz8v2b.jpg",
            alt: "PC Portable"
        },
        {
            src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703754821/images/gaer_banniere_40_g1ktuz.jpg",
            alt: "Gaer Banniere"
        },
        {
            src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703754784/images/Banner-2-Code-Promo_smhykd.jpg",
            alt: "Code Promo"
        },
        {
            src: "https://res.cloudinary.com/iset-sfax/image/upload/v1703754792/images/banniere_smartphone_1_p0ftki.jpg",
            alt: "Banniere Smartphone"
        }
    ];

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {tabSliders.map((tab, i) => (
                <Carousel.Item key={i}>
                    <img src={tab.src} alt={tab.alt} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ControlledCarousel;
