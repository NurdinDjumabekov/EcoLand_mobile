////tags
import { Text, View } from "react-native";

////hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

///components
import ConfirmationModal from "../../../common/ConfirmationModal/ConfirmationModal";
import { ViewButton } from "../../../customsTags/ViewButton";
import { MyTable } from "../../../common/MyTable/MyTable";
import ResultCounts from "../../../common/ResultCounts/ResultCounts";

///states
import { getMyEveryInvoiceReturn } from "../../../store/reducers/requestSlice";
import { acceptInvoiceReturn } from "../../../store/reducers/requestSlice";

////helpers
import { formatCount, sumSaleProds } from "../../../helpers/amounts";

////style
import styles from "./style";
import { TablesRevision } from "../../Tables/TablesRevision/TablesRevision";

export const DetailedInvoiceReturn = ({ route, navigation }) => {
  const { guidInvoice } = route.params; ///// guid каждой накладной с проданными товарами

  const dispatch = useDispatch();

  const [acceptOk, setAcceptOk] = useState(false); //// для модалки приняти накладной
  const clickOkay = () => setAcceptOk(true);

  const { everyInvoiceReturn } = useSelector((state) => state.requestSlice);
  const { acceptConfirmInvoice } = useSelector((state) => state.stateSlice);
  //// delete
  const { data } = useSelector((state) => state.saveDataSlice);

  const acceptInvoiceFN = () => {
    ///// для принятия накладной торговой точкой
    const obj = { seller_guid: data?.seller_guid };

    const sendData = { ...obj, listReturn: everyInvoiceReturn, navigation };
    dispatch(acceptInvoiceReturn(sendData));
    setAcceptOk(false);
  };

  const getData = () => dispatch(getMyEveryInvoiceReturn(guidInvoice));

  useEffect(() => {
    navigation.setOptions({ title: everyInvoiceReturn?.[0]?.date });
  }, [everyInvoiceReturn]);

  useEffect(() => {
    getData();
  }, [guidInvoice]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TablesRevision list={everyInvoiceReturn} />
        <View style={styles.total}>
          <ResultCounts list={everyInvoiceReturn} />
          <Text style={styles.totalItemCount}>
            Сумма: {formatCount(sumSaleProds(everyInvoiceReturn))} сом
          </Text>
          <ViewButton styles={styles.sendReturnProd} onclick={clickOkay}>
            Оформить возврат товара
          </ViewButton>
        </View>
      </View>
      <ConfirmationModal
        visible={acceptOk}
        message="Оформить возврат ?"
        onYes={acceptInvoiceFN}
        onNo={() => setAcceptOk(false)}
        onClose={() => setAcceptOk(false)}
      />
    </View>
  );
};
