import React, { useState } from "react";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Styles from "./Policy.module.css";

const Policy = (props) => {
  let [boolArr, setBoolArr] = useState([]);
  let tempContent = Object.values(props.policy[0]).slice();
  const index = tempContent.indexOf("TERMS & CONDITON");
  tempContent.splice(index, 1);
  let showData = false;

  useEffect(() => {
    let temp = [];
    tempContent.forEach(() => {
      temp.push(showData);
    });
    setBoolArr(temp);
  }, []);
  const show = (event, id) => {
    let temp = [...boolArr];
    let index = tempContent.findIndex((content) => {
      return content === id;
    });
    temp[index] = !temp[index];
    setBoolArr(temp);
  };
  let policyContent = (
    <div>
      <h1>{props.policy[0].title}</h1>
      <br />
      {tempContent.map((content, index) => (
        <div className={Styles.Paragraph} key={index}>
          <div className={Styles.ArrowDiv}>
            <BsArrowRight
              style={{
                transition: "0.5s ease-out",
                transform: boolArr[index] ? "rotate(90deg)" : null,
              }}
            />
            <div
              className={Styles.Header}
              onClick={(event) => show(event, content)}
            >
              {content[0]}
            </div>
          </div>
          {boolArr[index] ? (
            <p onClick={(event) => show(event, content)}>{content[1]}</p>
          ) : null}
          <br />
        </div>
      ))}
    </div>
  );

  return <div className={Styles.MainDiv}>{policyContent}</div>;
};

export default Policy;
