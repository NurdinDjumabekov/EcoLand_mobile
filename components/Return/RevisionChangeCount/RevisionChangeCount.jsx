///// tags
import { Text, View, TextInput, Modal, Alert } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { ViewButton } from "../../../customsTags/ViewButton";

///// hooks
import { useDispatch, useSelector } from "react-redux";

///// fns
import { changeEveryInvoiceReturn } from "../../../store/reducers/requestSlice";

////style
import styles from "./style";

const RevisionChangeCount = (props) => {
  const { objTemporary, setObjTemporary, inputRef } = props;

  const dispatch = useDispatch();

  const { everyInvoiceReturn } = useSelector((state) => state.requestSlice);

  const onClose = () => setObjTemporary({});

  const changeCount = () => {
    const newCountProd =
      objTemporary?.returnProd === "" ? 0 : objTemporary?.returnProd;

    const products = everyInvoiceReturn?.map((i) => ({
      ...i,
      returnProd: i?.guid === objTemporary?.guid ? newCountProd : i?.returnProd,
    }));

    for (let product of products) {
      if (product.returnProd > product.count) {
        Alert.alert(
          "Ошибка количества",
          `Количество возврата для товара "${product.product_name}" превышает проданное количество!`
        );
        return;
      }
    }

    dispatch(changeEveryInvoiceReturn(products));
    onClose();
  };

  const onChange = (text) => {
    if (/^\d*\.?\d*$/.test(text)) {
      setObjTemporary({ ...objTemporary, returnProd: text });
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={!!objTemporary?.product_guid}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.parennt}>
          <View style={styles.child}>
            <Text style={styles.title}>{objTemporary?.product_name} </Text>
            <TouchableOpacity style={styles.krest} onPress={() => onClose()}>
              <View style={[styles.line, styles.deg]} />
              <View style={[styles.line, styles.degMinus]} />
            </TouchableOpacity>
            <View style={styles.addDataBlock}>
              <View style={styles.inputBlock}>
                <Text style={styles.inputTitle}>
                  Введите{" "}
                  {objTemporary?.unit_codeid == 1
                    ? "кол-во товара"
                    : "вес товара"}{" "}
                  ({objTemporary?.unit})
                </Text>
                <TextInput
                  style={styles.input}
                  value={objTemporary?.returnProd?.toString()}
                  onChangeText={(text) => onChange(text)}
                  keyboardType="numeric"
                  maxLength={8}
                  ref={inputRef}
                />
              </View>
              <ViewButton styles={styles.btnAdd} onclick={changeCount}>
                Изменить
              </ViewButton>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default RevisionChangeCount;
