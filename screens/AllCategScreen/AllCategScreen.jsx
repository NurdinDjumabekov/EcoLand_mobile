///// tags
import { View } from "react-native";
import { SafeAreaView, FlatList } from "react-native";
import { ViewContainer } from "../../customsTags/ViewContainer";

/////  components
import EveryCategory from "../../components/AllCategory/EveryCategory";

////// helpers
import { dataCategory } from "../../helpers/Data";

////style
import styles from "./style";

const AllCategScreen = ({ navigation }) => {
  return (
    <ViewContainer>
      <SafeAreaView>
        <View style={styles.parentBlock}>
          <FlatList
            contentContainerStyle={styles.flatList}
            data={dataCategory}
            renderItem={({ item }) => (
              <EveryCategory obj={item} navigation={navigation} />
            )}
            keyExtractor={(item, index) => `${item.guid}${index}`}
            numColumns={2}
          />
        </View>
      </SafeAreaView>
    </ViewContainer>
  );
};

export default AllCategScreen;
