import React, {useState} from 'react'
import { useEffect } from 'react'

export default function Order() {

    const [order, setOrder] = useState([])

    const getProducts = async () => {
      const response = await fetch('https://hamburgueria-resiliente.herokuapp.com/pedido')
      const json = await response.json()

     
      setOrder(json.pedido)
      
    }

    const changeStatus = async(param, id) => {
        const rawResponse = await fetch('https://hamburgueria-resiliente.herokuapp.com/pedido/'+id, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({"status_pg": param})
          });

        await rawResponse.json()

        getProducts()

    }

    

    const deleteOrder = async(id) => {
        const rawResponse = await fetch('https://hamburgueria-resiliente.herokuapp.com/pedido/'+id, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });

        await rawResponse.json()

        getProducts()

    }

    useEffect(()=> {
        getProducts()
    },[])

    return (
        <div>
            <table className='orderTable'>
                <tr>
                    <th>ID pedido</th>
                    <th>Cliente</th>
                    <th>Pedido</th>
                    <th>Quantidade</th>
                    <th>Status Pedido</th>
                    <th>Alteração de Status</th>
                    <th>Delete</th>
                </tr>
                {order.map((o)=>{
                 
                 return(
                 <tr id={o.PEDIDO_ID} key={o.ID}>
                      <td>#{o.PEDIDO_ID}</td>
                      <td>{o.CLIENTE}</td>
                      <td>{o.NOME_PRODUTO}</td>
                      <td>{o.QUANTIDADE}</td>
                      <td>{o.STATUS_PG}</td>
                      <td>
                        <button onClick={()=>changeStatus("Aguardando Pagamento", o.PEDIDO_ID )} className='ap'>Aguardando Pagamento</button>
                        <button onClick={()=>changeStatus("Pago", o.PEDIDO_ID )} className='pg'>Pago</button>
                        <button onClick={()=>changeStatus("Entregue", o.PEDIDO_ID )} className='etg'>Entregue</button>  
                      </td>
                      <td><button onClick={()=>deleteOrder(o.PEDIDO_ID)} className='del'>DELETE</button></td>
                  </tr>
                 )
                })}
            </table>
            
        </div>
    )
}
