import audio from '../../assets/img/audio-essential-volume-svgrepo-com.svg';
import video from '../../assets/img/video-svgrepo-com.svg';
import graphics from '../../assets/img/image-04-svgrepo-com.svg';
import educ from '../../assets/img/book-open-svgrepo-com.svg';


const systems = [
    {
        icon: audio,
        title: 'Audio Solutios',
        desc: 'Provide top-notch standards and cutting-edge technologies across different sectors, such as professional audio, production Lighting, LED Screens for multipurpose usage, stage engineering systems, professional stage intercom systems, Media Façade solutions and more.'
    },
    {
        icon: video,
        title: 'Video Solutios',
        desc: 'Provide top-notch standards and cutting-edge technologies across different sectors, such as professional audio, production Lighting, LED Screens for multipurpose usage, stage engineering systems, professional stage intercom systems, Media Façade solutions and more.'
    },
    {
        icon: graphics,
        title: 'Graphics Solutios',
        desc: 'Provide top-notch standards and cutting-edge technologies across different sectors, such as professional audio, production Lighting, LED Screens for multipurpose usage, stage engineering systems, professional stage intercom systems, Media Façade solutions and more.'
    },
    {
        icon: educ,
        title: 'Education Solutios',
        desc: 'Provide top-notch standards and cutting-edge technologies across different sectors, such as professional audio, production Lighting, LED Screens for multipurpose usage, stage engineering systems, professional stage intercom systems, Media Façade solutions and more.'
    }
]
const OurSystems = () => {
    return (
        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
            {systems.map((item, index) => {
                return (
                    <div className="col d-flex flex-column justify-content-center align-items-center text-center system">
                        <div className="icon_box mb-3">
                            <div className="inner_box">
                                <img src={item.icon} alt={item.title} />
                            </div>
                        </div>
                        <h2 className='mb-5'>{item.title}</h2>
                        <p>
                            {item.desc}
                        </p>
                    </div>
                )
            })

            }
        </div>
    )
};
export default OurSystems;