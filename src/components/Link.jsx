import { Link } from "react-router-dom"

const List = ({text,className,to}) => {
  return (
    <li><Link className={`${className} `} to={to}>{text}</Link></li>
  )
}

export default List