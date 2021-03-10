import NotificationComponent from './NotificationComponent'
function DetailComponent (props){
    return (
        <div>
            <div>DetailComponent </div>
            <NotificationComponent
             notificationfirstname={props.detailfirstname} 
             notificationlastname={props.detaillastname} 
            notificationemail={props.detailemail} 
             notificationdateofbirth={props.detaildateofbirth}
              notificationmobile={props.detailmobile}/>
       
        </div>
        
    )
}
export default DetailComponent;