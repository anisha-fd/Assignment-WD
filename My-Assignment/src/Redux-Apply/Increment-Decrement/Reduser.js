

export const x =(state=12,action)=>{
    console.log(action.type);

   switch (action.type) {
    case "increment":
        return state+1
    case "decrement":
        return state-1    
   
    default:
        return state;
   }
    
}