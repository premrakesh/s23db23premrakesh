var mountains = require('../models/mountains');
exports.mountains_list = async function(req, res) {
    //  res.send('NOT IMPLEMENTED: Dog list');
    try{
        mountains = await mountains.find();
        res.send(mountains);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        } 
    };
    
    exports.dog_view_all_Page = async function(req, res) {
        try{
        themountains = await mountains.find();
        console.log(mountains)
        res.render('mountains', { title: 'mountains Search Results', results: mountains });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
       };
       exports.mountains_detail = function(req, res) {
        res.send('NOT IMPLEMENTED: mountains detail: ' + req.params.id);
       };
       // Handle Dog create on POST.
       // Handle Costume create on POST.
       exports.mountains_create_post = async function(req, res) {
           console.log(req.body)
           let document = new mountains();
           // We are looking for a body, since POST does not have query parameters.
           // Even though bodies can be in many different formats, we will be picky
           // and require that it be a json object
           // {"costume_type":"goat", "cost":12, "size":"large"}
           document.name = req.body.name;
           document.location = req.body.location;
           document.altitude = req.body.altitude;
           try{
           let result = await document.save();
           res.send(result);
           }
           catch(err){
           res.status(500);
           res.send(`{"error": ${err}}`);
           }
          };
          exports.mountains_delete = function(req, res) {
            res.send('NOT IMPLEMENTED: mountains delete DELETE ' + req.params.id);
           };
           // Handle Dog update form on PUT.
           exports.mountains_update_put = function(req, res) {
            res.send('NOT IMPLEMENTED: mountains update PUT' + req.params.id);
           };