$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });   
  $('#submitButton-form').on("click", function(){
    submitForm();
  });   
});            

function submitText() {
	var text = $('#textinput').val();
    storeValue("name",text);
	window.alert(text);
}

function submitForm() {
    var name = $('#name').val();
    storeValue("name",text);
    var email = $('#email').val();
    storeValue("email",text);
    var tel = $('#tel').val();
    storeValue("tel",text);
    var date = $('#date').val();
    storeValue("date",text);
    var psw = $('#psw').val();
    storeValue("psw",text);
    window.alert(name);
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
    window.localStorage.setItem(key,value);
   
}