import Navigation from 'app/utils/navigation';
import HomeView   from 'app/views/home';
import AboutView  from 'app/views/about';

class App {

	constructor() {

		const nav = new Navigation();

		nav.on('url:changed', id => {
			
			this.renderView(id);

		});

		nav.init();

	}

	get views() {

		return {
			home  : HomeView,
			about : AboutView,
		};

	}

	renderView(id) {

		if(this.view) {

			this.view.unbind();
			this.view = null;

		}

		this.view = new this.views[id]();

	}

}

const APP = new App();
