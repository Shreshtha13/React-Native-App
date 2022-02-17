import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const Note = () => (
  <Card style={s.cardComp}>
    <View style={s.container}>
      <View style={s.img}>
        <Image source={require('../images/image-3.png')} />
      </View>
      <Card.Content style={s.content}>
        <Title style={s.title}>The Peppery Herbs</Title>
        <Paragraph style={s.para}>Chinese, North & South Indian</Paragraph>
        <View style={s.line}>
          <Text>hello</Text>
        </View>
        <LinearGradient
          style={s.offer}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['rgba(76, 86, 255,0.06)', 'rgba(76, 86, 255,0)']}>
          <View>
            <Image
              style={s.discount}
              source={require('../images/discount/Iconly/Bold/Discount.png')}
            />
          </View>
          <View>
            <Text style={s.offerMsg}>Get 30% off upto 149</Text>
          </View>
        </LinearGradient>
      </Card.Content>
    </View>
  </Card>
);

const s = StyleSheet.create({
  cardComp: {
    margin: 10,
  },
  content: {
    marginTop: 0,
    marginBottom: 0,
  },
  container: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingLeft: 12,
    paddingBottom: 12,
  },
  line: {
    marginTop: 12,
    height: 0,
    borderColor: '#E9ECEF',
    borderWidth: 0.25,
    width: 188,
  },
  offer: {
    height: 32,
    backgroundColor: 'transparent',
    marginTop: 10,
    borderRadius: 8,
    flexDirection: 'row',
  },
  discount: {
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 6,
  },
  title: {
    // top: 4,
    left: 0,
    fontFamily: 'Lato-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    color: '#212529',
    marginTop: 4,
    marginBottom: 0,
  },
  para: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
    color: '#6C757D',
    marginTop: 2,
    marginBottom: 0,
  },
  offerMsg: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
    color: '#343A40',
    letterSpacing: 0.08,
    top: 6,
    left: 6,
  },
});

export default Note;
