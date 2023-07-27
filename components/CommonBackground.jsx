import { ImageBackground } from 'react-native';

const CommonBackground = ({ children }) => {
  return (
    <ImageBackground
      className='flex-1'
      source={{
        uri: 'https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
      }}
    >
      {children}
    </ImageBackground>
  );
};

export default CommonBackground;
