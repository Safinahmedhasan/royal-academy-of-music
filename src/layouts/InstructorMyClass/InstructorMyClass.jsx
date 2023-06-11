import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';

const InstructorMyClass = () => {
    const { user } = useContext(AuthContext);

    const [myClass, setMyClass] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/myClass/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyClass(data))
    }, [])

    return (
        <div>
            {
              myClass.length ? 
              
              
              <div>
              <div className='w-[900px] mt-20'>
                  <div className='overflow-x-auto'>
                      <table className='table'>
                          {/* head */}
                          <thead>
                              <tr className='bg-green-500 text-white font-bold'>
                                  <th>
                                      <p>#</p>
                                  </th>
                                  <th>Class Name</th>
                                  <th>Price</th>
                                  <th></th>
                                  <th>Status</th>
                                  <th>Status</th>
                              </tr>
                          </thead>
                          <tbody>
                              {myClass.map((classe, index) => (
                                  <tr key={classe._id}>
                                      <td>{index + 1}</td>
                                      <td>
                                          <div className='flex items-center space-x-3'>
                                              <div className='avatar'>
                                                  <div className='mask mask-squircle w-12 h-12'>
                                                      <img src={classe.image} alt='Avatar Tailwind CSS Component' />
                                                  </div>
                                              </div>
                                              <div>
                                                  <div className='font-bold'>{classe.name}</div>
                                              </div>
                                          </div>
                                      </td>
                                      <td>
                                          {classe.price}
                                          <br />
                                      </td>

                                      <td>
                                          {classe.price}
                                          <br />
                                      </td>
                                      <td>
                                          <button className='bg-blue-500 text-white px-3 py-2 rounded-lg'>Update</button>
                                          <br />
                                      </td>
                                      <td>
                                          <p className='bg-green-500 text-center text-white  rounded-xl'> {
                                              classe.status ? classe.status : <p className='bg-red-500 text-center text-white  rounded-xl'>Pending</p>
                                          }</p>
                                          <br />
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                          {/* foot */}
                      </table>
                  </div>
              </div>
              <div className='mt-10 flex justify-between'>
              </div>
          </div>

          : <p className='text-text-500 bg-green-500 p-10 '>No ADDED data</p>
            }
        </div>
    );
};

export default InstructorMyClass;