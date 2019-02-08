var nav=0;
function navbar(){
		let x=document.getElementById("c");
		if(nav==1){
			x.style.display="none";
			nav=0;
		}
		else{
			x.style.display="inline";
			nav=1;
		}
	}
    function init_canvas() {
    		
    	var blocks= [];
    	var canvas = document.getElementById('bg');
        if (canvas.getContext) {
        	var ctx = canvas.getContext('2d');
        	ctx.canvas.width  = window.innerWidth;
  			ctx.canvas.height = window.innerHeight;
  			//ctx.fillStyle = 'blue';
  			//ctx.fillRect(1, 1 , 200, 200);
  			ctx.font = "50px minecraft";
  			ctx.fillStyle = '#111111';
  			ctx.textAlign = "center"; 
			ctx.fillText("sin3point14", window.innerWidth/2, window.innerHeight/2);
  			ctx.fillStyle = 'black';
  			function block(a,b){
				return {
				x: a,
				y:b
				};
			}
			function bullets(){
	 			blocks.forEach(function (b,index,object) {
 				ctx.clearRect(b.x-5,b.y,10,10);
 				b.y-=20;
 				d=0;
 				for(let j=1;j<=20;j++){
 					for(let i=1;i<=10;i++){
 						var p = ctx.getImageData(b.x+i, b.y+j, 1, 1).data;
 						//console.log(p[0]);
 						if((p[0]!=0)||(p[1]!=0)||(p[2]!=0)){
	 						d=1;
 							break;
 						}
 					}
 				}
 				if(b.y>-10&&d==0){
 					ctx.fillStyle = '#555555';
	 				ctx.fillRect(b.x-5, b.y , 10, 10);
 				}
 				else{
 					if(d==1){
 						ctx.fillRect(b.x-5, b.y , 10, 20);
 						 ctx.clearRect(b.x-9,b.y-10,15,30);
 					}
 					object.splice(index, 1);
	 			}
				});
				if(blocks.length!=0){
					window.requestAnimationFrame(bullets);
				}
			}
  			canvas.onmousemove = function(e) { 
 			   var x = e.pageX - this.offsetLeft; 
 			   ctx.clearRect(0,this.offsetHeight-80,this.offsetWidth,40);
 			   ctx.fillStyle = '#111111';
 			   ctx.fillRect(x-5, this.offsetHeight-80 , 10, 10);
 			   ctx.fillRect(x-15, this.offsetHeight-70 , 31, 30);
			};
			canvas.onclick = function(e) { 
				let x = e.pageX - this.offsetLeft;
				var b= new block(x, this.offsetHeight-90);
 			   	blocks.push(b);
 			   	if(blocks.length==1){
 			   	window.requestAnimationFrame(bullets);
 			   	}

			};
     	}
    }
function toHome(){
	loadDoc("home.html");
	nav=0;
}
function toProj(){
	loadDoc("proj.html");
	nav=0
}
function loadDoc(filename) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("cont").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET","content/" + filename , true);
    xhttp.send();
  }
  function send(e){
  	window.location=e;
  }