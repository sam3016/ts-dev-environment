"use strict";
//Here we're importing items we'll need. You can add other imports here.
//The first function. Remove this.
const btn = document.querySelector("button");
if (btn) {
    btn.onclick = function () {
        alert("You ran some TypeScript");
    };
}
window.loadData = (json) => {
    alert(`Data is ${json}`);
};
//
