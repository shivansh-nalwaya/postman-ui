const { createContext } = require("react");

const PostmanContext = createContext("");

const { Provider, Consumer } = PostmanContext;
export { Provider, Consumer };
export default PostmanContext;
