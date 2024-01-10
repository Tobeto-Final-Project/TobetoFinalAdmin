import React, { ReactElement } from 'react';

import Login from './pages/auth/Login';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Manufacturer from './pages/dashboard/Manufacturer';
import AlternativeTable from './components/dashboard/otherTable/AlternativeTable';
import LanguageLevel from './components/dashboard/languagelevels/LanguageLevel';
import Content from './components/dashboard/contents/Content';
import Course from './components/dashboard/courses/Course';
import District from './components/dashboard/districts/District';
import Lecture from './components/dashboard/lectures/Lecture';
import Announcement from './pages/dashboard/Announcement';
import Category from './pages/dashboard/Category';
import City from './pages/dashboard/City';
import ContentCategory from './pages/dashboard/ContentCategory';
import Exam from './pages/dashboard/Exam';
import Instructor from './pages/dashboard/Instructor';
import Language from './pages/dashboard/Language';
import Skill from './pages/dashboard/Skill';
import SocialMedia from './pages/dashboard/SocialMedia';
import Stage from './pages/dashboard/Stage';
import SubType from './pages/dashboard/SubType';
import Survey from './pages/dashboard/Surveys';
import Tag from './pages/dashboard/Tag';
import AdminSidebar from './components/Sidebar.tsx/AdminSidebar';


function App(): ReactElement {
  console.clear();
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Dashboard />
                </div>
              </div>
            </div>
          }
        />

        <Route
          path="/yapimciFirmalar"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Manufacturer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/etiketler"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Tag />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/anketler"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Survey />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/altKategoriler"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <SubType />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/basvurular"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Stage />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/sosyalMedyalar"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <SocialMedia />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/yetenekler"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Skill />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/diller"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Language />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/egitimciler"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Instructor />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/sinavlar"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Exam />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/sehirler"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <City />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/duyurular"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Announcement />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/ilceler"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <District />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/dilSeviyeleri"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <LanguageLevel />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/icerikKategorileri"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <ContentCategory />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/icerikler"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Content />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/genelKategoriler"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Category />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/kurslar"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Course />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/dersler"
          element={
            <div className="container align-items-center">
              <div className="row">
                <div className="col-12">
                  <AdminSidebar />
                </div>
                <div className="col-12">
                  <Lecture />
                </div>
              </div>
            </div>
          }
        />
        


      </Routes>

    </BrowserRouter>

  );
}

export default App;
