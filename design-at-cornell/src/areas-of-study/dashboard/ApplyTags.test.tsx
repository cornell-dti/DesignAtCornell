import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ApplyTags from './ApplyTags';
import { Filters } from '../../constants/filter-criteria';

describe('<ApplyTags />', () => {
  const tags = {
    Tag1: false,
    Tag2: true,
    Tag3: false,
  };
  const setTags = (tags: Filters) => {};

  it('renders correctly', () => {
    const snapshot = renderer
      .create(
        <ApplyTags
          designAreaTags={tags}
          schoolTags={tags}
          setDesignAreaTags={setTags}
          setSchoolTags={setTags}
        />
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly with no design area tags', () => {
    const snapshot = renderer
      .create(
        <ApplyTags
          designAreaTags={{}}
          schoolTags={tags}
          setDesignAreaTags={setTags}
          setSchoolTags={setTags}
        />
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('renders correctly with no school tags', () => {
    const snapshot = renderer
      .create(
        <ApplyTags
          designAreaTags={tags}
          schoolTags={{}}
          setDesignAreaTags={setTags}
          setSchoolTags={setTags}
        />
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
