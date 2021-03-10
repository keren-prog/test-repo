import DetailComponent from './DetailComponent'
function DashboardComponent (props){
    return (
        <div>
            <div>DashboardComponent </div>
            <DetailComponent
             detailfirstname={props.dashboardfirstname} 
             detaillastname={props.dashboardlastname} 
             detailemail={props.dashboardemail}
              detaildateofbirth={props.dashboarddateofbirth} 
              detailmobile={props.dashboardmobile}/>
       
        </div>
        
    )
}
export default DashboardComponent;