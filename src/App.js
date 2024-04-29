// import React, { useEffect, useState } from 'react'
// import './App.css'

// const Index = () => {

//     const [users, setUsers] = useState([]);



//     const getUsers = async () => {
//         const response = await fetch("https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json");
//         const FinalData = await response.json();
//         setUsers(FinalData)
//     }



//     useEffect(() => {
//         getUsers();
//     }, [])


//     return (
      
//             <div className="container">
//                 <div class="row row-cols-1 row-cols-md-3g-4">
               
//                 {
//                     users.map((curElem,index) => {
//                         return (
                            

//                             <div key={index}>
//                                 <div class="first-container my-5">
                    
//                                 {/* <div class="row row-cols-1 row-cols-md-3g-4"> */}
//                                  <div class="col">
//                                 <div className="card " style={{"width":"18rem"}}>
//                                     <div class="card-body">
//                                     <div class="container">
//                                     <div class="col">
                                        
//                                     <tr>
//                                     <th scope="col"><h5>{curElem.fullname}</h5></th>
//                                     <th scope="col align-self-end"> {curElem.twubric.total}</th>
//                                     </tr>
//                                     {/* <div class="row align-items-start">
                                     
//                                     <div className="card-title"><h5>{curElem.fullname}</h5>
//                                    </div>
//                                     </div>
                                    
//                                     <div class="row align-items-end">
//                                     <div class="col">
//                                      {curElem.twubric.total}
//                                        </div>
//                                        </div> */}
//                                     </div>
//                                     </div>
                                    
                                  
                                    
//                                         <div class="row align-items-center"> 
                                        
//                                         <ul class="list-group list-group-horizontal">
//                                         <div class="col">
                                            
//                                         <li class="list-group-item " style={{"textAlign":"center"}}>{curElem.twubric.friends}
//                                         <p>{"friends"}</p>
//                                         </li>
//                                         </div>
//                                         <div class="col">
//                                        <li class="list-group-item" style={{"textAlign":"center"}}>{curElem.twubric.influence}
//                                        <p>{"influence"}</p>
//                                        </li>
//                                        </div>
//                                        <div class="col">
//                                        <li class="list-group-item" style={{"textAlign":"center"}}>{curElem.twubric.chirpiness}
//                                        <p>{"chirpiness"}</p>
//                                        </li>
//                                        </div>
//                                        </ul>
                                       
//                                        </div>
                                       
//                                        <tr>
//                                        <div class="row">
//                                        <td class="col ">{curElem.join_date}</td>
                                
//                                     <td class="col ">Remove</td>
                                    
//                                     </div>
//                                     </tr>
//                                     </div>
                                    
                                   
                                 
//                                 </div>
//                               </div>
//                             </div>
//                             </div>
                        
                            
                            
//                         )
//                     })
//                 }

//             </div>  
//             </div>            


//     )
// }

// export default Index;

