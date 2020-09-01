

import * as React from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Button
  } from 'react-native';


export default class PredimPoteau extends React.Component {
  state = {
    result: {}
  }

  setSelectedValue = value => {
    this.setState({ selectedValue: value });
  }

  exe = () => {
    alert('Result')
  }

  render() {
    return (
    <View style={styles.container}>
        <Text>PrédimPoteau</Text>
        <Button title='Execution' onPress={this.exe} />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  }

});
