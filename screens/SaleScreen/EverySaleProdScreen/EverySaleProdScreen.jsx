///// tags
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native";

///hooks
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

////components
import { ViewButton } from "../../../customsTags/ViewButton.jsx";
import { getEveryProd } from "../../../store/reducers/requestSlice.js";
import { addProductInvoiceTT } from "../../../store/reducers/requestSlice.js";

////style
import styles from "./style.js";

const EverySaleProdScreen = ({ navigation, route }) => {
  const { obj } = route.params;

  const dispatch = useDispatch();
  const refInput = useRef(null);

  const [sum, setSum] = useState("");

  const { infoKassa } = useSelector((state) => state.requestSlice);
  const { data } = useSelector((state) => state.saveDataSlice);
  const { everyProdSale } = useSelector((state) => state.requestSlice);

  const onChange = (text) => {
    if (/^\d*\.?\d*$/.test(text)) {
      // Проверяем, не является ли точка или запятая первым символом
      if (text === "." || text?.indexOf(".") === 0) {
        return;
      }
      setSum(text);
    }
  };

  useEffect(() => {
    if (!!obj?.guid) {
      setTimeout(() => {
        refInput?.current?.focus();
      }, 400);
    }

    dispatch(getEveryProd({ guid: obj?.guid, seller_guid: data?.seller_guid }));
    /////// получаю каждый продукт для продажи
  }, []);

  const check_unit = everyProdSale?.unit_codeid == 1;
  const { sale_price_discount } = everyProdSale;

  const check_discount = sale_price_discount != 0 || !!sale_price_discount;

  const typeProd = `Введите ${check_unit ? "количество" : "вес"}`;

  const addInInvoice = () => {
    if (sum == "" || sum == 0) {
      Alert.alert(typeProd);
    } else {
      const { price, sale_price, count_type } = everyProdSale;

      const sendData = { guid: obj?.guid, count: sum, sale_price_discount };
      const invoice_guid = { invoice_guid: infoKassa?.guid };

      const data = { ...sendData, ...invoice_guid, price, sale_price };
      dispatch(addProductInvoiceTT({ data, navigation, count_type }));
      ///// продаю товар
    }
  };

  const onClose = () => navigation.goBack();

  const typeVes = {
    1: `Введите ${check_unit ? "итоговое количество" : "итоговый вес"} товара`,
    2: "Введите итоговую сумму товара",
  };

  return (
    <View style={styles.parent}>
      <Text style={styles.title}>{everyProdSale?.product_name}</Text>
      <TouchableOpacity style={styles.krest} onPress={onClose}>
        <View style={[styles.line, styles.deg]} />
        <View style={[styles.line, styles.degMinus]} />
      </TouchableOpacity>
      <View style={styles.addDataBlock}>
        <View style={styles.inputBlock}>
          <Text style={styles.inputTitle}>
            {check_discount ? "Скидочная цена " : "Цена продажи "}
            {everyProdSale?.unit && `за ${everyProdSale?.unit}`}
          </Text>
          <View style={styles.inputPrice}>
            {check_discount ? (
              <>
                <Text style={styles.priceNone}>
                  {everyProdSale?.sale_price} сом
                </Text>
                <Text style={styles.priceDiscount}>
                  {sale_price_discount || 0} сом
                </Text>
              </>
            ) : (
              <Text style={styles.price}>{everyProdSale?.sale_price} сом</Text>
            )}
          </View>
        </View>
        <View style={styles.inputBlock}>
          <Text style={styles.inputTitle}>
            {typeVes?.[+everyProdSale?.count_type]}
          </Text>
          <TextInput
            style={styles.input}
            ref={refInput}
            value={sum}
            onChangeText={onChange}
            keyboardType="numeric"
            maxLength={8}
          />
        </View>
      </View>
      <ViewButton styles={styles.btnAdd} onclick={addInInvoice}>
        Продать товар
      </ViewButton>
    </View>
  );
};

export default EverySaleProdScreen;
