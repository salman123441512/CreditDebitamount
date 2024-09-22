import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar';
import { Link } from 'react-router-dom';
// import { deleteContactUs, getContactUs } from '../../../Store/ActionCreaters/ContactUsActionCreater'
import { useDispatch, useSelector } from 'react-redux';

export default function Ticket() {
  const [data, setData] = useState([]);
  // const dispatch = useDispatch();
  // const ContactUsStateData = useSelector((state) => state.ContactUsStateData); // Adjust based on your state structure



  const deleteItem = async(_id) => {
    const token = localStorage.getItem('token');

    if (window.confirm("Are You Sure You Want to Delete This Item?")) {
      // dispatch(deleteContactUs({ _id: _id }));
      let response = await fetch('/api/contactUs/' + _id,{
        method:"DELETE",
        headers:{
          "content-type":"Application/json",
          "Authorization": token 

        }
      })
      response = await response.json()
      if(response)
      getApiData()
    else
    alert(response.message)
    }
  };
  async function getApiData() {
    // dispatch(getContactUs())
    // if(ContactUsStateData.length){
    //   setData(ContactUsStateData)
    // }
    const token = localStorage.getItem('token');

    let response = await fetch('/api/contactUs', {
      method: "GET",
      headers: {
        "content-type": "Application/json",
        "Authorization": token 

      }
    })
    response = await response.json()
  
    if (response)
      setData(response.data)
    else
      alert(response.message)
  }
  useEffect(() => {
    getApiData()
  }, [])

  return (
    <>
      <div className="container-fluid">
        <div className="row ticket-row">
          <div className="col-md-3 col-lg-2">
            <AdminSidebar />
          </div>
          <div className="col-md-9 col-lg-10" style={{ marginTop: "90px", marginLeft: 0 }}>
            <h3 className='text-warning'>This is Your All Ticket</h3>

            

            <h3 className='text-warning text-center  mt-5'>Contact Us Table</h3>
            <div className="table-responsive table-bordered mt-3">
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(data) && data.length > 0 ? (
                    data.map((item) => (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.subject}</td>
                        <td>{item.message}</td>
                        <td>{new Date(item.date).toLocaleDateString()}</td>
                        <td>
                          <span
                            onClick={() => deleteItem(item._id)}
                            className="material-symbols-outlined cursor-pointer"
                            style={{ cursor: 'pointer', color: 'red' }}
                          >
                            delete
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
