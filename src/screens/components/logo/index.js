import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image source={require('../../../../assets/small_logo.png')} style={styles.smallLogo} />
  );
};

const styles = {
  smallLogo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
    marginTop: 50,
  },
  
};

export default Logo;
