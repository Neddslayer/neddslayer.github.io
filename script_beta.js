var url="https://watch.nationalgeographic.cf/";
if(url)
{
  e?e.focus():e=window.open();
  e.document.body.style.margin="0";
  e.document.body.style.height="100vh";
  var e,t=e.document.createElement("iframe");
  t.style.border="none";
  t.style.width="100%";
  t.style.height="100%";t.style.margin="0";
  t.src=url;
  e.document.body.appendChild(t);
  var o=setInterval(function(){e.closed&&(clearInterval(o),e=void 0)},500)
  t.onload = function() {
    var s = t.document.createElement('script');
    s.type = 'text/javascript';
    var code = 'addEventListener("unload", (event) => {event.preventDefault()});addEventListener("beforeunload", (event) => {event.preventDefault()});';
    try {
      s.appendChild(t.document.createTextNode(code));
      t.document.body.appendChild(s);
    } catch (e) {
      s.text = code;
      t.document.body.appendChild(s);
    }
  }
}
