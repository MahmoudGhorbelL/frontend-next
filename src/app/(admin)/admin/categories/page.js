import Listcategories from '@/components/admin/listCategories';
import { fetchCategories } from "@/services/CategorieService"
const getCategories = async () => {
    const data = await fetchCategories()
    return data;
}
const CategoriePage = async () => {
    const categories = await getCategories()
    return (
        <div className="container">
            <Listcategories categories={categories} />
        </div>
    )
}
export default CategoriePage