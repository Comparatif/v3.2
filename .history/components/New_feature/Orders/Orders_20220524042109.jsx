import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../firebase/firebase/clientApp";

// Firestore
const db = firebase.firestore();








export const data = () => {

// User Authentication
const [user, loading, error] = useAuthState(firebase.auth());

// Orders Collection
const [Orders, OrdersLoading, OrdersError] = useCollection(
    db.collection("Orders"),
    {}
  );

//Orders?.docs?.filter( (doc) => Orders_infos.push(Object.assign(doc.data(),{id : doc.id.toString()})))
//const Prix = Orders?.docs?.filter( (doc) => doc.data().Infos_boutique.product_prices !== "")
//const CA = Prix?.reduce((a, b) => a + b, 0).filter(function(x) {
//    return x !== undefined;
    
//})
const prix = Orders?.docs?.map( (doc) => Number(doc.data().Infos_boutique.product_prices
)).filter(function(x) {
    return x !== undefined;
    
})
const CA = OrdersLoading ? "Chargement..." : prix.reduce((a, b) => a + b, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
const OrdersNumber = OrdersLoading ? "Chargement..." : prix.length
const Sold = OrdersLoading ? "Chargement..." : Orders?.docs?.filter((doc)=> doc.data().sold === true).length
const Pending = OrdersLoading ? "Chargement..." : Orders?.docs?.filter((doc)=> doc.data().sold === false).length

return ({CA: CA, OrdersNumber: OrdersNumber, Sold: Sold, Pending: Pending})
}



  //const cle = hit.id.replace(/[0-9]/, 'Z')
//Calculate average star rating for each shop

//const Resultat = (CA?.reduce(reducer, 0) / ListeNotesBoutique?.length)
//const StarRating = Resultat > 0 ? Number(Resultat.toFixed(1)) : 0

{
  "userEmail": "samiboudehri@hotmail.fr",
  "phoneNumber": "0540711077",
  "lastName": "Boudehri",
  "firstName": "Sami",
  "countryName": "Algeria",
  "city": "Alger",
  "user_commune": "Ben aknoun",
  "orderId": "AMD_Ryzen_9_5900X_(3.7_GHz)_geekzonedz_Qaw6c5oGNYUMlJEHsMqkptCIfAo1",
  "shopEmail": "contact@Geekzonedz.Com",
  !!!"vendeurName": "geekzonedz",
  "shop_commune": "El Biar",
  "categories": "Processeurs",
  "paiement": "CCP / baridimob",
  "adresses": "140, Avenue Ali Khodja, El Biar 16000 Alger, Algérie",
  !!!"commune": "El Biar",
  "facebook": "https://www.facebook.com/geekzonedz",
  "fix1": null,
  "horaires": "9h00 - 18h30",
  "instagram": null,
  "livraison": "UPS - Les colis sont généralement expédiés dans un délai de 2 jours après réception du paiement. Ils sont expédiés via UPS avec un numéro de suivi et remis sans signature. Les colis peuvent également être expédiés via UPS Extra et remis contre signature. Veuillez nous contacter avant de choisir ce mode de livraison, car il induit des frais supplémentaires. Quel que soit le mode de livraison choisi, nous vous envoyons un lien pour suivre votre colis en ligne.Les frais d'expédition incluent les frais de préparation et d'emballage ainsi que les frais de port. Les frais de préparation sont fixes, tandis que les frais de transport varient selon le poids total du colis. Nous vous recommandons de regrouper tous vos articles dans une seule commande. Nous ne pouvons regrouper deux commandes placées séparément et des frais d'expédition s'appliquent à chacune d'entre elles. Votre colis est expédié à vos propres risques, mais une attention particulière est portée a",
  "localisation": "https://goo.gl/maps/chts4jTmMsXbSsvo9",
  "marques": "AMD",
  "product_country": "Algérie",
  "product_imagelinks": "https://www.geekzonedz.com/1403-large_default/amd-ryzen-9-5900x-37-ghz.jpg",
  "product_links": "https://www.geekzonedz.com/processeurs/1159-amd-ryzen-9-5900x-37-ghz.html",
  "product_names": "AMD Ryzen 9 5900X (3.7 GHz)",
  "product_prices": "129900",
  "shop_website": "https://www.geekzonedz.com/",
  "stocks": null,
  "telephone1": "0661.513.892",
  "telephone2": "0770.770.515",
  "type": "Composants_pc",
  "vendeurs": "geekzonedz",
  "vendeurs_image": "https://www.geekzonedz.com/img/geekzone-v2-logo-1511781933.jpg",
  "villes1": "Alger"
}