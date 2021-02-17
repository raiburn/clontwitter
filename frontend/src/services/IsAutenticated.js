import  { Redirect }  from "react-router-dom";

const isAutenticated = () => {
    if(localStorage.getItem('token') != null) {
        return true;
      } else {
        return (
            <Redirect to = "/"/>
        )
      }
}

export default isAutenticated;