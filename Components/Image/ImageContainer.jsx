import defaultImage from '/public/default.jpg'

const ImageContainer = ({ children, className, load, style, ...x }) => {
  return (
    <>
      <div className={` ${className} !bg-cover`} style={{ background: `url(${load ? load : defaultImage})`, ...style }} {...x}>
        {children}
      </div>
    </>
  )
}

export default ImageContainer;