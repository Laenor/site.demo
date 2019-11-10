var url = "http://api.demo:8080";

$(document).ready(function() {
            $.ajax({
                url: url,
                method: "POST",
                dataType: 'json',
                data: {data_action: 'fetch_all'},
                success: function (data) {
                    $.each(data, function(i){
                        $('#content').append(
                            "<article>" +
                                "<div class='titre'>" +
                                    "<p>"+data[i]['titre_demande']+"</p>" +
                                    "<p>"+data[i]['budget_demande']+"&euro;</p>" +
                                    "<p>"+data[i]['date_demande']+"</p>" +
                                "</div>" +
                                "<p>"+data[i]['description_demande']+"</p>" +
                            "</article>"
                        );
                    });
                    $("article").slice(6).hide();
                    $(function() {
                        $('#pagination').pagination({
                            items: data.length,
                            itemsOnPage: 6,
                            cssStyle: 'compact-theme',
                            onPageClick: function(pageNumber) {
                                $("article").hide().slice((pageNumber-1)*6,pageNumber*6).show();
                            }
                        });
                    });
                },
                error:function () {
                    alert("echec");
                }
            });
    }
);