import SliderImage from './SliderImage';
import style from './style.module.scss';

export default function SliderItem(props) {
  const { backgroundImage, position, title, description, buttonText } = props;
  return (
    <li style={{ transform: `translate3d(${position}, 0, 0)` }}>
      <SliderImage link={backgroundImage} />
      <div className={style.layer}>
        <h2 className={style.layer_title}>{title}</h2>
        <p className={style.layer_desc}>{description}</p>
        <button className={style.layer_button}>{buttonText}</button>
      </div>
    </li>
  )
}