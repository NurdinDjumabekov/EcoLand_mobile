//// hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//// tags
import { FlatList, RefreshControl } from "react-native";
import { Text, View } from "react-native";

//// redux
import {
  changeInfoKassaSale,
  getListSoldProd,
} from "../../../store/reducers/requestSlice";

//// helpers
import { formatCount, sumSoputkaProds } from "../../../helpers/amounts";

/////components
import ResultCounts from "../../../common/ResultCounts/ResultCounts";
import { ViewButton } from "../../../customsTags/ViewButton";

//// style
import styles from "./style";

export const SoldProdHistoryScreen = ({ navigation, route }) => {
  //// история каждой накладной продажи, история продаж
  const dispatch = useDispatch();
  const { guidInvoice } = route.params;

  const { preloader, listSoldProd } = useSelector(
    (state) => state.requestSlice
  );

  useEffect(() => {
    navigation.setOptions({ title: `${listSoldProd?.list?.[0]?.date}` });
  }, [listSoldProd?.list?.[0]?.date]);

  const getData = () => dispatch(getListSoldProd(guidInvoice));

  useEffect(() => {
    getData();
  }, [guidInvoice]);

  const status = listSoldProd?.status == 0; //// 0 - не подтвреждён, 1 - подтверждён

  const confirmSale = () => {
    ///// перехожу на страницу добавления товара в накладную продажи
    navigation.navigate("SoldProductScreen", { invoice_guid: guidInvoice });
  };

  const addTovar = () => {
    ///// перехожу на страницу подтверждения продажи
    navigation.navigate("SalePointScreen", { restart: true });
    dispatch(changeInfoKassaSale({ guid: guidInvoice, codeid: "" }));
    //// заренее подставляю guid накладной куда надо добавить товары
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.historyParent}>
          <FlatList
            data={listSoldProd?.list}
            renderItem={({ item, index }) => (
              <View style={styles.everyInner}>
                <View style={styles.mainData}>
                  <View style={styles.mainDataInner}>
                    <Text style={styles.titleNum}>{index + 1}</Text>
                    <Text style={styles.sum}>
                      {item?.sale_price} сом х {item?.count} {item?.unit} ={" "}
                      {formatCount(item?.total_soputka)} сом
                    </Text>
                  </View>
                </View>
                <Text style={styles.title}>{item?.product_name}</Text>
              </View>
            )}
            keyExtractor={(item, index) => `${item.guid}${index}`}
            refreshControl={
              <RefreshControl refreshing={preloader} onRefresh={getData} />
            }
          />
        </View>

        <View style={styles.actionBlock}>
          <ResultCounts list={listSoldProd?.list} />
          {!!listSoldProd?.user_bonuse && (
            <Text style={styles.discount}>
              Оплачено бонусами: {listSoldProd?.user_bonuse} сом
            </Text>
          )}

          <Text style={styles.totalItemSumm}>
            Сумма продажи: {sumSoputkaProds(listSoldProd?.list)} сом
          </Text>

          {status && (
            <View style={styles.actionBlockInner}>
              <ViewButton styles={styles.addCard} onclick={confirmSale}>
                Подвердить продажу
              </ViewButton>
              <ViewButton styles={styles.endSaleBtn} onclick={addTovar}>
                Добавить товар
              </ViewButton>
            </View>
          )}
        </View>
      </View>
    </>
  );
};
