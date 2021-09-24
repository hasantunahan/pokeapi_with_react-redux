import React from 'react';
import {View, Text, Button} from 'react-native';
import Modal from 'react-native-modal';
import TouchableScale from 'react-native-touchable-scale';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {themeColors} from '../../../core/extension/color';
import ImageExtension from '../../../core/extension/image';
import opps from '../../../assets/image/opps.jpg';
import cong from '../../../assets/image/cong.png';

const CatchMessageModal = ({isModalVisible, toggleModal, isCatch}) => {
  return (
    <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
      <View style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {isCatch ? (
            <Text style={{fontWeight: '700'}}>Congratulations!</Text>
          ) : (
            <Text style={{fontWeight: '700'}}>Opps!</Text>
          )}
          <TouchableScale onPress={toggleModal}>
            <Ionicons
              style={{justifyContent: 'space-evenly'}}
              name="close"
              color={themeColors().notification}
              size={22}
            />
          </TouchableScale>
        </View>
        {isCatch ? (
          <Text numberOfLines={2}>You have a new pokemon</Text>
        ) : (
          <Text numberOfLines={2}>
            {'You couldnt catch the Pokemon\nYou can try another time'}
          </Text>
        )}

        <View style={{width: '100%', alignItems: 'center', padding: 5}}>
          {isCatch ? (
            <ImageExtension image={cong} width={120} height={120} />
          ) : (
            <ImageExtension image={opps} width={120} height={120} />
          )}
        </View>
      </View>
    </Modal>
  );
};
export default CatchMessageModal;
