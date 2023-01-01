var colon = document.getElementsByClassName("p");
var a = document.querySelectorAll("#a");
var b = document.querySelectorAll("#b");
var c = document.querySelectorAll("#c");
var d = document.querySelectorAll("#d");
var e = document.querySelectorAll("#e");
var f = document.querySelectorAll("#f");
var g = document.querySelectorAll("#g");


function toggleColon() {
	for(i = 0; i < colon.length; i++){
		if(colon[i].className == "p ON")
			colon[i].className = "p";
		else
			colon[i].className = "p ON"
	}
}

function SevenSegment(x, index){
	switch(x){
		case 0:
			a[index].classList.add("ON");
			b[index].classList.add("ON");
			c[index].classList.add("ON");
			e[index].classList.add("ON");
			f[index].classList.add("ON");
			g[index].classList.add("ON");
			break;
		
		case 1:
			c[index].classList.add("ON");
			f[index].classList.add("ON");
			break;

		case 2:
			a[index].classList.add("ON");
			c[index].classList.add("ON");
			d[index].classList.add("ON");
			e[index].classList.add("ON");
			g[index].classList.add("ON");
			break;
		
		case 3:
			a[index].classList.add("ON");
			c[index].classList.add("ON");
			d[index].classList.add("ON");
			f[index].classList.add("ON");
			g[index].classList.add("ON");
			break;

		case 4:
			b[index].classList.add("ON");
			c[index].classList.add("ON");
			d[index].classList.add("ON");
			f[index].classList.add("ON");
			break;

		case 5:
			a[index].classList.add("ON");
			b[index].classList.add("ON");
			d[index].classList.add("ON");
			f[index].classList.add("ON");
			g[index].classList.add("ON");
			break;

		case 6:
			a[index].classList.add("ON");
			b[index].classList.add("ON");
			d[index].classList.add("ON");
			e[index].classList.add("ON");
			f[index].classList.add("ON");
			g[index].classList.add("ON");
			break;

		case 7:
			a[index].classList.add("ON");
			c[index].classList.add("ON");
			f[index].classList.add("ON");
			break;

		case 8:
			a[index].classList.add("ON");
			b[index].classList.add("ON");
			c[index].classList.add("ON");
			d[index].classList.add("ON");
			e[index].classList.add("ON");
			f[index].classList.add("ON");
			g[index].classList.add("ON");
			break;

		case 9:
			a[index].classList.add("ON");
			b[index].classList.add("ON");
			c[index].classList.add("ON");
			d[index].classList.add("ON");
			f[index].classList.add("ON");
			g[index].classList.add("ON");
			break;

		default:
			d[index].classList.add("ON");

		}
	}

function clear(){

	for(i = 0; i < a.length; i++)
		a[i].className = "hor";

	for(i = 0; i < b.length; i++)
		b[i].className = "ver";

	for(i = 0; i < c.length; i++)
		c[i].className = "ver";

	for(i = 0; i < d.length; i++)
		d[i].className = "hor";
	
	for(i = 0; i < e.length; i++)
		e[i].className = "ver";

	for(i = 0; i < f.length; i++)
		f[i].className = "ver";

	for(i = 0; i < g.length; i++)
		g[i].className = "hor";

}

function showTime(){
	toggleColon();
	clear();

	var now = new Date();

	var t = now.getUTCHours();
	SevenSegment((t - (t % 10)) / 10, 0);
	SevenSegment((t % 10), 1);

	t = now.getUTCMinutes();
	SevenSegment((t - (t % 10)) / 10, 2);
	SevenSegment((t % 10), 3);

	t = now.getUTCSeconds();
	SevenSegment((t - (t % 10)) / 10, 4);
	SevenSegment((t % 10), 5);

	t = now.getUTCDate();
	SevenSegment((t - (t % 10)) / 10, 6);
	SevenSegment((t % 10), 7);

	t = now.getUTCMonth() + 1;
	SevenSegment((t - (t % 10)) / 10, 8);
	SevenSegment((t % 10), 9);

	var t = now.getUTCFullYear();
	SevenSegment((t % 10), 13);
	t -= t%10;
	t /= 10;
	SevenSegment((t % 10), 12);
	t -= t%10;
	t /= 10;
	SevenSegment((t % 10), 11);
	t -= t%10;
	t /= 10;
	SevenSegment((t % 10), 10);

}

setInterval(showTime, "500");
