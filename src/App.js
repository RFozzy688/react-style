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

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  //const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();

    const newId = posts[posts.length - 1].id + 1;
    const newPost = {
      id: newId,
      title,
      body
    }
    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
  }

  return (
    <div className='App'>
      <form>
        {/* Управляемый компонент */}
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type='text' 
          placeholder='Название поста'/>

        {/* Неуправляемый/неконтролируемый компонент 
        <MyInput
          ref={bodyInputRef}
          type='text' 
          placeholder='Описание поста'/>*/}

        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type='text'
          placeholder='Описание поста' />

        <MyButton onClick={addNewPost}>Добавить пост</MyButton>
      </form>
      <PostList posts={posts} title={'List 1'}/>
    </div>
  );
}

export default App;
