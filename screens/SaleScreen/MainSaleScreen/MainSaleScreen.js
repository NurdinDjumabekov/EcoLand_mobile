////// hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

////// tags
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView, FlatList, RefreshControl } from "react-native";

////// components
import { AllHistoryInvoice } from "../../../common/AllHistoryInvoice/AllHistoryInvoice";

////// fns
import { createInvoiceTT } from "../../../store/reducers/requestSlice";
import { getListSoldInvoice } from "../../../store/reducers/requestSlice";
import { saleDiscountFN } from "../../../store/reducers/stateSlice";

////// style
import styles from "./style";

////// imgs
import card from "../../../assets/images/card.png";
import sale from "../../../assets/images/sale.png";

const MainSaleScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { listSoldInvoice } = useSelector((state) => state.requestSlice);
  const { preloader } = useSelector((state) => state.requestSlice);
  const { data } = useSelector((state) => state.saveDataSlice);
  const { infoKassa } = useSelector((state) => state.requestSlice);

  const getData = () => {
    dispatch(getListSoldInvoice(data?.seller_guid));
    dispatch(createInvoiceTT(data?.seller_guid));
  };

  useEffect(() => {
    getData();
  }, []);

  const saleProd = () => {
    navigation.navigate("SalePointScreen", { invoice_guid: infoKassa?.guid });
    //// перенаправляю на страницу продажи с guid накладной, куда нуэно записать нынешние продажи
    dispatch(saleDiscountFN({ bonuse: 0, user_guid: 0 })); //// сбрасываю бонусы карт пользователя
  };

  const addInfoCards = () => navigation.navigate("AddCardScreen");
  //// перенаправляю на страницу добавления карты

  return (
    <SafeAreaView style={styles.listSoldsProd}>
      <View style={styles.saleActionBlock}>
        <TouchableOpacity style={styles.saleBlock} onPress={saleProd}>
          <Text style={styles.cardTitle}>Продажа товара</Text>
          <Image source={sale} style={styles.saleBlockImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardsBlock} onPress={addInfoCards}>
          <Text style={styles.cardTitle}>Привязать карту</Text>
          <Image source={card} style={styles.cardsBlockImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.selectBlock}>
        <Text style={styles.title}>История продаж</Text>
        {listSoldInvoice?.length === 0 ? (
          <Text style={styles.noneData}>Продажи за смену отсутствуют</Text>
        ) : (
          <FlatList
            data={listSoldInvoice}
            renderItem={({ item, index }) => (
              <AllHistoryInvoice
                item={item}
                index={index}
                keyLink={"SoldProdHistoryScreen"}
                navigation={navigation}
              />
            )}
            keyExtractor={(item) => `${item?.guid}`}
            refreshControl={
              <RefreshControl refreshing={preloader} onRefresh={getData} />
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MainSaleScreen;
