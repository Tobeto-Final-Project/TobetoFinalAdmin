import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import '../otherTable/AlternativeTable.css';
import { useEffect, useState } from 'react';
import { GUID } from '../../../services/BaseService';
import { ContentResponse, GetListContentResponse } from '../../../models/responses/dashboard/contents/ContentResponses';
import ContentService from '../../../services/dashboard/contents/ContentService';
import { GetListLanguageResponse, LanguageResponse } from '../../../models/responses/dashboard/languages/LanguageResponses';
import LanguageService from '../../../services/dashboard/languages/LanguageService';
import { GetListSubTypeResponse, SubTypeResponse } from '../../../models/responses/dashboard/subtypes/SubTypeResponses';
import SubTypeService from '../../../services/dashboard/subtypes/SubTypeService';
import { ContentCategoryResponse, GetListContentCategoryResponse } from '../../../models/responses/dashboard/contentCategories/ContentCategoryResponses';
import { GetListManufacturerResponse } from '../../../models/responses/dashboard/manufacturers/GetListManufacturerResponse';
import ContentCategoryService from '../../../services/dashboard/contentCategories/ContentCategoryService';
import ManufacturerService from '../../../services/dashboard/manufacturers/ManufacturerService';
import { ManufacturerResponse } from '../../../models/responses/dashboard/manufacturers/ManufacturerResponse';
import { CreateContentRequest, CreateContentTagRequest } from '../../../models/requests/dashboard/contents/ContentRequests';
import { GetListInstructorResponse, InstructorResponse } from '../../../models/responses/dashboard/instructors/InstructorResponses';
import InstructorService from '../../../services/dashboard/instructors/InstructorService';
import ContentInstructorService from '../../../services/dashboard/contentInstructors/ContentInstructorService';
import { CreateContentInstructorRequest } from '../../../models/requests/dashboard/contentInstructors/ContentInstructorRequests';
import { GetListTagResponse, TagResponse } from '../../../models/responses/dashboard/tags/TagResponses';
import TagService from '../../../services/dashboard/tags/TagService';
import ContentTagService from '../../../services/dashboard/contents/ContentTagService';

type Props = {}

const Content = (props: Props) => {
    
    const [addContentName, setAddContentName] = useState('');
    const [addDescription, setAddDescription] = useState('');
    const [addUrlName, setAddUrl] = useState('');
    const [addDuration, setAddDuration] = useState(0);



    const [contents, setContent] = useState<GetListContentResponse>();

    const [control, setControl] = useState<boolean>(false);
    const [reloadFlag, setReloadFlag] = useState(false);

    let service: ContentService = new ContentService();

    const [languageControl, setLanguageControl] = useState<boolean>(false);
    const [addSelectedLanguage, setAddLanguage] = useState<any>();
    const [languages, setLanguages] = useState<GetListLanguageResponse>();
    let languageService: LanguageService = new LanguageService();

    const [subTypeControl, setSubTypeControl] = useState<boolean>(false);
    const [addSelectedSubType, setAddSubType] = useState<any>();
    const [subTypes, setSubTypes] = useState<GetListSubTypeResponse>();
    let subTypeService: SubTypeService = new SubTypeService();

    const [contentCategoryControl, setContentCategoryControl] = useState<boolean>(false);
    const [addSelectedContentCategory, setAddContentCategory] = useState<any>();
    const [contentCategories, setContentCategories] = useState<GetListContentCategoryResponse>();
    let contentCategoryService: ContentCategoryService = new ContentCategoryService();

    const [manufacturerControl, setManufacturerControl] = useState<boolean>(false);
    const [addSelectedManufacturer, setAddContentManufacturer] = useState<any>();
    const [manufacturers, setManufacturers] = useState<GetListManufacturerResponse>();
    let manufacturerService: ManufacturerService = new ManufacturerService();

    const [instructorControl, setInstructorControl] = useState<boolean>(false);
    const [addSelectedInstructor, setAddContentInstructor] = useState<any>();
    const [instructors, setInstructors] = useState<GetListInstructorResponse>();
    let instructorService: InstructorService = new InstructorService();
    let contentInstructorService: ContentInstructorService = new ContentInstructorService()

    const [tagControl, setTagControl] = useState<boolean>(false);
    const [addSelectedTag, setAddContentTag] = useState<any>();
    const [tags, setTags] = useState<GetListTagResponse>();
    let tagService: TagService = new TagService();
    let contentTagService: ContentTagService = new ContentTagService()


    const handleFormContentAdd = (e) => {
        e.preventDefault();

        let createdContent: CreateContentRequest = {
            name: addContentName,
            description: addDescription,
            videoUrl: addUrlName,
            duration: addDuration,
            languageId: addSelectedLanguage,
            subTypeId: addSelectedSubType,
            contentCategoryId: addSelectedContentCategory,
            manufacturerId: addSelectedManufacturer
        };
        service.create(createdContent).then((res) => setReloadFlag((prev) => !prev));
        setAddContentName('');
        setAddDescription('');
        setAddUrl('');
        setAddDuration(0);
        setAddLanguage('');
        setAddSubType('');
        setAddContentCategory('');
        setAddContentManufacturer('');
    }
    const handleContentDelete = (e, id: GUID) => {
        e.preventDefault();
        service.delete(id).then(() => setReloadFlag((prev) => !prev))
    }

    const handleFormContentInstructorAdd = (e, createdContentInstructorId) => {
        e.preventDefault();
        let createdContentInstructor: CreateContentInstructorRequest = {
            instructorId: addSelectedInstructor,
            contentId: createdContentInstructorId,
        }
        contentInstructorService.create(createdContentInstructor).then((res) => setReloadFlag((prev) => !prev));
        setAddContentInstructor('');

    }
    const handleFormContentTagAdd = (e, createdContentTagId) => {
        e.preventDefault();
        let createdContentTag: CreateContentTagRequest = {
            tagId: addSelectedTag,
            contentId: createdContentTagId,
        }
        contentTagService.create(createdContentTag).then((res) => setReloadFlag((prev) => !prev));
        setAddContentTag('');

    }
    useEffect(() => {
        service.getAll("0", "100").then((response) => {
            console.log(response.data);
            
            setContent(response.data);
        }).then(() => setControl(true))
            .then(() => {
                languageService.getAll("0", "100").then((response) => {
                    setLanguages(response.data);
                }).then(() => setLanguageControl(true));
                subTypeService.getAll("0", "100").then((response) => {
                    setSubTypes(response.data);
                }).then(() => setSubTypeControl(true));
                contentCategoryService.getAll("0", "100").then((response) => {
                    setContentCategories(response.data);
                }).then(() => setContentCategoryControl(true));
                manufacturerService.getAll("0", "100").then((response) => {
                    setManufacturers(response.data);
                }).then(() => setManufacturerControl(true));
                instructorService.getAll("0", "100").then((response) => {
                    setInstructors(response.data);
                }).then(() => setInstructorControl(true));
                tagService.getAll("0", "100").then((response) => {
                    setTags(response.data);
                }).then(() => setTagControl(true));
                
            }
            );



    }, [reloadFlag]);

    return (
        <>
            {!control && "Şu Anda Burası Boş Ekle!"}
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2><b>İçerikleri </b> Yönet </h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addContentModal" className="btn btn-success" data-toggle="modal"> <span><FaPlus /> Ekle</span></a>

                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Adı</th>
                                    <th>Dili</th>
                                    <th>Açıklaması</th>
                                    <th>Alt Tür</th>
                                    <th>Url</th>
                                    <th>Süre</th>
                                    <th>İçerik Kategori</th>
                                    <th>Yapımcı Firma</th>
                                    <th>Operasyonlar</th>
                                    <th>Bişiler Ekle</th>
                                </tr>
                            </thead>
                            <tbody>

                                {control && contents.items.map((content: ContentResponse) => (
                                    <>
                                        <tr>
                                            <td>{content.id}</td>
                                            <td>{content.name}</td>
                                            <td>{content.languageName}</td>
                                            <td>{content.description}</td>
                                            <td>{content.subTypeName}</td>
                                            <td>{content.videoUrl}</td>
                                            <td>{content.duration}</td>
                                            <td>{content.contentCategoryName}</td>
                                            <td>{content.manufacturerName}</td>


                                            <td>
                                                &nbsp;&nbsp;&nbsp;<a href={'#showMoreContent' + content.id} className="edit" data-toggle="modal"> <FaEdit /></a> &nbsp;
                                                <a href={'#deleteContent' + content.id} className="delete" data-toggle="modal"><FaTrash /></a>
                                            </td>
                                            <td>
                                                <a href={"#addContentIntructorModal" + content.id } className="btn btn-info" data-toggle="modal"> <span><FaPlus />Eğitimci Ekle</span></a>
                                                <a href={"#addContentTagModal" + content.id } className="btn btn-info" data-toggle="modal"> <span><FaPlus />Etiket Ekle</span></a>
                                            </td>
                                           
                                        </tr>
                                        <div id={"addContentIntructorModal" + content.id }className="modal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <form onSubmit={(e)=>handleFormContentInstructorAdd(e,content.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">İçeriğe Eğitimci Ekle</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <label>Eğitmenler</label>
                                                                <select className="form-control" required
                                                                    value={addSelectedInstructor}
                                                                    onChange={(e) => setAddContentInstructor(e.target.value)
                                                                    }><option value="">Lütfen Bir Eğitmen Seçiniz </option>
                                                                    {instructorControl &&
                                                                        instructors.items.map((instructor:InstructorResponse) => (
                                                                            <option key={instructor.id} value={instructor.id}>{instructor.firstName + " " +  instructor.lastName}</option>
                                                                        )
                                                                        )
                                                                    }
                                                                </select>
                                                            </div>
                                                         
                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                            <input type="submit" className="btn btn-success" value="Add" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div id={"addContentTagModal" + content.id }className="modal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <form onSubmit={(e)=>handleFormContentTagAdd(e,content.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Etiket Ekle</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <label>Etiketler</label>
                                                                <select className="form-control" required
                                                                    value={addSelectedTag}
                                                                    onChange={(e) => setAddContentTag(e.target.value)
                                                                    }><option value="">Lütfen Bir Etiket Seçiniz </option>
                                                                    {tagControl &&
                                                                        tags.items.map((tag:TagResponse) => (
                                                                            <option key={tag.id} value={tag.id}>{tag.name}</option>
                                                                        )
                                                                        )
                                                                    }
                                                                </select>
                                                            </div>
                                                         
                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                            <input type="submit" className="btn btn-success" value="Add" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div id={'deleteContent' + content.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <form onSubmit={(e) => handleContentDelete(e, content.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Şehir Düzeyi Sil</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>Emin misin {content.name + ' isimli içeriği silemeye'}</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                            <input type="submit" className="btn btn-danger" value="Delete" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div id={'showMoreContent' + content.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-content">

                                                    <form >
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">İçerik Göster</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <label>İçerik  ID</label>
                                                                {content.id}
                                                                <input type="text" className="form-control" value={content.id} disabled />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Adı  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={content.name}
                                                                    disabled
                                                                    required

                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Dili  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={content.languageName}
                                                                    disabled

                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Açıklaması  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={content.description}
                                                                    disabled

                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Alt Kategorisi  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={content.subTypeName}
                                                                    disabled
                                                                    required

                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Url  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={content.videoUrl}
                                                                    disabled
                                                                    required

                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Süresi  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={content.duration}
                                                                    disabled
                                                                    required

                                                                />
                                                            </div> <div className="form-group">
                                                                <label>İçerik Kategorisi  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={content.contentCategoryName}
                                                                    disabled
                                                                    required

                                                                />
                                                            </div> <div className="form-group">
                                                                <label>İçerik Yapımcısı  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={content.manufacturerName}
                                                                    disabled
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Eğitimcileri  </label>
                                                                {instructorControl && content.instructors?.map((instructor:InstructorResponse)=>(
                                                                        <h3>{instructor.firstName} {instructor.lastName}</h3>
                                                                ))} 
                                                            </div> 
                                                            <div className="form-group">
                                                                <label>İçerik Tagleri  </label>
                                                                {tagControl && content.tags?.map((tag:TagResponse)=>(
                                                                        <h3>{tag.name}</h3>
                                                                ))} 
                                                            </div> 
                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>


                                    </>

                                ))}



                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

            <div id="addContentModal" className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleFormContentAdd}>
                            <div className="modal-header">
                                <h4 className="modal-title">İçerik Ekle</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>İçerik Adı</label>
                                    <input type="text" className="form-control" required onChange={(e) => setAddContentName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Diller</label>
                                    <select className="form-control" required
                                        value={addSelectedLanguage}
                                        onChange={(e) => setAddLanguage(e.target.value)
                                        }><option value="">Lütfen Bir Dil Seçiniz </option>
                                        {languageControl &&
                                            languages.items.map((language: LanguageResponse) => (
                                                <option key={language.id} value={language.id}>{language.name}</option>
                                            )
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Açıklaması</label>
                                    <input type="text" className="form-control" required onChange={(e) => setAddDescription(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Alt Türler</label>
                                    <select className="form-control" required
                                        value={addSelectedSubType}
                                        onChange={(e) => setAddSubType(e.target.value)
                                        }><option value="">Lütfen Bir Alt Tür Seçiniz </option>
                                        {subTypeControl &&
                                            subTypes.items.map((subType: SubTypeResponse) => (
                                                <option key={subType.id} value={subType.id}>{subType.name}</option>
                                            )
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Url</label>
                                    <input type="text" className="form-control" required onChange={(e) => setAddUrl(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Süre</label>
                                    <input type="number" className="form-control" required onChange={(e) => setAddDuration(parseInt(e.target.value))} />
                                </div>
                                <div className="form-group">
                                    <label>İçerik Kategorileri</label>
                                    <select className="form-control" required
                                        value={addSelectedContentCategory}
                                        onChange={(e) => setAddContentCategory(e.target.value)
                                        }><option value="">Lütfen Bir İçerik Kategori Seçiniz </option>
                                        {contentCategoryControl &&
                                            contentCategories.items.map((contentCategory: ContentCategoryResponse) => (
                                                <option key={contentCategory.id} value={contentCategory.id}>{contentCategory.name}</option>
                                            )
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Yapımcı Firmalar</label>
                                    <select className="form-control" required
                                        value={addSelectedManufacturer}
                                        onChange={(e) => setAddContentManufacturer(e.target.value)
                                        }><option value="">Lütfen Bir Yapıcı Firma Seçiniz </option>
                                        {manufacturerControl &&
                                            manufacturers.items.map((manufacturer: ManufacturerResponse) => (
                                                <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                                            )
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-success" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;





