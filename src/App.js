import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './components/hooks/usePosts';
import axios from 'axios';


function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  async function fetchPosts(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
  }

  return (
    <div className='App'>
      <MyButton onClick={fetchPosts}>Get posts</MyButton>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} posts={posts}/>
      </MyModal>
      
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
       filter={filter}
       setFilter={setFilter}/>

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'List 1'}/>
    </div>
  );
}

export default App;
