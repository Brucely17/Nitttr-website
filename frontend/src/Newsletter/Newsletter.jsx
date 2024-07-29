import React from 'react';

const BisCorner = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className=" container mx-auto p-8">
        <div className="animate__animated animate__fadeInLeft">
          <h2 className="text-3xl font-bold underline">NEWS LETTERS</h2>
          <h2 className="text-3xl font-bold underline text-blue-600 pb-10 text-center">NEWS LETTERS</h2>
        </div>

        <div className="animate__animated animate__fadeInRight text-black">
          <div className="">
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full bg-gray-100 shadow-md border border-gray-400 rounded-xl">
                <thead className="bg-gray-100 border border-gray-400 p-2">
                  <tr>
                    <th className="px-4 py-4 text-center border border-gray-400">S No</th>
                    <th className="px-4 py-4 text-center border border-gray-400">Name</th>
                    <th className="px-4 py-4 text-center border border-gray-400">Period</th>
                    <th className="px-4 py-4 text-center border border-gray-400">Download</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-400">
                    <td className="px-4 py-2 text-center border border-gray-400">1</td>
                    <td className="px-4 py-2 text-center border border-gray-400">Volume 2 Issue 1</td>
                    <td className="px-4 py-2 text-center border border-gray-400">JULY-SEPTEMBER 2019</td>
                    <td className="px-4 py-2 text-center border border-gray-400">
                      <a href="./newsletters/nlv21.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"></a>
                      <a href="https://www.nitttrc.ac.in/newsletters/nlv21.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                        PDF
                      </a>
                    </td> 
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="px-4 py-2 text-center border border-gray-400">2</td>
                    <td className="px-4 py-2 text-center border border-gray-400">Volume 2 Issue 2</td>
                    <td className="px-4 py-2 text-center border border-gray-400">OCTOBER - DECEMBER 2019</td>
                    <td className="px-4 py-2 text-center border border-gray-400">
                      <a href="./newsletters/nlv22.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"></a>
                      <a href="https://www.nitttrc.ac.in/newsletters/nlv22.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                        PDF
                      </a>
                    </td>  
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="px-4 py-2 text-center border border-gray-400">3</td>
                    <td className="px-4 py-2 text-center border border-gray-400">Volume 3 Issue 1</td>
                    <td className="px-4 py-2 text-center border border-gray-400">JANUARY - JUNE 2020</td>
                    <td className="px-4 py-2 text-center border border-gray-400">
                      <a href="./newsletters/nlv31.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"></a>
                      <a href="https://www.nitttrc.ac.in/newsletters/nlv31.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                        PDF
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="px-4 py-2 text-center border border-gray-400">4</td>
                    <td className="px-4 py-2 text-center border border-gray-400">Volume 3 Issue 2</td>
                    <td className="px-4 py-2 text-center border border-gray-400">JULY-DECEMBER 2020</td>
                    <td className="px-4 py-2 text-center border border-gray-400">
                      <a href="./newsletters/nlv32.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"></a>
                      <a href="https://www.nitttrc.ac.in/newsletters/nlv32.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                        PDF
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="px-4 py-2 text-center border border-gray-400">5</td>
                    <td className="px-4 py-2 text-center border border-gray-400">Volume 4 Issue 1</td>
                    <td className="px-4 py-2 text-center border border-gray-400">JANUARY-JUNE 2021</td>
                    <td className="px-4 py-2 text-center border border-gray-400">
                      <a href="./newsletters/nlv41.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"></a>
                      <a href="https://www.nitttrc.ac.in/newsletters/nlv41.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                        PDF
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="px-4 py-2 text-center border border-gray-400">6</td>
                    <td className="px-4 py-2 text-center border border-gray-400">Volume 4 Issue 2</td>
                    <td className="px-4 py-2 text-center border border-gray-400">JULY-DECEMBER 2021</td>
                    <td className="px-4 py-2 text-center border border-gray-400">
                      <a href="./newsletters/nlv42.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"></a>
                      <a href="https://www.nitttrc.ac.in/newsletters/nlv42.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                        PDF
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="px-4 py-2 text-center border border-gray-400">7</td>
                    <td className="px-4 py-2 text-center border border-gray-400">Volume 5 Issue 1</td>
                    <td className="px-4 py-2 text-center border border-gray-400">JANUARY-JUNE 2022</td>
                    <td className="px-4 py-2 text-center border border-gray-400">
                      <a href="./newsletters/nlv51.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"></a>
                      <a href="https://www.nitttrc.ac.in/newsletters/nlv51.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                        PDF
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="px-4 py-2 text-center border border-gray-400">8</td>
                    <td className="px-4 py-2 text-center border border-gray-400">Volume 5 Issue 2</td>
                    <td className="px-4 py-2 text-center border border-gray-400">JULY-DECEMBER 2022</td>
                    <td className="px-4 py-2 text-center border border-gray-400">
                      <a href="./newsletters/nlv52.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"></a>
                      <a href="https://www.nitttrc.ac.in/newsletters/nlv52.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                        PDF
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BisCorner;
