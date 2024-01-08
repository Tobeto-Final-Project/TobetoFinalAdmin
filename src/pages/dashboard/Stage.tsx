import { object, string } from "yup";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";
import { CreateStageRequest, UpdateStageRequest } from "../../models/requests/dashboard/stages/StageRequests";
import StageService from "../../services/dashboard/stages/StageService";
import { CreateInputTypes, UpdateInputTypes, BaseAdminComponentRequirements } from "../../utils/requirements/form/formRequirementsAbstract";

type Props = {};

const Stage = (props: Props) => {
    const createStageInitialValues: CreateStageRequest = {
        description: ''
    };
    const updateStageInitialValues: UpdateStageRequest = {
        id: '',
        description: ''
    };
    const createStageInputTypes: CreateInputTypes[] = [
        { name: 'description', label: 'Başvuru Açıklaması' }
    ];
    const updateStageInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: 'Başvuru Id'},
        { name: 'description', label: 'Başvuru Açıklaması' }
    ];
    const createStageValidationSchema = object({
        description: string().required('Description Alanı Zorunludur*')
    });
    const updateStageValidationSchema = object({
        description: string().required('Description Alanı Zorunludur*')
    });

    let ModelNameService: StageService = new StageService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createStageInputTypes,
        updateInputTypes: updateStageInputTypes,
        createInitialValues: createStageInitialValues,
        updateInitialValues: updateStageInitialValues,
        createValidationSchema: createStageValidationSchema,
        updateValidationSchema: updateStageValidationSchema,
        componentHeader: "Başvuru Aşamaları",
        service: ModelNameService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default Stage;