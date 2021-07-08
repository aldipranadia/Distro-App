import React, { Component } from 'react'
import { Col, Card, ListGroup, Accordion } from 'react-bootstrap'
import { API_URL } from "../utils/constans";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream} from "@fortawesome/free-solid-svg-icons";

export default class ListCategory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios
            .get(API_URL + "categoriesMen")
            .then(res => {
                const categoriesMen = res.data;
                this.setState({ categoriesMen });
            })
            .catch(error => {
                console.log(error);
            })

        axios
            .get(API_URL + "categoriesWoman")
            .then(res => {
                const categoriesWoman = res.data;
                this.setState({ categoriesWoman });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { categoriesMen, categoriesWoman } = this.state
        const { changeCategory, categoridipilih } = this.props
        return (
            <Col md={2} mt="2">
                <h4><FontAwesomeIcon icon={faStream} className="mr-2"/><strong>Kategori</strong></h4>
                <hr />
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" style={{cursor:"pointer"}}>
                            <strong>Fashion Pria</strong>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <ListGroup variant="flush">
                                {categoriesMen && categoriesMen.map((category) => (
                                    <ListGroup.Item
                                        key={category.id}
                                        onClick={() => changeCategory(category.nama)}
                                        className={categoridipilih === category.nama && "category-aktif"}
                                        style={{cursor:"pointer"}}
                                    >{category.nama}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" style={{cursor:"pointer"}}>
                            <strong>Fashion Wanita</strong>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <ListGroup variant="flush">
                                {categoriesWoman && categoriesWoman.map((category) => (
                                    <ListGroup.Item
                                        key={category.id}
                                        onClick={() => changeCategory(category.nama)}
                                        className={categoridipilih === category.nama && "category-aktif"}
                                        style={{cursor:"pointer"}}
                                    >{category.nama}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Col>
        )
    }
}
