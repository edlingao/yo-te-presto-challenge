import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setAllBlogs } from '../store/blogsSlice';
import routes from '../axios/routes';
import NavBar from '../components/NavBar';
import Blog from '../components/Blog';
import CreateBlog from '../components/CreateBlog';

export default function Blogs() {
  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blogs.value);
  const getBlogs = () => {
    axios.get(routes.getPosts).then((response) => {
      dispatch(setAllBlogs(response.data));
    });
  };
  useEffect(getBlogs, []);
  const MainBlogsContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;


    .scrollable-content {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      overflow: auto;
    }

    .blogs-container {
      width: 100%;
      height: auto;
    }
  `;
  return (
    <MainBlogsContainer>
      <NavBar />
      <div className="scrollable-content">
        <CreateBlog />
        <div className="blogs-container">
          {blogs.map(({ title, comment, id }) => (
            <Blog title={title} comment={comment} key={id} />
          ))}
        </div>
      </div>
    </MainBlogsContainer>
  );
}
