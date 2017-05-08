/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from 'react-native';

export default class ImgLoader extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tempImg: {
        url: '',
      },
      img: {
        url: 'https://goo.gl/DMSpcw',
      }
    };
  }
      
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
              width: 300,
              height: 200
            }
          }
          resizeMode='contain'
          source={{uri: this.state.img.url}}
        />
        <View style={styles.row}>
          <Text style={styles.label}>
            Image Url:
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
                state = this.state;
                state.tempImg.url = text;
                this.setState(state);
              }
            }
          />
        </View>
        <Button 
          onPress={() => {
              state = this.state;
              state.img.url = state.tempImg.url;
              this.setState(state);
            }
          } 
          title='Load Image' 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flex: 1.0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    height: 40,
    width: 200,
    textAlign: 'center',
    flexDirection: 'column',
    color: '#333333',
  },
});

AppRegistry.registerComponent('RegexDownloader', () => ImgLoader);
