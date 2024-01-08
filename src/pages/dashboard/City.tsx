import { object, string } from "yup";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";
import { CreateCityRequest, UpdateCityRequest } from "../../models/requests/dashboard/cities/CityRequests";
import CityService from "../../services/dashboard/cities/CityService";
import { CreateInputTypes, UpdateInputTypes, BaseAdminComponentRequirements } from "../../utils/requirements/form/formRequirementsAbstract";

type Props = {};

const City = (props: Props) => {
    const createCityInitialValues: CreateCityRequest = {
        name: ''
    };
    const updateCityInitialValues: UpdateCityRequest = {
        id: '',
        name: ''
    };
    const createCityInputTypes: CreateInputTypes[] = [
        { name: 'name', label: 'Şehir Adı' }
    ];
    const updateCityInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: 'Şehir Id'},
        { name: 'name', label: 'Şehir Adı' }
    ];
    const createCityValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });
    const updateCityValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });

    let ModelNameService: CityService = new CityService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createCityInputTypes,
        updateInputTypes: updateCityInputTypes,
        createInitialValues: createCityInitialValues,
        updateInitialValues: updateCityInitialValues,
        createValidationSchema: createCityValidationSchema,
        updateValidationSchema: updateCityValidationSchema,
        componentHeader: "Şehir",
        service: ModelNameService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default City;