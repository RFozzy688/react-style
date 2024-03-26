import React, { useEffect, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './components/hooks/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/loader/Loader';


function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  async function fetchPosts(){
    setIsPostsLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostsLoading(false);
    }, 2000);
    
  }

  useEffect(() => fetchPosts(), []);

  return (
    <div className='App'>
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

      {isPostsLoading
        ? <div style={{display: 'flex', 
                       justifyContent: 'center',
                       margin: '30px'}}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'List 1'}/>}
      
    </div>
  );
}

export default App;
