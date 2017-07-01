var React = require('react');
var ReactDOM = require('react-dom')
var createReactClass = require('create-react-class');

var MainInterface = createReactClass({
	getInitialState: function () {
		return {
			data: [
				{
					petName: "Buffy",
					ownerName: "Hassum Harrod",
					aptDate: "2016-06-20 15:30",
					aptNotes: "This Chihuahua has not eaten for three days and is lethargic"
				},
				{
					petName: "Spot",
					ownerName: "Constance Smith",
					aptDate: "2016-06-24 08:30",
					aptNotes: "This German Shepherd is having some back pain"
				},
				{
					petName: "Goldie",
					ownerName: "Barot Bellingham",
					aptDate: "2016-06-22 15:50",
					aptNotes: "This Goldfish has some weird spots in the belly"
				},
				{
					petName: "Mitten",
					ownerName: "Hillary Goldwyn",
					aptDate: "2016-06-21 9:15",
					aptNotes: "Cat has excessive hairballs"
				}
			]
		}
	}, //getInitialState

	render: function() {
		var filteredApts = this.state.data;
		filteredApts = filteredApts.map( function(item, index) {
			return (
				<li className="pet-item media" key={index}>
					<div className="pet-info media-body">
						<div className="pet-head">
							<span className="pet-name">{item.petName}</span>
							<span className="apt-date pull-right">{item.aptDate}</span>
						</div>
						<div className="owner-name">
							<span className="" style={{fontWeight: '800'}}>Owner</span>:{" "}
							{item.ownerName}
						</div> {/*owner-name*/}
						<div className="apt-notes">
							{item.aptNotes}
						</div>
					</div> {/*pet-info*/}
				</li>
			) // return

		}); //filteredApts.map

		return (
			<div className="interface">
				<ul className="item-list media-list">
					{filteredApts}
				</ul>
			</div>
		) // return
	} // render
}); // MainInterface


ReactDOM.render(
	<MainInterface />,
	document.getElementById('petAppointments')
);
