const {Schema, model} = require("mongoose");

const pageSchema = new Schema({
  page_name: String,
  page_url: String,
  table_name: String,
  icon_id: String,
  createdBy: String,
  user_id:String,
  createdDate: Date
});

const Page = new model('Page',pageSchema);

const fieldSchema = new Schema({
  page_id: String,
  user_id:String,
  fields_name: String,
  type: String,
  fields_length: String,
  fields_validation: String,
  fields_key: String,
  fields_type: String,
  createdBy: String,
  createdDate: Date,
});

const Field = new model('Field', fieldSchema);

const sidebarSchema = new Schema({
  icontitle: String,
  icon:String,
  createdBy: String,
  createdDate: Date
});

const Sidebar = new model('sidebar', sidebarSchema);

module.exports = {Page, Field, Sidebar};



