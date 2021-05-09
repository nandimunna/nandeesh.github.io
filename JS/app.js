const detailTitle = document.querySelector('.detail-title');
const masterItems = document.querySelectorAll('.master-item');

masterItems.forEach((item, i) => {
    item.addEventListener('click', function () {
        clearSelected();
        console.log(item);
        this.classList.add('active-item');
        this.children[0].style.backgroundColor = '#3167be';
        var imagePath = this.children[1].src;
        var modifiedPath = imagePath.replace("8e97a0", "14222f");
        this.children[1].src = modifiedPath;
        this.children[2].style.color = '#162836';
        detailTitle.innerHTML = document.getElementsByClassName('pageclass')[i].innerHTML;
    });
});

function clearSelected() {
    for (let item of masterItems) {
        item.children[0].style.backgroundColor = '#fbfcfd';
        var imagePath = item.children[1].src;
        var modifiedPath = imagePath.replace("14222f", "8e97a0");
        item.children[1].src = modifiedPath;
        item.children[2].style.color = '#919ba5';
        item.classList.remove('active-item');
    }
}

