const Container = ({children, className}) => {
    return (
      <div className={`${className} w-[85%] mx-auto`}>{children}</div>
    )
  }
  
  export default Container