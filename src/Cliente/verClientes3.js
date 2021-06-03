import React from 'react';

const verCliente3 = (props) => {
    return(
        <div>
            <ul><small><b>Reasignar</b></small> <br />
                <input value={props.children} onChange={props.update} type="text" placeholder="Escriba un nombre" ></input>&nbsp;
                <button className="btn btn-outline-danger" onClick={props.delete}><small>Borrar</small></button>
            </ul>
        </div>
    )
}

export default verCliente3;