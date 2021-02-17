import axios from "axios";


const Auth = async (userData) => {
        try{
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}login/`,{
              username:userData.username,
              password: userData.password
            })
            console.log(data);
           window.localStorage.setItem("token", data.token);
      }
      catch(error) {
        console.log(error);
      }
    }
export default Auth;