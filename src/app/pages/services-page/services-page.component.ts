import { Component } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})

export class ServicesPageComponent {
  services = [
    { title: 'Mécaniques Dédiés', 
      description: `Notre équipe qualifiée de mécaniciens chevronnés met tout en œuvre pour assurer la performance optimale de votre véhicule. Avec un engagement envers la qualité et l'efficacité, 
      nous offrons des services de mécanique fiables, allant de la maintenance préventive aux réparations complexes. 
      Confiez-nous votre véhicule, et bénéficiez d'un service professionnel qui garantit votre sécurité et la longévité de votre voiture.`,
      image: 'assets/mecaniquesdedies.png'
    },
    
    { title: 'Contrôle des véhicules', 
      description: `Le service de contrôle des véhicules offre une expertise approfondie visant à garantir la sécurité, la performance et la conformité réglementaire des véhicules. 
      Nos professionnels évaluent les systèmes mécaniques, électriques et électroniques. 
      Grâce à une approche méticuleuse, nous fournissons des recommandations personnalisées pour assurer le bon fonctionnement des véhicules de nos clients.`,
      image: 'assets/controledesvehicules.png'
    },

    { title: 'Contrôle huile et freins', 
      description: `Le contrôle des freins et de 
      l'huile assure une maintenance préventive essentielle pour garantir la sécurité et la performance de votre véhicule. Les professionnels qualifiés effectuent des vérifications approfondies des systèmes de freinage, s'assurant de leur efficacité et de leur fiabilité. Parallèlement, nous examinons attentivement le niveau et la qualité de l'huile, 
      élément crucial pour le bon fonctionnement du moteur.`,
      image: 'assets/controlehuileetfreins.png'
    },

    { title: 'Service de dépannage', 
      description: `Panne ou urgence, notre équipe qualifiée intervient avec 
      professionnalisme pour remettre votre véhicule en état de marche. Que ce soit pour un démarrage de batterie, un changement de pneu, ou d'autres imprévues, nous sommes là pour vous dépanner 24 heures sur 24. Choisissez la tranquillité d'esprit en sachant que notre service de dépannage est à votre disposition, 
      assurant un retour rapide et sécurisé sur la route.`,
      image: 'assets/servicedepannage.png'
    },

    { title: 'Changement des pneus', 
      description: `Avec une équipe spécialisée et équipée des derniers outils, nous effectuons le remplacement de vos pneus de manière professionnelle. Que ce soit pour des pneus usés, endommagés ou pour une transition saisonnière, notre service garantit une conduite en toute sécurité. Optez pour notre expertise en changement de 
      pneu pour maintenir l'adhérence, la maniabilité et la stabilité de votre véhicule sur la route.`,
      image: 'assets/changementpneus.png'
    },

    { title: 'Service de carosserie', 
      description: `Notre service de carrosserie restaure l'esthétique et l'intégrité structurelle de votre véhicule avec précision et savoir-faire. Que ce soit pour des réparations suite à un accident, 
      des éraflures ou des dommages de la carrosserie, notre équipe s'engage à redonner à votre véhicule son aspect d'origine. Si désiré, des solutions personnalisées peuvent être envisagées afin d'améliorer la 
      résistance et durabilité de votre véhicule. `,
      image: 'assets/servicecarrosserie.png'
    },
  ];
}
