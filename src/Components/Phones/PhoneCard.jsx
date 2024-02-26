import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
const PhoneCard = ({phone}) => {
    const{ id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,description,price} = phone;
    console.log(text_button_bg_color)
    return (
        
       <Link to={`/details/${id}`}>
         <div className="">
           <div className="card bg-base-100 shadow-xl w-[350px h-[380px]" style={{background:card_bg_color}}>
            <figure><img className="w-[350px] h-[280px]" src={picture} alt="" /></figure>
            <div className="card-body" style={{color: text_button_bg_color}}>
                <h3 className={`card-title  ${category_bg_color}`}>{title}</h3>
                <h2 style={{color:text_button_bg_color}}>{category}</h2>
            </div>
            </div>
        </div>
       </Link>
    
    );
};

export default PhoneCard;