import React from 'react'
import renderer from 'react-test-renderer'
import ReactMasonryInfinite from '../src'

function createNodeMock(element) {
  if (element.type === 'div' && element.props.className === 'layout') {
    return document.createElement('div');
  }
  return null;
}

it('ReactMasonryInfinite correctly render', () => {
  const arrayForChildrens = [1, 2, 3, 4, 5, 6]
  const AdditionalSnapshot = renderer
    .create(
      (
        <ReactMasonryInfinite
          className='layout'
          loadMore={() => null}
        >
          {arrayForChildrens.map(i => (
            <div key={i.toString()}>
              {i}
            </div>
          ))}
        </ReactMasonryInfinite>
      ),
      { createNodeMock }
    )
    .toJSON()
  expect(AdditionalSnapshot).toMatchSnapshot()
})
