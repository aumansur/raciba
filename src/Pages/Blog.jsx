import React from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();


    return (
        <>

            <div className='text-center mt-10'>
                <Pdf targetRef={ref} filename="reciba-blog.pdf">
                    {({ toPdf }) => <button className='my-btn text-center' onClick={toPdf}>Download pdf</button>}
                </Pdf>

            </div>
            <div ref={ref} className='my-container '>
                <h1 className='text-3xl text-center my-10 font-bold'>Welcome to Blog page </h1>
                <div>
                    <div className="card w-full bg-orange-100 rounded-md my-4 shadow-2xl p-6 ">
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-semibold"> Question: Tell us the differences between uncontrolled and controlled components ?</h2>
                            <p>
                                <span className='font-bold text-xl'>Ans:</span> <h4 className='text-xl'>Uncontrolled components:</h4>

                                <ul className='list-disc ml-10'>
                                    <li>The state of an uncontrolled component is managed by the DOM, not by React.</li>
                                    <li>The value of the input is stored in the DOM, and is accessed using a ref.</li>
                                    <li>The component is not aware of the current value of the input.</li>
                                    <li> Changes to the input value are not immediately reflected in the component's state.</li>
                                    <li> Uncontrolled components are typically easier to set up and require less code.</li>
                                </ul>
                                <h4 className='text-xl mt-2'>Controlled components:</h4>


                                <ul className='list-disc ml-10'>
                                    <li>The state of a controlled component is managed by React.</li>
                                    <li>The value of the input is stored in the component's state, and is updated via a change handler.</li>
                                    <li>The component is aware of the current value of the input.</li>
                                    <li>Changes to the input value are immediately reflected in the component's state.</li>
                                    <li>Controlled components are typically more flexible and can provide more fine-grained control over user input.</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="card w-full bg-orange-100 rounded-md my-4 shadow-2xl p-6">
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-semibold"> Question: How to validate React props using PropTypes ?</h2>
                            <p>
                                <span className='font-bold text-xl'>Ans:</span> <h4 className='text-xl'>React PropTypes validators </h4>

                                <ul className='list-disc ml-10'>
                                    <li>PropTypes.any : The prop can be of any data type.</li>
                                    <li>PropTypes.bool : The prop should be a Boolean..</li>
                                    <li>PropTypes.number : The prop should be a number..</li>
                                    <li>PropTypes.string : The prop should be a string.</li>
                                    <li> PropTypes.func : The prop should be a function.</li>
                                    <li> PropTypes.array : The prop should be an array.</li>
                                </ul>

                            </p>
                        </div>
                    </div>


                    <div className="card w-full bg-orange-100 rounded-md my-4 shadow-2xl p-6">
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-semibold"> Question:Tell us the difference between nodejs and express js.</h2>
                            <p>
                                <span className='font-bold text-xl'>Ans:</span>
                                <h4 className='text-xl'>Node.js:</h4>

                                <p>Node.js is a JavaScript runtime built on the Chrome V8 JavaScript engine. It allows developers to run JavaScript code outside of the browser, on the server-side. With Node.js, developers can write server-side applications using JavaScript, a language that is commonly used on the client-side as well.

                                    Node.js provides several core modules, such as the File System module, HTTP module, and Crypto module, which enable developers to build complex applications with ease. Node.js also has a large and active community that contributes to its ecosystem with a variety of third-party libraries and modules.</p>

                                <h4 className='text-xl mt-2'>Express.js:</h4>
                                <p>Express.js is a web framework built on top of Node.js. It provides a set of tools and utilities for building web applications and APIs, such as routing, middleware, and templating. Express.js is known for its simplicity and flexibility, allowing developers to build web applications quickly and easily.
                                    Express.js provides a lightweight and minimalist framework, making it easy to build RESTful APIs, web services, and even full-stack web applications. It also has a large and active community, with many third-party modules and plugins available.
                                    In summary, Node.js is a JavaScript runtime that allows developers to run JavaScript code outside of the browser, while Express.js is a web framework built on top of Node.js that provides tools and utilities for building web applications and APIs. While Node.js provides the foundation for building server-side applications with JavaScript, Express.js provides the framework to build those applications in a more organized and efficient way.</p>
                            </p>
                        </div>
                    </div>

                    <div className="card w-full bg-orange-100 rounded-md my-4 shadow-2xl p-6">
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-semibold"> Question: What is a custom hook, and why will you create a custom hook?</h2>
                            <p>
                                <span className='font-bold text-xl'>Ans:</span>
                                <p>
                                    Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div >

        </>

    );
};

export default Blog;