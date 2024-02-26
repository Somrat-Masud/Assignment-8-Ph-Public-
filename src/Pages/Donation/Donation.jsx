import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplicaton } from "../../Components/Utility/LocalStorage";
import Card from "./Card/Card";

const Donation = () => {
    const [appliedJob, setAppliedJob] = useState([])
    const jobs = useLoaderData();
    useEffect(() =>  {
        const storedJobId =  getStoredJobApplicaton();
        if(jobs.length > 0 ){
            const jobApplied = jobs.filter(job => storedJobId.includes(job.id))
         
            setAppliedJob(jobApplied)
        }
    }, [jobs])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 ml-7 gap-5">
            {
                appliedJob.map(job => <Card key={job.id} job={job}></Card> )
            }
        </div>
    );
};

export default Donation;