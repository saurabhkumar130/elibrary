import React from 'react';
import {View, Text, Image} from 'react-native';
import {CardShimmer} from './Shimmers';
import {bookCardStyles} from './styles';
import {range} from 'lodash';

const BookCardSkeleton: React.FC = () => {
  return range(0, 6).map((_, index) => (
    <View key={index} style={bookCardStyles.card}>
      <View style={bookCardStyles.coverImage} />
      <CardShimmer />
      <View style={bookCardStyles.detailsContainer}>
        <Text style={bookCardStyles.title} />
        <Text style={bookCardStyles.author} />
      </View>
    </View>
  ));
};

export default BookCardSkeleton;
