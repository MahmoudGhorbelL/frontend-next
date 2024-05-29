import { fetchCategoryById } from "@/services/CategorieService";
import UpdateCategorie from "@/components/admin/updateCategorie";

const getCategorie = async (id) => {
  const data = await fetchCategoryById(id);
  return data;
};

const CategorieUpdatePage = async ({ params }) => {
  const { id } = params; // Ensure you are destructuring the id correctly
  const categorie = await getCategorie(id);

  return (
    <div>
      <UpdateCategorie categorie={categorie} />
    </div>
  );
};

export default CategorieUpdatePage;