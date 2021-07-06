        const ang1=[1, 1, 1];                          //left bank positions
        const ang2=[0, 0, 0];                          //right bank positions
        const dem1=[1, 1, 1];                          //left bank positions
        const dem2=[0, 0, 0];                          //right bank positions
        const boat= [0,0,0,0,0,0];                      //presence of person on boat
        const flag= [-1,-1,-1,-1,-1,-1];                         //on which side of boat person is
        const boat_flag=[0,0];
        let boatPos=0; 
        let boatSpace=0;

        function toBoat(character)
        {   
                console.log(character);
                if(character==='A1' && (boat[0]== 1 && boatPos== 0))
                {
                   // document.getElementById("a1").style.left= (parseInt(document.getElementById("a1").style.right) || 0) + 0 + "px";
                   
                    ang1[0]=1;
                    boat[0]=0;
                    boatSpace--;
                    if(flag[0]==0){
                        boat_flag[0]=0;
                        document.getElementById('t1').rows[0].cells[0].innerHTML=document.getElementById('t1').rows[0].cells[7].innerHTML;
                        document.getElementById('t1').rows[0].cells[7].innerHTML="&nbsp";
                    }
                    else if(flag[0]==1){
                        boat_flag[1]=0;
                        document.getElementById('t1').rows[0].cells[0].innerHTML=document.getElementById('t1').rows[0].cells[8].innerHTML;
                        document.getElementById('t1').rows[0].cells[8].innerHTML="&nbsp";
                    }
                    
                    //break;

                }
                else if(character==='A2' && (boat[1]== 1 && boatPos== 0))
                {
                    ang1[1]=1;
                    boat[1]=0;
                    boatSpace--;
                    if(flag[1]==0){
                        boat_flag[0]=0;
                        document.getElementById('t1').rows[0].cells[1].innerHTML=document.getElementById('t1').rows[0].cells[7].innerHTML;
                        document.getElementById('t1').rows[0].cells[7].innerHTML="&nbsp";
                    }
                    else if(flag[1]==1){
                        boat_flag[1]=0;
                        document.getElementById('t1').rows[0].cells[1].innerHTML=document.getElementById('t1').rows[0].cells[8].innerHTML;
                        document.getElementById('t1').rows[0].cells[8].innerHTML="&nbsp";
                    }
                    //break;

                }
                else if(character==='A3' && (boat[2]== 1 && boatPos== 0))
                {
                    ang1[2]=1;
                    boat[2]=0;
                    boatSpace--;
                    if(flag[2]==0){
                        boat_flag[0]=0;
                        document.getElementById('t1').rows[0].cells[2].innerHTML=document.getElementById('t1').rows[0].cells[7].innerHTML;
                        document.getElementById('t1').rows[0].cells[7].innerHTML="&nbsp";
                    }
                    else if(flag[2]==1){
                        boat_flag[1]=0;
                        document.getElementById('t1').rows[0].cells[2].innerHTML=document.getElementById('t1').rows[0].cells[8].innerHTML;
                        document.getElementById('t1').rows[0].cells[8].innerHTML="&nbsp";
                    }
                    //break;

                }
                else if(character==='D1' && (boat[3]== 1 && boatPos== 0))
                {
                    dem1[0]=1;
                    boat[3]=0;
                    boatSpace--;
                    if(flag[3]==0){
                        boat_flag[0]=0;
                        document.getElementById('t1').rows[0].cells[3].innerHTML=document.getElementById('t1').rows[0].cells[7].innerHTML;
                        document.getElementById('t1').rows[0].cells[7].innerHTML="&nbsp";
                    }
                    else if(flag[3]==1){
                        boat_flag[1]=0;
                        document.getElementById('t1').rows[0].cells[3].innerHTML=document.getElementById('t1').rows[0].cells[8].innerHTML;
                        document.getElementById('t1').rows[0].cells[8].innerHTML="&nbsp";
                    }
                    //break;

                }
                else if(character==='D2' && (boat[4]== 1 && boatPos== 0))
                {
                    dem1[1]=1;
                    boat[4]=0;
                    boatSpace--;
                    if(flag[4]==0){
                        boat_flag[0]=0;
                        document.getElementById('t1').rows[0].cells[4].innerHTML=document.getElementById('t1').rows[0].cells[7].innerHTML;
                        document.getElementById('t1').rows[0].cells[7].innerHTML="&nbsp";
                    }
                    else if(flag[4]==1){
                        boat_flag[1]=0;
                        document.getElementById('t1').rows[0].cells[4].innerHTML=document.getElementById('t1').rows[0].cells[8].innerHTML;
                        document.getElementById('t1').rows[0].cells[8].innerHTML="&nbsp";
                    }
                    //break;

                }
                else if(character==='D3' && (boat[5]== 1 && boatPos== 0))
                {
                    dem1[2]=1;
                    boat[5]=0;
                    boatSpace--;
                    if(flag[5]==0){
                        boat_flag[0]=0;
                        document.getElementById('t1').rows[0].cells[5].innerHTML=document.getElementById('t1').rows[0].cells[7].innerHTML;
                        document.getElementById('t1').rows[0].cells[7].innerHTML="&nbsp";
                    }
                    else if(flag[5]==1){
                        boat_flag[1]=0;
                        document.getElementById('t1').rows[0].cells[5].innerHTML=document.getElementById('t1').rows[0].cells[8].innerHTML;
                        document.getElementById('t1').rows[0].cells[8].innerHTML="&nbsp";
                    }
                    //break;

                }
                else if(character==='A1' && (boat[0]== 1 && boatPos== 1))
                {
                    
                    ang2[0]=1;
                    boat[0]=0;
                    boatSpace--;
                    if(flag[0]==0){
                        boat_flag[0]=0;
                        document.getElementById('t1').rows[0].cells[12].innerHTML=document.getElementById('t1').rows[0].cells[9].innerHTML;
                        document.getElementById('t1').rows[0].cells[9].innerHTML="&nbsp";

                    }
                    else if(flag[0]==1){
                        boat_flag[1]=0;
                        document.getElementById('t1').rows[0].cells[12].innerHTML=document.getElementById('t1').rows[0].cells[10].innerHTML;
                        document.getElementById('t1').rows[0].cells[10].innerHTML="&nbsp";                    }
                    
                    //break;

                }
                else if(character==='A2' && (boat[1]== 1 && boatPos== 1))
                {
                    
                    ang2[1]=1;
                    boat[1]=0;
                    boatSpace--;
                    if(flag[1]==0){
                        boat_flag[0]=0;
                        document.getElementById('t1').rows[0].cells[13].innerHTML=document.getElementById('t1').rows[0].cells[9].innerHTML;
                        document.getElementById('t1').rows[0].cells[9].innerHTML="&nbsp";                   
                     }
                    else if(flag[1]==1){
                        boat_flag[1]=0;
                        document.getElementById('t1').rows[0].cells[13].innerHTML=document.getElementById('t1').rows[0].cells[10].innerHTML;
                        document.getElementById('t1').rows[0].cells[10].innerHTML="&nbsp";
                    }
                    
                    //break;

                }
                else if(character==='A3' && (boat[2]== 1 && boatPos== 1))
                {
                    
                    ang2[2]=1;
                    boat[2]=0;
                    boatSpace--;
                    if(flag[2]==0){
                        boat_flag[0]=0;
                        document.getElementById('t1').rows[0].cells[14].innerHTML=document.getElementById('t1').rows[0].cells[9].innerHTML;
                        document.getElementById('t1').rows[0].cells[9].innerHTML="&nbsp";
                       }
                    else if(flag[2]==1){
                        boat_flag[1]=0;
                        document.getElementById('t1').rows[0].cells[14].innerHTML=document.getElementById('t1').rows[0].cells[10].innerHTML;
                        document.getElementById('t1').rows[0].cells[10].innerHTML="&nbsp";                   
                     }
                    
                    //break;

                }
                else if(character==='D1' && (boat[3]== 1 && boatPos== 1))
                {
                    
                    dem2[0]=1;
                    boat[3]=0;
                    boatSpace--;
                    if(flag[3]==0){
                        boat_flag[0]=0;
                        document.getElementById('t1').rows[0].cells[15].innerHTML=document.getElementById('t1').rows[0].cells[9].innerHTML;
                        document.getElementById('t1').rows[0].cells[9].innerHTML="&nbsp";                    
                    }
                    else if(flag[3]==1){
                        boat_flag[1]=0;
                        document.getElementById('t1').rows[0].cells[15].innerHTML=document.getElementById('t1').rows[0].cells[10].innerHTML;
                        document.getElementById('t1').rows[0].cells[10].innerHTML="&nbsp";                    
                    }
                    
                    //break;

                }
                else if(character==='D2' && (boat[4]== 1 && boatPos== 1))
                {
                    
                    dem2[1]=1;
                    boat[4]=0;
                    boatSpace--;
                    if(flag[4]==0){
                        boat_flag[0]=0;
                        document.getElementById('t1').rows[0].cells[16].innerHTML=document.getElementById('t1').rows[0].cells[9].innerHTML;
                        document.getElementById('t1').rows[0].cells[9].innerHTML="&nbsp";                    
                    }
                    else if(flag[4]==1){
                        boat_flag[1]=0;
                        document.getElementById('t1').rows[0].cells[16].innerHTML=document.getElementById('t1').rows[0].cells[10].innerHTML;
                        document.getElementById('t1').rows[0].cells[10].innerHTML="&nbsp";                    
                    }
                    
                    //break;

                }
                else if(character==='D3' && (boat[5]== 1 && boatPos== 1))
                {
                    
                    dem2[2]=1;
                    boat[5]=0;
                    boatSpace--;
                    if(flag[5]==0){
                        boat_flag[0]=0;
                        document.getElementById('t1').rows[0].cells[17].innerHTML=document.getElementById('t1').rows[0].cells[9].innerHTML;
                        document.getElementById('t1').rows[0].cells[9].innerHTML="&nbsp";                    
                    }
                    else if(flag[5]==1){
                        boat_flag[1]=0;
                        document.getElementById('t1').rows[0].cells[17].innerHTML=document.getElementById('t1').rows[0].cells[10].innerHTML;
                        document.getElementById('t1').rows[0].cells[10].innerHTML="&nbsp";                    
                    }
                    
                    //break;

                }

                else if(character==='A1' && ang1[0]== 1)
                {
                    if(boatPos== 0)
                    {   
                        

                        
                        if(boatSpace== 0 || boat_flag[0]==0)
                        {   //document.getElementById("a1").style.left= (parseInt(document.getElementById("a1").style.left) || 0) + 550 + "px";
                            document.getElementById('t1').rows[0].cells[7].innerHTML=document.getElementById('t1').rows[0].cells[0].innerHTML;
                            document.getElementById('t1').rows[0].cells[0].innerHTML="&nbsp";
                            flag[0]=0;
                            ang1[0]=0;
                            boat[0]=1;
                            boat_flag[0]=1;
                            
                        }
                        else if(boatSpace== 1)
                        {
                            //document.getElementById("a1").style.left= (parseInt(document.getElementById("a1").style.left) || 0) + 640 + "px";
                            document.getElementById('t1').rows[0].cells[8].innerHTML=document.getElementById('t1').rows[0].cells[0].innerHTML;
                            document.getElementById('t1').rows[0].cells[0].innerHTML="&nbsp";
                             flag[0]=1;
                            ang1[0]=0;
                            boat[0]=1;
                            boat_flag[1]=1;
                        }
                        boatSpace++;

                        


                    }
                   
                }
                
                else if(character==='A2' && ang1[1]===1)
                {
                    if(boatPos===0)
                    {
                        if(boatSpace===0 || boat_flag[0]==0)
                        {
                            //document.getElementById("a2").style.left= (parseInt(document.getElementById("a2").style.left) || 0) + 470 + "px";
                            document.getElementById('t1').rows[0].cells[7].innerHTML=document.getElementById('t1').rows[0].cells[1].innerHTML;
                            document.getElementById('t1').rows[0].cells[1].innerHTML="&nbsp";
                            ang1[1]=0;
                            boat[1]=1;
                            flag[1]=0;
                            boat_flag[0]=1;
                        }
                        else if(boatSpace===1)
                        {
                            document.getElementById('t1').rows[0].cells[8].innerHTML=document.getElementById('t1').rows[0].cells[1].innerHTML;
                            document.getElementById('t1').rows[0].cells[1].innerHTML="&nbsp";
                            ang1[1]=0;
                            boat[1]=1;
                            flag[1]=1;
                            boat_flag[1]=1;
                        }
                        boatSpace++;

                    }
                }
                else if(character==='A3' && ang1[2]===1)
                {
                    if(boatPos===0)
                    {
                        if(boatSpace===0 || boat_flag[0]==0)
                        {
                            document.getElementById('t1').rows[0].cells[7].innerHTML=document.getElementById('t1').rows[0].cells[2].innerHTML;
                            document.getElementById('t1').rows[0].cells[2].innerHTML="&nbsp";
                            ang1[2]=0;
                            boat[2]=1;
                            flag[2]=0;
                            boat_flag[0]=1;
                        }
                        else if(boatSpace===1)
                        {
                            document.getElementById('t1').rows[0].cells[8].innerHTML=document.getElementById('t1').rows[0].cells[2].innerHTML;
                            document.getElementById('t1').rows[0].cells[2].innerHTML="&nbsp";
                            ang1[2]=0;
                            boat[2]=1;
                            flag[2]=1;
                            boat_flag[1]=1;
                        }
                        boatSpace++;

                    }
                }
                else if(character==='D1' && dem1[0]===1)
                {
                    if(boatPos===0)
                    {
                        if(boatSpace===0 || boat_flag[0]==0)
                        {
                            document.getElementById('t1').rows[0].cells[7].innerHTML=document.getElementById('t1').rows[0].cells[3].innerHTML;
                            document.getElementById('t1').rows[0].cells[3].innerHTML="&nbsp";
                            dem1[0]=0;
                            boat[3]=1;
                            flag[3]=0;
                            boat_flag[0]=1;
                        }
                        else if(boatSpace===1)
                        {
                            document.getElementById('t1').rows[0].cells[8].innerHTML=document.getElementById('t1').rows[0].cells[3].innerHTML;
                            document.getElementById('t1').rows[0].cells[3].innerHTML="&nbsp";
                            dem1[0]=0;
                            boat[3]=1;
                            flag[3]=1;
                            boat_flag[1]=1;
                        
                        }
                        boatSpace++;
                    }
                }
                else if(character==='D2' && dem1[1]===1)
                {
                    if(boatPos===0)
                    {
                        if(boatSpace===0 || boat_flag[0]==0)
                        {
                            document.getElementById('t1').rows[0].cells[7].innerHTML=document.getElementById('t1').rows[0].cells[4].innerHTML;
                            document.getElementById('t1').rows[0].cells[4].innerHTML="&nbsp";
                            dem1[1]=0;
                            boat[4]=1;
                            flag[4]=0;
                            boat_flag[0]=1;
                        }
                        else if(boatSpace===1)
                        {
                            document.getElementById('t1').rows[0].cells[8].innerHTML=document.getElementById('t1').rows[0].cells[4].innerHTML;
                            document.getElementById('t1').rows[0].cells[4].innerHTML="&nbsp";
                            dem1[1]=0;
                            boat[4]=1;
                            flag[4]=1;
                            boat_flag[1]=1;
                        }
                        boatSpace++;
                    }
                }
                else if(character==='D3' && dem1[2]===1)
                {
                    if(boatPos===0)
                    {
                        if(boatSpace===0 || boat_flag[0]==0)
                        {
                            document.getElementById('t1').rows[0].cells[7].innerHTML=document.getElementById('t1').rows[0].cells[5].innerHTML;
                            document.getElementById('t1').rows[0].cells[5].innerHTML="&nbsp";
                            dem1[2]=0;
                            boat[5]=1;
                            flag[5]=0;
                            boat_flag[0]=1;
                        }
                        else if(boatSpace===1)
                        {
                            document.getElementById('t1').rows[0].cells[8].innerHTML=document.getElementById('t1').rows[0].cells[5].innerHTML;
                            document.getElementById('t1').rows[0].cells[5].innerHTML="&nbsp";
                            dem1[2]=0;
                            boat[5]=1;
                            flag[5]=1;
                            boat_flag[1]=1;
                        }
                        boatSpace++;
                    }
                }
                


                else if(character==='A1' && ang2[0]== 1)
                {   
                    if(boatPos==1)
                    {   
                        if(boatSpace===0 || boat_flag[0]==0)
                        {    document.getElementById('t1').rows[0].cells[9].innerHTML=document.getElementById('t1').rows[0].cells[12].innerHTML;
                            document.getElementById('t1').rows[0].cells[12].innerHTML="&nbsp";
                            ang2[0]=0;
                            boat[0]=1;
                            flag[0]=0;
                            boat_flag[0]=1;
                        }
                       else if(boatSpace===1)
                        {       
                            document.getElementById('t1').rows[0].cells[10].innerHTML=document.getElementById('t1').rows[0].cells[12].innerHTML;
                            document.getElementById('t1').rows[0].cells[12].innerHTML="&nbsp";
                            ang2[0]=0;
                            boat[0]=1;
                            flag[0]=1;
                            boat_flag[1]=1;
                        }
                        boatSpace++; 
                    }
                    
                }
                else if(character==='A2' && ang2[1]== 1)
                {   
                    if(boatPos==1)
                    {
                        if(boatSpace===0 || boat_flag[0]==0)
                        {
                            document.getElementById('t1').rows[0].cells[9].innerHTML=document.getElementById('t1').rows[0].cells[13].innerHTML;
                            document.getElementById('t1').rows[0].cells[13].innerHTML="&nbsp";
                            ang2[1]=0;
                            boat[1]=1;
                            flag[1]=0;
                            boat_flag[0]=1;
                        }
                       else if(boatSpace===1)
                        {
                            document.getElementById('t1').rows[0].cells[10].innerHTML=document.getElementById('t1').rows[0].cells[13].innerHTML;
                            document.getElementById('t1').rows[0].cells[13].innerHTML="&nbsp";
                            ang2[1]=0;
                            boat[1]=1;
                            flag[1]=1;
                            boat_flag[1]=1;
                        }
                        boatSpace++; 
                    }
                    
                }
                else if(character==='A3' && ang2[2]== 1)
                { console.log(character);
                    if(boatPos==1)
                    {
                        if(boatSpace===0 || boat_flag[0]==0)
                        {
                            document.getElementById('t1').rows[0].cells[9].innerHTML=document.getElementById('t1').rows[0].cells[14].innerHTML;
                            document.getElementById('t1').rows[0].cells[14].innerHTML="&nbsp";
                            ang2[2]=0;
                            boat[2]=1;
                            flag[2]=0;
                            boat_flag[0]=1;
                        }
                        else if(boatSpace===1)
                        {
                            document.getElementById('t1').rows[0].cells[10].innerHTML=document.getElementById('t1').rows[0].cells[14].innerHTML;
                            document.getElementById('t1').rows[0].cells[14].innerHTML="&nbsp";
                            ang2[2]=0;
                            boat[2]=1;
                            flag[2]=1;
                            boat_flag[1]=1;
                        }
                        boatSpace++; 
                    }
                    
                }
                else if(character==='D1' && dem2[0]===1)
                { console.log(character);
                    if(boatPos===1)
                    {
                        if(boatSpace===0 || boat_flag[0]==0)
                        {
                            document.getElementById('t1').rows[0].cells[9].innerHTML=document.getElementById('t1').rows[0].cells[15].innerHTML;
                            document.getElementById('t1').rows[0].cells[15].innerHTML="&nbsp";
                            dem2[0]=0;
                            boat[3]=1;
                            flag[3]=0;
                            boat_flag[0]=1;
                        }
                        else if(boatSpace===1)
                        {
                            document.getElementById('t1').rows[0].cells[10].innerHTML=document.getElementById('t1').rows[0].cells[15].innerHTML;
                            document.getElementById('t1').rows[0].cells[15].innerHTML="&nbsp";
                            dem2[0]=0;
                            boat[3]=1;
                            flag[3]=1;
                            boat_flag[1]=1;
                        
                        }
                        boatSpace++;
                    }
                }
                else if(character==='D2' && dem2[1]===1)
                { console.log(character);
                    if(boatPos===1)
                    {
                        if(boatSpace===0 || boat_flag[0]==0)
                        {
                            document.getElementById('t1').rows[0].cells[9].innerHTML=document.getElementById('t1').rows[0].cells[16].innerHTML;
                            document.getElementById('t1').rows[0].cells[16].innerHTML="&nbsp";
                            dem2[1]=0;
                            boat[4]=1;
                            flag[4]=0;
                            boat_flag[0]=1;
                        }
                        else if(boatSpace===1)
                        {
                            document.getElementById('t1').rows[0].cells[10].innerHTML=document.getElementById('t1').rows[0].cells[16].innerHTML;
                            document.getElementById('t1').rows[0].cells[16].innerHTML="&nbsp";
                            dem2[1]=0;
                            boat[4]=1;
                            flag[4]=1;
                            boat_flag[1]=1;
                        }
                        boatSpace++;
                    }
                }
                else if(character==='D3' && dem2[2]===1)
                { 
                    if(boatPos===1)
                    {
                        if(boatSpace===0 || boat_flag[0]==0)
                        {
                            document.getElementById('t1').rows[0].cells[9].innerHTML=document.getElementById('t1').rows[0].cells[17].innerHTML;
                            document.getElementById('t1').rows[0].cells[17].innerHTML="&nbsp";
                            dem2[2]=0;
                            boat[5]=1;
                            flag[5]=0;
                            boat_flag[0]=1;
                        }
                        else if(boatSpace===1)
                        {
                            document.getElementById('t1').rows[0].cells[10].innerHTML=document.getElementById('t1').rows[0].cells[17].innerHTML;
                            document.getElementById('t1').rows[0].cells[17].innerHTML="&nbsp";
                            dem2[2]=0;
                            boat[5]=1;
                            flag[5]=1;
                            boat_flag[0]=1;
                        }
                        boatSpace++;
                    }
                }
            
        }

        

        
       function move()
       {
           if(boatSpace!=0)
           {
                if(boatPos==0)
                {
                    if(boat[0]==1)
                    {
                        if(flag[0]==0){
                            document.getElementById('t1').rows[0].cells[12].innerHTML=document.getElementById('t1').rows[0].cells[7].innerHTML;
                            document.getElementById('t1').rows[0].cells[7].innerHTML="&nbsp";                     
                            ang2[0]=1;
                            boat[0]=0;
                        }
                        else if(flag[0]==1){
                            document.getElementById('t1').rows[0].cells[12].innerHTML=document.getElementById('t1').rows[0].cells[8].innerHTML;
                            document.getElementById('t1').rows[0].cells[8].innerHTML="&nbsp";                       
                            ang2[0]=1;
                            boat[0]=0;
                        }
                    }
                    if(boat[1]==1)
                    {   
                        if(flag[1]==0){
                            document.getElementById('t1').rows[0].cells[13].innerHTML=document.getElementById('t1').rows[0].cells[7].innerHTML;
                            document.getElementById('t1').rows[0].cells[7].innerHTML="&nbsp";                             
                            ang2[1]=1;
                            boat[1]=0;
                        }
                        else if(flag[1]==1){
                            document.getElementById('t1').rows[0].cells[13].innerHTML=document.getElementById('t1').rows[0].cells[8].innerHTML;
                            document.getElementById('t1').rows[0].cells[8].innerHTML="&nbsp";                             
                            ang2[1]=1;
                            boat[1]=0;
                        }
                        
                    }
                    if(boat[2]==1)
                    {
                        if(flag[2]==0){
                            document.getElementById('t1').rows[0].cells[14].innerHTML=document.getElementById('t1').rows[0].cells[7].innerHTML;
                            document.getElementById('t1').rows[0].cells[7].innerHTML="&nbsp";                            
                             ang2[2]=1;
                            boat[2]=0;

                        }
                        else if(flag[2]==1){
                            document.getElementById('t1').rows[0].cells[14].innerHTML=document.getElementById('t1').rows[0].cells[8].innerHTML;
                            document.getElementById('t1').rows[0].cells[8].innerHTML="&nbsp";                            
                             ang2[2]=1;
                            boat[2]=0;
                        }
                    }
                    if(boat[3]==1)
                    {
                        if(flag[3]==0){
                            document.getElementById('t1').rows[0].cells[15].innerHTML=document.getElementById('t1').rows[0].cells[7].innerHTML;
                            document.getElementById('t1').rows[0].cells[7].innerHTML="&nbsp";                             
                            dem2[0]=1;
                            boat[3]=0;
                        }
                        else if(flag[3]==1){
                            document.getElementById('t1').rows[0].cells[15].innerHTML=document.getElementById('t1').rows[0].cells[8].innerHTML;
                            document.getElementById('t1').rows[0].cells[8].innerHTML="&nbsp";                             
                            dem2[0]=1;
                            boat[3]=0;
                        }
                        
                    }
                    if(boat[4]==1)
                    {
                        if(flag[4]==0){
                            document.getElementById('t1').rows[0].cells[16].innerHTML=document.getElementById('t1').rows[0].cells[7].innerHTML;
                            document.getElementById('t1').rows[0].cells[7].innerHTML="&nbsp";                             
                            dem2[1]=1;
                        boat[4]=0;
                        }
                        else if(flag[4]==1){
                            document.getElementById('t1').rows[0].cells[16].innerHTML=document.getElementById('t1').rows[0].cells[8].innerHTML;
                            document.getElementById('t1').rows[0].cells[8].innerHTML="&nbsp";                            
                        dem2[1]=1;
                        boat[4]=0;
                        }
                        
                    }
                    if(boat[5]==1)
                    {
                        if(flag[5]==0){
                            document.getElementById('t1').rows[0].cells[17].innerHTML=document.getElementById('t1').rows[0].cells[7].innerHTML;
                            document.getElementById('t1').rows[0].cells[7].innerHTML="&nbsp";                            
                        dem2[2]=1;
                        boat[5]=0;
                        }
                        else if(flag[5]==1){
                            document.getElementById('t1').rows[0].cells[17].innerHTML=document.getElementById('t1').rows[0].cells[8].innerHTML;
                            document.getElementById('t1').rows[0].cells[8].innerHTML="&nbsp";                            
                        dem2[2]=1;
                        boat[5]=0;
                        }
                        
                    }
                    boatPos=1;
                    boatSpace=0;
                    // document.getElementById('boat1').innerHTML='&nbsp';
                    // document.getElementById('boat2').innerHTML='&nbsp';
                    checkStatus();
                    document.getElementById('B2').innerHTML='<img src="boat.png" width="100%" alt="">'
                    document.getElementById('B1').innerHTML='&nbsp';

                }
                else
                {
                    if(boat[0]==1)
                    {   
                        if(flag[0]===0){
                            document.getElementById('t1').rows[0].cells[0].innerHTML=document.getElementById('t1').rows[0].cells[9].innerHTML;
                            document.getElementById('t1').rows[0].cells[9].innerHTML="&nbsp";                             
                            ang1[0]=1;
                            boat[0]=0;
                        }
                        else if(flag[0]===1){
                            document.getElementById('t1').rows[0].cells[0].innerHTML=document.getElementById('t1').rows[0].cells[10].innerHTML;
                            document.getElementById('t1').rows[0].cells[10].innerHTML="&nbsp";                         
                            ang1[0]=1;
                        boat[0]=0;
                        }
                        
                    }
                    if(boat[1]==1)
                    {
                        if(flag[1]===0){
                            document.getElementById('t1').rows[0].cells[1].innerHTML=document.getElementById('t1').rows[0].cells[9].innerHTML;
                            document.getElementById('t1').rows[0].cells[9].innerHTML="&nbsp"; 
                            ang1[1]=1;
                        boat[1]=0;
                        }
                        else if(flag[1]===1){
                            document.getElementById('t1').rows[0].cells[1].innerHTML=document.getElementById('t1').rows[0].cells[10].innerHTML;
                            document.getElementById('t1').rows[0].cells[10].innerHTML="&nbsp";                             
                            ang1[1]=1;
                            boat[1]=0;
                        }
                        
                    }
                    if(boat[2]==1)
                    {   
                        if(flag[2]===0){
                            document.getElementById('t1').rows[0].cells[2].innerHTML=document.getElementById('t1').rows[0].cells[9].innerHTML;
                            document.getElementById('t1').rows[0].cells[9].innerHTML="&nbsp";                             
                            ang1[2]=1;
                        boat[2]=0;
                        }
                        else if(flag[2]===1){
                            document.getElementById('t1').rows[0].cells[2].innerHTML=document.getElementById('t1').rows[0].cells[10].innerHTML;
                            document.getElementById('t1').rows[0].cells[10].innerHTML="&nbsp";                            
                             ang1[2]=1;
                        boat[2]=0;
                        }
                        
                    }
                    if(boat[3]==1)
                    {
                        if(flag[3]===0){
                            document.getElementById('t1').rows[0].cells[3].innerHTML=document.getElementById('t1').rows[0].cells[9].innerHTML;
                            document.getElementById('t1').rows[0].cells[9].innerHTML="&nbsp";                             
                            dem1[0]=1;
                        boat[3]=0;
                        }
                        else if(flag[3]===1){
                            document.getElementById('t1').rows[0].cells[3].innerHTML=document.getElementById('t1').rows[0].cells[10].innerHTML;
                            document.getElementById('t1').rows[0].cells[10].innerHTML="&nbsp";                             
                            dem1[0]=1;
                        boat[3]=0;
                        }
                       
                    }
                    if(boat[4]==1)
                    {
                        if(flag[4]===0){
                            document.getElementById('t1').rows[0].cells[4].innerHTML=document.getElementById('t1').rows[0].cells[9].innerHTML;
                            document.getElementById('t1').rows[0].cells[9].innerHTML="&nbsp";                             
                            dem1[1]=1;
                        boat[4]=0;
                        }
                        else if(flag[4]===1){
                            document.getElementById('t1').rows[0].cells[4].innerHTML=document.getElementById('t1').rows[0].cells[10].innerHTML;
                            document.getElementById('t1').rows[0].cells[10].innerHTML="&nbsp";                              
                            dem1[1]=1;
                        boat[4]=0;
                        }
                        
                    }
                    if(boat[5]==1)
                    {   if(flag[5]===0){
                        document.getElementById('t1').rows[0].cells[5].innerHTML=document.getElementById('t1').rows[0].cells[9].innerHTML;
                        document.getElementById('t1').rows[0].cells[9].innerHTML="&nbsp";                         
                        dem1[2]=1;
                        boat[5]=0;
                        }
                        else if(flag[5]===1){
                            document.getElementById('t1').rows[0].cells[5].innerHTML=document.getElementById('t1').rows[0].cells[10].innerHTML;
                            document.getElementById('t1').rows[0].cells[10].innerHTML="&nbsp";                         
                            dem1[2]=1;
                        boat[5]=0;
                        }
                    
                        
                    }
                    boatPos=0;
                    boatSpace=0;
                    // document.getElementById('boat3').innerHTML='&nbsp';
                    // document.getElementById('boat4').innerHTML='&nbsp';
                    checkStatus();
                    document.getElementById('B1').innerHTML='<img src="boat.png" width="100%" alt="">'
                    document.getElementById('B2').innerHTML='&nbsp';
                }
           }
           
       }
    
        
        function checkStatus(){
            ang1_sum= ang1.reduce((acc, val)=>{
                        return acc + val
                         } );
            ang2_sum= ang2.reduce((acc, val)=>{
                        return acc + val
                         } );
            dem1_sum= dem1.reduce((acc, val)=>{
                        return acc + val
                         } );
            dem2_sum= dem2.reduce((acc, val)=>{
                        return acc + val
                         } );
            
            if((ang1_sum<dem1_sum && ang1_sum!=0) || (ang2_sum<dem2_sum && ang2_sum!=0))
            {
                alert("YOU LOSE!!!! BETTER LUCK NEXT TIME");
                location.reload();
            }
            else if(ang2_sum + dem2_sum ==6)
            {
                
                alert("HURRAYYY!!!! YOU WON");
            }
        }