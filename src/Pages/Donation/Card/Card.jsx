
const Card = ({job}) => {
    const{ id,picture,title,category,category_bg_color,card_bg_color,button,text_button_bg_color,description,price} = job;
    return (
        <div className="">
         <div className="">
         <div className=" space-y-2  gap-3 shadow-xl flex "  style={{background:card_bg_color}} >
           <img src={picture} alt="" />
          <div>
          <h1 className="text-xl font-bold" style={{color:category_bg_color}}>{title}</h1>
            <h1 className="text-xl font-bold" style={{color: text_button_bg_color}}>{category}</h1>
            <p className="text-xl font-bold" style={{color:category_bg_color}}>{price}</p>
            <button className=" btn text-[white]  text-2xl font-bold " style={{color: text_button_bg_color}}> {button}</button>
            
          </div>
         </div>
         </div>
            
        </div>
    );
};

export default Card;