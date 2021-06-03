/*ejemplo de class based component
siempre debe heredar de la clase component */

import React, {Component} from 'react';
import './Cliente.css';

class verClientes1 extends Component{
    constructor(props){
        super(props) 

        this.state = {
            input: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event =>{
        const value = event.target.value;
        this.setState({
            input: value
        });
    };

    render(){
        return(
            <div >
                <div className="row justify-content-center">
                    <div className="col-8">
                        Nombre: <br/>{this.props.nombre} {this.state.input}<br/><br/>
                    </div>
                    <div className="col-4">
                        Edad: <br/>{this.props.edad} <br/><br/>
                    </div>
                    {/*<div className="col-4"> 
                        <small><b>Reasignar</b></small> <br />
                        <input value={this.state.input} onChange={this.handleChange} type="text" placeholder="Escriba un nombre" ></input>
                    </div>*/}
                </div>
            </div>
        )
    }
}

export default verClientes1;