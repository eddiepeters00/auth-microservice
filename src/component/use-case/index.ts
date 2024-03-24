import createPost from "./post";
import createGet from "./get";
import createAuth from "./auth";
import config from "../../config";

const auth = ({}) =>
  createAuth({
    get,
  }).auth({});

const get = ({}) => createGet({}).get({});

const post = ({}) =>
  createPost({
    get,
  }).post({});

export { post, get, auth };
