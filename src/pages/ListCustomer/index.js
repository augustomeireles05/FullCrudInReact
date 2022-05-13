import React from 'react'
import Header from '../../components/template/Header'
// import Todo from '../../components/Todo/Todo'
import ToList from '../../components/Tolist/List/ToList'
import ToListCustomer from '../../components/Todo/ToListCustomer'

function ListCustomer(props) {

    return(
        <>
        <Header/>
        <ToListCustomer />
        </>
    )
}

export default ListCustomer