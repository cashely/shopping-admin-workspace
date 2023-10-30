export default function SliderItem(props) {
  const { backgroundImage } = props;
  return (
    <span style={{ display: 'block', width: '100%', height: '100%', backgroundImage: `url('${backgroundImage}')`}}></span>
  )
}

SliderItem.defaultProps = {
  backgroundImage: 'https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png'
}