import { render } from "@testing-library/react";
import React from "react";
import MySpace from "../MySpace";
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';
import { RouteComponentProps } from "react-router-dom";

const matchMock: match<{id:string}> = {
    isExact: false,
    path: `/route/:id`,
    url: `/route/:id`.replace(':id', '1'),
    params: { id: "1"}
  }
  const mySpaceProps: RouteComponentProps = {
    history: createMemoryHistory(),
    location: createLocation(matchMock.url),
    match: matchMock,
  } 

describe('MySpace', () => {
    it('should be in the document', () => {
        const { getByText } = render(<MySpace {...mySpaceProps}/>);
        expect(getByText('My Space')).toBeInTheDocument();
    });
})
