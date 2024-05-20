
import { Button, Modal } from 'antd';
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';

interface IProject {
    image: any;
    title: string;
    shortDescription: string;
    detail: {
        description: string;
        frontend: string;
        backend: string;
        member: string;
        role: string;
        demo: string;//link video, link github, link deploy
        github: string;
    }
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataView, setDataView] = useState<IProject | null>(null);

    const dataProjects: IProject[] = [
        {
            image: <FaReact size={50} color="#00d9ff" />,
            title: " Clone Tiki",
            shortDescription: "Trang web thương mại điện tử bán sách hay cho khách hàng",
            detail: {
                description: "Trang web được làm vào năm 2 ",
                frontend: "React.JS, Ant design, html, scss",
                backend: "Nodejs, Express, MongoDB",
                member: "Duy",
                role: "front end",
                demo: "https://book-shop-aduvip.vercel.app/",//link video, link github, link deploy
                github: "https://github.com/QuangDuy212/udemy-react-test-fresher-hoidanit"
            }
        },
        {
            image: <FaNodeJs size={50} color="#80bc04" />,
            title: " Clone Tiki",
            shortDescription: "Trang web thương mại điện tử bán sách hay cho khách hàng",
            detail: {
                description: "Trang web được làm vào năm 2 ",
                frontend: "React.JS, Ant design, html, scss",
                backend: "Nodejs, Express, MongoDB",
                member: "Duy",
                role: "front end",
                demo: "https://book-shop-aduvip.vercel.app/",//link video, link github, link deploy
                github: "https://github.com/QuangDuy212/udemy-react-test-fresher-hoidanit"
            }
        },
        {
            image: <AiOutlineFacebook size={50} color="#1874f1" />,
            title: " Clone Tiki",
            shortDescription: "Trang web thương mại điện tử bán sách hay cho khách hàng",
            detail: {
                description: "Trang web được làm vào năm 2 ",
                frontend: "React.JS, Ant design, html, scss",
                backend: "Nodejs, Express, MongoDB",
                member: "Duy",
                role: "front end",
                demo: "https://book-shop-aduvip.vercel.app/",//link video, link github, link deploy
                github: "https://github.com/QuangDuy212/udemy-react-test-fresher-hoidanit"
            }
        },
        {
            image: <IoLogoJavascript size={50} color='#f6dd1e' />,
            title: " Clone Tiki",
            shortDescription: "Trang web thương mại điện tử bán sách hay cho khách hàng",
            detail: {
                description: "Trang web được làm vào năm 2 ",
                frontend: "React.JS, Ant design, html, scss",
                backend: "Nodejs, Express, MongoDB",
                member: "Duy",
                role: "front end",
                demo: "https://book-shop-aduvip.vercel.app/",//link video, link github, link deploy
                github: "https://github.com/QuangDuy212/udemy-react-test-fresher-hoidanit"
            }
        }
    ]

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleViewDetail = (data: IProject) => {
        setIsModalOpen(true);
        setDataView(data);
    }
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
                                                    {item.image}
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{item.shortDescription}</p>
                                                </div>
                                                <div className='viewdetail' onClick={() => handleViewDetail(item)}>
                                                    &nbsp;
                                                    <span className='icon'><FaArrowRight /></span> <span>Xem chi tiết</span>
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

            <Modal
                title={dataView && dataView?.title ? dataView?.title : ""}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={<></>}
                maskClosable={false}
            >
                <ul>
                    <li>Miêu tả: {dataView?.detail.description}</li>
                    <li>Frontend: {dataView?.detail.frontend}</li>
                    <li>Backend: {dataView?.detail.backend}</li>
                    <li>Số lượng thành viên: 1</li>
                    <li>Vai trò: {dataView?.detail.role}</li>
                    <li>Demo: <a href=''></a>{dataView?.detail.demo}</li>
                    <li>Github: {dataView?.detail.github}</li>
                </ul>
            </Modal>
        </>
    )
}
export default Project;