import { object, string } from "yup";
import BaseAdminComponent from "../../components/dashboard/BaseAdminComponent";
import { CreateSocialMediaRequest, UpdateSocialMediaRequest } from "../../models/requests/dashboard/socialMedias/SocialMediaRequests";
import { CreateInputTypes, UpdateInputTypes, BaseAdminComponentRequirements } from "../../utils/requirements/form/formRequirementsAbstract";
import SocialMediaService from "../../services/dashboard/socialmedias/SocialMediaService";

type Props = {};

const SocialMedia = (props: Props) => {
	const createSocialMediaInitialValues: CreateSocialMediaRequest = {
		name: '',
		logoUrl:''
	};
	const updateSocialMediaInitialValues: UpdateSocialMediaRequest = {
		id: '',
		name: '',
		logoUrl:''
	};
	const createSocialMediaInputTypes: CreateInputTypes[] = [
		{ name: 'name', label: 'Sosyal Medya Adı' },
		{ name: 'logoUrl', label: 'Sosyal Medya Logosu' }
	];
	const updateSocialMediaInputTypes: UpdateInputTypes[] = [
		{ name: 'id', label: 'Sosyal Medya Id'},
		{ name: 'name', label: 'Sosyal Medya Adı' },
		{ name: 'logoUrl', label: 'Sosyal Medya Logosu' },
	];
	const createSocialMediaValidationSchema = object({
		name: string().required('İsim Alanı Zorunludur*')
	});
	const updateSocialMediaValidationSchema = object({
		name: string().required('İsim Alanı Zorunludur*')
	});

	let ModelNameService: SocialMediaService = new SocialMediaService();
	const requirements: BaseAdminComponentRequirements = {
		createInputTypes: createSocialMediaInputTypes,
		updateInputTypes: updateSocialMediaInputTypes,
		createInitialValues: createSocialMediaInitialValues,
		updateInitialValues: updateSocialMediaInitialValues,
		createValidationSchema: createSocialMediaValidationSchema,
		updateValidationSchema: updateSocialMediaValidationSchema,
		componentHeader: "Sosyal Medya",
		service: ModelNameService
	};

	return (
		<>
			<BaseAdminComponent requirement={requirements} />
		</>
	);
};

export default SocialMedia;