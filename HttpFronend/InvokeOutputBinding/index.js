module.exports = async function (context, req) {
    context.log("Node HTTP trigger function processed a request.");
    context.bindings.invokePayload = { BODY: req.body };
};