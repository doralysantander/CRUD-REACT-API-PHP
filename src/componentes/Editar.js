import React from 'react';
class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //recepcionar id que viene de appjs
    ccomponentDidMount(){
        console.log(this.props.match.Params.id);//busca el dato con match que viene de los parametros
      

    }
    
    render() { 
        return ( <div className="card">
            <div className="card-header">
            Editar Empleados
            </div>
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
        </div> );
    }
}
 
export default Editar;