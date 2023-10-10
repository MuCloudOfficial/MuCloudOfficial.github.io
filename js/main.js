//==========================================================
var timeFormat = 24;

var loopTime = setInterval(function(){
	let time;
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var day = d.getDate();
	var hour = d.getHours();
	var minute = d.getMinutes();

	if(timeFormat === 24){
		var sec = d.getSeconds();
		toFixed();
		time = hour + ":" + minute + ":" + sec;
	}else if(timeFormat === 12){
		var noon = null;
		if(hour <= 4){
			noon = "凌晨";
		}else if(hour <= 6){
			noon = "清晨";
		}else if(hour <= 8){
			noon = "早晨";
		}else if(hour <= 10){
			noon = "上午";
		}else if(hour <= 12){
			noon = "中午";
		}else if(hour <= 17){
			noon = "下午";
		}else if(hour <= 20){
			noon = "傍晚";
		}else if(hour <= 23){
			noon = "晚上";
		}

		if(hour > 12){
			hour -= 12;
		}

		toFixed();
		time = noon + " " + hour + ":" + minute;

	}

	function toFixed(){
		month = month < 10 ? "0" + month: month;
		day = day < 10 ? "0" + day: day;
		hour = hour < 10 ? "0" + hour: hour;
		minute = minute < 10 ? "0" + minute: minute;
		sec = sec < 10 ? "0" + sec: sec;
	}

	document.getElementById("date").innerHTML= year + "年" + month + "月" + day + "日";
	document.getElementById("time").innerHTML= time;

}, 500);

function changeTimeFormat(){
	
	var btn = document.getElementById("timeSwitchBtn");
	
	if(timeFormat === 24){
		btn.style.marginLeft = "21px";
		btn.innerHTML = 12;
		timeFormat = 12;
	}else if(timeFormat === 12){
		btn.style.marginLeft = "1px";
		btn.innerHTML = 24;
		timeFormat = 24;
	}
}
//==========================================================

//==========================================================
const subTitles = [
	"Made in Starry sky.",
	"欢迎来暮云阁阁主的 Bilibili 一起 happy -> <span><a style=\"font-size: 30px;color: white;text-decoration: none;\" href=\"https://space.bilibili.com/356101590\"> 传送门 </a></span>",
	"这，就是星空制造",
	"所见皆暮云",
	"我们与星空有个约定",
	"新年快乐，愿我们在同一片星空下"
];
let subTitleIndex = 0;

setInterval(function(){
	subTitleIndex++;
	if(subTitleIndex === subTitles.length){
		subTitleIndex = 0;
	}
	const MPT2 = document.getElementById("MainPageText2");

	MPT2.innerHTML = subTitles[subTitleIndex];
	MPT2.style.animation = "MPT2AR 5s infinite";
	
}, 5000);
//==========================================================


setInterval(function(){
	if(window.innerWidth <= 1200){
		document.getElementById("timeBorder").style.position="absolute";
		document.getElementById("timeBorder").style.right="auto";
		document.getElementById("timeBorder").style.left="850px";
	}else{
		document.getElementById("timeBorder").style.right="50px";
		document.getElementById("timeBorder").style.left="auto";
	}
});

