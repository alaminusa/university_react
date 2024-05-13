
const Input = ({inType, inPh, className, inName, inValue}) => {
    return (
  
      <Container>
          <input type={inType} className={`${className} text-base  focus:outline-none border-b-2 border-[#F0F0F0] w-1/2 `} placeholder={inPh} name={inName} value={inValue}/>
      </Container>
  
    )
  }
  
  export default Input