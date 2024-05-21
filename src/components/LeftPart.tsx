import desktopLogo from 'src/assets/img/logo/logo2.png';
import { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { isMobile } from 'react-device-detect';

interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (value: boolean) => void;
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
            name: "Skills"
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

    useEffect(() => {
        const { hash } = window.location;
        if (hash) {
            const tab = hash.replace("#", "");
            setActiveTab(tab);
            const element = document.querySelector(`${hash}`);
            if (element) {
                element.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }
        }
    }, [])

    const handleClickTab = (tab: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setActiveTab(tab);
        const element = document.querySelector(`#${tab}`);
        if (element) {
            element.scrollIntoView({ block: 'start', behavior: 'smooth' });
            window.location.hash = tab;
        }

    }
    return (
        <>
            <div className={props.hideLeftPart === true ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
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
                    {!isMobile &&
                        <a className={props.hideLeftPart === true ? "arlo_tm_resize opened" : "arlo_tm_resize"} href="#"
                            onClick={(e) => { e.preventDefault(); props.setHideLeftPart(!props.hideLeftPart) }}
                        ><i className={props.hideLeftPart === true ? "xcon-angle-left opened" : "xcon-angle-left"}></i>
                        </a>
                    }
                </div>
            </div>
        </>
    )
}

export default LeftPart;