import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import PostFilter from './components/PostFilter';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'C++', body: 'Description 2'},
    {id: 2, title: 'Javascript', body: 'Description 4'},
    {id: 3, title: 'Java', body: 'Description 6'},
    {id: 4, title: 'C#', body: 'Description 1'},
    {id: 5, title: 'Python', body: 'Description 3'},
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    if (filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query))
}, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className='App'>
      <PostForm create={createPost} posts={posts}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
       filter={filter}
       setFilter={setFilter}/>

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'List 1'}/>
    </div>
  );
}

export default App;
