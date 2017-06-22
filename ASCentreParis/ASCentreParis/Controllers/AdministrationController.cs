using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Business;
using Models;
using DataAccess;
using System.IO;


namespace ASCentreParis.Controllers
{
	
    public class AdministrationController : BaseController
    {
		#region Stats
		[AuthorizeUser(Profiles =Commons.Const.ProfilAdministrateur)]
		//[Authorize(Roles = "Administrateur")]
		/// <summary>
		/// Affichers the stats.
		/// </summary>
		/// <returns>The stats.</returns>
		public ActionResult AfficherStats()
        {
			Stat model = new Stat();
			try
			{
				using(StatDAL db=new StatDAL())
				{
					Business.StatBLL.ajouterStat("PageGestion");
					model = db.getTotalStat();
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

            return View ("~/Views/Administration/Stats.cshtml",model);
        }

				/// <summary>
		/// Recherches the stats ajax.
		/// </summary>
		/// <returns>The stats ajax.</returns>
		/// <param name="draw">Draw.</param>
		/// <param name="start">Start.</param>
		/// <param name="length">Length.</param>
		/// <param name="filtres">Filtres.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult RechercheStatsAjax(int draw, int start, int length, Filtre filtres)
		{


			List<Stat> resultat = new List<Stat>();

			using (StatDAL db = new StatDAL())
			{
				resultat = db.getstats();
			}


			// Filtrage textuelle
			string filtreTextuel = filtres._search;

			if (!String.IsNullOrEmpty(filtreTextuel))
			{
				List<Stat> resultatsFiltres = new List<Stat>();
				foreach (var r in resultat)
				{
					if (r.Mois.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.PageAcceuil.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.PageEquipe.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.PageContact.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.PageDocument.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.PageClub.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Total.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.PageGestion.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()))
						resultatsFiltres.Add(r);
				}

				resultat = resultatsFiltres;
			}

			// Gestion du tri de la table de résultat
			switch (filtres._sortColumn)
			{
				case 0: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Mois == null ? "" : e.Mois.Trim())) : resultat.OrderByDescending(e => (e.Mois == null ? "" : e.Mois.Trim()))).ToList(); break;
				case 1: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.PageAcceuil) : resultat.OrderByDescending(e => e.PageAcceuil)).ToList(); break;
				case 2: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.PageClub) : resultat.OrderByDescending(e => e.PageClub)).ToList(); break;
				case 3: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.PageContact) : resultat.OrderByDescending(e => e.PageContact)).ToList(); break;
				case 4: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.PageEquipe) : resultat.OrderByDescending(e => e.PageEquipe)).ToList(); break;
				case 6: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.PageDocument) : resultat.OrderByDescending(e => e.PageDocument)).ToList(); break;
				case 7: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.PageGestion) : resultat.OrderByDescending(e => e.PageGestion)).ToList(); break;
				case 8: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Total) : resultat.OrderByDescending(e => e.Total)).ToList(); break;
			}

			if (resultat == null)
				return null;

			if (length == -1)
				length = resultat.Count;

			DataTableDataStat dataTableData = new DataTableDataStat();

			// get just one page of data
			if (resultat.Count < length)
				dataTableData.data = resultat;
			else
			{
				if (start > resultat.Count)
					dataTableData.data = new List<Stat>();
				else
					dataTableData.data = resultat.GetRange(start, Math.Min(length, resultat.Count - start));
			}
			dataTableData.NbResultatTotal = resultat.Count;
			dataTableData.draw = draw;

			var jsonResult = Json(dataTableData, JsonRequestBehavior.AllowGet);
			jsonResult.MaxJsonLength = int.MaxValue;

			return jsonResult;
		}



		#endregion

		#region Logs
		/// <summary>
		/// Affichers the logs.
		/// </summary>
		/// <returns>The logs.</returns>
		public ActionResult AfficherLogs()
		{
			ObjGestionLogs model = new ObjGestionLogs();
						try
			{
				Business.StatBLL.ajouterStat("PageGestion");
				using (DBConnect db=new DBConnect())
					{
					model.infoConnectionBBD = db.checkConnection();
					}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

			return View("~/Views/Administration/Logs.cshtml",model);
		}

				/// <summary>
		/// Recherches the logs ajax.
		/// </summary>
		/// <returns>The logs ajax.</returns>
		/// <param name="draw">Draw.</param>
		/// <param name="start">Start.</param>
		/// <param name="length">Length.</param>
		/// <param name="filtres">Filtres.</param>
		[HttpPost]
		public ActionResult RechercheLogsAjax(int draw, int start, int length, Filtre filtres)
		{


			List<Log4Net> resultat = new List<Log4Net>();

			using (Log4NetDAL db = new Log4NetDAL())
			{
				resultat = db.getLogs();
			}


			// Filtrage textuelle
			string filtreTextuel = filtres._search;

			if (!String.IsNullOrEmpty(filtreTextuel))
			{
				List<Log4Net> resultatsFiltres = new List<Log4Net>();
				foreach (var r in resultat)
				{
					if (r.Id.ToString().Contains(filtreTextuel.ToLower().Trim()) ||
						r.strDate.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Thread.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Exception.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Level.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Logger.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Message.ToLower().Contains(filtreTextuel.ToLower().Trim()))
						resultatsFiltres.Add(r);
				}

				resultat = resultatsFiltres;
			}

			// Gestion du tri de la table de résultat
			switch (filtres._sortColumn)
			{
				case 0: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 1: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Date) : resultat.OrderByDescending(e => e.Date)).ToList(); break;
				case 2: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Thread) : resultat.OrderByDescending(e => e.Thread)).ToList(); break;
				case 3: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Level) : resultat.OrderByDescending(e => e.Level)).ToList(); break;
				case 4: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Logger == null ? "" : e.Logger.Trim())) : resultat.OrderByDescending(e => (e.Logger == null ? "" : e.Logger.Trim()))).ToList(); break;
				case 5: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Message == null ? "" : e.Message.Trim())) : resultat.OrderByDescending(e => (e.Message == null ? "" : e.Message.Trim()))).ToList(); break;
				case 6: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Exception == null ? "" : e.Exception.Trim())) : resultat.OrderByDescending(e => (e.Exception == null ? "" : e.Exception.Trim()))).ToList(); break;
			}

			if (resultat == null)
				return null;

			if (length == -1)
				length = resultat.Count;

			DataTableDataLog dataTableData = new DataTableDataLog();

			// get just one page of data
			if (resultat.Count < length)
				dataTableData.data = resultat;
			else
			{
				if (start > resultat.Count)
					dataTableData.data = new List<Log4Net>();
				else
					dataTableData.data = resultat.GetRange(start, Math.Min(length, resultat.Count - start));
			}
			dataTableData.NbResultatTotal = resultat.Count;
			dataTableData.draw = draw;

			var jsonResult = Json(dataTableData, JsonRequestBehavior.AllowGet);
			jsonResult.MaxJsonLength = int.MaxValue;

			return jsonResult;
		}

		#endregion

		#region Document



		/// <summary>
		/// Suppression d'un document
		/// </summary>
		/// <returns>The document.</returns>
		/// <param name="idElement">Identifier element.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult SupprimerDocument(string idElement)
		{
			bool _success = true;
			string _message = "";
			try
			{
				// On commence par supprimer les commentaires rattachés à l'élément
				using(CommentaireDAL DalCommentaire = new CommentaireDAL())
				{
					_success = DalCommentaire.deleteCommentaireByIdDocument(Convert.ToInt32(idElement));
				}

				using (DocumentDAL db = new DocumentDAL())
				{
					// On commence par récupérer les informations sur l'équipe
					Document objet= db.getDocumentById(Convert.ToInt32(idElement));
					_success = _success && Commons.Utils.deleteDocument(objet.CheminDocument);

					// On supprime  le document en base
					_success = _success && db.deleteDocument(Convert.ToInt32(idElement));
				}


			}
			catch (System.IO.IOException e)
			{
				_success = false;
				_message = _message + e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), " sidElement=" + idElement.ToString() + " : " + e.ToString());

			}
			return Json(new { Retour = _success, Message = _message });
		}

        /// <summary>
        /// création ou modification d'un document
        /// </summary>
        /// <returns>The document.</returns>
        /// <param name="idElement">Identifier element.</param>
        [AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
        public ActionResult GererDocument(int? idElement)
        {
            ObjGestionDocuments model = new ObjGestionDocuments();
            try
            {
                Business.StatBLL.ajouterStat("PageGestion");
                // si l'id est null il s'agit d'une création , autrement modification
                if (idElement != null)
                {

                    model.ModePage = Commons.Const.Modification;
                    model.TitrePage = "Modifier un document";
                    model.LibelleBoutonSauvegarde = "Modifier";
                    using (DocumentDAL db = new DocumentDAL())
                    {
                        model.Document = db.getDocumentById(idElement.Value);
                        model.lCategoriesDocument = db.getListeCategoriesDocumentForDDL();
                    }

                }
                else
                {
                    using (DocumentDAL db = new DocumentDAL())
                    {
                        model.lCategoriesDocument = db.getListeCategoriesDocumentForDDL();
                    }
                    model.ModePage = Commons.Const.Creation;
                    model.Document.Ordre = 9999;
                    model.TitrePage = "Créer un document";
                    model.LibelleBoutonSauvegarde = "Créer";
                }

                if (!String.IsNullOrEmpty(model.Document.CheminDocument))
                {
                    model.IndicFichierDocument = 1;
                }
                else
                {
                    model.IndicFichierDocument = -1;
                }

                if (model.Document.CheminDocument == null)
                    model.Document.CheminDocument = "";

            }
            catch (Exception e)
            {
                string stridElement = "N/A";
                if (idElement != null)
                {
                    stridElement = idElement.ToString();
                }

                Commons.Logger.genererErreur(typeof(AdministrationController), "stridDocument = " + stridElement + " : " + e.ToString());
                //return View("~/Views/Shared/Error.cshtml");
            }
            return PartialView("~/Views/Administration/GererDocument.cshtml", model);
        }



        /// <summary>
        /// gestion de le document lors de la sauvegarde
        /// </summary>
        /// <returns>The actualites post.</returns>
        /// <param name="model">Model.</param>
        [HttpPost]
        [AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
        public ActionResult GererDocumentPost(ObjGestionDocuments model)
        {

            model.isCreationOK = false;
            var Files = Request.Files;

            try
            {
                if (model.Document.Id == null || model.Document.Id == 0)
                {
                    model.ModePage = Commons.Const.Creation;
                    model.TitrePage = "Créer un document";
                    model.LibelleBoutonSauvegarde = "Créer";
                }
                else
                {
                    model.ModePage = Commons.Const.Modification;
                    model.TitrePage = "Modifier un document";
                    model.LibelleBoutonSauvegarde = "Modifier";
                }

                model.messageOK = null;
                model.messageKO = "Erreur lors de la création de le document : ";

                using (DocumentDAL db = new DocumentDAL())
                {
                    model.lCategoriesDocument = db.getListeCategoriesDocumentForDDL();
                    if (ModelState.IsValid)
                    {
                        bool success = false;


                        if (model.Document.Titre == null)
                            model.Document.Titre = "";
                        if (model.Document.Texte == null)
                            model.Document.Texte = "";

                        // Refresh de la liste de valeurs



                        if (model.Document.Id > 0 && Request.Files != null && Request.Files.Count > 0)
                        {
                            Document objet = db.getDocumentById(model.Document.Id);
                            // Suppression de l'ancien document
                            string pathTodelete = objet.CheminDocument;
                            Commons.Utils.deleteDocument(pathTodelete);
                        }


                        if (Request.Files != null && Request.Files.Count > 0)
                        {
                            var file = Files[0];
                            string fileName = "Document";
                            string extensionFichier = Commons.Utils.getExtensionDocument(file.FileName);
                            model.Document.NomFichierUpload = file.FileName;
                            // Sauvegarde du fichier dans le répertoire
                            if (model.Document.Id <= 0)
                            {
                                fileName = fileName + db.getNexIdDocument();
                            }
                            else
                            {
                                fileName = fileName + model.Document.Id;
                            }
                            fileName = fileName + "." + extensionFichier;
                            string pathToSave = Path.Combine(Server.MapPath(Commons.Const.UploadDocumentPath), fileName);
                            file.SaveAs(pathToSave);

                            string fileNameBDD = Commons.Const.UploadDocumentPath + "/" + fileName;
                            model.Document.CheminDocument = fileNameBDD;
                        }

                        if (model.Document.CheminDocument == null)
                            model.Document.CheminDocument = "";
                        else if (model.Document.CheminDocument != "" && !model.Document.CheminDocument.Contains(Commons.Const.UploadDocumentPath))
                            model.Document.CheminDocument = Commons.Const.UploadDocumentPath + "/" + model.Document.CheminDocument;

                        // Création du document
                        if (model.ModePage == Commons.Const.Creation)
                        {
                            model.Document.DateCreation = DateTime.Now;
                            model.Document.Id = db.insertDocument(model.Document);
                            if (model.Document.Id > 0)
                                success = true;
                        }
                        // MAJ de le document
                        else
                        {
                            success = db.updateDocument(model.Document);
                        }
                        // Refresh du model
                        model.Document = db.getDocumentById(model.Document.Id);


                        if (success)
                        {
                            model.messageKO = null;
                            if (model.ModePage == Commons.Const.Creation)
                            {
                                model.messageOK = "Le document a été créé avec succès";
                                model.isCreationOK = true;
                            }
                            else
                                model.messageOK = "Le document a été modifié avec succès";
                            model.LibelleBoutonSauvegarde = "Modifier";
                            model.TitrePage = "Modifier un document";
                            model.ModePage = Commons.Const.Modification;
                        }
                    }
                    else
                    {
                        model.messageKO = model.messageKO + Commons.Const.MessageErreurModelNotValid;
                    }
                }
                if (model.Document.CheminDocument == null)
                    model.Document.CheminDocument = "";
            }
            catch (Exception e)
            {
                model.messageKO = model.messageKO + e.Message;
                Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
                //	return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
            }
            return PartialView("~/Views/Administration/GererDocument.cshtml", model);
        }





        /// <summary>
        /// Appel ajax pour rechercher les documents
        /// </summary>
        /// <returns>The documents ajax.</returns>
        /// <param name="draw">Draw.</param>
        /// <param name="start">Start.</param>
        /// <param name="length">Length.</param>
        [HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult RechercheDocumentsAjax(int draw, int start, int length, Filtre filtres)
		{

			List<Document> resultat = new List<Document>();

			using (DocumentDAL db = new DocumentDAL())
			{
				resultat = db.getListeDocuments(null,null,null);
			}


			// Filtrage textuelle
			string filtreTextuel = filtres._search;

			if (!String.IsNullOrEmpty(filtreTextuel))
			{
				List<Document> resultatsFiltres = new List<Document>();
				foreach (var r in resultat)
				{
					if (r.strDateCreation.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.LibelleCategorieDocument.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.CheminDocument.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.Titre.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.Id.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    (r.Texte ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()) )
						resultatsFiltres.Add(r);
				}

				resultat = resultatsFiltres;
			}

			// Gestion du tri de la table de résultat
			switch (filtres._sortColumn)
			{
				case 0: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 1: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Titre==null ? "": e.Titre.Trim())) : resultat.OrderByDescending(e => (e.Titre == null ? "" : e.Titre.Trim()))).ToList(); break;
				case 2: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 3: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.LibelleCategorieDocumentIHM == null ? "" : e.LibelleCategorieDocumentIHM.Trim())) : resultat.OrderByDescending(e => (e.LibelleCategorieDocumentIHM == null ? "" : e.Titre.Trim()))).ToList(); break;
				case 4: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.CheminDocument == null ? "" : e.CheminDocument.Trim())) : resultat.OrderByDescending(e => (e.CheminDocument == null ? "" : e.CheminDocument.Trim()))).ToList(); break;
				case 5: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Ordre) : resultat.OrderByDescending(e => e.Ordre)).ToList(); break;
			}

			if (resultat == null)
				return null;

			if (length == -1)
				length = resultat.Count;

			DataTableDataDocument dataTableData = new DataTableDataDocument();

			// get just one page of data
			if (resultat.Count < length)
				dataTableData.data = resultat;
			else
			{
				if (start > resultat.Count)
					dataTableData.data = new List<Document>();
				else
					dataTableData.data = resultat.GetRange(start, Math.Min(length, resultat.Count - start));
			}
			dataTableData.NbResultatTotal = resultat.Count;
			dataTableData.draw = draw;

			var jsonResult = Json(dataTableData, JsonRequestBehavior.AllowGet);
			jsonResult.MaxJsonLength = int.MaxValue;

			return jsonResult;
		}



		/// <summary>
		/// Gerers the documents.
		/// </summary>
		/// <returns>The documents.</returns>
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		 public ActionResult GererDocuments()
		{
			try
			{
				Business.StatBLL.ajouterStat("PageGestion");

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

			return View("~/Views/Administration/Documents.cshtml");
		}
		#endregion
		#region Equipe

		/// <summary>
		/// Gerers the equipes.
		/// </summary>
		/// <returns>The equipes.</returns>
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult GererEquipes()
		{
			try
			{
				Business.StatBLL.ajouterStat("PageGestion");
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

			return View("~/Views/Administration/Equipes.cshtml");
		}


        /// <summary>
        /// Gerers the equipe.
        /// </summary>
        /// <returns>The equipe.</returns>
        /// <param name="idElement">Identifier equipe.</param>
        [AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
        public ActionResult GererEquipe(int? idElement)
        {
            int? idEquipe = idElement;
            ObjGestionEquipes model = new ObjGestionEquipes();
            try
            {
                Business.StatBLL.ajouterStat("PageGestion");
                if (idEquipe != null && idEquipe>0)
                {

                    model.ModePage = Commons.Const.Modification;
                    model.TitrePage = "Modifier une équipe";
                    model.LibelleBoutonSauvegarde = "Modifier";
                    using (EquipeDAL db = new EquipeDAL())
                    {
                        model.Equipe = db.getEquipeById(idEquipe.Value);
                    }
                    
                }
                else
                {
                    model.ModePage = Commons.Const.Creation;
                    model.Equipe.Ordre = 9999;
                    model.TitrePage = "Créer une équipe";
                    model.LibelleBoutonSauvegarde = "Créer";
                }

                if(model.Equipe.CheminCalendrier==null)
                    model.Equipe.CheminCalendrier = "";
                if (model.Equipe.CheminPhoto == null)
                    model.Equipe.CheminPhoto = "";
                if (model.Equipe.CheminFicheEntrainement == null)
                    model.Equipe.CheminFicheEntrainement = "";

            }
            catch (Exception e)
            {
                string stridEquipe = "N/A";
                if (idEquipe != null)
                {
                    stridEquipe = idEquipe.ToString();
                }

                Commons.Logger.genererErreur(typeof(AdministrationController), "stridEquipe = " + stridEquipe + " : " + e.ToString());
                //return View("~/Views/Shared/Error.cshtml");
            }
            return PartialView("~/Views/Administration/GererEquipe.cshtml", model);
        }

        /// <summary>
        /// Recherches the equipes ajax.
        /// </summary>
        /// <returns>The equipes ajax.</returns>
        /// <param name="draw">Draw.</param>
        /// <param name="start">Start.</param>
        /// <param name="length">Length.</param>
        /// <param name="filtres">Filtres.</param>
        [HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult RechercheEquipesAjax(int draw, int start, int length, Filtre filtres)
		{

			List<Equipe> resultat = new List<Equipe>();

			using (EquipeDAL db = new EquipeDAL())
			{
				resultat = db.getListeEquipes();
			}


			// Filtrage textuelle
			string filtreTextuel = filtres._search;

			if (!String.IsNullOrEmpty(filtreTextuel))
			{
				List<Equipe> resultatsFiltres = new List<Equipe>();
				foreach (var r in resultat)
				{
					if (r.strDateCreation.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.Libelle.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    (r.Commentaire ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    (r.InformationsEntrainements ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    (r.InformationsResponsable ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Id.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    (r.InformationsDivision ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim())
					    )
						resultatsFiltres.Add(r);
				}

				resultat = resultatsFiltres;
			}

			// Gestion du tri de la table de résultat
			switch (filtres._sortColumn)
			{
				case 0: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 1: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Libelle == null ? "" : e.Libelle.Trim())) : resultat.OrderByDescending(e => (e.Libelle == null ? "" : e.Libelle.Trim()))).ToList(); break;
				case 2: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 3: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Ordre) : resultat.OrderByDescending(e => e.Ordre)).ToList(); break;
			}

			if (resultat == null)
				return null;

			if (length == -1)
				length = resultat.Count;

			DataTableEquipe dataTableData = new DataTableEquipe();

			// get just one page of data
			if (resultat.Count < length)
				dataTableData.data = resultat;
			else
			{
				if (start > resultat.Count)
					dataTableData.data = new List<Equipe>();
				else
					dataTableData.data = resultat.GetRange(start, Math.Min(length, resultat.Count - start));
			}
			dataTableData.NbResultatTotal = resultat.Count;
			dataTableData.draw = draw;

			var jsonResult = Json(dataTableData, JsonRequestBehavior.AllowGet);
			jsonResult.MaxJsonLength = int.MaxValue;

			return jsonResult;
		}





		/// <summary>
		/// Suppression de l'équipe et de ses documents
		/// </summary>
		/// <returns>The equipe.</returns>
		/// <param name="idElement">Identifier element.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult SupprimerEquipe(string idElement)
		{
			bool _success= true;
			string _message = "";
			try
			{
				using (EquipeDAL db = new EquipeDAL())
				{
					// On commence par récupérer les informations sur l'équipe
					Equipe equipe = db.getEquipeById(Convert.ToInt32(idElement));
					_success = Commons.Utils.deleteDocument(equipe.CheminCalendrier);
					_success = _success && Commons.Utils.deleteDocument(equipe.CheminFicheEntrainement);
					_success = _success && Commons.Utils.deleteDocument(equipe.CheminPhoto);
					// On supprime logiquement l'équipe en base
					equipe.isActif = false;
					_success = _success && db.updateEquipe(equipe);
				}


			}
			catch (System.IO.IOException e)
			{
				_success = false;
				_message = _message+ e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), " sidElement=" + idElement.ToString() + " : " + e.ToString());

			}
			return Json(new { Retour = _success, Message = _message });
		}



        /// <summary>
        /// gestion de l'équipe lors de la sauvegarde
        /// </summary>
        /// <returns>The actualites post.</returns>
        /// <param name="model">Model.</param>
        [HttpPost]
        [AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
        public ActionResult GererEquipePost(ObjGestionEquipes model)
        {
            model.isCreationOK = false;
            var Files = Request.Files;

            try
            {
                if (model.Equipe.Id == null || model.Equipe.Id == 0)
                {
                    model.ModePage = Commons.Const.Creation;
                    model.TitrePage = "Créer une équipe";
                    model.LibelleBoutonSauvegarde = "Créer";
                }
                else
                {
                    model.ModePage = Commons.Const.Modification;
                    model.TitrePage = "Modifier une équipe";
                    model.LibelleBoutonSauvegarde = "Modifier";
                }

                model.messageOK = null;
                model.messageKO = "Erreur lors de la création de l'équipe : ";

                using (EquipeDAL db = new EquipeDAL())
                {
                    // On teste si une équipe ne possède pas le libellé
                    if (!db.existEquipeAvecMemeLibelle(model.Equipe.Libelle, model.Equipe.Id))
                    {
                        if (ModelState.IsValid)
                        {
                            bool success = false;
                            // Chargement en base

                            if (model.Equipe.InformationsResponsable == null)
                                model.Equipe.InformationsResponsable = "";
                            if (model.Equipe.InformationsDivision == null)
                                model.Equipe.InformationsDivision = "";
                            if (model.Equipe.InformationsEntrainements == null)
                                model.Equipe.InformationsEntrainements = "";
                            if (model.Equipe.Commentaire == null)
                                model.Equipe.Commentaire = "";
                            if (model.Equipe.LienClassement == null)
                                model.Equipe.LienClassement = "";
                            model.Equipe.isActif = true;

                            // On supprime les anciens fichiers

                            if (!String.IsNullOrEmpty(model.Equipe.CheminPhoto) && model.IndicSuppressionFichierPhoto)
                            {
                                Commons.Utils.deleteDocument(model.Equipe.CheminPhoto);
                                model.Equipe.CheminPhoto = "";
                            }
                            if (!String.IsNullOrEmpty(model.Equipe.CheminCalendrier) && model.IndicSuppressionFichierCalendrier)
                            {
                                Commons.Utils.deleteDocument(model.Equipe.CheminCalendrier);
                                model.Equipe.CheminCalendrier = "";
                            }
                            if (!String.IsNullOrEmpty(model.Equipe.CheminFicheEntrainement) && model.IndicSuppressionFichierFicheEntrainement)
                            {
                                Commons.Utils.deleteDocument(model.Equipe.CheminFicheEntrainement);
                                model.Equipe.CheminFicheEntrainement = "";
                            }


                            if (Request.Files != null && Request.Files.Count > 0)
                            {
                                int idElement = model.Equipe.Id;
                                if (idElement <= 0)
                                {
                                    idElement = db.getNexIdEquipe();
                                }
                                string filename = "";
                                string pathToSave = "";
                                if (model.IndicFichierPhoto!=null && model.IndicFichierPhoto > 0)
                                {
                                    var File = Request.Files[Convert.ToInt32(model.IndicFichierPhoto)-1];
                                    filename = "Photo_" + idElement.ToString() + "."+Commons.Utils.getExtensionDocument(File.FileName);
                                    pathToSave = Path.Combine(Server.MapPath(Commons.Const.UploadEquipePath), filename);
                                    File.SaveAs(pathToSave);
                                    model.Equipe.CheminPhoto = Commons.Const.UploadEquipePath + "/" + filename;
                                }
                                if (model.IndicFichierCalendrier != null && model.IndicFichierCalendrier>0)
                                {
                                    var File = Request.Files[Convert.ToInt32(model.IndicFichierCalendrier)-1];
                                    filename = "Calendrier_" + idElement.ToString() + "." + Commons.Utils.getExtensionDocument(File.FileName);
                                    pathToSave = Path.Combine(Server.MapPath(Commons.Const.UploadEquipePath), filename);
                                    File.SaveAs(pathToSave);
                                    model.Equipe.CheminCalendrier = Commons.Const.UploadEquipePath + "/" + filename;
                                }
                                if (model.IndicFichierFicheEntrainement != null && model.IndicFichierFicheEntrainement > 0)
                                {
                                    var File = Request.Files[Convert.ToInt32(model.IndicFichierFicheEntrainement) - 1];
                                    filename = "FicheEntrainement_" + idElement.ToString() + "." + Commons.Utils.getExtensionDocument(File.FileName);
                                    pathToSave = Path.Combine(Server.MapPath(Commons.Const.UploadEquipePath), filename);
                                    File.SaveAs(pathToSave);
                                    model.Equipe.CheminFicheEntrainement = Commons.Const.UploadEquipePath + "/" + filename;
                                }
                            }

                            if (model.Equipe.CheminPhoto == null)
                                model.Equipe.CheminPhoto = "";
                            else if (model.Equipe.CheminPhoto!="" && !model.Equipe.CheminPhoto.Contains(Commons.Const.UploadEquipePath))
                                model.Equipe.CheminPhoto=Commons.Const.UploadEquipePath + "/" + model.Equipe.CheminPhoto;
                            if (model.Equipe.CheminFicheEntrainement == null)
                                model.Equipe.CheminFicheEntrainement = "";
                            else if (model.Equipe.CheminFicheEntrainement != "" && !model.Equipe.CheminFicheEntrainement.Contains(Commons.Const.UploadEquipePath))
                                model.Equipe.CheminFicheEntrainement = Commons.Const.UploadEquipePath + "/" + model.Equipe.CheminFicheEntrainement;
                            if (model.Equipe.CheminCalendrier == null)
                                model.Equipe.CheminCalendrier = "";
                            else if (model.Equipe.CheminCalendrier != "" && !model.Equipe.CheminCalendrier.Contains(Commons.Const.UploadEquipePath))
                                model.Equipe.CheminCalendrier = Commons.Const.UploadEquipePath + "/" + model.Equipe.CheminCalendrier;

                            // Création de l'équipe
                            if (model.ModePage == Commons.Const.Creation)
                            {
                                model.Equipe.DateCreation = DateTime.Now;
                                model.Equipe.Id = db.insertEquipe(model.Equipe);
                                if (model.Equipe.Id > 0)
                                    success = true;
                            }
                            // MAJ de l'équipe
                            else
                            {
                                success = db.updateEquipe(model.Equipe);
                            }
                            // Refresh du model
                            model.Equipe = db.getEquipeById(model.Equipe.Id);

                            if (success)
                            {
                                model.messageKO = null;
                                if (model.ModePage == Commons.Const.Creation)
                                {
                                    model.messageOK = "L'équipe a été créée avec succès";
                                    model.isCreationOK = true;
                                }
                                else
                                    model.messageOK = "L'équipe a été modifiée avec succès";
                                model.LibelleBoutonSauvegarde = "Modifier";
                                model.TitrePage = "Modifier une équipe";
                                model.ModePage = Commons.Const.Modification;
                            }
                        }
                        else
                        {
                            model.messageKO = model.messageKO + Commons.Const.MessageErreurModelNotValid;
                        }
                    }
                    else
                    {
                        model.messageKO = model.messageKO + "Une équipe possède déjà ce libellé";
                    }
                }
                if (model.Equipe.CheminCalendrier == null)
                    model.Equipe.CheminCalendrier = "";
                if (model.Equipe.CheminPhoto == null)
                    model.Equipe.CheminPhoto = "";
                if (model.Equipe.CheminFicheEntrainement == null)
                    model.Equipe.CheminFicheEntrainement = "";
            }
            catch (Exception e)
            {
                model.messageKO = model.messageKO + e.Message;
                Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
                //	return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
            }
            return PartialView("~/Views/Administration/GererEquipe.cshtml", model);
        }

        #endregion

        #region Commentaire


        /// <summary>
        /// Recherches the commentaires ajax.
        /// </summary>
        /// <returns>The commentaires ajax.</returns>
        /// <param name="draw">Draw.</param>
        /// <param name="start">Start.</param>
        /// <param name="length">Length.</param>
        /// <param name="filtres">Filtres.</param>
        [HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult RechercheCommentairesAjax(int draw, int start, int length, Filtre filtres)
		{

			List<Commentaire> resultat = new List<Commentaire>();

			using (CommentaireDAL db = new CommentaireDAL())
			{
				resultat = db.getListeCommentaires(null,null);

            }


			// Filtrage textuelle
			string filtreTextuel = filtres._search;

			if (!String.IsNullOrEmpty(filtreTextuel))
			{
				List<Commentaire> resultatsFiltres = new List<Commentaire>();
				foreach (var r in resultat)
				{
					if (r.strDateCreation.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					       (r.LibelleActualite ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					        r.Message.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					        r.Utilisateur.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Id.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					        (r.LibelleDocument ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()))
						resultatsFiltres.Add(r);
				}

				resultat = resultatsFiltres;
			}

			// Gestion du tri de la table de résultat
			switch (filtres._sortColumn)
			{
				case -1 : resultat =  resultat.OrderByDescending(e => e.Id).ToList(); break;
				case 0: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 1: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Utilisateur == null ? "" : e.Utilisateur.Trim())) : resultat.OrderByDescending(e => (e.Utilisateur == null ? "" : e.Utilisateur.Trim()))).ToList(); break;
				case 2: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Message == null ? "" : e.Message.Trim())) : resultat.OrderByDescending(e => (e.Message == null ? "" : e.Message.Trim()))).ToList(); break;
				case 3: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.LibelleActualite == null ? "" : e.LibelleActualite.Trim())) : resultat.OrderByDescending(e => (e.LibelleActualite == null ? "" : e.LibelleActualite.Trim()))).ToList(); break;
				case 4: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.LibelleDocument == null ? "" : e.LibelleDocument.Trim())) : resultat.OrderByDescending(e => (e.LibelleDocument == null ? "" : e.LibelleDocument.Trim()))).ToList(); break;
				case 5: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;

			}

			if (resultat == null)
				return null;

			if (length == -1)
				length = resultat.Count;

			DataTableDataCommentaire dataTableData = new DataTableDataCommentaire();

			// get just one page of data
			if (resultat.Count < length)
				dataTableData.data = resultat;
			else
			{
				if (start > resultat.Count)
					dataTableData.data = new List<Commentaire>();
				else
					dataTableData.data = resultat.GetRange(start, Math.Min(length, resultat.Count - start));
			}
			dataTableData.NbResultatTotal = resultat.Count;
			dataTableData.draw = draw;

			var jsonResult = Json(dataTableData, JsonRequestBehavior.AllowGet);
			jsonResult.MaxJsonLength = int.MaxValue;

			return jsonResult;
		}

		/// <summary>
		/// Page de gestion des commentaires
		/// </summary>
		/// <returns>The commentaires.</returns>
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult GererCommentaires()
		{
			try
			{
				Business.StatBLL.ajouterStat("PageGestion");

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

			return View("~/Views/Administration/Commentaires.cshtml");
		}

		/// <summary>
		/// Suppression du commentaire
		/// </summary>
		/// <returns>The commentaire.</returns>
		/// <param name="idElement">Identifier element.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult SupprimerCommentaire(string idElement)
		{
			bool _success = true;
			string _message = "";
			try
			{
				using (CommentaireDAL DalCommentaire = new CommentaireDAL())
				{
					_success = DalCommentaire.deleteCommentaireById(Convert.ToInt32(idElement));
				}


			}
			catch (System.IO.IOException e)
			{
				_success = false;
				_message = _message + e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), " sidElement=" + idElement.ToString() + " : " + e.ToString());

			}
			return Json(new { Retour = _success, Message = _message });
		}

		#endregion

		#region Actualite




		/// <summary>
		/// Suppression de l'actualité
		/// </summary>
		/// <returns>The actualite.</returns>
		/// <param name="idElement">Identifier element.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur+ "," + Commons.Const.ProfilAdministrateurPartiel)]
		public JsonResult SupprimerActualite(string idElement)
		{
			bool _success = true;
			string _message = "";
			try
			{
				// On commence par supprimer les commentaires rattachés à l'élément
				using(CommentaireDAL DalCommentaire= new CommentaireDAL())
					{
					_success=DalCommentaire.deleteCommentaireByIdActualite(Convert.ToInt32(idElement));
					}

				using (ActualiteDAL db = new ActualiteDAL())
				{
					// On commence par récupérer les informations sur l'équipe
					Actualite objet = db.getActualiteById(Convert.ToInt32(idElement),"");
					_success = _success && Commons.Utils.deleteDocument(objet.CheminDocument);

					// On supprime l'actualité en base
					_success = _success && db.deleteActualite(Convert.ToInt32(idElement));
				}


			}
			catch (System.IO.IOException e)
			{
				_success = false;
				_message = _message + e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), " sidElement=" + idElement.ToString() + " : " + e.ToString());

			}
			return Json(new { Retour = _success, Message = _message });
		}



		/// <summary>
		/// Recherches the actualites ajax.
		/// </summary>
		/// <returns>The actualites ajax.</returns>
		/// <param name="draw">Draw.</param>
		/// <param name="start">Start.</param>
		/// <param name="length">Length.</param>
		/// <param name="filtres">Filtres.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur+ "," + Commons.Const.ProfilAdministrateurPartiel)]
		public ActionResult RechercheActualitesAjax(int draw, int start, int length, Filtre filtres)
		{

			List<Actualite> resultat = new List<Actualite>();

			using (ActualiteDAL db = new ActualiteDAL())
			{
				resultat = db.getListeActualite("","",null,null);
			}


			// Filtrage textuelle
			string filtreTextuel = filtres._search;

			if (!String.IsNullOrEmpty(filtreTextuel))
			{
				List<Actualite> resultatsFiltres = new List<Actualite>();
				foreach (var r in resultat)
				{
					if (r.strDateCreation.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.CheminDocument.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    (r.LibelleEquipe ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.Resume.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.Titre.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Id.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						(r.Texte ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()))
						resultatsFiltres.Add(r);
				}

				resultat = resultatsFiltres;
			}

			// Gestion du tri de la table de résultat
			switch (filtres._sortColumn)
			{
				case 0: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 1: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.LibelleEquipe == null ? "" : e.LibelleEquipe.Trim())) : resultat.OrderByDescending(e => (e.LibelleEquipe == null ? "" : e.LibelleEquipe.Trim()))).ToList(); break;
				case 2: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Titre == null ? "" : e.Titre.Trim())) : resultat.OrderByDescending(e => (e.Titre == null ? "" : e.Titre.Trim()))).ToList(); break;
				case 3: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Resume == null ? "" : e.Resume.Trim())) : resultat.OrderByDescending(e => (e.Resume == null ? "" : e.Resume.Trim()))).ToList(); break;
				case 4: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 5: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.CheminDocument == null ? "" : e.CheminDocument.Trim())) : resultat.OrderByDescending(e => (e.CheminDocument == null ? "" : e.CheminDocument.Trim()))).ToList(); break;

			}

			if (resultat == null)
				return null;

			if (length == -1)
				length = resultat.Count;

			DataTableDataActualite dataTableData = new DataTableDataActualite();

			// get just one page of data
			if (resultat.Count < length)
				dataTableData.data = resultat;
			else
			{
				if (start > resultat.Count)
					dataTableData.data = new List<Actualite>();
				else
					dataTableData.data = resultat.GetRange(start, Math.Min(length, resultat.Count - start));
			}
			dataTableData.NbResultatTotal = resultat.Count;
			dataTableData.draw = draw;

			var jsonResult = Json(dataTableData, JsonRequestBehavior.AllowGet);
			jsonResult.MaxJsonLength = int.MaxValue;

			return jsonResult;
		}

		/// <summary>
		/// Modification et création d'une actualité
		/// </summary>
		/// <returns>The actualite.</returns>
		/// <param name="idElement">Identifier element.</param>
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur+ "," + Commons.Const.ProfilAdministrateurPartiel)]
		public ActionResult GererActualite(int? idElement)
		{
			ObjGestionActualites model = new ObjGestionActualites();
			try
			{
				Business.StatBLL.ajouterStat("PageGestion");

				// On remet à jour la liste des équipes
				using(EquipeDAL db = new EquipeDAL())
				{
					model.lEquipes = db.getListeEquipesForDDL();
				}


				// si l'id est null il s'agit d'une création , autrement modification
				if (idElement != null && idElement>0)
				{

					model.ModePage = Commons.Const.Modification;
					model.TitrePage = "Modifier une actualité";
					model.LibelleBoutonSauvegarde = "Modifier";
					using (ActualiteDAL db = new ActualiteDAL())
					{
						model.Actualite = db.getActualiteById(idElement.Value,"");
					}
				}
				else
				{

					model.ModePage = Commons.Const.Creation;
					model.TitrePage = "Créer une actualité";
                    model.LibelleBoutonSauvegarde = "Créer";
				}

                if(model.Actualite.CheminDocument==null)
                    model.Actualite.CheminDocument = "";

            }
			catch (Exception e)
			{
				string stridElement = "N/A";
				if (idElement != null)
				{
					stridElement = idElement.ToString();
				}

				Commons.Logger.genererErreur(typeof(AdministrationController), "stridActualite = " + stridElement + " : " + e.ToString());
				//return View("~/Views/Shared/Error.cshtml");
			}
			return PartialView("~/Views/Administration/GererActualite.cshtml", model);
		}

		/// <summary>
		/// gestion de l'actualité lors de la sauvegarde
		/// </summary>
		/// <returns>The actualites post.</returns>
		/// <param name="model">Model.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur+ "," + Commons.Const.ProfilAdministrateurPartiel)]
		public ActionResult GererActualitePost(ObjGestionActualites model)
		{
            int idElement = -1;
            model.isCreationOK = false;
            var Files = Request.Files;
            try
			{
				if (model.Actualite.Id == null || model.Actualite.Id == 0)
				{
					model.ModePage = Commons.Const.Creation;
					model.TitrePage = "Créer une actualité";
					model.LibelleBoutonSauvegarde = "Créer";
				}
				else
				{
					model.ModePage = Commons.Const.Modification;
					model.TitrePage = "Modifier une actualité";
					model.LibelleBoutonSauvegarde = "Modifier";
				}

				model.messageOK = null;
				model.messageKO = "Erreur lors de la création de l'actualité : ";
                if (model.Actualite.CheminDocument == null)
                    model.Actualite.CheminDocument = "";
                using (ActualiteDAL db = new ActualiteDAL())
				{

				if (ModelState.IsValid)
					{
					bool success = false;
                   
					// Chargement en base

					if (model.Actualite.Titre == null)
						model.Actualite.Titre = "";
					if (model.Actualite.Resume == null)
						model.Actualite.Resume = "";
					if (model.Actualite.Texte == null)
						model.Actualite.Texte= "";



                   if (!String.IsNullOrEmpty(model.Actualite.CheminDocument) && model.IndicSuppressionFichierDocument)
                        {
                        Commons.Utils.deleteDocument(model.Actualite.CheminDocument);
                        model.Actualite.CheminDocument = "";
                        }


                   if (Request.Files != null && Request.Files.Count > 0)
                        {
                            idElement = model.Actualite.Id;
                            if (idElement <= 0)
                            {
                                idElement = db.getNexIdActualite();
                            }
                            string filename = "";
                            string pathToSave = "";
                            if (model.IndicFichierDocument != null && model.IndicFichierDocument > 0)
                            {
                                var File = Request.Files[0];
                                filename = "Actualite_" + idElement.ToString() + "." + Commons.Utils.getExtensionDocument(File.FileName);
                                pathToSave = Path.Combine(Server.MapPath(Commons.Const.UploadActualitePath), filename);
                                File.SaveAs(pathToSave);
                                model.Actualite.CheminDocument = Commons.Const.UploadActualitePath + "/" + filename;
                            }
                        }
                   if (model.Actualite.CheminDocument == null)
                            model.Actualite.CheminDocument = "";
                   else if (model.Actualite.CheminDocument != "" && !model.Actualite.CheminDocument.Contains(Commons.Const.UploadActualitePath))
                            model.Actualite.CheminDocument = Commons.Const.UploadActualitePath + "/" + model.Actualite.CheminDocument;


                        // Création de l'actualité
                     if (model.ModePage == Commons.Const.Creation)
					{
						model.Actualite.DateCreation = DateTime.Now;
                        idElement = db.insertActualite(model.Actualite);
						if(idElement > 0)
							success = true;
					}
					// MAJ de l'actualité
					else
					{
						success = db.updateActualite(model.Actualite);
                        idElement = model.Actualite.Id;
                    }
							// Refresh du model
					model.Actualite = db.getActualiteById(idElement, "");
                    model.Actualite.Id = idElement;

			

					if (success)
						{
						model.messageKO = null;
                            if (model.ModePage == Commons.Const.Creation)
                            {
                                model.messageOK = "L'actualité a été créée avec succès";
                                model.isCreationOK = true;
                            }
                            else
                                model.messageOK = "L'actualité a été modifiée avec succès";
						model.LibelleBoutonSauvegarde = "Modifier";
						model.TitrePage = "Modifier une actualité";
						model.ModePage = Commons.Const.Modification;
						}
				}
				else
					{
					model.messageKO = model.messageKO + Commons.Const.MessageErreurModelNotValid;
					}
				}

				// On remet à jour la liste des équipes
				using(EquipeDAL db = new EquipeDAL())
				{
					model.lEquipes = db.getListeEquipesForDDL();
				}
			}
			catch (Exception e)
			{
				model.messageKO = model.messageKO + e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				//	return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}
            model.Actualite.Id = idElement;
            return PartialView("~/Views/Administration/GererActualite.cshtml", model);
		}





		/// <summary>
		/// Gerers the actualites.
		/// </summary>
		/// <returns>The actualites.</returns>
        [AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur + "," + Commons.Const.ProfilAdministrateurPartiel)]
		public ActionResult GererActualites()
		{
			try
			{
				Business.StatBLL.ajouterStat("PageGestion");

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

			return View("~/Views/Administration/Actualites.cshtml");
		}
		#endregion
    }
}
