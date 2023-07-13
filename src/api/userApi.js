import axiosClient from "./axiosClient";

const userApi={
    createAccount(data){
        const url="/users";
        return axiosClient.post(url,data)
    }
    
}
export default userApi;