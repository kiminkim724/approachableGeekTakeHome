import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {Details, getTitle} from '../../../utils/utils';
import UpdateButton from '../UpdateButton/UpdateButton';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';
import {launchImageLibrary} from 'react-native-image-picker';

type EditImageScreenRouteProp = RouteProp<RootStackParamList, 'EditImage'>;

type Props = {
  route: EditImageScreenRouteProp;
};

const EditImage: React.FC<Props> = ({route}) => {
  const [picture, setPicture] = useState<string>(route.params.uri);

  const selectImage = async () => {
    let result = await launchImageLibrary({
      mediaType: 'photo',
    });

    // Check if image was selected
    if (!result.didCancel) {
      const pictureUri = result.assets!;

      setPicture(prevPicture => pictureUri[0].uri ?? prevPicture);
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>{getTitle(Details.Picture)}</Text>
        <View style={styles.imageContainer}>
          <Pressable onPress={selectImage}>
            <Image
              style={styles.image}
              source={{
                uri: picture,
              }}
            />
          </Pressable>
        </View>
        <View style={styles.updateButton}>
          <UpdateButton data={picture ?? ''} type={Details.Picture} />
        </View>
      </View>
    </View>
  );
};

export default EditImage;
