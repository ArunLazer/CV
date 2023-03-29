
export const Education = ({year, qualification, University}:{[key:string]:string}) => {
  return (
    <li>
        <h5 className="year">{year}</h5>
        <h4>{qualification}</h4>
        <h4>{University}</h4>
    </li>
  )
}
