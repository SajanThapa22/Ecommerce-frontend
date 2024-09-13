// "use client";

// import React from "react";

// const RemoveFromCart = () => {
//   const accessToken = localStorage.getItem("accessToken");
//   const removeItem = async (id: string) => {
//     const res = await fetch(`http://localhost:3000/api/${id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     if (res.status === 200) {
//       setData((prev) => prev.filter((item) => item._id !== id));
//     }
//   };
//   return <div></div>;
// };

// export default RemoveFromCart;
