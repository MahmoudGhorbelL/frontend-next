import Listproducts from '@/components/admin/listproducts';
import { fetchBooks } from "@/services/BookService"
const getProducts = async () => {
    const data = await fetchBooks()
    return data;
}
const ProductPage = async () => {
    const produits = await getProducts()
    return (
        <div className="container">
            <Listproducts produits={produits} />
        </div>
    )
}
export default ProductPage