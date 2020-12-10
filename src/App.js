import React, { useState } from "react";
import "./styles.css";

var YTlist = {
  Learning: [
    {
      image:
        "https://i.postimg.cc/NLX3tFcM/tanaysir.jpg' border='0' alt='tanaysir",
      name: "Tanay Pratap",
      area: "Career Expert",
      link: "https://www.youtube.com/channel/UCNFmBuclxQPe57orKiQbyfA"
    },
    {
      image:
        "https://i.postimg.cc/VL3SWVZB/apnikaksha.jpg' border='0' alt='apnikaksha",
      name: "Apni Kaksha",
      area: "E-Learing",
      link: "https://www.youtube.com/channel/UCF7BExjT2zH_mmyqOB139Dg"
    },
    {
      image:
        "https://i.postimg.cc/rsDmS1SP/akshay-saini.jpg' border='0' alt='akshay-saini",
      name: "Akshay Saini",
      area: "E-Learning",
      link: "https://www.youtube.com/channel/UC3N9i_KvKZYP4F84FPIzgPQ"
    },
    {
      image:
        "https://i.postimg.cc/Sxx1bgYw/codeharry.jpg' border='0' alt='codeharry'",
      name: "CodeWithHarry",
      area: "Tutorials",
      link: "https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww"
    }
  ],

  Tech: [
    {
      image: "https://i.postimg.cc/RhtWk1Nn/TB.jpg' border='0' alt='TB",
      name: "Tech Burner",
      area: "Tech-info",
      link: "https://www.youtube.com/channel/UCXUJJNoP1QupwsYIWFXmsZg"
    },
    {
      image: "https://i.postimg.cc/xCzj8fYw/TG.jpg' border='0' alt='TG'",
      name: "Tech. Guruji",
      area: "Unboxing videos",
      link: "https://www.youtube.com/channel/UCOhHO2ICt0ti9KAh-QHvttQ"
    },
    {
      image: "https://i.postimg.cc/gJXjhyyB/TrT.jpg' border='0' alt='TrT'",
      name: "Trechin Tech",
      area: "Gadget Video",
      link: "https://www.youtube.com/user/trakinvideos"
    }
  ],

  comedy: [
    {
      image: "https://i.postimg.cc/nz48NCnh/byn.jpg' border='0' alt='byn'",
      name: "Be You Nick",
      area: "Funny Vines",
      link: "https://www.youtube.com/user/beyounick"
    },
    {
      image: "https://i.postimg.cc/CLLy6hXw/bbvi.jpg' border='0' alt='bbvi'",
      name: "BB vines",
      area: "Comdey vines",
      link: "https://www.youtube.com/channel/UCqwUrj10mAEsqezcItqvwEw"
    },
    {
      image: "https://i.postimg.cc/pTt4QRKb/carry.jpg' border='0' alt='carry'",
      name: "Carry minati",
      area: "Gaming & Roasting",
      link: "https://www.youtube.com/user/AddictedA1"
    }
  ]
};

var YTkeys = Object.keys(YTlist);

export default function App() {
  const [YTtype, setYTtype] = useState("Learning");

  function clickHandler(newYTtype) {
    setYTtype(newYTtype);
  }

  return (
    <div className="App">
      <h1>🎬 Best Youtube Channel's 🎬</h1>
      <p style={{ marginBottom: "25px" }}> Channel Recommendation App</p>
      <div className="YTtypeswrppr">
        {YTkeys.map(function (name) {
          return (
            <span
              key={name}
              onClick={() => clickHandler(name)}
              className="typestyle"
            >
              {name}
            </span>
          );
        })}
      </div>

      <div className="channellistdiv">
        {YTlist[YTtype].map(function (type, index) {
          return (
            <div className="listdiv" key={index}>
              <img src={type.image} className="imgstyle"></img>
              <h4>{type.name}</h4>
              <ul style={{ marginLeft: "-120px", float: "left" }}>
                <li>
                  <p>{type.area}</p>
                </li>
                <li>
                  {" "}
                  Channel :
                  <a href={type.link}>
                    <i class="fab fa-youtube" style={{ fontSize: "20px" }}></i>
                  </a>
                </li>
              </ul>
            </div>
          );
        })}

        <div className="footer" id="contact">
          <h2 style={{ color: "white" }}>LET'S CONNECT.</h2>
          <div class="footerlinks">
            <a href="https://www.instagram.com/omkar.pro/">
              <i class="fab fa-instagram"></i> Instagram
            </a>

            <a href="https://www.linkedin.com/in/omkar-borude-%F0%9F%87%AE%F0%9F%87%B3-b4583016b/">
              <i class="fab fa-linkedin-in"></i> LinkedIn{" "}
            </a>

            <a href="https://github.com/omkarborude">
              <i class="fab fa-github"></i> GitHub
            </a>

            <a href="https://twitter.com/OmkarBo41663400">
              <i class="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
