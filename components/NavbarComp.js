import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";

const styles = {
  width: "100%",
  maxWidth: "1200px",
  ".nav": {
    display: "grid",
    width: "100%",
    gridTemplateColumns: {
      lg: "repeat(5,1fr) 1.5fr",
      sm: "repeat(5,1fr) 1.65fr",
      xs: "repeat(5,1fr) 1.6fr",
    },
    flexDirection: "row",
    a: {
      fontSize: "15.8px",
      textDecoration: "none",
      color: "#fff",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "default",
      transition: "all 300ms cubic-bezier(0.075, 0.82, 0.165, 1)",
      ".bor": {
        width: "80%",
        textAlign: "center",
      },
      span: {
        position: "relative",
        display: " inline-block",
        transition: " color 0.3s ease",
        ":hover": {
          color: "#fff",
          transform: "scale(1.1)",
          cursor: "pointer",
          transition: "all 0.4s ease",
        },
        ":hover::before": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          transition: "width 0.4s",
        },
      },
    },
  },
  "a.active": {
    ".bor": {
      borderBottom: "2px solid white",
    },
  },
};

export default function NavbarComp() {
  const router = useRouter();
  return (
    <Box
      className="center1"
      sx={{ backgroundColor: "none", width: "85%", maxWidth: "900px" }}
    >
      <Box sx={styles} className="center1">
        <Box className="nav">
          <Link
            href="/about"
            className={router.pathname === "/about" ? "active" : ""}
          >
            <div className="bor">
              <span>About</span>
            </div>
          </Link>
          {/* <Link
            href="/robowars"
            className={router.pathname === "/robowars" ? "active" : ""}
          >
            <div className="bor">
              <span>Robowars</span>
            </div>
          </Link> */}
          <Link
            href="/events"
            className={router.pathname === "/events" ? "active" : ""}
          >
            <div className="bor">
              <span>Events</span>
            </div>
          </Link>
          <Link
            href="/expo"
            className={router.pathname === "/expo" ? "active" : ""}
          >
            <div className="bor">
              <span>Expo</span>
            </div>
          </Link>
          <Link
            href="/sponsors"
            className={router.pathname === "/sponsors" ? "active" : ""}
          >
            <div className="bor">
              <span>Sponsors</span>
            </div>
          </Link>
          <Link
            href="/team"
            className={router.pathname === "/team" ? "active" : ""}
          >
            <div className="bor">
              <span>Team</span>
            </div>
          </Link>
          <Link
            href="/industryacademiameet"
            style={{ textAlign: "center" }}
            className={
              router.pathname === "/industryacademiameet" ? "active" : ""
            }
          >
            <div className="bor" style={{ width: "250px" }}>
              <span>Industry Academia Meet</span>
            </div>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
