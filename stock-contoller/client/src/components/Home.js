import React, { useEffect, useState } from 'react'
import { fetchBOM, fetchMaterials, fetchOrders, fetchProducts, fetchWarehouses } from '../api'
import { includesMaterial, includesOrder } from '../helpers';
import Header from './Header'
import MaterialList from './MaterialList';
import MuiDataTable from './MaterialList';
import SelectedOrders from './SelectedOrders';
import SelectOrders from './SelectOrders';


const Home = () => {
    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])
    const [warehouses, setWarehouses] = useState([])
    const [materials, setMaterials] = useState([])
    const [bom, setBom] = useState([])
    const [selectedOrders, setSelectedOrders] = useState([])
    const [selectedMaterials, setSelectedMaterials] = useState([])

    const handleSetSelectedOrders = (order) => {
        
        if (order && !(includesOrder(selectedOrders, order))) {
            setSelectedOrders((prevState) => [...prevState, order])
            const productMaterials = handleOrderMaterials(order)
            handleAddSelectedMaterials(productMaterials)
        }
    }

    const handleOrderMaterials = (order) => {

        let product = {}
        let productMaterials = []
        let productQuantity = order.quantity

        products.map((item) => {
            if (order.productId === item.productId)
                product = item
        })

        bom.map((item) => {
            if (item.productId === product.productId)
                productMaterials.push({
                    materialId: (item.materialId),
                    requestedQuantity: (productQuantity * item.qty)
                })
        })

        productMaterials.map((material, index) => {
            warehouses.map((warehouse) => {
                if (material.materialId === warehouse.materialId)
                    productMaterials[index] = {
                        ...productMaterials[index],
                        warehouseQuantity: warehouse.warehouseQuantity,
                    }
            })

            materials.map((item) => {
                if (item.materialId === material.materialId)
                    productMaterials[index] = { ...productMaterials[index], materialNo: item.materialNo }
            })
        })
   

        return productMaterials
    }

    const handleFetchProducts = async () => {
        const data = await fetchProducts()
        if (data)
            setProducts(data)
    }

    const handleDeleteSelectedOrder = (order) => {
        setSelectedOrders([...selectedOrders].filter((item) => item.orderId != order.orderId))
        const orderMaterials = handleOrderMaterials(order)
        handleDeleteSelectedMaterials(orderMaterials)

    }

    const handleDeleteSelectedMaterials = (orderMaterials) => {
        const allMaterials = [...selectedMaterials]
        const temp = []

        allMaterials.map((mtrl) => {
            if (includesMaterial(orderMaterials, mtrl)) {
                let index = orderMaterials.findIndex((item) => item.materialId === mtrl.materialId)
                if (index != -1) {
                    let newQuantity = parseInt(mtrl.requestedQuantity) - parseInt(orderMaterials[index].requestedQuantity)
                    if (newQuantity > 0) {
                        const reducedMaterial = { ...mtrl }
                        reducedMaterial.requestedQuantity = newQuantity
                        temp.push(reducedMaterial)
                    }
                }
            } else {
                temp.push(mtrl)
            }
        })
        setSelectedMaterials(temp)
    }

    const handleAddSelectedMaterials = (productMaterials) => {
        const allMaterials = [...selectedMaterials].concat(productMaterials)
        const temp = []

        allMaterials.map((mtrl) => {
            if (includesMaterial(temp, mtrl)) {
                let index = temp.findIndex((item) => item.materialId === mtrl.materialId)
                if (index != -1) {
                    temp[index].requestedQuantity = parseInt(temp[index].requestedQuantity) + parseInt(mtrl.requestedQuantity)
                }
            } else {
                temp.push(mtrl)
            }
        })
        setSelectedMaterials(temp)
    }

    const handleFetchMaterials = async () => {
        const data = await fetchMaterials()
        if (data)
            setMaterials(data)
    }

    const handleFetchOrders = async () => {
        const data = await fetchOrders()
        if (data)
            setOrders(data)
    }

    const handleFetchBOM = async () => {
        const data = await fetchBOM()
        if (data)
            setBom(data)
    }

    const handleFetchWarehouses = async () => {
        const data = await fetchWarehouses()
        if (data)
            setWarehouses(data)
    }

    useEffect(() => {
        handleFetchProducts()
        handleFetchBOM()
        handleFetchMaterials()
        handleFetchOrders()
        handleFetchWarehouses()
    }, [])

    return (
        <div >
            <Header />
            <SelectedOrders selectedOrders={selectedOrders} handleDeleteSelectedOrder={handleDeleteSelectedOrder} />
            <SelectOrders orders={orders} handleSetSelectedOrders={handleSetSelectedOrders} />
            <MuiDataTable materials={selectedMaterials.map((item)=>{
            if ((item.requestedQuantity - item.warehouseQuantity)>0){
            return [item.materialNo,item.requestedQuantity,(item.requestedQuantity - item.warehouseQuantity),parseInt(item.warehouseQuantity)]
            }
        }).filter((it)=>it)}/>

        </div>
    )
}

export default Home