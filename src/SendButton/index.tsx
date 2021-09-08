import React from 'react';
import { Alert, Button } from 'react-native'

export default class SendButton extends React.Component {
    render() {
        return (
           <Button
  onPress={() => Alert.alert("Hello Test")}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
        )
    }
}
