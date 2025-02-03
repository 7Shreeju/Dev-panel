import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export const AuthContext = createContext();

export  const Authprovider = ({children, tempname }) =>{

    const [token, setToken ] = useState(localStorage.getItem("token"));
    const [token1, setToken1 ] = useState(localStorage.getItem("tokenotp"));
    const [currentTempname, setCurrentTempname] = useState(localStorage.getItem("tempname") || tempname); 

    const storeTokenInLSotp = (serverToken1) => {
        setToken1(serverToken1);
        return localStorage.setItem('tokenotp',serverToken1);
    };

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token',serverToken);
    };
    let isLoggedIn = !!token;

    const LogoutUser =() =>{
        setToken("");
        return localStorage.removeItem('token');
    };

    const Destroyotpuser =() =>{
        setToken1("");
        return localStorage.removeItem('tokenotp');
    };

    useEffect(() => {
        if (tempname && tempname !== currentTempname) { 
            localStorage.setItem("tempname", tempname);
            setCurrentTempname(tempname); 
            fetchData(tempname);
        }
    }, [tempname]);

    const fetchData = async (id) => {
        // const { tempname } = useParams();
        // localStorage.setItem('tempname',tempname);

        // const id= localStorage.getItem("tempname");
        try {
          const response = await fetch(`http://localhost:5000/api/custom/gettemplatedata/${id}`,{
            method:"GET",
          }); 
          // const data = await response.json();
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }else{
            console.error("success");
          }

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };



    return (
        <AuthContext.Provider value={{isLoggedIn, currentTempname , storeTokenInLS,storeTokenInLSotp, Destroyotpuser,LogoutUser,fetchData  }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}