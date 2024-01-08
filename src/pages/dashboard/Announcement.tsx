import { object, string } from "yup";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";
import { CreateAnnouncementRequest, UpdateAnnouncementRequest } from "../../models/requests/dashboard/announcements/AnnouncementRequests";
import AnnouncementService from "../../services/dashboard/announcements/AnnouncementService";
import { CreateInputTypes, UpdateInputTypes, BaseAdminComponentRequirements } from "../../utils/requirements/form/formRequirementsAbstract";
type Props = {};

const Announcement = (props: Props) => {
    const createAnnouncementInitialValues: CreateAnnouncementRequest = {
        name: '',
        description:''
    };
    const updateAnnouncementInitialValues: UpdateAnnouncementRequest = {
        id: '',
        name: '',
        description:''
    };
    const createAnnouncementInputTypes: CreateInputTypes[] = [
        { name: 'name', label: 'Duyuru Adı'  },
        { name: 'description', label: 'Duyuru Açıklaması' }
    ];
    const updateAnnouncementInputTypes: UpdateInputTypes[] = [
        { name: 'id', label: 'Duyuru Id'},
        { name: 'name', label: 'Duyuru Adı' },
        { name: 'description', label: 'Duyuru Açıklaması' }
    ];
    const createAnnouncementValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });
    const updateAnnouncementValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });

    let ModelNameService: AnnouncementService = new AnnouncementService();
    const requirements: BaseAdminComponentRequirements = {
        createInputTypes: createAnnouncementInputTypes,
        updateInputTypes: updateAnnouncementInputTypes,
        createInitialValues: createAnnouncementInitialValues,
        updateInitialValues: updateAnnouncementInitialValues,
        createValidationSchema: createAnnouncementValidationSchema,
        updateValidationSchema: updateAnnouncementValidationSchema,
        componentHeader: "Duyuru",
        service: ModelNameService
    };

    return (
        <>
            <BaseAdminComponent requirement={requirements} />
        </>
    );
};

export default Announcement;