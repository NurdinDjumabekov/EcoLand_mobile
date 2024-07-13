/////// hooks
import React, { useRef, useState } from "react";

////// tags
import { FlatList, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

/////// components
import RevisionChangeCount from "../../../components/Return/RevisionChangeCount/RevisionChangeCount";

////style
import styles from "./style";

export const TablesRevision = ({ list }) => {
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
          <Text style={[styles.price, styles.moreText]}>Цена за 1шт</Text>
          <Text style={[styles.count, styles.moreText]}>Проданное кол-во</Text>
          <Text style={[styles.count, styles.moreText]}>Возврат (кол-во)</Text>
        </View>
        <FlatList
          data={list}
          renderItem={({ item, index }) => (
            <View style={styles.mainBlock}>
              <Text style={styles.name}>
                {index + 1}. {item?.product_name}
              </Text>
              <Text style={styles.price}>{item?.price}</Text>
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
      <RevisionChangeCount
        objTemporary={objTemporary}
        setObjTemporary={setObjTemporary}
        inputRef={inputRef}
      />
    </>
  );
};
