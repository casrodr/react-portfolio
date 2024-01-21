import self from "../img/self.jfif"
import mock1 from "../img/2.png"
import mock2 from "../img/3.png"
import mock3 from "../img/7.png"
import mock4 from "../img/6.png"
import mock5 from "../img/4.png"

export let colors = ["rgb(27, 23, 232)", "rgb(239, 30, 158)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

export const info = {
    firstName: "Casimiro",
    lastName: "Rodriguez",
    initials: "CR", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: "rgb(0, 153, 255)",
    miniBio: [ 
        {
            emoji: '💻',
            text: 'Computer Science major'
        },
        {
            emoji: '♾️',
            text: 'Mathematics Minor'
        },
        {
            emoji: "👨‍💻",
            text: "Web development intern"
        }
    ],
    socials: [
        {
            link: "https://github.com/casrodr",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/casimiro-rodriguez-7a8730265/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "mailto:cjrod@ucdavis.edu",
            icon: "fa fa-envelope",
            label: 'mail'
        }
    ],
    bio: "Hello! I'm Casimiro! A UC Davis student studying computer science and math!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma',  'python',  'excel', 'nodejs', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'Gaming',
            emoji: '👾'
        },
        {
            label: 'Weightlifting',
            emoji: '🏋️'
        },
        {
            label: 'Coding',
            emoji: '🎥'
        },
        {
            label: 'Sports',
            emoji: '🏅'
        }
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Fall King Game",
            live: "https://cyberexplosion.itch.io/fall-king", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/CyberExplosion/Fall-King", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "CryptoPulse",
            live: "https://cryptopulse-casrodr.netlify.app/",
            source: "https://github.com/casrodr/CryptoPulse",
            image: mock2
        },
        {
            title: "Facial Emotion Recognition",
            source: "https://github.com/casrodr/Emotion-detection",
            image: mock3
        },
        {
            title: "Dijkstra Algorithm Visualization",
            live: "https://casrodr-dijkstra.netlify.app/",
            source: "https://github.com/casrodr/Dijkstra-s-Algorithm-Visualization-React",
            image: mock4
        },
        {
            title: "Weather App",
            source: "https://github.com/casrodr/Weatherapp-Flutter",
            image: mock5
        }
    ]
}