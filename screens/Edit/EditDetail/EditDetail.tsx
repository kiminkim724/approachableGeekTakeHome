import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';
import {Details, formatPhoneNumber, getLabel} from '../../../utils/utils';
import {getPlaceholder, getTitle} from '../../../utils/utils';
import UpdateButton from '../../UpdateButton/UpdateButton';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';

type EditDetailScreenRouteProp = RouteProp<RootStackParamList, 'EditDetail'>;

type Props = {
  route: EditDetailScreenRouteProp;
};

const EditDetail: React.FC<Props> = ({route}) => {
  const [data, setData] = useState<string | undefined>(route.params.detail);
  const type = route.params.type;

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>{getTitle(type)}</Text>
        <View style={styles.inputContainer}>
          {type === Details.Bio ? (
            <View style={styles.multiInputBox}>
              <TextInput
                style={styles.textInput}
                value={data}
                placeholder={getPlaceholder(type)}
                placeholderTextColor="#ababab"
                maxLength={200}
                multiline={true}
                textAlignVertical="top"
                onChangeText={newData => {
                  setData(newData);
                }}
              />
            </View>
          ) : (
            <View style={styles.singleInputBox}>
              <Text style={styles.inputLabel}>{getLabel(type)}</Text>
              <TextInput
                style={styles.textInput}
                value={data}
                placeholder={getPlaceholder(type)}
                onChangeText={newData => {
                  // Format phone number if phone number is being entered
                  setData(
                    type === Details.Phone
                      ? formatPhoneNumber(newData)
                      : newData,
                  );
                }}
              />
            </View>
          )}
        </View>
        <View style={styles.updateButton}>
          <UpdateButton data={data ?? ''} type={type} />
        </View>
      </View>
    </View>
  );
};

export default EditDetail;
