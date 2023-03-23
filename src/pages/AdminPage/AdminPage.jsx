import React from 'react';
import AddProduct from '../../components/product/AddProduct';
import './admin.css';

const AdminPage = () => {
  return (
    <div>
      <h1 className='admin_header' align='center'>
        ADMIN PAGE
      </h1>

      <AddProduct />
    </div>
  );
};

export default AdminPage;
