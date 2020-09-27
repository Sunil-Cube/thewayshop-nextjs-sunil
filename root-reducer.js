import {combineReducers} from "redux";
import { OurTeamReducer } from "./components/Layout/components/OurTeam/OurTeam.reducers";
import ShopCategoriesReducer from "./components/Layout/components/ShopCategories/ShopCategories.reducer";
import cartReducer from "./reducers/cart";


export const rootReducer = combineReducers({
    teamMembers : OurTeamReducer,
    shopCategories : ShopCategoriesReducer,
    cart : cartReducer
})


