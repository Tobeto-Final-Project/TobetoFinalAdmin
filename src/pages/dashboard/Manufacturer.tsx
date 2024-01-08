
import ManufacturerService from '../../services/dashboard/manufacturers/ManufacturerService';
import { BaseAdminComponentRequirements, CreateInputTypes, UpdateInputTypes } from '../../utils/requirements/form/formRequirementsAbstract';
import BaseAdminComponent from '../../components/dashboard/BaseAdminComponent';
import { CreateManufacturerRequest } from '../../models/requests/dashboard/manufacturers/CreateManufacturerRequest';
import { UpdateManufacturerRequest } from '../../models/requests/dashboard/manufacturers/UpdateManufacturerRequest';
import { object, string } from 'yup';


type Props = {

}

const Manufacturer = (props: Props) => {
    const createManufacturerInitialValues: CreateManufacturerRequest = {
        name: ''
    }; 
    const updateManufacturerInitialValues: UpdateManufacturerRequest = {
        id: '',
        name: ''
    }; 
    const createManufacturerInputTypes: CreateInputTypes[] = [
            { name: 'name', label: 'Yapıcı Firma İsmi' }
    ]; 
    const updateManufacturerInputTypes: UpdateInputTypes[] = [
            { name: 'id', label: 'Yapıcı Firma Id',value:'' },

            { name: 'name', label: 'Yapıcı Firma İsmi',value:'' },
    ]; 
    const createManufacturerValidationSchema = object({
            name: string().required("İsim Alanı Zorunludur*")
    }); 
    const updateManufacturerValidationSchema = object({
            name: string().required("İsim Alanı Zorunludur*")
     });

    let manufacturerService: ManufacturerService = new ManufacturerService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createManufacturerInputTypes,
        updateInputTypes: updateManufacturerInputTypes,
        createInitialValues: createManufacturerInitialValues,
        updateInitialValues: updateManufacturerInitialValues,
        createValidationSchema: createManufacturerValidationSchema,
        updateValidationSchema: updateManufacturerValidationSchema,
        componentHeader: "Yapıcı Firma",
        service: manufacturerService
    };




    return (<>
        <BaseAdminComponent requirement={requirements} />

    </>
    )
}

export default Manufacturer