import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";

const SlideContainer = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  height: 80vh; /* Adjusted height for desktop view */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media (max-width: 576px) {
    height: 50vh; /* Adjusted height for mobile view */
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding: 0 20px;

  h1 {
    margin-bottom: 15px;
    font-size: 2.5rem;
    color: #fff;
    font-weight: 700;

    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin-bottom: 25px;
    font-size: 1.5rem;
    color: #ccc;

    @media (max-width: 576px) {
      font-size: 1rem;
    }
  }

  button {
    background-color: black; /* Change background color to black */
    color: white; /* Text color is white */
    font-size: 1.125rem;
    font-family: var(--bodyFont);
    width: 185px;
    height: 50px;
    transition: background-color 0.3s, color 0.3s; /* Add color transition */
    font-weight: bold;

    &:hover {
      background-color: white; /* Change background color on hover */
      color: black; /* Change text color on hover */
    }

    @media (max-width: 576px) {
      width: 150px;
      height: 45px;
      font-size: 0.875rem;
    }
  }
`;

const Dot = styled.div`
  width: 30px;
  padding: 8px 0;
  cursor: pointer;
  border-right: 3px solid ${({ active }) => (active ? "#262626" : "white")};
  color: ${({ active }) => (active ? "#262626" : "transparent")};

  @media (max-width: 576px) {
    width: 25px;
    font-size: 12px;
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  background-color: white;
`;

const DotsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translateY(-50%);

  @media (max-width: 576px) {
    left: 2%;
  }
`;

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <SlideContainer style={{ backgroundImage: `url(${imgSrc})` }}>
    <SlideContent>
      <h1>{text}</h1>
      <p>{Subtext}</p>
      <Link to={buttonLink}>
        <button>{buttonText}</button>
      </Link>
    </SlideContent>
  </SlideContainer>
);

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <DotsContainer>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </DotsContainer>
    ),
    customPaging: (i) => <Dot active={i === dotActive}>0{i + 1}</Dot>,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <DotsContainer>
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </DotsContainer>
          ),
          customPaging: (i) => (
            <Dot active={i === dotActive} style={{ fontSize: "12px" }}>
              0{i + 1}
            </Dot>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
      buttonLink: "/shop",  // Updated to navigate to Shop page
      buttonText: "Shop Now",
    },
    {
      imgSrc: bannerImgTwo,
      buttonLink: "/about",  // Updated to navigate to About page
      buttonText: "About Us",
    },
    {
      imgSrc: bannerImgThree,
      buttonLink: "/contact",  // Updated to navigate to Contact page
      buttonText: "Contact Us",
    },
  ];

  return (
    <BannerContainer>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </BannerContainer>
  );
};

export default Banner;
