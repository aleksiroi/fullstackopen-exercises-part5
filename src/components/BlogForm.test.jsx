import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogForm from './BlogForm'

describe('BlogForm', () => {
  test('', async () => {
    const mockHandler = vi.fn()

    const { container } = render(<BlogForm createBlog={mockHandler} />)

    const userEv = userEvent.setup()

    const titleInput = container.querySelector('#title-input')
    const authorInput = container.querySelector('#author-input')
    const urlInput = container.querySelector('#url-input')

    await userEv.type( titleInput, 'Component testing is done with react-testing-library' )
    await userEv.type(authorInput, 'Test Author')
    await userEv.type(urlInput, 'http://example.com')

    const button = screen.getByText('create')
    await userEv.click(button)

    expect(mockHandler).toHaveBeenCalledWith({
      title: 'Component testing is done with react-testing-library',
      author: 'Test Author',
      url: 'http://example.com',
    })
  })
})
