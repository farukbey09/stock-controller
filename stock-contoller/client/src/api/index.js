import axios from "axios"
import { API_URL } from "../helpers/apiUrl"

 export const fetchProducts=async()=>{
   const res= await axios.get(API_URL+"fetch_products")
   return res.status===200 ? res.data: false
}

export const fetchOrders=async()=>{
    const res= await axios.get(API_URL+"fetch_orders")
    return res.status===200 ? res.data: false
 }

 export const fetchBOM=async()=>{
    const res= await axios.get(API_URL+"fetch_bom")
    return res.status===200 ? res.data: false
 }

 export const fetchMaterials=async()=>{
    const res= await axios.get(API_URL+"fetch_materials")
    return res.status===200 ? res.data: false
 }

 export const fetchWarehouses=async()=>{
    const res= await axios.get(API_URL+"fetch_warehouses")
    return res.status===200 ? res.data: false
 }
 