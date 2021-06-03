import React, {Component} from 'react';
import './Cliente.css';
import VerClientes2 from './verClientes2';

class Cliente extends Component{

    render(){
        return(
            <div className="container">
                <div className="card size">
                    <h2>Distribución de Vendedores <br/><br/></h2>

                    <div className="row justify-content-center">
                        <div className="col-10">
                            <VerClientes2 />
                            <br/>
                        </div>
                    </div>
                    <h6>@rebekattan</h6>
                </div>
            </div>
        )
    }
}

export default Cliente;