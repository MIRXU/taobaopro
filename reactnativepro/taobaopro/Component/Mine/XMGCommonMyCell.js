/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,Switch} from 'react-native';


export default class CommonMyCell extends Component<Props> {
    static defaultProps={
        leftIconName:'',
        leftTitle:'',
        rightIconName:'',
        rightTitle:'',
    }

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
                <View style={styles.leftViewStyle}>
                    <Image  source={{uri:this.props.leftIconName}} style={styles.leftImageStyle}/>
                    <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                </View>
                <View style={styles.rightViewStyle}>
                    {this.rightSubView()}

                </View>
            </View>
            </TouchableOpacity>
        );
    }
    rightSubView(){
            return(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {this.renderRightContent()}
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8,marginLeft:5}}></Image>
                </View>
            )
    }
    renderRightContent(){
        if(this.props.rightIconName.length==0){
            return(
                <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
            )
        }else{
            return(
                <Image source={{uri:'me_new'}} style={{width:24,height:13}}></Image>
            )
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        alignItems:'center',
        height:40,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftViewStyle: {
       flexDirection:'row',
        alignItems:'center',
        marginLeft:8
    },
    leftImageStyle: {
        width:24,
        height:24,
        marginRight:6,
        borderRadius:12
    },
    leftTitleStyle: {
        fontSize:16
    },
    rightViewStyle: {

    }
});
