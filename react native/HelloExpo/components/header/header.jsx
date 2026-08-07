import { View, Text, Image } from "react-native";

function Header() {
  return (
    <View>
    {/*<Text style={{ color: '#fff', fontSize: 20, fontWeight: 'condensed' }}>Cabeçalho</Text>*/}
    <Image style={{ width: 300, height: 300 }} source={require('../../assets/son.jpg')} />
    </View>
  );
}

export default Header;