$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  }); 
    $('#random').on("click", function(){
    generate();
  });    
});            

function generate(){
    var text = random();
    window.alert(text);
    
    if(text ==true){
        navigator.notification.beep(1);
        navigator.vibrate(2000);
    }else {
        navigator.notification.beep(2);
        navigator.vibrate(2000);
    }
}

function random() {
	return !Math.round(Math.random());
}


function submitText() {
	var text = $('#textinput').val();
    storeValue("textinput",text);
	window.alert(text);
    
    var name = $('#name').val();
    storeValue("name",name);
    //alert(window.localStorage.getItem("name"));
    
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