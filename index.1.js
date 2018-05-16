import React, {Component} from 'react'
import { AppRegistry , Text, StyleSheet, View, Button} from 'react-native';
import App from './App';

class MeuComponente extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.teste}</Text>              
            </View>
        )
    }
}

class App3 extends Component {
    constructor(props){
        super(props);

        this.state = { texto : 'Texto teste2'};
    }

    alteraTexto(){
        this.setState({texto: 'Outra coisa'})
    }

    render(){
        return(
            <View>
                <MeuComponente teste={this.state.texto} ></MeuComponente>
                <Button 
                    title= 'Botão'
                    onPress={() => {this.alteraTexto()}}
                />
            </View>
        )
    }
}

AppRegistry.registerComponent('app3', () => App3);
