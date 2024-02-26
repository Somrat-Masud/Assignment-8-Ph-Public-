import Swal from 'sweetalert2'
import { saveJobApplication } from '../../../Components/Utility/LocalStorage';
const FindDonation = ({donation}) => {
    const{ id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,description,price} = donation;

    const handleClick = (id) =>{
        saveJobApplication(id);
    Swal.fire({  
        position: 'top-center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    
    }
    
    return (
       

        <div className="space-y-3 w-[750px] h-[850px] ml-[350px] shadow-xl " style={{background:card_bg_color}}>
            <img className="w-[750px] h-[450px]" src={picture} alt="" />
            <div className="">
            <button onClick={() => handleClick(id)}  className=" py-2 px-7 ml-6 -mt-10  bg-slate-500" style={{background:card_bg_color}}>Donate {price}</button>
           
            
            </div>
            <div className="absolute  w-[750px] h-[100px] mt-5">

            </div>
           <div className="">
           <h1 className="text-3xl font-extrabold " style={{color: text_button_bg_color}}>{title}</h1>
            <p className="text-2xl " style={{color:text_button_bg_color}}>{description}</p>
            
           </div>
        </div>
    );
};

export default FindDonation;