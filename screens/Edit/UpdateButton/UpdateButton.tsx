import React from 'react';
import {Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {Details} from '../../../utils/utils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

type Props = {
  data: string | {firstName: string; lastName: string};
  type: Details;
};

const UpdateButton: React.FC<Props> = ({data, type}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        type === Details.Name && typeof data !== 'string'
          ? navigation.navigate('ViewProfile', {
              firstName: data.firstName,
              lastName: data.lastName,
              type: type,
            })
          : navigation.navigate('ViewProfile', {
              data: data,
              type: type,
            });
      }}>
      <Text style={styles.text}>Update</Text>
    </Pressable>
  );
};

export default UpdateButton;
