////// hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

////// tags
import { TouchableOpacity, View, Text } from "react-native";

////// fns
import { clearListCategory } from "../../../store/reducers/requestSlice";
import { clearListProductTT } from "../../../store/reducers/requestSlice";
import { createInvoiceTT } from "../../../store/reducers/requestSlice";
import { clearTemporaryData } from "../../../store/reducers/stateSlice";
import { changeActiveSelectCategory } from "../../../store/reducers/stateSlice";
import { changeActiveSelectWorkShop } from "../../../store/reducers/stateSlice";

/////// components
import EveryInvoiceSale from "../../../components/SaleProd/EveryInvoiceSale/EveryInvoiceSale";

/////// style
import styles from "./style";

export const SalePointScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { infoKassa } = useSelector((state) => state.requestSlice);
  const { data } = useSelector((state) => state.saveDataSlice);

  const getData = () => dispatch(createInvoiceTT(data?.seller_guid));

  useEffect(() => {
    if (!route.params?.restart) {
      //// true - я добавляю продукт в уже созданную накладную, где ранее уже были добавлены товары
      //// false - накладная только что была создана и
      getData();
    }
    dispatch(clearTemporaryData()); // очищаю активный продукт

    return () => {
      dispatch(clearListProductTT());
      dispatch(clearListCategory());
      ///// очищаю список категрий и продуктов
      dispatch(changeActiveSelectCategory(""));
      /// очищаю категории, для сортировки товаров по категориям
      dispatch(changeActiveSelectWorkShop(""));
      /// очищаю цеха, для сортировки товаров по категориям
    };
  }, []);

  const listProdSale = () => {
    navigation.navigate("SoldProductScreen", { invoice_guid: infoKassa?.guid });
  };

  return (
    <View style={styles.parentBlock}>
      <TouchableOpacity onPress={listProdSale} style={styles.arrow}>
        <Text style={styles.textBtn}>Список выбранных товаров</Text>
        <View style={styles.arrowInner}></View>
      </TouchableOpacity>
      <EveryInvoiceSale navigation={navigation} />
    </View>
  );
};
