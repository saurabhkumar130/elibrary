import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {SearchBarProps} from '../helpers/types';
import {serachBarStyles} from './styles';

const SearchBar: React.FC<SearchBarProps> = ({handleSearch}) => {
  return (
    <View style={serachBarStyles.container}>
      <TextInput
        style={serachBarStyles.input}
        placeholder="Search books by title"
        onChangeText={handleSearch}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchBar;
