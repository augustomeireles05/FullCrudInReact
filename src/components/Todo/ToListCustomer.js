import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ToList from '../../components/Tolist/List/ToList'
import { baseUrl } from '../../environments'



function ToListCustomer(props) {

    //TRAZENDO A LISTA DE CUSTOMERS
    const URL = `${baseUrl}/customer`

    //TRAZENDO A LISTA DE CUSTOMERS
    const [customer, setCustomer] = useState([])

    useEffect(() => {
        //TRAZENDO A LISTA DE CUSTOMERS
        getCustomers()
    },[])


    //TRAZENDO A LISTA DE CUSTOMERS
    const getCustomers = () => {
        axios.get(`${URL}`)
        .then((response) => {
            setCustomer(response.data)
        })
    }

    //DELETANDO O CUSTOMER
    const deleteCustomer = (id) => {
        axios.delete(`${URL}/${id}`)
        .then((response) => {
            getCustomers()
        })
    }

    //EDITANDO CUSTOMER
    const editCustomer = (customer) => {
        if (customer.name === '' && customer.age === '' && customer.document === '' && customer.tel === '' && customer.state === '') {
            return
        }

        axios.put(`${URL}/${customer.id}`, customer)
        .then((response) => {
            getCustomers()
        })
    }


    return (
        <>  
           {/*TRAZENDO A LISTA DE CUSTOMERS*/} 
           {/*DELETANDO O CUSTOMERS*/}
            <ToList
            user = {customer} 
            delete={deleteCustomer}
            editCustomer={editCustomer}
            />
        </>
    )
}

export default ToListCustomer