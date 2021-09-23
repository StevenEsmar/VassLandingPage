import React, {useState} from 'react';
import '../styles/content.scss';
import ImgBG from '../assets/p2.jpg';


const Content=() => {
    const [data, setData] = useState({
        name: '',
        email: '',
        company: '',
        country:'',
        phone:'',
        msg:'',
    });
    
    const handleChangeForm = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }
    
  return (
    <div>
        <img src={ImgBG} className="imgbg" alt='prop'/>
        <div className="div_info_w">
            <h4>EMPECEMOS A<br/>HACERLO SENCILLO</h4>
            <label className="descript_lbl">
                <h5>Nos emociona impulsar tu transformación digital</h5>
            </label>
        </div>
        <div className="form_container">
            <div className="col1">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="nombre" onChange={handleChangeForm} name="name"/>
                    <label >Nombre y apellidos</label>
                    <h3 className={data.name === "" ? "": "no_error"}>El campo es obligatorio.</h3>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" placeholder="email@correo" onChange={handleChangeForm} name="email"/>
                    <label >Email</label>
                    <h3 className={data.email === "" ? "": "no_error"}>El campo es obligatorio.</h3>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="empresa" onChange={handleChangeForm} name="company"/>
                    <label >Empresa / Organismo</label>
                    <h3 className={data.company === "" ? "": "no_error"}>El campo es obligatorio.</h3>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="pais" onChange={handleChangeForm} name="country"/>
                    <label >País</label>
                </div>
            </div>
            <div className="col2">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="tel" onChange={handleChangeForm} name="phone"/>
                    <label >Teléfono</label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Mensaje:</label>
                    <textarea className="form-control"rows="3" onChange={handleChangeForm} name="msg"></textarea>
                    <h3 className={data.msg === "" ? "": "no_error"}>El campo es obligatorio.</h3>
                </div>
                <div className="button_send">
                    Enviar
                </div>
                <span className={(data.msg === ""|| data.company === ""|| data.name === "" || data.email === "") ? "msg_validation": "no_bt_error"}>Uno o más campos tienen un error. Por favor, revísalos e inténtalo de nuevo.</span>
            </div>
        </div>
    </div>
    
  );
}

export default Content;
