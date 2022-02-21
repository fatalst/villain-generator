class FantasyVillain extends Villain {

	constructor(){

		super();
		this.person = this.randomItem('peopleF');
		this.backstory = this.randomItem('backstoriesF');
		this.current = this.randomItem('currentStoriesF');
		this.goal = this.randomItem('goalsF');
		this.wordSuffix = 'F';

	}

}