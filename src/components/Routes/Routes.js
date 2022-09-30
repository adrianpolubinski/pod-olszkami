import styled from "styled-components";
import Inner from "../../layouts/Inner";
import RouteBox from "./RouteBox";
import RoutesConfig from "./RoutesConfig";

const Section = styled.section`
   
    padding-top: 2rem;
    background-color: #070918;
    & h2{
        font-size: 5rem;
        text-align: center;
        font-family: Caveat, sans-serif;
        color: white;
        border-bottom: .5rem solid white;
    }

    & > div > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 900px) {
        & > div > div {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }
`

function Routes(){

    const colors= ["blue", "red", "orange", "green", "pink", "aqua"];
    const routeBoxElements = RoutesConfig.map((route, index)=>{
        return (<RouteBox key={index} color={colors[index]} title={route.title} begin={route.begin} end={route.end} distance={route.distance} time={route.time} description={route.description}/>)
    })

    return(
        <Section id="routes">
            <Inner>
                <h2>Trasy „Pod Olszkami”</h2>
                <div>
                    {routeBoxElements}
                </div>
            </Inner>
        </Section>
    )
}

export default Routes;