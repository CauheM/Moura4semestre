import { View, Text, Image } from "react-native";

function Header() {
  return (
    <View>
    <Image style={{ width: 250, height: 250 }} source={require('../../assets/son.jpg')} />
    </View>
  );
}

export default Header;