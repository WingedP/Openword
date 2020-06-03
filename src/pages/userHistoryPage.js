import React from 'react'





export default function UserHistoryPage() {
const [userCart,setUserCart]=({})

// 1 GET request for User (you, since it's your history page)
// 1 GET request for Cart from user
const getUserCarts = async (e) => {
    const res = await fetch(process.env.REACT_APP_SERVER + "/users/me/history", {
      method: "GET",    
      headers: {
        "Content-Type": "application/json"
      },
    });
    if(res.status===200){
      const body = await res.json();
      setUserCart(body.data)      
} 
    else (alert("error in getCategory."))  
  };


// case 1: (someone asks for your confirmation, you need to confirm)
// case 2: (you asks the other user to confirm your borrow form, it's pending or shit)
// might need 1 GET request for... 



    return (
        <div>
            USER HISTORY PAGE HERE!
        </div>
    )
}
