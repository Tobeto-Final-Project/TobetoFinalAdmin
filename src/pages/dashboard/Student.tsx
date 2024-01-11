import { object, string } from "yup";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";
import { CreateStudentRequest, UpdateStudentRequest } from "../../models/requests/dashboard/students/StudentRequests";
import StudentService from "../../services/dashboard/students/StudentService";
import { CreateInputTypes, UpdateInputTypes, BaseAdminComponentRequirements } from "../../utils/requirements/form/formRequirementsAbstract";

type Props = {};

const Student = (props: Props) => {
    const createStudentInitialValues: CreateStudentRequest = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };
    const updateStudentInitialValues: UpdateStudentRequest = {
        id: '',
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };
    const createStudentInputTypes: CreateInputTypes[] = [
        { name: 'firstName', label: 'Adı' },
        { name: 'lastName', label: 'SoyAdı' },
        { name: 'email', label: 'Email' },
        { name: 'password', label: 'Şifre' }
    ];
    const updateStudentInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: 'id'},
        { name: 'firstName', label: 'Adı' },
        { name: 'lastname', label: 'SoyAdı' },
        { name: 'email', label: 'Email' },
        { name: 'password', label: 'Şifre' }
    ];
    const createStudentValidationSchema = object({
        firstName: string().required('İsim Alanı Zorunludur*')
    });
    const updateStudentValidationSchema = object({
        firstName: string().required('İsim Alanı Zorunludur*')
    });

    let ModelNameService: StudentService = new StudentService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createStudentInputTypes,
        updateInputTypes: updateStudentInputTypes,
        createInitialValues: createStudentInitialValues,
        updateInitialValues: updateStudentInitialValues,
        createValidationSchema: createStudentValidationSchema,
        updateValidationSchema: updateStudentValidationSchema,
        componentHeader: "Sadece eklemek men Öğrenciler",
        service: ModelNameService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default Student;