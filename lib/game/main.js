ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font'
)
.defines( function() {

impactEnv = ig.Game.extend( {
	
	// Load a font
	font: new ig.Font( 'media/font.png' ),
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		this.font.draw( 'Hello World!', x, y, ig.Font.ALIGN.CENTER );
	}
});


ig.main( '#canvas', impactEnv, 60, 640, 480, 1 );

} );
