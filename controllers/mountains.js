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
       exports.mountains_detail = async function(req, res) {
        console.log("detail" + req.params.id)
        try {
        result = await mountains.findById( req.params.id)
        res.send(result)
        } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
        }
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
          exports.mountains_delete = async function(req, res) {
            console.log("delete " + req.params.id)
            try {
            result = await mountains.findByIdAndDelete( req.params.id)
            console.log("Removed " + result)
            res.send(result)
            } catch (err) {
            res.status(500)
            res.send(`{"error": Error deleting ${err}}`);
            }
            };
            
           // Handle Dog update form on PUT.
           exports.mountains_update_put = async function(req, res) {
            console.log(`update on id ${req.params.id} with body
            ${JSON.stringify(req.body)}`)
            try {
            let toUpdate = await mountains.findById( req.params.id)
            // Do updates of properties
            if(req.body.name) toUpdate.name = req.body.name;
            if(req.body.location) toUpdate.location = req.body.location;
            if(req.body.altitude) toUpdate.altitude = req.body.altitude;
            let result = await toUpdate.save();
            console.log("Sucess " + result)
            res.send(result)
            } catch (err) {
            res.status(500)
            res.send(`{"error": ${err}: Update for id ${req.params.id}
            failed`);
            }

            /* GET detail costume page */

            // Handle a show one view with id specified by query
exports.mountains_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await mountains.findById( req.query.id)
    res.render('mountainsdetail',
    { title: 'Mountains Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
        };
