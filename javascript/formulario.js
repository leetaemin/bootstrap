/*$(document).ready(function(){
var nombre= $('#nombre').val();
	var edad=$('#edad').val();
	var mail= $('#mail').val();
	var apellido= $('#apellido').val();
	var motivo= $('#mov').val();
	var tel=$('#telefono').val();
	var ul = $('#error');
	var text=$('#consulta');

$('#submit').on('click',function(event){
	event.preventDefault();
	if(validar(nombre,mail) == true){
			var jdatosSON = {"nombre":nombre,"mail":mail,"apellido":apellido,"edad":edad, "motivo":motivo, "consulta":text}
			var J= JSON.stringify(jdatosSON)
			var a='<a href=index.html?datos='+J+'>link</a>'
		};*/

$(document).ready(function(){
	var nombre=$('#nombre').val();
	var mail=$('#mail').val();
	var apellido=$('#apellido').val();
	var motivo=$('#mov').val();
	var tel=('#telefono').val();

$('#submit').on('click', function(event){
	event.preventDefault();
	if(validar(nombre,mail) == true){
			var jdatosSON = {"nombre":nombre,"mail":mail,"apellido":apellido,"edad":edad, "motivo":motivo, "consulta":text}
			var J= JSON.stringify(jdatosSON)
			var a='<a href=index.html?datos='+J+'>link</a>'};


})


function validarRequeridos(nombre){

	nombre.trim();

	if(nombre.length == 0){

		return false;
	}
	
	return true;
}
function validarRequeridos(apellido){

	apellido.trim();

	if(apellido.length == 0){

		return false;
	}
	
	return true;
}
function validarEdad(Edad){
	edad.trim();
	if(edad.length== 0 || isNaN(edad)){
		return false;
	}
	return true;
};

function ValidarScroll(interes){
	if(i<0){
		return false;
	}
	return true;
}

/**
 *  Valida 
 *
 **/

function validarMail(mail){

  mail.trim();

  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if(emailRegex.test(mail)){

  	return true;
  }

  return false;
}



function validar(nombre, mail){


	valido = true; 
 

		if(validarRequeridos(nombre)== false) {
			msg = "<li>El apellido es campos requerido</li>";
			ul.append(msg);
			valido = false;
		};
		if (validarEdad(edad)==false){
			msg='<li>La edad es un campo requerido</li>'
			ul.append(msg);
			valido=false;
		};
		if (ValidarScroll(interes)==false){
			msg='<li>Por favor detalle el curso de su interes</li>'
			ul.append(msg);
			valido=false;
		};
		if(ValidarScroll(motivo)==false){
			msg='<li>Por favor detalle el motivo de su consulta</li>'
			ul.appen(msg);
			valido=false;
		};
		if(validarRequeridos(apellido)==false){
				msg = "<li>El apellido son  campos requerido</li>";
			ul.append(msg);
			valido = false;
		};
		
};
})

