function userInformationHTML(user) {
    return `<h2>${user.name}<span calss="small-name">
    (@<a href= "${user.html_url}" target="_blank">${user.login}</a></span></h2>
    <div class="gh-content">
        <div class="gh=avatar"><a href="${user.html_url}" target="_blank">
        <img src="${user.avartr_url}" width="80" height="80" alt="${user.login}"/>
        </a></div>
        <p>Followers: ${user.followers} - Following: ${user.following} <br> Repos: ${users.public_repo}</p>
    </div>`;
}

function fetchGitHubInformation(event) {
    var username = $("#gh-username").val();
    if(!username) {
    $("#gh-user-data").html(`<h2>Please enter GitHUb Username.</h2>`);
    return
    }

    $("#hu-user-data").html('<div class="loader><img src="assets/css/loader.gif" alt"loader"/></div>');

    $.when($.getJSON(`https://api.github.com/users/${username}`))
    .then (function(response) {
        var userData = response;
        $("#gh-user-data").html(userInformationHTML(userData));
    }, function(errorResponse) {
        if(errorResponse.status === 404) {
            $("#gh-user-data").html(`<h2>No info found for user ${username}</h2>`);
        } else {
            console.log(errorResponse);
            $("#gh-user-data").html(`<h2> Error: ${errorResponse.responseJSON.message}</h2>`)
        }
    })
}
})