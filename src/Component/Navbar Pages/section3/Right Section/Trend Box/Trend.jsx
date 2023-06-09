import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis} from '@fortawesome/free-solid-svg-icons'
import {faFaceSmile,faFaceFrown} from '@fortawesome/free-solid-svg-icons'

import { useState } from "react";

import Styles from "./Trend.module.css";
import { Button } from "@mui/material";

export default function Trend() {


  const content = [
    {
      id: 1,
    
      inIntrseted: false,
      upText: "NBA",
      midText: "Warriors at kings",
      botText: "377k Tweets",
    },
    {
        id:2,
      upText: " Trending",
      midText: "#JahnviKapoor",
      botText: "5,104 Tweets",
    },
    {
      id: 3,                                 
      inIntrseted: false,
      upText: "Entertainment·Trending",
      midText: "#AishwaryaRaiBachchan",
      botText: "1,981 Tweets",
    },
    {
      id: 4,

      inIntrseted: false,
      upText: "SPORTS",
      midText: "#CRICKET",
      botText: "377k Tweets",
    },
    {
      id: 5,

      inIntrseted: false,
      upText: "MUSIC",
      midText: "#BTS",
      botText: "377k Tweets",
    },
    {
      id: 6,

      inIntrseted: false,
      upText: "Trending in India",
      midText: "#कल_भारत_बंद_रहेगा",
      botText: "45.5K Tweets",
    },
    {
      id: 7,

      inIntrseted: false,
      upText: "Politics · Trending",
      midText: "Ukraine",
      botText: "345K Tweets",
    },
    {
      id: 8,

      inIntrseted: false,
      upText: "Sports · Trending",
      midText: "#HitmanBirthdayCDP",
      botText: "2,106 Tweets",
    },
    
  ];
  const [showMore, setShowMore] = useState(3);
  const [list, setList] = useState(content);
const handleShow=()=>{
 
  setShowMore(showMore+3)
}


  function notInterested(element) {

    if (element.inIntrseted === true) {
      element.inIntrseted = false;
      setList([...list]);
    } else {
      element.inIntrseted = true;
      setList([...list]);
    }
  }

  function dataDelete(element) {
    let index = list.indexOf(element);
    console.log(index);
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <>
      <div className={Styles.box}>
        <h3 style={{paddingLeft:"1rem"}}>What's Happening </h3>
         <img className={Styles.img} src="https://images.unsplash.com/photo-1602674809970-89073c530b0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="dummy img" />
        {list.slice(0,showMore).map((element) => (
          <div className={Styles.contentmain}>
            <div className={Styles.content}>
              <span>{element.upText}</span>
              <span className={Styles.content1}>{element.midText}</span>
              <span>{element.botText}</span>
            </div>
            <span className={Styles.poperParent}>
              {element.inIntrseted ? (
                <span className={Styles.poper}>
                  <h className={Styles.btn} onClick={() => dataDelete(element)}><FontAwesomeIcon color="blue" icon={faFaceSmile} /> NOT INTRESTED</h>
                  <h className={Styles.btn} onClick={() => dataDelete(element)}> <FontAwesomeIcon color="blue" icon={faFaceFrown} /> SPAM OR MISLEADING </h>
                </span>
              ) : (
                " "
              )}
              <FontAwesomeIcon icon={faEllipsis} onClick={() => notInterested(element)} />
             
            </span>
          </div>
        ))}
          <Button  onClick={handleShow} size="small">Show More </Button>
  
       
      </div>
    </>
  );
}