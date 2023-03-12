import styles from "./pricing.module.css";
import HdIcon from "@mui/icons-material/Hd";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import PriceCard from "./PriceCard";
import { Fragment, useState } from "react";
import AndroidIcon from "@mui/icons-material/Android";

const Pricing = (props) => {
  const [screenWidth, setWidth] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setWidth(window.screen.width);
  });

  return (
    <Fragment>
      <div id="pricing" className={styles.pricingContainer}>
        <h1 className={`display-2 ${styles.pricingHeader}`}>
          <span>Simple</span> and <span>Affordable</span> plans
        </h1>
        <div className={styles.featuresAndPlans}>
          <div className={styles.features}>
            {screenWidth < 900 ? (
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                <Grid xs={4} md={4}>
                  <div className={styles.listItem}>
                    <span>
                      <HdIcon sx={{ color: "#fc1a57" }} fontSize="large" />
                    </span>{" "}
                    4K streaming
                  </div>
                </Grid>

                <Grid xs={4} md={4}>
                  <div className={styles.listItem}>
                    <span>
                      <AllInclusiveIcon
                        sx={{ color: "#fc1a57" }}
                        fontSize="large"
                      />
                    </span>{" "}
                    The biggest library of movies and series
                  </div>
                </Grid>
                <Grid xs={4} md={4}>
                  <div className={styles.listItem}>
                    <span>
                      <AndroidIcon sx={{ color: "#fc1a57" }} fontSize="large" />
                    </span>{" "}
                    Supports any operating system
                  </div>
                </Grid>
                <Grid xs={4} md={4}>
                  <div className={styles.listItem}>
                    <span>
                      <SupportAgentIcon
                        sx={{ color: "#fc1a57" }}
                        fontSize="large"
                      />
                    </span>{" "}
                    24/7 freindly customer support
                  </div>
                </Grid>
                <Grid xs={4} md={4}>
                  <div className={styles.listItem}>
                    <span>
                      <AspectRatioIcon
                        sx={{ color: "#fc1a57" }}
                        fontSize="large"
                      />
                    </span>{" "}
                    Multi-screen support
                  </div>
                </Grid>

                <Grid xs={4} md={4}>
                  <div className={styles.listItem}>
                    <span>
                      <LiveTvIcon sx={{ color: "#fc1a57" }} fontSize="large" />
                    </span>{" "}
                    On-Demand content, no commercials.
                  </div>
                </Grid>
              </Grid>
            ) : (
              <ul>
                <li>
                  <span>
                    <LiveTvIcon sx={{ color: "#fc1a57" }} fontSize="large" />
                  </span>{" "}
                  Access to a wide selection of channels
                </li>
                <li>
                  <span>
                    <AllInclusiveIcon
                      sx={{ color: "#fc1a57" }}
                      fontSize="large"
                    />
                  </span>{" "}
                  On-Demand content with no commercials.
                </li>
                <li>
                  <span>
                    <HdIcon sx={{ color: "#fc1a57" }} fontSize="large" />
                  </span>{" "}
                  4K streaming
                </li>
                <li>
                  <span>
                    <AspectRatioIcon
                      sx={{ color: "#fc1a57" }}
                      fontSize="large"
                    />
                  </span>{" "}
                  Multi-screen support
                </li>
                <li>
                  <span>
                    <SupportAgentIcon
                      sx={{ color: "#fc1a57" }}
                      fontSize="large"
                    />
                  </span>{" "}
                  24/7 freindly customer support
                </li>
              </ul>
            )}
          </div>

          <div className={`container-fluid ${styles.plans}`}>
            <Grid
              container
              rowSpacing={screenWidth > 900 ? 5 : 5}
              columnSpacing={{ xs: 1, s: 3 }}
            >
              <Grid xs={4} s={4} md={4}>
                <PriceCard period=" 1 Month" price={13} />
              </Grid>
              <Grid xs={4} s={4} md={4}>
                <PriceCard period=" 3 Months" price={28} />
              </Grid>
              <Grid xs={4} s={4} md={4}>
                <PriceCard period=" 6 Months" price={45} />
              </Grid>
              <Grid xs={4} s={4} md={4}>
                <PriceCard period=" 12 Months" price={70} />
              </Grid>
              <Grid xs={4} s={4} md={4}>
                <PriceCard period=" 15 Months" price={80} />
              </Grid>
              <Grid xs={4} s={4} md={4}>
                <PriceCard period=" 24 Months" price={120} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pricing;
