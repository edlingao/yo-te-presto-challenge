export default {
  getPost: (postID) => `https://post-api-test.herokuapp.com/posts/${postID}`, //    GET
  getPosts: 'https://post-api-test.herokuapp.com/posts', //                         GET
  signIn: 'https://post-api-test.herokuapp.com/auth/sign_in', //                    POST
  register: 'https://post-api-test.herokuapp.com/auth/', //                         POST
  createPosts: 'https://post-api-test.herokuapp.com/posts/', //                     POST
  editPost: (postID) => `https://post-api-test.herokuapp.com/posts/${postID}`, //   PUT
  deletePost: (postID) => `https://post-api-test.herokuapp.com/posts/${postID}`, // DELETE
};
