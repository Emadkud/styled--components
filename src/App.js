
import Button from "./components/Button";
import Header from "./components/Header";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Paragraph from "./components/Paragraph";
import Section from "./components/Section";


const App = () => {
  return (
    <>
   
    <NavBar/>
      <Main>
        <Section>
          <Header>Hi, My name is</Header>
          <Header>Brittany Chiang.</Header>
          <Header>I build things for the web.</Header> 
          
          <Paragraph margin={"20px 10 0 0"} maxWidth={"772px"}>
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at  <a href="#"> Upstate</a> .
          </Paragraph>
          
          <Paragraph  maxWidth={"772px"}>
         
          </Paragraph>

          <Button as={"a"} href={"#"}  margin={"50px 0 0"} padding={"20px 28px"}>Checkout my course link</Button>
        </Section>
        <Section>
          
            </Section>
      </Main>
    </>
  );
};

export default App;
