import About from "components/content/About";
import HomeCV from "components/content/HomeCV";
import Skill from "components/content/Skill";
import Project from "components/content/Project";
import Contact from "components/content/Contact";

interface IProps {
    showLeftPart: boolean;
    setShowLeftPart: (value: boolean) => void;
}

const RightPart = (props: IProps) => {
    return (
        <>
            <div className={props.showLeftPart === true ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"}>
                <div className="rightpart_inner">
                    <HomeCV />

                    {/* <!-- ABOUT --> */}
                    <About />
                    {/* <!-- /ABOUT --> */}

                    {/* <!-- SKILLS --> */}
                    <Skill />
                    {/* <!-- /SKILLS --> */}

                    {/* <!-- SERVICES --> */}
                    <Project />
                    {/* <!-- /SERVICES --> */}

                    {/* <!-- CONTACT & FOOTER --> */}
                    <Contact />
                    {/* <!-- /CONTACT & FOOTER --> */}

                </div>
            </div>
        </>
    )
}

export default RightPart;