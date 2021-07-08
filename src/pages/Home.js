import { Row, Col, Container } from "react-bootstrap";
import { ListCategory, Hasil, Menus } from "../component"
import React, { Component } from 'react'
import { API_URL } from "../utils/constans";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt } from "@fortawesome/free-solid-svg-icons";
import swal from 'sweetalert';

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menus: [],
            categoridipilih: "AtasanPria",
            keranjangs: []
        }
    }

    componentDidMount() {
        axios
            .get(API_URL + "products?category.nama=" + this.state.categoridipilih)
            .then(res => {
                const menus = res.data;
                this.setState({ menus });
            })
            .catch(error => {
                console.log(error);
            })

        this.getListKeranjang();
    }

    //componentDidUpdate(prevState) {
    //    if (this.state.keranjangs !== prevState.keranjangs) {
    //      axios
    //        .get(API_URL + "keranjangs")
    //        .then(res => {
    //          const keranjangs = res.data;
    //          this.setState({ keranjangs });
    //        })
    //        .catch(error => {
    //         console.log(error);
    //        })
    //    }
    //}

    getListKeranjang = () => {
        axios
            .get(API_URL + "keranjangs")
            .then(res => {
                const keranjangs = res.data;
                this.setState({ keranjangs });
            })
            .catch(error => {
                console.log(error);
            })
    }

    changeCategory = (value) => {
        this.setState({
            categoridipilih: value,
            menus: []
        })

        axios
            .get(API_URL + "products?category.nama=" + value)
            .then(res => {
                const menus = res.data;
                this.setState({ menus });
            })
            .catch(error => {
                console.log(error);
            })
    }

    masukKeranjang = (value) => {

        axios
            .get(API_URL + "keranjangs?product.id=" + value.id)
            .then(res => {
                if (res.data.length === 0) {
                    const keranjang = {
                        jumlah: 1,
                        total_harga: value.harga,
                        product: value
                    }

                    axios
                        .post(API_URL + "keranjangs", keranjang)
                        .then(res => {
                            this.getListKeranjang()
                            swal({
                                title: "Sukses",
                                text: keranjang.product.nama + " Berhasil Masuk Keranjang",
                                icon: "success",
                                button: false,
                                timer: 1500,
                            });
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else {
                    const keranjang = {
                        jumlah: res.data[0].jumlah + 1,
                        total_harga: res.data[0].total_harga + value.harga,
                        product: value
                    }

                    axios
                        .put(API_URL + "keranjangs/" + res.data[0].id, keranjang)
                        .then(res => {
                            this.getListKeranjang()
                            swal({
                                title: "Sukses",
                                text: keranjang.product.nama + " Berhasil Masuk Keranjang",
                                icon: "success",
                                button: false,
                                timer: 1500,
                            });
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        console.log(this.state.menus)
        const { menus, categoridipilih, keranjangs } = this.state
        return (
            <div className="App">
                <div className="mt-3">
                    <Container fluid>
                        <Row>
                            <ListCategory changeCategory={this.changeCategory} categoridipilih={categoridipilih} />
                            <Col>
                                <h4><FontAwesomeIcon icon={faTshirt} className="mr-2" /><strong>Produk</strong></h4>
                                <hr />
                                <Row>
                                    {menus && menus.map((menu) => (
                                        <Menus
                                            key={menu.id}
                                            menu={menu}
                                            masukKeranjang={this.masukKeranjang}
                                        />
                                    ))}
                                </Row>
                            </Col>
                            <Hasil keranjangs={keranjangs} {...this.props} getListKeranjang={this.getListKeranjang}/>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
