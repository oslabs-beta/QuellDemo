"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamArr = void 0;
const QUELL_headshot_w_border_Nick_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Nick.png"));
const QUELL_headshot_w_border_Mike_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Mike.png"));
const QUELL_headshot_w_border_Rob_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Rob.png"));
const QUELL_headshot_w_border_Justin_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Justin.png"));
const QUELL_headshot_w_border_Andrei_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Andrei.png"));
const QUELL_headshot_w_border_Dasha_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Dasha.png"));
const QUELL_headshot_w_border_Derek_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Derek.png"));
const QUELL_headshot_w_border_Xiao_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Xiao.png"));
const QUELL_headshot_w_border_Robleh_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Robleh.png"));
const QUELL_headshot_w_border_Thomas_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Thomas.png"));
const QUELL_headshot_w_border_Angela_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Angela.png"));
const QUELL_headshot_w_border_Ken_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Ken.png"));
const QUELL_headshot_w_border_Jinhee_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Jinhee.png"));
const QUELL_headshot_w_border_Nayan_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Nayan.png"));
const QUELL_headshot_w_border_Tash_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Tash.png"));
const QUELL_headshot_w_border_Tim_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Tim.png"));
const QUELL_headshot_w_border_Chang_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Chang.png"));
const QUELL_headshot_w_border_Josh_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Josh.png"));
const QUELL_headshot_w_border_Robert_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Robert.png"));
const QUELL_headshot_w_border_DavidLopez_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-DavidLopez.png"));
const QUELL_headshot_w_border_IdanMichael_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-IdanMichael.png"));
const QUELL_headshot_w_border_SercanTuna_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-SercanTuna.png"));
const QUELL_headshot_w_border_ThomasPryor_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-ThomasPryor.png"));
const QUELL_headshot_ZoeH_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot ZoeH.png"));
const QUELL_headshot_JackieHe_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot JackieHe.png"));
const QUELL_headshot_CeraB_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot CeraB.png"));
const QUELL_headshot_AlexM_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot AlexM.png"));
const QUELL_headshot_w_border_RylanW_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-RylanW.png"));
const QUELL_headshot_w_border_SarahC_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-SarahC.png"));
const QUELL_headshot_w_border_HannahS_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-HannahS.png"));
const QUELL_headshot_w_border_KatieS_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-KatieS.png"));
const QUELL_headshot_w_border_GarikA_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-GarikA.png"));
const QUELL_headshot_w_border_Angelo_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Angelo.png"));
const QUELL_headshot_w_border_EmilyH_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-EmilyH.png"));
const QUELL_headshot_w_border_Keely_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Keely.png"));
const QUELL_headshot_w_border_Yusuf_png_1 = __importDefault(require("../assets/images/profile_pics/QUELL-headshot w border-Yusuf.png"));
/*
  Reusable component to generate each team member
*/
const ANGELOC = {
    name: 'Angelo Chengcuenca',
    src: QUELL_headshot_w_border_Angelo_png_1.default,
    bio: 'Angelo is a dynamic full-stack engineer that specializes in React, Express, TypeScript, and GraphQL. His goal for Quell was to achieve type safety across the entire codebase to create an application that was more maintainable and less susceptible to silent errors from type coercion. In his free time, Angelo likes going on long walks with his loyal companions, Barry and Bonnie, playing pickup basketball, and watching movies or tv shows with his partner.',
    linkedin: 'https://www.linkedin.com/in/angelotmchengcuenca/',
    github: 'https://github.com/amchengcuenca',
};
const EMILYH = {
    name: 'Emily Hoang',
    src: QUELL_headshot_w_border_EmilyH_png_1.default,
    bio: "Emily is a dedicated full-stack developer with a strong background in JavaScript, React, and Node.js. She is dedicated to building efficient and innovative applications that improve users' lives. In her free time, Emily enjoys traveling around the world, listening to audiobooks, and exploring new restaurants and cuisines.",
    linkedin: 'https://www.linkedin.com/in/emilyhoang',
    github: 'https://www.github.com/emilythoang',
};
const KEELYT = {
    name: 'Keely Timms',
    src: QUELL_headshot_w_border_Keely_png_1.default,
    bio: "Keely Timms is a versatile full-stack developer who excels in React, SQL, and TypeScript. With a keen eye for detail and a passion for solving complex problems, she enjoys building applications that can make a positive impact on the world. When she's not coding, Keely can be found snowboarding, baking, or playing with her two cats, Oscar and Keety.",
    linkedin: 'https://www.linkedin.com/in/keelyt/',
    github: 'https://github.com/keelyt',
};
const YUSUFB = {
    name: 'Yusuf Bhaiyat',
    src: QUELL_headshot_w_border_Yusuf_png_1.default,
    bio: "Yusuf Bhaiyat is a full-stack developer with a strong background in React and Node.js He is dedicated to building efficient and innovative applications that improve users' lives. Yusuf is an active member of the tech community, frequently attending hackathons and meetups to learn and collaborate with other professionals. In his free time, he loves to travel and immerse himself in new cultures and experiences.",
    linkedin: 'https://www.linkedin.com/in/yusufbhaiyat/',
    github: 'https://github.com/yusuf-bha',
};
const KATIES = {
    name: 'Katie Sandfort',
    src: QUELL_headshot_w_border_KatieS_png_1.default,
    bio: 'Katie is an analytical and creative full-stack developer who loves discussing the pros and cons of different cache eviction policies. Specializing in JavaScript (ES6+), TypeScript, and React, she loves creating applications that help solve problems in her community. When she’s not busy creating applications, she loves running with her dog and listening to audiobooks.',
    linkedin: 'https://www.linkedin.com/in/katie-sandfort/',
    github: 'https://github.com/katiesandfort',
};
const HANNAHS = {
    name: 'Hannah Spencer',
    src: QUELL_headshot_w_border_HannahS_png_1.default,
    bio: 'Hannah is an intuitive software engineer with a passion for debugging. Her goal for Quell is to ensure that Quell exceeds expectations in terms of functionality and is easily navigable by future contributors. Outside of the realm of Quell and software development, she enjoys hiking to discover waterfalls, modern dance, and wire wrapping gemstones.',
    linkedin: 'https://www.linkedin.com/in/hannahspen/',
    github: 'https://github.com/Hannahspen',
};
const SARAHCYNN = {
    name: 'Sarah Cynn',
    src: QUELL_headshot_w_border_SarahC_png_1.default,
    bio: 'Sarah is an empathetic full-stack developer who specializes in React, Node, and GraphQL, and she values collaboration with other software developers to create meaningful and helpful developer tools. In her free time, Sarah enjoys baking bread, learning music production, and playing with her baby niece.',
    linkedin: 'https://www.linkedin.com/in/cynnsarah/',
    github: 'https://github.com/cynnsarah',
};
const GARIKASPLUND = {
    name: 'Garik Asplund',
    src: QUELL_headshot_w_border_GarikA_png_1.default,
    bio: 'Garik is a full-stack developer who loves new frameworks and runtimes! He also has a special spot for databases in all their variety. He is an avid backcountry skier and trailrunner who lives in rural northeast Oregon with his two cats, Wasabi and Ginger, and dog, Noodle.',
    linkedin: 'https://www.linkedin.com/in/garik-asplund/',
    github: 'https://github.com/garikAsplund',
};
const RYLANWESSEL = {
    name: 'Rylan Wessel',
    src: QUELL_headshot_w_border_RylanW_png_1.default,
    bio: 'Rylan is a determined software engineer that loves working with other developers sharing a passion for creating a better community with efficient and effective software applicatios, like Quell! I love playing videogames and going for hikes in the mountains in my free time, but also coding and contributing to the open-source community.',
    linkedin: 'https://www.linkedin.com/in/rylan-wessel',
    github: 'https://github.com/XpIose',
};
const CERABARROW = {
    name: 'Cera Barrow',
    src: QUELL_headshot_CeraB_png_1.default,
    bio: 'Cera is a full-stack developer specializing in React and Node with a passion for combining efficiency with style. She lives in Seattle with her four Gameboy Advances on the off-chance that anyone wants to come over and play Final Fantasy: Crystal Chronicles.',
    linkedin: 'http://www.linkedin.com/in/cerabarrow/',
    github: 'https://github.com/cerab',
};
const JACKIEHE = {
    name: 'Jackie He',
    src: QUELL_headshot_JackieHe_png_1.default,
    bio: 'Jackie is a full-stack software engineer with experience in React, Material UI, and graphQL. His goal with Quell was to create a tool that would optimize both performance and security for graphQL developers. In his free time, he loves quickscoping on COD and grinding woodcutting on Runescape.',
    linkedin: 'https://www.linkedin.com/in/jackie-he/',
    github: 'https://github.com/Jckhe',
};
const ALEXANDERMARTINEZ = {
    name: 'Alexander Martinez',
    src: QUELL_headshot_AlexM_png_1.default,
    bio: 'Alexander is a full-stack software engineer specializing in React, Node.js, and GraphQL. He is passionate about creating efficiencies in data fetching, creating meaningful products, and contributing to the open-source community. In his off time, he enjoys playing Dota 2, rock climbing, playing with his cavapoo named Basil, and trying new sushi restaurants.',
    linkedin: 'https://www.linkedin.com/in/alexander-martinez415/',
    github: 'https://github.com/alexmartinez123',
};
const ZOEHARPER = {
    name: 'Zoe Harper',
    src: QUELL_headshot_ZoeH_png_1.default,
    bio: 'Zoe is a full-stack software engineer with a passion for all things JavaScript. She desired Quell to be a viable and modern product and worked hard to migrate dependencies and fix logic. In her spare time she is huge ARPG nerd.',
    linkedin: 'https://www.linkedin.com/in/harperzoe/',
    github: 'https://github.com/ContraireZoe',
};
const DAVIDLOPEZ = {
    name: 'David Lopez',
    src: QUELL_headshot_w_border_DavidLopez_png_1.default,
    bio: "David is a fullstack software engineer with experience in React,Redux, GraphQL, Node.JS and Express. He takes pride in the software engineering community's culture of knowledge sharing and collaboration. When he is not at his desk, he’s probably in the garage, working on one of his project cars, brewing beer, or in the kitchen pursuing that perfect bowl of ramen.",
    linkedin: 'http://www.linkedin.com/in/david-michael-lopez/',
    github: 'https://github.com/DavidMPLopez',
};
const IDANMICHAEL = {
    name: 'Idan Michael',
    src: QUELL_headshot_w_border_IdanMichael_png_1.default,
    bio: 'Idan is a full-stack software engineer with experience in Express, React and several database models. His goal with Quell is to scale the caching algorithms to create a more thorough caching platform. In his free time he likes to practice Brazilian Jiu Jitsu and watch movies.',
    linkedin: 'https://www.linkedin.com/in/idanmichael/',
    github: 'https://github.com/IdanMichael',
};
const SERCANTUNA = {
    name: 'Sercan Tuna',
    src: QUELL_headshot_w_border_SercanTuna_png_1.default,
    bio: 'Sercan is a full stack software engineer specializing in React , Nodejs ,Express and GraphQl . He has particular interest in user interface and performance optimization , and passionate about contributing to the open-source community . In his spare time , he can be found playing tennis , watching soccer and traveling .',
    linkedin: 'https://www.linkedin.com/in/sercantuna/',
    github: 'https://github.com/srcntuna',
};
const THOMASPRYOR = {
    name: 'Thomas Pryor',
    src: QUELL_headshot_w_border_ThomasPryor_png_1.default,
    bio: 'Tom Pryor is a software engineer who also enjoys playing guitar and video games in between coding full-stack projects! Everything from Express on the back end to React on the front end!',
    linkedin: 'https://www.linkedin.com/in/thomas-pryor-639347b2',
    github: 'https://github.com/Turmbeoz',
};
const ROBERTHOWTON = {
    name: 'Robert Howton',
    src: QUELL_headshot_w_border_Robert_png_1.default,
    bio: 'Robert is a software engineer with experience in React, Node.js/Express, and several database models (relational, document, and key-value). He believes in the importance of open-source software and strives to make contributions with clean, optimized, and maintainable code. When not at work, he can be found reading philosophy or science fiction, traveling to ancient sites, or sampling lesser-known varietals.',
    linkedin: 'https://www.linkedin.com/in/roberthowton/',
    github: 'https://github.com/roberthowton',
};
const CHANGCAI = {
    name: 'Chang Cai',
    src: QUELL_headshot_w_border_Chang_png_1.default,
    bio: 'Chang is a full-stack developer specializing in React and Node.js, with a passion for frontend development and optimization. He is passionate about all things engineering whether the medium is code, wood, 3D filaments and resins, fabric or otherwise.  He’s a natural born tinkerer with endless curiosity, always seeking new things to learn and new skills to master.',
    linkedin: 'https://www.linkedin.com/in/chang-c-cai/',
    github: 'https://github.com/ccai89',
};
const JOSHJORDAN = {
    name: 'Josh Jordan',
    src: QUELL_headshot_w_border_Josh_png_1.default,
    bio: 'Josh is a full-stack software engineer specializing in Express and Redis, with a passion for exploring the cross-sections of database management and system design. When he is not working, Josh can be found reading Shogun, practicing yoga, cooking delicious meals for his wife, and participating in Dionysian mysteries.',
    linkedin: 'https://www.linkedin.com/in/josh-r-jordan/',
    github: 'https://github.com/jjordan-90',
};
const JINHEECHOI = {
    name: 'Jinhee Choi',
    src: QUELL_headshot_w_border_Jinhee_png_1.default,
    bio: 'Jinhee is a full-stack software engineer specializing in React, Node.js, Express, relational databases, non-relational databases, graphQL, with a passion for cache invalidation and implementing performant client-side caching storage. Jinhee enjoys visiting local attraction places with his wife and follows New York Yankees.',
    linkedin: 'https://www.linkedin.com/in/jinheekchoi/',
    github: 'https://github.com/jcroadmovie',
};
const NAYANPARMAR = {
    name: 'Nayan Parmar',
    src: QUELL_headshot_w_border_Nayan_png_1.default,
    bio: 'Nayan is a full-stack software engineer specializing in React, Express, relational database, with a passion for contributing to open-source code. He has strong interest in performance optimization and front-end tech. In his free time, Nayan enjoys watching a variety of movies, and always try to find interesting books to read.',
    linkedin: 'https://www.linkedin.com/in/nparmar1/',
    github: 'https://github.com/nparmar1',
};
const TASHRIFSANIL = {
    name: 'Tashrif Sanil',
    src: QUELL_headshot_w_border_Tash_png_1.default,
    bio: 'Tash is a full-stack software engineer specializing in Node.js, C++, Redis, GraphQL, with a passion for performance optimization. His goal with Quell is to improve server side cache retrieval response time and cache invalidation. In his free time, he likes to practice latte art.',
    linkedin: 'https://www.linkedin.com/in/tashrif-sanil-5a499415b/',
    github: 'https://github.com/tashrifsanil',
};
const TIMFRENZIL = {
    name: 'Tim Frenzel',
    src: QUELL_headshot_w_border_Tim_png_1.default,
    bio: 'Tim is a passionate database and system engineer with a strong desire to learn and work on scalable and non-linear systems that ultimately allow him to take deeper dives into data analytics. Hence, he focused primarily on performance questions like caching strategies, batching, and in-memory databases. Outside of engineering time, Tim is working on his meme mastery, travels across the globe, and develops investment algos.',
    linkedin: 'https://www.linkedin.com/in/tim-frenzel-mba-cfa-frm-61a35499/',
    github: 'https://github.com/TimFrenzel',
};
const ROBLEHFARAH = {
    name: 'Robleh Farah',
    src: QUELL_headshot_w_border_Robleh_png_1.default,
    bio: 'Robleh is a full-stack software engineer specializing in React, Express, and relational databases, with a passion for code dependability, optimization, and test driven development. His devotion to open-source projects, and strong interest in GraphQL, makes him an ideal candidate for Quell. Outside of coding, Robleh enjoys hiking, tea collecting, and volunteering in developing countries abroad.',
    linkedin: 'https://www.linkedin.com/in/farahrobleh/',
    github: 'https://github.com/farahrobleh',
};
const THOMASREEDER = {
    name: 'Thomas Reeder',
    src: QUELL_headshot_w_border_Thomas_png_1.default,
    bio: 'Thomas is a full-stack JavaScript engineer specializing in React and Node.js, and always wishes he had more time to write tests. His goal with Quell is maintaining a consistent, modular codebase to make future development simple and enjoyable. In his free time he can be found trying to bake pastries, or singing ABBA songs at karaoke.',
    linkedin: 'https://www.linkedin.com/in/thomas-reeder/',
    github: 'https://github.com/nomtomnom',
};
const ANGELAFRANCO = {
    name: 'Angela Franco',
    src: QUELL_headshot_w_border_Angela_png_1.default,
    bio: 'Angela is a full-stack software engineer experienced in React and Express, with a passion for code reliability and testing. She has a particular interest in exploring innovative technologies to build tools that make the world a better place. Outside of coding, Angela is a travel and hospitality enthusiast and a Soccer World Cup fanatic.',
    linkedin: 'https://www.linkedin.com/in/angela-j-franco/',
    github: 'https://github.com/ajfranco18',
};
const KENLITTON = {
    name: 'Ken Litton',
    src: QUELL_headshot_w_border_Ken_png_1.default,
    bio: 'Ken is a full-stack JavaScript software engineer with a passion for test driven development and recursive algorithms. He cares deeply about sharing what he learns through open-source projects and making the world a more open-minded place to live. Outside of coding, Ken is an avid reader of classical fiction, psychological studies, and hip-hop lyrics.',
    linkedin: 'https://www.linkedin.com/in/ken-litton/',
    github: 'https://github.com/kenlitton',
};
const ANDREICABRERAO = {
    name: 'Andrei Cabrera',
    src: QUELL_headshot_w_border_Andrei_png_1.default,
    bio: 'Andrei Cabrera is a full-stack JavaScript engineer with a particular interest in user interaction and website performance. specializing in React and Express with a focus in server protocols. He is passionate about open-source projects, refactoring code and testing. Dedicate to his family and friends.',
    linkedin: 'https://www.linkedin.com/in/andrei-cabrera-00324b146/',
    github: 'https://github.com/Andreicabrerao',
};
const DASHAKONDRATENKO = {
    name: 'Dasha Kondratenko',
    src: QUELL_headshot_w_border_Dasha_png_1.default,
    bio: "Dasha is a full-stack software engineer experienced in JavaScript. She is passionate about code readability, open-source projects and believes in technology's ability to be a force for good. Outside of programming, she is dedicated to her two dogs.",
    linkedin: 'https://www.linkedin.com/in/dasha-k/',
    github: 'https://github.com/dasha-k',
};
const DEREKSIROLA = {
    name: 'Derek Sirola',
    src: QUELL_headshot_w_border_Derek_png_1.default,
    bio: 'Derek is a full-stack JavaScript engineer with a particular interest for React, Redux, and Express. His passion for community-developed open-source projects makes him an exceptional candidate for Quell. Outside of coding, Derek is an avid piano player and an enthusiastic hiker.',
    linkedin: 'https://www.linkedin.com/in/dsirola1/',
    github: 'https://github.com/dsirola1',
};
const XIAOYUOMEARA = {
    name: 'Xiao Yu Omeara',
    src: QUELL_headshot_w_border_Xiao_png_1.default,
    bio: 'Xiao is a full-stack software engineer with a passion for maximizing performance and resiliency. Xiao also cares deeply about maintainable code, automated testing, and community-driven open-source projects. Outside of coding, Xiao is a Pilates and indoor rowing enthusiast.',
    linkedin: 'https://www.linkedin.com/in/xyomeara/',
    github: 'https://github.com/xyomeara',
};
const NICKKRUCKENBERG = {
    name: 'Nick Kruckenberg',
    src: QUELL_headshot_w_border_Nick_png_1.default,
    bio: 'Nick Kruckenberg is a full-stack software engineer with a particular interest in systems design. He is passionate about ed tech, community-driven open-source projects, readable code, and technology’s potential to solve problems and do good -- a central topic of his teaching and research as a lecturer in philosophy.',
    linkedin: 'https://www.linkedin.com/in/nicholaskruckenberg/',
    github: 'https://github.com/kruckenberg',
};
const MIKELAURI = {
    name: 'Mike Lauri',
    src: QUELL_headshot_w_border_Mike_png_1.default,
    bio: 'Mike Lauri is a full-stack JavaScript engineer specializing in React and Node.js.  His passion for open source projects, as well as his interest in the inner workings of GraphQL, made Quell a perfect fit.  Prior to Quell, Mike worked as a songwriter and producer in New York City, best known for his work with WWE Music Group.',
    linkedin: 'https://www.linkedin.com/in/mlauri/',
    github: 'https://github.com/MichaelLauri',
};
const ROBNOBILE = {
    name: 'Rob Nobile',
    src: QUELL_headshot_w_border_Rob_png_1.default,
    bio: 'Rob Nobile is a full-stack JavaScript engineer specializing in React and Express with a focus in front-end performance optimization and server-side data transfer protocols.  Additional concentrations in tech include auth, testing and SQL.  Prior to Quell, Rob was a Frontend Engineer at EmpowerED Group, Inc. dedicated to the E-learning music space and remains an active contributor.',
    linkedin: 'https://www.linkedin.com/in/robnobile/',
    github: 'https://github.com/RobNobile',
};
const JUSTINJAEGAR = {
    name: 'Justin Jaeger',
    src: QUELL_headshot_w_border_Justin_png_1.default,
    bio: 'Justin Jaeger is a full-stack software engineer, passionate about designing and building performant user interfaces.  Outside of programming, he loves reviewing films and obsessing over Oscar predictions.',
    linkedin: 'https://www.linkedin.com/in/justin-jaeger-81a805b5/',
    github: 'https://github.com/justinjaeger',
};
exports.TeamArr = [
    ANGELOC,
    EMILYH,
    KEELYT,
    YUSUFB,
    KATIES,
    HANNAHS,
    SARAHCYNN,
    GARIKASPLUND,
    RYLANWESSEL,
    JACKIEHE,
    ALEXANDERMARTINEZ,
    CERABARROW,
    ZOEHARPER,
    DAVIDLOPEZ,
    IDANMICHAEL,
    SERCANTUNA,
    THOMASPRYOR,
    ROBERTHOWTON,
    CHANGCAI,
    JOSHJORDAN,
    JINHEECHOI,
    NAYANPARMAR,
    TASHRIFSANIL,
    TIMFRENZIL,
    ROBLEHFARAH,
    THOMASREEDER,
    ANGELAFRANCO,
    KENLITTON,
    ANDREICABRERAO,
    DASHAKONDRATENKO,
    DEREKSIROLA,
    XIAOYUOMEARA,
    NICKKRUCKENBERG,
    MIKELAURI,
    ROBNOBILE,
    JUSTINJAEGAR,
];
