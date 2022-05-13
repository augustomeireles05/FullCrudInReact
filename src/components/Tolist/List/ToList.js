import React, { useState } from 'react'
// import './TodoList.css'
import { AiFillCheckCircle } from "react-icons/ai";
import {
    Container, ListGroup, Row,
    Col, Button, Modal, Alert, Form, Table
} from 'react-bootstrap'



function ToList(props) {

    //INICIO PARA MODAL DELETAR
    const [show, setShow] = useState(false)
    const [successDelete, setSuccessDelete] = useState(false)

    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //FIM PARA MODAL DELETAR

    //INICIO PARA MODAL EDITAR
    const [showEdit, setShowEdit] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);


    const [successEdit, setSuccessEdit] = useState(false)

    //FIM PARA MODAL EDITAR



    const [customer, setCustomer] = useState({});

    const renderCustomer = () => {
        return props.user.map((item) => {
            return (
                <ListGroup.Item key={item.id}>
                <Row>
                    <Col xs={2} md={2}>
                        {item.name}
                    </Col>
                    <Col xs={2} md={2}>
                        {item.age}
                    </Col>
                    <Col xs={2} md={2}>
                        {item.document}
                    </Col>
                    <Col xs={2} md={2}>
                        {item.tel}
                    </Col>
                    <Col xs={2} md={2}>
                        {item.state}
                    </Col>
                    <Col xs={2} md={2}>
                        <Button variant="success"
                        onClick={() => {
                            setCustomer(item)
                            handleShowEdit()
                        }}>
                            Alterar
                        </Button>
                        <Button className="mx-1" variant="danger"
                            onClick={() => {
                                setCustomer(item)
                                handleShow()
                                }}>
                            Deletar
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
            )
        })
        
    }

    return (
        <Container>
            {
                successDelete 
                ?
                <Alert key='success' variant='success'>
                    Item apagado com sucesso! <AiFillCheckCircle size="25" />
                </Alert>
                :
                ''
            }

            {
               successEdit
               ?
               <Alert key='success' variant='success'>
                   Item editado com sucesso! <AiFillCheckCircle size="25" />
               </Alert>
               :
               ''
            }
            
            <Row>
                <Col>
                <ListGroup variant="flush">
                    {renderCustomer()}
                </ListGroup>
                </Col>
            </Row>

            {/* INÍCIO: MODAL DE DELETAR */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deletar Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem certeza que deseja deletar o(a) cliente <strong>{customer.name}</strong> </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="danger" onClick={() => {
                        props.delete(customer.id)
                        handleClose()
                        setSuccessDelete(true)
                        setTimeout(() => {setSuccessDelete(false)}, 2000)
                        }} >
                        Deletar
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* FIM: MODAL DE DELETAR */}



            {/* INÍCIO: MODAL DE EDITAR */}
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite o novo nome" 
                                value={customer.name}
                                onChange={event => setCustomer({...customer, name: event.target.value})}
                            />
                            <Form.Label>Idade</Form.Label>
                            <Form.Control type="text" placeholder="Digite a nova idade"
                                value={customer.age}
                                onChange={event => setCustomer({...customer, age: event.target.value})} 
                            />
                            <Form.Label>Documento</Form.Label>
                            <Form.Control type="text" placeholder="Digite o novo documento" 
                                readOnly
                                value={customer.document}
                                onChange={event => setCustomer({...customer, document: event.target.value})}
                            />
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" placeholder="Digite o novo telefone"
                                value={customer.tel}
                                onChange={event => setCustomer({...customer, tel: event.target.value})}
                            />
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" placeholder="Digite o novo estado"
                                value={customer.state}
                                onChange={event => setCustomer({...customer, state: event.target.value})}
                            />

                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Fechar
                    </Button>
                    <Button variant="success" onClick={() => {
                        props.editCustomer(customer)
                        handleCloseEdit()
                        setSuccessEdit(true)
                        setTimeout(() => {setSuccessEdit(false)}, 2000)
                        }} >
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* FIM: MODAL DE EDITAR */}





        </Container>
    )

}

export default ToList