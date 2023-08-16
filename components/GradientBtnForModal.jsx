import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, Vibration } from 'react-native';
import FontText from './CommonFontText';
import { vs, ms } from 'react-native-size-matters';

const GradientBtnForModal = ({ btnName, setSeeModal }) => {
  return (
    <LinearGradient
      style={{ marginHorizontal: vs(5), height: ms(40, 2) }}
      className='flex-1 w-full rounded-xl flex-row justify-center items-center shadow-xl shadow-black'
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={['#a5b4fc', '#818cf8']}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          Vibration.vibrate(30);
          setSeeModal(true);
        }}
      >
        <FontText className='text-center'>{btnName}</FontText>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GradientBtnForModal;
