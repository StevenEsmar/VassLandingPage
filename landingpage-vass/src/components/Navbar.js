import '../styles/home.scss';
import Logo from '../assets/logo-vass-blanco.png';

const Navbar=() => {
  return (
   
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <img src={Logo} className="Logo_nav" alt='prop'/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Casos de éxito</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Mercados
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Países
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Somos VASS
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cómo lo hacemos
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/">Insights</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/">Noticias</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/">Vass Research</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/">EN</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/">Lupa</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/">Talento</a>
                </li>
                
                </ul>
            </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
