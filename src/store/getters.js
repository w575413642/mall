import { stat } from "fs";

const getters = {
    sidebar: state => state.app.sidebar,
    errorMsg: state => state.app.error,
    productShopping: state => state.user.shoppingCar,
    userMsg:state => state.user.userMsg
    // ...states
  }
  export default getters
  