import { object, string } from "yup";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";
import { CreateSkillRequest, UpdateSkillRequest } from "../../models/requests/dashboard/skills/SkillRequests";
import SkillService from "../../services/dashboard/skills/SkillService";
import { CreateInputTypes, UpdateInputTypes, BaseAdminComponentRequirements } from "../../utils/requirements/form/formRequirementsAbstract";

type Props = {};

const Skill = (props: Props) => {
    const createSkillInitialValues: CreateSkillRequest = {
        name: ''
    };
    const updateSkillInitialValues: UpdateSkillRequest = {
        id: '',
        name: ''
    };
    const createSkillInputTypes: CreateInputTypes[] = [
        { name: 'name', label: 'Yetenek Adı' }
    ];
    const updateSkillInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: 'Yetenek Id'},
        { name: 'name', label: 'Yetenek Adı' }
    ];
    const createSkillValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });
    const updateSkillValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });

    let ModelNameService: SkillService = new SkillService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createSkillInputTypes,
        updateInputTypes: updateSkillInputTypes,
        createInitialValues: createSkillInitialValues,
        updateInitialValues: updateSkillInitialValues,
        createValidationSchema: createSkillValidationSchema,
        updateValidationSchema: updateSkillValidationSchema,
        componentHeader: "Yetenek",
        service: ModelNameService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default Skill;