/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Image} from 'react-native';
import MiddleData from './MiddleData';
export default class XMGMineMiddleView extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    }
    renderAllItem(){
        var itemArr=[];
        for(var i=0;i<MiddleData.length;i++){
            var data=MiddleData[i];
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} title={data.title}></InnerView>
            )
        }
        return itemArr;
    }
}
class InnerView extends Component<Props>{
    static defaultProps={
        iconName:'',
        title:''
    }
    render() {
        return(
            <View style={{justifyContent:'space-between',flex:1,alignItems:'center'}}>
                <Image source={{uri:this.props.iconName}} style={{width:30,height:20}}></Image>
                <Text style={{marginTop:5,color:'gray'}}>{this.props.title}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems:'center',
        backgroundColor:"white",
        height:70,
        borderTopColor:'#e8e8e8',
        borderTopWidth:0.5
    },
});
