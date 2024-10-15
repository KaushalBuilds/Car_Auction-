"use client"; // Ensures the file is treated as a client component

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import styles from '../styles/ImageSlider.module.css'; // Ensure this path is correct

const ImageSlider = () => {
    // Define state for the current slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of image URLs and their corresponding text information
    const slides = [
        { src: '/images/car1.jpg', year: '2015', brand: 'Porsche', model: '911 (991.1) GT3 RS' },
        { src: '/images/car2.jpg', year: '2020', brand: 'Lamborghini', model: 'Veneno Coupe' },
        { src: '/images/car3.jpg', year: '2022', brand: 'Ferrari', model: 'SF90 Stradale Assetto Fiorano' },
        { src: '/images/car4.jpg', year: '2022', brand: 'Ford', model: 'SF90 GT Ford Fiorano' }
    ];

    // Automatically change slides every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [slides.length]);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.slider}>
            <div className={styles.slideContainer}>
                <Image
                    src={slides[currentIndex].src}
                    alt={`Slide ${currentIndex + 1}`}
                    fill // Using the `fill` attribute in Next.js 13+
                    style={{ objectFit: 'cover' }} // Ensures images cover the container
                    className={styles.slideImage}
                />
                {/* Text Overlay */}
                <div className={styles.textOverlay}>
                    <span className={styles.year}>{slides[currentIndex].year}</span>
                    <span className={styles.brand}>{slides[currentIndex].brand}</span>
                    <span className={styles.model}>{slides[currentIndex].model}</span>
                </div>
            </div>

            {/* Left Arrow */}
            <button className={styles.leftArrow} onClick={prevSlide}>
                &#10094;
            </button>

            {/* Right Arrow */}
            <button className={styles.rightArrow} onClick={nextSlide}>
                &#10095;
            </button>

            {/* Dots for slide indication */}
            <div className={styles.dotsContainer}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
