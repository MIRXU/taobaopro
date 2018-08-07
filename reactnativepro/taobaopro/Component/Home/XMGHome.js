/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput,Image,TouchableOpacity} from 'react-native';

var Dimensions=require('Dimensions');
var { width , height }=Dimensions.get('window');
export default class Home extends Component<Props> {
    render() {
        let { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                { this.renderNavBar() }
                    <Button title='首页' onPress={()=>{navigate('Second')}}></Button>
            </View>
        );
    }
    renderNavBar() {
        return (
            <View style={styles.navBarStyle}>
                <TouchableOpacity onPress={()=>{alert('点击了')}}>
                <Text style={{color:'white',marginTop:Platform.OS=='ios'?16:0}}>广州</Text>
                </TouchableOpacity>
                <TextInput palceholder='请输入商家，品类，商圈' style={styles.topInputStyle}></TextInput>
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                    <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                    <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    navBarStyle: {
        height:Platform.OS=='ios'?64:44,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',//主族的方向
        alignItems:'center',//侧族对齐方式
        justifyContent:'space-around'//主族的对齐方式
    },
    container: {
        flex: 1,

        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    topInputStyle: {
        width:width*0.7,
        height:Platform.OS=='ios'?35:30,
        backgroundColor:'white',
        marginTop:Platform.OS=='ios'?16:0,
        borderRadius:18,
        paddingLeft:10
    },
    rightNavViewStyle: {
        flexDirection:'row',
        height:64,
        alignItems:'center',
        marginTop:Platform.OS=='ios'?16:0
    },
    navRightImgStyle: {
        width:Platform.OS=='ios'?28:24,
        height:Platform.OS=='ios'?28:24,
    }
});
