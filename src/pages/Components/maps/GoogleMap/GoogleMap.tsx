import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Breadcrumb from 'Common/BreadCrumb';

import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: 37.778519, lng: -122.40564
};

const second = {
  lat: 54.5260, lng: 15.2551
}

const third = {
  lat: 8.7832, lng: 34.5085
}

const forth = {
  lat: 19.0760, lng: 72.8777
}

const GoogleMaps = (props: any) => {

  document.title = " Google Maps | Steex Admin & Dashboard Template";

  const selectedPlace: any = {}

  const [selected, setSelected] = useState<any>(null);

  const onSelect = (marker: any) => {
    setSelected(marker);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Maps" pageTitle="Google Maps" />
          <Row>
            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Markers</h4>
                </Card.Header>

                <Card.Body>
                  <div id="gmaps-markers" className="gmaps" style={{ position: "relative" }}>
                    <LoadScript googleMapsApiKey="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE">
                      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
                        <Marker position={center} onClick={() => onSelect(center)} />
                        {selected && (
                          <InfoWindow
                            position={selected}
                            onCloseClick={() => setSelected(null)}
                          >
                            <div>
                              <h1>{selectedPlace.name}</h1>
                            </div>
                          </InfoWindow>
                        )}
                      </GoogleMap>
                    </LoadScript>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Overlays</h4>
                </Card.Header>

                <Card.Body>
                  <div id="gmaps-overlay" className="gmaps" style={{ position: "relative" }}>
                    <LoadScript googleMapsApiKey="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE">
                      <GoogleMap mapContainerStyle={containerStyle} center={second} zoom={14}>
                        <Marker position={second} onClick={() => onSelect(second)} />
                        {selected && (
                          <InfoWindow
                            position={selected}
                            onCloseClick={() => setSelected(null)}
                          >
                            <div>
                              <h1>{selectedPlace.name}</h1>
                            </div>
                          </InfoWindow>
                        )}
                      </GoogleMap>
                    </LoadScript>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Street View Panoramas</h4>
                </Card.Header>

                <Card.Body>
                  <div id="panorama" className="gmaps-panaroma" style={{ position: "relative" }}>
                    <LoadScript googleMapsApiKey="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE">
                      <GoogleMap mapContainerStyle={containerStyle} center={third} zoom={14}>
                        <Marker position={third} onClick={() => onSelect(third)} />
                        {selected && (
                          <InfoWindow
                            position={selected}
                            onCloseClick={() => setSelected(null)}
                          >
                            <div>
                              <h1>{selectedPlace.name}</h1>
                            </div>
                          </InfoWindow>
                        )}
                      </GoogleMap>
                    </LoadScript>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Map Types</h4>
                </Card.Header>

                <Card.Body>
                  <div className="card-body">
                    <div id="gmaps-types" className="gmaps" style={{ position: "relative" }}>
                    <LoadScript googleMapsApiKey="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE">
                      <GoogleMap mapContainerStyle={containerStyle} center={forth} zoom={14}>
                        <Marker position={forth} onClick={() => onSelect(forth)} />
                        {selected && (
                          <InfoWindow
                            position={selected}
                            onCloseClick={() => setSelected(null)}
                          >
                            <div>
                              <h1>{selectedPlace.name}</h1>
                            </div>
                          </InfoWindow>
                        )}
                      </GoogleMap>
                    </LoadScript>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container >
      </div >
    </React.Fragment >
  )
}


export default GoogleMaps;
