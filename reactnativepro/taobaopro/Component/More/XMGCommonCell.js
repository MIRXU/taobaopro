/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,Switch} from 'react-native';


export default class CommonCell extends Component<Props> {
    static defaultProps={
        title: '',
        isSwitch:false,
        rightTitle:''
    }

    constructor(props) {
        super(props);
        this.state = { isOn: false };

    }

    render() {
        return (
            <TouchableOpacity onPress={()=>{alert('惦记了')}}>
            <View style={styles.container}>
                <Text style={{marginLeft:8}}>{this.props.title}</Text>
                {this.renderRightView()}

            </View>
            </TouchableOpacity>
        );
    }
    renderRightView() {
            if( this.props.isSwitch ){
                return(
                    <Switch value={this.state.isOn==true} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}} style={{marginRight:8}}/>
                )
            }else{
                return(
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        {this.rightTitle()}
                        <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8}}></Image>
                    </View>
                )
            }
    }
    rightTitle(){
        if(this.props.rightTitle.length>0){
            return(
                <Text style={{color:'gray',marginRight:3}}>{this.props.rightTitle}</Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height:Platform.OS=='ios'?40:30,
        backgroundColor: 'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
