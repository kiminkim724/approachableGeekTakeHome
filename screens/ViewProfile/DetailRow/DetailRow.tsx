import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {Details} from '../../../utils/utils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

type Props = {
  title: string;
  type: Details;
  detail?: string;
  names?: {firstName: string; lastName: string};
};

const DetailRow: React.FC<Props> = ({title, type, detail, names}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Pressable
      style={styles.row}
      onPress={() => {
        // Go to EditName page if name row is clicked, EditDetail page otherwise
        type === Details.Name
          ? navigation.navigate('EditName', {
              type: type,
              names: names,
            })
          : navigation.navigate('EditDetail', {
              type: type,
              detail: detail,
            });
      }}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {type === Details.Name ? (
          <Text style={styles.detail}>
            {names?.firstName} {names?.lastName}
          </Text>
        ) : (
          <Text style={styles.detail} numberOfLines={3}>
            {detail}
          </Text>
        )}
      </View>
      <Icon style={styles.button} name="arrow-forward-ios" />
    </Pressable>
  );
};

export default DetailRow;
