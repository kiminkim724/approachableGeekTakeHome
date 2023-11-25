import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './styles';
import DetailRow from './DetailRow/DetailRow';
import {Details, Profile} from '../../utils/utils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = NativeStackScreenProps<RootStackParamList, 'ViewProfile', 'Stack'>;

const ViewProfile: React.FC<Props> = ({route, navigation}) => {
  const [profile, setProfile] = useState<Profile>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bio: '',
    picture:
      'https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg',
  });

  useEffect(() => {
    if (route.params) {
      // Update profile with data sent from edit screens
      setProfile((prevProfile: Profile) => {
        const newProfile: Profile = {...prevProfile};

        if (route.params?.type === Details.Name) {
          newProfile.firstName = route.params?.firstName;
          newProfile.lastName = route.params?.lastName;
        } else {
          newProfile[route.params?.type as keyof Profile] = route.params?.data;
        }
        return newProfile;
      });
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate('EditImage', {uri: profile.picture});
          }}>
          <Image
            style={styles.imageView}
            source={{
              uri: profile.picture,
            }}
          />
          <Icon name="create" size={24} style={styles.uploadButton} />
        </Pressable>
      </View>
      <DetailRow
        title={'Name'}
        type={Details.Name}
        names={{firstName: profile.firstName, lastName: profile.lastName}}
      />
      <DetailRow title={'Phone'} type={Details.Phone} detail={profile.phone} />
      <DetailRow title={'Email'} type={Details.Email} detail={profile.email} />
      <DetailRow
        title={'Tell us about yourself'}
        type={Details.Bio}
        detail={profile.bio}
      />
    </View>
  );
};

export default ViewProfile;
