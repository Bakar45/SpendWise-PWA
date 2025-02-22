import { createStore, combineReducers } from "redux";

const initialData = {
  selectedCategory: [],
  calculatedValue: "",
  showNavbar: "",
  Heading: "Expense Manager",
  Data: JSON.parse(localStorage.getItem("Budgets") as any)
};

function Process(oldData = initialData, newData: any) {

  if (newData.type === 'SELECTED_ID') {

    oldData.selectedCategory = newData.payload;

  } else if (newData.type == "CALCULATED_VALUE") {
    oldData.calculatedValue = newData.payload

  } else if (newData.type == "HIDE_NAVBAR") {
    oldData.showNavbar = newData.payload

  } else if (newData.type == "SHOW_NAVBAR") {
    oldData.showNavbar = "show"
    // oldData.HeadingIndex=5

  } else if (newData.type == "HEADING") {
    oldData.Heading = newData.payload

  } else if (newData.type === "DEL_BUDGET") {
    const Budgets = JSON.parse(localStorage.getItem("Budgets") as any)

    const a = Budgets.filter((item: any) => {
      return item != Budgets[newData.payload]
    })
    oldData.Data = localStorage.setItem('Budgets', JSON.stringify(a));
  }
  return { ...oldData };
}

let data = combineReducers({ Process });

export let myStore = createStore(data);


