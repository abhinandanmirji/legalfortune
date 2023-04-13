

function validate()
{
  var username=document.getElementsById("username").value;
  var password=document.getElementsById("password").value;
if(username=="admin"&& password=="admin")
{
  alert("login succesfully");
  return false;
}
else{
  alert("Login failed");
}
}