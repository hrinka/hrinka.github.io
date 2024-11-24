import { p } from "framer-motion/client";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    docker,
    planet1,
    planet2,
    planet3,
    planet4,
    carrent,
    jobit,
    tripguide,
    threejs,
    c,
    cpp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },

  ];
  
  const experiences = [
    {
      title: "青山学院大学 総合文化政策学部総合文化政策学科卒業。",//大学卒業
      company_name: "Aoyamagakuin University",
      icon: planet1,
      iconBg: "#383E56",
      date: "2016/04 - 2020/03", 
      points: [
        "大学時代は、文化産業、地域や都市のデザイン、国際的な文化交流などを担うアート・カルチャーについて主に学んでいました。",
        "単に座学の知識として身につけるのではなく、その創造の現場に深く関わり、実践的に様々な試みをしました。",
        "特に、野外映画祭の運営に携わり、デジタルとリアルのインタラクティブな体験づくりや、イベントの企画、広報、運営などを行いました。",
        "大学在学中、途中でコロナ期間に入り、リモートでの授業となったことからオンラインでの取り組みやデジタルコンテンツの重要性を考え始めました。",
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "裏原宿にあるカルチャーの発信地、ファッション業界へ。",//surkucafeにて勤務。
      company_name: "SURKUCAFE",
      icon: planet2,
      iconBg: "#E6DEDD",
      date: "2020/07 - 2022/08",
      points: [
        "大学卒業後、自分はどんな会社に属するかよりも人としての中身を成長したいと考え、ファッションカルチャーの発祥の地、裏原宿のストリートセレクトショップにて就職しました。",
        "裏原宿、表参道に2店舗構えるSURKUCAFEは、国内・海外ストリートブランドのセレクトショップであり、主にリアルの店舗にて多くのお客さんが訪れていました。",
        "そこでは、接客、販売、経理、ECサイトの運営、SNSの運用、イベントの企画、運営など、幅広い業務を経験しました。",
        "特に、SNS運用では、デザイン、コンテンツ制作、広告運用、顧客管理、在庫管理などを行い、売上の拡大に貢献しました。",
        "リアル店舗ではとても愛されるお店でしたが、大手企業と比べたときにD2C戦略が弱いと感じ、デジタルの力をもっと活かしたいと考え、自分は現場ではなく、デジタル人材になりたいと思い始めました。",
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "フランスパリ発のエンジニア養成機関42Tokyoに合格し、プログラミング学習開始。",//フランスパリ発のエンジニア養成機関42Tokyoに合格し、プログラミング学習開始。
      company_name: "42Tokyo",
      icon: planet3,
      iconBg: "#383E56",
      date: "2022/10 - Present",
      points: [
        "自分の勤めていたショップのD2Cの戦略を強化したいという目標に加えて、世界の各地に友達を作り、旅がしたいという夢があったので、柔軟な働き方ができるエンジニアになることを決めました。",
        "42Tokyoは、フランスパリ発のエンジニア養成機関であり、1ヶ月間にわたる試験を合格すると学費無料で生涯学び続けることができるコミュニティです。",
        "ここでは、プログラミングの基礎から応用まで幅広く学び、実際にプロジェクトを通じてチームでの開発を行い、実践的なスキルを身につけています。",
        "エンジニアになることで、自分のアイデアを形にし、世界中の人々に価値を提供できると考えています。",
        "42Tokyoでの学習を通じて、エンジニアとしてのスキルを磨き、自分のアイデアを形にし、世界中の人々に価値を提供できるようになることが目標です。",
        "C言語、アルゴリズム、データ構造、ネットワーク、セキュリティ、Web開発、Docker、データベース、CI/CD、アジャイル開発などを学んでいて、現在も学習中です。",
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "エンジニアとして業務委託。",//ソフトウェアエンジニアとしてインターン。
      company_name: "株式会社MIRAMIRU",
      icon: planet4,
      iconBg: "#E6DEDD",
      date: "2023/12 - 2024/10",
      points: [
        "知人との縁で、webメディア事業を展開する株式会社MIRAMIRUに業務委託として参加しました。",
        "ここでは、React.js、Next.js、TypeScript、Tailwind CSS、Supabaseなどを使って、Webアプリケーションの開発を行っています。",
        "また、チームでの開発を通じて、コードレビューやフィードバックの提供、品質の向上に貢献していました。",
        "映画のwebメディアを運営しており、映画の情報提供や映画館の検索、映画のレビューなどを行っていました。",
        "先輩エンジニアからの指導を受けながら、実務経験を積み、エンジニアとしてのスキルを磨きました。",
        
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };