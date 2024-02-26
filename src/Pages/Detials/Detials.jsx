import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import FindDonation from "./FindDonation/FindDonation";

const Detials = () => {
    const [donation, setDonation] = useState({})
    const donationData = useLoaderData()
    const {id} = useParams()

    useEffect(()=>{
        const isExist = donationData.find(idNo => idNo.id == id) 
        setDonation(isExist)

    }, [])
    return (
        <div>
            <FindDonation donation={donation}></FindDonation>
        </div>
    );
};

export default Detials;