using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.IO;


namespace Models
{
	public class ObjGestionDocuments : objFormulaire
	{
		public Document Document { get; set; }
		public List<objDropDownListItem> lCategoriesDocument { get; set; }

        [Display(Name = "NomFichierUpload")]
        [Range(0, int.MaxValue, ErrorMessage = "Veuillez renseigner un document")]
        public int? IndicFichierDocument { get; set; }

        public ObjGestionDocuments()
		{
			messageOK = null;
			messageKO = null;
			Document = new Document();
			lCategoriesDocument = new List<objDropDownListItem>();
            isCreationOK = false;
        }
	}
}
