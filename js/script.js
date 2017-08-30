$(function() {
	function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
	}

	function Column(name) {
		var self = this;
		this.name = name;
    	this.$element = createColumn();

    	function createColumn() {
    		//elements >> events >> construct and return
    		var $column = $('<div>').addClass('column');
			var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
			var $columnCardList = $('<ul>').addClass('column-card-list');
			var $columnDelete = $('<button>').addClass('btn-delete').text('x');
			var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');
    		
    		$columnDelete.click(function() {
        		self.removeColumn();
    		});

    		$columnAddCard.click(function() {
        		self.addCard(new Card(prompt("Enter the name of the card"))); //parametrem funkcji jest nowy obiekt ktorego parametrem jest funkcja - ciekawe
			});

			$column.append($columnTitle)
        			.append($columnDelete)
        			.append($columnAddCard)
        			.append($columnCardList);
			return $column;
    	}
	}

	Column.prototype = {
	    addCard: function(card) {
	      this.$element.children('ul').append(card.$element);
	    },
	    removeColumn: function() {
	      this.$element.remove();
	    }
	};

});
