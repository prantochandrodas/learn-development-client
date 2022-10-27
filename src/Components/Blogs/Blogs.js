import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='my-3'>
                <h2>what is cors?</h2>
                <h5>Ans:-Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</h5>
            </div>
            <div className='my-3'>
                <h2> Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h5>Ans:-Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Here's why you should use it! <br /> Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</h5>
                <h5>Firebase alternatives :-

                </h5>
                <ul>
                    <li>MongoDB</li>
                    <li>Oracle Database.</li>
                    <li>Amazon Redshift.</li>
                    <li>DataStax Enterprise.</li>
                    <li>Redis Enterprise Cloud.</li>
                    <li>Cloudera Enterprise Data Hub..</li>
                    <li>Db2.</li>
                    <li>Couchbase Server.</li>
                </ul>
            </div>
            <div className='my-3'>
                <h2> How does the private route work?</h2>
                <h5>Ans:- The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</h5>
            </div>
            <div className='my-5'>
                <h2> What is Node? How does Node work?</h2>
                <h5>Ans:- Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return. <br /><br />
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </h5>
            </div>
        </div>
    );
};

export default Blogs;