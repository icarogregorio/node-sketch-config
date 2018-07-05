module.exports = function(RED) 
{
    /*function sketchConfigNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("node-sketch-config",sketchConfigNode);*/

    function nodeSketchConfig(config) {
        RED.nodes.createNode(this,config);
        

        // Retrieve the config node
        this.server = RED.nodes.getNode(config.server);

        if (this.server) {
            // Do something with:
            //  this.server.host
            //  this.server.port
        } else {
            // No config node configured
        }
    }
    RED.nodes.registerType("configx",nodeSketchConfig);
}