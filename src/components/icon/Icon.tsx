
import iconsSprite from '../../assets/images/sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
}

export const Icon = (props:IconPropsType) => {
  return (
    <svg width= {props.width || "50px"} height={props.height || "50px"} viewBox= {props.viewBox || "0 0 185 48"} fill={props.fill || "black"} xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
    </svg>
  );
};
