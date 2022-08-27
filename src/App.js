import styled from "styled-components"
import Hero from "./components/Hero/Hero";
import LogoClouds from "./components/LogoClouds/LogoClouds";
import FeatureM from "./components/Feature/Multiple/FeatureM";
import Testimonial from "./components/Testimonial/Testimonial";
import Stats from "./components/Stats/Stats";
import FeatureS from "./components/Feature/Single/FeatureS";
import FeatureS2 from "./components/Feature/Single/FeatureS2";
import CTA from "./components/CTA/CTA";

const AppEl = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

function App() {
    return (
        <AppEl>
            <Hero/>
            <LogoClouds/>
            <FeatureM/>
            <Testimonial/>
            <Stats/>
            <FeatureS/>
            <FeatureS2/>
            <CTA/>
        </AppEl>
    );
}

export default App;
