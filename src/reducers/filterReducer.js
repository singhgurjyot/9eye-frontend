export const filterReducer=(selectedFilter='Category',action)=>{
    if(action.type==='SELECT_FILTER'){
        return action.payload
    }
    return selectedFilter
}