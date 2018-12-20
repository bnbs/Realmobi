function initMap() {

    var realmobi = {
        lat: -25.477827,
        lng: -49.245153
    };

    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 17,
            center: realmobi
        });

    var marker = new google.maps.Marker({
        position: realmobi,
        map: map
    });

    var infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div><strong>' + 'RealMobi' + '</strong><br>' +
          'R. Carlos de Laet, 1664 - Hauer, Curitiba - PR, 81610-050' + '</div>');
        infowindow.open(map, this);
    });
}