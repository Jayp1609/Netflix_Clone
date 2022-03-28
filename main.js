
function hide(namebt,paraname)
{
   
   let btn=document.getElementById(namebt);
   let para=document.getElementById(paraname);

   if(para.style.display!='block')
   {
       para.style.display='block';
   }
   else 
   {
     para.style.display='none';
   }   
}

function zoom(openModal,modal,spanbt){
    var modal = document.getElementById(modal);
  //  var btn = document.getElementById(openModal);
   // var span = document.getElementById(spanbt);
    
   
    if(modal.style.display!='block')
    {
    //btn.addEventListener("click", () => {
      modal.style.display = "block";
   //});
    }
    else
    {
   // span.addEventListener("click", () => {
      modal.style.display = "none";
  // });
    }
}

function closev(modal,spanbtn,video){
    var modal = document.getElementById(modal);
   var btn = document.getElementById(btn);
   var span = document.getElementById(spanbtn);
    var video=document.getElementById(video);
   
    video.pause();
    video.currentTime=0;
   if(modal.style.display!='none')
   {
  // btn.addEventListener("click", () => {
      modal.style.display = "none";

  // });
    }
    else
   {
   //span.addEventListener("click", () => {
      modal.style.display = "block";
  // });
   }
}
function videozoom(modal,spanbtn,btn){
    var modal = document.getElementById(modal);
    var btn = document.getElementById(btn);
    var span = document.getElementById(spanbtn);
 
    if(modal.style.display!='block')
    {
   // btn.addEventListener("click", () => {
       modal.style.display = "block";
   // });
     }
     
    
    //span.addEventListener("click", () => {
     
   // });
    
 }
