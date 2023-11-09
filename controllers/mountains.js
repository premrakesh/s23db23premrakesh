var mountains = require('../models/mountains');
exports.mountains_list = async function(req, res) {
    try{
        mountains = await mountains.find();
        res.send(mountains);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        } 
    };
    
    // List of all Costumes
exports.mountains_view_all_Page = async function(req, res) {
    try{
    themountains = await mountains.find();
    res.send(themountains);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
exports.mountains_view_all_Page = async function(req, res) {
        try{
        themountains = await mountains.find();
        console.log(mountains)
        res.render('mountains', { title: 'mountains Search Results', results: themountains });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
       };
exports.mountains_detail = function(req, res) {
        res.send('NOT IMPLEMENTED: mountains detail: ' + req.params.id);
       };
exports.mountains_create_post = async function(req, res) {
           console.log(req.body)
           let document = new mountains();
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