import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const fetchIcons = () => {
  Ionicons.loadFont();
  Material.loadFont();
  Feather.loadFont();
};

export default fetchIcons;
