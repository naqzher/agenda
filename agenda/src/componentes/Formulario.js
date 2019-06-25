import React,{Component} from 'react';
import '../App.css';

export default class Formulario extends Component {

       // ref para los campos del form
       nombre = React.createRef();
       telefono = React.createRef();
    // nombre = React.createRef();

    // state   = {
    //     nombre:'',
    //     telefono:''
    // }

    // Obtengo datos por tecleada y seteo el state
    // handleChange = input => e => {
    //     // console.log(input, e)
    //     this.setState({ [input]: e.target.value });
    //     const
    // };

    usuarioStore = (e) => {
        e.preventDefault();

        const datos = {
            nombre: this.nombre.current.value,
            telefono: this.telefono.current.value
        }

        this.props.guardarContacto(datos);
        
    }

    render() {
        return (
            <div className="class-name" >
                <form onSubmit={this.usuarioStore}>
                    Nombre:<br/>
                    <input type="text" name="nombre"  ref={this.nombre} />
                    <br/>
                    Telefono:<br/>
                    <input type="text" name="telefono" ref={this.telefono}  />
                    <br/><br/>
                    <input type="submit" value="Submit" />                                    
                </form>
            </div>
        );
    }
}