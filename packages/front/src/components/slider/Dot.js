import style from './style.module.scss';


export default function Dot(props) {
  const {len, index=0, onChange } = props;
  return (
    <div className={style.dots}>
      {
        (() => {
          const strs= [];
          for(let i = 0; i < len; i++) {
            strs.push(<span onClick={() => onChange(i)} className={i === index && style.dot_active}></span>)
          }
          return strs;
        })()
      }
    </div>
  )
}