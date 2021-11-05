import BarChart from "./BarChart";

export default function ChartGallery({paradiseValues, panamaValues, offShoreValues}) {
    return <section>
        <BarChart chartValue={paradiseValues} name={"AppleBy"}/>
        <BarChart chartValue={panamaValues} name={"Mossack Fonseca"}/>
        <BarChart chartValue={offShoreValues} name={"Portcullis and Commonwealth Trust Limited"}/>
    </section>
}