import React, { useEffect, useState } from "react";
import { Button, Dropdown, Modal, Table } from "react-bootstrap";
import {
    GetAllModel,
    SingleResponseModel,
    UpdateRequestModel,
    UpdatedResponseModel,
} from "../../models/abstracts/ResponseAbstracts";
import {
    UpdateInitialValues,
    UpdateInputTypes,
    updateValidationSchema,
} from "../../utils/requirements/form/formRequirementsAbstract";
import UpdateModal from "../modals/updateModal";
import { GUID } from "../../services/BaseService";
import DeleteModal from "../modals/deleteModal";
import ShowModal from "../modals/showModal";
import { FaApper, FaEdit, FaNewspaper, FaPage4, FaPaperclip, FaShower, FaTrash } from "react-icons/fa";

type Props = {
    response: GetAllModel<SingleResponseModel>;
    updateInputTypes: UpdateInputTypes[];
    updateInitialValues: UpdateInitialValues;
    updateValidationSchema: updateValidationSchema;
    updateFunc: (data: UpdateRequestModel) => void;
    updateModalHeader: string;
    deleteFunc: (id: GUID | number | string) => void;
};

const MainTable = (props: Props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [showModalShow, setShowModalShow] = React.useState(false);
    const [attributes, setAttributes] = useState<string[]>();
    const [inputTypes, setInputTypes] = useState<string[] | undefined>();
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [deleteItem, setDeleteItem] = useState();
    const [updateItem, setUpdateItem] = useState();
    const [showItem, setShowItem] = useState<SingleResponseModel>();

    const handleUpdate = (item) => {
        setUpdateItem(item);
        setModalShow(true);
    };

    const handleDelete = (id) => {
        setDeleteItem(id);
        setDeleteModalShow(true);
    };
    const handleShow = (item) => {
        setShowItem(item);
        setShowModalShow(true);
    };

    useEffect(() => {
        const attribute = Object.keys(props.response.items[0]);
        setAttributes(attribute);
        console.clear();

        props.updateInputTypes.map((header: UpdateInputTypes) => {
            setInputTypes((prevInputTypes) =>
                prevInputTypes ? [...prevInputTypes, header.label] : [header.label]
            );
        });
    }, []);

    return (
        <>
            <table className="table table-striped table-hover" {...props}>
                <thead>
                    <tr>
                        <th>#</th>
                        {inputTypes?.map((header) => (
                            <th>{header}</th>
                        ))}
                        <th> Operasyonlar</th>
                    </tr>
                </thead>
                <tbody>
                    {props.response.items
                        .map((item: any, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                {attributes?.map((attribute) => (
                                    <td>{item[attribute]}</td>
                                ))}
                                <td>
                                    &nbsp;&nbsp;&nbsp;<a onClick={() => handleUpdate(item)} className="edit" data-toggle="modal"> <FaEdit /></a> &nbsp;
                                    <a  onClick={() => handleDelete(item.id)} className="delete" data-toggle="modal"><FaTrash /></a>&nbsp;
                                    <a onClick={() => handleShow(item)} className="delete" data-toggle="modal"><FaNewspaper/></a>
                                </td>
                              


                                            <UpdateModal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                                modalHeader={props.updateModalHeader}
                                                initialValues={updateItem}
                                                validationObject={props.updateValidationSchema}
                                                updateFunc={props.updateFunc}
                                                formikInputTypes={props.updateInputTypes}
                                            />
                                           
                                            <DeleteModal
                                                onHide={() => setDeleteModalShow(false)}
                                                show={deleteModalShow}
                                                modalHeader={props.updateModalHeader}
                                                deleteFunc={props.deleteFunc}
                                                item={deleteItem}
                                            />
                                           
                                            <ShowModal
                                                onHide={() => setShowModalShow(false)}
                                                show={showModalShow}
                                                modalHeader={props.updateModalHeader}
                                                item={showItem}
                                                attributes={attributes}
                                                
                                            />
                                 
                            
                            </tr>
                        ))
                        .reverse()}



                </tbody>
            </table>

        </>
    );
};

export default MainTable;
