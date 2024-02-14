  var myHeaders = new Headers(); // Currently empty
  myHeaders.append('Access-Control-Allow-Origin', '*');

  // View1
  document.addEventListener("adobe_dc_view_sdk.ready", function () {
    
    var adobeDCView = new AdobeDC.View({
      clientId: "c5d2145309384f8f908c8aa0332e2073",
      divId: "adobe-dc-view",
    });
    adobeDCView.previewFile(
      {

        content: { location: { url: "./pdf/gaceta.pdf", headers: [{'Access-Control-Allow-Origin': "*"}]}},
        metaData: { fileName: "gaceta.pdf" },
      },
      { embedMode: "SIZED_CONTAINER" }
      );
      
      
    });
// view2 



document.addEventListener("adobe_dc_view_sdk.ready", function () {
  var adobeDCView = new AdobeDC.View({
    clientId: "c5d2145309384f8f908c8aa0332e2073",
    divId: "adobe-dc-view2",
  });
  adobeDCView.previewFile(
    {
      content: { location: { url: "./pdf/aviso.pdf", headers: [{'Access-Control-Allow-Origin': "*"}]}},
      metaData: { fileName: "Aviso.pdf" },
    },
    { embedMode: "IN_LINE" }
    );
});


//view 3
document.addEventListener("adobe_dc_view_sdk.ready", function () {
      
  var adobeDCView = new AdobeDC.View({
    clientId: "c5d2145309384f8f908c8aa0332e2073",
    divId: "adobe-dc-view3",
  });
  adobeDCView.previewFile(
    {
      content: { location: { url: "./pdf/vehiculodc.pdf", headers: [{'Access-Control-Allow-Origin': "*"}]}},
      metaData: { fileName: "vehiculo-doble-cero.pdf" },
    },
    { embedMode: "SIZED_CONTAINER" }
    );
    
  });
  document.addEventListener("adobe_dc_view_sdk.ready", function () {
    
    var adobeDCView = new AdobeDC.View({
    clientId: "c5d2145309384f8f908c8aa0332e2073",
    divId: "adobe-dc-view4",
  });
  adobeDCView.previewFile(
    {
      content: { location: { url: "./pdf/vehiculoexento.pdf", headers: [{'Access-Control-Allow-Origin': "*"}]} },
      metaData: { fileName: "vehiculoexento.pdf" },
    },
    { embedMode: "SIZED_CONTAINER" }
    );
    

});
