const {
  Client,
  logger,
  Variables,
} = require("camunda-external-task-client-js");

//const open = require('open');
const config = {
  baseUrl: "http://localhost:8080/engine-rest",
  use: logger,
  asyncResponseTimeout: 10000,
};

// create a Client instance with custom configuration
const client = new Client(config);
var RESTClient = require("node-rest-client").Client;
var restclient = new RESTClient();


//------------------------------------------------------------------
// susbscribe to "Retrieve list of pharmacies" task
//------------------------------------------------------------------
client.subscribe("get-pharmacies", async function ({ task, taskService }) {
  const processVariables = new Variables();
  const localVariables = new Variables();

  console.log("---------------------------------------------------------------");
  console.log("-> RETRIEVE LIST OF PHARMACY TASK ")
  console.log("-> List of pharmacies required from the third party service");

  // External service behaviour
  var args = {
    headers: { "Content-Type": "application/json" },
  };

  // call rest API
  restclient.get(
    "http://localhost:3000/pharmacy/get-list-of-pharmacies",
    args,
    function (data, response) {
      console.log("-> Response status code: " + response.statusCode);
      console.log("-> Response status message: " + response.statusMessage);
      // parsed response body as js object
      data.forEach((element, index) => {
        processVariables.set(
          `pharmacy${index}`,
          `Id: ${element.id}, Name: ${element.name}, Address: ${element.address}`
        );
      })
      // Complete the task
      taskService.complete(task, processVariables, localVariables);
      console.log("-> Task EXECUTED");
    }
  );
})


//------------------------------------------------------------------
// susbscribe to "Send pharmacy" task
//------------------------------------------------------------------

client.subscribe("post-pharmacy", async function ({ task, taskService }) {
  const processVariables = new Variables();
  const localVariables = new Variables();
  const pharmacyID = task.variables.get("pharmacyChoice");
  const drugID = task.variables.get("drugCode");
  const drugQuantity = task.variables.get("drugQuantity");
  let availability = null;

  console.log("---------------------------------------------------------------");
  console.log("-> SEND PHARMACY TASK")
  console.log("-> Pharmacy chosen sent to the third party service");
  console.log("-> You have chosen pharmacy with Pharmacy ID: " + pharmacyID);
  console.log("-> DrugID required: " + drugID + "  Quantity required: " + drugQuantity);
  console.log("-> Waiting for the availability...");

  // processVariables.set("pharmacyName", pharmaciesDB.pharmacies[pharmacyID - 1].name)
  // processVariables.set("pharmacyAddress", pharmaciesDB.pharmacies[pharmacyID - 1].address)

  var args = {
    data: {
      pharmacyId: pharmacyID,
      drugCode: drugID,
      quantity: drugQuantity
    },
    headers: { "Content-Type": "application/json" },
  }

  // call rest API
  restclient.post(
    "http://localhost:3000/pharmacy/get-availability",
    args,
    function (data, response) {
      console.log("-> Response status code: " + response.statusCode);
      console.log("-> Response status message: " + response.statusMessage);
      // parsed response body as js object
      if (data.res) {
        console.log("-> Drugs selected available...")
        processVariables.set("drugAvailability", "true")
      } else {
        console.log("-> Drugs selected unavailable...")
        processVariables.set("drugAvailability", "false")
      }

      // Complete the task
      taskService.complete(task, processVariables, localVariables);
    }
  );
});


//------------------------------------------------------------------
// susbscribe to "Reserve Drug" task
//------------------------------------------------------------------

client.subscribe("reserve-drug", async function ({ task, taskService }) {
  const processVariables = new Variables();
  const localVariables = new Variables();
  const pharmacyID = task.variables.get("pharmacyChoice");
  const drugID = task.variables.get("drugCode");
  const drugQuantity = task.variables.get("drugQuantity");

  console.log("---------------------------------------------------------------");
  console.log("-> RESERVE DRUG TASK");
  console.log("-> Waiting for reservation...")

  var args = {
    data: {
      pharmacyId: pharmacyID,
      drugCode: drugID,
      quantity: drugQuantity
    },
    headers: { "Content-Type": "application/json" },
  }

  // call rest API
  restclient.post(
    "http://localhost:3000/pharmacy/reserve-drugs",
    args,
    function (data, response) {
      console.log("-> Response status code: " + response.statusCode);
      console.log("-> Response status message: " + response.statusMessage);
      // parsed response body as js object

      console.log("-> Your medicine has been reserved")

      processVariables.set("drugName", data.drugName)
      processVariables.set("drugPrice", data.price.toString().concat(" €"))

      // Complete the task
      taskService.complete(task, processVariables, localVariables);
    }
  );
});


//------------------------------------------------------------------
// susbscribe to "Order Drug" task
//------------------------------------------------------------------
client.subscribe("order-drug", async function ({ task, taskService }) {
  const processVariables = new Variables();
  const localVariables = new Variables();
  const pharmacyID = task.variables.get("pharmacyChoice");
  const drugCode = task.variables.get("drugCode");
  const drugQuantity = task.variables.get("drugQuantity");

  console.log("---------------------------------------------------------------");
  console.log("-> ORDER DRUG TASK");
  console.log("-> Waiting for order confirmation...")

  var args = {
    data: {
      pharmacyId: pharmacyID,
      drugCode: drugCode,
      quantity: drugQuantity
    },
    headers: { "Content-Type": "application/json" },
  }

  // call rest API
  restclient.post(
    "http://localhost:3000/pharmacy/order-drugs",
    args,
    function (data, response) {
      console.log("-> Response status code: " + response.statusCode);
      console.log("-> Response status message: " + response.statusMessage);
      // parsed response body as js object

      console.log("-> Your medicine has been ordered in the pharmacy selected")

      processVariables.set("drugName", data.drugName)
      processVariables.set("orderPrice", data.price.toString().concat(" €"))

      // Complete the task
      taskService.complete(task, processVariables, localVariables);
    }
  );
});


//------------------------------------------------------------------
// susbscribe to "Get Time Availability" task
//------------------------------------------------------------------
client.subscribe("get-time-availability", async function ({ task, taskService }) {
  const processVariables = new Variables();
  const localVariables = new Variables();
  const pharmacyID = task.variables.get("pharmacyChoice");
  const drugCode = task.variables.get("drugCode");

  const availabilityProcess = task.variables.get("drugAvailability");
  let availability;
  if (availabilityProcess === "true") {
    availability = true;
  } else if (availabilityProcess === "false") {
    availability = false;
  }

  console.log("---------------------------------------------------------------");
  console.log("GET TIME AVAILABILITY TASK");
  console.log("-> Waiting for reservation...");

  var args = {
    data: {
      pharmacyId: pharmacyID,
      drugCode: drugCode,
      availability: availability
    },
    headers: { "Content-Type": "application/json" },
  }

  // call rest API
  restclient.post(
    "http://localhost:3000/pharmacy/get-time-availability",
    args,
    function (data, response) {
      console.log("-> Response status code: " + response.statusCode);
      console.log("-> Response status message: " + response.statusMessage);
      console.log("response data: " + JSON.stringify(data))

      processVariables.set("pharmacyName", data.pharmacyName)
      processVariables.set("pharmacyAddress", data.pharmacyAddress)
      processVariables.set("openingHours", data.openingHours)
      if (!availability) {
        processVariables.set("availableDate", data.daysForRestock)
      } else {
        processVariables.set("availableDate", "Currently available")
      }

      // Complete the task
      taskService.complete(task, processVariables, localVariables);
      console.log("-> Task EXECUTED");
    }
  );
})