const ang1=[1, 1, 1];
        const ang2=[0, 0, 0];
        const dem1=[1, 1, 1];
        const dem2=[0, 0, 0];
        const boat= [0,0,0,0,0,0];
        var flag= [0,0,0,0,0,0];
        let boatPos=0; 
        let boatSpace=0;

        function toBoat(character)
        {   
                console.log(character);
                if(character==='A1' && ang1[0]== 1)
                {
                    if(boatPos== 0)
                    {
                        if(boatSpace== 0)
                        {   document.getElementById("a1").style.left= (parseInt(document.getElementById("a1").style.left) || 0) + 550 + "px";
                           
                            flag[0]=0;
                            ang1[0]=0;
                            boat[0]=1;
                            
                        }
                        if(boatSpace== 1)
                        {
                            document.getElementById("a1").style.left= (parseInt(document.getElementById("a1").style.left) || 0) + 640 + "px";
                             flag[0]=1;
                            ang1[0]=0;
                            boat[0]=1;
                           
                        }
                        boatSpace++;


                    }
                   
                }
                
                if(character==='A2' && ang1[1]===1)
                {
                    if(boatPos===0)
                    {
                        if(boatSpace===0)
                        {
                            document.getElementById("a2").style.left= (parseInt(document.getElementById("a2").style.left) || 0) + 470 + "px";
                            ang1[1]=0;
                            boat[1]=1;
                            flag[1]=0;
                        }
                        if(boatSpace===1)
                        {
                            document.getElementById("a2").style.left= (parseInt(document.getElementById("a2").style.left) || 0) + 560 + "px";
                            ang1[1]=0;
                            boat[1]=1;
                            flag[1]=1;
                        }
                        boatSpace++;

                    }
                }
                if(character==='A3' && ang1[2]===1)
                {
                    if(boatPos===0)
                    {
                        if(boatSpace===0)
                        {
                            document.getElementById("a3").style.left= (parseInt(document.getElementById("a3").style.left) || 0) + 390 + "px";
                            ang1[2]=0;
                            boat[2]=1;
                            flag[2]=0;
                        }
                        if(boatSpace===1)
                        {
                            document.getElementById("a3").style.left= (parseInt(document.getElementById("a3").style.left) || 0) + 480 + "px";
                            ang1[2]=0;
                            boat[2]=1;
                            flag[2]=1;
                        }
                        boatSpace++;

                    }
                }
                if(character==='D1' && dem1[0]===1)
                {
                    if(boatPos===0)
                    {
                        if(boatSpace===0)
                        {
                            document.getElementById("d1").style.left= (parseInt(document.getElementById("d1").style.left) || 0) + 300 + "px";
                            dem1[0]=0;
                            boat[3]=1;
                            flag[3]=0;
                        }
                        if(boatSpace===1)
                        {
                            document.getElementById("d1").style.left= (parseInt(document.getElementById("d1").style.left) || 0) + 390 + "px";
                            dem1[0]=0;
                            boat[3]=1;
                            flag[3]=1;
                        
                        }
                        boatSpace++;
                    }
                }
                if(character==='D2' && dem1[1]===1)
                {
                    if(boatPos===0)
                    {
                        if(boatSpace===0)
                        {
                            document.getElementById("d2").style.left= (parseInt(document.getElementById("d2").style.left) || 0) + 210 + "px";
                            dem1[1]=0;
                            boat[4]=1;
                            flag[4]=0;
                        }
                        if(boatSpace===1)
                        {
                            document.getElementById("d2").style.left= (parseInt(document.getElementById("d2").style.left) || 0) + 300 + "px";
                            dem1[1]=0;
                            boat[4]=1;
                            flag[4]=1;
                        }
                        boatSpace++;
                    }
                }
                if(character==='D3' && dem1[2]===1)
                {
                    if(boatPos===0)
                    {
                        if(boatSpace===0)
                        {
                            document.getElementById("d3").style.left= (parseInt(document.getElementById("d3").style.left) || 0) + 120 + "px";
                            dem1[2]=0;
                            boat[5]=1;
                            flag[5]=0;
                        }
                        if(boatSpace===1)
                        {
                            document.getElementById("d3").style.left= (parseInt(document.getElementById("d3").style.left) || 0) + 210 + "px";
                            dem1[2]=0;
                            boat[5]=1;
                            flag[5]=1;
                        }
                        boatSpace++;
                    }
                }
                console.log(boatPos)


                if(character==='A1' && ang2[0]== 1)
                {   
                    if(boatPos==1)
                    {   
                        if(boatSpace===0)
                        {   console.log('shubh');
                            document.getElementById("a1").style.left= (parseInt(document.getElementById("a1").style.right) || 0) + 730 + "px";
                            ang2[0]=0;
                            boat[0]=1;
                            flag[0]=0;
                        }
                        if(boatSpace===1)
                        {       
                            document.getElementById("a1").style.left= (parseInt(document.getElementById("a1").style.right) || 0) + 830 + "px";
                            ang2[0]=0;
                            boat[0]=1;
                            flag[0]=1;
                        }
                        boatSpace++; 
                    }
                    
                }
                if(character==='A2' && ang2[1]== 1)
                {   console.log(character);
                    if(boatPos==1)
                    {
                        if(boatSpace===0)
                        {
                            document.getElementById("a2").style.left= (parseInt(document.getElementById("a2").style.right) || 0) + 650 + "px";
                            ang2[1]=0;
                            boat[1]=1;
                            flag[1]=0;
                        }
                        if(boatSpace===1)
                        {
                            document.getElementById("a2").style.left= (parseInt(document.getElementById("a2").style.right) || 0) + 740 + "px";
                            ang2[1]=0;
                            boat[1]=1;
                            flag[1]=1
                        }
                        boatSpace++; 
                    }
                    
                }
                if(character==='A3' && ang2[2]== 1)
                { console.log(character);
                    if(boatPos==1)
                    {
                        if(boatSpace===0)
                        {
                            document.getElementById("a3").style.left= (parseInt(document.getElementById("a3").style.right) || 0) + 570 + "px";
                            ang2[2]=0;
                            boat[2]=1;
                            flag[2]=0;
                        }
                        if(boatSpace===1)
                        {
                            document.getElementById("a3").style.left= (parseInt(document.getElementById("a3").style.right) || 0) + 660 + "px";
                            ang2[2]=0;
                            boat[2]=1;
                            flag[2]=1;
                        }
                        boatSpace++; 
                    }
                    
                }
                if(character==='D1' && dem2[0]===1)
                { console.log(character);
                    if(boatPos===1)
                    {
                        if(boatSpace===0)
                        {
                            document.getElementById("d1").style.left= (parseInt(document.getElementById("d1").style.right) || 0) + 490 + "px";
                            dem2[0]=0;
                            boat[3]=1;
                            flag[3]=0;
                        }
                        if(boatSpace===1)
                        {
                            document.getElementById("d1").style.left= (parseInt(document.getElementById("d1").style.right) || 0) + 580 + "px";
                            dem2[0]=0;
                            boat[3]=1;
                            flag[3]=1;
                        
                        }
                        boatSpace++;
                    }
                }
                if(character==='D2' && dem2[1]===1)
                { console.log(character);
                    if(boatPos===1)
                    {
                        if(boatSpace===0)
                        {
                            document.getElementById("d2").style.left= (parseInt(document.getElementById("d2").style.right) || 0) + 400 + "px";
                            dem2[1]=0;
                            boat[4]=1;
                            flag[4]=0;
                        }
                        if(boatSpace===1)
                        {
                            document.getElementById("d2").style.left= (parseInt(document.getElementById("d2").style.right) || 0) + 490 + "px";
                            dem2[1]=0;
                            boat[4]=1;
                            flag[4]=1;
                        }
                        boatSpace++;
                    }
                }
                if(character==='D3' && dem2[2]===1)
                { 
                    if(boatPos===1)
                    {
                        if(boatSpace===0)
                        {
                            document.getElementById("d3").style.left= (parseInt(document.getElementById("d3").style.right) || 0) + 310 + "px";
                            dem2[2]=0;
                            boat[5]=1;
                            flag[5]=0;
                        }
                        if(boatSpace===1)
                        {
                            document.getElementById("d3").style.left= (parseInt(document.getElementById("d3").style.right) || 0) + 400 + "px";
                            dem2[2]=0;
                            boat[5]=1;
                            flag[5]=1
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
                            document.getElementById("a1").style.left= (parseInt(document.getElementById("a1").style.left) || 0) + 400 + "px";                      
                            ang2[0]=1;
                            boat[0]=0;
                        }
                        else if(flag[0]==1){
                            document.getElementById("a1").style.left= (parseInt(document.getElementById("a1").style.left) || 0) + 310 + "px";                      
                            ang2[0]=1;
                            boat[0]=0;
                        }
                    }
                    if(boat[1]==1)
                    {   
                        if(flag[1]==0){
                            document.getElementById("a2").style.left= (parseInt(document.getElementById("a2").style.left) || 0) + 480 + "px";
                            ang2[1]=1;
                            boat[1]=0;
                        }
                        else if(flag[1]==1){
                            document.getElementById("a2").style.left= (parseInt(document.getElementById("a2").style.left) || 0) + 390 + "px";
                            ang2[1]=1;
                            boat[1]=0;
                        }
                        
                    }
                    if(boat[2]==1)
                    {
                        if(flag[2]==0){
                            document.getElementById("a3").style.left= (parseInt(document.getElementById("a3").style.left) || 0) + 560 + "px";
                            ang2[2]=1;
                            boat[2]=0;

                        }
                        else if(flag[2]==1){
                            document.getElementById("a3").style.left= (parseInt(document.getElementById("a3").style.left) || 0) + 470 + "px";
                            ang2[2]=1;
                            boat[2]=0;
                        }
                    }
                    if(boat[3]==1)
                    {
                        if(flag[3]==0){
                            document.getElementById("d1").style.left= (parseInt(document.getElementById("d1").style.left) || 0) + 640 + "px";
                            dem2[0]=1;
                            boat[3]=0;
                        }
                        else if(flag[3]==1){
                            document.getElementById("d1").style.left= (parseInt(document.getElementById("d1").style.left) || 0) + 550 + "px";
                            dem2[0]=1;
                            boat[3]=0;
                        }
                        
                    }
                    if(boat[4]==1)
                    {
                        if(flag[4]==0){
                            document.getElementById("d2").style.left= (parseInt(document.getElementById("d2").style.left) || 0) + 730 + "px";
                            dem2[1]=1;
                        boat[4]=0;
                        }
                        else if(flag[4]==1){
                            document.getElementById("d2").style.left= (parseInt(document.getElementById("d2").style.left) || 0) + 640 + "px";
                           
                        dem2[1]=1;
                        boat[4]=0;
                        }
                        
                    }
                    if(boat[5]==1)
                    {
                        if(flag[5]==0){
                            document.getElementById("d3").style.left= (parseInt(document.getElementById("d3").style.left) || 0) + 820 + "px";
                           
                        dem2[2]=1;
                        boat[5]=0;
                        }
                        else if(flag[5]==1){
                            document.getElementById("d3").style.left= (parseInt(document.getElementById("d3").style.left) || 0) + 730 + "px";
                           
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
                            document.getElementById("a1").style.left= (parseInt(document.getElementById("a1").style.right) || 0) + 0 + "px";
                            ang1[0]=1;
                            boat[0]=0;
                        }
                        else if(flag[0]===1){
                            document.getElementById("a1").style.left= (parseInt(document.getElementById("a1").style.right) || 0) + 0 + "px";                        
                            ang1[0]=1;
                        boat[0]=0;
                        }
                        
                    }
                    if(boat[1]==1)
                    {
                        if(flag[1]===0){
                            console.log('shubh')
                            document.getElementById("a2").style.left= (parseInt(document.getElementById("a2").style.right) || 0) + 0 + "px";
                            ang1[1]=1;
                        boat[1]=0;
                        }
                        else if(flag[1]===1){
                            document.getElementById("a2").style.left= (parseInt(document.getElementById("a2").style.right) || 0) + 0 + "px";
                            ang1[1]=1;
                            boat[1]=0;
                        }
                        
                    }
                    if(boat[2]==1)
                    {   
                        if(flag[2]===0){
                            document.getElementById("a3").style.left= (parseInt(document.getElementById("a3").style.right) || 0) + 0 + "px";
                            ang1[2]=1;
                        boat[2]=0;
                        }
                        else if(flag[2]===1){
                            document.getElementById("a3").style.left= (parseInt(document.getElementById("a3").style.right) || 0) + 0 + "px";
                            ang1[2]=1;
                        boat[2]=0;
                        }
                        
                    }
                    if(boat[3]==1)
                    {
                        if(flag[3]===0){
                            document.getElementById("d1").style.left= (parseInt(document.getElementById("d1").style.right) || 0) + 0 + "px";
                            dem1[0]=1;
                        boat[3]=0;
                        }
                        else if(flag[3]===1){
                            document.getElementById("d1").style.left= (parseInt(document.getElementById("d1").style.right) || 0) + 0 + "px";
                            dem1[0]=1;
                        boat[3]=0;
                        }
                       
                    }
                    if(boat[4]==1)
                    {
                        if(flag[4]===0){
                            document.getElementById("d2").style.left= (parseInt(document.getElementById("d2").style.right) || 0) + 0 + "px";
                            dem1[1]=1;
                        boat[4]=0;
                        }
                        else if(flag[4]===1){
                            document.getElementById("d2").style.left= (parseInt(document.getElementById("d2").style.right) || 0) + 0 + "px";
                             dem1[1]=1;
                        boat[4]=0;
                        }
                        
                    }
                    if(boat[5]==1)
                    {   if(flag[5]===0){
                        document.getElementById("d3").style.left= (parseInt(document.getElementById("d3").style.right) || 0) + 0 + "px";                        
                        dem1[2]=1;
                        boat[5]=0;
                        }
                        else if(flag[5]===1){
                            document.getElementById("d3").style.left= (parseInt(document.getElementById("d3").style.right) || 0) + 0 + "px";                        
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