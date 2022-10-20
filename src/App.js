import styled from "@emotion/styled";
import Navbar from "./components/navbar";
import Main from "./pages/main";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, [])

  return (
    <MainWrapper>
      <Navbar/>    
      <Main/>
    </MainWrapper>
  );
}

const MainWrapper = styled.div({
    position: "relative",
    width: "100vw",
    minWidth: "100vw" ,
    maxWidth: "100vw",
    height: "100vh",
    minHeight: "100vh", 
})

export default App;
