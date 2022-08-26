import React from "react";

export const useLocalStorage = ({itemName,initialValue})=>{
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
    const [item,setItemValue] = React.useState(initialValue);
    
    React.useEffect(()=>{
        setTimeout(() => {
            try {

                let parseItem;
                
                if(localStorage.getItem(itemName)){
                    parseItem = JSON.parse(localStorage.getItem(itemName));
                }else{
                    localStorage.setItem(itemName,JSON.stringify(initialValue));
                    parseItem = initialValue;
                }
                
                setItemValue(parseItem);
                setLoading(false)
                
            } catch (error) {
                setError(error);
            }
        }, 2000);
    })

    const setItem = (newValue)=>{
        try {
            localStorage.setItem(itemName,JSON.stringify(newValue));
            setItemValue(newValue);
        } catch (error) {
            setError(error);
        }
    }

    return {item,setItem,loading,error}
}