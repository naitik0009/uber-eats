import React,{createContext} from "react";
import { RestaurantData } from '../services/home/restaurant';

export const StateContext = createContext();
export const StateProvider = ({children})=>{
    const [restaurantData,setData] = React.useState(RestaurantData);
    const [city,setCity] = React.useState("hollywood");
    const [activeTab,setActiveTab] = React.useState("Delivery");
    return (
        <StateContext.Provider value={{restaurantData,setData,city,setCity,activeTab,setActiveTab}}>{children}</StateContext.Provider>
    );
}