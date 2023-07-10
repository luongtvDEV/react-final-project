import axiosClient from "./axiosClient";

const productApi = {
    getAllProduct(){
        const url = '/products';
        return axiosClient.get(url)
    },
    getProductPerPage(page) {
        const url = `/products?_page=${page}&_limit=5`;
        return axiosClient.get(url)
    },
    addNewProduct(data){
        const url = '/products';
        return axiosClient.post(url, data)
    },
    getProductById(id){
        const url=`/products/${id}`;
        return axiosClient.get(url)
    },
    updateProduct(id, data){
        const url=`/products/${id}`;
        return axiosClient.put(url, data)
    },
    deleteProducts(id){
        const url=`/products/${id}`;
        return axiosClient.delete(url)
    }
};
export default productApi;