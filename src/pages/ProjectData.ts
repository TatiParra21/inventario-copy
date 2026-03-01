
//First Project
import MegalodonVideo from '../assets/videos/P1-Megalodon.mp4';
import GirlWithSharkGif from '../assets/project-pics/GirlWithShark.mp4';
import sharkGamePic from '../assets/project-pics/p-img-megalodon.webp'
//Second Project
import fossilVideo from '../assets/videos/P2-fossilVideo.mp4';
import fossilPic1 from '../assets/project-pics/fossilPic1.webp';
import fossilPic2 from '../assets/project-pics/fossilPic2.webp';
//Third Project
import ProyectoWebVideo from '../assets/videos/P3-Proyecto-Webs.mp4';
import P3Image1 from '../assets/project-pics/P3-img1.webp';
import P3Image2 from '../assets/project-pics/P3-img2.webp';

//Fourth Project
import P6Filter from '../assets/videos/P6-Filter.mp4';
import Filtro2 from '../assets/project-pics/filtro2.webp';
import Filtro1 from '../assets/project-pics/Filtro1.mp4';
//Fifth Project
import P5Video from '../assets/videos/P5-Video.mp4';
import AguaSaludVideo from '../assets/project-pics/Agua-salud.mp4';
import AguaSaludImage from '../assets/project-pics/p-img-agua-salud.webp';
//Sixth Project
import P6Video from '../assets/videos/Proyecto-3D.mp4';
import CatFallVideo from '../assets/project-pics/CATFALL-VIDEO-CORTO-3D.mp4';
import RobotVideo from '../assets/project-pics/3D-MOTION-B.mp4';
//Seventh Project
import ProyectoGamificacion from '../assets/videos/Proyecto-Gamificacion.mp4';
import gameImage1 from '../assets/project-pics/gameImg1.webp';
import gameImage2 from '../assets/project-pics/gameImg2.webp';
//Eighth Project
import ProyectoRobotica from '../assets/videos/Proyecto-Robotica.mp4';
import DBotVideo from '../assets/project-pics/Dbot-video.mp4';
import DBotImage from '../assets/project-pics/Dbot-image.webp';
//Ninth Project
import ProyectoInteligencia from '../assets/videos/Proyecto-Inteligencia.mp4';
import AI1 from '../assets/project-pics/IA1.webp';
import AI2 from '../assets/project-pics/IA2.webp';

export type Lang = "es" | "en";
export type ProjectType ={
    MainVideo: string,
    slots:{
        first:{kind:"video" | "image", src:string |  ImageMetadata, alt?:string},
        second:{kind:"video" | "image", src:string |  ImageMetadata, alt?:string},
    }
    es:{
        title:string,
        desc:string
    },
    en:{
        title:string,
        desc:string
    }
}
export const ProjectData: Record<string, ProjectType> = {
    project1: {
        MainVideo: MegalodonVideo,
        slots:{
            first:{kind:"video", src: GirlWithSharkGif, alt:""},
            second:{kind:"image", src: sharkGamePic, alt:"gif of girl pointing to shark game"}
        },
        es:{
            title:"Recorre las profundidades del océano y aprende sobre todas sus especies.",
            desc:"Impresionante juego educativo desarrollado en conjunto con el Smithsonian Tropical Research Institute. Su objetivo es enseñar a los estudiantes sobre la diversidad de especies que habitan en los océanos de Panamá y sus características más notables. El estudiante protagoniza una aventura basada en la exploración, donde al final de la travesía viaja al pasado y conoce al inmenso Megalodón como recompensa. Hoy, más de 8.000 estudiantes de distintos colegios han aprendido sobre la diversidad del océano con este impresionante juego."

        },
        en:{
            title:"Travel the depths of the ocean and learn about all its species.",
            desc:"Impressive educational game developed in conjunction with the Smithsonian Tropical Research Institute. Its objective is to teach students about the diversity of species that inhabit Panama's oceans and their most notable characteristics. The student stars in an adventure based on exploration, where at the end of the journey he or she travels back in time and meets the immense Megalodon as a reward. Today, more than 8,000 students from different schools have learned about the diversity of the ocean with this impressive game."
        }
},
   project2:{
    MainVideo: fossilVideo,
    slots:{
        first:{kind:"image", src: fossilPic1, alt:"fossil picture 1"},
        second:{kind:"image", src: fossilPic2, alt:"fossil picture 2"}
        },
        es:{
            title:"La biblioteca de fósiles 3D en línea más grande de la región.",
            desc:"En conjunto con el Smithsonian Tropical Research Institute y una serie de científicos de los institutos de ciencia más importantes del mundo. Compilamos una colección de fósiles representativos de la biodiversidad de flora y fauna del istmo, acompañada de algunos elementos históricos y culturales pertenecientes a aborígenes. Hoy en día puedes recorrer la biblioteca e incluso descargar los modelos 3D para su impresión y estudio en el siguiente enlace: https://stri.si.edu/qrioso3d/"
        },
        en:{
            title:"The largest online 3D fossil library in the region.",
            desc:"In conjunction with the Smithsonian Tropical Research Institute and a number of scientists from the most important science institutes in the world. We compiled a collection of fossils representative of the biodiversity of flora and fauna of the isthmus, accompanied by some historical and cultural elements belonging to aborigines. Today you can tour the library and even download the 3D models for printing and study at the following link: https://stri.si.edu/qrioso3d/"
        }
    },
    project3:{
    MainVideo: ProyectoWebVideo,
    slots:{
        first:{kind:"image", src: P3Image1, alt:"project 3 image 1"},
        second:{kind:"image", src: P3Image2, alt:"project 3 image 2"}
        },
        es:{
            title:"UI/UX: El Corazón de Nuestra Ideología",
            desc:"En INVENTARIO, la experiencia de usuario es la esencia de todo proyecto que emprendemos. Desde la arquitectura de la información hasta la interacción final, combinamos gamificación, storytelling y un diseño de interfaces cuidadosamente elaborado para ofrecer experiencias digitales memorables. Nuestro compromiso es transformar cada interacción en un momento significativo, garantizando que cada sitio web, aplicación o plataforma sea tan intuitiva como atractiva."
        },
        en:{
            title:"UI/UX: The Heart of Our Ideology",
            desc:"At INVENTARIO, user experience is the essence of every project we undertake. From information architecture to final interaction, we combine gamification, storytelling and carefully crafted interface design to deliver memorable digital experiences. Our commitment is to transform every interaction into a meaningful moment, ensuring that every website, application or platform is as intuitive as it is engaging."
        }
    },
     project4:{
    MainVideo: P6Filter,
    slots:{
        first:{kind:"video", src: Filtro1, alt:""},
        second:{kind:"image", src: Filtro2, alt:"Phone with filter interface"}
        },
        es:{
            title:"Revolucionando los trámites aduaneros con tecnología y gamificación.",
            desc:"TRANSIT, es una plataforma que facilita el tracking y seguimiento en cada una de las etapas de los trámites aduaneros para empresas farmacéuticas dando vistas en detalles por fases tanto a la agencia aduanera, al cliente y al departamento de Farmacias y Drogas del gobierno. De este modo se puede ver en qué parte se detienen los procesos y se puede pensar en formas de mejorar."
        },
        en:{
            title:"Revolutionizing customs procedures with technology and gamification.",
            desc:"TRANSIT is a platform that facilitates the tracking and monitoring of each stage of customs procedures for pharmaceutical companies, providing detailed views by phases to the customs agency, the client and the government's Pharmacy and Drugs department. This way you can see where processes stop and think of ways to improve."
        }
    },
     project5:{
    MainVideo: P5Video ,
    slots:{
        first:{kind:"video", src: AguaSaludVideo, alt:""},
        second:{kind:"image", src: AguaSaludImage, alt:"App about AGUA SALUD"}
        },
        es:{
            title:"Aprende sobre sostenibilidad y tierras con AGUA SALUD.",
            desc:"Agua Salud más que un juego es una plataforma educativa donde los usuarios aprenden combinando distintos tipos de parcelas de tierra cómo es afectada la sostenibilidad y durabilidad de la misma, con un estilo lúdico y educacional muy práctico. La teoría y jugabilidad fue aprobada por varios científicos del Smithsonian Tropical Research Institute, tanto de las oficinas de Panamá como las de Washington DC. Así mismo el juego fue reconocido por el FOLK LIFE FESTIVAL de SMITHSONIAN en el 2021."
        },
        en:{
            title:"Learn about sustainability and land with AGUA SALUD.",
            desc:"Agua Salud is more than a game, it is an educational platform where users learn by combining different types of land plots how the sustainability and durability of the land is affected, in a very practical, playful and educational style. The theory and gameplay was approved by several scientists from the Smithsonian Tropical Research Institute, both from the Panama and Washington DC offices. The game was also recognized by the SMITHSONIAN FOLK LIFE FESTIVAL in 2021."
        }
    },
     project6:{
    MainVideo: P6Video,
    slots:{
        first:{kind:"video", src: CatFallVideo, alt:""},
        second:{kind:"video", src: RobotVideo, alt:""}
        },
        es:{
            title:"Usando el Storytelling para Crear Universos Animados",
            desc:"Imagina un universo donde la animación 2D y 3D da vida a historias que emocionan y conectan con tus usuarios. En INVENTARIO, contamos con un equipo especializado en dar forma a narrativas poderosas que trascienden la pantalla. Con un enfoque en el storytelling y la calidad visual, producimos animaciones que capturan la atención, generan vínculos emocionales y transportan a tu audiencia a mundos tan reales como inspiradores."
        },
        en:{
            title:"Using Storytelling to Create Animated Universes",
            desc:"Imagine a universe where 2D and 3D animation brings to life stories that excite and connect with your users. At INVENTARIO, we have a team that specializes in shaping powerful narratives that transcend the screen. With a focus on storytelling and visual quality, we produce animations that capture attention, generate emotional bonds and transport your audience to worlds that are as real as they are inspiring."
        }
    },
     project7:{
    MainVideo: ProyectoGamificacion,
    slots:{
        first:{kind:"image", src: gameImage1, alt:"game picture 1"},
        second:{kind:"image", src: gameImage2, alt:"game picture 2"}
        },
        es:{
            title:"Desarrollo de Videojuegos con fines Didácticos, Lúdicos o de marketing.",
            desc:"Nuestro secreto para crear videojuegos cautivadores radica en la fusión de creatividad, gamificación y un profundo entendimiento de los objetivos de cada marca o institución. Ya sea para propósitos educativos, campañas de marketing o engagement, diseñamos experiencias lúdicas que no solo divierten, si no, que también generan resultados medibles. Hasta la fecha, hemos impactado positivamente a más de 20 mil estudiantes en escuelas de Panamá y a 10 mil usuarios adicionales en la región, demostrando cómo el poder del juego puede transformar aprendizaje y comunicación."
        },
        en:{
            title:"Development of videogames for educational, recreational or marketing purposes.",
            desc:"Our secret to create captivating videogames lies in the fusion of creativity, gamification and a deep understanding of the and a deep understanding of the objectives of each brand or institution. Whether for educational purposes whether for educational purposes, marketing campaigns or engagement, we design playful experiences that not only entertain, but also not only have fun, but also generate measurable results. To date, we have positively impacted positively impacted more than 20,000 students in schools in Panama and an additional 10,000 users in the region, demonstrating how the power the region, demonstrating how the power of play can transform learning and communication."
        }
    },
     project8:{
    MainVideo: ProyectoRobotica,
    slots:{
        first:{kind:"video", src: DBotVideo, alt:""},
        second:{kind:"image", src: DBotImage, alt:"App about DBOT"}
        },
        es:{
            title:"Experimenta la mas alta Robótica a tu Servicio.",
            desc:"La robótica ya no es un sueño lejano, sino una realidad que potencia tu negocio. Desde la recepción en hoteles hasta la atención en centros comerciales, nuestros robots interactúan con clientes de forma eficiente e innovadora. Integrarlos en tu organización significa impulsar la experiencia al siguiente nivel. Simplifica procesos y deja una impresión memorable."
        },
        en:{
            title:"Experience the highest Robotics at your Service.",
            desc:"Robotics is no longer a distant dream, but a reality that empowers your business. From hotel reception to shopping mall service, our robots interact with customers in efficient and innovative ways. Integrating them into your organization means taking the experience to the next level. Simplify processes and leave a memorable impression."
        }
    },
     project9:{
    MainVideo: ProyectoInteligencia,
    slots:{
        first:{kind:"image", src: AI1, alt:"AI picture 1"},
        second:{kind:"image", src: AI2, alt:"AI picture 2"}
        },
        es:{
            title:"Inteligencia Artificial para Impulsar Negocios",
            desc:"La IA va más allá de automatizar tareas: es la clave para maximizar rentabilidad y competitividad. En INVENTARIO, diseñamos soluciones que predicen tendencias, optimizan recursos y personalizan la experiencia de tu marca. Haz que tus datos trabajen para ti y transforma tu empresa con un enfoque inteligente. Lleva tu negocio al siguiente nivel con innovación real."
        },
        en:{
            title:"Artificial Intelligence to Drive Business",
            desc:"AI goes beyond automating tasks: it is the key to maximize profitability and competitiveness. At INVENTARIO, we design solutions that predict trends, optimize resources and personalize your brand experience. Make your data work for you and transform your business with an intelligent approach. Take your business to the next level with real innovation."
        }
    },
}