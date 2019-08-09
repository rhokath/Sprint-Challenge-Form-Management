import React from 'react';
import DataObjects from "./DataObjects"
import {render} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";


describe('<DataObjects/>', ()=> {
    it('should render data from props', ()=> {
        const userData = [
            {name: 'brisket' , technique: 'sous-vide', course: 'main' },
            {name: 'potato salad', technique: 'varied', course: 'side'},
            {name: 'mac n cheese', technique: 'bechamel', course: 'side' },
            {name: 'soup', technique: 'maceration', course: 'app'}
        ];
        const comp = render(<DataObjects object={userData}/>)
    })
})