import React from "react";
import { SectionList, StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    rowGap: 12
  },
  h1: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000'
  },
  h2: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000'
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000'
  }
})

function ReactNative() {
  return ( 
   <>
      <ImageBackground
          source={{
            uri: 'https://blog.vietnamlab.vn/content/images/1WMYV3kCJY853-E2c-prAB31YcCb261my.png'
          }}
          style={{width: '100%', height: 200, flexDirection: 'column', justifyContent: 'center'}}
      >
        <Text style={{...styles.h1, textAlign: 'center'}}>Welcome to React</Text>
      </ImageBackground>
      <View style={styles.container}>
       <View>
          <Text style={styles.h2}>Step One</Text>
          <Text style={styles.text}>Edit <Text style={{fontWeight: "600"}}>App.js</Text> to change this screen and then come back to see your edits</Text>
       </View>
       <View>
          <Text style={styles.h2}>See your changes</Text>
          <Text style={styles.text}>Double tab <Text style={{fontWeight: "600"}}>R</Text> on your keyboard to reload your app's code</Text>
       </View>
       <View>
          <Text style={styles.h2}>Debug</Text>
          <Text style={styles.text}>Presss <Text style={{fontWeight: "600"}}>menu button</Text> or <Text style={{fontWeight: "600"}}>Shake</Text> your device to open the React Native dubug menu</Text>
       </View>
      </View>
   </>
   );
}

export default ReactNative;