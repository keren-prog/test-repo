import ChildComponent from './ChildComponent'
function ParentComponent (props){
    return (
        <div>
            <div>ParentComponent </div>
            <ChildComponent childname={props.name} childgender={props.gender} childage={props.age} childemail={props.email}/>
       
        </div>
        
    )
}
export default ParentComponent;