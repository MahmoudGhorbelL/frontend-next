import NewCategorie from "@/components/admin/newCategorie";
import { fetchCategories } from "@/services/CategorieService"

const NewCategoriePage = async () => {
    return (
        <div>
            <NewCategorie />
        </div>
    )
}
export default NewCategoriePage
