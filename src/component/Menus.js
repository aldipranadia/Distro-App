import React from 'react'
import { Col, Card } from "react-bootstrap";
import {numberWithCommas} from "../utils/numFormat";

const Menus = ({ menu, masukKeranjang }) => {
    return (
        <Col md={3} className="mb-4">
            <Card className="shadow" onClick={() =>masukKeranjang(menu)}>
                <Card.Img 
                    variant="top" 
                    src={"assets/images/"+
                    menu.category.nama+
                    "/"+
                    menu.gambar}/>
                <Card.Body>
                    <Card.Title>{menu.nama}</Card.Title>
                    <Card.Text>
                        Rp. {numberWithCommas(menu.harga)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Menus
