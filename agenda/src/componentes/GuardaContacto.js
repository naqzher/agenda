import React,{Component} from 'react';

export default class GuardaContacto extends Component {

    render() {
        const {nombre, telefono} = this.props.contacto;


        return (
            <div className="class-name">
                {nombre}
                {telefono}
            </div>
        );
    }
}