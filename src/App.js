import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Accordion} from "react-bootstrap"
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import AccordionComponent from './components/AccordionComponent';
function App() {
  return (
    <Container>
      <Header/>
      <Body>
        <AccordionComponent/>
      </Body>
      <Footer/>

    </Container>
    );
}

export default App;
