import { Text } from 'react-native';
import { publicSansVariable } from '../commonStyles';

// 공통으로 동일한 폰트주기
const FontText = (props) => {
  return (
    <Text {...props} style={[publicSansVariable, ...props?.style]}>
      {props.children}
    </Text>
  );
};

export default FontText;
