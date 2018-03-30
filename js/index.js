function $(id) {
	return document.querySelector(id);
}

//获取元素集合
function $$(tag) {
	return document.querySelectorAll(tag);
}



//进场动画
var loadNum = $$('.change').length;
var nowNum = 0;
for(var i = 0; i < loadNum; i++) {
	$$('.change')[i].onload = function() {
		nowNum++;

		$$('#startShow .pos_b')[0].style.transform = 'rotate(' + parseInt(nowNum / loadNum * 200 - 100) + 'deg)'
		if(nowNum / loadNum > 0.98) {
			$('#startShow').style.display = 'none'
		}
	}
}
var tabNum = 0

function fn2(obj) {
	var wt = document.documentElement.clientWidth;
	var ht = document.documentElement.clientHeight;
	$('#ca').style.width = wt + 'px'
	$('#ca').style.height = ht + 'px'

	if((wt / ht) > (1680 / 860)) {
		obj.style.width = '100%';
		obj.style.height = wt * (860 / 1680) + 'px';
		obj.style.top = (ht - wt * (860 / 1680)) / 2 + 'px';
		obj.style.left = '0';
	}
	// 可视区域的宽/高<图片的宽/高时
	if((wt / ht) < (1680 / 860)) {
		obj.style.height = '100%';
		obj.style.width = ht * (1680 / 860) + 'px';
		obj.style.left = (wt - ht * (1680 / 860)) / 2 + 'px';
		obj.style.top = '0';
	}

}

//获取时间
var TimeMate = document.getElementsByClassName('time')
			function ChangeTime(){
				var Nowtime = new Date();
				var h = Nowtime.getHours();
				if (h<10) h='0'+h;
				var  m = Nowtime.getMinutes();
				if (m<10) m='0'+m;
				var s = Nowtime.getSeconds();
				if (s<10) s='0'+s;
				var str = ''+h+''+m+''+s;
				for (var i=0;i<str.length;i++) {
					TimeMate[i].className = 'time span'+str[i]
				}
				if (h>=5&&h<8){$('#timesImg').src = 'imgas/times/2_1.jpg'}
				if (h>=8&&h<11){$('#timesImg').src = 'imgas/times/2_2.jpg'}
				if (h>=11&&h<14){$('#timesImg').src = 'imgas/times/2_3.jpg'}
				if (h>=14&&h<17){$('#timesImg').src = 'imgas/times/2_4.jpg'}
				if (h>=17&&h<20){$('#timesImg').src = 'imgas/times/2_5.jpg'}
				if (h>=20&&h<23){$('#timesImg').src = 'imgas/times/2_6.jpg'}
				if (h>=23){$('#timesImg').src = 'imgas/times/2_7.jpg'}
			}
			setInterval(ChangeTime,1000)
window.onload = window.onresize = function() {
	ChangeTime()
	var oLi = $$('#banner li');
	fn2(oLi[0])
	fn2(oLi[1])
	fn2(oLi[2])
	fn2(oLi[3])
	fn2(oLi[4])
}

//全屏透明度tab切换
var aBtn = $$('#ol li');
var aLi = $$('#banner li');
var now = 0;
for(var i = 0; i < aBtn.length; i++) {
	aBtn[i].index = i;

	aBtn[i].onclick = function() {
		tabNum = this.index;

		if(tabNum == 1) now = 1;
		if(tabNum == 2) now = 5;
		if(tabNum == 3) now = 9;
		if(tabNum == 4) now = 13;
		jump()
		fuArry[now - 1]()

	}

}

function jump() {

	for(var i = 0; i < aBtn.length; i++) {
		aLi[i].style.opacity = '0';
		aBtn[i].className = '';
	}
	aLi[tabNum].style.opacity = '1';
	aBtn[tabNum].className = 'active';
	//判断到每个页面的时候动画执行
	var tu5_X = document.getElementById('tu5_X')

}
var div = document.getElementById('don_1')
var div2 = document.getElementById('don_2');
var div3 = document.getElementById('don_3');
var div4 = document.getElementById('don_4');
var tu2_1 = document.getElementById('tu2_1') //15
var tu2_2 = document.getElementById('tu2_2') //5
var tu2_3 = document.getElementById('tu2_3') //14
var tu3_1 = document.getElementById('tu3_1') //10
var tu3_2 = document.getElementById('tu3_2') //22
var tu3_3 = document.getElementById('tu3_3') //12
var tu4_1 = document.getElementById('tu4_1') //8
var tu4_2 = document.getElementById('tu4_2') //18
var tu4_3 = document.getElementById('tu4_3') //14
var tu5_black = document.getElementById('tu5_black')
var tu5_white = document.getElementById('tu5_white')
var tu5_white = document.getElementById('tu5_white')
var tu5_now = document.getElementById('tu5_black');
var canRun = true; //函数节流判断开关
//鼠标滚轮事件  判断向上滚动还是向下滚动
var fuArry = [
	function() {
		//		jump()
		for(var i = 0; i < 14; i++) {
			imgmove(div);

		}
	},
	function() {
		for(var i = 0; i < 15; i++) {
			imgmove(tu2_1);
		}
	},
	function() {
		for(var i = 0; i < 5; i++) {
			imgmove(tu2_2);
		}
	},
	function() {
		for(var i = 0; i < 14; i++) {
			imgmove(tu2_3);
		}
	},
	function() {
		//		jump()
		for(var i = 0; i < 13; i++) {
			imgmove(div2);
		}
	},

	function() {

		for(var i = 0; i < 10; i++) {
			imgmove(tu3_1);
		}
	},
	function() {
		for(var i = 0; i < 22; i++) {
			imgmove(tu3_2);
		}
	},
	function() {
		for(var i = 0; i < 12; i++) {
			imgmove(tu3_3);
		}
	},
	function() {
		//		jump()
		for(var i = 0; i < 11; i++) {
			imgmove(div3);

		}
	},
	function() {
		for(var i = 0; i < 8; i++) {
			imgmove(tu4_1);
		}
	},
	function() {
		for(var i = 0; i < 18; i++) {
			imgmove(tu4_2);
		}
	},
	function() {
		for(var i = 0; i < 14; i++) {
			imgmove(tu4_3);
		}
	},
	function() {
		//		jump();
		for(var i = 0; i < 15; i++) {
			imgmove(div4);
		}
	},
	function() {

		var oDiv = document.getElementById('taber')
		var mBtn = oDiv.getElementsByTagName('span')
		var aDiv = document.getElementById('taberr')
		var mon = aDiv.getElementsByTagName('div');
		var don_4 = document.getElementById('don_4')
		for(var i = 0; i < 32; i++) {
			imgmove(tu5_now);
		}

		//var Nommk=0;
		for(var i = 0; i < mBtn.length; i++) {
			mBtn[i].index = i;
			mBtn[i].onclick = function() {
				//		Nommk=this.index
				$('#taberr').style.display = 'block'
				for(var i = 0; i < mBtn.length; i++) {
					mon[i].style.opacity = "0";
				}
				mon[this.index].style.opacity = "1"
				if(this.index == 0) {
					tu5_now = tu5_black
					imgmove(tu5_now);
				}
				if(this.index == 1) {
					tu5_now = tu5_white
					imgmove(tu5_now);
				}
				if(this.index == 2) {
					tu5_now = tu5_gray
					imgmove(tu5_now);
				}
			}
		}
	}

]
var sRroll = function(e) {
	e = e || window.event;

	//函数节流 ，使滚轮滚动只跳转一页	
	if(!canRun) {
		return
	}
	canRun = false;
	setTimeout(function() {
		canRun = true;
	}, 300); //利用定时器，让函数执行延迟一段时间
	//函数节流 结束
	if(e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件               
		if(e.wheelDelta > 0) { //当滑轮向上滚动时  
			if(tabNum == 0) {
				tabNum = 0;
			} else {
				tabNum--;
			}
			for(var i = 0; i < document.getElementsByClassName('imgs_main')[tabNum].getElementsByClassName('change').length; i++) {
				document.getElementsByClassName('imgs_main')[tabNum].getElementsByClassName('change')[i].style.opacity = '0'
				console.log(document.getElementsByClassName('imgs_main')[tabNum].getElementsByClassName('change')[i])
			}

			if(tabNum == 0) now = 0;
			if(tabNum == 1) now = 1;
			if(tabNum == 2) now = 5;
			if(tabNum == 3) now = 9;
			if(tabNum == 4) now = 13;
			if(tabNum != 0) {
				fuArry[now - 1]()
			}

			jump()

			console.log(now, tabNum)
		}
		if(e.wheelDelta < 0) { //当滑轮向下滚动时 
			if(now >= 14) {
				now = 14;
			} else {
				now++
			}

			if(now == 1) {
				tabNum = 1;
				jump()
			}
			if(now == 5) {
				tabNum = 2;
				jump()
			}
			if(now == 9) {
				tabNum = 3;
				jump()
			}
			if(now == 13) {
				tabNum = 4;
				jump()
			}
			console.log(now, tabNum)

			fuArry[now - 1]()
		}
	} else if(e.detail) { //Firefox滑轮事件  
		if(e.detail < 0) { //当滑轮向上滚动时  
			if(now == 0) {
				now = 0;
			} else {
				now--
			}
			jump();
		}
		if(e.detail > 0) { //当滑轮向下滚动时  
			if(now >= aLi.length - 1) {
				now = aLi.length - 1;
			} else {
				now++
			}
			jump();
		}
	}
}

if(navigator.userAgent.indexOf('Firefox') >= 0) {
	document.addEventListener('DOMMouseScroll', sRroll, false);
} else {
	window.onmousewheel = sRroll;
}

//判断滚动滚轮图片自增
var timer = null;

function imgmove(objs, s) {
	var _img = objs.getElementsByTagName('img');
	var _m_ = 0;
	var _s = s || 1;

	function _imgmove(imgs) {
		clearInterval(timer)
		timer = setInterval(function() {

			for(var i = 0; i < _img.length; i++) {
				_img[i].style.opacity = "0";
			}
			_img[_m_].style.opacity = "1";
			if(_m_ < _img.length - 1) _m_++;
			_imgmove(_img);
		}, 50 * _s)

	}
	_imgmove(_img);
}
//汽车转动

//第五部分车tab切换

//预定车
var li10 = document.getElementById('li10')
var li11 = document.getElementById('li11')
var li12 = document.getElementById('li12')
var yua = document.getElementById('yua')
var yua1 = document.getElementById('yua1')
var yua2 = document.getElementById('yua2')

li10.onclick = function() {
	yua.style.display = "block"
}
li11.onclick = function() {
	yua1.style.display = "block"
}
li12.onclick = function() {
	yua2.style.display = "block"
}
var cuo = document.getElementById('cuo1')
cuo.onclick = function() {
	yua.style.display = "none"
}
var cuo2 = document.getElementById('cuo2')
cuo2.onclick = function() {
	yua1.style.display = "none"
}
var cuo3 = document.getElementById('cuo3')
cuo3.onclick = function() {
	yua2.style.display = "none"
}
//判断是否登陆
var oinput1 = document.getElementById('input1')
var oinput2 = document.getElementById('input2')
var oinput3 = document.getElementById('input3')
var oinput4 = document.getElementById('input4')
var oinput5 = document.getElementById('input5')
var oinput6 = document.getElementById('input6')
var btnsbt = document.getElementById('btnsbt')

var oC = document.getElementById('content');

btnsbt.onclick = function() {

	if(oinput2.value.length !== 11 && oinput2.value != '' && isNaN(oinput2.value) == false) {
		alert('请输入完整的手机号')
	};
	if(isNaN(oinput2.value) == true && oinput2.value.length != 11) {
		alert('请输入正确手机号')
	}
	if(oinput1.value == "" && oinput2.value == '') {
		alert('请填写信息')
	}

}

//城市二级联动
var arr = new Array();
arr[0] = "东城,西城,崇文,宣武,朝阳,丰台,石景山,海淀,门头沟,房山,通州,顺义,昌平,大兴,平谷,怀柔,密云,延庆"
arr[1] = "黄浦,卢湾,徐汇,长宁,静安,普陀,闸北,虹口,杨浦,闵行,宝山,嘉定,浦东,金山,松江,青浦,南汇,奉贤,崇明"
arr[2] = "和平,东丽,河东,西青,河西,津南,南开,北辰,河北,武清,红挢,塘沽,汉沽,大港,宁河,静海,宝坻,蓟县"
arr[3] = "万州,涪陵,渝中,大渡口,江北,沙坪坝,九龙坡,南岸,北碚,万盛,双挢,渝北,巴南,黔江,长寿,綦江,潼南,铜梁,大足,荣昌,壁山,梁平,城口,丰都,垫江,武隆,忠县,开县,云阳,奉节,巫山,巫溪,石柱,秀山,酉阳,彭水,江津,合川,永川,南川"
arr[4] = "石家庄,邯郸,邢台,保定,张家口,承德,廊坊,唐山,秦皇岛,沧州,衡水"
arr[5] = "太原,大同,阳泉,长治,晋城,朔州,吕梁,忻州,晋中,临汾,运城"
arr[6] = "呼和浩特,包头,乌海,赤峰,呼伦贝尔盟,阿拉善盟,哲里木盟,兴安盟,乌兰察布盟,锡林郭勒盟,巴彦淖尔盟,伊克昭盟"
arr[7] = "沈阳,大连,鞍山,抚顺,本溪,丹东,锦州,营口,阜新,辽阳,盘锦,铁岭,朝阳,葫芦岛"
arr[8] = "长春,吉林,四平,辽源,通化,白山,松原,白城,延边"
arr[9] = "哈尔滨,齐齐哈尔,牡丹江,佳木斯,大庆,绥化,鹤岗,鸡西,黑河,双鸭山,伊春,七台河,大兴安岭"
arr[10] = "南京,镇江,苏州,南通,扬州,盐城,徐州,连云港,常州,无锡,宿迁,泰州,淮安"
arr[11] = "杭州,宁波,温州,嘉兴,湖州,绍兴,金华,衢州,舟山,台州,丽水"
arr[12] = "合肥,芜湖,蚌埠,马鞍山,淮北,铜陵,安庆,黄山,滁州,宿州,池州,淮南,巢湖,阜阳,六安,宣城,亳州"
arr[13] = "福州,厦门,莆田,三明,泉州,漳州,南平,龙岩,宁德"
arr[14] = "南昌市,景德镇,九江,鹰潭,萍乡,新馀,赣州,吉安,宜春,抚州,上饶"
arr[15] = "济南,青岛,淄博,枣庄,东营,烟台,潍坊,济宁,泰安,威海,日照,莱芜,临沂,德州,聊城,滨州,菏泽"
arr[16] = "郑州,开封,洛阳,平顶山,安阳,鹤壁,新乡,焦作,濮阳,许昌,漯河,三门峡,南阳,商丘,信阳,周口,驻马店,济源"
arr[17] = "武汉,宜昌,荆州,襄樊,黄石,荆门,黄冈,十堰,恩施,潜江,天门,仙桃,随州,咸宁,孝感,鄂州"
arr[18] = "长沙,常德,株洲,湘潭,衡阳,岳阳,邵阳,益阳,娄底,怀化,郴州,永州,湘西,张家界"
arr[19] = "广州,深圳,珠海,汕头,东莞,中山,佛山,韶关,江门,湛江,茂名,肇庆,惠州,梅州,汕尾,河源,阳江,清远,潮州,揭阳,云浮"
arr[20] = "南宁,柳州,桂林,梧州,北海,防城港,钦州,贵港,玉林,南宁地区,柳州地区,贺州,百色,河池"
arr[21] = "海口,三亚"
arr[22] = "成都,绵阳,德阳,自贡,攀枝花,广元,内江,乐山,南充,宜宾,广安,达川,雅安,眉山,甘孜,凉山,泸州"
arr[23] = "贵阳,六盘水,遵义,安顺,铜仁,黔西南,毕节,黔东南,黔南"
arr[24] = "昆明,大理,曲靖,玉溪,昭通,楚雄,红河,文山,思茅,西双版纳,保山,德宏,丽江,怒江,迪庆,临沧"
arr[25] = "拉萨,日喀则,山南,林芝,昌都,阿里,那曲"
arr[26] = "西安,宝鸡,咸阳,铜川,渭南,延安,榆林,汉中,安康,商洛"
arr[27] = "兰州,嘉峪关,金昌,白银,天水,酒泉,张掖,武威,定西,陇南,平凉,庆阳,临夏,甘南"
arr[28] = "银川,石嘴山,吴忠,固原"
arr[29] = "西宁,海东,海南,海北,黄南,玉树,果洛,海西"
arr[30] = "乌鲁木齐,石河子,克拉玛依,伊犁,巴音郭勒,昌吉,克孜勒苏柯尔克孜,博 尔塔拉,吐鲁番,哈密,喀什,和田,阿克苏"
arr[31] = "香港"
arr[32] = "澳门"
arr[33] = "台北,高雄,台中,台南,屏东,南投,云林,新竹,彰化,苗栗,嘉义,花莲,桃园,宜兰,基隆,台东,金门,马祖,澎湖"

function init() {
	var city = document.getElementById("city1");
	var cityArr = arr[0].split(",");
	for(var i = 0; i < cityArr.length; i++) {
		city[i] = new Option(cityArr[i], cityArr[i]);
	}
}

function getCity() {
	var pro = document.getElementById("province1");
	var city = document.getElementById("city1");
	var index = pro.selectedIndex;
	var cityArr = arr[index].split(",");

	city.length = 0;
	//将城市数组中的值填充到城市下拉框中
	for(var i = 0; i < cityArr.length; i++) {
		city[i] = new Option(cityArr[i], cityArr[i]);
	}
}

var pres = ["北京", "上海", "辽宁"]; //直接声明Array
//声明市
var cities = [
	[{
		cityID: "BeiJing",
		city: "北京市",
		selected: true
	}],
	[{
		cityID: "ShangHai",
		city: "上海市",
		selected: true
	}],
	[{
		cityID: "ShenYang",
		city: "沈阳市",
		selected: true
	}, {
		cityID: "PanJin",
		city: "盘锦市",
		selected: false
	}]
]

//设置一个省的公共下标
var pIndex = -1;
var preEle = document.getElementById("pre");
var cityEle = document.getElementById("city2");
//先设置省的值
for(var i = 0; i < pres.length; i++) {

	var op = new Option(pres[i], i);

	preEle.options.add(op);
}

function chg(obj) {
	if(obj.value == -1) {
		cityEle.options.length = 0;
		return false;
	}
	cityEle.innerHTML = ''
	for(var i = 0; i < cities[obj.value].length; i++) {
		var ops = new Option(cities[obj.value][i].city, cities[obj.value][i].cityID, cities[obj.value][i].selected);
		cityEle.options.add(ops);
	}
	chgs()
}

function chgs() {
	console.log(MapArray[cityEle.value])
	map.panTo(new BMap.Point(MapArray[cityEle.value]));
}