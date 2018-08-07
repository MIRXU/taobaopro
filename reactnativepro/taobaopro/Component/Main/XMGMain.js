/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {
    StackNavigator
} from 'react-navigation';


import Home from '../Home/XMGHome';
import DetailHome from '../Home/XMGDetailHome';
import Shop from '../Shop/XMGShop';
import Mine from '../Mine/XMGMine';
import More from '../More/XMGMore';

let Routers=StackNavigator ({
    Main:{screen:Home},
    Second:{screen:DetailHome}
},{
    headerMode : 'none',
})

export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'home'};
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}  />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Routers/>
                </TabNavigator.Item>


                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    title="商家"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_merchant_normal'}} style={styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyle}  />}
                    onPress={() => this.setState({ selectedTab: 'shop' })}>
                    <Shop></Shop>
                </TabNavigator.Item>


                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_mine'}} style={styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.iconStyle}  />}
                    onPress={() => this.setState({ selectedTab: 'mine' })}>
                    <Mine></Mine>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'more'}
                    title="更多"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_misc'}} style={styles.iconStyle}  />}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_misc_selected'}} style={styles.iconStyle}  />}
                    onPress={() => this.setState({ selectedTab: 'more' })}>
                    <More></More>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios'?30:25,
        height: Platform.OS === 'ios'?30:25,
    },
});

