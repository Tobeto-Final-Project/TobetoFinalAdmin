import { object, string } from "yup";
import { CreateSubTypeRequest, UpdateSubTypeRequest } from "../../models/requests/dashboard/subtypes/SubTypeRequests";
import { BaseAdminComponentRequirements, CreateInputTypes, UpdateInputTypes } from "../../utils/requirements/form/formRequirementsAbstract";
import SubTypeService from "../../services/dashboard/subtypes/SubTypeService";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";

type Props = {};

const SubType = (props: Props) => {
    const createSubTypeInitialValues: CreateSubTypeRequest = {
        name: ''
    };
    const updateSubTypeInitialValues: UpdateSubTypeRequest = {
        id: '',
        name: ''
    };
    const createSubTypeInputTypes: CreateInputTypes[] = [
        { name: 'name', label: 'Alt Kategori İsmi' }
    ];
    const updateSubTypeInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: 'Alt Kategori Id'},
        { name: 'name', label: 'Alt Kategori İsmi' }
    ];
    const createSubTypeValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });
    const updateSubTypeValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });

    let ModelNameService: SubTypeService = new SubTypeService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createSubTypeInputTypes,
        updateInputTypes: updateSubTypeInputTypes,
        createInitialValues: createSubTypeInitialValues,
        updateInitialValues: updateSubTypeInitialValues,
        createValidationSchema: createSubTypeValidationSchema,
        updateValidationSchema: updateSubTypeValidationSchema,
        componentHeader: "Alt Kategori",
        service: ModelNameService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default SubType;