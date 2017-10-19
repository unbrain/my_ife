	
	var flag = 0;//计数
	var myAry=[];

	var leftin = document.getElementById("leftin");
	var rightin = document.getElementById("rightin");
	var leftout = document.getElementById("leftout");
	var rightout = document.getElementById("rightout");
	var num = document.getElementById("num");
	var add = document.getElementById("container");
	
	leftin.onclick = function(){
	  if (!num.value || (num.value < 10) || (num.value > 100) || (isNaN(num.value))) {
	  	alert("请输入10-100的数!");
	  	return 0;
	  }
	  else{
	  	flag++;
	  	if(flag>60){
	  		alert("超出60");
	  	}else{
	  		api = document.createElement('span');
	  		api.innerText = num.value;
	  		add.insertBefore(api, add.firstElementChild)
	  		api.setAttribute("style","height:"+(num.value/10)+"em");
	  		myAry[flag-1] = num.value;
	  		num.value = null;
	  	}		  	
	  }		  
	}

	document.onkeyup = function (e) {//按键信息对象以函数参数的形式传递进来了，就是那个e  
	    var code = e.charCode || e.keyCode;  //取出按键信息中的按键代码(大部分浏览器通过keyCode属性获取按键代码，但少部分浏览器使用的却是charCode)  
	    if (code == 13) {  
	        //此处编写用户敲回车后的代码 
	        if (!num.value || (num.value < 10) || (num.value > 100) || (isNaN(num.value))) {
	        	alert("请输入10-100的数!");
	        	return 0;
	        }
	        else{
	        	flag++;
	        	if(flag>60){
	        		alert("超出60");
	        	}else{
	        		var api = document.createElement('span');
	        		api.innerText = num.value;
	        		api.style.height = "num.value";
	        		add.insertBefore(api, add.firstElementChild);
	        		api.setAttribute("style","height:"+(num.value/10)+"em");
	        		myAry[flag-1] = num.value;
	        		num.value = null;
	        	}		  	
	        }
	    }  
	}  

	rightin.onclick = function(){
	  //alert(num);
	  if (!num.value || (num.value < 10) || (num.value > 100) || (isNaN(num.value))) {
	  	alert("请输入10-100的数!");
	  	return 0;
	  }
	  else{
	  	flag++;
	  	if(flag>60){
	  		alert("超出60");
	  	}else{
	  		api = document.createElement('span');
	  		api.innerText = num.value;
	  		add.appendChild(api);
	  		api.setAttribute("style","height:"+(num.value/10)+"em");
	  		myAry[flag-1] = num.value;
	  		num.value = null;
	  	}		  	
	  }		
	}
	leftout.onclick = function(){
	  alert(add.firstElementChild.innerText);
	  add.firstElementChild.remove();
	}
	rightout.onclick = function(){
	  alert(add.lastElementChild.innerText);
	  add.lastElementChild.remove();
	  // getData();
	}

	sort.onclick = function getData() {		 
	  var da = document.getElementById("container");
	  var data = [];
	  for(var i =0;i < da.children.length;i++ ){
	      var city =da.children[i].innerHTML;		      
	      data.push(city);
	  }	   

	  mpSort(data);
	}

	function mpSort(data){
		var i=0;
		var j = 0;

		for(i = 0;i < data.length-1;i++){
			for(j=0;j < data.length-1-i;j++){
				var t;
				if(data[j]>data[j+1]){
					t = data[j+1];
					data[j+1] = data[j];
					data[j] = t;
						  			
					add.removeChild(add.children[j]);
					api = document.createElement('span');
					api.innerText = data[j+1];
					add.insertBefore(api, add.children[j+1]);
					api.setAttribute("style","height:"+(data[j+1]/10)+"em");
					sleep(1000);  			
				}
			}
		}		
	}
	var t = Date.now();  
	  
	function sleep(d){  
	    while(Date.now - t <= d);  
	}