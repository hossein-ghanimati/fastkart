let mapView = {x:36.7240708256239 , y:48.520460217540915}

const mapMoveHandler = (map, mapMarker) => {
  const center = map.getSize().divideBy(2);
  const targetPoint = map.containerPointToLayerPoint(center)
  const targetLatLng = map.layerPointToLatLng(targetPoint)

  mapMarker.setLatLng(targetLatLng)
  mapView.x = targetLatLng.lat;
  mapView.y = targetLatLng.lng
}

export {
  mapMoveHandler
}