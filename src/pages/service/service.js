import { Fragment } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import SkillBox from "../../components/skillBox";
import { FrontEndIcon } from "../../components/skillIcons";
import BackEndIcon from "../../components/skillIcons/backEndIcon";
import MobileIcon from "../../components/skillIcons/mobileIcon";
import { Center } from "../../components/svgEffects";
import { useGlobalContext } from "../../contexts/global-context";
import { Container, Separator } from "./styles";

const skills = [
    {
        title: "FrontEnd Development",
        icon: <FrontEndIcon/>,
        description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam. Quo aliquam nihil vel delectus ipsam et quia provident? Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam. Quo aliquam nihil vel delectus ipsam et quia provident? ",
        technologies: [
            {
                name: "Javascript",
                description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam.",
                progress: 90,
            },{
                name: "ReactJs",
                description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam.",
                progress: 80,
            },{
                name: "NextJs",
                description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam.",
                progress: 60,
            },{
                name: "Vue",
                description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam.",
                progress: 70,
            }
        ]
    },{
        title: "Backend Development",
        icon: <BackEndIcon/>,
        description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam. Quo aliquam nihil vel delectus ipsam et quia provident? Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam. Quo aliquam nihil vel delectus ipsam et quia provident? ",
        technologies: [
            {
                name: "Python",
                description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam.",
                progress: 70,
            },{
                name: "Ruby",
                description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam.",
                progress: 70,
            },{
                name: "Ruby",
                description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam.",
                progress: 60,
            },{
                name: "MongoDB",
                description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam.",
                progress: 50,
            },{
                name: "PostgreSQL",
                description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam.",
                progress: 50,
            },{
                name: "NestJs",
                description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam.",
                progress: 70,
            }
        ],
    },{
        title: "Mobile Development",
        icon: <MobileIcon/>,
        description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam. Quo aliquam nihil vel delectus ipsam et quia provident? Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam. Quo aliquam nihil vel delectus ipsam et quia provident? ",
        technologies: [
            {
                name: "ReactNative",
                description: "Lorem ipsum dolor sit amet. Et reiciendis voluptates est alias iusto id quia minus. Vel provident dolorem et veniam quia et natus rerum quo molestiae excepturi qui omnis numquam.",
                progress: 70,
            }
        ],
    }
]

export default function Service(){
    const {globalSkills} = useGlobalContext();
    return (
        <Container>
            <PageTitle>Habilidades</PageTitle>
            {
                globalSkills.map((s, idx) => (
                    <Fragment>
                        <SkillBox
                            key={idx}
                            title={s.title}
                            icon={s.icon}
                            description={s.description}
                            technologies={s.technologies}
                            reversed={idx % 2 ? true : false}
                        />
                        <Separator data-aos={"fade-up"}>
                            <Center horizontalDeformation="center" verticalDeformation="bottom" height={30}/>
                        </Separator>
                    </Fragment>
                ))
            }
        </Container>
    )
}