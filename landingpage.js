const getItems = document.querySelectorAll(".left-side ul li a");

getItems.forEach(item => {
    item.addEventListener("click", function(e){
        for(var i = 0; i < getItems.length; i++){
            getItems[i].classList.remove("active");
        }
        this.classList.add("active");
    });
});