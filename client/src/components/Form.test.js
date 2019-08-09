import React from 'react';
import FormikRegForm from "./Form";
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe('<FormikRegForm>', ()=>{
    it('should render without crashing', ()=>{
        render(<FormikRegForm/>);
    })
    it('submit with mock function', ()=> {
        const click = jest.fn();
        const { getByText } = render(<FormikRegForm register={click}/>)
        const regButton = getByText(/register/i)
        fireEvent.click(regButton);
        expect(click).toBeCalled();
    })

})