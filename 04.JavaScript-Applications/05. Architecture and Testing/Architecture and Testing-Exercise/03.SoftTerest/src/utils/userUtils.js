function setUser(data){
    sessionStorage.setItem('userData', JSON.stringify(data));
}
function getUser(){
    return JSON.parse(sessionStorage.getItem('userData'));
}
function getUserId(){
const userData=getUser();
return userData._id;
}

function clear(){
   sessionStorage.removeItem('userData');
}
export const userUtils= {setUser,getUser,getUserId,clear}