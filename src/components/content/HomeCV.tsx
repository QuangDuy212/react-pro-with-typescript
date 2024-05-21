import { TypeAnimation } from 'react-type-animation';
import duy from 'src/assets/img/hero/duy.jpg';
import hero2 from 'src/assets/img/hero/2.jpg'

const HomeCV = () => {
    const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        const section = document.querySelector('#about');
        if (section)
            section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return (
        <>
            <div className="arlo_tm_section" id="home">
                <div className="arlo_tm_hero_header_wrap">
                    <div className="arlo_tm_universal_box_wrap">
                        <div className="bg_wrap">
                            <div className="overlay_image hero jarallax" data-speed="0.1"
                                style={{ backgroundImage: `url(${hero2})` }}
                            ></div>
                            <div className="overlay_color hero"></div>
                        </div>
                        <div className="content hero">
                            <div className="inner_content">
                                <div className="image_wrap">
                                    <img src={duy} alt="hero" />
                                </div>
                                <div className="name_holder">
                                    <h3>Quang <span>Duy</span></h3>
                                </div>
                                <div className="text_typing">
                                    <p>I'm a
                                        <> </>
                                        <TypeAnimation
                                            sequence={[
                                                // Same substring at the start will only be typed out once, initially
                                                'Freelancer',
                                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                                'UI/UX Designer',
                                                2000,
                                                'Web Developer',
                                                2000,
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            repeat={Infinity}
                                        // style={{ fontSize: '2em', display: 'inline-block' }}
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="arlo_tm_arrow_wrap bounce anchor">
                            <a onClick={(e) => handleScrollToAbout(e)}><i className="xcon-angle-double-down"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeCV;