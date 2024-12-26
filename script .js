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


//body style 
Object.assign(document.body.style, {
    margin: "0"
});


//parent container
const wrapper = document.createElement("div");
//style 
Object.assign(wrapper.style, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: "0",
    backgroundColor: "#727874",
    gap: "20px"
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

// append in container
wrapper.appendChild(allCase);

// Create input color
const colorPicker = document.createElement("input");
colorPicker.type = "color";
Object.assign(colorPicker.style, {
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
});

// add input container parent
wrapper.appendChild(colorPicker);

// append in document all
document.body.appendChild(wrapper);

//stock color
let color = "";

function choiceColor(){
    colorPicker.addEventListener("change", (event) => {
        if (event.target.value !== "#ffffff"){
            color = event.target.value
        }
        else{
            alert("color is white, impossible")
        }
    })
};
