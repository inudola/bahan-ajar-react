import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import axios from 'axios';
import { Button, Card, Carousel, Col, Modal, Row, Table } from 'react-bootstrap';


function Users() {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false);
    const [dataDetail, setDataDetail] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchData = async () => {
        await axios.get('https://dummyjson.com/users')
            .then((result) => {
                setData(result.data.users)
            })
            .catch((e) => {
                console.log(e)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const ModalProduct = () => {
        console.log('dataDetail', dataDetail)
        return (
            <Modal size={'lg'} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{dataDetail.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel fade>
                        {
                            dataDetail?.images?.map((el) => {
                                return (
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={el}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    {dataDetail.description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const ProductCart = (value) => {
        console.log(value.value)
        const item = value.value
        return (
            <Card style={{ width: '18rem', marginTop:'8px' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.firstName} {item.lastName}</Card.Title>
                    <Card.Text>
                        <div>
                            Email: {item.email}
                        </div>
                        <div>
                            Age: {item.age}
                        </div>
                        <div>
                            Domain: <a href={item.domain} >{item.domain}</a>
                        </div>
                    </Card.Text>
                    <Button
                        disabled={item.stock <= 50}
                        onClick={() => {
                            setDataDetail(item)
                            handleShow()
                        }}
                        variant="primary">
                        Contact
                    </Button>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div className='me-4 ms-4'>
            <Navigation />
            <ModalProduct />
            <Row className='mt-3'>
                <Col></Col>
                <Col>
                <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.dummyjson.com/data/products/1/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.dummyjson.com/data/products/1/2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.dummyjson.com/data/products/1/3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                </Col>
                <Col></Col>
            </Row>
            <h1>Users</h1>
            <Row>
                {
                    data.map((el, index) => {
                        return (
                            <Col>
                                <ProductCart value={el} />
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default Users;
