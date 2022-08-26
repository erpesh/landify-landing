import styled from "styled-components"
import Hero from "./components/Hero/Hero";

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
        </AppEl>
    );
}

export default App;
