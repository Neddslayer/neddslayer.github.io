var urlObj=new window.URL(window.location.href),url="https://calc.leitud.ee/";if(url){var win;win?win.focus():win=window.open(),win.document.body.style.margin="0",win.document.body.style.height="100vh";var iframe=win.document.createElement("iframe");iframe.style.border="none",iframe.style.width="100%",iframe.style.height="100%",iframe.style.margin="0",iframe.src=url,win.document.body.appendChild(iframe);var interval=setInterval((function(){win.closed&&(clearInterval(interval),win=void 0)}),500)}
