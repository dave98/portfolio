import { SvgContainer, SvgPodium} from "./style";

export default function CircularPodium({height, width}){
    return (
        <SvgContainer height={height} width={width}>
            <SvgPodium viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle  cx={50} cy={50} r={10} className="inner-circle"/>
                <circle  cx={50} cy={50} r={15} className="inner-circle"/>
                <circle  cx={50} cy={50} r={20} className="inner-circle"/>
                
                <circle  cx={50} cy={50} r={25} className="outer-circle-1"/>
                <circle cx={50} cy={50} r={28} className="outer-circle-2"/>
                <circle cx={50} cy={50} r={29} className="outer-circle-3"/>
                <circle cx={50} cy={50} r={31} className="outer-circle-4"/>
                <circle cx={50} cy={50} r={35} className="outer-circle-5"/>
                <line x1={32} y1={32} x2={68} y2={68} className="inner-cross"/>
                <line x1={32} y1={68} x2={68} y2={32} className="inner-cross"/>
                <path
                    d="M 4 50
                        A 2 2 0 0 0 0 50
                        A 2 2 0 0 0 4 50 
                        H 96
                        A 2 2 0 0 0 100 50
                        A 2 2 0 0 0 96 50
                        M 50 4
                        A 2 2 0 0 0 50 0
                        A 2 2 0 0 0 50 4
                        V 96
                        A 2 2 0 0 0 50 100
                        A 2 2 0 0 0 50 96
                    "
                    stroke="white"
                    strokeWidth={.2}
                    fill="transparent"w
                />
            </SvgPodium>
        </SvgContainer> 
    )
}
