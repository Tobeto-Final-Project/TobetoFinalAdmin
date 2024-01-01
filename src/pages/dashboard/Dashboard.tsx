import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import AdminSidebar from '../../components/Sidebar.tsx/AdminSidebar'
import SocialMedias from './SocialMedias'
import { Table } from 'react-bootstrap'
import MainTable from '../../components/dashboard/MainTable'
import { Route, Routes } from 'react-router-dom'
import Manufacturer from './Manufacturer'
import { createManufacturerInputTypes } from '../../utils/formikInputTypes/manufacturers/createManufacturerInputTypes'
import { updateManufacturerInputTypes } from '../../utils/formikInputTypes/manufacturers/updateManufacturerInputTypes'

type Props = {}

const Dashboard = (props: Props) => {
    const dispatch = useDispatch();
	dispatch({ type: 'SET_TOKEN', payload: localStorage.getItem("token") });
   const token = useSelector((state: RootState) => state.auth.token)
   console.log(token);
   
  return (
    <div className="container align-items-center">
        <div className="row ">
            <div className="col-2">
                <AdminSidebar/>
            </div>
            <div className="col-10">
                <Manufacturer createInputTypes={createManufacturerInputTypes} updateInputTypes={updateManufacturerInputTypes}/>
            </div>
        </div>
    </div>
    
  )
}

export default Dashboard