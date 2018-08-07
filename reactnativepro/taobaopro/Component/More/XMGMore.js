/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,ScrollView} from 'react-native';

import CommonCell from './XMGCommonCell'


export default class More extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}

                <ScrollView>
                    <View style={{marginTop:20}}>
                        <CommonCell title='扫一扫'></CommonCell>
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell title='省流量模式' isSwitch={true}></CommonCell>
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell title='扫一扫'></CommonCell>
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell title='清空缓存' rightTitle='1.99'></CommonCell>
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell title='扫一扫'></CommonCell>
                    </View>
                    <View >
                        <CommonCell title='扫一扫'></CommonCell>
                    </View>
                    <View>
                        <CommonCell title='扫一扫'></CommonCell>
                    </View>
                    <View>
                        <CommonCell title='扫一扫'></CommonCell>
                    </View>
                </ScrollView>
            </View>
        );
    }
    renderNavBar(){
        return(
            <View style={styles.navOutStyle}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold',marginTop:Platform.OS=='ios'?16:0}}>更多</Text>
                <TouchableOpacity onPress={()=>{alert('惦记了')}} style={styles.rightViewStyle}>
                <Image source={{uri:'icon_mine_setting'}} style={styles.navRightImgStyle}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navOutStyle: {
        height:Platform.OS=='ios'?64:44,
        backgroundColor:'rgba(255,96,0,1.0)',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    rightViewStyle: {
        position:'absolute',
        right:10,
        bottom:15
    },
    navRightImgStyle: {
        width:Platform.OS=='ios'?28:24,
        height:Platform.OS=='ios'?28:24,
    },

});
