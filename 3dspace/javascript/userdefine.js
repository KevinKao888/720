var WindowTitle = document.title;
function PanoLoadDefault(){
	var pano_name = "pano_" + space3d.get("pano_now");
	document.title = WindowTitle + " - " + space3d.get("plugin["+pano_name+"].title");
}

function SetFrameI4(URL){
	parent.document.frames.I4.location.href = URL;
}

function getQueryParams(qs) {
  qs = qs.split("+").join(" ");
  var params = {}, tokens,
  re = /[?&]?([^=]+)=([^&]*)/g;
  while (tokens = re.exec(qs)) {
	params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params;
}

function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
}