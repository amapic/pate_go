import React, { useState, useRef } from "react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
// import menu from "../img/bon_coin/menu.svg";
import menu from "../img/bon_coin/menu.svg";
import fleche_bas_1 from "../img/bon_coin/fleche_bas_1.svg";
import fleche_bas_2 from "../img/bon_coin/fleche_bas_2.svg";
import loupe from "../img/bon_coin/loupe.svg";
import croix from "../img/bon_coin/croix.svg";
import Modal_window from "./modal";
import { Modal, Overlay } from "react-bootstrap";
import {Radar,RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Legend} from "recharts"
const Article = (props) => {
  const [open, setOpen] = React.useState(false);
  const targetCategories = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    console.log(open);
    setOpen(!open);
  };

  const data = [
    {
      "subject": "Gelée",
      "A": 120,
      "B": 110,
      "fullMark": 150
    },
    {
      "subject": "Chinese",
      "A": 98,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "English",
      "A": 86,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "Geography",
      "A": 99,
      "B": 100,
      "fullMark": 150
    },
    {
      "subject": "Physics",
      "A": 85,
      "B": 90,
      "fullMark": 150
    },
    {
      "subject": "History",
      "A": 65,
      "B": 85,
      "fullMark": 150
    }
  ]
  return (
    <>
      <div>
        Paté 1
        {/* <div>
          <div className="row">
            <div className="photo col-md-6"></div>
            <div className="col-md-6"></div>
          </div>
        </div> */}
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </div>
    </>
  );
};
export default Article;
