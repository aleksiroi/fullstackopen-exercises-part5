import { useState } from 'react'

const Blog = ({ blog, user, likeBlog, deleteBlog }) => {
  const [visible, setVisible] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div style={blogStyle} className='blog'>
      <div>
        {blog.title} {blog.author}{' '}
        <button onClick={toggleVisibility} data-testid='view-button'>{visible ? 'hide' : 'view'}</button>
      </div>
      {visible && (
        <div>
          <div>{blog.url}</div>
          <div data-testid='likes'>
            likes {blog.likes}{' '}
            <button onClick={() => likeBlog(blog)} data-testid='like-button'>like</button>
          </div>
          <div>{blog.user?.name}</div>
          {blog.user?.username === user.username && (
            <div>
              <button onClick={() => deleteBlog(blog)}data-testid='remove-button'>remove</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Blog
