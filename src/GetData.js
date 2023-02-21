import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import axios from 'axios';
import { Button, Placeholder, Table } from 'react-bootstrap';


function GetData() {
    const [triggerLoading, setTriggerLoading] = useState(0)
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async () => {
        await axios.get('https://dummyjson.com/products')
            .then((result) => {
                setData(result.data.products)
            })
            .catch((e) => {
                console.log(e)
            })
    }
    const deleteData = (id) => {
       
        axios.delete(`https://dummyjson.com/products/${id}`)
            .then((result) => {
                fetchData()
                setIsLoading(false)
                console.log('Data Dihapus')
                triggerLoading(0)
            })
            .catch((e) => {
                console.log('error', e)
                setIsLoading(false)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <Navigation />
            <h1>Sample GET data</h1>
            
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Discount %</th>
                    <th>Action</th>
                </tr>
                </thead>
                {
                    data.map((el, index) => {
                        return (
                            <tbody>
                                <tr key={el.id}>
                                <td> {el.title}</td>
                                <td>{el.price}</td>
                                <td>{el.discountPercentage}</td>
                                <td>
                                    <Button
                                        id={index}
                                        key={index}
                                        disabled={isLoading}
                                        size="sm"
                                        onClick={() => {
                                            setTriggerLoading(el.id)
                                            deleteData(el.id)
                                            setIsLoading(true)
                                        }}
                                        variant={'danger'}>
                                        {isLoading? 'Loading..':'Hapus' }
                                    </Button>
                                </td>
                            </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
        </div>
    )
}

export default GetData;
