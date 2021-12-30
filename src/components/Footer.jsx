import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
    {
        display: "SOBRE",
        path: "/about"
    },
    {
        display: "CONTATO",
        path: "/about"
    },
    {
        display: "TRABALHE CONOSCO",
        path: "/about"
    },
    {
        display: "NOTICÍAS",
        path: "/about"
    },
    {
        display: "SEJA UM FRANQUEADO",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "CODIGO DO CONSUMIDOR",
        path: "/about"
    },
    {
        display: "GARANTIA DE QUALIDADE",
        path: "/about"
    },
    {
        display: "POLITICA DE PROMOÇÕES",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            ATENDIMENTO
                        </div>
                        <div className="footer__content">
                            <p>
                            CONTATO PARA PEDIR: <strong>4002-8922</strong>
                            </p>
                            <p>
                            PROBLEMAS COM O PEDIDO: <strong>0123456789</strong>
                            </p>
                            <p>
                            ELOGIOS,RECLAMAÇÕES: <strong>0123456789</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            SOBRE HAMBURGUERIA
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            SERVIÇO DE ATENDIMENTO AO CONSUMIDOR
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                        A SUA SATISFAÇÃO, É A NOSSA PRIORIDADE!
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
