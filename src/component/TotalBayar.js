import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'
import { Row, Col, Button } from "react-bootstrap";
import { numberWithCommas } from '../utils/numFormat';
import axios from "axios";
import { API_URL } from "../utils/constans";

export default class TotalBayar extends Component {
    submitTotalBayar=(totalBayar) =>{
        const pesanan={
            total_bayar: totalBayar,
            menus: this.props.keranjangs
        }

        axios.post(API_URL+"pesanans", pesanan).then((res) =>{
            this.props.history.push('/Sukses')
        })
    }

    render() {
        const totalBayar = this.props.keranjangs.reduce(function (result, item) {
            return result + item.total_harga
        }, 0)

        return (
            <div>
                <Row>
                    <Col>
                        <br></br>
                        <h4>Total Harga : <strong className="float-right">Rp.{numberWithCommas(totalBayar)}</strong></h4>
                        <Button
                            variant="secondary" 
                            block 
                            className="mt-4"
                            onClick={() => this.submitTotalBayar(totalBayar)}
                        >
                            <FontAwesomeIcon icon={faCreditCard} className="mr-4" /><strong>BAYAR</strong>
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
