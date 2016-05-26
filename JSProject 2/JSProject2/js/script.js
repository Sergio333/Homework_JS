var names = [];
var login = null;
var flag = false;

for(var i=0; i<5; i++){
	names[i] = prompt('Введите имя');
}
console.log(names);

login = prompt('Введите имя пользователя:');
console.log(login);

for(var i=0; i<names.length; i++) {
	if (login == names[i]) {
		flag = true;
	}
}

if (flag == true) {
	alert(login + ', вы успешно вошли');
} else {
	alert('Ошибка!');
}
