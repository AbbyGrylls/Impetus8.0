import { Box } from "@mui/material";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";
import BubbleComponent from "../components/BubbleComponent";
import Contact from "../components/Contact";
import HomePageAbout1 from "../components/HomePageAbout1";
import LoadingComp from "../components/LoadingComp";
import { useLoading } from "../components/LoadingContext";
import MerchandiseComp from "../components/MerchandiseComp";
import VideoText from "../components/VideoText";
import HomePageVideo from "../components/HomePageVideo";

const styles = {
  minHeight: "100vh",
  minWidth: "100vw",
};

const containerStyles = {
  background: "url(images/grid.svg) no-repeat center",
  backgroundColor: "black",
  height: "10vh",
  height: {
    xs: "0vh",
  },
  width: "100vw",
};

const aboutContent = [
  {
    name: "IMPETUS",
    text: "IMPETUS is an annual event organized by the Society of Mechanical Engineers at IIEST Shibpur to bring industry and education closer together. The event aims to provide students with practical knowledge and opportunities to interact with industry professionals in mechanical engineering.",
    link: "/about",
    img: "teaser",
  },
  {
    name: "INDUSTRY ACADEMIA MEET",
    text: "The industrial meet in IMPETUS fosters productive dialogue between industry and academia, provides exposure to students and academics about current and future industrial trends, and equips them with the skills to be future-proof and industry-ready. It seeks to establish interactive communication between industry leaders, academicians, and students, bridging the gap between the company and the institute and offering a comprehensive understanding of their needs.",
    link: "/industryacademiameet",
    img: "pic_1.png",
  },
];

export default function HomePage() {
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const { loading } = useLoading();

  const hideIt = () => {
    setOpacity(0);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    Router.events.on("routeChangeComplete", scrollToTop);
    return () => {
      window.onbeforeunload = function () {};
      Router.events.off("routeChangeComplete", scrollToTop);
    };
  }, []);

  return (
    <Box>
      {loading && <LoadingComp />}
      <HomePageVideo />
      <VideoText hideIt={hideIt} />
      <MerchandiseComp />
      {aboutContent.map((el) => (
        <HomePageAbout1 key={el.name} {...el} />
      ))}
      {/* <BubbleComponent /> */}
      <Contact />
    </Box>
  );
}
