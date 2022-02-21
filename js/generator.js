var generator = {
	fantasy: true,
	villain: {},

	init() {

		// creating version modal
		changelog.createModal(changelog.getLastChangelog());
	    MicroModal.init({
			awaitCloseAnimation: true,
	    });

	    this.villain = new FantasyVillain();

	    this.displayVillain();

	    $('#title').text('fantasy villain generator');

	    // init buttons
	    $('#btn').click(() => this.generateNewVillain());
	    $('#swt').click(() => this.switchType());

	},

	displayVillain(){
		const element = $('#vil');
		element.empty();

		$('<span>')
			.attr('id', 'characteristic')
			.text(this.villain['characteristic'])
			.click(() => this.reloadElement('characteristic'))
			.appendTo(element);

		$(element)
			.append(' ');

		$('<span>')
			.attr('id', 'person')
			.text(this.villain['person'])
			.click(() => this.reloadElement('person'))
			.appendTo(element);

		$(element)
			.append(' who ');

		$('<span>')
			.attr('id', 'backstory')
			.text(this.villain['backstory'])
			.click(() => this.reloadElement('backstory'))
			.appendTo(element);

		$(element)
			.append(' and is now ');

		$('<span>')
			.attr('id', 'current')
			.text(this.villain['current'])
			.click(() => this.reloadElement('current'))
			.appendTo(element);

		$(element)
			.append(' in order to ');

		$('<span>')
			.attr('id', 'goal')
			.text(this.villain['goal'])
			.click(() => this.reloadElement('goal'))
			.appendTo(element);

		$(element)
			.append('.');

		for(var key in this.villain){
			tippy('#' + key, {
				content: '<span>click to change the <strong>' + key + '</strong></span>',
				placement: 'top-start',
				allowHTML: true,
				followCursor: true,
				arrow: false,
				theme: 'villainous',
			});
		}
	},

	reloadElement(id){
		this.villain.setElement = id;
		this.displayVillain();
	},

	generateNewVillain(){
		if(this.fantasy)
			this.villain = new FantasyVillain();
		else
			this.villain = new SciFiVillain();

		this.updateGenerateButton();
		this.displayVillain();
	},

	updateGenerateButton(){
		var len = words.adj.length - 1;
		var word = words.adj[chance.integer({min: 0, max: len})];

		$('#btn').text('Not ' + word + ' enough!');
	},

	switchType(){
		const isFantasy = !this.fantasy;
		this.fantasy = isFantasy;
		this.generateNewVillain();

	    $('#title').text((isFantasy ? 'fantasy' : 'sci-fi') + ' villain generator');
		$('body').toggleClass('fantasy').toggleClass('sci-fi')
		$('#swt').text('Switch to ' + (isFantasy ? 'sci-fi' : 'fantasy') + ' villains.');

		document.documentElement.style.setProperty('--background', isFantasy ? '#eeeaf2' : '#eaf0f2');
		document.documentElement.style.setProperty('--text', isFantasy ? '#26123a' : '#122f3a');
	},

}

window.onload = generator.init.bind(generator);