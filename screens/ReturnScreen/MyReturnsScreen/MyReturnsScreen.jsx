////// hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

////// tags
import { View } from "react-native";
import { SafeAreaView, FlatList, RefreshControl } from "react-native";

////// components
import { AllHistoryInvoice } from "../../../common/AllHistoryInvoice/AllHistoryInvoice";

////// fns
import { getListSoldInvoice } from "../../../store/reducers/requestSlice";

////style
import styles from "./style";

export const MyReturnsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { preloader, listSoldInvoice } = useSelector(
    (state) => state.requestSlice
  );

  const { data } = useSelector((state) => state.saveDataSlice);

  const getData = () => dispatch(getListSoldInvoice(data?.seller_guid));

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.parentBlock}>
        <FlatList
          contentContainerStyle={styles.widthMax}
          data={listSoldInvoice}
          renderItem={({ item, index }) => (
            <AllHistoryInvoice
              item={item}
              index={index}
              keyLink={"DetailedInvoiceReturn"}
              navigation={navigation}
            />
          )}
          keyExtractor={(item, index) => `${item.guid}${index}`}
          refreshControl={
            <RefreshControl refreshing={preloader} onRefresh={getData} />
          }
        />
      </View>
    </SafeAreaView>
  );
};
