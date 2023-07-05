function myfunc()
{document.getElementById("doc").innerHTML = "GREAT JUASEC";

document.getElementById("doc2").innerHTML = "DWENEKYEA BIE"

}





var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


//document.getElementById("par").innerHTML = "We are the boldest"//