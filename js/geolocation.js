let options;
function success(position){
    const long = position.coords.longitude;
    const lat = position.coords.latitude;

    const url = `https://maps.google.com/maps?q=${lat},${long}&t=&z=10&ie=UTF8&iwloc=&output=embed`;

    window.open(url, 'map');
}
function error(err){
    console.error(`ERROR(${err.code}): ${err.message}`);

}

navigator.geolocation.getCurrentPosition(success, error); 

/*
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
    console.log(navigator.geolocation)
}

function showLocation(position){

    const long = position.coords.longitude;
    const lat = position.coords.latitude;

    const url = `https://maps.google.com/maps?q=${lat},${long}&t=&z=10&ie=UTF8&iwloc=&output=embed`;

    window.open(url, 'map');

}*/
