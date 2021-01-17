import React from 'react';
import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RegisterUser from '../services/RegisterUser';
import styles from '../styles/RegisterScreenStyles';
import * as firebase from 'firebase';
import Fire from '../Fire';

export default class RegisterScreen extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        errorMessage: null,
        friends: [],
    }

    handleSignUp = () => {
        RegisterUser(this.state.firstName, this.state.lastName, this.state.phoneNumber, this.state.email, this.state.password);
    }

    render(){
        return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.container}>
                <Text style={styles.title}>Sign up to get started</Text>

                <View style={styles.error}>
                    {this.state.errorMessage && <Text style={styles.errorText}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}> FIRST NAME </Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={firstName => this.setState({firstName})}
                            value = {this.state.firstName}
                            ></TextInput>
                    </View>

                    <View style={{marginTop: 30}}>
                        <Text style={styles.inputTitle}> LAST NAME </Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={lastName => this.setState({lastName})}
                            value = {this.state.lastName}
                            ></TextInput>
                    </View>

                    <View style={{marginTop: 30}}>
                        <Text style={styles.inputTitle}> PHONE NUMBER </Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={phoneNumber => this.setState({phoneNumber})}
                            value = {this.state.phoneNumber}
                            ></TextInput>
                    </View>

                    <View style={{marginTop: 30}}>
                        <Text style={styles.inputTitle}> EMAIL </Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={email => this.setState({email})}
                            value = {this.state.email}
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

                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={this.handleSignUp}>
                    <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={ ()=> this.props.navigation.navigate("Login")}>
                    <Text style={{fontSize: 14, fontWeight: '600', textAlign: 'center'}}>
                        Already have an account? <Text style = {{color: '#f7287b'}}> Log In </Text>
                    </Text>
                </TouchableOpacity>
                
            </View>
            </TouchableWithoutFeedback>
        )
    }
    
}
