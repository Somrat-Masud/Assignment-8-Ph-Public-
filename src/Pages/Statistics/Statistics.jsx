import { useEffect, useState } from "react";



import { useLoaderData } from "react-router-dom";
import { getStoredJobApplicaton } from "../../Components/Utility/LocalStorage";
import PieChartStyle from './PieChart';

const Statistics = () => {
    const [donation,setDonation] = useState(0)
    const [totalDonation,setTotalDonation] = useState(0)
    const staticDonation = useLoaderData();

    useEffect(()=>{
        const getDaontionId = getStoredJobApplicaton();
        setDonation(getDaontionId.length);
        const toTallDonation =  staticDonation.length - getDaontionId.length;
        setTotalDonation(toTallDonation)
    },[ staticDonation])

   

    return (
        <div className=" max-w-screen-xl mx-auto gap-4 px-6">
           
           <PieChartStyle donation={donation} totalDonation={totalDonation}></PieChartStyle>
        </div>
    );
};

export default Statistics;