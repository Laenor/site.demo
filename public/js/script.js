var url = "http://api.demo:8080";

$(document).ready(function() {
            $.ajax({
                url: url,
                method: "POST",
                dataType: 'json',
                data: {data_action: 'fetch_all'},
                success: function (data) {
                    $.each(data, function(i, values){
                           console.log(data[i]['budget_demande']);
                        $('#content-wrap').append(
                            "<article>" +
                                "<div class='titre'>" +
                                    "<p>"+data[i]['titre_demande']+"</p>" +
                                    "<p>"+data[i]['budget_demande']+"&euro;</p>" +
                                    "<p>"+data[i]['date_demande']+"</p>" +
                                "</div>" +
                                "<p>"+data[i]['description_demande']+"</p>" +
                            "</article>");
                    });
                },
                error:function () {
                    alert("echec");
                }
            });

    }
);