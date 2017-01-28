import React from 'react';

const SmoothScrollBtn = React.createClass({
	getInitialState: function() {
		return {
			showBtn: false
		};
	},
	componentDidMount: function() {
		window.addEventListener('scroll', this.toggleBtn);
	},
	componentWillUnmount: function() {
		window.removeEventListener('scroll', this.toggleBtn);
	},
	toggleBtn: function() {
			var scrolled = window.pageYOffset || document.documentElement.scrollTop;
			var screenHeight = document.documentElement.clientHeight;
			var button = document.getElementById('smoothScrollBtn');
			if (scrolled > screenHeight/2) {
				this.setState({showBtn: true});
			}
			else {
				this.setState({showBtn: false});
			}
	},
	smoothScroll: {
		timer: null,
		stop: function () {
			clearTimeout(this.timer);
		},
		scrollTo: function (id, callback) {
			var settings = {
				duration: 1000,
				easing: {
					outQuint: function (x, t, b, c, d) {
						return c*((t=t/d-1)*t*t*t*t + 1) + b;
					}
				}
			};
			var percentage;
			var startTime;
			var node = document.getElementById(id);
			var nodeTop = node.offsetTop;
			var nodeHeight = node.offsetHeight;
			var body = document.body;
			var html = document.documentElement;
			var height = Math.max(
				body.scrollHeight,
				body.offsetHeight,
				html.clientHeight,
				html.scrollHeight,
				html.offsetHeight
			);
			var windowHeight = window.innerHeight;
			var offset = window.pageYOffset;
			var delta = nodeTop - offset;
			var bottomScrollableY = height - windowHeight;
			var targetY = (bottomScrollableY < delta) ?
				bottomScrollableY - (height - nodeTop - nodeHeight + offset):
				delta;

			startTime = Date.now();
			percentage = 0;

			if (this.timer) {
				clearInterval(this.timer);
			}

			function step () {
				var yScroll;
				var elapsed = Date.now() - startTime;

				if (elapsed > settings.duration) {
					clearTimeout(this.timer);
				}

				percentage = elapsed / settings.duration;

				if (percentage > 1) {
					clearTimeout(this.timer);

					if (callback) {
						callback();
					}
				} else {
					yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
					window.scrollTo(0, yScroll);
					this.timer = setTimeout(step, 10);     
				}
			}

			this.timer = setTimeout(step, 10);
		}
	},
	handleTopClick: function () {
		this.smoothScroll.scrollTo('top');
	},
	render: function () {
		return (<div>
				{this.state.showBtn && (<button id="smoothScrollBtn" className="smoothScrollBtn button" onClick={this.handleTopClick}>To the top</button>)}
				</div>
		);
	}
});

export default SmoothScrollBtn;