export const includesMaterial=(materialArray,material)=>{
    var counter=0
    materialArray.map((mtrl)=>{
        if(mtrl.materialId===material.materialId)
        counter++
    })
    if (counter==0)
    return false
    else 
    return true
}

export const includesOrder=(orderArray,order)=>{
    var counter=0
    orderArray.map((ordr)=>{
        if(ordr.orderId===order.orderId)
        counter++
    })
    if (counter==0)
    return false
    else 
    return true
}