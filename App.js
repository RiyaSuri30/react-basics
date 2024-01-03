    //now lets try to write the same using react in React we have 2 things Core React and React DOM.


    // in the brackets that we have we can give attributes that we have for the consideration that we have so lets have that clear
    const heading = React.createElement("h1",{}, "Hello World From React!");



    // first is the type of tag, the properties and then we have the content that we want to have 
    // Example

    // const heading = React.createElement("h1",{id: "heading"}, "Hello World From React!"); this creates <h1 id="heading">Hello World From React!</h1>

    //after this we need to create the Root and this creation is done using the ReactDOM
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);