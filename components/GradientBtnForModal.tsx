import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, Vibration } from 'react-native';
import FontText from './CommonFontText';
import { ms } from 'react-native-size-matters';

const GradientBtnForModal = ({ btnName, setSeeModal }) => {
  return (
    <LinearGradient
      style={{
        marginHorizontal: ms(10, 0.2),
        marginVertical: ms(10, 0.2),
        width: ms(90, 0.3),
        height: ms(40, 0.3),
      }}
      className='flex-1 rounded-xl shadow-xl shadow-black'
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={['#a5b4fc', '#818cf8']}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        className='w-full h-full flex-row justify-center items-center'
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
