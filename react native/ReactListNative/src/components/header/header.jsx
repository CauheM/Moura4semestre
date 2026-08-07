import { View, Text } from "react-native";
import { styles } from "./HeaderStyle.js";

function Header() {
  return (
    <View style={styles.Header}>
    <Text style={styles.Headertext}>React List</Text>
    </View>
  );
}

export default Header;