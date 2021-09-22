import '../styles/footer.scss';
import Logo from '../assets/logo-vass-blanco.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faLinkedin,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer=() => {

    var twitterUrl="https://twitter.com/GrupoVASS";
    var youtubeUrl="https://www.youtube.com/channel/UC5rX2pHgNP2vnOw8fzxHfdg";
    var instagramUrl="https://www.instagram.com/grupo.vass/";
    var linkedinUrl="https://www.linkedin.com/company/vass/";
    
    return (
   
    <div className="footer_container">
        <div className="b-example-divider"></div>


        <div className="container">
        <footer className="py-5">
            <div className="row">
                <div className="col-2-le">
                    <h6>Complex <br/>made<br/> simple</h6>
                    
                    
                    <img src={Logo} className="Logo_foot" alt='prop'/>
                    
                </div>

                <div className="col-2 offset-1">
                    <h5>Sitemap VASS</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Home</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Casos éxito</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Somos VASS</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Impactos</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Método</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Tecnologías</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Proyectos I+D+i</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Insights</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Noticias</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">VASS Research</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Canar de denuncias</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Contacto</a></li>
                    </ul>
                </div>

                <div className="col-2 offset-1">
                    <h5>Sitemap Talento</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Talento</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">#LifeVASS</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Beneficios</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Planes para ti</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Proyectos</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Smartworking</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Ofertas</a></li>
                    
                    </ul>
                </div>

                <div className="col-2 offset-1">
                    
                    <h5>Empresas</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">VASS</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Nateevo</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">Serbatic</a></li>
                    <li className="nav-item mb-1"><a href="/" className="nav-link-f p-0 ">vdSHOP</a></li>
                    </ul>
                </div>
            </div>

            <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>Copyright &copy; 2021 Todos los derechos reservados</p>
            <div className="mid-sec-footer">
                <a href="/" className="nav-link-f p-0 ">Memoria ambiental | </a>
                <a href="/" className="nav-link-f p-0 "> Política de cookies |</a>
                <a href="/" className="nav-link-f p-0 "> Política de privacidad |</a>
                <a href="/" className="nav-link-f p-0 "> Política de calidad y medio ambiente</a>
            </div>
            <div className="social-footer" >
                <a href={twitterUrl}
                    className="social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href={linkedinUrl}
                    className="social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href={instagramUrl} 
                    className="social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href={youtubeUrl}
                    className="social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
            </div>
            </div>
        </footer>
        </div>
    </div>
    
  );
}

export default Footer;
