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

var Dimensions=require('Dimensions');
var { width , height }=Dimensions.get('window');
export default class XMGHeaderView extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                {this.renderTopView()}
                {this.renderBottomView()}
            </View>
        );
    }
    renderTopView(){
        return(
            <View style={styles.headTopViewStyle}>
                <Image source={{uri:'see'}} style={styles.logoImageStyle}/>
                <View style={styles.logoNameStyle}>
                    <Text style={styles.nameStyle}>小码哥电商</Text>
                    <Image source={{uri:'avatar_vip'}} style={{width:18,height:18}}/>
                </View>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:20,height:20,position:'absolute',right:8}}/>
            </View>
        )
    }
    renderBottomView(){
        return(
            <View style={styles.bottomStyle}>
                {this.renderAllItem()}
            </View>
            )
    }
    renderAllItem(){
        var itemArr=[];
        var data=[{'num':"100",'title':'马哥数'},{'num':"100",'title':'评价'},{'num':"100",'title':'收藏'}];

        for(var i=0;i<data.length;i++){
            var item=data[i];
            itemArr.push(
                <View key={i} style={styles.bottomInnerStyle}>
                    <Text style={{color:'white'}}>{item.num}</Text>
                    <Text  style={{color:'white'}}>{item.title}</Text>
                </View>
            )
        }
        return itemArr;
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'rgba(255,96,0,1.0)',
        height:200,
    },
    headTopViewStyle: {
        flexDirection:'row',
        alignItems:'center'
    },
    nameStyle: {
        fontSize:20,
        color:'white'
    },
    logoImageStyle: {
        width:90,
        height:90,
        borderRadius:45,
        borderWidth:2,
        borderColor:'rgba(0,0,0,0.2)',
        margin:20,
    },
    logoNameStyle: {
        flexDirection:'row',
    },
    bottomStyle: {
        flexDirection:'row',
        position:'absolute',
        bottom:0,
    },
    bottomInnerStyle: {
        width:(width/3)+1,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:1,
        borderRightColor:'white',
        backgroundColor:'rgba(255,255,255,0.4)',

    }
});
