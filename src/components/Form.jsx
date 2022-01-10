import React, { useState } from 'react'

export default function Form() {
    const [display, setDisplay] = useState("none")
    const [cep, setCep] = useState({ceps:{}})
    const [logradouro, setLogradouro] = useState("")
    const [cidade, setCidade] = useState("")

    
    const reqCeps = async (cepDigitado) => {
        const response = await fetch(`https://viacep.com.br/ws/${cepDigitado}/json`)
        const json = await response.json()
        setCep(json)
        
        console.log(cep)
        setLogradouro(cep.logradouro)
        setCidade(cep.localidade)
        
        if (cep.erro){
            setLogradouro("")
            setCidade("")
        }
        if (cep.localidade != `Niterói`){
            setDisplay("block")
        }
        else{
            setDisplay('none')
        }
         
    }


    return (
        <form id='form-entrega' 
        style={{display : "flex", flexDirection: "column"}}>
            <h2>informações Para entrega</h2>
            <label htmlFor="nome" style={{fontSize: "1.25rem"}}>Nome:</label>
            <input type="text" id='Nome'/>
            <label htmlFor="CEP">CEP</label>
            <input type="number" id='cep'onBlur={(e) => reqCeps(e.target.value)}/>
            
            <p id="nEntrega"style={{
                color:"red",
                fontSize: "0.75rem",
                display: `${display}`
            }}>Não entregamos neste endereço</p>
            
            <label htmlFor="logradouro" style={{fontSize: "1.25rem"}}>logradouro:</label>
            <input type="text" id='logradouro' value={logradouro}/>
            <label htmlFor="complemento" style={{fontSize: "1.25rem"}}>nº/Complemento</label>
            <input type="text" />
            <label htmlFor="cidade" style={{fontSize: "1.25rem"}}>Cidade</label>
            <input type="text" value={cidade}/>

        </form>
    )
}
