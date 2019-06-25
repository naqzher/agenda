import React,{Component} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import GuardaContacto from './componentes/GuardaContacto';


export default class App extends Component {

  state  = {
    datos:{}
  }

   //Agregar un nuevo gasto al state
   guardarContacto = datos =>{
     this.setState({
       datos
     });

  }

    render() {
        return (
            <div className="class-name">
                <Header />
                <Formulario guardarContacto = {this.guardarContacto }/>
                <GuardaContacto contacto={this.state.datos}/>
            </div>
        );
    }
}