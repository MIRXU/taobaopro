/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';

import CommonMyCell from './XMGCommonMyCell';
import MiddleView from './XMGMineMiddleView';
import HeaderView from './XMGHeaderView';
export default class Mine extends Component<Props> {
    render() {
        return (
          <ScrollView style={styles.scrollViewStyle}>
              <View style={{marginTop:20}}>
                  <HeaderView></HeaderView>
                  <CommonMyCell leftIconName='collect' leftTitle='我的订单' rightTitle='查看全部订单'></CommonMyCell>
                  <MiddleView></MiddleView>
              </View>
              <View style={{marginTop:20}}>
                  <CommonMyCell leftIconName='draft' leftTitle='小码哥钱包' rightTitle='用户余额：¥4.8'></CommonMyCell>
              </View>
              <View >
                  <CommonMyCell leftIconName='like' leftTitle='抵用券' rightTitle='10'></CommonMyCell>
              </View>
              <View style={{marginTop:20}}>
                  <CommonMyCell leftIconName='card' leftTitle='积分商城'></CommonMyCell>
              </View>
              <View style={{marginTop:20}}>
                  <CommonMyCell leftIconName='new_friend' leftTitle='今日推荐' rightIconName='me_new'></CommonMyCell>
              </View>
              <View style={{marginTop:20}}>
                  <CommonMyCell leftIconName='pay' leftTitle='我要合作' rightTitle='轻松开店，招财进宝' ></CommonMyCell>
              </View>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
       backgroundColor:'#e8e8e8'
    },
});
