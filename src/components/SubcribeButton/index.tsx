
import style from "./style.module.scss";

interface SubcribeButtonProps{
    product:[
        priceId: string,
    ]
    
}
export function SubscribeButton({product}:SubcribeButtonProps) {
    return(
        <button
        type="button"
        className={style.subcribeButton}
        >
            Subcribe Now
        </button>
    );
    
}