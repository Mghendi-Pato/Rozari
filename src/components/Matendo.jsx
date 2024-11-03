import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Matendo = ({tendo, siku, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Rozari', {tendo})}>
      <Feather name="shield" size={30} />
      <View style={styles.mainContainer}>
        <Text style={styles.header}>{tendo}</Text>
        <Text>{siku}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Matendo;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 2,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 12,
    minHeight: 100,
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  mainContainer: {
    paddingHorizontal: 10,
  },
});
