import { object, string } from "yup";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";
import { CreateInstructorRequest, UpdateInstructorRequest } from "../../models/requests/dashboard/instructors/InstructorRequests";
import InstructorService from "../../services/dashboard/instructors/InstructorService";
import { CreateInputTypes, UpdateInputTypes, BaseAdminComponentRequirements } from "../../utils/requirements/form/formRequirementsAbstract";

type Props = {};

const Instructor = (props: Props) => {
    const createInstructorInitialValues: CreateInstructorRequest = {
        firstName: '',
        lastName:'',
    };
    const updateInstructorInitialValues: UpdateInstructorRequest = {
        id: '',
        firstName: '',
        lastName:'',
    };
    const createInstructorInputTypes: CreateInputTypes[] = [
        { name: 'firstName', label: 'Öğretmen Adı' },
        { name: 'lastName', label: 'Öğretmen Soyadı' }
    ];
    const updateInstructorInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: 'Öğretmen Id'},
        { name: 'firstName', label: 'Öğretmen Adı' },
        { name: 'lastName', label: 'Öğretmen Soyadı' }
    ];
    const createInstructorValidationSchema = object({
        firstName: string().required('İsim Alanı Zorunludur*'),
        lastName: string().required('Soyİsim Alanı Zorunludur*')
    });
    const updateInstructorValidationSchema = object({
        firstName: string().required('İsim Alanı Zorunludur*')
        ,
        lastName: string().required('Soyİsim Alanı Zorunludur*')
    });

    let ModelNameService: InstructorService = new InstructorService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createInstructorInputTypes,
        updateInputTypes: updateInstructorInputTypes,
        createInitialValues: createInstructorInitialValues,
        updateInitialValues: updateInstructorInitialValues,
        createValidationSchema: createInstructorValidationSchema,
        updateValidationSchema: updateInstructorValidationSchema,
        componentHeader: "Öğretmen",
        service: ModelNameService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default Instructor;