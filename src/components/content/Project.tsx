
import { Button, Modal } from 'antd';

const Project = () => {
    const dataProjects = [
        {
            imgae: "img/svg/camera-diaphragm.svg",
            title: "Website Clone Tiki",
            shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "",
                technology: "",
                member: "",
                role: "",
                demo: "",//link video, link github, link deploy
                github: ""
            }
        },
        {
            imgae: "img/svg/camera-diaphragm.svg",
            title: "Website Clone Tiki",
            shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "",
                technology: "",
                member: "",
                role: "",
                demo: "",//link video, link github, link deploy
                github: ""
            }
        },
        {
            imgae: "img/svg/camera-diaphragm.svg",
            title: "Website Clone Tiki",
            shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "",
                technology: "",
                member: "",
                role: "",
                demo: "",//link video, link github, link deploy
                github: ""
            }
        }
    ]
    return (
        <>
            <div className="arlo_tm_section" id="projects">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>My project</h3>
                            <span>Các dự án đã hoàn thiện</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects && dataProjects.map((item, index) => {
                                    return (
                                        <li>
                                            <div className="inner" key={`project-${index}`}>
                                                <div className="icon">
                                                    <img className="svg" src={item.imgae} alt="camera-diaphragm" />
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{item.shortDescription}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Project;