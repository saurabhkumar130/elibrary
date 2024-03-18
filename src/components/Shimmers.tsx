import React, {memo} from 'react';
import LottieView from 'lottie-react-native';

import BodyShimmer from '../assets/lotties/white-shimmer.json';

export const CardShimmer: React.FC = memo(() => {
  return (
    <LottieView
      autoPlay={true}
      loop={true}
      source={BodyShimmer}
      resizeMode="cover"
      style={{position: 'absolute', left: 0, bottom: 0, top: 0, right: 0}}
    />
  );
});
