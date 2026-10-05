// getUser(userId, function(user) {
//   getOrders(user.id, function(orders) {
//     processPayment(orders[0].id, function(paymentStatus) {
//       sendEmail(user.email, paymentStatus, function(response) {
//         console.log("Email sent successfully:", response);
//       }, function(emailError) {
//         console.error("Failed to send email:", emailError);
//       });
//     }, function(paymentError) {
//       console.error("Payment failed:", paymentError);
//     });
//   }, function(ordersError) {
//     console.error("Failed to retrieve orders:", ordersError);
//   });
// }, function(userError) {
//   console.error("Failed to retrieve user:", userError);
// });

// promise
// pending,resolve,reject

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.comds?", {
//       method: "POST",
//       headers: {
//         authorization: "Bearer token",
//         contentType: "application/json",
//       },
//       body: JSON.stringify({
//         name: "John Doe",
//         email: "johndue@gmail.com",
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUsers();


// const obj = {
//   name: "John Doe",
//   age: 30,
//   email: "johndue@gmail.com",
// }
// const str  = "hello world"

// const jsonString = JSON.stringify(obj);
// const jsonParsed = JSON.parse(jsonString);
// console.log(jsonString,str,jsonParsed)


// import root, {add as sum} from "./math.js"

// console.log(sum(10,20))
// console.log(root(16))

const button = document.querySelector("#load-chart-btn");

button.addEventListener("click", () => {
  // বাটনে ক্লিক করার আগ পর্যন্ত এই ফাইলটি ডাউনলোডই হবে না
  import("./heavyChartLibrary.js")
    .then((chartModule) => {
      chartModule.renderChart();
    })
    .catch((err) => {
      console.error("Module loading problem:", err);
    });
});