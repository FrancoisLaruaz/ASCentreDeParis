$(document).ready(function () {

    adaptScreen();
    var tailleEcran = getWindowWidth();

    if (tailleEcran==undefined || tailleEcran < 700)
    {
        $('#HiddenIsSmallScreen').val(true);
    }
    else
    {
        $('#HiddenIsSmallScreen').val(false);
    }


    window.onresize = function(event) {
        adaptScreen();
    };

    //Désactivation des listes déroulantes qui n'ont qu'une option sélectionnable
    $("select").each(function () {
        if ($(this).find("option").length < 2) {
            $(this).prop('disabled', true);
        }
    });

    if ($('#back-to-top') != undefined) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    }

    initVideoLoad();

});

function initVideoLoad(){

    // Loader pour les vidéos
    $('.videoToLoad').on('loadstart', function (event) {
        $(this).attr('poster', '/Ressources/Images/loading.gif');
    });
    $('.videoToLoad').on('canplay', function (event) {
        $(this).attr('poster', '');
    });
    }

function enableResultat(enable) {
    
        if (enable) {
            $("#VueRecherche").removeClass("disabled");
            $('#loading').hide();
        }
        else {
            $("#VueRecherche").addClass("disabled");
            $('#loading').show();
        }
    
    }


     // Gestion de la pagination de la DataTable
    function setPagination(infos,nbPagesTotal) {
        if (total < infos.length || infos.length < 0)
            $('#table_id_paginate').hide();
        else {
            $('ul.pagination li').remove();
            if (infos.page > 0) {
                $('ul.pagination').append($('<li class="first"><a href="#"><i class="glyphicon glyphicon-fast-backward"></i></a></li>'));
                $('ul.pagination').append($('<li class="prev"><a href="#"><i class="glyphicon glyphicon-step-backward"></i></a></li>'));
            }

            var start = infos.page < 3 ? 0 : infos.page - 2,
                end = Math.min(nbPagesTotal - 1, infos.page < 3 ? 4 : infos.page + 2);
            for (var i = start;i <= end; i++) {
                $('ul.pagination').append($('<li' + (i == infos.page ? ' class="active"' : '') + '><a href="#">' + (i + 1) + '</a></li>'));
            }

            if (infos.page < nbPagesTotal - 1) {
                $('ul.pagination').append($('<li class="next"><a href="#"><i class="glyphicon glyphicon-step-forward"></i></a></li>'));
                $('ul.pagination').append($('<li class="last"><a href="#"><i class="glyphicon glyphicon-fast-forward"></i></a></li>'));
            }
            $('#table_id_paginate').show();
        }
    }

    // fonction permettant de mettre des séparateurs de milliers
    function lisibilite_nombre(nbr)
{
        var nombre = ''+nbr;
        var retour = '';
        var count=0;
        for(var i=nombre.length-1 ; i>=0 ; i--)
        {
            if(count!=0 && count % 3 == 0)
                retour = nombre[i]+' '+retour ;
            else
                retour = nombre[i]+retour ;
            count++;
        }
        //alert('nb : '+nbr+' => '+retour);
        return retour;
}




function previous(){
        if($('.active').prev('.page_link').length) go_to_page(current_page - 1);
    }

function next(){
        if($('.active').next('.page_link').length) go_to_page(current_page + 1);
    }

function go_to_page(page_num){
      current_page = page_num;
      start_from = current_page * show_per_page;
      end_on = start_from + show_per_page;
      set_display();
      $('.active').removeClass('active');
      $('#id' + page_num).addClass('active');
    }  

// Fonction permettant de fermer la modale
function fermerModal()
                 {
                 $('#modal-container').hide();
                 $('.modal-backdrop').hide();
                }




// Message à l'utilisateur lorsqu'une action est correctement réalisée
function notificationOK(message)
                 {
                 toastr.options = {
                      "closeButton": false,
                      "debug": false,
                      "newestOnTop": false,
                      "progressBar": false,
                      "positionClass": "toast-top-right",
                      "preventDuplicates": false,
                      "onclick": null,
                      "showDuration": "300",
                      "hideDuration": "1000",
                      "timeOut": "7000",
                      "extendedTimeOut": "1000",
                      "showEasing": "swing",
                      "hideEasing": "linear",
                      "showMethod": "fadeIn",
                      "hideMethod": "fadeOut"
                    }
                 toastr.success(message) 
                }

// Message à l'utilisateur lorsqu'une action n'est pas correctement réalisée
function notificationKO(message)
                 {
                 toastr.options = {
                      "closeButton": false,
                      "debug": false,
                      "newestOnTop": false,
                      "progressBar": false,
                      "positionClass": "toast-top-right",
                      "preventDuplicates": false,
                      "onclick": null,
                      "showDuration": "300",
                      "hideDuration": "1000",
                      "timeOut": "20000",
                      "extendedTimeOut": "1000",
                      "showEasing": "swing",
                      "hideEasing": "linear",
                      "showMethod": "fadeIn",
                      "hideMethod": "fadeOut"
                    }
                 toastr.error(message) 
                }


// Fonction permettant de supprimer un élément
function supprimerElement(_Action,_Controller,_idElement,_Libelle) 
    {
    var url='/'+_Controller+'/'+_Action
    var message="Confirmez-vous la suppression de l'élément ayant pour id "+_idElement;
    if(_Libelle!=undefined  &&  _Libelle!='')
            {
             message=message+" et pour libellé '"+_Libelle+"'";
            }
     var confirmation = confirm(message+" ?");
    
     if(confirmation)
            {
            $.ajax({
                   "url": url,
                   "type": "POST",
                    dataType: "json",
                    cache: false,
                    data: { idElement: _idElement },
                    success: function (Data) 
                                   {
                                    if (Data.Retour) 
                                       {
                                       //total -= 1;
                                        refreshDataTable();
                                        notificationOK("L'élément a été supprimé avec succès.");
                                       } 
                                   else 
                                        {
                                        notificationKO("Erreur lors de la suppression de l'élément. "+Data.Message);
                                        }
                                    },
                    error: function (xhr, status, error) {
                        var ex = xhr.responseText;
                        notificationKO('Erreur lors de la suppression du document.' + ex);
                    }
                });
           }
    }

// Fonction permettant de raffraichir une datatable
function refreshDataTable()
{
    loadTable();
}


// Fonction permettant de récupérer la largeur de l'écran du client
function getWindowWidth() {
    var windowWidth = 0;
    if (typeof (window.innerWidth) == 'number') {
        windowWidth = window.innerWidth;
    } else {
        if (document.documentElement && document.documentElement.clientWidth) {
            windowWidth = document.documentElement.clientWidth;
        } else {
            if (document.body && document.body.clientWidth) {
                windowWidth = document.body.clientWidth;
            }
        }
    }
    return windowWidth;
}


// Si la taille de l'écran du client est trop petite, on masque les icones.
function  adaptScreen()
{
    var tailleEcran = getWindowWidth();
    if (tailleEcran==undefined || tailleEcran < 700)
    {
        $('#divLogoMobile').show();
        $('#titreSite').css('text-align','center');
        $('#titreSite').css('font-size','22px');
        $('#titreSite').css('vertical-align','text-top');
        $('.showBigScreen').hide();
        $('#bdflogo').css('max-height','85px');
        $('#divTitreSite').removeClass('col-xs-8').addClass('col-xs-9');
        $('#divLogo').removeClass('col-xs-2').addClass('col-xs-3');
    }
    else
    {
        $('#divLogoMobile').hide();
        $('#titreSite').css('text-align','center');
        $('#titreSite').css('font-size','38px');
        $('.showBigScreen').show();
        $('#bdflogo').css('max-height','150px');
        $('#divTitreSite').removeClass('col-xs-9').addClass('col-xs-8');
        $('#divLogo').removeClass('col-xs-3').addClass('col-xs-2');
    }


   
}