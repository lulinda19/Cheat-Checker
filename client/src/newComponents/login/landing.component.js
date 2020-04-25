import React from 'react';
import { Provider, Heading, Subhead } from "rebass";
import {
  Hero,
  CallToAction,
} from "react-landing-page";

function Landing() {
  return (
    <Provider>
    <Hero
      color="black"
      bg="white"
      backgroundImage="https://www.xmple.com/wallpaper/white-blue-checkered-squares-1920x1080-c2-ffffff-87cefa-l-100-a-15-f-2.svg"
      bgOpacity="0.75"
    >
      <Heading>Cheat Checker</Heading>
      <Subhead>Prevent Stack Exchange Plagiarism</Subhead>
      <CallToAction href="/student" mt={3}>
        For Students
      </CallToAction>
      <CallToAction href="/instructor" mt={3}>
        For Instructors
      </CallToAction>
    </Hero>
  </Provider>
  );
}

export default Landing;