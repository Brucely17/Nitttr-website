import React from 'react';

const Training = ({ title, trainingItems }) => {
  return (
    <div id="training-program" className="tabcontent">
      <div className="container mx-auto px-4 py-6">
        <div className="row flex justify-center">
          <div className="col-md-12 w-full md:w-3/4 lg:w-2/3">
            <h2 className="text-blue-700 text-2xl font-bold mb-6 text-center">{title}</h2>
            <table className="w-full">
              {trainingItems.map((item, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="pr-3">
                      <i className="fa fa-hand-o-right text-black"></i>
                    </td>
                    <td>
                      <p className="justify text-black text-base">
                        <em>{item}</em>
                      </p>
                    </td>
                  </tr>
                  <tr><td className="py-2"></td></tr>
                </React.Fragment>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
