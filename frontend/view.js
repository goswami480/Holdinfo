// //       function startTimer(duration, display) {
//     var timer = duration;
//     setInterval(function () {
//       display.textContent = timer;

//       if (--timer < 0) {
//         timer = duration;
//       }
//     }, 1000);
//   }

//   window.onload = function () {
//     var display = document.getElementById("timer");
//     startTimer(60, display);
//   };

//   async function fetchData() {
//     try {
//       const response = await axios.get(
//         "http://localhost:7001/saveddata"
//       );
//       const dataObject = response.data.data;

//       // Convert the object to an array
//       const data = Object.values(dataObject);
//       console.log("data from server", response.data.data);

//       const tableBody = document.getElementById("crypto-table-body");

//       console.log("type of data", typeof data);

//       data.map((item, index) => {
//         console.log('item',item);
        
//         const row = `
//           <tr class="list">
//             <td>${index + 1}</td>
//             <td>${item.name}</td>
//             <td>₹ ${item.last}</td>
//             <td>₹ ${item.buy} / ₹ ${item.sell}</td>
//             <td style="color: ${
//               item.difference >= 0 ? "#3dc6c1" : "red"
//             };">${item.difference}%</td>
//             <td>${item.volume}</td>
//             <td>${item.base_unit}</td>
//           </tr>
//         `;
//         tableBody.insertAdjacentHTML("beforeend", row);
//       });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   fetchData();