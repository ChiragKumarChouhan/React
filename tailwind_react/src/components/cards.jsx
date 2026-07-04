import React from 'react'

function cards(props) {
    console.log("props",props);
    console.log(props.username);
    console.log(props.btntext);
  return (
 <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm text-center">

        <img
          src="https://picsum.photos/200"
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500"
        />

     <p> {props.someobj.username}</p>

        <p className="text-gray-500 mt-2">
          React & Tailwind CSS Learner 🚀
        </p>

        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300">
          {props.someobj.btntext}
        </button>

      </div>
    </div>
  );
}


export default cards
