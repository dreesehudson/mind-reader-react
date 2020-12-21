import React, { useState } from 'react'
import './App.css';
import { Button, Card, CardBody, CardFooter, Col, Row, } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [view, setView] = useState(0)
  const [symbols, setSymbols] = useState(['😎', '🥳', '😆', '🙃', '😄', '🤣', '🤓', '😏'])
  const [chosenSymbol, setChosenSymbol] = useState("")
  const [randomSymbol, setRandomSymbol] = useState("")
  const [list, setList] = useState([])

  setChosenSymbol(symbols[Math.floor(Math.random() * symbols.length)])
  for (let i = 0; i < 100; i++) {
    if (i % 9) {
      setRandomSymbol(symbols[Math.floor(Math.random() * symbols.length)]);
      setList([...list, (i + " --- " + randomSymbol)]);
    }
    else {
      setList([...list, (i + " --- " + chosenSymbol)]);
    }
  }

  function nextView() {
    setView(view + 1)
  }

  function lastView() {
    setView(view - 1)
  }

  return (
    <div className="App">
      <Card className='border-0'>
        <CardBody className='mt-5 border-0'>
          {view === 0 &&
            <h1 className='display-3'>I can read your mind.</h1>}
          {view === 1 &&
            <h1 className='display-3'>Pick a number 01-99.</h1>}
          {view === 2 &&
            <>
              <h1 className='display-3'>Add both digits together to get a new number.</h1>
              <h2 className='mt-5'>Ex. 47 is 4 + 7 = 11</h2>
            </>
          }
          {view === 3 &&
            <>
              <h1 className='display-3'>Subtract the new number from your original number.</h1>
              <h2 className='mt-5'>Ex. 47 - 11 = 36</h2>
            </>
          }
          {view === 4 &&
            <>
              <h1 className='display-3'>Find your new number and symbol.</h1>
              {list.map((item, idx) =>
                <p key={idx}>{item}</p>
              )}
            </>
          }
          {view === 5 &&
            <>
              <h1 className='display-3'>Your symbol is {chosenSymbol}</h1>
            </>
          }
        </CardBody>
        <CardFooter className='bg-white border-0 fixed-bottom mb-5'>
          <Row>
            <Col>
              {view !== 0 &&
                <Button className='bg-white border-white'>
                  <FontAwesomeIcon className='fa-5x text-secondary' icon={faArrowCircleLeft} onClick={() => lastView()} />
                </Button>
              }
            </Col>
            <Col>
              <Button className='bg-white border-white'>
                <FontAwesomeIcon className='fa-5x text-primary' icon={faArrowCircleRight} onClick={() => nextView()} />
              </Button>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
