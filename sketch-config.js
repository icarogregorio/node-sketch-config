
module.exports = function(RED) 
{
    //########################## NODE CONFIG ##########################//
    function nodeConfigx(n) 
    {
        RED.nodes.createNode(this,n);
        this.host = n.host;
        this.port = n.port;
    }
    RED.nodes.registerType("configx",nodeConfigx);

    function nodeSketch(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.server = RED.nodes.getNode(config.server);
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            msg.config = {
                "host": this.server.host,
                "port": this.server.port
            };
            node.send(msg);
        });
    }
    RED.nodes.registerType("node-sketch-config",nodeSketch);
    
};
/*
//########################## DEFAULT NODE ##########################//
module.exports = function(RED)
{
    function nodeSketchConfig(config) 
    {
        RED.nodes.createNode(this,config);
        
        // Retrieve the config node
        //this.server = RED.nodes.getNode(configx.server);

        if (this.server) 
        {
            // Do something with:
            //  this.server.host
            //  this.server.port
        } 
        else 
        {
            // No config node configured
        }

        //Retrive input and send output with lowercase
        this.on('input', function(msg)
        {
            msg.payload = msg.payload.toLowerCase();
            msg.config = {
                "host": server.host,
                "port": server.port
            }
            node.send(msg);
        });
        RED.nodes.registerType("node-sketch-config",nodeSketchConfig);
    }

};*/