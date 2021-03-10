import ProfileComponent from './ProfileComponent'

function NotificationComponent (props){
    return (
        <div>
        
            <ProfileComponent 
            profilefirstname={props.notificationfirstname} 
            profilelastname={props.notificationlastname} 
           profileemail={props.notificationemail} 
            profiledateofbirth={props.notificationdateofbirth} 
            profilemobile={props.notificationmobile}/>
       
        </div>
        
    )
}
export default NotificationComponent;