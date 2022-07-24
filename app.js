function loadDoc(btn) {
    var aj = new XMLHttpRequest();
    aj.onload = () => {
        if (aj.readyState == 4 && aj.status == 200) {
            $('#demo').html(aj.responseText);
        }
    }
    aj.open('GET', btn.id + '.html', true);
    aj.send();
}

function change(val) {
    var aj = new XMLHttpRequest();

    // when the page is loaded
    aj.onreadystatechange = () => {
        if (aj.readyState == 4 && aj.status == 200) {
            $('#ul').html(aj.responseText);
        }
    }
    aj.open('GET', val + '.html', true);
    aj.send();
}
