import { Button, Image } from 'react-bootstrap'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from '../utils/constans';

export default class Sukses extends Component {
    componentDidMount() {
        axios
            .get(API_URL + "keranjangs")
            .then(res => {
                const keranjangs = res.data;
                keranjangs.map(function(item){
                    return axios
                        .delete(API_URL+"keranjangs/"+item.id)
                        .then((res) => console.log(res))
                        .catch((error) => console.log(error))
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="mt-4 text-center">
                <Image src="assets/images/shop-process.png" width="500" />
                <h2>Pesanan Sedang Di Proses</h2>
                <h6>Terimakasih Telah Berbelanja Di Distro.id</h6>
                <Button className="mt-4" variant="secondary" as={Link} to="/">
                    Kembali
                </Button>
            </div>
        )
    }
}
