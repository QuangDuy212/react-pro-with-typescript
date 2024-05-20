import desktopLogo from '@/assets/img/logo/logo2.png';
import { useState } from 'react';
import { FaGithub } from "react-icons/fa";

interface IProps {
    showLeftPart: boolean;
    setShowLeftPart: (value: boolean) => void;
}

interface ITab {
    id: string;
    name: string;
}

const LeftPart = (props: IProps) => {
    const [activeTab, setActiveTab] = useState<string>("home");

    const itemList: ITab[] = [
        {
            id: "home",
            name: "Home"
        },
        {
            id: "about",
            name: "About"
        },
        {
            id: "skills",
            name: "skills"
        },
        {
            id: "projects",
            name: "Projects"
        },
        {
            id: "contact",
            name: "Contact"
        },
    ]

    const handleClickTab = (tab: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setActiveTab(tab);
        const element = document.querySelector(`#${tab}`);
        if (element)
            element.scrollIntoView({ block: 'start', behavior: 'smooth' });

    }
    return (
        <>
            <div className={props.showLeftPart === true ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            {itemList && itemList.map((item, index) => {
                                return (
                                    <li>
                                        <a href={`#${item.id}`}
                                            onClick={(event) => handleClickTab(item.id, event)}
                                            className={activeTab === item.id ? "active" : ""}
                                        >{item.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="leftpart_bottom">
                        <div className="social_wrap">
                            <ul>
                                <li><a href="https://www.facebook.com/profile.php?id=100079731466553" target='_blank'>
                                    <i className="xcon-facebook"></i>
                                </a></li>
                                <li>
                                    <a href="https://github.com/QuangDuy212" target='_blank'>
                                        <FaGithub />
                                    </a>
                                </li>
                                <li><a href="#"><i className="xcon-linkedin"></i></a></li>
                                <li><a href="#"><i className="xcon-instagram"></i></a></li>
                                <li><a href="#"><i className="xcon-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <a className={props.showLeftPart === true ? "arlo_tm_resize opened" : "arlo_tm_resize"} href="#"
                        onClick={() => props.setShowLeftPart(!props.showLeftPart)}
                    ><i className={props.showLeftPart === true ? "xcon-angle-left opened" : "xcon-angle-left"}></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default LeftPart;