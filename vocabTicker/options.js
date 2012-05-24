var defaultForeColor = "#ffd700";
var defaultTextColor = "#000000";
var defaultTextDisp = "8";

function loadOptions() {
	
	
	var fColr = localStorage["fColr"];
	var tColr = localStorage["tColr"];
	var tDisp = localStorage["tDisp"];


	
	if (fColr == undefined) 
	{
		fColr = defaultForeColor;
	}

	if (tColr == undefined) 
	{
		tColr = defaultTextColor;
	}

	if (tDisp == undefined) 
	{
		tDisp = defaultTextDisp;
	}
	
	document.getElementById('txt1').value = fColr;
	document.getElementById('txt2').value = tColr;
	document.getElementById('txt3').value = tDisp;

}

function isInteger(value) {
  
   var strValidChars = "0123456789.-";
   var strChar;
   var blnResult = true;

   if (value.length == 0) return false;

  
   for (i = 0; i < value.length && blnResult == true; i++)
      {
      strChar = value.charAt(i);
      if (strValidChars.indexOf(strChar) == -1)
         {
         blnResult = false;
         }
      }
   return blnResult;
}

function integerInRange(value, min, max) {
  if (isInteger(value)) {
    if ((parseInt(value) >= min) && (parseInt(value) <= max)) {
	  return true; 
    } else {
      return false; 
    }
  } else {
    return false; 
  }
}


function saveOptions() {
	

	var fColr = document.getElementById('txt1').value;
	fColr=jQuery.trim(fColr)

	var tColr = document.getElementById('txt2').value;
	tColr=jQuery.trim(tColr)

    var tDisp = document.getElementById('txt3').value;
	tDisp=jQuery.trim(tDisp)
	
	//document.getElementById('nameSuc').style.display="none";
	$('#nameSuc').fadeOut();

	if (fColr=='')
	{
		document.getElementById('nameErr').style.display="inline";
		document.getElementById('txt1').focus();
		return failStr;
	}
	else
	{
		document.getElementById('nameErr').style.display="none";
	}

	if (tColr=='')
	{
		document.getElementById('nameErr1').style.display="inline";
		document.getElementById('txt1').focus();
		return failStr;
	}
	else
	{
		document.getElementById('nameErr1').style.display="none";
	}

	if ((tDisp==''))
	{
		document.getElementById('nameErr2').style.display="inline";
		document.getElementById('txt1').focus();
		return failStr;
	}
	else 
	{
			var value1= integerInRange(document.getElementById('txt3').value, 5, 20);
			if(!value1)
			{
				document.getElementById('nameErr2').style.display="inline";
				document.getElementById('txt1').focus();
				return failStr;
			}
			else
			{
					document.getElementById('nameErr2').style.display="none";
			}
	}

	localStorage["fColr"] = fColr;
	localStorage["tColr"] = tColr;
	localStorage["tDisp"] = tDisp;


	//document.getElementById('nameSuc').style.display="inline";
	$('#nameSuc').fadeIn();



}

function eraseOptions() {
	localStorage.removeItem("fColr");
	localStorage.removeItem("tColr");
	localStorage.removeItem("tDisp");
	loadOptions();
	saveOptions();
}