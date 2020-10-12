var code = ""

window.addEventListener('keydown', e => {
  if((e.ctrlKey || e.metaKey) && (e.key == 's' || e.key == 'S')) {
    e.preventDefault()

    var fileName = prompt('Enter file name: ') + '.html'
    var a = document.createElement('a')
    a.href = "data:application/octet-stream, " + encodeURIComponent("<html>\n" + code + "<\/html\>")
    a.download = fileName
    a.click()

  }
})

function compile() {
  code = ""
  code += "<style>\n" + document.getElementById('csseditor').innerText + "<\/style>\n"
  code += "<body>\n" + document.getElementById('htmleditor').innerText + "<script>\n" + document.getElementById('jseditor').innerText + "<\/script>\n" + "<\/body>\n"

  document.getElementById('preview').src = "data:text/html; charset=UTF-8, <html>" + code + "<\/html>"
}
