import * as analogDOM from './analogDOM.js';
export var PROJECTS = [
    {
        title: 'Natural Neighbors',
        videoSrc: '/assets/video/natural-neighbors.mp4',
        technologies: ['JavaScript', 'Node.js', 'Express.js', 'Heroku', 'Travis CI'],
        description: (analogDOM.createElement(analogDOM.Fragment, null,
            analogDOM.createElement("p", null, "Natural Neighbors was my team's term project in a Software Development class. It's a social network where animal enthusiasts can post about wildlife sightings. I was lead developer and worked on UI Design for this project."),
            analogDOM.createElement("p", null, "A user could create a post with what animal they saw and a description of the sighting. They could also add a location to their post using a Google Maps integration. Then, anyone around the world could see that post."))),
        buttons: [
            {
                icon: 'github',
                text: 'GitHub Repo',
                href: 'https://github.com/mrjacobbloom/teamWORK'
            },
        ]
    },
    {
        title: 'Lumpy',
        videoSrc: '/assets/video/lumpy.mp4',
        technologies: ['C++', 'OpenGL', 'QT'],
        description: (analogDOM.createElement("p", null, "Lumpy was my final project for a class on OpenGL graphics. It's an additive landmass editor with an editing \"God Mode\" and a 1st-Person Mode that allows you to move around the world you've built. It starts out as sand and water, but as you add height, the texture will change to grass/plants, then to rock, and then to snow and snow will begin to fall. I'm particularly proud of the mouse interactions in this app, as OpenGL doesn't make that easy.")),
        buttons: [
            {
                icon: 'github',
                text: 'GitHub Repo',
                href: 'https://github.com/mrjacobbloom/lumpy'
            },
        ]
    },
    {
        title: 'Notochord',
        videoSrc: '/assets/video/notochord-gui.mp4',
        technologies: ['JavaScript', 'React', 'SVG', 'MIDI', 'BNF Parser', 'Bootstrap', 'TypeScript'],
        description: (analogDOM.createElement(analogDOM.Fragment, null,
            analogDOM.createElement("p", null, "Notochord is a long-term passion project of mine. Long story short, it's a chord player which can play a song in one of several styles. It has a graphical lead-sheet editor inspired by iReal Pro for editing songs."),
            analogDOM.createElement("p", null,
                "The most complicated and exciting part of Notochord is its declarative domain-specific language for describing a musical style, called",
                ' ',
                analogDOM.createElement("a", { href: "https://github.com/notochord/playback" }, "Playback"),
                ". The Playback interpreter is a behemoth and work-in-progress, but I'm very excited about the direction it's headed. I'm in the process of porting it to TypsScript, and it uses a BNF parser generator."))),
        buttons: [
            {
                icon: 'play',
                text: 'Try It',
                href: 'http://notochord.herokuapp.com/'
            },
            {
                icon: 'github',
                text: 'GitHub Repo',
                href: 'https://github.com/notochord/notochord'
            },
        ]
    },
    {
        title: 'Echo',
        videoSrc: '/assets/video/echo.mp4',
        technologies: ['TypeScript', 'JS Proxies', 'Mocha/Chai'],
        description: (analogDOM.createElement("p", null, "Echo is an experiment in metaprogramming with JavaScript proxies. It's a JavaScript object that, whenever you interact with it in any way, it prints the line of code you wrote with full syntax highlighting.")),
        buttons: [
            {
                icon: 'github',
                text: 'GitHub Repo',
                href: 'https://github.com/mrjacobbloom/echo'
            },
        ]
    },
    {
        title: 'Liga-Diga',
        videoSrc: '/assets/video/liga-diga.mp4',
        technologies: ['JavaScript', 'Unified Font Object'],
        description: (analogDOM.createElement("p", null, "Liga Diga is a font that uses ligatures to automagically translate the top 300 most common English words into Spanish. Your days of using Google Translate are over!")),
        buttons: [
            {
                icon: 'github',
                text: 'GitHub Repo',
                href: 'https://github.com/mrjacobbloom/liga-diga'
            },
        ]
    },
    {
        title: 'Fruit',
        videoSrc: '/assets/video/fruit.mp4',
        technologies: ['C++', 'OpenGL', 'GLUT'],
        description: (analogDOM.createElement("p", null, "Fruit was my final project for a class on OpenGL graphics. It's a game in which the user creates a smoothie by dragging fruits into a blender.")),
        buttons: [
            {
                icon: 'github',
                text: 'GitHub Repo',
                href: 'https://github.com/mrjacobbloom/fruit'
            },
        ]
    },
    {
        title: 'Lettuce',
        videoSrc: '/assets/video/lettuce.mp4',
        technologies: ['JavaScript', 'BNF Parser'],
        description: (analogDOM.createElement("p", null, "The Lettuce AST Explorer is an impletmentation of a toy language from my Principles of Programming Languages class. It started out as my experimentations with pattern matching in JS, but it grew into a full-blown BNF-powered parser and pattern-matching-powered interpreter. I gave a presentation on it in my class, if you'd like to check that out.")),
        buttons: [
            {
                icon: 'play',
                text: 'Try It',
                href: 'https://jacobbloom.dev/pattern-matcher.js/lettuce/playground/index.html'
            },
            {
                icon: 'file-powerpoint-o',
                text: 'Presentation',
                href: 'https://docs.google.com/presentation/d/1WILaZ4DszKBVeiOUsmyxBdaxqeTNQKpVTq4OHLoTbtQ/edit?usp=sharing'
            },
            {
                icon: 'github',
                text: 'GitHub Repo',
                href: 'https://github.com/mrjacobbloom/pattern-matcher.js'
            },
        ]
    },
    {
        title: 'Elemental',
        videoSrc: '/assets/video/elemental.mp4',
        technologies: ['JavaScript'],
        description: (analogDOM.createElement("p", null, "Elemental was a drag-and-drop HTML editor inspired by MIT Scratch. It was a collaboration with several friends, and I spearheaded a rewrite of their block editor.")),
        buttons: [
            {
                icon: 'github',
                text: 'GitHub Repo',
                href: 'https://github.com/ElementalCode/elemental'
            },
        ]
    },
    {
        title: 'Editor',
        videoSrc: '/assets/video/editor.mp4',
        technologies: ['JavaScript'],
        description: (analogDOM.createElement("p", null, "Editor was my entry into a \"build-your-own code editor\" contest. While it wasn't pleasant, per se, to use, I did manage to implement text selection and copy-paste in a way that felt pretty natural.")),
        buttons: [
            {
                icon: 'play',
                text: 'Try It',
                href: 'https://jacobbloom.dev/editor/'
            },
            {
                icon: 'github',
                text: 'GitHub Repo',
                href: 'https://github.com/mrjacobbloom/editor'
            },
        ]
    },
    {
        title: 'Yolobrella',
        videoSrc: '/assets/video/yolobrella.mp4',
        technologies: ['JavaScript', 'JS Canvas'],
        description: (analogDOM.createElement("p", null, "Yolobrella is a cute lil game in which you play a cloud and use your powers of rain and shine to grow a plant.")),
        buttons: [
            {
                icon: 'play',
                text: 'Try It',
                href: 'https://jacobbloom.dev/code/yolobrella/'
            },
        ]
    },
];
//# sourceMappingURL=projects.js.map