import React from 'react';
import {Link} from 'react-router-dom'
//import { useHistory } from "react-router-dom";
//import { Route , withRouter} from 'react-router-dom';
//import { useHistory } from "react-router-dom";


class Crear  extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            nombre:"",
            correo:""

        }

    }
    //enlace a los campos que no estan pasando, recolectar valores nuevos 
    cambioValor=(e)=>{
        const state=this.state;//informacion que se esta modifi
        state[e.target.name]=e.target.value;// todos los valores estan siendo alterados vuelve a colocar sus valores corresp
        this.setState({state});//asignar los nuebos estados

    }
    
    //crea metodo recepcionar datos
   enviarDatos = (e) =>{
       e.preventDefault();//evita suceder cosar por defecto, detiene , return false
       console.log("El formulario fue enviado...");
       //recuperar los datos
       const{nombre,correo}=this.state;
       console.log(nombre);
       console.log(correo);
       var datosEnviar={nombre:nombre, correo:correo}


       //solicitar informacion y luego mostrarla
    fetch("http://localhost/empleados/?insertar=1",{
        method: "POST",
        body:JSON.stringify(datosEnviar)
    })
    .then(respuesta=>respuesta.json())
    .then((datosRespuesta)=>{
        console.log(datosRespuesta)
        //regresar una vez se haya agregado
        //let history = useHistory();
        //let history = useHistory();
        this.props.history.push("/");
        //modifica el estado
        //this.setState({datosCargados:true, empleados:datosRespuesta})//cambia a true porque la info ya llego
    
    })
    .catch(console.log)

   }

    render() { 
        //recuperar y hacer referncia a los dos elementos
        const{nombre,correo}=this.state;
        return (
            <div className="card">
                <div className="card-header">
                    Empleados
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos}>
                        <div className="form-group">
                          <label htmlFor="">Nombre</label>
                          <input type="text" name="nombre" onChange={this.cambioValor}value={nombre} id="nombre" className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe el nombre del empleado</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Correo</label>
                          <input type="text" name="correo" onChange={this.cambioValor} value={correo} id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="text-muted">Escribe correo del empleado</small>
                        </div>
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success ">Agregar Nuevo empleado</button>
                            <Link to={"/"} type="button" className="btn btn-primary">Cancelar</Link>
                        
                        </div>
                    </form>

                   
                      
                   
                    
                </div>
                <div className="card-footer text-muted">
                   
                </div>
            </div>
          );
    }
}
 
export default Crear ;