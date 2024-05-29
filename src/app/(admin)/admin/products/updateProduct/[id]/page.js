import { fetchCategories } from "@/services/CategorieService"
import { fetchBookById } from "@/services/BookService"
import UpdateProduct from '@/components/admin/updateProductComponent';
const getcategories = async () => {
    const data = await fetchCategories()
    return data;
}
const getbook = async (id) => {
    const data = await fetchBookById(id)
    return data;
}
const ProductUpdatePage = async ({ params }) => {
    const categories = await getcategories();
    const book = await getbook(params.id)
    return (
        <div>
            <UpdateProduct book={book} categories={categories} />
        </div>
    )
}
export default ProductUpdatePage