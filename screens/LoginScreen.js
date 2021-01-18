import React from 'react';
import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import firebase from 'firebase';
import HandleLogin from '../services/HandleLogin';
import styles from '../styles/LoginScreenStyles';


export default class LoginScreen extends React.Component {
    state = {
        phoneNumber: "",
        password: "",
        errorMessage: null,
    }

    HandleLogin = () => {
        HandleLogin(this.state.phoneNumber, this.state.password);
    }

    render(){
        return (
            <TouchableWithoutFeedback 

                onPress={() => {
                Keyboard.dismiss();
            }}>
            <ImageBackground source = {require("../images/login_background.png")} style = {{flex: 1,}}>
            <View style={styles.container}>

                <View style={styles.error}>
                    {this.state.errorMessage && <Text style={styles.errorText}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}> PHONE NUMBER </Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={phoneNumber => this.setState({phoneNumber})}
                            value = {this.state.phoneNumber}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 30}}>
                        <Text style={styles.inputTitle}> PASSWORD </Text>
                        <TextInput 
                            style={styles.input}
                            secureTextEntry
                            onChangeText={password => this.setState({password})}
                            value = {this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.5} 
                    onPress={this.HandleLogin}
                >
                    <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.signup} 
                    activeOpacity={0.5}
                    onPress={()=>this.props.navigation.navigate("Register")}
                >
                    <Text style={{color: '#7D8AB6', fontSize: 16, fontWeight: '600'}}>Create Account</Text>
                </TouchableOpacity>
                
            </View>
            </ImageBackground>
            </TouchableWithoutFeedback>
        )
    }
    
}
