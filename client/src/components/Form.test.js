import React from 'react';
import FormikRegForm from "./Form";
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe('<FormikRegForm>', ()=>{
    it('should render without crashing', ()=>{
        render(<FormikRegForm/>);
    })
    it('renders a register button', ()=> {
        const form = render(<FormikRegForm/>);
        const registerbtn = form.getByText(/register/i);
        // const click = jest.fn();
        // fireEvent.click(registerbtn);
        // expect(click).toBeCalled();

    })
   

    it('submit with mock function', async ()=> {
        const click = jest.fn();
        const { getByText } = render(<FormikRegForm register={click}/>)
        const regButton = getByText(/register/i)
        fireEvent.click(regButton);
        //   exp); ect(click).toBeCalled(
    })

})