const initialState = {
    users: [{
        name:"",
        email:"",
        phoneNumber:""
    }
      ]
}
const UserReducer = (state = initialState, action)=> {
    switch(action.type){
    case 'ADD_USER': state.users.push(action?.payload);
    default:
        return state
     }
}
   
export default UserReducer;  
   
