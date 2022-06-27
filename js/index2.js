let male = document.getElementById('male');
let female = document.getElementById('female');
let skill1 = document.getElementById('skill1');
let skill2 = document.getElementById('skill2');
let skill3 = document.getElementById('skill3');
let enroll = document.getElementById("submit");
var row = 1;
let usersData = new Array();
enroll.addEventListener('click',function(){
    var user = [];
    let skills = [];
    let displaySkills = "";
    let gender = "";
	user.push(document.getElementById("name").value);
	user.push(document.getElementById("email").value);
	user.push(document.getElementById("website").value);
	user.push(document.getElementById("image").value);

	if(male.checked){
		gender = male.value;
	}
	if(female.checked){
		gender = female.value;
	}
    user.push(gender);
	if(skill1.checked){
		skills.push(skill1.value);
	}
	if(skill2.checked){
			skills.push(skill2.value);
	}
	if(skill3.checked){
		skills.push(skill3.value);
	}

	for(let i = 0;i < skills.length;i++){
		displaySkills += skills[i] +  ', ';
	}
    user.push(displaySkills);
    //if (!user[0] || !user[1] || !user[2] || !user[3] || !user[4] || !user[5])
	if (!user[0] || !user[1] || !user[2] || !user[3] || !user[4] || !user[5]){
		alert("Please fill all the entries");
        usersData=[];
        skills = [];
	    displaySkills = ""
        return;
    }
    usersData.push(user);

	var table = document.getElementById("table");
	var newRow = table.insertRow(row);
	var col1 = newRow.insertCell(0);
	var col2 = newRow.insertCell(1);
	var i = usersData.length-1;
    col2.style.width ='150px';col2.style.height ='100px';
    col1.innerHTML = "<b>"+usersData[i][0]+"</b>" +"<br>" +usersData[i][4]+"<br>" +usersData[i][1]+"<br>" + "<a href='"+usersData[i][2]+"'target='_blank'>"+usersData[i][2]+"</a>"+"<br>" +usersData[i][5].slice(0,usersData[i][5].length-2);
    col2.innerHTML = "<center><img width='150px' height='120px' alt='Image is not supportable' src='"+usersData[i][3]+"'></center>";
	row++;
	skills = [];
	displaySkills = "";

})

