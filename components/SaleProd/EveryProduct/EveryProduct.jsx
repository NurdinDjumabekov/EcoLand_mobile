/////// tags
import { Text, TouchableOpacity, View } from "react-native";

///// style
import styles from "./style";

const EveryProduct = (props) => {
  //// каждый товар для продажи

  const { obj, index, navigation, type } = props;

  const addInTemporary = () => {
    navigation.navigate("EverySaleProdScreen", { obj });
  };

  return (
    <TouchableOpacity onPress={addInTemporary} style={styles.blockMain}>
      <View style={styles.blockMainInner}>
        <View>
          <View style={styles.mainContent}>
            <Text style={styles.title}>{index + 1}. </Text>
            <Text style={[styles.title, styles.width85]}>
              {obj?.product_name}
            </Text>
          </View>
        </View>
        <View style={styles.arrow}></View>
      </View>
    </TouchableOpacity>
  );
};

export default EveryProduct;
