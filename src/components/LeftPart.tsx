import desktopLogo from '@/assets/img/logo/logo2.png';
import { FaGithub } from "react-icons/fa";

interface IProps {
    showLeftPart: boolean;
    setShowLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {
    return (
        <>
            <div className={props.showLeftPart === true ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
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