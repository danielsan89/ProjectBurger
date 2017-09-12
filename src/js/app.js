$(() => {
  const $mapDiv = $('#container1');
  if($mapDiv.length) {
    $mapDiv.datamaps({
      scope: 'world',
      projection: 'mercator',
      height: 500,
      fills: {
        defaultFill: 'grey'
      },
      done(datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', (e) => {
          window.location.assign(`/hamburgers?country=${e.properties.name}`);
        });
      }
    });
  }
});
