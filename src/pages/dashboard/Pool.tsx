import { object, string } from "yup";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";
import { CreatePoolRequest, UpdatePoolRequest } from "../../models/requests/dashboard/pool/PoolRequests";
import PoolService from "../../services/dashboard/pools/PoolService";
import { CreateInputTypes, UpdateInputTypes, BaseAdminComponentRequirements } from "../../utils/requirements/form/formRequirementsAbstract";

type Props = {};

const Pool = (props: Props) => {
    const createPoolInitialValues: CreatePoolRequest = {
        name: ''
    };
    const updatePoolInitialValues: UpdatePoolRequest = {
        id: '',
        name: ''
    };
    const createPoolInputTypes: CreateInputTypes[] = [
        { name: 'name', label: 'Havuz İsmi' }
    ];
    const updatePoolInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: 'Havuz Id',value:'' },

        { name: 'name', label: 'Havuz İsmi',value:'' },
    ];
    const createPoolValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });
    const updatePoolValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });

    let ModelNameService: PoolService = new PoolService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createPoolInputTypes,
        updateInputTypes: updatePoolInputTypes,
        createInitialValues: createPoolInitialValues,
        updateInitialValues: updatePoolInitialValues,
        createValidationSchema: createPoolValidationSchema,
        updateValidationSchema: updatePoolValidationSchema,
        componentHeader: "Havuz",
        service: ModelNameService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default Pool;