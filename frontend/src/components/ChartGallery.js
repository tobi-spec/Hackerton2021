import BarChart from "./BarChart";
import styled from "styled-components";

export default function ChartGallery({
     paradiseCountries,
     panamaCountries,
     offShoreCountriesCTL,
     offShoreCountriesPT,
     paradisePeople,
     panamaPeople,
     offShorePeopleCTL,
     offShorePeoplePT,
})
{
    const countryBarChartTitle = `Top 10 Off Shore Destination of `
    const peopleBarCartTitle = `Top 10 country of origin of involved people of `

    return <Wrapper>
        <InnerWrapper>
        <BarChart chartValue={paradiseCountries} title={countryBarChartTitle} name={"AppleBy"}/>
        <BarChart chartValue={paradisePeople} title={peopleBarCartTitle} name={"AppleBy"}/>
        </InnerWrapper>

        <InnerWrapper>
        <BarChart chartValue={panamaCountries} title={countryBarChartTitle} name={"Mossack Fonseca"}/>
        <BarChart chartValue={panamaPeople} title={peopleBarCartTitle} name={"Mossack Fonseca"}/>
        </InnerWrapper>

        <InnerWrapper>
        <BarChart chartValue={offShoreCountriesCTL} title={countryBarChartTitle} name={"Commonwealth Trust Limited"}/>
        <BarChart chartValue={offShorePeopleCTL} title={peopleBarCartTitle} name={"Commonwealth Trust Limited"}/>
        </InnerWrapper>

        <InnerWrapper>
        <BarChart chartValue={offShoreCountriesPT} title={countryBarChartTitle} name={"Portcullis Trustnet"}/>
        <BarChart chartValue={offShorePeoplePT} title={peopleBarCartTitle} name={"Portcullis Trustnet"}/>
        </InnerWrapper>
    </Wrapper>
}

const Wrapper = styled.div`
`
const InnerWrapper = styled.div`
  display: flex;
  margin: 10px 20px 20px 10px;
`
