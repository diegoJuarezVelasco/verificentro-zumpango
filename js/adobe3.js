  var myHeaders = new Headers(); // Currently empty
  myHeaders.append('Access-Control-Allow-Origin', '*');

  // View1
  document.addEventListener("adobe_dc_view_sdk.ready", function () {
    
    var adobeDCView = new AdobeDC.View({
      clientId: "6f8d56f7b3154dcf99f211f51fbf2b79",
      divId: "adobe-dc-view",
    });
    adobeDCView.previewFile(
      {

        content: { location: { url: "https://tu990.mx/pdf/gaceta.pdf", headers: [{'Access-Control-Allow-Origin': "*"}]}},
        metaData: { fileName: "gaceta.pdf" },
      },
      { embedMode: "SIZED_CONTAINER" }
      );
      
      
    });
// view2 



document.addEventListener("adobe_dc_view_sdk.ready", function () {
  var adobeDCView = new AdobeDC.View({
    clientId: "6f8d56f7b3154dcf99f211f51fbf2b79",
    divId: "adobe-dc-view2",
  });
  adobeDCView.previewFile(
    {
      content: { location: { url: "https://tu990.mx/pdf/aviso.pdf", headers: [{'Access-Control-Allow-Origin': "*"}]}},
      metaData: { fileName: "Aviso.pdf" },
    },
    { embedMode: "IN_LINE" }
    );
});


//view 3
document.addEventListener("adobe_dc_view_sdk.ready", function () {
      
  var adobeDCView = new AdobeDC.View({
    clientId: "6f8d56f7b3154dcf99f211f51fbf2b79",
    divId: "adobe-dc-view3",
  });
  adobeDCView.previewFile(
    {
      content: { location: { url: "https://tu990.mx/pdf/vehiculodc.pdf", headers: [{'Access-Control-Allow-Origin': "*"}]}},
      metaData: { fileName: "vehiculo-doble-cero.pdf" },
    },
    { embedMode: "SIZED_CONTAINER" }
    );
    
  });
  document.addEventListener("adobe_dc_view_sdk.ready", function () {
    
    var adobeDCView = new AdobeDC.View({
    clientId: "6f8d56f7b3154dcf99f211f51fbf2b79",
    divId: "adobe-dc-view4",
  });
  adobeDCView.previewFile(
    {
      content: { location: { url: "https://tu990.mx/pdf/vehiculoexento.pdf", headers: [{'Access-Control-Allow-Origin': "*"}]} },
      metaData: { fileName: "vehiculoexento.pdf" },
    },
    { embedMode: "SIZED_CONTAINER" }
    );
    

});
