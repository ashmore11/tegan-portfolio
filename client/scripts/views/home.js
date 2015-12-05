import $ from 'jquery';

export default class Home {
	
	constructor() {

    this.$el       = $('#home');
    this.$workItem = this.$el.find('li.work-item');

    this.bindEvents();
	
	}

  bindEvents() {

    this.$workItem.on('mouseenter', this.toggleWork.bind(this));
    this.$workItem.on('mouseleave', this.toggleWork.bind(this));

  }

  unbindEvents() {

    this.$workItem.off('mouseenter');
    this.$workItem.off('mouseleave');

  }

  toggleWork(event) {

    const target = $(event.currentTarget);

    switch(event.type) {
    
      case 'mouseenter':
    
        this.$workItem.not(target).addClass('blur');
    
        break;
    
      case 'mouseleave':
    
        this.$workItem.removeClass('blur');
    
        break;
    
    }

  }

}