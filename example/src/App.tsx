import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { SendButton } from 'react-native-errand-comm';

export default function App() {
  // const [result, setResult] = React.useState<number | undefined>();

  // React.useEffect(() => {
  //   ErrandComm.add(3, 7).then(setResult);
  // }, []);

  return (
    <View style={styles.container}>
      <SendButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
