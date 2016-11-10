$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });     
});            

function submitText() {
	var text = $('#textinput').val();
    storeValue("name",text);
	window.alert(name);
    
    var name = $('#name').val();
    storeValue("name",name);
    alert(window.localStorage.getItem("name"));
    
    var email = $('#email').val();
    storeValue("email",email);
    
    var tel = $('#tel').val();
    storeValue("tel",tel);
    
    var date = $('#date').val();
    storeValue("date",date);
    
    var psw = $('#psw').val();
    storeValue("psw",psw);
}


function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
    window.localStorage.setItem(key,value); 
}