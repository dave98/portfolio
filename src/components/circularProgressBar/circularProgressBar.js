import { Icons } from "../iconIndex/iconIndex";
import { Card, Dot, IconContainer, Percent } from "./style";

export default function CircularProgressBar({icon="javascript", percentaje = 0}){

    // Get length of svg
    //useEffect(() => {
    //    let path = document.querySelector(".outerCircle")
    //    let length = path?.getTotalLength();
    //    console.log(path);
    //    console.log(length); 
    //}, [])

    return (
        <Card>
            <Percent num={percentaje}>
                <Dot num={percentaje}/>
                <svg>
                    <circle cx={50} cy={50} r={50} />
                    <circle className="outerCircle" cx={50} cy={50} r={50} />
                </svg>
            </Percent>
            <IconContainer>
                {
                    Icons[icon].normal
                }
            </IconContainer>
        </Card>
    )
}