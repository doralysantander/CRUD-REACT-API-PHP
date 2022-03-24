import React from 'react';
import {Link } from "react-router-dom";

class Listar extends React.Component {
constructor(props) {
super(props);
this.state ={datosCargados:false,//creando un estado una variable que va a estar cambiando
empleados:[]//arreglo de empleados
}

}


borrarRegistros=(id)=>{
    console.log(id);
    //solicitar informacion y luego mostrarla
    fetch("http://localhost/empleados/?borrar="+id)
    .then(respuesta=>respuesta.json())
    .then((datosRespuesta)=>{
        console.log(datosRespuesta)
        // cargo los datos 
        this.cargarDatos();
     
        
    
    })
    .catch(console.log)

}

//pide informacion a la api que se va a consumir
cargarDatos(){
    //solicitar informacion y luego mostrarla
    fetch("http://localhost/empleados/")
    .then(respuesta=>respuesta.json())
    .then((datosRespuesta)=>{
        console.log(datosRespuesta)
        //modifica el estado
        this.setState({datosCargados:true, empleados:datosRespuesta})//cambia a true porque la info ya llego
    
    })
    .catch(console.log)

}
//se ejecuta para consultar info de la API
componentDidMount(){
    this.cargarDatos();


}

render() { 
const{datosCargados,empleados}= this.state//Recuperar todos los datos del estado
//si los datos cargados estan en falso
if(!datosCargados){ return(<div>Cargando...</div>)}

else{// de lo contrario muestra todos los datos
return (

    <div className="card">
        <div className="card-header">
        <Link type="button" className="btn btn-success" to={"/crear"}>Agregar nuevo empleado</Link>
       
        </div>
        <div className="card-body">
        <h4>Lista de mpleados</h4>
        <table className="table">
    <thead>
        <tr>
            <th>ID</th>
            <th>nombre</th>
            <th>correo</th>
            <th>Acciones</th>
        </tr>
    </thead>
<tbody>
    
    {empleados.map(
        (empleado)=>(
<tr key={empleado.id}>
<td >{empleado.id}</td>
<td>{empleado.nombre}</td>
<td>{empleado.correo}</td>
<td>
    <div className="btn-group" role="group" aria-label="">
        <Link type="button" className="btn btn-warning" to={"/editar"}>Editar</Link>
        <button type="button" className="btn btn-danger"
        onClick={()=>this.borrarRegistros(empleado.id)}
        >Borrar</button>
        
    </div>
</td>
</tr>

        )
    )}

</tbody>
</table>
            
        </div>
        <div className="card-footer text-muted">
          
        </div>
    </div>

);
}
}
}
export default Listar ;
