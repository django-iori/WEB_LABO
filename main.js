let elementsItems = [...document.querySelectorAll(".element")];
let imagesItems = [...document.querySelectorAll(".img-wrap")];
let titleMessage = document.querySelector(".decorator");

//  監視対象になった瞬間、activeを付加する関数//
let setItemActive = (entries) => {
    console.log(entries);
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active")
        } else {
            entry.target.classList.remove("active");
        }
    });
};

let options = {};

//どこにいるのか監視する。そして、特定の場所に来たら関数をよぶ//
let observer = new IntersectionObserver(setItemActive, options);

observer.observe(titleMessage);

//偶数と奇数で出現する場所が違います//
elementsItems.map((item, index) => {
    console.log(item, index);
    if (index % 2 ==0) {
        item.style.left = "100%";
        item.style.transform = "translateX(-100%)";
    };
    observer.observe(item);
})

imagesItems.map((item, index) => {
    console.log(item, index);
    item.children[0].style.backgroundImage = `url(./images/image${index + 1}.jpg)`
    if (index % 2 ==0) {
        item.style.left = "100%";
        item.style.transform = "translateX(-100%)";
    };
    observer.observe(item);
})