// libs
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { push } from "react-router-redux";

// local
import getSessionStorage from "../../../shared/sessionStorage";
import HtmlMarker from "./HtmlMarker";
import routes from '../routes';
import "./ServiceHome.css";

var tinycolor = require("tinycolor2");
let iconWithPrefix = vector_icon => vector_icon.split("-")[0] + " " + vector_icon;
let categoryStyle = color => {
	if (!color) {
		color = "#000";
	} else if (color.indexOf("#") === -1) {
		color = `#${color}`;
	}

	color = tinycolor(color)
		.saturate(30)
		.darken(10)
		.toHexString();

	return {
		color: color,
		borderColor: tinycolor(color).darken(10),
	};
};

class ServiceIcon extends React.Component {
	render() {
		const { service, idx, type } = this.props;
		return type ? (
			<div className="Icon" key={`${service.id}-${idx}`}>
				<i className={iconWithPrefix(type.vector_icon)} style={categoryStyle(type.color)} />
			</div>
		) : (
				<div />
			);
	}
}


class ServiceItem extends React.Component {
	render() {
		const { country, goToService, language, service } = this.props;
		const mainType = service.type ? service.type : service.types[0];
		const types = (service.types || []).filter(t => t.id !== mainType.id);

		return (
			<div key={service.id} className="Item" onClick={() => goToService(country, language, service.id)}>
				<div className="Info">
					<div className="Item-content title">
						<h1>{service.name}</h1>
						<i className="material-icons" id="goToServiceIcon" />
					</div>

					<h2 className="Item-content">{service.provider.name}{" "}</h2>

					<address className="fullAddress Item-content">
						{service.address}
					</address>

					{service.address_city &&
						<address className="regionTitle Item-content">
							{service.address_city}
						</address>
					}
				</div>

				<div className="Icons Item-content">
					{mainType &&
						<ServiceIcon key={`si-${mainType.idx}`} idx={0} isMainType={1} service={service} type={mainType} />
					}
					{types.map((t, idx) => t && <ServiceIcon key={`si-${idx}`} idx={idx} isMainType={0} service={service} type={t} />)}
				</div>
			</div>
		);
	}
}

class ServiceMapDesktop extends React.Component {
	state = {
		loaded: false,
		errorMessage: null,
	};

  map = null;
	clusters = null;
	bounds = null;
	infoWindow = null;

	componentDidMount() {
		const sessionStorage = getSessionStorage();
	  const map = new global.google.maps.Map(document.getElementById('MapCanvas'), {
	    minZoom: 3,
	    maxZoom: 16,
	    disableDefaultUI: true,
	    zoomControl: true,
	    zoomControlOptions: {
        position: global.google.maps.ControlPosition.TOP_LEFT
      }
	  });

		this.setState({
			loaded: true
		});

		if (sessionStorage.serviceMapBounds) {
			const b = sessionStorage.serviceMapBounds.split(",").map(c => parseFloat(c));
			const zoom = parseInt(sessionStorage.serviceMapZoom, 10);

			map.fitBounds({
				west : b[0],
				north: b[1],
				east : b[2],
				south: b[3]
			});
			map.setZoom(zoom);
		}

    global.google.maps.event.addListener(map, 'click', () => {
      if (this.infoWindow) {
        this.infoWindow.close();
      }
    });

	  this.map = map;
	}

	componentDidUpdate() {
		let keepPreviousZoom = this.props.keepPreviousZoom;
		if (this.state.loaded) {
			if (this.props.services.length) {
				let locationServices = this.props.services.filter(s => s.location != null);

				const markers = locationServices.map((s, index) => {
					let ll = s.location.coordinates;
				  const mainType = s.type ? s.type : s.types[0];

					let markerDiv = ReactDOMServer.renderToString(<ServiceIcon idx={0} service={s} type={mainType} />);

					let popupEl = document.createElement("div");
					ReactDOM.render(<ServiceItem service={s} {...this.props} />, popupEl);

					let marker = new HtmlMarker(new global.google.maps.LatLng(ll[1], ll[0]), this.map, {
					  html: markerDiv
					});

					marker.addListener('click', () => {
					  setTimeout(() => {
              this.infoWindow
                ? this.infoWindow.setContent(popupEl)
                : this.infoWindow = new global.google.maps.InfoWindow({ content: popupEl })
              this.infoWindow.open(this.map, marker);
            },1);
          });

					return marker;
				});

		    new global.MarkerClusterer(this.map, markers, {
          imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
		    });

				if (!keepPreviousZoom && markers.length) {
          let bounds = new global.google.maps.LatLngBounds();
          markers.forEach(m => {
            bounds.extend(m.getPosition());
          });
          this.map.fitBounds(bounds);
				}
			} else {
				console.warn("no services returned");
			}
		}
	}


	render() {
		const {
			loaded,
			errorMessage
		} = this.state;

		/*
			Very small tweak on the render. toggling the visibility so we can run the L.map on didMount
		*/

		return (
			<div className="ServiceMap">
				{errorMessage && (
					<div className="Error">
						<em>{errorMessage}</em>
					</div>
				)}
				<div className="ServiceMapContainer">
					<div id="MapCanvas" style={{ width: "100%", position: "relative", height: 500, visibility: loaded ? "visible" : "hidden" }} />
					{!loaded && <div className="loader" />}
				</div>
			</div>
		);
	}
}

const mapState = ({ country, language }, p) => ({ country, language });

const mapDispatch = (d, p) => ({ goToService: (country, language, id) => d(push(º.goToService(country, language, id))) });

export default translate()(connect(mapState, mapDispatch)(ServiceMapDesktop));
