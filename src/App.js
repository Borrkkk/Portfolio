
import './App.css';
import Spline from '@splinetool/react-spline';
import styled from "styled-components"

function App() {
  return (
    <Wrapper>
      <Spline height="100%" scene="https://prod.spline.design/KG5gcilXF2hooZ7g/scene.splinecode" />
      <Content>
        <h1 className='greenHover'> WELCOME </h1>
        <p> My name is Kurt Cyrus Cuizon, I'm an aspiring developer with a deep passion for art.<br/><br/> Press the start button to proceed...
        </p>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'VT323', monospace;
  font-size: 16px;
  color: white;
  height: 100vh;
  position: relative;
  background-color: white;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    left: 0;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 5px;
  left: 20px;
  max-width: 30vw;

  @keyframes fadeGreen {
    from {
      color: white;
      letter-spacing: 2px;
      }
    to {color: #00FF00;   
    }
  }
  
  .greenHover:hover{
    animation-name: fadeGreen;
    animation-duration: 0.5s;
    letter-spacing: 20px;
    color: #00FF00;

  }
  p:hover{
    animation-name: fadeGreen;
    animation-duration: 0.5s;
    color: #00FF00;
  }
  p{
    font-size: 30px;
  }

  h1{
    font-size: 72px;
    letter-spacing: 10px;
  }


`
export default App;
