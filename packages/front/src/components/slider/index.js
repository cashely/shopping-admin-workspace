import style from './style.module.scss';
import SliderItem from './SliderItem';
import { useCallback, useEffect, useState, useRef } from 'react';
import Dot from './Dot';

export default function Slider(props = { id: '', speed: 1000, data: [] }) {
  const { data, speed } = props;
  const [ind, setInd] = useState(0);
  const [next, setNext] = useState(1);
  const [move, setMove] = useState(false);

  let sliderTimer = useRef(null);

  const clickPonit = useCallback((index) => {
    clearInterval(sliderTimer.current);
    setMove(true)
    setTimeout(() => {
      setInd(d => {
        setNext(() => {
          return index + 1 >= data.length ? 0 : index + 1
        });
        return index;
      });
      setMove(false);
      sliderTimer.current = sliderAnimate();
    }, speed)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data, speed])

  const sliderAnimate = useCallback(() => {
    return setInterval(() => {
      clickPonit(ind + 1 >= data.length ? 0 : ind + 1);
    }, 2000)
  }, [ind, data, clickPonit]);

  useEffect(() => {
    if (data.length < 2) return () => {};
    sliderTimer.current = sliderAnimate();
    return () => {
      clearInterval(sliderTimer.current);
    }
  }, [sliderAnimate, data.length])

  function getPosition(index) {
    switch(index) {
      case ind: return 0;
      case next: return '100%';
      default: return '-200%';
    }
  }

  return (
    <div className={style.slider} >
      <ul style={{ transform: `translate3d(${move ? -100 : 0}%, 0, 0)`, transition: `all ${move ? speed / 1000 + 's' : '0s'}`}}>
        {
          data.map(({id, title, buttonText, backgroundImage, description }, i) => (
            <SliderItem id={id} description={description} title={title} buttonText={buttonText} backgroundImage={backgroundImage} key={id} active={ind === i} position={getPosition(i)} />
          ))
        }
      </ul>
      <Dot index={ind} len={data.length} onChange={clickPonit} />
      {ind}={next}
    </div>
  )
}

Slider.defaultProps = {
  speed: 500
}