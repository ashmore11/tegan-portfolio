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

		const view = new this.views[id]();

	}

}

const APP = new App();
