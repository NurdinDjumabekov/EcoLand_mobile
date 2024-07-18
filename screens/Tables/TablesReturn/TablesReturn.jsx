/////// hooks
import React, { useRef, useState } from "react";

////// tags
import { FlatList, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

/////// components
import ReturnChangeCount from "../../../components/ReturnProd/ReturnChangeCount/ReturnChangeCount";

////style
import styles from "./style";

const TablesReturn = ({ list }) => {
  const [objTemporary, setObjTemporary] = useState({});

  const inputRef = useRef(null);

  const addTenporaryData = (item) => {
    setObjTemporary(item);

    setTimeout(() => {
      inputRef?.current?.focus();
    }, 1000);
  };

  return (
    <>
      <View style={styles.parentFlatList}>
        <View style={[styles.mainBlock, styles.more]}>
          <Text style={[styles.name, styles.moreText]}>Товар</Text>
          <Text style={[styles.price, styles.moreText]}>Цена</Text>
          <Text style={[styles.count, styles.moreText]}>Продано</Text>
          <Text style={[styles.count, styles.moreText]}>Возврат</Text>
        </View>
        <FlatList
          data={list}
          renderItem={({ item, index }) => (
            <View style={styles.mainBlock}>
              <Text style={styles.name}>
                {index + 1}. {item?.product_name}
              </Text>
              <Text style={styles.price}>{item?.sale_price}</Text>
              <Text style={styles.count}>{item?.count}</Text>
              <TouchableOpacity
                style={styles.countReturn}
                onPress={() => addTenporaryData(item)}
              >
                <Text style={styles.countReturnText}>{item?.returnProd}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => `${item.guid}${index}`}
        />
      </View>
      <ReturnChangeCount
        objTemporary={objTemporary}
        setObjTemporary={setObjTemporary}
        inputRef={inputRef}
      />
    </>
  );
};

export default TablesReturn;
