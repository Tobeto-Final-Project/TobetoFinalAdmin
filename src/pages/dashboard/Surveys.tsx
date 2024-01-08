import { object, string } from "yup";
import { CreateSurveyRequest, UpdateSurveyRequest } from "../../models/requests/dashboard/surveys/SurveyRequests";
import { BaseAdminComponentRequirements, CreateInputTypes, UpdateInputTypes } from "../../utils/requirements/form/formRequirementsAbstract";
import SurveyService from "../../services/dashboard/surveys/SurveyService";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";

type Props = {};

const Survey = (props: Props) => {
    const createSurveyInitialValues: CreateSurveyRequest = {
        name: '',
        startDate: undefined,
        endDate: undefined,
        surveyUrl: "",
        description: ""
    };
    const updateSurveyInitialValues: UpdateSurveyRequest = {
        id: '',
        name: '',
        startDate: undefined,
        endDate: undefined,
        surveyUrl: "",
        description: ""
    };
    const createSurveyInputTypes: CreateInputTypes[] = [
        { name: 'name', label: 'Anket Adı' },
        { name: 'startDate', label: 'Anket Başlangıç Tarihi' ,type:'datetime-local'},
        { name: 'endDate', label: 'Anket Bitiş Tarihi', type:'datetime-local'},
        { name: 'surveyUrl', label: 'Anket Sayfası' },
        { name: 'description', label: 'Anket Açıklaması' }
    ];
    const updateSurveyInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: 'Anket Id'},
        { name: 'name', label: 'Anket Adı' },
        { name: 'startDate', label: 'Anket Başlangıç Tarihi' ,type:'datetime-local'},
        { name: 'endDate', label: 'Anket Bitiş Tarihi',type:'datetime' },
        { name: 'surveyUrl', label: 'Anket Sayfası' },
        { name: 'description', label: 'Anket Açıklaması' }
    ];
    const createSurveyValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });
    const updateSurveyValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });

    let ModelNameService: SurveyService = new SurveyService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createSurveyInputTypes,
        updateInputTypes: updateSurveyInputTypes,
        createInitialValues: createSurveyInitialValues,
        updateInitialValues: updateSurveyInitialValues,
        createValidationSchema: createSurveyValidationSchema,
        updateValidationSchema: updateSurveyValidationSchema,
        componentHeader: "Anketler",
        service: ModelNameService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default Survey;