var React = require("react");
var ReactDOM = require("react-dom/client");
var router = require("./Routes/router");
var react_router_dom = require("react-router-dom");
require("./styles/index.scss");
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <react_router_dom.RouterProvider router={router.router}/>
  </React.StrictMode>);

  export{}
