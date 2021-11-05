import BillionaireCard from "./BillionaireCard";
import styled from "styled-components";

export default function BillionaireGallery({billionare}){
    const billionaireCards = billionare.map((billi) =>  (
        <BillionaireCard
            name={billi.name}
            position={billi.position}
            found={billi.found}
        />
    ))
    console.log(billionare)
    return <div>
        <p>These people are already great in saving taxes:</p>
        <Wrapper>
        {billionaireCards}
        </Wrapper>
    </div>
}

const Wrapper = styled.div`
display: flex;
padding: 5px;
margin-left: 200px;
`