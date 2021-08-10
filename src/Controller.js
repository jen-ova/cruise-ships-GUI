class Controller {
	constructor(ship) {
		this.ship = ship;

		this.initialiseSea();

		document.querySelector("#sailbutton").addEventListener("click", () => {
			this.setSail();
		});
	}

	initialiseSea() {
		const backgrounds = ["./images/water0.png", "./images/water1.png"];
		let backgroundIndex = 0;
		window.setInterval(() => {
			document.querySelector(
				"#viewport__inner"
			).style.backgroundImage = `url('${
				backgrounds[backgroundIndex % backgrounds.length]
			}')`;
			backgroundIndex += 1;
		}, 1000);
	}

	renderPorts(ports) {
		const portsElement = document.getElementById("ports");
		portsElement.style.width = "0px";

		const increasePortsWidth = () => {
			const { width } = portsElement.style;
			portsElement.style.width = String(parseInt(width) + 256) + "px";
		};

		ports.forEach((element) => {
			let portDiv = document.createElement("div");
			portDiv.setAttribute("class", "port");
			portDiv.dataset.portName = element.name;
			portDiv.dataset.portIndex = `${ports.indexOf(element)}`;
			portsElement.appendChild(portDiv);

			increasePortsWidth(portsElement.style.width);
		});
	}

	renderShip() {
		const ship = this.ship;

		const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
		const portElement = document.querySelector(
			`[data-port-index='${shipPortIndex}']`
		);
		const shipElement = document.querySelector("#ship");

		shipElement.style.top = `${portElement.offsetTop + 32}px`;
		shipElement.style.left = `${portElement.offsetLeft - 5}px`;
	}

	setSail() {
		const ship = this.ship;

		const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
		const nextPortIndex = currentPortIndex + 1;
		const nextPortElement = document.querySelector(
			`[data-port-index='${nextPortIndex}']`
		);

		if (!nextPortElement) {
			return alert("End of the line! Please disembark");
		}

		this.renderMessage(`Now departing ${ship.currentPort.portName}`);

		const shipElement = document.querySelector("#ship");
		const sailInterval = setInterval(() => {
			const shipLeft = parseInt(shipElement.style.left, 10);
			if (shipLeft === nextPortElement.offsetLeft - 5) {
				ship.setSail();
				ship.dock();
				clearInterval(sailInterval);
			}

			shipElement.style.left = `${shipLeft + 1}px`;
		}, 20);
	}

	renderMessage(message) {
		const messageElement = document.createElement("div");
		messageElement.id = "message";
		messageElement.innerHTML = message;

		const viewport = document.querySelector("#viewport");
		viewport.appendChild(messageElement);

		setTimeout(() => {
			viewport.removeChild(messageElement);
		}, 2000);
	}
}

(function exportController() {
	if (typeof module !== "undefined" && module.exports) {
		module.exports = Controller;
	} else {
		window.Controller = Controller;
	}
})();
