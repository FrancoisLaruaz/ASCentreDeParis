﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using DataAccess;
using Models;


namespace ASCentreParis.Controllers
{
	public class HomeController : BaseController
	{


		/// <summary>
		/// Recherche d'une actualité
		/// </summary>
		/// <returns>The actualite.</returns>
		/// <param name="query">Query.</param>
		[HttpPost]
		public ActionResult SearchActualite(string query)
		{
			Models.ObjAcceuil model = new Models.ObjAcceuil();
			if (query == null)
			{
				query = "";
			}
			try
				{
					using (ActualiteDAL db = new ActualiteDAL())
					{
						model.ListeActualites = db.getListeActualite(query);
					}
				}
			catch (Exception e)
				{
				Commons.Logger.genererErreur(typeof(HomeController),"query = "+query + " : "+ e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
				}
		return PartialView(model);
		}



		/// <summary>
		/// Permet de rafraichir le header
		/// </summary>
		/// <returns>The header.</returns>
		public ActionResult AfficherHeader()
		{
			return PartialView("~/Views/Shared/Header.cshtml");
		}
		/// <summary>
		/// Index this instance.
		/// </summary>
		/// <returns>The index.</returns>
		public ActionResult Index()
		{
			try
			{
                	Business.StatBLL.ajouterStat("PageAcceuil");
				
			}
			 catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(HomeController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}
			return View();
		}
	}
}
