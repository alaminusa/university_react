
const Label = ({labelName, className }) => {
    return (
  
      <Container>
          <label className={`${className} text-base font-bold block`}>{labelName}</label>
      </Container>
      
    )
  }
  
  export default Label