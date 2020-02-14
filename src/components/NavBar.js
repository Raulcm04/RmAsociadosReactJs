import React, { Fragment, Component } from 'react';
import '../css/Navbar.css';


//logo de R&M Asociados
import logoRmAsociados from '../assets/logo_RM_Asociados.png'

class Nav extends Component {
    state = {}
    componentDidMount() {
        const $ = window.$;
        $(window).scroll(function () {
            if ($("#menu").offset().top > 100) {
                $("#menu").css({ "background-color": "#2b2b2cd2" });
            } else {
                $("#menu").css({ "background-color": '' })
            }
        })
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <nav className="navbar navbar-expand-md fixed-top menu navbar-light navbar-inverse bg-muted" id="menu">
                                <div className="container">
                                    <img className="logo" src={logoRmAsociados} alt="logo Rm Asociados" />
                                    <button type="button" className="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-end" id="nav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item" >
                                                <a className="nav-link text-light font-weight-bold px-3" href="!#">Especialidades</a>
                                            </li>
                                            <li>
                                                <a className="nav-link text-light font-weight-bold px-3" href="!#">Nosotros</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-light font-weight-bold px-3" href="!#">Contactanos</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="container">
                {/* style={{ marginTop: '6em' }} */}
                    <div className="row">
                        <div className="col-sm-12 text-right fondo2" >
                            <cite className="cita ">"Después de Dios está el Derecho, porque siempre busca la Justicia”</cite>
                        </div>
                        <div className="col-sm-12 fondo1">
                            <h1 className="titleRm">RM Asociados <br /> <h2 className="subtitleRm">Despacho de abogados</h2></h1>
                        </div>
                        <div className="col-sm-12 text-right d-none d-md-block fondo3 ">
                            <button type="button" className="btn  " data-toggle="button" aria-pressed="false">
                                Contactanos
                        </button>
                        </div>
                    </div>

                </div>
            </Fragment >
        );
    }
}

export default Nav;

