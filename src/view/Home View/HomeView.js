import React, { useState, useEffect } from "react";
import classes from "./HomeView.module.css";
import homeImage from "../../shared/Images/HorizontalHomeImage.jpg";
import En1 from "../../shared/Images/En_nature.jpg";
import En2 from "../../shared/Images/En_nature1.jpg";
import Idyll from "../../shared/Images/Idyll_nature.jpg";
import Ljus from "../../shared/Images/Ljus_nature.jpg";
import Prakt from "../../shared/Images/Prakt_nature.jpg";
import Sadel1 from "../../shared/Images/Sadel_nature1.jpg";
import Sadel2 from "../../shared/Images/Sadel_nature2.jpg";
import Sadel3 from "../../shared/Images/Sadel_nature3.jpg";
import Sadel4 from "../../shared/Images/Sadel_nature4.jpg";

let HomeView = () => {
  const [offSetY, setOffSetY] = useState(0);
  const [section, setSection] = useState(0);
  const handleScroll = () => {
    setOffSetY(window.pageYOffset);
    let vh = offSetY / 6.07;
    setSection(vh);
  };
  console.log(section);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offSetY]);

  return (
    <div className={classes.HomeView}>
      <div className={classes.Section}>
        <section>
          <div>
            <div>
              <h1></h1>
            </div>
            <div className={classes.images}>
              <div className={classes.image}>
                <img
                  src={En1}
                  style={{
                    transform: `translateY(${-0.7 * offSetY}px)`,
                    transition: ` 0.5 ease-out`,
                  }}
                />
              </div>
              <div className={classes.image}>
                <img
                  src={En2}
                  style={{
                    transform: `translateY(${-1.2 * offSetY}px)`,
                    transition: ` 0.5 ease-out`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.Section}>
        <section>
          <div>
            <div>
              <div>
                <h1></h1>
              </div>
              <div className={classes.images}>
                <div className={classes.image}>
                  <img
                    src={Idyll}
                    style={{
                      transform: `translateY(${-0.6 * offSetY}px)`,
                      transition: ` 0.5 ease-out`,
                    }}
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src={Ljus}
                    style={{
                      transform: `translateY(${-0.4 * offSetY}px)`,
                      transition: ` 0.5 ease-out`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.Section}>
        <section>
          <div>
            <div>
              <div>
                <h1></h1>
              </div>
              <div className={classes.images}>
                <div className={classes.image}>
                  <img
                    src={Prakt}
                    style={{
                      transform: `translateY(${-0.5* offSetY}px)`,
                      transition: ` 0.5 ease-out`,
                    }}
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src={Sadel1}
                    style={{
                      transform: `translateY(${-0.3 * offSetY}px)`,
                      transition: ` 0.5 ease-out`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.Section}>
        <section>
          <div>
            <div>
              <div>
                <h1>text</h1>
              </div>
              <div className={classes.images}>
                <div className={classes.image}>
                  <img
                    src={Sadel2}
                    style={{
                      transform: `translateY(${-0.2 * offSetY}px)`,
                      transition: ` 0.5 ease-out`,
                    }}
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src={Sadel3}
                    style={{
                      transform: `translateY(${-0.1 * offSetY}px)`,
                      transition: ` 0.5 ease-out`,
                    }}
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src={Sadel4}
                    style={{
                      transform: `translateY(${-0.2 * offSetY}px)`,
                      transition: ` 0.5 ease-out`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeView;
