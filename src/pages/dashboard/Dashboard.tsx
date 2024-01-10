import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import AdminSidebar from '../../components/Sidebar.tsx/AdminSidebar'
import './style/DashboardStyle.css';
import Manufacturer from './Manufacturer'
import Tag from './Tag'
import SubType from './SubType'
import Survey from './Surveys'
import Stage from './Stage'
import SocialMedia from './SocialMedia'
import Skill from './Skill'
import Language from './Language'
import Instructor from './Instructor'
import Exam from './Exam'
import City from './City'
import Announcement from './Announcement'
import LanguageLevel from '../../components/dashboard/languagelevels/LanguageLevel';
import District from '../../components/dashboard/districts/District';
import ContentCategory from './ContentCategory';
import Content from '../../components/dashboard/contents/Content';
import Course from '../../components/dashboard/courses/Course';
import Category from './Category';
import Lecture from '../../components/dashboard/lectures/Lecture';
import { Route, Routes } from 'react-router-dom';


type Props = {}

const Dashboard = (props: Props) => {
    const dispatch = useDispatch();
	dispatch({ type: 'SET_TOKEN', payload: localStorage.getItem("token") });
   const token = useSelector((state: RootState) => state.auth.token)
   console.log(token);
   
  return (
    <></>
    
  )
}

export default Dashboard