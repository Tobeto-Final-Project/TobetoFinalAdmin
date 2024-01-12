import { object, string } from "yup";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";
import { CreateExamRequest, UpdateExamRequest } from "../../models/requests/dashboard/exams/ExamRequests";
import ExamService from "../../services/dashboard/exams/ExamService";
import { CreateInputTypes, UpdateInputTypes, BaseAdminComponentRequirements } from "../../utils/requirements/form/formRequirementsAbstract";

type Props = {};

const Exam = (props: Props) => {
    const createExamInitialValues: CreateExamRequest = {
        name: '',
        isActive:false,
        examUrl:''
    };
    const updateExamInitialValues: UpdateExamRequest = {
        id: '',
        name: '',
        isActive:null,
        examUrl:''
    };
    
    const createExamInputTypes: CreateInputTypes[] = [
        { name: 'name', label: 'Sınav Adı' },
        { name: 'isActive', label: 'Sınav Aktif Mi', type:'checkbox' },
        { name: 'examUrl', label: 'Sınav Url' },
    ];
    const updateExamInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: 'Sınav Id'},
        { name: 'name', label: 'Sınav Adı' },
        { name: 'isActive', label: 'Sınav Aktif Mi'},
        { name: 'examUrl', label: 'Sınav Url' },
    ];
    const createExamValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });
    const updateExamValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });

    let ModelNameService: ExamService = new ExamService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createExamInputTypes,
        updateInputTypes: updateExamInputTypes,
        createInitialValues: createExamInitialValues,
        updateInitialValues: updateExamInitialValues,
        createValidationSchema: createExamValidationSchema,
        updateValidationSchema: updateExamValidationSchema,
        componentHeader: "Sınav",
        service: ModelNameService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default Exam;