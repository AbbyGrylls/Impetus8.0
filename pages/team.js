import { Divider, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";
import { Box } from "@mui/system";
import { useState } from "react";
import Contact from "../components/Contact";
import ContactCard from "../components/ContactCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

export default function TeamPage() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const classes = {
    root: {
      justifyContent: "center",
    },
    scroller: {
      flexGrow: "0",
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    margin: "50px 0",
    h1: {
      margin: "50px 0",
      fontSize: "48px",
    },
    div: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    ".tabs": {
      width: "1000px",
      maxWidth: "95vw",
      mb: "100px",
      ".tab": {
        margin: "10px",
        fontSize: {
          lg: "16px",
          md: "16px",
          sm: "12px",
          xs: "12px",
        },
      },
      ".Mui-selected": {
        backgroundColor: "#01658d",
        border: "0px",
        borderRadius: "10px",
        color: "white",
      },
    },
  };
  const sponsorship_person = {
    person1: {
      name: "Janhvi Singh",
      phone: "+91 8318035176",
      post: "Head",
      imgname: "IMG_20230331_024142 - 2021MEB062 JANHVI_SINGH.jpg",
      insta: "https://www.instagram.com/raghuvanshi_janhvi",
      link: "https://www.linkedin.com/in/janhvi-singh-858600239",
    },
    person2: {
      name: "Soumyadeep Dey",
      phone: "+91 9800054616",
      post: "Head",
      imgname: "Formal Portrait(png) - 2021MEB046 SOUMYADEEP_DEY.png",
      insta: "https://www.instagram.com/deepsoumyadey",
      link: "https://www.linkedin.com/in/Soumyadeep Dey",
    }, 
  };
  const event_person = {
    person1: {
      name: "Ajay kumar khandelwal",
      phone: "+91 7792062842",
      post: "Head",
      imgname:
        "20231025_103237 - 2021MEB048 AJAY_KUMAR KHANDELWAL.jpg",
      insta: "https://www.instagram.com/ajaykhandelwal_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      link: "https://www.linkedin.com/in/ajay-kumar-khandelwal-1978aa231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Ankush Ghosh",
      phone: "+91 8145326311",
      post: "Head",
      imgname: "IMG-20221001-WA0074 - 2021MEB010 ANKUSH_GHOSH.jpg",
      insta: "https://www.instagram.com/ag0172003",
      link: "https://www.linkedin.com/in/ankush-ghosh-43b02a255",
    },
    person3: {
      name: "Soham Banerjee",
      phone: "+91 8101264621",
      post: "Head",
      imgname: "Photo - 2021MEB069 SOHAM_BANERJEE.png",
      insta: "https://www.instagram.com/banerjeesoham111",
      link: "https://www.linkedin.com/in/soham-banerjee-867a82255",
    },   

  };
  const design_person = {
    person1: {
      name: "Piyal Bhowmick",
      phone: "+91 8910276639",
      post: "Head",
      imgname: "IMG-20240110-WA0021 - 2021MEB022 PIYAL_BHOWMICK.jpg",
      insta: "https://www.instagram.com/piyalb_13",
      link: "https://www.linkedin.com/in/piyal-bhowmick-555563199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Sayan Mondal",
      phone: "+91 8670297716",
      post: "Head",
      imgname: "IMG_20240111_185857 - 2021MEB007 SAYAN_MONDAL.jpg",
      insta: "https://www.instagram.com/s.o.l.o.n.i.s.t/",
      link: "https://www.linkedin.com/in/sayan-mondal-5016511a0/",
    },
    
  };
  const publicity_person = {
    person1: {
      name: "Rohit Pal",
      phone: "+91 8319629245",
      post: "Head",
      imgname: "IMG_20231216_115627 - 2021MEB097 ROHIT_PAL.jpg",
      insta: "https://www.instagram.com/rohitpal_18?igsh=MXhlNWd6N2pzZGZ6",
      link: "https://www.linkedin.com/in/rohit-pal-08443b222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };
  const finance_person = {
    person1: {
      name: "Arnav Anand",
      phone: "+91 7061991256",
      post: "Finance Head",
      imgname: "Arnav - 2020MEB103 ARNAV_ANAND.png",
      insta: "https://www.instagram.com/_arnav03",
      link: "https://www.linkedin.com/in/arnav3",
    },
    person2: {
      name: "Sayantan Paul",
      phone: "+91 7439910063",
      post: "Finance Head",
      imgname:
        "WhatsApp Image 2023-02-15 at 18.23.59 - 2020MEB106 SAYANTAN_PAUL.jpeg",
      insta: "https://www.instagram.com/Overthinking_menace",
      link: "https://www.linkedin.com/in/Look it up",
    },
  };
  const iam_person = {
    person1: {
      name: "Snehal Kumar",
      phone: "+91 7093081024",
      post: "Head - Industry Academia Meet",
      imgname: "Snapchat-1473531011 - 2020MEB072 TIPPANA_SAI.jpg",
      insta: "https://www.instagram.com/_always.snehal_",
      link: "https://www.linkedin.com/in/Tippana Sai Snehal Kumar",
    },
    person2: {
      name: "Janhvi Singh",
      phone: "+91 8318035176",
      post: "Industry Academia Meet Executive",
      imgname: "IMG_20230331_024142 - 2021MEB062 JANHVI_SINGH.jpg",
      insta: "https://www.instagram.com/raghuvanshi_janhvi",
      link: "https://www.linkedin.com/in/janhvi-singh-858600239",
      },
  };
  const coordinator_person = {
    person1: {
      name: "Ivan Jacob Thomas",
      phone: "+91 7463884470",
      post: "Coordinator",
      imgname:
        "WhatsApp Image 2023-08-20 at 11.18.55 PM - 2021MEB059 IVAN_JACOB THOMAS.jpeg",
      insta: "https://www.instagram.com/ivan_jax/",
      link: "https://www.linkedin.com/in/ivan-jacob-thomas-a62b9b239/",
    },
    person2: {
      name: "Janhvi Singh",
      phone: "+91 8318035176",
      post: "Coordinator",
      imgname: "IMG_20230331_024142 - 2021MEB062 JANHVI_SINGH.jpg",
      insta: "https://www.instagram.com/raghuvanshi_janhvi",
      link: "https://www.linkedin.com/in/janhvi-singh-858600239",
    },
    person3: {
      name: "Amartya Singh",
      phone: "+91 7357769918",
      post: "Coordinator",
      imgname:
        "WhatsApp Image 2024-01-06 at 12.39.41_ddaa52be - 2021MEB043 AMARTYA_SINGH.jpg",
      insta: "https://www.instagram.com/amartya_singh.29",
      link: "https://www.linkedin.com/in/Amartya Singh",
    },
    
  };
  const tl_person = {
    person1: {
      name: "Pritam Nayek",
      phone: "+91 7074437263",
      post: "Travel & Logistics Head",
      imgname: "IMG_20231021_110941_288 - 2020MEB034 PRITAM_NAYEK.jpg",
      insta:
        "https://www.instagram.com/pritam._.nayek?igsh=MWd0b2s2cnY3d2Yxcw==",
      link: "https://www.linkedin.com/in/pritam-nayek-024b28199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Himanshu Shivam",
      phone: "+91 9674577342",
      post: "Travel & Logistics Head",
      imgname: "RD1-1067 - 2020MEB042 HIMANSHU_SHIVAM.jpg",
      insta: "https://www.instagram.com/shivamhimansh",
      link: "https://www.linkedin.com/in/Himanshu Shivam",
    },
  };
  const webD_person = {
    
    person1: {
      name: "Utsab Kundu",
      phone: "+91 8100460390",
      post: "Head",
      imgname: "utsab.jpg",
      insta: "https://www.instagram.com/utsab_kundu5/",
      link: "https://www.linkedin.com/in/utsab-kundu-3a742421b/",
    },
  };
  const videoPhoto_person = {
    person1: {
      name: "Sai Venkat Rao",
      phone: "+91 8367663100",
      post: "Head",
      imgname: "1000127139-01_2 (1).jpeg.jpg",
      insta: "https://www.instagram.com/saivenkatrao.mpeg/",
      link: "https://www.linkedin.com/in/nagireddy-neela-sai-venkat-rao-8bb27a229",
    },
  };

  return (
    <>
      <Box sx={styles} className="center1" style={{ marginTop: "100px" }}>
        <Typography variant="h1">Contact Us</Typography>
        <br></br>
        <Box className="tabs  ">
          <Tabs value={value} onChange={handleChange}>
            <Tab className="tab" label="Coordinators" />
            <Tab className="tab" label="Finance Team" />
            <Tab className="tab" label="Event Management Team" />
            <Tab className="tab" label="Web Development Team" />
            <Tab className="tab" label="Content and Design Team" />
            <Tab className="tab" label="Publicity Team" />
            <Tab className="tab" label="Sponsorship Team" />
            <Tab className="tab" label="Food and Logistics Team" />
            <Tab className="tab" label="Industry Academia Meet" />
            <Tab className="tab" label="Videography and Photography Team" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} className="contactCards">
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={coordinator_person.person1} />
            <ContactCard person={coordinator_person.person2} />
            <ContactCard person={coordinator_person.person3} />
          </Box>

          {/* <ContactCard person={coordinator_person.person3} /> */}
          {/* <ContactCard person={coordinator_person.person4} /> */}
        </TabPanel>
        <TabPanel value={value} index={6} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Sponsorship Team*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={sponsorship_person.person1} />
            <ContactCard person={sponsorship_person.person2} />
          </Box>
            {/* <ContactCard person={sponsorship_person.person5} /> */}
          <br style={{ width: "100%" }}></br>
          {/* <ContactCard person={sponsorship_person.person4} />
          <ContactCard person={sponsorship_person.person5} /> */}
        </TabPanel>
        
        <TabPanel value={value} index={2} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Event Team*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={event_person.person1} />
            <ContactCard person={event_person.person2} />
            <ContactCard person={event_person.person3} />
          </Box>
          {/* <ContactCard person={event_person.person6} /> */}
        </TabPanel>

        <TabPanel value={value} index={3} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Technical Team*/}

          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={webD_person.person1} />
          </Box>
          {/* <ContactCard person={webD_person.person2} /> */}
        </TabPanel>

        <TabPanel value={value} index={4} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Design*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={design_person.person1} />
            <ContactCard person={design_person.person2} />
          </Box>
            {/* <ContactCard person={design_person.person6} /> */}
        </TabPanel>

        <TabPanel value={value} index={5} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Publicity */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={publicity_person.person1} />
          </Box>
          {/* <ContactCard person={publicity_person.person6} /> */}
          
        </TabPanel>

        <TabPanel value={value} index={1} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Finance*/}
          {/* <ContactCard person={finance_person.person1} /> */}
          {/* <ContactCard person={finance_person.person2} /> */}
        </TabPanel>

        <TabPanel value={value} index={7} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Food*/}
          {/* <ContactCard person={tl_person.person1} /> */}
          {/* <ContactCard person={tl_person.person2} /> */}
        </TabPanel>

        <TabPanel value={value} index={8} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------IAM*/}          
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            {/* <ContactCard person={iam_person.person1} /> */}
          </Box>
          {/* <ContactCard person={iam_person.person2} /> */}
        </TabPanel>

        <TabPanel value={value} index={9} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Video & Photo*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={videoPhoto_person.person1} />
          </Box>
          {/* <ContactCard person={videoPhoto_person.person4} /> */}

        </TabPanel>
      </Box>
      <Contact />
    </>
  );
}