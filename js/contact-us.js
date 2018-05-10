


function good(){
    var fnm = document.fm.fname.value;
    var lnm = document.fm.lname.value;
    var em = document.fm.email.value;
    var sb = document.fm.subject.selectedindex;
    var msg = document.fm.message.value;

    if(fnm.length<3){
        document.getElementById("p1").innerHTML="Required atleast 3 letter";
        document.getElementById("p1").style.color="red";
        }
    else if(fnm.length>3){
        document.getElementById("p1").innerHTML=" ";
    }
    if(lnm.length<3){
        document.getElementById("p2").innerHTML="Required atleast 3 letter";
        document.getElementById("p2").style.color="red";
        }
    else if(lnm.length>3){
        document.getElementById("p2").innerHTML=" ";
    }
    reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
    
    if(reg.test(em)==false)
{
document.getElementById('p3').innerHTML="Invalid Email!!!";
document.getElementById('p3').style.color="red";
}
    else if(em.length!=0)
{document.getElementById('p3').innerHTML="";
}
    
if(fnm.length>3 && reg.test(em)==true && lnm.length>3  )
{
    alert("Hi" + " " + fnm + " " + "thank you for Feedback We will reply soon!! \n Thank you")

}

}