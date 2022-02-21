class Villain {

	constructor(){

		const chara = this.randomItem('characteristic');
		const article = this.getArticle(chara);

		this.characteristic = `${article} ${chara}`;
		this.wordSuffix = '';

	}

	set setElement(id){
		if(id === 'characteristic'){
			const chara = this.randomItem(id);
			this[id] = `${this.getArticle(chara)} ${chara}`;
		} else {
			this[id] = this.randomItem(this.getWordId(id));
		}
	}

	randomItem(id){
		var len = words[id].length - 1;
		var word = words[id][chance.integer({min: 0, max: len})];
		return word;
	}

	getArticle(word){
		var firstLetter = word.split("")[0].toLowerCase();
		if (firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u'){
			return 'An';
		} else{
			return 'A';
		}
	}

	getWordId(id){
		switch(id){
			case 'person':
				return 'people' + this.wordSuffix;
			case 'backstory':
				return 'backstories' + this.wordSuffix;
			case 'current':
				return 'currentStories' + this.wordSuffix;
			case 'goal':
				return 'goals' + this.wordSuffix;
		}
	}

}