import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            id: 0,
            name: '',
            price: '',
            stock: '',
            description: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/product')
            .then((res) => {
                this.setState({
                    products: res.data,
                    id: 0,
                    name: '',
                    price: '',
                    stock: '',
                    description: ''
                })
                console.log(res.data);
            })
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(p =>
                                <tr key={p._id}>
                                    <td> {p.name} </td>
                                    <td> {p.price} </td>
                                    <td> {p.stock} </td>
                                    <td> {p.description} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}