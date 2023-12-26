import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/Forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "#F78074", icon: "lamp" },
  { label: "Cars", value: 2, backgroundColor: "#F8A95C", icon: "car-back" },
  { label: "Camera", value: 3, backgroundColor: "#FDD65A", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "#6FD294", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#65C6C3",
    icon: "shoe-heel",
  },
  { label: "Sports", value: 6, backgroundColor: "#65B0F2", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#5B8BEC",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "#A87FEB",
    icon: "book-open-variant",
  },
  { label: "Other", value: 9, backgroundColor: "#8697AD", icon: "tab" },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          name="category"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
