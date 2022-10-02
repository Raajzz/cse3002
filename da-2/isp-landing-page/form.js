const title = document.getElementById("title")
const params = new URLSearchParams(window.location.search).get('plan');
title.innerHTML += `${params[0].toUpperCase() + params.substring(1, params.length)}`