/*
 * Copyright (c) 2011 Swapnil Nawale. 
 */

function onText1(data) {
	 if (data.posts) {
		 //alert(window.getSelection().toString());
		//var indexVal = data.posts[0].index;
		var word = data.posts[0].word ;
		var meaning = " : " + data.posts[0].meaning;
		var tDisp = data.posts[0].tDisp ;
		tDisp = parseInt(tDisp) * 1000;

		$('#containerPane').fadeOut('fast',function(){$('#containerPane').fadeIn('slow');});		

		var wordPane_dom = document.getElementById("wordPane");		
		var meanPane_dom = document.getElementById("meaningPane");
		var button1_dom = document.getElementById("button1");
		var button4_dom = document.getElementById("button4");

		document.getElementById("wordPane").innerText = "";    
		document.getElementById("meaningPane").innerText = "";
		var text2_dom = document.createTextNode(word);
		var text3_dom = document.createTextNode(meaning);
		wordPane_dom.appendChild(text2_dom);
		meanPane_dom.appendChild(text3_dom);
		button4_dom.onclick = function() {	var image_obj = document.getElementById("pauseId"); 
		if(image_obj.src.indexOf("pause.png") != -1)
		{
			var imgURL5 = chrome.extension.getURL("play.png");
			image_obj.src = imgURL5;
			document.getElementById("button4").title="Resume the ticker."; 
			clearTimeout(nextTimeOut);
		} 
		else
		{
			var imgURL6 = chrome.extension.getURL("pause.png");
			image_obj.src = imgURL6;
			document.getElementById("button4").title="Pause the ticker.";
			var nextTimeOut1 = setTimeout(function() {chrome.extension.sendRequest({'action' : 'fetchVocab'}, onText1);},0);
		}; 
		return false;	};

		var urlToOpen = "http://www.thefreedictionary.com/"+ word;	
		button1_dom.onclick = function() {chrome.extension.sendRequest({'action' : 'openTab1','urltoopen': urlToOpen}); return false;	};
	 }
	var nextTimeOut = setTimeout(function() {chrome.extension.sendRequest({'action' : 'fetchVocab'}, onText1);},tDisp);	
} 

    

function onText(data,a) 
{
 if (data.posts) {
	//var indexVal = data.posts[0].index;
	var word = data.posts[0].word ;
	var meaning = " : " + data.posts[0].meaning;
	var fColr = data.posts[0].fColr ;
	var tColr = data.posts[0].tColr ;
	var tDisp = data.posts[0].tDisp ;
	tDisp = parseInt(tDisp) * 1000;

	var word_dom = document.createElement('div');
	word_dom.setAttribute("id", "tickerPane"); 

	
	var w9_dom = document.createElement('div');
	w9_dom.setAttribute("id", "optionsPane"); 
		

	var w12_dom = document.createElement('button');
	w12_dom.setAttribute("id","button3");
	w12_dom.setAttribute("title","Change Settings for Vocab-Ticker.");

	
	w12_dom.style.cssText = [
      'border: 0;',
	  'cursor:pointer;',
	  'background-color:'+ fColr +';',
	  'height:30px;',
	  'width:30px;',
	  'padding-top:4px;',
	  'padding-left:0;',
	  'display:inline;',
	  'background:transperant;'
    ].join(' ');
	
	var urlToOpen1 = chrome.extension.getURL("options.html");

	w12_dom.onclick = function() {chrome.extension.sendRequest({'action' : 'openTab1','urltoopen': urlToOpen1}); return false;	};
	
	var w13_dom = document.createElement('img');
	var imgURL3 = chrome.extension.getURL("Settings.png");
	w13_dom.setAttribute("src",imgURL3);
	w13_dom.style.cssText = [
      'height:24px;',
	  'width:24px;',
	  'margin-top:0;'
    ].join(' ');


	
	var w10_dom = document.createElement('button');
	w10_dom.setAttribute("id","button4");
	w10_dom.setAttribute("type","button");
	w10_dom.setAttribute("title","Pause the Ticker.");

	
	w10_dom.style.cssText = [
      'border: 0;',
	  'cursor:pointer;',
	  'background-color:'+ fColr +';',
	  'height:30px;',
	  'width:32px;',
	  'padding-top:4px;',
	  'padding-left:0;',
	  'display:inline;',
	  'background:transperant;'
    ].join(' ');

	w10_dom.onclick = function() {	var image_obj = document.getElementById("pauseId"); 
	if(image_obj.src.indexOf("pause.png") != -1)
	{
		var imgURL5 = chrome.extension.getURL("play.png");
		image_obj.src = imgURL5;
		document.getElementById("button4").title="Resume the ticker."; 
		clearTimeout(firstTimeOut);
	} 
	else
	{
		var imgURL6 = chrome.extension.getURL("pause.png");
		image_obj.src = imgURL6;
		document.getElementById("button4").title="Pause the ticker.";
		var firstTimeOut1 = setTimeout(function() {chrome.extension.sendRequest({'action' : 'fetchVocab'}, onText1);},0);
	}; 
	return false;	};

	var w11_dom = document.createElement('img');
	var imgURL4 = chrome.extension.getURL("pause.png");
	w11_dom.setAttribute("id","pauseId");
	w11_dom.setAttribute("src",imgURL4);
	w11_dom.style.cssText = [
      'height:24px;',
	  'width:24px;',
	  'margin-top:0;'
	].join(' ');


	w9_dom.style.cssText = [
	  'background-color:'+ fColr +';',
	  'height:30px;',
	  'width:66px;',
 	  'margin-right:5px;',
	  'background:transperant;',
      'float: left;',
	  'padding: 0px;'
	  //'clear:both;'
	].join(' ');
	
	w12_dom.appendChild(w13_dom);
	w9_dom.appendChild(w12_dom);
	
	w10_dom.appendChild(w11_dom);
	w9_dom.appendChild(w10_dom);


	var w1_dom = document.createElement('div');
	w1_dom.setAttribute("id", "containerPane"); 
	//w1_dom.setAttribute("onmouseover", "alert('came in');");	
	//w1_dom.setAttribute("onmouseout", "alert('came out');");
	w1_dom.style.cssText = [
       //'width:95%;',
	    'padding: 10px;'
    ];


	// word dom
	var w2_dom = document.createElement('div');
	w2_dom.setAttribute("id", "wordPane"); 
	var text_dom = document.createTextNode(word);
	w2_dom.style.cssText = [
      'font-weight: bold;',
	  'display:inline;'
    ].join(' ');

    w2_dom.appendChild(text_dom);
	w1_dom.appendChild(w2_dom);
	
	// meaning dom
	var w3_dom = document.createElement('div');
	w3_dom.setAttribute("id", "meaningPane"); 
	var text1_dom = document.createTextNode(meaning);
	w3_dom.style.cssText = [
      'font-weight: normal;',
	  'display:inline;'
    ].join(' ');

    w3_dom.appendChild(text1_dom);
	w1_dom.appendChild(w3_dom);


	var w4_dom = document.createElement('div');
	w4_dom.setAttribute("id", "closePane"); 
		

	var w7_dom = document.createElement('button');
	w7_dom.setAttribute("id","button1");
	w7_dom.setAttribute("title","Learn More about this word at thefreedictionary.com.");

	
	w7_dom.style.cssText = [
      'border: 0;',
	  'cursor:pointer;',
	  'background-color:'+ fColr +';',
	  'height:30px;',
	  'width:30px;',
	  'padding-top:4px;',
	  'padding-left:0;',
	  'display:inline;',
	  'background:transperant;'
    ].join(' ');
	
	var urlToOpen = "http://www.thefreedictionary.com/"+ word;	
	w7_dom.onclick = function() {chrome.extension.sendRequest({'action' : 'openTab1','urltoopen': urlToOpen}); return false;	};
	
	var w8_dom = document.createElement('img');
	var imgURL = chrome.extension.getURL("dict.png");
	w8_dom.setAttribute("src",imgURL);
	w8_dom.style.cssText = [
      'height:24px;',
	  'width:30px;',
	  'margin-top:0;'
    ].join(' ');


	
	var w5_dom = document.createElement('button');
	w5_dom.setAttribute("id","button2");
	w5_dom.setAttribute("type","button");
	w5_dom.setAttribute("title","Hide the Ticker!");

	
	w5_dom.style.cssText = [
      'border: 0;',
	  'cursor:pointer;',
	  'background-color:'+ fColr +';',
	  'height:30px;',
	  'width:32px;',
	  'padding-top:4px;',
	  'padding-left:0;',
	  'display:inline;',
	  'background:transperant;'
    ].join(' ');

	w5_dom.onclick = function() {	var tikcerPane1_dom = document.getElementById("tickerPane");var parObj=tikcerPane1_dom.parentNode; parObj.removeChild(tikcerPane1_dom); return false;	};

	var w6_dom = document.createElement('img');
	var imgURL1 = chrome.extension.getURL("close_button.png");
	w6_dom.setAttribute("src",imgURL1);
	w6_dom.style.cssText = [
      'height:24px;',
	  'width:30px;',
	  'margin-top:0;'
	].join(' ');


	w4_dom.style.cssText = [
	  'background-color:'+ fColr +';',
	  'height:30px;',
	  'width:66px;',
 	  //'margin-right:5px;',
	  'background:transperant;',
      'float: right;',
	  'padding: 0px;'
	  //'clear:both;'
	].join(' ');
	
	w7_dom.appendChild(w8_dom);
	w4_dom.appendChild(w7_dom);
	
	w5_dom.appendChild(w6_dom);
	w4_dom.appendChild(w5_dom);

	word_dom.appendChild(w9_dom);
	word_dom.appendChild(w4_dom);			
	word_dom.appendChild(w1_dom);

	word_dom.style.cssText = [
	  'background-color:'+ fColr +';',
	  'margin:0;',
      'color: ' + tColr +';',
      'position: relative;',
	  'z-index: 123456;',
	  'text-align:center;',
	  'font: 12px Verdana;'
    ].join(' ');


	document.body.style.cssText = 'position: relative';
	document.body.parentElement.insertBefore(word_dom, document.body); 
	
	}
	var firstTimeOut = setTimeout(function() {chrome.extension.sendRequest({'action' : 'fetchVocab'}, onText1);},tDisp);
	
};


chrome.extension.sendRequest({'action' : 'fetchVocab'}, onText);