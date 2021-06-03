import React, {Component} from 'react';
import './Cliente.css';

class Cliente extends Component{
    constructor(props){
        super(props) 

        this.state ={ 
            clientes : [
                {nombre:'Starbucks'},
                {nombre:'Bioaqua'},
                {nombre:'Sears'},
                {nombre:'Breylee'}
            ]
        }  
    }

    render(){
        return(
            <div className="cliente">
                
                {
                this.state.clientes.map((item, index) => (
                    
                    <ul key={index}>Cliente: <br />{item.nombre}</ul>
                ))
                }
                    
            </div>
        )
    }
}

export default Cliente;