
import React from "react";
import AddProduct from "../../components/Product/AddProduct";
import "./admin.css";


const AdminPage = () => {
  return (
    <div
      style={{
        background:
          'url("https://i.pinimg.com/564x/1d/0e/f0/1d0ef0a0b7a9d781fb977ef2400f8d2f.jpg")',
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="admin_page"
    >
      <h1 className="admin_header" align="center">
        ADMIN PAGE
      </h1>

      <AddProduct />
    </div>
  );
};

export default AdminPage;
