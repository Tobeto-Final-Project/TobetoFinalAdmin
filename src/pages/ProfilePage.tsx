import React from "react";
import "./ProfilePage.css";
type Props = {};

const ProfilePage = (props: Props) => {
    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="cv-box">
                                        <div className="cv-pp">
                                            <div className="area">
                                                <ul className="circles">
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                            <img
                                                src="https://tobeto-private.s3.cloud.ngn.com.tr/user-profile-photo/9546.png?AWSAccessKeyId=ALMS%3Aalms-storage%40advancity.com.tr&amp;Expires=1707481529&amp;Signature=XGQAn7b2JeY869e1kZmBJfiHdL4%3D"
                                                className="cv-pp-img rounded-circle"
                                            />
                                        </div>
                                        <div className="cv-info cv-padding">
                                            <div className="info-box">
                                                <div className="info-icon name"></div>
                                                <div className="info-text">
                                                    <span className="header">Ad Soyad</span>
                                                    <span className="text">Metin Koyuncu</span>
                                                </div>
                                            </div>
                                            <div className="info-box">
                                                <div className="info-icon date"></div>
                                                <div className="info-text">
                                                    <span className="header">Doğum Tarihi</span>
                                                    <span className="text">02.01.2002</span>
                                                </div>
                                            </div>
                                            <div className="info-box">
                                                <div className="info-icon mail"></div>
                                                <div className="info-text">
                                                    <span className="header">E-Posta Adresi</span>
                                                    <span className="text">merhabavu53@gmail.com</span>
                                                </div>
                                            </div>
                                            <div className="info-box">
                                                <div className="info-icon phone"></div>
                                                <div className="info-text">
                                                    <span className="header">Telefon Numarası</span>
                                                    <span className="text">+905397726067</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="cv-box cv-padding">
                                        <div className="cv-box-header">
                                            <span>Hakkımda</span>
                                            <hr />
                                        </div>
                                        <div>Kendini kısaca anlat</div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="cv-box cv-padding">
                                        <div className="cv-box-header">
                                            <div className="d-flex justify-content-between">
                                                <span>Yetkinliklerim</span>
                                            </div>
                                            <hr />
                                        </div>
                                        <div>
                                            <div className="skills">
                                                <span className="skill">c#</span>
                                                <span className="skill">c#</span>
                                                <span className="skill">c#</span>
                                                <span className="skill">c#</span>
                                                <span className="skill">c#</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="cv-box cv-padding">
                                        <div className="cv-box-header">
                                            <div className="d-flex justify-content-between">
                                                <span>Yabancı Dillerim</span>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="my-langs">
                                            <div className="lang w-100">
                                                <div className="lang-info">
                                                    <div className="lang-title ">
                                                        <div className="d-flex flex-column">
                                                            <span className="lang-name">İngilizce</span>
                                                            <span className="lang-degree">
                                                                Orta Seviye (B1 , B2)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lang w-100">
                                                <div className="lang-info">
                                                    <div className="lang-title ">
                                                        <div className="d-flex flex-column">
                                                            <span className="lang-name">İngilizce</span>
                                                            <span className="lang-degree">
                                                                Orta Seviye (B1 , B2)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="cv-box cv-padding">
                                        <div className="cv-box-header">
                                            <span>Sertifikalarım</span>
                                            <hr />
                                        </div>
                                        <div className="row">
                                            <div className="skills">
                                                <span
                                                    id="certificate_name"
                                                    className="skill d-flex justify-content-between"
                                                >
                                                    <span className="me-2 text-truncate ">
                                                        Metin Koyuncu - Herkes İçin Kodlama - 1D.jpg
                                                    </span>
                                                    <span className="me-0 png_icon text - center"></span>
                                                </span>
                                                <span
                                                    id="certificate_name"
                                                    className="skill d-flex justify-content-between"
                                                >
                                                    <span className="me-2 text-truncate ">Sql.PNG</span>
                                                    <span className="me-0 png_icon text - center"></span>
                                                </span>
                                                <span
                                                    id="certificate_name"
                                                    className="skill d-flex justify-content-between"
                                                >
                                                    <span className="me-2 text-truncate ">
                                                        C#+Angular.PNG
                                                    </span>
                                                    <span className="me-0 png_icon text - center"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="cv-box cv-padding">
                                        <div className="cv-box-header">
                                            <span>Medya Hesaplarım</span>
                                            <hr />
                                        </div>
                                        <div className="cv-social-media">
                                            <a
                                                className="cv-linkedin"
                                                target="_blank"
                                                href="https://www.linkedin.com/in/metin-koyuncu-718281260/"
                                            ></a>
                                            <a
                                                className="cv-github"
                                                target="_blank"
                                                href="https://github.com/koyuncu5362"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="cv-box cv-padding">
                                        <div className="cv-box-header"><div className="d-flex justify-content-between"><span>Tobeto İşte Başarı Modelim</span></div><hr /></div>
                                        <div className="model-padding">
                                            <div>
                                                <div className="row">
                                                    <div className="col-md-6 col-12 my-3">
                                                        <div className="chartjs-size-monitor">
                                                            <div className="chartjs-size-monitor-expand">
                                                                <div className="">
                                                                   
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <img src="indir.png" alt="" />
                                                    </div>
                                                    <div className="col-md-6 col-12 d-flex my-3">
                                                        <div className="radar-labels">
                                                            <div className="label">
                                                                <span className="legend legend8">4.5</span>
                                                                <span className="legendName">Yeni dünyaya hazırlanıyorum</span>
                                                            </div>
                                                            <div className="label"><span className="legend legend7">4.8</span><span className="legendName">Profesyonel duruşumu geliştiriyorum</span></div>
                                                            <div className="label"><span className="legend legend1">4.2</span><span className="legendName">Kendimi tanıyor ve yönetiyorum</span></div>
                                                            <div className="label"><span className="legend legend5">4.7</span><span className="legendName">Yaratıcı ve doğru çözümler geliştiriyorum</span></div>
                                                            <div className="label"><span className="legend legend2">5</span><span className="legendName">Kendimi sürekli geliştiriyorum</span></div>
                                                            <div className="label"><span className="legend legend4">5</span><span className="legendName">Başkaları ile birlikte çalışıyorum</span></div>
                                                            <div className="label"><span className="legend legend4">5</span><span className="legendName">Başkaları ile birlikte çalışıyorum</span></div>
                                                            <div className="label"><span className="legend legend3">4.2</span><span className="legendName">Anlıyorum ve anlaşılıyorum</span></div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="cv-box cv-padding">
                                        <div className="cv-box-header"><div className="d-flex justify-content-between"><span>Tobeto Seviye Testlerim</span><span className="cv-see-icon"></span></div><hr/></div>
                                        <div className="row g-4">
                                            <div className="envantoryList">
                                                 <div className=" envantory-result"><div className="d-flex justify-content-between w-100"><span className="examName">Full Stack</span><span className="examTime">03-09-2023</span></div><span className="examResult">48.00</span></div>
                                                 <div className=" envantory-result"><div className="d-flex justify-content-between w-100"><span className="examName">Microsoft SQL Server</span><span className="examTime">03-09-2023</span></div><span className="examResult">48.00</span></div>
                                                 <div className=" envantory-result"><div className="d-flex justify-content-between w-100"><span className="examName">Herkes için Kodlama 1D Değerlendirme Sınavı</span><span className="examTime">11-10-2023</span></div><span className="examResult">100.00</span></div>
                                                 <div className=" envantory-result"><div className="d-flex justify-content-between w-100"><span className="examName">Back End</span><span className="examTime">03-09-2023</span></div><span className="examResult">48.00</span></div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="cv-box cv-padding">
                                        <div className="cv-box-header"><div className="d-flex justify-content-between"><span>Yetkinlik Rozetlerim</span></div><hr/></div>
                                        <div className="">
                                            <div className="row d-flex justify-content-start badge-container">
                                                 <div className="badge-card"><img className="img-fluid" src="https://tobeto.s3.cloud.ngn.com.tr/45_23798aabf0.jpg" alt=""/></div>
                                                 <div className="badge-card"><img className="img-fluid" src="https://tobeto.s3.cloud.ngn.com.tr/47_7fc3123c74.jpg" alt=""/></div>
                                                 <div className="badge-card"><img className="img-fluid" src="https://tobeto.s3.cloud.ngn.com.tr/49_31ca0e6d26.jpg" alt=""/></div>
                                                 <div className="badge-card"><img className="img-fluid" src="https://tobeto.s3.cloud.ngn.com.tr/52_50dc83ca9c.jpg" alt=""/></div>
                                                 <div className="badge-card"><img className="img-fluid" src="https://tobeto.s3.cloud.ngn.com.tr/53_21d7233b37.jpg" alt=""/></div>
                                                 <div className="badge-card"><img className="img-fluid" src="https://tobeto.s3.cloud.ngn.com.tr/54_0cc26693aa.jpg" alt=""/></div>
                                                 <div className="badge-card"><img className="img-fluid" src="https://tobeto.s3.cloud.ngn.com.tr/55_039e2cd2b7.jpg" alt=""/></div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-12">
                                    <div className="cv-box cv-padding">
                                        <div className="cv-box-header"><div className="d-flex justify-content-between"><span>Eğitim Hayatım ve Deneyimlerim</span></div><hr/></div>
                                        <div className="timeline">
                                            <div className="line">
                                                 <div className="circle"><div className=" before"><div className="content"><ul><li>2020/2022</li><li className="text-truncate" >Sakarya Üniversitesi</li><li className="text-truncate" >İnternet ve Ağ Teknolojileri</li></ul></div></div></div>
                                                 <div className="circle2 "><div className=" after"><div className="content"><ul><li>2020/2023</li><li className="text-truncate" >Sinaps Akademi</li><li className="text-truncate" >Matematik Asistanı</li></ul></div></div></div>
                                                 <div className="circle2 "><div className=" after"><div className="content"><ul><li>2020/2023</li><li className="text-truncate" >Sinaps Akademi</li><li className="text-truncate" >Matematik Asistanı</li></ul></div></div></div>
                                                 <div className="circle"><div className=" before"><div className="content"><ul><li>2020/2022</li><li className="text-truncate" >Sakarya Üniversitesi</li><li className="text-truncate" >İnternet ve Ağ Teknolojileri</li></ul></div></div></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProfilePage;
