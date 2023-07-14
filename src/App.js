import React from "react";
import Typography from "./Components/Typography/Typography";
import Heading from "./Components/Heading/Heading";
import { HEADING_VARIANT } from "./Components/Heading/heading.constants";
import classes from "./app.module.css";
import Hero from "./Components/Hero/HeroComponent";

// test
const App = () => {
  return (
    <React.Fragment>
      <div>
        <Typography variant="h5">Heading</Typography>

        <Heading className={classes.pageHeading} text="Senthil"></Heading>
        <Heading className={classes.pageSubHeading} text="Senthil"></Heading>
        <Hero
          bgColor="#ffee34"
          headingProps={{ text: "Test Text 1", variant: HEADING_VARIANT.h3 }}
          subHeadingProps={{
            text: "Test subheading",
            variant: HEADING_VARIANT.h6,
          }}
        />

        <Hero
          bgColor="green"
          headingProps={{ text: "Test Text 1", variant: HEADING_VARIANT.h1 }}
          subHeadingProps={{
            text: "Test subheading",
            variant: HEADING_VARIANT.h2,
          }}
        />

        {/* <Hero image="https://img.freepik.com/free-vector/cyber-security-concept_23-2148530842.jpg?w=740&t=st=1689338026~exp=1689338626~hmac=0d047097976a5f93b88b2f7aea582bb0b91179b39f0ceb2fe4b349c3c3954cb0" />
      <Hero image="https://img.freepik.com/free-psd/restaurant-landing-page-template_23-2148466849.jpg?w=996&t=st=1689337948~exp=1689338548~hmac=86f872729d66afad1ac7d2a3c0810040faf705c953be572850cb01ebf68c799c" />       */}
      </div>
      <div>
        <Typography variant="body">Description</Typography>
      </div>
      <div>
        <button variant="contained">Contained</button>
        <button variant="contained" disabled>
          Disabled
        </button>
        <button variant="contained" href="#contained-buttons">
          Link
        </button>
      </div>
    </React.Fragment>
  );
};

export default App;
