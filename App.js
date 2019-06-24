/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Image ,Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
      text8: '',
      text9: '',
      text10: '',
      text11: '',
      text12: '',
      text13: '',
      text14: '',

      text1Ans: 0,
      text2Ans: 0,
      text3Ans: 0,
      text4Ans: 0,
      text5Ans: 0,
      text6Ans: 0,
      text7Ans: 0,
      text8Ans: 0,
      text9Ans: 0,
      text10Ans: 0,
      text11Ans: 0,
      text12Ans: 0,
      text13Ans: 0,
      text14Ans: 0,
      score: 0,
      toggle: true
    };
  }

  check = () =>{
    const { text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14 } = this.state;
    let counter = 0;
    if(text1.toLowerCase() == "pelo"){
      counter++;
      this.setState({text1Ans:1});
    }if(text2.toLowerCase() == "camada córnea queratinizada"){
      counter++;
      this.setState({text2Ans:1});
    }if(text3.toLowerCase() == "terminação nervosa livre"){
      counter++;
      this.setState({text3Ans:1});
    }if(text4.toLowerCase() == "glândula sudorípara"){
      counter++;
      this.setState({text4Ans:1});
    }if(text5.toLowerCase() == "músculo eretor do pelo"){
      counter++;
      this.setState({text5Ans:1});
    }if(text6.toLowerCase() == "tecido subcutâneo adiposo"){
      counter++;
      this.setState({text6Ans:1});
    }if(text7.toLowerCase() == "folículo piloso"){
      counter++;
      this.setState({text7Ans:1});
    }if(text8.toLowerCase() == "veia"){
      counter++;
      this.setState({text8Ans:1});
    }if(text9.toLowerCase() == "artéria"){
      counter++;
      this.setState({text9Ans:1});
    }if(text10.toLowerCase() == "derme"){
      counter++;
      this.setState({text10Ans:1});
    }if(text11.toLowerCase() == "epiderme"){
      counter++;
      this.setState({text11Ans:1});
    }if(text12.toLowerCase() == "poro sudoríparo"){
      counter++;
      this.setState({text12Ans:1});
    }if(text13.toLowerCase() == "corpúsculo de meissner"){
      counter++;
      this.setState({text13Ans:1});
    }if(text14.toLowerCase() == "glândula sebácea"){
      counter++;
      this.setState({text14Ans:1});
    }
    this.setState({score: counter})
  }

  checkChangesColor = (isTrue) =>{
    if(isTrue = 1){
      return{
        flexDirection:'row', 
        alignItems:'center',
        margin:10,

        borderRadius:20,
        backgroundColor: '#00ff00',
        elevation:1
      }
    }else{
      return{
        flexDirection:'row', 
        alignItems:'center',
        margin:10,

        borderRadius:20,
        backgroundColor: '#00b5cc',
        elevation:1
      }
    }
  }

  reset = () =>{
    this.setState({text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', text8: '', text9: '', text10: '', text11: '', text12: '', text13: '', text14:'', score: 0})
  }

  _onPress = () =>{
    const newState = !this.state.toggle;
    this.setState({toggle:newState})
  }

  render() {
    const { text1Ans, text2Ans, text3Ans, text4Ans, text5Ans, text6Ans, text7Ans, text8Ans, text9Ans, text10Ans, text11Ans, text12Ans, text13Ans, text14Ans } = this.state;
    const {toggle} = this.state;
    const pergunta = <Image
                        source= {require('./src/assets/sistemaTegumentar.jpg')}
                        style={{width: "100%", height:300, borderWidth:2, borderColor:"#dadfe1"}}
                      />;
    const gabarito = <Image
                        source= {require('./src/assets/sistemaTegumentar2.jpg')}
                        style={{width: "100%", height:300, borderWidth:2, borderColor:"#dadfe1"}}
                      />;
    return (
      <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center'}}>  
        
        <View style={styles.upperBar}>
          <Text style={{fontSize:30, fontWeight:"bold", color: 'white', fontFamily:'notoserif'}}>Sistema Tegumentar</Text>
        </View>

        <View style={{flex: 1, flexDirection:'row', margin:10}}>
          <Text style={styles.pontuacao}>Pontuação </Text>
          <Text style={styles.pontuacao}>{this.state.score}/14</Text>
        </View>
        
        <TouchableOpacity style={{width: "100%", height:300}}onPress={() => this._onPress()}>
          {toggle ? pergunta : gabarito}
        </TouchableOpacity>
        
        <View style={{flex:1, flexGrow:1, flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>1.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text1) => this.setState({text1: text1})}
              value={this.state.text1}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>2.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text2) => this.setState({text2: text2})}
              value={this.state.text2}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>3.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text3) => this.setState({text3: text3})}
              value={this.state.text3}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>4.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text4) => this.setState({text4: text4})}
              value={this.state.text4}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>5.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text5) => this.setState({text5: text5})}
              value={this.state.text5}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>6.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text6) => this.setState({text6: text6})}
              value={this.state.text6}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>7.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text7) => this.setState({text7: text7})}
              value={this.state.text7}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>8.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text8) => this.setState({text8: text8})}
              value={this.state.text8}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>9.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text9) => this.setState({text9: text9})}
              value={this.state.text9}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>10.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text10) => this.setState({text10: text10})}
              value={this.state.text10}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>11.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text11) => this.setState({text11: text11})}
              value={this.state.text11}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>12.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text12) => this.setState({text12: text12})}
              value={this.state.text12}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>13.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text13) => this.setState({text13: text13})}
              value={this.state.text13}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTextBefore}>14.</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text14) => this.setState({text14: text14})}
              value={this.state.text14}
            />
          </View>
        </View>
        
        <View style={{flex:1, flexDirection:"row"}}>
          <View style={{margin:10}}>
            <Button
              onPress = {this.check}
              title="check"
              color="#3498db"
            />
          </View>
          <View style={{margin:10}}>
            <Button
              onPress = {this.reset}
              title="reset"
              color="#3498db"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F1EF',
    flex:1
  },
  upperBar:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    fontSize: 24,
    height:50,
    width:'100%',
    textAlign: 'center',
    backgroundColor: "#1abc9c",
    elevation:2
  },
  inputContainer: {
    flexDirection:'row', 
    alignItems:'center',
    margin:10,

    borderRadius:20,
    backgroundColor: '#00b5cc',
    elevation:1
  },
  inputText: {
    height: 40,
    fontSize:16,
    padding:10,
    borderColor: 'white',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#00b5cc",
    color: "white",
    margin: 10,
    minWidth: 40,
    elevation:1
  },
  inputTextBefore: {
    fontSize:20, 
    color:'white',
    
    marginLeft:10
  },
  pontuacao: {
    color:'#1abc9c', 
    fontSize:36, 
    fontWeight:'bold', 
    fontFamily:'notoserif', 
    textAlign:'center'
  }
  
});
