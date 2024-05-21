import mobile_logo from 'src/assets/img/logo/mobile_logo.png';
import { useState } from 'react';
interface ITab {
    id: string;
    name: string;
}
const MobileMenu = () => {
    const [activeTab, setActiveTab] = useState<string>("home");
    const [isOpen, setIsOpen] = useState(false);

    const style = {
        display: isOpen ? "block" : "none",
    };

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
            <div className="arlo_tm_mobile_header_wrap">
                <div className="main_wrap">
                    <div className="logo">
                        <a href="#"><img src={mobile_logo} alt="mobile_logo" /></a>
                    </div>
                    <div className="arlo_tm_trigger">
                        <div className={isOpen ?
                            "hamburger hamburger--collapse-r is-active"
                            :
                            "hamburger hamburger--collapse-r"}>
                            <div className="hamburger-box"
                                onClick={() => setIsOpen(prev => !prev)}
                            >
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_mobile_menu_wrap" style={style}>
                    <div className="mob_menu">
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
                </div>
            </div>
        </>
    )
}
export default MobileMenu;