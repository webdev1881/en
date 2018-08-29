window.onload = function(){
renderData()
	function renderData(){
		for(let i=0; i<words.word.length; i++){
			pc.innerText = i + " pc.";
			let idb = "but_" + i;
			let td1 = "td_" + i;			
			let row = `<td id="${td1}" class="td">${words.word[i]}<button id="${idb}" type="button" class="btn btn-default glyphicon glyphicon-volume-up btn-success"></button></td><td class="td">${words.translate[i]}</td><td class="td">${words.komment[i]}</td>`;
			let tr = document.createElement('tr');
			let tbody = document.getElementById("tbody");
tbody.insertBefore(tr, tbody.firstChild);
//			tbody.appendChild(tr);
			tr.innerHTML = row;
			let but = document.getElementById(idb);
			let tdw = document.getElementById(td1);
			if(tdw.firstChild == but){
				but.style.visibility = "hidden";
				but.style.height = "1px";
				tr.style.backgroundColor = "#BDBDBD"
				console.log(tr)
			};
			but.addEventListener("click", Say)
		};
	};
	function Say(){
		//console.log(this);
		word = this.parentNode.innerText;
		responsiveVoice.speak(word, "US English Female", {rate: 0.8});
	};


};


