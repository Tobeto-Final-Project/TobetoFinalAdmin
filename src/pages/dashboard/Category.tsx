import { object, string } from "yup";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";
import { CreateCategoryRequest, UpdateCategoryRequest } from "../../models/requests/dashboard/categories/CategoryRequests";
import CategoryService from "../../services/dashboard/categories/CategoryService";
import { CreateInputTypes, UpdateInputTypes, BaseAdminComponentRequirements } from "../../utils/requirements/form/formRequirementsAbstract";

type Props = {};

const Category = (props: Props) => {
    const createCategoryInitialValues: CreateCategoryRequest = {
        name: ''
    };
    const updateCategoryInitialValues: UpdateCategoryRequest = {
        id: '',
        name: ''
    };
    const createCategoryInputTypes: CreateInputTypes[] = [
        { name: 'name', label: 'Kategori Adı' }
    ];
    const updateCategoryInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: ''},
        { name: 'name', label: 'Kategori Adı' }
    ];
    const createCategoryValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });
    const updateCategoryValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });

    let ModelNameService: CategoryService = new CategoryService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createCategoryInputTypes,
        updateInputTypes: updateCategoryInputTypes,
        createInitialValues: createCategoryInitialValues,
        updateInitialValues: updateCategoryInitialValues,
        createValidationSchema: createCategoryValidationSchema,
        updateValidationSchema: updateCategoryValidationSchema,
        componentHeader: "Kategori",
        service: ModelNameService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default Category;