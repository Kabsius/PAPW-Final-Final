function ver(){

			elemento= document.getElementsByTagName('input')[0];
		elemento.addEventListener('input', click, false);

			elemento1= document.getElementsByTagName('input')[1];
		elemento1.addEventListener('input', click, false);

			elemento2= document.getElementsByTagName('input')[2];
		elemento2.addEventListener('input', click, false);

			elemento3= document.getElementsByTagName('input')[3];
		elemento3.addEventListener('input', click, false);

			elemento4= document.getElementsByTagName('input')[4];
		elemento4.addEventListener('input', click, false);

			elemento5= document.getElementsByTagName('input')[5];
		elemento5.addEventListener('input', click, false);

			elemento6= document.getElementsByTagName('input')[6];
		elemento6.addEventListener('input', click, false);

			elemento7= document.getElementsByTagName('input')[7];
		elemento7.addEventListener('input', click, false);

			elemento8= document.getElementsByTagName('input')[8];
		elemento8.addEventListener('input', click, false);
		
		click();
}

function click() {

	if (elemento.value=='') {
		elemento.setCustomValidity('Falto su Nombre');
		elemento.style.background='#FFDDDD';
	} else {
		elemento.setCustomValidity('');
		elemento.style.background='#FFFFFF';
	}

		if (elemento1.value=='') {
		elemento1.setCustomValidity('Falto sus Apellidos');
		elemento1.style.background='#FFDDDD';
	} else {
		elemento1.setCustomValidity('');
		elemento1.style.background='#FFFFFF';
	}

		if (elemento2.value=='') {
		elemento2.setCustomValidity('Falto su Nombre de Usuario');
		elemento2.style.background='#FFDDDD';
	} else {
		elemento2.setCustomValidity('');
		elemento2.style.background='#FFFFFF';
	}
		if (elemento3.value=='') {
		elemento3.setCustomValidity('Falto su password');
		elemento3.style.background='#FFDDDD';
	} else {
		elemento3.setCustomValidity('');
		elemento3.style.background='#FFFFFF';
	}
		if (elemento4.value=='') {
		elemento4.setCustomValidity('Por favor ingrese nuevamente su password');
		elemento4.style.background='#FFDDDD';
	} else {
		elemento4.setCustomValidity('');
		elemento4.style.background='#FFFFFF';
	}

		if (elemento5.value=='') {
		elemento5.setCustomValidity('Falto su Telefono');
		elemento5.style.background='#FFDDDD';
	} else {
		elemento5.setCustomValidity('');
		elemento5.style.background='#FFFFFF';
	}
		if (elemento6.value=='') {
		elemento6.setCustomValidity('Falto su Celular');
		elemento6.style.background='#FFDDDD';
	} else {
		elemento6.setCustomValidity('');
		elemento6.style.background='#FFFFFF';
	}
		if (elemento7.value=='') {
		elemento7.setCustomValidity('Falto su Correo Electronico');
		elemento7.style.background='#FFDDDD';
	} else {
		elemento7.setCustomValidity('');
		elemento7.style.background='#FFFFFF';
	}
		if (elemento8.value=='') {
		elemento8.setCustomValidity('Agrege por favor su imagen de usuario');
		elemento8.style.background='#FFDDDD';
	} else {
		elemento8.setCustomValidity('');
		elemento8.style.background='#FFFFFF';
	}

}


function iniciar() {
 ver()

}



function ses(){
	ele= document.getElementsByTagName('input')[0];
		ele.addEventListener('input', clis, false);

	ele1= document.getElementsByTagName('input')[1];
		ele1.addEventListener('input', clis, false);
		clis();
} 

function clis() {
if (ele.value=='') {
		ele.setCustomValidity('Ingrese su usuario');
		ele.style.background='#FFDDDD';
	} else {
		ele.setCustomValidity('');
		ele.style.background='#FFFFFF';
	}

if (ele1.value=='') {
		ele1.setCustomValidity('Ingrese su password');
		ele1.style.background='#FFDDDD';
	} else {
		ele1.setCustomValidity('');
		ele1.style.background='#FFFFFF';
	}
	
}

function sesion() {
ses()
}

function abrir() {
  var x = document.getElementById("categorias");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function abrir1() {
  var x = document.getElementById("historial");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function abrir2() {
  var x = document.getElementById("producto");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function index() {
abrir()
abrir1()
abrir2()
}