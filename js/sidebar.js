function closeNav() {
    var item = document.getElementsByClassName('sidebar-item-text');
    var i;
    document.getElementById("side").style.width = "5%";
    document.getElementById("btnCloseNav").style.display = "none";
    document.getElementById("btnOpenNav").style.display = "inline-block";
    for (i = 0; i < item.length; i++) {
        item[i].style.display = "none";
    }
}

function openNav() {
    var item = document.getElementsByClassName('sidebar-item-text');
    var i;
    document.getElementById("side").style.width = "238px";
    document.getElementById("btnCloseNav").style.display = "inline-block";
    document.getElementById("btnOpenNav").style.display = "none";
    for (i = 0; i < item.length; i++) {
        item[i].style.display = "inline-block";
    }
}