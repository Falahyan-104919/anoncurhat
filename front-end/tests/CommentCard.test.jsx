import CommentCard from '@/features/post-comment/components/CommentCard'
import { render } from '@testing-library/react'
import moment from 'moment'
import { describe, expect, it } from 'vitest'

describe("CommendCard test", () => {
  it("is able to render correct username", () => {
    const {queryByText} = render(<CommentCard user={{
      id_user: 1,
      username: "testingusername",
    }} comment={{
      id_comment: 1,
      createdAt: moment().subtract(1, 'day').toDate(),
      content: 'testing content'
    }}/>)

    const foundUsername = queryByText('testingusername')

    expect(foundUsername).toBeTruthy()
    expect(foundUsername.innerHTML).toBe("testingusername")
  })
})
