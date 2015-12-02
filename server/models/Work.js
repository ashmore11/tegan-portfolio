var keystone = require('keystone');

var Types = keystone.Field.Types;

var Work = new keystone.List('pieces', {
  map: { name: 'title' },
  autokey: { 
    path: 'slug', 
    from: 'title', 
    unique: true 
  }
});

Work.add({
  'created': {
    type: Types.Date, 
    default: Date.now,
    required: true
  },
  'title': {
    type: String,
    required: true,
    initial: true
  },
  'image': {
    require: true,
    initial: false,
    type: Types.LocalFile,
    dest: process.env.PWD + '/public/images/uploads/'
  },
  'description': {
    type: Types.Html,
    wysiwyg: true,
    height: 200,
    required: false,
    initial: false
  }
});

Work.defaultColumns = 'title, created';
Work.register();
