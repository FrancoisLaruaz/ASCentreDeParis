
var idFile = null;

// Fermeture de la modale d'administration
function fermerModalAdministration()
        {
            fermerModal();
            // refresh de la datatble
            refreshDataTable();
            // On remet l'ancienne class à la modale
            $('#modal-dialog').removeClass('MediumModal').addClass('LargeModal');
        }



// Fonction permettant d'ouvrir une pop-up de gestion d'une equipe
function ouvrirFormulaireCreation(_Action,_Controller,_idElement) 
    {
		var parametreURL='';
        if(_idElement!= undefined && _idElement>0)
			{
            parametreURL='?idElement=' + _idElement
            }
        $('#modal-dialog').removeClass('LargeModal').addClass('MediumModal');
        var url = '/' + _Controller + '/' + _Action + parametreURL;
        $('.modal-content').load(url);
        $('#modal-container').animate({
			scrollTop: 0
            }, 800);
        $('#modal-container').modal({ show: true });
    }


// Fermeture du formulaire après la création de l'élément
function checkIfCreationOK(isCreationOK)
{
    if(isCreationOK)
    {
        notificationOK("L'élément a été créé avec succès.");
        fermerModalAdministration();
    }
}




// Suppression d'un fichier du  formulaire
function supprimerFichier(element)
{
    var TypeDocument = $(element).attr('data_id');
    gererIndicFichiers(TypeDocument);
    $('#HiddenForIndicSuppressionFichier' + TypeDocument).val(true);
    clearInputFile(document.getElementById(TypeDocument));
    $("#Display" + TypeDocument).hide();
    $("#Delete" + TypeDocument).hide();
    $("#" + TypeDocument).show();
}

function gererIndicFichiers(TypeDocument)
{
    var ancienIndic = $('#HiddenForIndicFichier' + TypeDocument).val();
    if (ancienIndic != '' && ancienIndic != undefined && ancienIndic != null && ancienIndic > 0) {
        idFile = idFile - 1;
        $(".indic").each(function (x, y) {
            var indic = $(y).val();
            if (indic != '' && indic != null && indic>0)
            {
                if (indic > ancienIndic) {
                    $(y).val(indic - 1);
                }
            }
        });

    }
    $('#HiddenForIndicFichier' + TypeDocument).val(-1)
}



function clearInputFile(f){
    if(f.value){
        try{
            f.value = ''; //for IE11, latest Chrome/Firefox/Opera...
        }catch(err){ }
        if(f.value){ //for IE5 ~ IE10
            var form = document.createElement('form'),
                parentNode = f.parentNode, ref = f.nextSibling;
            form.appendChild(f);
            form.reset();
            parentNode.insertBefore(f,ref);
        }
    }
}


// Fonction exécutée au chargement d'un fichier
function inputFileOnChange(element)
{
    var type = $(element).attr('id');
    var ancienIndic = $('#HiddenForIndicFichier' + type).val();
    $("#Delete" + type).show();
    if (ancienIndic == '' || ancienIndic == undefined || ancienIndic == null || ancienIndic==-1) {
        idFile = idFile + 1;
        $('#HiddenForIndicFichier' + type).val(idFile);
    }
}


// Initialisation du formulaire avec fichiers obligatoires et optionnels
function initForm(controller, chapitre, Files) {
    idFile = 0;
    // Mise en place des events au changement de fichier
    $("input:file").on('change', function () {
        inputFileOnChange(this);
    });
	
	Files.forEach(function (type) {
		$("#HiddenForCheminFichier" + type).val($("#Display" + type).text());
    });

    // On masque les croix de suppresison lorsqu'aucun fichier n'est enregistré
    $(".actionButtonDelete").each(function (x, y) {
        var type = $(y).attr("data_id");
        if ($("#Display" + type).text() == null || $("#Display" + type).text() == '')
        {
            $(y).hide();
			$("#Display" + type).hide();
        }
        else
        {
           $("#"+type).hide();
        }
    });
	
	 $(".indicSuppression").each(function (x, y) {
         $(y).val(false);
    });
	
	$(".indic").each(function (x, y) {
		 $(y).val(-1);
    });

    // L'action submit du formulaire est désactivée pour être remplacée par une action customisée.
    $('#MyForm').submit(function (e) {
        e.preventDefault();
        gestionFormulaire(controller, chapitre, Files);
    });
}


// Donne le nombre d'occurence d'un caractère dans une chaine de caractères
function nbre_caracteres(lettre, mot) {
    mot2 = mot.split(lettre);
    nbre_de_fois_trouve = mot2.length - 1;
    return nbre_de_fois_trouve;
}

// Gestion d'un formulaire
function gestionFormulaire(controller, chapitre, Files) {
    var frmData = new FormData();
    var formatFichiersOk = true;
    // Ajouts des champs du formulaire
    $(".form").each(function (x, y) {
        frmData.append($(y).attr("name"), $(y).val());
    });

    // Ajout des fichiers
    Files.forEach(function (type) {
        formatFichiersOk = true;
        var filebase = $("#" + type).get(0);
        if (filebase.files != null && filebase.files.length > 0) {
            var file = filebase.files[0];
            frmData.append(file.name, file);
            if (nbre_caracteres('.', file.name) >= 2) {
                formatFichiersOk = false;
                notificationKO('Erreur : Le fichier de type ' + type + ' possède un point dans son nom (' + file.name + ')');
            }
            else {
                // Si un fichier a été ajouté, on va réfifier qu'il correspond bien à l'extension demandée
                var extenstionsLists = $("#" + type).attr('accept');
                formatFichiersOk = true;
                if (extenstionsLists != '' && extenstionsLists != undefined && extenstionsLists != null) {
                    formatFichiersOk = false;
                    var tabExtensions = extenstionsLists.split(',');
                    var fileName = file.name.toUpperCase();
                    tabExtensions.forEach(function (extension) {
                        var ext = extension.toUpperCase().trim();
                        if (fileName.indexOf(ext) != -1) {
                            formatFichiersOk = true;
                        }
                    });
                }
                if (formatFichiersOk == false) {
                    notificationKO('Erreur : Le fichier de type ' + type + ' ne possède pas une des extensions requises (' + extenstionsLists + ')');
                }
            }
        }
    });
    if (formatFichiersOk) {
        $.ajax({
            url: '/' + controller + '/Gerer' + chapitre + 'Post',
            type: 'POST',
            data: frmData,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data != undefined) {
                    // Refresh de la page mère
                    btnRecherche_onclick();
                    // On met à jour la modale
                    $('#form-container').html(data);

                    // On scroll en haut afin que l'utilisateur puisse voir le résultat de son action
                    $('#modal-container').animate({
                        scrollTop: 0
                    }, 800);
                }
                else {
                    notificationKO('Erreur lors de la validation du formulaire.');
                }
            },
            error: function (xhr, status, error) {
                var err = xhr.responseText;
                notificationKO('Erreur lors de la validation du formulaire.' + err);
            }
        });
    }
}