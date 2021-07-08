import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Modal, Button, Form, ButtonGroup } from 'react-bootstrap'
import { numberWithCommas } from '../utils/numFormat';

const ModalKeranjang = ({ showModal, handleClose, keranjangDetail, jumlah, keterangan, tambah, kurang, changeHandler, handleSubmit, totalHarga, hapusPesanan }) => {
    if (keranjangDetail) {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {keranjangDetail.product.nama} {" "}
                        <strong>(Rp. {numberWithCommas(keranjangDetail.product.harga)})</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Total Harga</Form.Label>
                            <p><strong>Rp. {numberWithCommas(totalHarga)}</strong></p>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Jumlah</Form.Label>
                            <br />
                            <Button variant="primary" size="sm" className="mr-2" onClick={() => kurang()}>
                                <FontAwesomeIcon icon={faMinus} />
                            </Button>
                            <strong>{" "}{jumlah}{" "}</strong>
                            <Button variant="primary" size="sm" className="ml-2" onClick={() => tambah()}>
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </Form.Group>
                        <br />

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Ukuran</Form.Label>
                            <br />
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="primary">XS</Button>
                                <Button variant="primary">S</Button>
                                <Button variant="primary">M</Button>
                                <Button variant="primary">L</Button>
                                <Button variant="primary">XL</Button>
                                <Button variant="primary">XXL</Button>
                            </ButtonGroup>
                        </Form.Group>
                        <br />
                        <Button variant="primary" type="submit">
                            Simpan
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => hapusPesanan(keranjangDetail.id)}>
                        <FontAwesomeIcon icon={faTrash} />Hapus Pesanan
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    } else {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Kosong</Modal.Title>
                </Modal.Header>
                <Modal.Body>Kosong</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalKeranjang
