
import { object, string } from "yup";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";
import { CreateLanguageRequest, UpdateLanguageRequest } from "../../models/requests/dashboard/languages/LanguageRequests";
import LanguageService from "../../services/dashboard/languages/LanguageService";
import { CreateInputTypes, UpdateInputTypes, BaseAdminComponentRequirements } from "../../utils/requirements/form/formRequirementsAbstract";

type Props = {};

const Language = (props: Props) => {
    const createLanguageInitialValues: CreateLanguageRequest = {
        name: ''
    };
    const updateLanguageInitialValues: UpdateLanguageRequest = {
        id: '',
        name: ''
    };
    const createLanguageInputTypes: CreateInputTypes[] = [
        { name: 'name', label: 'Dil Adı' }
    ];
    const updateLanguageInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: 'Dil Id'},
        { name: 'name', label: 'Dil Adı' }
    ];
    const createLanguageValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });
    const updateLanguageValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });

    let ModelNameService: LanguageService = new LanguageService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createLanguageInputTypes,
        updateInputTypes: updateLanguageInputTypes,
        createInitialValues: createLanguageInitialValues,
        updateInitialValues: updateLanguageInitialValues,
        createValidationSchema: createLanguageValidationSchema,
        updateValidationSchema: updateLanguageValidationSchema,
        componentHeader: "Dil",
        service: ModelNameService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default Language;