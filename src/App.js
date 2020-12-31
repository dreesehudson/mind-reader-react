import React, { useState, useEffect } from 'react'
import './App.css';
import { Button, Card, CardBody, CardFooter, Col, ListGroup, Row, ListGroupItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight, faUndo } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [view, setView] = useState(0)
  const [symbols, setSymbols] = useState(['😎', '🥳', '😆', '🙃', '😄', '🤣', '🤓', '😏'])
  const [chosenSymbol, setChosenSymbol] = useState(symbols[Math.floor(Math.random() * symbols.length)])
  const [list, setList] = useState([])
  const [reset, setReset] = useState(0)

  useEffect(() => {
    generateList()
  }, [])

  function generateList() {
    setList([])
    let proxy = []
    for (let i = 0; i <= 99; i++) {
      if (i % 9) {
        let random = symbols[Math.floor(Math.random() * symbols.length)]
        proxy.push([i + " ---> " + random])
        //pick random symbol to assign to this number
        setList(proxy);
      }
      else {
        //assign the 'right answer' to this number
        proxy.push([i + " ---> " + chosenSymbol])
        setList(proxy);
      }
    }
  }

  function nextView() {
    setView(view + 1)
  }

  function lastView() {
    setView(view - 1)
  }

  function resetGame() {
    setView(0)
    setReset(reset + 1)
  }

  return (
    <div className="App">
      <Card className='border-0'>
        <CardBody className='mt-5 mb-5 pb-5 overflow-auto border-0'>
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
              <ListGroup>
                {
                  list.map((item, idx) =>
                    <ListGroupItem key={idx}>{item}</ListGroupItem>
                  )
                }
              </ListGroup>
            </>
          }
          {view === 5 &&
            <>
              <h1 className='display-3'>Your symbol is {chosenSymbol}</h1>
            </>
          }
        </CardBody>
        <CardFooter className='bg-white border-0 fixed-bottom mt-5 pt-0'>
          <Row>
            <Col>
              {view !== 0 &&
                <Button className='bg-white border-white rounded-circle p-0 m-3'>
                  <FontAwesomeIcon className='fa-5x text-secondary' icon={faArrowCircleLeft} onClick={() => lastView()} />
                </Button>
              }
            </Col>
            <Col>
              {view === 5 ?
                <Button className='bg-white border-white rounded-circle p-3'>
                  <FontAwesomeIcon className='fa-5x text-primary' icon={faUndo} onClick={() => resetGame()} />
                </Button>
                :
                <Button className='bg-white border-white rounded-circle p-0 m-3'>
                  <FontAwesomeIcon className='fa-5x text-primary' icon={faArrowCircleRight} onClick={() => nextView()} />
                </Button>
              }
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
