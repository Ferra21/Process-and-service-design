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
  
  // susbscribe to the topic
  client.subscribe("get-pharmacies", async function ({ task, taskService }) {
    const processVariables = new Variables();
    const localVariables = new Variables();
    const drugCode = task.variables.get("drugCode");
    const drugQuantity = task.variables.get("drugQuantity");
    const taxCode = task.variables.get("taxCode");
    console.log("Variables: " + drugCode + '  '+ drugQuantity + '   '+taxCode)
    taskService.complete(task, processVariables, localVariables);
  });