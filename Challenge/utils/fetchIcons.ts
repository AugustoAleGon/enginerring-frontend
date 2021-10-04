import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';

const fetchIcons = () => {
  Feather.loadFont();
  Ionicons.loadFont();
  Material.loadFont();
  SimpleLine.loadFont();
};

export default fetchIcons;
