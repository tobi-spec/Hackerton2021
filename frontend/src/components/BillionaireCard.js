import styled from "styled-components";

export default function BillionaireCard({name, position, found}){

    const pictures = [
    "https://upload.wikimedia.org/wikipedia/commons/7/7b/Bill_Gates_-_World_Economic_Forum_Annual_Meeting_New_York_2002.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/85/Ma_Huateng_Portrait_Painting_Collage_By_Danor_Shtruzman.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/16/MacKenzie_Scott.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Dan_Gilbert_Chairman_of_Quicken_Loans_and_Majority_Owner_of_the_Cleveland_Cavaliers.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/48/Jack_Ma%2C_2015_%28cropped%29.jpg"
    ]

    const getPicture = pictures => {
        if (name === "Bill Gates"){
            return <img src={pictures[0]} alt="a tax saver" id="pic"/>}
        if (name === "Ma Huateng"){
            return <img src={pictures[1]} alt="a tax saver" id="pic"/>}
        if (name === "MacKenzie Scott"){
            return <img src={pictures[2]} alt="a tax saver" id="pic"/>}
        if (name === "Daniel Gilbert"){
            return <img src={pictures[3]} alt="a tax saver" id="pic"/>}
        if (name === "Jack Ma"){
            return <img src={pictures[4]} alt="a tax saver" id="pic"/>}
        }


    return <Wrapper>
        <p>Name: {name}</p>
        <p>Forbes list position: {position}</p>
        <p>occurrence in papers: {found}</p>
        {getPicture(pictures)}
    </Wrapper>
}

const Wrapper = styled.div`
    border: solid;
    padding: 3px;
    margin: 6px;
`