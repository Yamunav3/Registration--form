const form=document.getElementById("form");
const usname=document.getElementById("name");
const mail=document.getElementById("mail");
const pass=document.getElementById("pass");
const cpass=document.getElementById("cpass")
const tandc=document.getElementById("check");
 let nameValid=false;
 let mailvalid=false;
 let passValid=false;
 let cpassValid=false;
 let tandcValid=false;

 usname.addEventListener("keyup",checkUserName);
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validate();
});
function validate(){
    let nameValue=usname.value.trim();
    let emailValue=mail.value.trim();
    let passwordValue=pass.value.trim();
    let cpasswordValue=cpass.value.trim();
    let tc=tandc.checekd;

     nameValid=false;
   mailvalid=false;
    passValid=false;
 cpassValid=false;
 tandcValid=false;
   

 checkUserName();

    //username check....
   
    //mail check...
       if(emailValue==='')
        {
            setError(mail,"email can't be empty!!");
        }
        else if(!emailCheck(emailValue))
        {
            setError(mail,"enter valid email id!!!!!");
        }
        else{
            mailvalid=true;
            setSuccess(mail);
        }
        //password checkk......
        if(passwordValue==='')
            setError(pass,"password can't be empty!");
        else if(passwordValue.length<4)
            setError(pass,"password must be atlest 4 characters");
        else 
        {
            passValid=true;
        setSuccess(pass);
        }
      //cpassword check....
          if(cpasswordValue==='')
            setError(cpass,"the password can't be empty!!!");
        else if(cpasswordValue!==passwordValue)
        {
            setError(cpass,"password doesn't match");
        }
        else
        {
            cpassValid=true;
        setSuccess(cpass);
        }
    //tandc....
    if(!tandc.checked)
        setError(check,"click agree button to submit")
  else
  {
    tandcValid=true;
  setSuccess(check);
  }

if( nameValid &&mailvalid && passValid && cpassValid && tandcValid)
   {
    console.log("true")
    form.submit();
   }

function emailCheck(input)
{
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let valid=regex.test(input)
    return valid;

}
}



function setError(input,message)
{
    let parent=input.parentElement;

    let small=parent.querySelector("small");

    small.innerText=message;
    parent.classList.add('error');
    parent.classList.remove('success');

}
function setSuccess(input)
{
    let parent=input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error');
}
function checkUserName(){
    let nameValue = usname.value.trim()
if(nameValue==='')
    {
     setError(usname,"useraname cant be empty!!");
    }
    else{
        nameValid=true;
        setSuccess(usname);
    }
}