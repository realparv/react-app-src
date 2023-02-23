import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';

const HomePage = (props) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUserDetails()
  }, [])
  

  const getUserDetails = async() => {
     let URL = "https://run.mocky.io/v3/f3b83866-247f-4aaa-8873-14b2e0e862dc";
     await axios.get(URL).then((res) => {
      console.log(res,"RESPONSE");

        if(res?.data){
            setUserList(res.data);
        }
      });

  }


  const columns = [
      {
        accessorKey: 'UserNumber', 
        header: 'userNumber',
      },
      {
        accessorKey: 'id',
        header: 'ID',
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'email', 
        header: 'Email',
      },
      {
        accessorKey: 'Detail', 
        header: 'Detail',
      }
    ]

  return (
    <>
     <MaterialReactTable columns={columns} data={userList} />;

    </>)
  
}
export default HomePage;