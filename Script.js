function sum(a,b){
	return a+b;
}

function check(){
	var b = prompt('Number1');
	parseInt(b);
	if(isNaN(b)){
		alert("not number");
	}
	else{
		alert("Number")
	}
	return b;
}

function talib(){
var person={};
person.name = 'Ildar';
person.age = 25;
if ("name" in person) {
	alert("This shit exists");
}
return person.name + ': ' + person.age;
}

function massiv(){
	var persons = ["Lesha", "Ildar", "Vadim", "Andrew"];
	persons.push("Pasha");
	alert(persons);
	alert(persons.pop());
}

function find(persons, value) {
  if (persons.indexOf) { 
    return persons.indexOf(value);
  }

  for (var i = 0; i < persons.length; i++) {
    if (persons[i] === value) return i;
  }
var persons = ["Lesha",
	"Ildar",
	"Vadim",
	"Andrew"];
  return -1;
  var index = find(persons, "Vadim");
  alert( index );
}

var Database = {
	Data: [],
	ShowData: function () {
		console.log(this.Data);
		alert(this.Data);
	},
	PushOnData: function(item, notShow) {
		this.Data.push(item);
		if (!notShow) {
			this.ShowData();
		}
	},
	ShowItemOfData: function(index){
		console.log(this.Data[index]);
	},
	PopData: function() {
		console.log(this.Data.pop());
		this.ShowData();
	},
	FillData: function() {
		var count = prompt("Введите число строк:");
		for (var i = 0; i < count; i++) {
			this.PushOnData(prompt("Имя:"), true);
		}
		this.ShowData();
	},
	ClearData: function(){
		this.Data = [];
		this.ShowData();
	}
};










