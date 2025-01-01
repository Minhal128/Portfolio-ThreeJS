import { useEffect, useRef } from "react"
import { gsap } from "gsap";

export default function ProjectsList() {
    const Projects = [
        {
            sectionTitle: "Web Development Projects",
            data: [
                {
                    title: "SPYSEE.",
                    hoverTitle: "SPYWARE.",
                    subTitle: "Combine images and key logs for the user, new social cybertool!",
                    link: "https://github.com/Minhal128/SPYSEE"
                },
                {
                    title: "PORTFOLIO SITE",
                    hoverTitle: "THREE JS",
                    subTitle: "A website to showcase all skills and work on 3D Mockups.",
                    link: "https://portfolio-three-iota-81.vercel.app/",
                    notBlank:true
                },
                {
                    title: "SATH-CHALO",
                    hoverTitle: "MOBILE APPLICATION",
                    subTitle: "A new era of public transportation in South Asia.",
                    link: ""
                },
                {
                    title: "bhAI",
                    hoverTitle: "AI CHATBOT",
                    subTitle: "An impresive chatbot help to generate code for developer",
                    link: ""
                },
                {
                    title: "WE CAN SEE",
                    hoverTitle: "MOBILE APPLICATION.",
                    subTitle: "A mobile application that help blind student to move easily and understand the world around them.",
                    link: ""
                }
            ]
        },
        {
            sectionTitle: "CyberSecurity Tools Development",
            data: [
                {
                    title: "C-A-T",
                    hoverTitle: "AN ANTIVIRUS TO DETEC THE RAT AT THE FILE",
                    subTitle: "A tool to detect the RAT in the file and remove it.",
                    link: ""
                },
                {
                    title: "Vira",
                    hoverTitle: "WORM TOOL",
                    subTitle: "A tool to detect the file and multiple it.",
                    link: ""
                }
            ]
        },
        {
            sectionTitle: "AI/ML Development ",
            data: [
                {
                    title: "SyncMe",
                    hoverTitle: "FREELANCE",
                    subTitle: "A Chatbot Design To Sync All the files from P2P ",
                    link: ""
                },
                {
                    title: "HealX",
                    hoverTitle: "An AI agent",
                    subTitle: "An AI agent help to heal the pateint",
                    link: ""
                },
                {
                    title: "Phoenix",
                    hoverTitle: "ChatBOT",
                    subTitle: "I tried to make a chatbot help me to open my all functionality.",
                    link: "https://github.com/Minhal128/phoenix118"
                },
            ]
        }
    ]

    return (
        <>
            {
                Projects.map((project,index) => {
                    return (
                        <section key={index} className="my-24">
                            <section className="container mx-auto p-4">
                                <h1 className="font-bold text-xl text-primary">{project.sectionTitle}</h1>
                            </section>
                            {
                                project.data.map((val,key) => {
                                    return (
                                        <Comp key={key} val={val}></Comp>
                                    )
                                })
                            }
                        </section>
                    )
                })
            }
        </>
    )
}

function Comp(props:{val:{
    title: string;
    hoverTitle: string;
    subTitle: string;
    notBlank?:boolean,
    link: string;
} | {
    title: string;
    hoverTitle: string;
    link: string;
    notBlank?:boolean,
    subTitle?: undefined;
}})
{
    const compRef = useRef<HTMLAnchorElement>(null);
    useEffect(()=>{
        const ctx = gsap.context(() => {
            gsap.from(
                compRef.current,{
                    yPercent:100,
                    opacity:0,
                    ease:"power4.out",
                    duration:1,
                    scrollTrigger:{
                        trigger:compRef.current,
                        start:"top 100%",
                        end:"bottom top",
                        // scrub:true,
                        // markers:true
                    }
                }
            )
        })
        return () => ctx.revert(); // cleanup! 
    },[])
    return(
        <a ref={compRef} href={props.val.link} target={props.val.notBlank?"":"_blank"} className="info-tile px-4 md:px-8 block overflow-clip group border-b-2 border-text/10 cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-primary after:origin-bottom hover:after:origin-top after:-z-10 after:duration-500 after:transition-transform after:scale-y-0 hover:after:scale-y-100">
            <div className="container relative mx-auto flex justify-between items-center">
                <div className="h-full w-full relative">
                    <h1 className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter py-12 group-hover:-translate-y-full duration-500">{props.val.title}</h1>
                    <div className="absolute h-full top-0 left-0 flex flex-col justify-center group-hover:translate-y-0 translate-y-full duration-500">
                        <h1 className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter">{props.val.title}</h1>
                        <h1 className="text-lg md:text-2xl lg:text-3xl font-medium opacity-70">{props.val.hoverTitle}</h1>
                    </div>
                </div>
                <p className="text-text/70 w-3/5 lg:group-hover:opacity-70 lg:opacity-0 transition-opacity text-xs md:text-base">
                    {props.val.subTitle}
                </p>
            </div>
        </a>
    )
}