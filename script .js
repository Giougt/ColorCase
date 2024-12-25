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

// body part 
const allCase = document.createElement("div");

// style display cube 
Object.assign(allCase.style, {
    display: "grid",
    gridTemplateColumns: "repeat(10, 20px)",
    gridTemplateRows: "repeat(10, 20px)",
    gap: "2px" 
});

// create 100 cubes 
for (let i = 0; i < 100; i++) {
    const test = document.createElement("div");
    Object.assign(test.style, {
        backgroundColor: "white",
        border: "1px solid black", 
        width: "20px",
        height: "20px"
    });
    allCase.appendChild(test);
}

// append in document
document.body.appendChild(allCase);