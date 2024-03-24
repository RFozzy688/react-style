import React, { useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript', body: 'Description'},
    {id: 3, title: 'Javascript', body: 'Description'},
    {id: 4, title: 'Javascript', body: 'Description'},
    {id: 5, title: 'Javascript', body: 'Description'},
  ]);

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();

    const newId = posts[posts.length - 1].id + 1;

    setPosts([...posts, {...post, id: newId}]);
    setPost({title: '', body: ''});
  }

  return (
    <div className='App'>
      <form>
        {/* Управляемый компонент */}
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type='text' 
          placeholder='Название поста'/>

        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type='text'
          placeholder='Описание поста' />

        <MyButton onClick={addNewPost}>Добавить пост</MyButton>
      </form>
      <PostList posts={posts} title={'List 1'}/>
    </div>
  );
}

export default App;
