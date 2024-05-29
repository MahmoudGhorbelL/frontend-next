import NewProduct from "@/components/admin/newProductComponent";
import { fetchCategories } from "@/services/CategorieService"
const getcategories = async () => {
    const data = await fetchCategories()
    return data;
}
const NewProductPage = async () => {
    const categories = await getcategories()
    return (
        <div>
            <NewProduct categories={categories} />
        </div>
    )
}
export default NewProductPage
