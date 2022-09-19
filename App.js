import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Image, Text} from 'react-native';
import data from './location.json';

const basketIcon = require('./images/chicago.png')

export default class App extends React.Component {
  /*constructor(properties) {
    super(properties);
    const dataSource = new FlatList.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    this.state = {dataSource: dataSource.cloneWithRows(Data),};
  }*/
  renderRow({item}) {
    return (
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={basketIcon} style={styles.icon} />
        </View>
        <View style={styles.info}>
          <Text style={styles.location}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
          <Text style={styles.website}>{item.website}</Text>
        </View>
      </View>
    );
    } 

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>City Guide</Text>
        <FlatList data={data} renderItem={this.renderRow} />
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ede2e0',
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    backgroundColor: '#1c7da5',
    color: '#ede2e0',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 30,
    textAlign: 'center',
  },
  row: {
    borderColor: '#7b7983',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    paddingTop:20,
    paddingBottom: 20,
  },
  iconContainer: {
    backgroundColor: '#1f3243',
    borderColor: '#1f3243',
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 45,
    width: 45,
    tintcolor: 'none',
    borderRadius: 35,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  name: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#122737',
    fontSize: 18,
  },
  address: {
    color: '#3c4f62',
    fontSize: 16,
  },
  website: {
    color: '#3c4f62',
    fontSize: 16,
    fontStyle: 'italic',
  }
});

