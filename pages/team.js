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
      name: "Ketan Masurkar",
      phone: "+91 8788330638",
      post: "Head",
      imgname: "team/ketan.jpg",
      insta: "",
      link: "https://www.linkedin.com/in/ketan-masurkar-0a4b24225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },     
    person2: {
      name: "Rohit Pal",
      phone: "+91 8319629245",
      post: "Head",
      imgname: "team/ROHIT_PAL.jpg",
      insta: "https://www.instagram.com/rohitpal_18?igsh=MXhlNWd6N2pzZGZ6",
      link: "https://www.linkedin.com/in/rohit-pal-08443b222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person3: {
      name: "Akshat Gupta",
      phone: "+91 7548071485",
      post: "Executive",
      imgname: "team/akshat_spt.jpeg",
      insta: "",
      link: "",
    },
    person4: {
      name: "Akash",
      phone: "+91 9444265824",
      post: "Executive",
      imgname: "team/akashS.jpeg",
      insta: "",
      link: "",
    },
    person5: {
      name: "Pratik",
      phone: "+91 8956850808",
      post: "Executive",
      imgname: "team/pratik.jpg",
      insta: "https://www.instagram.com/pratik._1525?igsh=aWR6a3QxY2lzdzFt",
      link: "https://www.linkedin.com/in/pratik-kadam-30b198253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person6: {
      name: "Ritesh Gupta",
      phone: "+91 8291164387",
      post: "Executive",
      imgname: "",
      insta: "",
      link: "",
    },
  };
  const event_person = {
    
    person1: {
      name: "Soham Banerjee",
      phone: "+91 8101264621",
      post: "Head",
      imgname: "team/SOHAM_BANERJEE.png",
      insta: "https://www.instagram.com/banerjeesoham111",
      link: "https://www.linkedin.com/in/soham-banerjee-867a82255",
    },
    person2: {
      name: "Wali Ahad Mallick",
      phone: "+91 7480984908",
      post: "Head",
      imgname: "team/MD_WALI AHAD MALLICK.jpg",
      insta: "https://www.instagram.com/wali_malik578?igsh=MXg4NjlxYXVjZTgzeg==",
      link: "https://www.linkedin.com/in/wali-ahad-mallick-027632222",
    },
    person3: {
      name: "Ankush Ghosh",
      phone: "+91 8145326311",
      post: "Head",
      imgname: "team/ANKUSH_GHOSH.jpg",
      insta: "https://www.instagram.com/ag0172003",
      link: "https://www.linkedin.com/in/ankush-ghosh-43b02a255",
    },   
    person4: {
      name: "Siddamalla Harshavardhan",
      phone: "+91 7702497870",
      post: "Head",
      imgname: "team/Siddamalla_Harshavardhan.jpg",
      insta: "https://www.instagram.com/harshavardhansiddhamalla?igsh=NGZjcnJxNmprOTV2",
      link: "https://www.linkedin.com/in/harshavardhan-siddamalla-118995229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    },
    person5: {
      name: "Piyush Pathak",
      phone: "+91 7282809390",
      post: "Head",
      imgname: "team/piyush.jpg",
      insta: "",
      link: "https://www.linkedin.com/in/piyush-pathak-882489241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },   
    person6: {
      name: "Sayan Mondal",
      phone: "+91 8670297716",
      post: "Head",
      imgname: "team/SAYAN_MONDAL.jpg",
      insta: "https://www.instagram.com/s.o.l.o.n.i.s.t/",
      link: "https://www.linkedin.com/in/sayan-mondal-5016511a0/",
    },
    person9: {
      name: "Debolina Das",
      phone: "+91 7003574009",
      post: "Executive",
      imgname: "",
      insta: "",
      link: "",
    },
    person8: {
      name: "Vizo",
      phone: "+91 8787805856",
      post: "Executive",
      imgname: "",
      insta: "",
      link: "",
    },
    person7: {
      name: "Ritesh Gupta",
      phone: "+91 8291164387",
      post: "Executive",
      imgname: "",
      insta: "",
      link: "",
    },
    person10: {
      name: "Shivansh",
      phone: "+91 8545898275",
      post: "Executive",
      imgname: "",
      insta: "",
      link: "",
    },
    person11: {
      name: "Tuhin Mondal",
      phone: "+91 8100969909",
      post: "Executive",
      imgname: "",
      insta: "",
      link: "",
    },
    person12: {
      name: "Harsh Kumar",
      phone: "8240541513",
      post: "Executive",
      imgname: "team/harsh_kumar.jpeg",
      insta: "",
      link: "",
    },
    person13: {
      name: "Rajdeep Sarkar",
      phone: "+91 7980430746",
      post: "Executive",
      imgname: "",
      insta: "",
      link: "",
    },
    person14: {
      name: "Debjit Maity",
      phone: "+91 8167025227",
      post: "Executive",
      imgname: "",
      insta: "",
      link: "",
    },
    person15: {
      name: "Dibya Jyoti Das",
      phone: "+91 7699249687",
      post: "Executive",
      imgname: "",
      insta: "",
      link: "",
    },
  };
  const design_person = {
    person1: {
      name: "Piyal Bhowmick",
      phone: "+91 8910276639",
      post: "Head",
      imgname: "team/PIYAL_BHOWMICK.jpg",
      insta: "https://www.instagram.com/piyalb_13",
      link: "https://www.linkedin.com/in/piyal-bhowmick-555563199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },   
    person2: {
      name: "Kanishka Dutta",
      phone: "+91 9874168331",
      post: "Head",
      imgname: "team/Kanishka.jpg",
      insta: "https://www.instagram.com/theindiandollar172/profilecard/?igsh=NnIxczg0NDlmYjlp",
      link: "https://www.linkedin.com/in/kanishkadutta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },   
    person3: {
      name: "Anurag Chakraborty",
      phone: "+91 6290781657",
      post: "Head",
      imgname: "team/Anurag.jpg",
      insta: "https://www.instagram.com/obla_diob_lada/profilecard/?igsh=ZTl3YTVuZXRuY3Qx",
      link: "#",
    },
    person4: {
      name:"Kishore Pal",
      phone:"+91 9641435117",
      post:"Executive",
      imgname:"team/Kishore_pt.jpeg",
      insta:"https://www.instagram.com/kishorepal.31?igsh=MTQ3ZjhkZzh1YXptZQ==",
      link:"https://www.linkedin.com/in/kishore-pal-38463a264"
    } 
    
  };
  const publicity_person = {
   
    person1: {
      name: "Ajay kumar khandelwal",
      phone: "+91 7792062842",
      post: "Head",
      imgname:
        "team/AJAY_KUMAR KHANDELWAL.jpg",
      insta: "https://www.instagram.com/ajaykhandelwal_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      link: "https://www.linkedin.com/in/ajay-kumar-khandelwal-1978aa231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Shamiksha Kumari",
      phone: "+91 9749520498",
      post: "Head",
      imgname:
        "team/Shamiksha.jpg",
      insta: "https://www.instagram.com/may.be.shami/profilecard/?igsh=MWp0eXkzaHZha2ds",
      link: "https://www.linkedin.com/in/shamiksha-kumari-6a2623258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };
  const finance_person = {
    person1: {
      name: "Ivan Jacob Thomas",
      phone: "+91 7463884470",
      post: "Head",
      imgname:
        "team/IVAN_JACOB THOMAS.jpeg",
      insta: "https://www.instagram.com/ivan_jax/",
      link: "https://www.linkedin.com/in/ivan-jacob-thomas-a62b9b239/",
    },
  };
  const iam_person = {
    person1: {
      name: "Ivan Jacob Thomas",
      phone: "+91 7463884470",
      post: "Head",
      imgname:
        "team/IVAN_JACOB THOMAS.jpeg",
      insta: "https://www.instagram.com/ivan_jax/",
      link: "https://www.linkedin.com/in/ivan-jacob-thomas-a62b9b239/",
    },
    person2: {
      name: "Soumyadeep Dey",
      phone: "+91 9800054616",
      post: "Head",
      imgname: "team/SOUMYADEEP_DEY.png",
      insta: "https://www.instagram.com/deepsoumyadey",
      link: "https://www.linkedin.com/in/Soumyadeep Dey",
    },
  };
  const coordinator_person = {
    person1: {
      name: "Janhvi Singh",
      phone: "+91 8318035176",
      post: "Coordinator",
      imgname: "team/JANHVI_SINGH.jpg",
      insta: "https://www.instagram.com/raghuvanshi_janhvi",
      link: "https://www.linkedin.com/in/janhvi-singh-858600239",
    },
    person2: {
      name: "Amartya Singh",
      phone: "+91 7357769918",
      post: "Coordinator",
      imgname:
        "team/AMARTYA_SINGH.jpg",
      insta: "https://www.instagram.com/amartya_singh.29",
      link: "https://www.linkedin.com/in/Amartya Singh",
    },
    person3: {
      name:"Varun Gautam",
      phone:"+91 9368145959",
      post:"Joint Coordinator",
      imgname: "team/varunIMG.jpeg",
      insta:"https://www.instagram.com/smile__varun?igsh=YWN6emg5c2xwdXhj",
      link:"https://in.linkedin.com/in/varun-gautam-1205012a9"
    },
    person4: {
      name:"Abhishek Bhatt",
      phone:"+91 6395399362",
      post:"Joint Coordinator",
      imgname: "team/abhishekIMG.jpeg",
      insta:"https://www.instagram.com/abhibhtabhi?igsh=MTY3Y2d4Znd2YmZjYw==",
      link:" https://www.linkedin.com/in/abhishek-bhatt-306b28259"
    }
    
  };
  const tl_person = {
    person1: {
      name: "Subhankar Mondal",
      phone: "+91 7863906928",
      post: "Head",
      imgname: "team/Subhankar.jpg",
      insta:
        "https://www.instagram.com/sub_hankarmondal/",
      link: "https://www.linkedin.com/in/subhankar-m-20032020/",
    },
    person2: {
      name: "Arunava Pal",
      phone: "+91 9874269145",
      post: "Head",
      imgname: "team/Arunava.jpg",
      insta:
        "https://www.instagram.com/its_groot_06?igsh=eXJzYmcyYXRlbGE2",
      link: "https://www.linkedin.com/in/arunava-pal-518872257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };
  const webD_person = {
    
    person1: {
      name: "Utsab Kundu",
      phone: "+91 8100460390",
      post: "Head",
      imgname: "team/utsab.jpg",
      insta: "https://www.instagram.com/utsab_kundu5/",
      link: "https://www.linkedin.com/in/utsab-kundu-3a742421b/",
    },
    person2:{
      name: "Abhishek Kumar",
      phone:"+91 9959387572",
      post:"Technical Executive",
      imgname:"team/abhishek.jpg",
      insta:"",
      link:""
    }
  };
  const videoPhoto_person = {
    person1: {
      name: "Sai Venkat Rao",
      phone: "+91 8367663100",
      post: "Head",
      imgname: "team/sai_venkat.jpg",
      insta: "https://www.instagram.com/saivenkatrao.mpeg/",
      link: "https://www.linkedin.com/in/nagireddy-neela-sai-venkat-rao-8bb27a229",
    },
    person2: {
      name: "Sabavath Akash Ram Naik",
      phone: "+91 7815812686",
      post: "Head",
      imgname: "team/Akash_Ram.jpg",
      insta: "https://www.instagram.com/akash_ram__/profilecard/?igsh=dTNjb3ByYXVsbDI=",
      link: "https://www.linkedin.com/in/sabavath-akash-ram-naik-369980214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };

  return (
    <>
      
      <Box sx={styles} className="center1" style={{ marginTop: "100px", }}>
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
            <Tab className="tab" label="Travel and Logistics Team" />
            <Tab className="tab" label="Industry Academia Meet Team" />
            <Tab className="tab" label="Videography and Photography Team" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} className="contactCards">
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={coordinator_person.person2} />
            <ContactCard person={coordinator_person.person1} />
          </Box>
          <ContactCard person={coordinator_person.person4} />
          <ContactCard person={coordinator_person.person3} /> 
        </TabPanel>
        <TabPanel value={value} index={6} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Sponsorship Team*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={sponsorship_person.person1} />
            <ContactCard person={sponsorship_person.person2} />
            <Box>
            <ContactCard person={sponsorship_person.person3} />
            <ContactCard person={sponsorship_person.person4} />
            <ContactCard person={sponsorship_person.person5} />
            <ContactCard person={sponsorship_person.person6} /></Box>
          </Box>
            {/* <ContactCard person={sponsorship_person.person5} /> */}
          <br style={{ width: "100%" }}></br>
          {/* <ContactCard person={sponsorship_person.person4} />
          <ContactCard person={sponsorship_person.person5} /> */}
        </TabPanel>
        
        <TabPanel value={value} index={2} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Event Team*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={event_person.person3} />
            <ContactCard person={event_person.person5} />
            <ContactCard person={event_person.person6} />
            <ContactCard person={event_person.person4} />
            <ContactCard person={event_person.person1} />
            <ContactCard person={event_person.person2} />
            <Box>
            <ContactCard person={event_person.person7} />
            <ContactCard person={event_person.person8} />
            <ContactCard person={event_person.person9} />
            <ContactCard person={event_person.person10} />
            <ContactCard person={event_person.person11} />
            <ContactCard person={event_person.person12} />
            <ContactCard person={event_person.person13} />
            <ContactCard person={event_person.person14} />
            <ContactCard person={event_person.person15} /></Box>
            
          </Box>
          {/* <ContactCard person={event_person.person6} /> */}
        </TabPanel>

        <TabPanel value={value} index={3} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Technical Team*/}

          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={webD_person.person1} />
            <ContactCard person={webD_person.person2} />
          </Box>
          {/* <ContactCard person={webD_person.person2} /> */}
        </TabPanel>

        <TabPanel value={value} index={4} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Design*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={design_person.person3} />
            <ContactCard person={design_person.person2} />
            <ContactCard person={design_person.person1} />
          </Box>
          <Box sx={{marginTop:"-75px"}}>
            <ContactCard person={design_person.person4} />
            </Box>
            {/* <ContactCard person={design_person.person6} /> */}
        </TabPanel>

        <TabPanel value={value} index={5} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Publicity */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={publicity_person.person1} />
            <ContactCard person={publicity_person.person2} />
          </Box>
          {/* <ContactCard person={publicity_person.person6} /> */}
            
        </TabPanel>

        <TabPanel value={value} index={1} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Finance*/}
          <ContactCard person={finance_person.person1} />
          {/* <ContactCard person={finance_person.person2} /> */}
        </TabPanel>

        <TabPanel value={value} index={7} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------T&L*/}
          <ContactCard person={tl_person.person2} />
          <ContactCard person={tl_person.person1} />
        </TabPanel>

        <TabPanel value={value} index={8} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------IAM*/}          
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={iam_person.person1} />
            <ContactCard person={iam_person.person2} />
          </Box>
          {/* <ContactCard person={iam_person.person2} /> */}
        </TabPanel>

        <TabPanel value={value} index={9} className="contactCards">
          {/*--------------------------------------------------------------------------------------------------------------------Video & Photo*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>
            <ContactCard person={videoPhoto_person.person2} />
            <ContactCard person={videoPhoto_person.person1} />
          </Box>
          {/* <ContactCard person={videoPhoto_person.person4} /> */}

        </TabPanel>
      </Box>
      
      <Contact style={{bottom:"0"}} />
    </>
  );
}