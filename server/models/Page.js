var keystone = require('keystone');

var Types = keystone.Field.Types;

var Pages = new keystone.List('page', {
	map: { name: 'title' },
	autokey: { 
		path: 'slug', 
		from: 'title', 
		unique: true 
	}
});

Pages.add({
	meta:{
		title: {
			type: Types.Text,
			collapse: true
		},
		description: {
			type: Types.Text,
			collapse: true
		},
		keywords: {
			type: Types.Text,
			collapse: true
		},
		og: {
			title: { 
				type: Types.Text,
				collapse: true
			},
			description: {
				type: Types.Text,
				collapse: true
			},
			image: { 
				type: Types.Text,
				collapse: true
			},
			url: { 
				type: Types.Url,
				collapse: true
			},
			type: { 
				type: Types.Text,
				collapse: true
			}
		}
	},
	title: { 
		type: Types.Text,
		required: true
	},
	description: {
		type: Types.Textarea,
		initial: false,
		required: false
	},
});

Pages.defaultColumns = 'title';
Pages.register();
