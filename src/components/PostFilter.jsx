function PostFilter() {
  return ( 
    <div>
      <MyInput 
        placeholder='Поиск...'
        value={searchQuary}
        onChange={e => setSearchQuary(e.target.value)}/>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка'
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}/>
    </div>
   );
}

export default PostFilter;