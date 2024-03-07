/* eslint-disable import/no-anonymous-default-export */
import axios from './axiosConfig.ts'; 
// axios.defaults.baseURL=process.env.REACT_APP_URL;
// axios.defaults.baseURL="https://todo-api-server-ufp4.onrender.com";
const apiUrl = "https://todo-api-server-ufp4.onrender.com"

export default {
  
  getTasks: async () => {
    console.log(`${apiUrl}/items`);
    // const result = await axios.get(`${apiUrl}/items`) 
    const result = await axios.get("https://todo-api-server-ufp4.onrender.com/items")
    .then(Request=> console.log(Request))
    console.log(result.data);   
    console.log(result.request);  
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    try{
      const result = await axios.post(`/items`,{"Name":name} )    
      return result.data;
    }
    catch(error)
    {
      console.error(error);
    }
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    await axios.put(`/items/${id}?IsComplete=${isComplete}`)
    return {};
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    await axios.delete(`/items/${id}`)
  }
};
