import React, { useState } from 'react'


export default function Form() {
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

    const pegaEnderecoCompleto = ()=>{
        if (document.querySelector('#complemento') !== null) {
            enderecoCompleto = logradouro+" "+document.querySelector('#complemento').value+" "+bairro+" "+cidade
            console.log(enderecoCompleto)
        }
    }

    return (
        <form id='form-entrega' 
        style={{display : "flex", flexDirection: "column"}}>
            <h2>informações Para entrega</h2>
            <label htmlFor="nome" style={{fontSize: "1.25rem"}}>Nome:</label>
            <input type="text" id='Nome'/>
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
    )
}
