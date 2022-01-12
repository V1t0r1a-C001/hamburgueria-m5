import React, { useState } from 'react'
import CartaoExemplo from "../assets/images/exemploCartao.jpg"
import Button from '../components/Button'

export default function Cartao() {

    const [pg, setPg] = useState("cartaoDebito")
    const mudaValor = ()=>{    
        setPg(document.querySelector('#pagamento').value)
    }

    function alteraStatusReq(id) {  
        console.log("entrei na alteraStatusReq")   
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status_pg : "pago" })
        };
        fetch(`https://hamburgueria-resiliente.herokuapp.com/pedido/${id}`, requestOptions)
            .then(response => response.json())
            // .then(data => this.setState({ postId: data.id }));
    
    }

    async function alteraStatus(){
        console.log("entrei na pegaUltimoId")
        const response = await fetch('https://hamburgueria-resiliente.herokuapp.com/ultimoId');
        const data = await response.json();
        // this.setState({ totalReactPackages: data.total })
        alteraStatusReq(data.pedido[0].ID)
        alert("Seu pedido foi realizado! por volta de 30 min estaremos entregando seu pedido! Muito obrigado pela preferência!")
        window.location.href = '/'
    }


    return (

        <div style={{fontSize: "1.25rem"}}>
            <br/>
            Qual o tipo de pagamento?
            <select name="pagamento" id="pagamento" onChange={()=>mudaValor()}>
                <option value="cartaoDebito">Cartão de Débito</option>
                <option value="cartaoCredito">Cartão de cédito</option>
                <option value="dinheiro">dinheiro</option>    
            </select> 
            <br/>
                {    
                    pg !== "dinheiro" &&(
                        <div style={{
                            display:"flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around" 
                        }}>
                            <div style={{
                                display:"flex", 
                                flexDirection:"column", 
                                maxWidth:"450px"
                            }}>
                                <label htmlFor="">Nome (igual no cartao):</label>
                                <input type="text" style={{width:"300px"}}/>
                                <br/>
                                <label htmlFor="">Numero do Cartão:</label>
                                <input type="number" style={{maxWidth:"300px"}}/>
                                <br/>
                                <label htmlFor="">CVV (3 dígitos atrás do cartão:</label>
                                <input type="number" style={{maxWidth:"300px"}}/>
                                <br/>
                                <label htmlFor="">Validade:</label>
                                <input type="text" style={{maxWidth:"300px"}}/>
                            </div>
                            <div>
                                <img src={CartaoExemplo} alt="Foto exemplo de onde encontrar as informações do cartão" style={{maxWidth:"450px", maxHeight:"450px"}}/><br/>
                            </div>
                        </div>
                    )
                }
            <br/>
            <Button style={{dysplay:"block"}} onClick={()=>alteraStatus()}>Fazer Pagamento</Button>

        </div>
    )
}
