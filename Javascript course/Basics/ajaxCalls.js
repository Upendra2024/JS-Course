//ajax helps in fectching data asychronously from a remote web server.
//data loaded by ajax call is done asychronously without page refresh.
//web server will send response which contains data that we have requested.
//data can be of any format like JSON, XML..
//initially servers used to send data in XML format.


// let btn = document.getElementById("special");
// let tbody = document.getElementById("t-body");

// btn.addEventListener("click", loadData);

// function loadData() {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
//   xhr.send();

//   xhr.onload = function () {
//     console.log(xhr);
//     if (xhr.status == 200) {
//       let response = xhr.responseText;
//       response = JSON.parse(response);
//       //   console.log(response);

//       const tableData = response.map((e) => {
//         return `<tr><td>${e.id}</td>
//                     <td>${e.username}</td>
//                     <td>${e.address.city}</td>
//                     <td>${e.address.zipcode}</td></tr>`;
//       });
//       tbody.innerHTML = tableData.join("");
//       //   console.log(tableData);
//     } else {
//       console.log(`error ${xhr.status}`);
//     }
//   };
// }

//2)fetch api
//__________

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//using async and await
//_____________________

// async function getUsers() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   return data;
// }
// getUsers()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//3)axios -third party js library now we use axios every libraries and frameworks
//_______

// axios.get("https://jsonplaceholder.typicode.com/users").then(
//   (res) => {
//     console.log(res);
//     console.log(res.data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

//4)jQuery - this is also a third party library
//_________

// $(document).ready(function () {
//   $.ajax({
//     url: "https://jsonplaceholder.typicode.com/users",
//     type: "GET",
//     success: function (result) {
//       console.log(result);
//     },
//     error: function (err) {
//       console.log(err);
//     },
//   });
// });
