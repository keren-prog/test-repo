function ProfileComponent (props){
    return (
        <div>
              <div>ProfileComponent</div>
        <h2>Name: {props.profilefirstname}</h2>
        <h2>Gender: {props.profilelastname}</h2>
        <h2>Email: {props.profileemail}</h2>
        <h2>Date of birth: {props.profiledateofbirth}</h2>
        <h2>Mobile: {props.profilemobile}</h2>
        </div>
      
    )
}
export default ProfileComponent;