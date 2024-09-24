
// const heading = React.createElement("h1", {id: "heading"}, "Nameste Adarsh In React");

// console.log(heading)  // this is object not a heading tag 

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// this render method will basically responsible to take this object and put it up , convert into the heading tag and put it upon the DOM


 
// /*
// <div id="parent"> 
//     <div id="child">
//         <h1>H1 Tags</h1>
//     </div>
// </div>
// how do you create nested element in React
// */

// const parent = React.createElement("div", {id: "parent"} , 
//     React.createElement("div", {id: "child"}, 
//         React.createElement("h1", {}, "H1 Tags")
//     )
// );
// // React.createElement in not the create a html tag it create an object
// // .render is create a html element 
// //ReactElement(Object) => HTML(Browser Understand) 

// console.log(parent)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);





// /*
// <div id="parent"> 
//     <div id="child">
//         <h1>H1 Tags</h1>
//         <h2>H2 Tags</h2>
//     </div>
// </div>
// how do you create nested element in React
// */

// const parent = React.createElement("div", {id: "parent"} , 
//     React.createElement("div", {id: "child"}, 
//         [React.createElement("h1", {}, "Hi, I am a H1 Tag"), 
//             React.createElement("h2", {}, "Hi, I am a H2 Tag")]
//     )
// );

// // when we want to create siblings we covert it an ARRAY

// console.log(parent)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);




/*
<div id="parent"> 
    <div id="child">
        <h1>H1 Tags</h1>
        <h2>H2 Tags</h2>
    </div>
</div>
div id="child2">
        <h1>H1 Tags</h1>
        <h2>H2 Tags</h2>
    </div>
how do you create nested element in React
*/

 const parent = React.createElement("div", {id: "parent"} , 
    [React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "Hi, I am a H1 Tag"), 
            React.createElement("h2", {}, "Hi, I am a H2 Tag")]
    ), 
    React.createElement("div", {id: "child2"}, 
        [React.createElement("h1", {}, "Hi, I am a H1 Tag"), 
            React.createElement("h2", {}, "Hi, I am a H2 Tag")]
    )]
);

// this is why i use JSX file because in javascript our code is very messy
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

 