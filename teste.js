// GET REQUEST
function getRequest(urlRequestGet) {
    var settings = {
        url: urlRequestGet,
        method: "GET",
        timeout: 0,
        headers: {
            Authorization: "Bearer " + token,
        },
    };

    $.ajax(settings)
        .done(function (response) {

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            arrayError.push({
                url: urlRequestGet,
                error: jqXHR.status
            });
        });
}
// GET REQUEST

// POST REQUEST
function postRequest(urlRequestPost, body) {
    var settings = {
        url: urlRequestPost,
        method: "POST",
        timeout: 0,
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
        data: JSON.stringify(body),
    };

    $.ajax(settings)
        .done(function (response) {

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            arrayError.push({
                url: urlRequestPost,
                error: jqXHR.status
            });
        });
}
// POST REQUEST

//  PUT REQUEST
function putRequest(urlRequestPut, body) {
    var settings = {
        url: urlRequestPut,
        method: "PUT",
        timeout: 0,
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
        data: JSON.stringify(body),
    };
    $.ajax(settings)
        .done(function (response) {

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            arrayError.push({
                url: urlRequestPut,
                error: jqXHR.status
            });
        });
}
// PUT REQUEST

// DELETE REQUEST
function deleteRequest(urlRequestDelete) {
    var settings = {
        url: urlRequestDelete,
        method: "DELETE",
        timeout: 0,
        headers: {
            Authorization: "Bearer " + token,
        },
    };
    $.ajax(settings)
        .done(function (response) {

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            arrayError.push({
                url: urlRequestDelete,
                error: jqXHR.status
            });
        });

}
  // DELETE REQUEST