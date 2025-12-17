const Props= (props) =>{
 return(
    <div>
      <h1>This is a prop component</h1>
      <ol>
        <li>Props are:</li>
        <ul>
            <li>{props.hi}</li>  
            <li>Completed my {props.grade} grade by the age of {props.age} </li>
            <li><img src={props.img} alt="this is an image "  style={{height:"100px"}}/> </li>          
        </ul>
      </ol>
    </div>
 )
}
export default Props;