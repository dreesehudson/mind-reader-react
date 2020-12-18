import React from 'react';
import { Row, Col, Card, CardBody, CardFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import Message from './Message';

function Game() {
    return (
        <Card>
            <CardBody>
                <Message />
            </CardBody>
            <CardFooter>
                <Row>
                    <Col>
                        <Button className='bg-light border-light'>
                            <FontAwesomeIcon className='fa-5x text-secondary' icon={faArrowCircleLeft} />
                        </Button>
                    </Col>
                    <Col>
                        <Button className='bg-light border-light'>
                            <FontAwesomeIcon className='fa-5x text-primary' icon={faArrowCircleRight} />
                        </Button>
                    </Col>
                </Row>
            </CardFooter>
        </Card>
    );
}

export default Game;