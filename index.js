var ratings = document.querySelectorAll(".option");
var firstStage = document.getElementById("first-stage");
var secondStage = document.getElementById("second-stage")
var selectedRate;



ratings.forEach(function (e) {
    e.onclick = function () {
        selectedRate = this.innerHTML;
    };
});
function submit() {
    secondStage.style.display="flex";
    firstStage.style.display="none";
    document.getElementById("selected").innerHTML = `You selected ${selectedRate || 0} out of 5`;
}
