using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.IO;


namespace Models
{
	public class ObjGestionEquipes  : objFormulaire
	{
		public Equipe Equipe { get; set; }

        public int? IndicFichierPhoto { get; set; }
        public int? IndicFichierCalendrier { get; set; }
        public int? IndicFichierFicheEntrainement { get; set; }

        public bool IndicSuppressionFichierPhoto { get; set; }
        public bool IndicSuppressionFichierCalendrier { get; set; }
        public bool IndicSuppressionFichierFicheEntrainement { get; set; }

        public ObjGestionEquipes()
		{
            Equipe = new Equipe();
			messageOK = null;
			messageKO = null;
            isCreationOK = false;
        }
	}
}
