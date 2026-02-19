function genKeyboard(){
	const body = document.getElementsByTagName("body")[0];
	const alpha = "qwertyuiop*asdfghjkl*zxcvbnm";
	let pointer = 0;
	for(let i = 0; i < 3; i++){
		const row = document.createElement("div");
		row.className = 'row';
		while(alpha[pointer] != "*" && pointer < 28){
			const key = document.createElement("div");
			key.className = 'key';
			key.id = alpha[pointer];
			key.textContent = alpha[pointer].toUpperCase();
			key.onclick = function(){keyPress(key)};
			row.appendChild(key);
			pointer++;}
		body.appendChild(row);
		pointer++;
	}

	const key = document.createElement("div");
	const row = document.createElement("div");
	row.className = 'row';
	key.id = "space";
	key.textContent = "SPACE";
	

	key.onclick = function(){keyPress(key)};	
	row.appendChild(key)
	body.appendChild(row);
}

function genDrop(){
    const drop = document.getElementById("numDrop");
    for(let i = 1; i < 26; i++){
        const opt = document.createElement("option");
        opt.textContent = i;
        opt.value = i;

        drop.appendChild(opt);
    }

    
}

function keyPress(key){
	const preview = document.getElementById("preview");
	if (key.id == "space"){
		preview.textContent = preview.textContent + " ";
	}
	else{
		preview.textContent = preview.textContent + key.id;
	}
}

function submitText(){
	const preview = document.getElementById("preview");
	const display = document.getElementById("display");

	display.textContent = preview.textContent
	preview.textContent = ""
}

function encrypt(){
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    const preview = document.getElementById("preview");
    const display = document.getElementById("display");
    


    let text = preview.textContent;
    text = text.toLowerCase();

    let shift = document.getElementById("numDrop");
    const shift_value = Number(shift.value)




    var newString = "";

    for(let i = 0; i < text.length; i++){
        let letter = text[i];
        if(alpha.includes(letter)){
        let j = (alpha.indexOf(letter) + shift_value)%26;
        newString += alpha[j];}
        else{
            newString += text[i];
        }
    }

    display.textContent = newString;
    preview.textContent = "";
}

function decrypt(){
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    const preview = document.getElementById("preview");
    const display = document.getElementById("display");
    


    let text = preview.textContent;
    text = text.toLowerCase();

    let shift = document.getElementById("numDrop");
    const shift_value = Number(shift.value)




    var newString = "";

    for(let i = 0; i < text.length; i++){
        let letter = text[i];
        if(alpha.includes(letter)){
        let j = (alpha.indexOf(letter) - shift_value)%26;
        if (j < 0){
            j += 26
        }
        newString += alpha[j];}
        else{
            newString += text[i];
        }
    }

    display.textContent = newString;
    preview.textContent = "";
}