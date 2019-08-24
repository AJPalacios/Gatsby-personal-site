import React from 'react';


export default (props) => {

    const course = props.element;

    return(
        <div className="shadow p-8 bg-white mr-4 rounded w-64 inline-block mt-4">
            <h4 className="font-bold">{course.title}</h4>
            <div className="text-center">
                <span className="block bg-purple-400 p-2 mt-2 truncate">
                    <a href={course.url}>{course.title}</a>
                </span>
            </div>
        </div>
    );
}