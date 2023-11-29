import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';
import UpdateButton from '../UpdateButton/UpdateButton';
import {getTitle, Details} from '../../../utils/utils';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';

type EditDetailScreenRouteProp = RouteProp<RootStackParamList, 'EditName'>;

type Props = {
  route: EditDetailScreenRouteProp;
};
const EditName: React.FC<Props> = ({route}) => {
  const {names, type} = route.params;
  const [name, setName] = useState({
    firstName: names?.firstName ?? '',
    lastName: names?.lastName ?? '',
  });

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>{getTitle(Details.Name)}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput
              style={styles.inputText}
              value={name.firstName}
              placeholder="Micah"
              onChangeText={(prevName: string) =>
                setName(prevState => ({...prevState, firstName: prevName}))
              }
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput
              style={styles.inputText}
              value={name.lastName}
              placeholder="Smith"
              onChangeText={(prevName: string) =>
                setName(prevState => ({...prevState, lastName: prevName}))
              }
            />
          </View>
        </View>
        <View style={styles.updateButton}>
          <UpdateButton data={name} type={type} />
        </View>
      </View>
    </View>
  );
};

export default EditName;
