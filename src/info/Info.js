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
    baseColor: colors[0],
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
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}