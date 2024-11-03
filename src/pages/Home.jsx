import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Matendo from '../components/Matendo';

const matendo = [
  {tendo: 'furaha', siku: 'Jumatatu na Jumamosi'},
  {tendo: 'uchungu', siku: 'Jumanne na Ijumaa'},
  {tendo: 'utukufu', siku: 'Jumatano na Jumpili'},
  {tendo: 'mwanga', siku: 'Alhamisi'},
];

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.lowerSection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {matendo.map((item, index) => (
            <Matendo
              key={index}
              tendo={item.tendo}
              siku={item.siku}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 500,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  lowerSection: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  lowerHeaderText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 5,
  },
});
