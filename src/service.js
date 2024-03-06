/* eslint-disable import/no-anonymous-default-export */
import axios from './axiosConfig.ts'; 
axios.defaults.baseURL=process.env.REACT_APP_URL;
// const apiUrl = "http://localhost:5171"

export default {
  
  getTasks: async () => {
    const result = await axios.get(`/items`)    
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
