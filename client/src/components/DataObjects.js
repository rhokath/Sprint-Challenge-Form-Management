import React from "react";

const DataObject = ({recipe, course, technique, ingredients}) => {
    console.log(ingredients)
    return(
        <div className="data-object">
            <h2>{recipe}</h2>
            <p>{course}</p>
            <p>{technique}</p>
            {/* {ingredients.map(item => {
               return console.log(item)
            })} */}
               

        </div>

    )


}

export default DataObject;