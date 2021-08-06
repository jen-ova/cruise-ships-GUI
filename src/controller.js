(function exportController() {
    class Controller {
        constructor() {
            this.initialiseSea();
        };

        initialiseSea() {
            const backgrounds = [
                './images/water0.png',
                './images/water1.png',
            ];
            let backgroundIndex = 0;
            window.setInterval(() => {
                document.querySelector('#viewport__inner').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
                backgroundIndex += 1;
            }, 1000);
        };

        renderPorts(ports) {
            const portsElement = document.getElementById('ports');
            portsElement.style.width = "0px"

            const increasePortsWidth = () => {
                const {width} = portsElement.style;
                portsElement.style.width = String(parseInt(width) + 256) + "px";
            }

            ports.forEach(element => {
                let portDiv = document.createElement('div');
                portDiv.setAttribute('class', 'port');
                portDiv.dataset.portName = element.name;
                portDiv.dataset.portIndex = `${ports.indexOf(element)}`;
                portsElement.appendChild(portDiv);

                increasePortsWidth(portsElement.style.width);
            });
        };

        renderShip(ship) {
            const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
            const shipElement = document.querySelector("#ship");

            shipElement.style.top = `${portElement.offsetTop + 32}px`;
            shipElement.style.left = `${portElement.offsetLeft - 32}px`;
        };
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
      } else {
        window.Controller = Controller;
      }
}());
