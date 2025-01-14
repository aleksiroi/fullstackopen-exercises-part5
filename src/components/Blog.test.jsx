import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

const blog = {
  title: 'Component testing is done with react-testing-library',
  author: 'Test Author',
  url: 'http://example.com',
  likes: 0,
  user: {
    username: 'testuser',
    name: 'Test User',
  },
}

const user = {
  username: 'testuser',
  name: 'Test User',
}

describe('Blog', () => {
  test('Renders only the title and author', async () => {
    render(<Blog blog={blog} />)

    const element = screen.getByText(
      'Component testing is done with react-testing-library Test Author'
    )
    expect(element).toBeDefined()

    expect(screen.queryByText('http://example.com')).toBeNull()
    expect(screen.queryByText('likes 0')).toBeNull()
    expect(screen.queryByText('Test User')).toBeNull()
  })
  test('Renders url and likes, when view-button is clicked', async () => {
    const mockHandler = vi.fn()

    render(<Blog blog={blog} user={user} toggleVisibility={mockHandler} />)

    const userEv = userEvent.setup()
    const button = screen.getByText('view')
    await userEv.click(button)

    const element = screen.getByText('http://example.com')
    const element2 = screen.getByText('likes 0')
    expect(element).toBeDefined()
    expect(element2).toBeDefined()
  })
  test('like-button event handler works as intended', async () => {
    const mockHandler = vi.fn()

    render(<Blog blog={blog} user={user} likeBlog={mockHandler} />)

    const userEv = userEvent.setup()
    const viewButton = screen.getByText('view')
    await userEv.click(viewButton)

    const likeButton = screen.getByText('like')
    await userEv.click(likeButton)
    await userEv.click(likeButton)

    expect(mockHandler.mock.calls).toHaveLength(2)
  })
})
