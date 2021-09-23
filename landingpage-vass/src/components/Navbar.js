import '../styles/navbar.scss';
import React, {useState} from 'react';
import Logo from '../assets/logo-vass-blanco.png';
import $ from 'jquery';
import { BsSearch } from 'react-icons/bs';


const Navbar=() => {
    /* Función para hacer que la navbar varíe su background según scroll */
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".bg-dark");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    const [active, setActive] = useState(false);
    
    const handleClickSearch = () => {
        setActive(!active)
    }
    
  return (
    <div>
    {active === true ? 
    <div className="div_search">
        <input type="text" className="in_search" placeholder="Buscar"/>
        <button className="but_close" onClick={handleClickSearch}>X</button>
    </div>:
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={Logo} className="Logo_nav" alt='prop'/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="/CasosExito">Casos de éxito</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Mercados
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/app">APP</a></li>
                        <li><a className="dropdown-item" href="/banca">BANCA</a></li>
                        <li><a className="dropdown-item" href="/eue">EU{"&"}E</a></li>
                        <li><a className="dropdown-item" href="/industria">INDUSTRIA</a></li>
                        <li><a className="dropdown-item" href="/seguros">SEGUROS</a></li>
                        <li><a className="dropdown-item" href="/telcomedia">TELCO{" & "}MEDIA</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Países
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/Spain">España</a></li>
                        <li><a className="dropdown-item" href="/Us">US - Boston</a></li>
                        <li><a className="dropdown-item" href="/Uklondon">UK - Londres</a></li>
                        <li><a className="dropdown-item" href="/Mex">México</a></li>
                        <li><a className="dropdown-item" href="/Peru">Perú</a></li>
                        <li><a className="dropdown-item" href="/Bra">Brasil</a></li>
                        <li><a className="dropdown-item" href="/Chi">Chile</a></li>
                        <li><a className="dropdown-item" href="/Col">Colombia</a></li>
                        <li><a className="dropdown-item" href="/Benelux">Benelux</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Somos VASS
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/Equipo">Equipo</a></li>
                        <li><a className="dropdown-item" href="/Rsc">RSC</a></li>
                        <li><a className="dropdown-item" href="/Paises">Países</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cómo lo hacemos
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/Logros">¿QUÉ LOGRAMOS?</a></li>
                        <li><a className="dropdown-item" href="/Logros">¿CÓMO LO LOGRAMOS?</a></li>
                        <li><a className="dropdown-item" href="/Logros">¿CON QUÉ LO LOGRAMOS?</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/Insights">Insights</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/News">Noticias</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/Research">Vass Research</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/">EN</a>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link search active" onClick={handleClickSearch}><BsSearch /></span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/Talento">Talento</a>
                    </li>
                    
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    }
    </div>
  );
}

export default Navbar;
