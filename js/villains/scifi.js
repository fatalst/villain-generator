class SciFiVillain extends Villain {

	constructor(){

		super();
		this.person = this.randomItem('peopleS');
		this.backstory = this.randomItem('backstoriesS');
		this.current = this.randomItem('currentStoriesS');
		this.goal = this.randomItem('goalsS');
		this.wordSuffix = 'S';

	}

}