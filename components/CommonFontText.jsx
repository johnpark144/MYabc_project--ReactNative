import { Text } from 'react-native';
import { VariableFontWght } from '../commonStyles';

// 공통으로 동일한 폰트주기
const FontText = (props) => {
  return (
    <Text {...props} style={[VariableFontWght, ...props?.style]}>
      {props.children}
    </Text>
  );
};

export default FontText;
