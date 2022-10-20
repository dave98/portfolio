import { useEffect, useState } from "react";
import CardBox from "../../components/cardBox/cardBox";
import PageTitle from "../../components/pageTitle/pageTitle";
import { Column, Container, Row } from "./styles";
import { JavascriptIcon, ReactIcon, RailsIcon, NestIcon, MongodbIcon, PythonIcon, SequelizeIcon } from "../../components/brandedIcons";
import { useGlobalContext } from "../../contexts/global-context";

const maxColumns = 3;
export default function Projects(){
    const {globalProjects} = useGlobalContext();
    const [distribution, setDistribution] = useState([]);

    useEffect(() => {
        let projectsPerColumn = parseInt(globalProjects.length / maxColumns);
        let distributedProjects = [];
        for(let i = 0; i <globalProjects.length; i+=projectsPerColumn){
            distributedProjects.push(globalProjects.slice(i, i+projectsPerColumn));
        }
        setDistribution(distributedProjects);
    }, [])

    return (
        <Container>
            <PageTitle>Trabajos recientes</PageTitle>
            <Row>
                {
                    distribution.map((col, idx) => (
                        <Column key={idx}>
                            {
                                col.map((p, idx) => (
                                    <CardBox
                                        key={idx}
                                        title={p.title}
                                        description={p.description} 
                                        url={p.url}
                                        height={Math.floor(Math.random() * (600 - 400 + 1 ) + 400)}
                                        technologies={p.technologies}
                                        data-aos={"fade-up"}
                                    />   
                                ))
                            }
                        </Column>
                    ))
                }
            </Row>
        </Container>
    )
}  