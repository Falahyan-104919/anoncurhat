import CurhatanCard from '@/features/curhatan-list/components/CurhatanCard'
import { render } from '@testing-library/react'
import moment from 'moment';
import { describe, it } from 'vitest'

import { Post } from '@/components/ui/post';

describe("CurhatanCard test", () => {
  it('should render component without errors', () => {
    const data = {
      id: 1,
      username: 'testcreate1',
      gender: 'female',
      date_of_birth: "2008-08-23",
    };
    render(<Post data={data} />);
  });
});
