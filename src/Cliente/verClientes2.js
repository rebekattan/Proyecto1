import React, {Component} from 'react';
import UniqueId from 'react-html-id'
import './Cliente.css';
import VerClientes1 from './verClientes1';
import Clientes from './Clientes';
import VerClientes3 from './verClientes3';

class verClientes2 extends Component{
    constructor(props){
        super(props)
        
        UniqueId.enableUniqueIds(this);

        const vendedoresPermanentes = [
            {id: this.nextUniqueId(), nombre:'Luis Perez',edad:'25'},
            {id: this.nextUniqueId(), nombre:'Carlos Robles',edad:'30'},
            {id: this.nextUniqueId(), nombre:'Juan Chavez',edad:'34'},
            {id: this.nextUniqueId(), nombre:'Maria Castro',edad:'24'}
        ];

        this.state ={ 
            datos : vendedoresPermanentes
        }
        
        this.cambiarVendedor = this.cambiarVendedor.bind(this);
        this.updateName =this.updateName.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    cambiarVendedor(){

        //vendedores sustitutos
        const vendedoresSustitutos = [
            {id: this.nextUniqueId(),nombre:'Stefany Guzman',edad:'42'},
            {id: this.nextUniqueId(),nombre:'Mario Reyes',edad:'33'},
            {id: this.nextUniqueId(),nombre:'Cristina Alfaro',edad:'24'},
            {id: this.nextUniqueId(),nombre:'Flor Cruz',edad:'31'}
        ]

        this.setState({datos : vendedoresSustitutos});
    }

    updateName = (id, event) => {
        const index = this.state.datos.findIndex((item)=>{
            return (item.id === id);
        });

        const lista = Object.assign({}, this.state.datos[index]);

        lista.nombre = event.target.value;

        const datos = Object.assign([],this.state.datos);

        datos[index] = lista;

        this.setState({datos:datos});

    }

    deleteUser = (index, event) => {

        const datos = Object.assign([],this.state.datos);
        datos.splice(index, 1);
        this.setState({datos:datos})
    }

    render(){
        return(
            <div >
                <div className="row justify-content-center">
                    <div className="col-5">
                        {
                        this.state.datos.map((item) => (
                            
                            <VerClientes1 key={item.id} nombre={item.nombre} edad={item.edad} />
                        ))
                        }
                    </div>
                    <div className="col-2">
                        <Clientes />
                    </div>
                    <div className="col-5">
                        {
                        this.state.datos.map((item, index) => (
                            
                            <VerClientes3 key={item.id} 
                            update={this.updateName.bind(this, item.id)}
                            delete={this.deleteUser.bind(this, index)} />
                        ))
                        }
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-2">
                        <br/>
                        <button className="btn btn-outline-primary" onClick={this.cambiarVendedor}>Sustitutos</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default verClientes2;