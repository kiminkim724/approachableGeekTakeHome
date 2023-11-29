import React from 'react';
import {Text, Pressable, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {Details, checkFormat} from '../../../utils/utils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

type Props = {
  data: string | {firstName: string; lastName: string};
  type: Details;
};

const UpdateButton: React.FC<Props> = ({data, type}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const checkData = () => {
    try {
      if (type === Details.Name && typeof data !== 'string') {
        navigation.navigate('ViewProfile', {
          firstName: data.firstName,
          lastName: data.lastName,
          type: type,
        });
      } else if (typeof data === 'string') {
        // Check if Email/Phone is formatted properly first
        if (checkFormat(data, type)) {
          navigation.navigate('ViewProfile', {
            data: data,
            type: type,
          });
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        Alert.alert('Incorrect Format', error.message, [{text: 'OK'}]);
      }
    }
  };
  return (
    <Pressable style={styles.button} onPress={checkData}>
      <Text style={styles.text}>Update</Text>
    </Pressable>
  );
};

export default UpdateButton;
