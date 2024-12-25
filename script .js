// create  element head 
const metaCharset = document.createElement("meta");
const metaViewport = document.createElement("meta");
const title = document.createElement("title");

//metaCharset
metaCharset.setAttribute("charset", "UTF-8");

// metaViewport
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1.0";

//title
title.textContent = "ClickColorCase";

//append in head 
document.head.appendChild(metaCharset);
document.head.appendChild(metaViewport);
document.head.appendChild(title);

//body part 

allCase = document.createElement("div");
test = document.createElement("p");
test.innerText = "hello"


Object.assign(test.style, {
    backgroundColor: "white",
    padding: "10px",
    border: "10px solid black",
    width: "10px",
    height: "10px"
});

//append in document
allCase.appendChild(test);
document.body.appendChild(allCase);

