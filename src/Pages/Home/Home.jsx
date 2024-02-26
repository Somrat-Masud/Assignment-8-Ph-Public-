
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import PhoneCard from "../../Components/Phones/PhoneCard";
import { useEffect, useState } from "react";



const Home = () => {
    const [card, setCard] = useState([])
  const phones =useLoaderData()

  useEffect(() => {
            setCard(phones)
  }, [phones])
  
    return (
        <div>
        
            <Banner></Banner>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
               {
                   card?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
               </div>
       
        </div>
    );
};

export default Home;