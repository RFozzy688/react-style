import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import React, { useState } from 'react';

function PostForm({posts, create}) {
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    if (post.title !== '' && post.body !== ''){
      e.preventDefault();

      const newId = posts[posts.length - 1].id + 1;
      const newPost = {
        ...post, 
        id: newId
      }
      create(newPost);
      setPost({title: '', body: ''});
    }
  }

  return ( 
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
   );
}

export default PostForm;