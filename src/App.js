
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';
import MyThirdComponent from './MyThirdComponent';
import MyFourthComponent from './MyFourthComponent';
import MyFifthComponent from './MyFifthComponent';
import MySixthComponent from './MySixthComponent';
import MySeventhComponent from './MySeventhComponent';
import MyEighthComponent from './MyEighthComponent';
import MyNinethComponent from './MyNinethComponent';
import MyTenthComponent from './MyTenthComponent';
import MasterComponent from './MasterComponent';
import ParentComponent from './ParentComponent';
import DashboardComponent from './Trial1/DashboardComponent'



function App() {
  return (
    <div>
       {/* <MasterComponent name="1" height="45"/>
      <MasterComponent name="2" height="67"/>
      <MasterComponent name="3" height="34"/>
      <MasterComponent name="4" height="30"/> */}

      {/* <MyFirstComponent/>
      <MySecondComponent/>
      <MyThirdComponent/>
      <MyFourthComponent/>
      <MyFifthComponent/>
      <MySixthComponent/>
      <MySeventhComponent/>
      <MyEighthComponent/>
      <MyNinethComponent/>
      <MyTenthComponent/>  */}

      {/* <ParentComponent name="kojo" gender="male" age="23" email="kojo@gmail.com"/> */}
      <DashboardComponent 
      dashboardfirstname="Keren" 
      dashboardlastname="Animwaah" 
      dashboardemail="Kanimwaah@gmail.com"
       dashboarddateofbirth="05/08/1990" 
       dashboardmobile="0245406296" />
   </div>
   
    );
}


export default App;
