import ProductCardImage from './ProductCardImage.jsx';

const formatNumber = (number) => {
  return number.toLocaleString('en-IN');
}

const Card = ({ title, price, src }) => {
  return (
    <div className='relative'>
      <ProductCardImage src={src} />
      <div className="flex flex-col">
        <div className="text-xl pt-6">{title}</div>
        <div className="text-lg pt-1">{formatNumber(price)}</div>
      </div>
    </div>
  )
}

export default Card