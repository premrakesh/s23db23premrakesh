var mountains = require('../models/mountains');
// List of all mountains
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
// for a specific mountains.
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
// Handle mountains create on POST.
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
// Handle Costume delete on DELETE.
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
// Handle Costume update form on PUT.
exports.mountains_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await mountains.findById( req.params.id)
// Do updates of properties
if(req.body.mountains_type)
toUpdate.name = req.body.name;
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
};
// Handle a show one view with id specified by query
exports.mountains_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await mountains.findById(req.query.id)
    res.render('mountainsdetail',{ title: 'Mountains Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.mountains_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('mountainscreate', { title: 'Mountains Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
// VIEWS
// Handle a show all view
exports.mountains_view_all_Page = async function(req, res) {
try{
mountains = await mountains.find();
res.render('mountains', { title: 'Mountains Search Results', results: mountains });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle a delete one view with id from query
exports.mountains_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await mountains.findById(req.query.id)
res.render('mountainsdelete', { title: 'Mountains Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


// Handle building the view for updating a costume.
// query provides the id
exports.mountains_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await mountains.findById(req.query.id)
    res.render('mountainsupdate', { title: 'Mountains Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };