import { Container, SvgMacro, SvgWindow } from "./style";

export default function Window({children, height, width, doubleBorder = false}){
    return (
        <Container height={height} width={width}>
            {children}
            <SvgMacro 
                viewBox="0 0 1000 1000" 
                preserveAspectRatio="none" 
                zOver = {doubleBorder ? 10 : null}
            >
                <path
                    className="macro"
                    d="
                        M 20 100
                        L 50 100
                        L 100 0
                        L 250 0
                        L 300 50
                        L 320 50 L 340 20 L 350 20 L 330 50
                        L 340 50 L 360 20 L 370 20 L 350 50
                        L 360 50 L 380 20 L 390 20 L 370 50
                        L 380 50 L 400 20 L 410 20 L 390 50
                        L 860 50
                        L 860 30 L 880 30 L 880 50
                        L 900 50  L 900 20 L 950 20 L 950 50
                        L 970 50
                        L 970 30 L 1000 30 L 1000 70
                        L 950 100
                        L 800 100
                        L 780 70
                        L 550 70
                        L 540 60
                        L 280 60
                        L 270 50
                        L 260 50
                        L 220 130
                        L 100 130
                        L 90 150
                        L 30 150
                        L 40 130
                        L 5 130 
                        L 20 100
                        M 0 900
                        L 20 900 L 20 940 L 0 940 L 0 900
                        M 30 900
                        L 150 900 L 150 910 L 140 910 L 140 940 L 50 940 L 50 950 L 30 950 L 30 900
                        M 160 900
                        L 300 900 L 310 910 L 350 910 L 340 930 L 230 930 L 220 950 L 180 950 L 170 930 L 160 930 L 160 900
                        M 400 910
                        L 650 910 L 690 850 L 960 850 L 1000 910 L 1000 950 L 900 950 L 900 930 L 800 930 L 800 950 L 700 950 L 670 1000 L 600 1000 L 580 970 L 500 970 L  480 950 L 420 950 L 400 970 L 380 970 L 360 940 L 375 910 Z
                    "
                />
            
            </SvgMacro>

            <SvgWindow viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path
                    className="inner-glass"
                    d="
                        M 70 60
                        L 70 910
                        L 950 910
                        L 950 60
                        Z
                    "
                />
            
            </SvgWindow>
            
            {
                doubleBorder ?
                <SvgMacro 
                    viewBox="0 0 1000 1000" 
                    preserveAspectRatio="none"
                    zOver={-10}
                >
                    <path
                        className="macro"
                        d="
                            M 20 100
                            L 50 100
                            L 100 0
                            L 250 0
                            L 300 50
                            L 320 50 L 340 20 L 350 20 L 330 50
                            L 340 50 L 360 20 L 370 20 L 350 50
                            L 360 50 L 380 20 L 390 20 L 370 50
                            L 380 50 L 400 20 L 410 20 L 390 50
                            L 860 50
                            L 860 30 L 880 30 L 880 50
                            L 900 50  L 900 20 L 950 20 L 950 50
                            L 970 50
                            L 970 30 L 1000 30 L 1000 70
                            L 950 100
                            L 800 100
                            L 780 70
                            L 550 70
                            L 540 60
                            L 280 60
                            L 270 50
                            L 260 50
                            L 220 130
                            L 100 130
                            L 90 150
                            L 30 150
                            L 40 130
                            L 5 130 
                            L 20 100
                            M 0 900
                            L 20 900 L 20 940 L 0 940 L 0 900
                            M 30 900
                            L 150 900 L 150 910 L 140 910 L 140 940 L 50 940 L 50 950 L 30 950 L 30 900
                            M 160 900
                            L 300 900 L 310 910 L 350 910 L 340 930 L 230 930 L 220 950 L 180 950 L 170 930 L 160 930 L 160 900
                            M 400 910
                            L 650 910 L 690 850 L 960 850 L 1000 910 L 1000 950 L 900 950 L 900 930 L 800 930 L 800 950 L 700 950 L 670 1000 L 600 1000 L 580 970 L 500 970 L  480 950 L 420 950 L 400 970 L 380 970 L 360 940 L 375 910 Z
                        "
                    />
                </SvgMacro>
                : null
            }
        </Container>
    )
}