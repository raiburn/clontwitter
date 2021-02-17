import axios from "axios";


const createTweet = async (tweetMessage) => {
        let f = new Date();
        f=(f.getFullYear() + "/" + (f.getMonth() +1) + "/" + f.getDate());
      try{
        const result = await axios.post(`${window.location.protocol}//${window.location.hostname}:8000/api/tweets/`,{
              message: tweetMessage,
              created_at: f,
              users: '5fb8be510c03ec07c464646a'
            })
      }
      catch(error) {
        console.log(error);
      }
    }
export default createTweet;