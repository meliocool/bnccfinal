// const getItems = document.querySelectorAll(".left-side ul li a");

// getItems.forEach(item => {
//     item.addEventListener("click", function(e){
//         for(var i = 0; i < getItems.length; i++){
//             getItems[i].classList.remove("active");
//         }
//         this.classList.add("active");
//     });
// });

const getItems = document.querySelectorAll(".left-side ul li a");
const explanations = document.querySelectorAll(".right-side ul li .explanation");

getItems.forEach((item, index) => {
    item.addEventListener("click", function(e){
        // Remove active class from all bullet points and explanations
        getItems.forEach(item => item.classList.remove("active"));
        explanations.forEach(explanation => explanation.classList.remove("active"));
        
        // Add active class to the clicked bullet point and corresponding explanation
        this.classList.add("active");
        explanations[index].classList.add("active");
    });
});
