import BarChart from "./BarChart";
import styled from "styled-components";

export default function ChartGallery({paradiseValues, panamaValues, offShoreValuesCTL, offShoreValuesPT}) {
    return <Wrapper>
        <BarChart chartValue={paradiseValues} name={"AppleBy"}/>
        <BarChart chartValue={panamaValues} name={"Mossack Fonseca"}/>
        <BarChart chartValue={offShoreValuesCTL} name={"Commonwealth Trust Limited"}/>
        <BarChart chartValue={offShoreValuesPT} name={"Portcullis Trustnet"}/>
    </Wrapper>
}

const Wrapper = styled.div`
    width: 400px;
`