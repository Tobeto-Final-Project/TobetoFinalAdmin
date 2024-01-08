import { object, string } from "yup";
import { CreateTagRequest, UpdateTagRequest } from "../../models/requests/dashboard/tags/TagRequests";
import { BaseAdminComponentRequirements, CreateInputTypes, UpdateInputTypes } from "../../utils/requirements/form/formRequirementsAbstract";
import TagService from "../../services/dashboard/tags/TagService";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";

type Props = {};

const Tag = (props: Props) => {
    const createTagInitialValues: CreateTagRequest = {
        name: ''
    };
    const updateTagInitialValues: UpdateTagRequest = {
        id: '',
        name: ''
    };
    const createTagInputTypes: CreateInputTypes[] = [
        { name: 'name', label: 'Etiket İsmi' }
    ];
    const updateTagInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: 'Etiket Id', value: '' },
        { name: 'name', label: 'Etiket İsmi', value: '' }
    ];
    const createTagValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });
    const updateTagValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });

    let tagService: TagService = new TagService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createTagInputTypes,
        updateInputTypes: updateTagInputTypes,
        createInitialValues: createTagInitialValues,
        updateInitialValues: updateTagInitialValues,
        createValidationSchema: createTagValidationSchema,
        updateValidationSchema: updateTagValidationSchema,
        componentHeader: "Etiket ",
        service: tagService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default Tag;