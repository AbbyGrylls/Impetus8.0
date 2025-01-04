import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const styles = {
  position: "absolute",
  width: "100vw",
  ".appbar": {
    // backdropFilter: "blur(5px)",
    position: "relative",
    padding: {
      lg: " 0 50px",
      md: "0 50px",
      sm: "0 30px",
      xs: "0 25px",
    },
    paddingTop: "10px !important",
    boxShadow: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    ".logo": {
      cursor: "pointer",
    },
  },
};

export default function AppbarComp() {
  const SideBarComp = dynamic(() => import("./SideBarComp"), { ssr: false });
  const NavbarComp = dynamic(() => import("./NavbarComp"), { ssr: false });

  const router = useRouter();
  const [top, setTop] = useState(true);
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  const goToHome = () => {
    router.push("/home");
  };

  const handleTop = () => {
    if (window.scrollY === 0) setTop(true);
    else setTop(false);
  };

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleTop);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleTop);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const isMobile = width < 960;

  return (
    <Box sx={styles} className="center2">
      <AppBar
        className="appbar"
        style={{
          mt: "30px",
          // background: "none",
          background: `${
            typeof window !== "undefined" &&
            (window.location.pathname.includes("/events/yantrasearch") ||
              window.location.pathname.includes("/events/cadathon") ||
              window.location.pathname.includes("/events/heatovation") ||
              window.location.pathname.includes("/events/scrapyard") ||
              window.location.pathname.includes("/events/iQIgnition") ||
              window.location.pathname.includes("/events/deathrace") ||
              window.location.pathname.includes("/events/dronePursuit") ||
              window.location.pathname.includes("/events/valorant") ||
              window.location.pathname.includes("/events/fun"))
              ? "#0000004f"
              : top
                ? "none"
                // : "linear-gradient(to right, black ,rgb(17 24 39 ),black)"
                :"#0000004f"
          }`,
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          paddingBottom: "10px",
          backdropFilter: "blur(10px)",
        }}
      >
        <Image
          onClick={goToHome}
          src="/images/impetusLogo.png"
          alt="logo"
          width="70"
          height="70"
          className="logo"
        />
        {isMobile ? <SideBarComp /> : <NavbarComp />}
      </AppBar>
    </Box>
  );
}

