import React from 'react';

function About() {
    return (
        <>
      <p className="text-bold">
          This is about page.
      </p>
            <button onClick={() => alert("You clicked the button!")} className="btn-indigo">Back</button>
            </>
    );
}

export default About;