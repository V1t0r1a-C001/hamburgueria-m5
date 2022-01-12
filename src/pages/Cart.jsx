import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import CartItem from '../components/CartItem'
import Button from '../components/Button'

import productData from '../assets/fake-data/products'
import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])

    const [cepInvalido, setCepInvalido] = useState(false)
    const [cep, setCep] = useState({ceps:{}})
    
    const reqCeps = async (cepDigitado) => {
        const response = await fetch(`https://viacep.com.br/ws/${cepDigitado}/json`)
        const json = await response.json()
        setCep(json)
        
        console.log(json)
         
    }

    const { logradouro } = cep || ''
    const { localidade: cidade } = cep || ''
    const { bairro } = cep || ''
    let enderecoCompleto = ''
    let pedidos = []
    let quantidade = []

    const pegaEnderecoCompleto = ()=>{
        if (document.querySelector('#complemento') !== null) {
            enderecoCompleto = logradouro+", "+document.querySelector('#complemento').value+", "+bairro+" - "+cidade
            console.log(enderecoCompleto)
        }
    }

    function pegaPedidoQuantidade(){
        const pedidosSelector = document.querySelectorAll(".cart__item__info__name > a")
        pedidos = []
        for (let i = 0; i < pedidosSelector.length; i++) {
            pedidos.push(pedidosSelector[i].innerText)
        }
        const quantidadeSelector = document.querySelectorAll(".product__info__item__quantity__input")
        quantidade = []
        for (let i = 0; i < pedidosSelector.length; i++) {
            quantidade.push(+quantidadeSelector[i].innerText)
        }

    }

    async function enviaPedido (){        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({	
                cliente: document.querySelector('#nome').value,
                endereco : enderecoCompleto,
                status_pg : "aguardando pagamento",
                nome_produto : pedidos,
                quantidade : quantidade 
        })
        };
        const response = await fetch('https://hamburgueria-resiliente.herokuapp.com/pedido', requestOptions);
        const data = await response.json();
        this.setState({ postId: data.id });
    }

    const pegaEnvia = ()=>{
        pegaEnderecoCompleto()
        pegaPedidoQuantidade()
        enviaPedido()
        window.location.href = 'pagamento'
    }

    return (
        <Helmet title="CARRINHO">
            <div className="cart">
                <div lassName="cart__info">
                    <div className="cart__info__txt">
                        <div>
                        <form id='form-entrega' 
                            style={{display : "flex", flexDirection: "column"}}>
                                <h2>informações Para entrega</h2>
                                <label htmlFor="nome" style={{fontSize: "1.25rem"}}>Nome:</label>
                                <input type="text" id='nome'/>
                                <label htmlFor="CEP">CEP</label>
                                <input type="number" id='cep'onBlur={(e) => {
                                    if (e.target.value.length === 8){
                                        setCepInvalido(false)
                                        reqCeps(e.target.value)
                                    }
                                    else setCepInvalido(true)
                                    }}/>
                                {
                                    cepInvalido && (
                                        <p id="nEntrega"style={{
                                            color:"red",
                                            fontSize: "0.75rem",
                                        }}>CEP inválido!</p> 
                                    )
                                }

                                {
                                    (cidade !== "Niterói" && cidade !== undefined )  && (
                                        <p id="nEntrega"style={{
                                            color:"red",
                                            fontSize: "0.75rem",
                                        }}>Não entregamos neste endereço</p> 
                                    )
                                }

                                <label htmlFor="logradouro" style={{fontSize: "1.25rem"}}>logradouro:</label>
                                <input type="text" id='logradouro' value={logradouro}/>
                                <label htmlFor="complemento" style={{fontSize: "1.25rem"}}>nº/Complemento</label>
                                <input type="text" id='complemento' onBlur={()=>pegaEnderecoCompleto()}/>
                                <label htmlFor="cidade" style={{fontSize: "1.25rem"}}>Cidade</label>
                                <input type="text" id='cidade' value={cidade}/>
                                <label htmlFor="Bairro" style={{fontSize: "1.25rem"}}>Bairro</label>
                                <input type="text" id='bairro' value={bairro}/>
                                
                            </form>
                        </div>
                        <p>
                        Você tem {totalProducts} produtos em seu carrinho de compras.
                        </p>
                        <div className="cart__info__txt__price">
                            <span>TOTAL:</span> <span>{numberWithCommas(Number(totalPrice))}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                            <Button size="block" onClick={()=>pegaEnvia()}>
                                    Fazer o Pedido
                            </Button>
                        <Link to="/catalog">
                            <Button size="block">
                            Continue comprando
                            </Button>
                        </Link>
                        
                    </div>
                </div>
                <div className="cart__list">
                    {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
