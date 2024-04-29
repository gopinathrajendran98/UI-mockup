import React, { useEffect, useState } from 'react'


const Index = () => {

    const [users, setUsers] = useState([]);



    const getUsers = async () => {
        const response = await fetch("https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json");
        const FinalData = await response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getUsers();
    }, [])


    return (
      
            <div className="container">
                <div class="row my-4 ">
          
                
               
                {
                    users.map((curElem,index) => {
                        return (
                        

                            <div class="col-md-4 mb-4 me-1 " key={index}>
                                 
                                    <div class="row border p-2">
                                    <div class="col-8 fw-bolder " style={{"margin":""}}>{curElem.fullname}</div>
                                    <div class="col fw-bolder  text-end "> {curElem.twubric.total}</div>
                                    </div>
                                    
                                        <div class="row">    
                                        <div class="col border text-center">{curElem.twubric.friends}
                                        <p>{"friends"}</p>
                                        </div>
                                        
                                       
                                       <div class="col border text-center">{curElem.twubric.influence}
                                       <p>{"influence"}</p>
                                       </div>
                                       
                                       
                                       <div class="col border text-center">{curElem.twubric.chirpiness}
                                       <p>{"chirpiness"}</p>
                                       </div>
                                       </div>
                                      
                                       
                                      
                                       
                            
                                      <div class="row">
                                       <div class="col-4 border text-start ">{curElem.join_date}</div>
                                
                                    <div class="col border text-end">Remove</div>
                                    
                                    </div>
                                    </div>
                                    
                                    
                                  
                                   
                        
                            
                        
                        )
                    })
                }
              
             </div>
             </div>
                      


    )
}

export default Index;

