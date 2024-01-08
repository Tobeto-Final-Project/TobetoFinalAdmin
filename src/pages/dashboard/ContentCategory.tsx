import { object, string } from "yup";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";
import { CreateContentCategoryRequest, UpdateContentCategoryRequest } from "../../models/requests/dashboard/contentCategories/ContentCategoryRequests";
import ContentCategoryService from "../../services/dashboard/contentCategories/ContentCategoryService";
import { CreateInputTypes, UpdateInputTypes, BaseAdminComponentRequirements } from "../../utils/requirements/form/formRequirementsAbstract";

type Props = {};

const ContentCategory = (props: Props) => {
    const createContentCategoryInitialValues: CreateContentCategoryRequest = {
        name: ''
    };
    const updateContentCategoryInitialValues: UpdateContentCategoryRequest = {
        id: '',
        name: ''
    };
    const createContentCategoryInputTypes: CreateInputTypes[] = [
        { name: 'name', label: 'Video Kategori Adı' }
    ];
    const updateContentCategoryInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: 'Video Kategori ID'},
        { name: 'name', label: 'Video Kategori Adı' }
    ];
    const createContentCategoryValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });
    const updateContentCategoryValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });

    let ModelNameService: ContentCategoryService = new ContentCategoryService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createContentCategoryInputTypes,
        updateInputTypes: updateContentCategoryInputTypes,
        createInitialValues: createContentCategoryInitialValues,
        updateInitialValues: updateContentCategoryInitialValues,
        createValidationSchema: createContentCategoryValidationSchema,
        updateValidationSchema: updateContentCategoryValidationSchema,
        componentHeader: "Video Kategori",
        service: ModelNameService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default ContentCategory;