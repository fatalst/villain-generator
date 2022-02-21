var changelog = {
	log: [
		{
			version: '2.0.0',
			date: '02/21/2022',
			log: [
				'Refactored generator code to be more versatile.',
				'Added changelog to page.',
				'Updated word lists',
				'Added tooltips',
			]
		}
	],

	getLastChangelog(){
		return this.log[0];
	},

	createModal(changelog){
		let version = changelog.version;
		let date = changelog.date;
		let lines = changelog.log;

		$('#version').text(`v${version}`);

		const modal = $('<div>')
			.appendTo('body')
			.addClass('modal micromodal-slide')
			.attr('id', 'version-modal')
			.attr('aria-hidden', 'true');

		const overlay = $('<div>')
			.appendTo(modal)
			.addClass('modal__overlay')
			.attr('tabindex', '-1')
			.attr('data-micromodal-close', '');

		const container = $('<div>')
			.appendTo(overlay)
			.addClass('modal__container')
			.attr('role', 'dialog')
			.attr('aria-modal', 'true')
			.attr('aria-labelledby', 'version-modal-title');

		const header = $('<header>')
			.appendTo(container)
			.addClass('modal__header');

		$('<h2>')
			.appendTo(header)
			.text(`v${version} Changelog`)
			.addClass('modal__title');

		$('<button>')
			.appendTo(header)
			.addClass('modal__close')
			.attr('aria-label', 'Close modal')
			.attr('data-micromodal-close', '');

		const content = $('<div>')
			.appendTo(container)
			.addClass('modal-content-content');

		const contentInner = $('<div>')
			.appendTo(content)
			.addClass('modal__content');

		$(`<h3>`)
			.appendTo(contentInner)
			.text(date)
			.addClass('subheader');

		for(var i in lines){
			$(`<li>`)
				.appendTo(contentInner)
				.text(lines[i]);
		}

		const footer = $('<footer>')
			.appendTo(content)
			.addClass('modal__footer');

		$('<button>')
			.appendTo(footer)
			.addClass('button')
			.text('Close')
			.attr('aria-label', 'Close this dialog window')
			.attr('data-micromodal-close', '');
	}
}
