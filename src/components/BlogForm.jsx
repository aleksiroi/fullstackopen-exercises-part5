import { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl,
    })

    setNewAuthor('')
    setNewTitle('')
    setNewUrl('')
  }

  return (
    <form onSubmit={addBlog} className="blogForm">
      <h2>create new</h2>
      <div>
        title:
        <input
          data-testid="title-input"
          id="title-input"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
      </div>
      <div>
        author:
        <input
          data-testid="author-input"
          id="author-input"
          value={newAuthor}
          onChange={(event) => setNewAuthor(event.target.value)}
        />
      </div>
      <div>
        url:
        <input
          data-testid="url-input"
          id="url-input"
          value={newUrl}
          onChange={(event) => setNewUrl(event.target.value)}
        />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

export default BlogForm
