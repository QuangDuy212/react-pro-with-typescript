import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
    return (
        <>
            <div className="arlo_tm_section" id="skills">
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Kĩ Năng Frontend</h4>
                                </div>
                                <li>Cắt/ghép template Website Responsive</li>
                                <li>Framework/Library: Bootstrap, Ant Design , ReactJs</li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                            <span><span className="label">HTML/CSS/Javascript<span className="experience"></span></span><span className="number">95%</span></span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={95}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="100" data-color="#000">
                                            <span><span className="label">React.JS(Typescript)<span className="experience"></span></span><span className="number">100%</span></span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={100}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="85" data-color="#000">
                                            <span><span className="label">Design UI/UX<span className="experience"></span></span><span className="number">85%</span></span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={85}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Kĩ Năng Backend</h4>
                                </div>
                                <li >Ngôn ngữ lập trình: Java, PHP, Javascript</li>
                                <li>Viết Resful APIs</li>
                                <li>Framework: Express, Nest.JS, Spring Boot</li>
                                <li>Database: Postgres, MongoDB</li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                            <span><span className="label">Nest.JS<span className="experience"></span></span><span className="number">80%</span></span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={80}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="100" data-color="#000">
                                            <span><span className="label">JavaSpring<span className="experience"></span></span><span className="number">100%</span></span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={100}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="85" data-color="#000">
                                            <span><span className="label">Database Postgres/MongoDB<span className="experience"></span></span><span className="number">85%</span></span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={85}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill;
