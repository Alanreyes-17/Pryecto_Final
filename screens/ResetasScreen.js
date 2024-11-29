import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

const recipes = [
  {
    id: 1,
    name: "Galletas con Proteína",
    image: require("../assets/cookies.jpg"),
    ingredients: [
      " 8 nueces.",
      "5 claras de huevo.",
      "1 cucharada de canela.",
      "Media manzana en trozos.",
      "1 plátano maduro.",
      "70g de almendras.",
      "100g de avellanas o nueces",
      "3 dosificadores de Evowhey 2.0 de SportSeries.",
      "1 cucharada de miel.",
      "65 g Harina de Avena Instantánea de FoodSeries",
    ],

    instructions:
      "En un bol, licuar la avena, con las almendra y avellanas o nueces, canela y las 3 cucharadas de proteína de cada sabor. En otro recipiente a parte, licuar la manzana, el plátano, las claras de huevo y la miel y después añadirle los ingredientes contenidos en el bol y mezclar muy bien hasta que la mezcla tenga una consistencia espesa. Pon el horno a calentar a 200ºC durante 10min. Hacer unas 16 galletas pequeñas con la masa y colocarnas en una bandeja cubierta con papel vegetal. Hornear las galletas a 175ºC durante 15-20 minutos.",
  },
  {
    id: 2,
    name: "Pan de latano",
    image: require("../assets/pan_platano.jpg"),
    ingredients: [
      "3 plátano maduro.",
      "1½ tazas de harina de avena integral.",
      "1 cucharadita de polvos de hornear",
      " ⅓ taza de aceite de coco fundido.",
      "1 huevo.",
      "1 pizca de sal.",
      "1 huev 1 cucharadita de bicarbonato de sodio.",
    ],
    instructions: [
      "Pela los plátanos, trocéalos y machácalos ligeramente con un tenedor. No es necesario triturarlos por completo, ya que esto haría que la masa pesara demasiado y no creciera adecuadamente en el horno.",
      "Bate el huevo con el aceite de coco durante 5 minutos si usas licuadora o varillas eléctricas. Si lo haces a mano, bate durante un poco más de tiempo para que queden espumosos y se añada suficiente aire. Para que el pan de plátano y avena suba correctamente y quede esponjoso, este paso es muy importante, por lo que batir enérgicamente los huevos es una de las claves.",
      "Añade el huevo batido al bol con los plátanos y mezcla bien. Puedes integrar estos ingredientes con el mismo tenedor, con varillas manuales o eléctricas, pero ten en cuenta que seguimos interesados en no triturar en exceso la fruta.",
      "Agrega los ingredientes secos, es decir, la harina de avena, los polvos de hornear, el bicarbonato de sodio y la sal. Incorpóralos con una espátula o cuchara haciendo movimientos envolventes suaves. De forma opcional, puedes añadir cualquier fruto seco que te guste para preparar, por ejemplo, pan de plátano, avena y nueces",
      "Coloca la masa en un molde rectangular de unos 20 cm de longitud, previamente engrasado y enharinado con harina de avena, y hornea el pan de avena y plátano durante 40-45 minutos. Si tienes copos de avena, espolvorea un poco por encima, aunque también puedes esparcir frutos secos picados o semillas. En función del tipo de horno, es posible que esté listo antes o que tarde un poco más en hacerse. Por ello, recomendamos revisar el pan a partir de los 35-40 minutos de cocción.",
      "Retira el pan del horno, deja que se entibie, desmolda con cuidado y colócalo sobre una rejilla para que acabe de enfriarse por completo. Una vez frío, ya puedes rebanarlo y degustarlo durante el desayuno o la merienda. Como ves, este es un pan de plátano sin azúcar muy fácil de hacer, delicioso y saludable. Si todavía tienes plátanos en tu despensa, aprovéchalos y prepara unos pancakes de plátano y avena y disfruta de desayunos variados pero nutritivos.",
    ],
  },
  {
    id: 3,
    name: "hot cake",
    image: require("../assets/avena_hot.jpg"),
    ingredients: [
      "2 plátanos",
      "1 taza de avena.",
      "1 huevo.",
      "1 cucharadita de canela.",
      "2 cucharaditas de polvo para hornear.",
      "3 cucharadas de azúcar.",
      "1 cucharadita de esencia de vainilla.",
      "3/4 tazas de leche.",
      "suficiente de aceite en aerosol.",
      "mantequilla al gusto, para acompañar.",
      "suficiente de fresa, para acompañar.",
      "suficiente de miel de maple, para acompañar",
    ],
    instructions: "Picar ingredientes, mezclar y aplastar los aguacates.",
  },
  {
    id: 4,
    name: "tacos de soya",
    image: require("../assets/tacos-pastor.jpg"),
    ingredients: [
      "2 tazas de soya texturizada natural.",
      "½ taza de jugo de naranja.",
      "2 cucharaditas de achiote en pasta.",
      "1 dienta de ajo.",
      "¼ de vinagre blanco.",
      "¼ de cebolla.",
      "Consomé de pollo en polvo.",
      "4 chiles guajillos secos sin semillas.",
      "1 cucharadita de cebolla picada.",
      "2 cucharadas de aceite Nutrioli®.",
    ],
    instructions:
      "En una olla con agua caliente coloca la soya y deja hervir por dos minutos, retira del fuego, escurre el agua y reserva.Coloca los chiles en una olla con agua al fuego, deja hervir hasta que estén suaves. Retira y licúa con el jugo de naranja, , el cuarto de cebolla, el achiote, el ajo, el vinagre blanco y cuela. Acitrona la cebolla picada con el aceite Nutrioli®, agrega la salsa ya colada sazona con el consomé de pollo en polvo, agrega la soya y cocina por diez minutos o hasta que este espesa, retira del fuego y sirve.",
  },
  {
    id: 5,
    name: "helado",
    image: require("../assets/helado-prote.jpg"),
    ingredients: [
      "300gr Plátano congelado",
      "1 dosificador de Evowhey Protein 2.0 de sabor Vainilla de SportSeries",
      "20 g de Cacao en Polvo de FoodSeries",
      "Endulzante al gusto",
      "2-3 cdas de Mantequilla de Anacardo de FoodSeries",
    ],
    instructions:
      "Triturar el plátano congelado hasta quedar cremoso Añadir la proteína y remover bien. Agregar el endulzante a gusto y el cacao en polvo y mezclar bien. Colocar en un recipiente apto para el congelador y añadir unos trocitos de chocolate. Llevar al congelador.",
  },
  {
    id: 6,
    name: "TARTA DE DULCE DE LECHE SIN AZÚCAR Y MOUSSE DE CHOCOLATE",
    image: require("../assets/tarta.jpg"),
    ingredients: [
      "Para la base:",
      "60 g de coco rallado",
      "100 g de salvado de avena",
      "60 g de harina de almendras",
      "1 huevo",
      "1 chorrito de leche de almendras",
      "1 cucharada de stevia",
      "Para el relleno:",
      "1 pote de dulce de leche sin azúcar",
      "Para la mousse de chocolate:",
      "1 paltas",
      "½ banana",
      "2 cucharadas generosas de cacao amargo",
      "1 cucharadita de extracto de vainilla",
      "1 cucharadita de stevia",
      "Para el topping: frutos rojos y castañas de cajú picadas",
    ],
    instructions: [
      "Paso a paso: Precalentá el horno a 180ºC. Para la base, simplemente tenés que procesar todos los ingredientes hasta que se forme una masa. ",
      "Llevala a una tartera de 18 cm de diámetro (en la foto usamos una rectangular), preferentemente de silicona, y horneala durante 10 minutos. Dejá que se enfríe y rellenala con dulce de leche.",
      "Para la mousse: procesá todos los ingredientes hasta que estén bien mezclados. En caso de que falte, agregale más cacao amargo. Cubrí el dulce de leche con la mousse y decorá con lo que tengas: frutos rojos, ",
      "frutos secos, coco rallado, etc. Lo ideal es que lleves la tarta a la heladera durante al menos tres horas antes de cortarla.",
      "El tip: Esta tarta es ideal para sorprender a invitados o llevarla a algún lado (nadie se va dar cuenta de que no tiene azúcar).",
      "Podés reemplazar el relleno y la capa de arriba con mantequilla de maní o con un crumble de coco (avena, coco y huevo).",
    ],
  },
  {
    id: 7,
    name: "Gomitas con proteína",
    image: require("../assets/gomitas.webp"),
    ingredients: [
      "¼ de taza (60 ml) de agua fría.",
      "19,5 g (2 medidas*) de Thermojetics Polvo para Preparar Bebidas sabor durazno-mango.",
      "11,4 g (2 medidas*) de Herbalife Colágeno.",
      "2 cucharaditas de grenetina sin sabor.",
      "¼ de taza de agua hirviendo.",
    ],
    instructions:
      "Coloca moldes de gomitas (tamaño 2 cm aprox) en una bandeja plana que quepa en el refrigerador. Vierte el agua fría en una taza medidora. Agrega Thermojetics Polvo para Preparar Bebidas sabor durazno-mango, el Herbalife Colágeno y la grenetina sin sabor hasta que se mezcle. Agrega gradualmente el agua hirviendo, moviendo continuamente para mezclar y lograr una consistencia suave. Vierte la mezcla en una botella para que sea más fácil vaciar en los moldes. Vacía en los moldes para gomitas y refrigera al menos 30 minutos hasta que estén firmes.",
  },
  {
    id: 8,
    name: "POLLO AL VINO TINTO",
    image: require("../assets/pollo.webp"),
    ingredients: [
      "2 pechugas de pollo.",
      "Sal y pimienta al gusto.",
      "½ cucharadita de paprika (pimiento dulce).",
      "¼ taza de yogurt griego, natural.",
      "½ cucharadita de orégano molido.",
      "1 cucharada de vinagre de vino tinto.",
      "1 cucharadita de aceite de oliva.",
    ],
    instructions: [
      "Lava la pechuga de pollo, salpimienta y mételas en una bolsita ziploc En un tazón pequeño mezcla el yogurt, el vinagre de vino tinto, el orégano y puedes agregar un poco de perejil a elección.",
      "Una vez lista la mezcla vierte el marinado a las bolsitas ziploc con el pollo y masajea hasta que el pollo quede cubierto..",
      "Deja reposar 3horas en el refrigerador. Pasado el tiempo precalienta un sartén y agrega una cucharadita de aceite de oliva, cocina el pollo hasta agarrar una tonalidad dorada por ambos lados (5 y 3 min).",
      "Deja que repose durante unos minutos y sirve.",
    ],
  },
];

export default function ResetasScreen({ navigation }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openRecipeDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeDetails = () => {
    setSelectedRecipe(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galería de Recetas fits</Text>
      <ScrollView contentContainerStyle={styles.recipeGrid}>
        {recipes.map((recipe) => (
          <TouchableOpacity
            key={recipe.id}
            style={styles.recipeCard}
            onPress={() => openRecipeDetails(recipe)}
          >
            <Image source={recipe.image} style={styles.recipeImage} />
            <Text style={styles.recipeName}>{recipe.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        visible={!!selectedRecipe}
        animationType="slide"
        transparent={false}
        onRequestClose={closeRecipeDetails}
      >
        {selectedRecipe && (
          <View style={styles.modalContainer}>
            <Image source={selectedRecipe.image} style={styles.modalImage} />
            <Text style={styles.modalTitle}>{selectedRecipe.name}</Text>
            <ScrollView style={{flex: 1}}>
              <Text style={styles.sectionTitle}>Ingredientes:</Text>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.ingredientItem}>
                  {ingredient}
                </Text>
              ))}
              <Text style={styles.sectionTitle}>Instrucciones:</Text>
              <Text style={styles.instructionsText}>
                {selectedRecipe.instructions}
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeRecipeDetails}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  recipeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  recipeCard: {
    width: "45%",
    margin: 8,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
    shadowOpacity: 0.2,
  },
  recipeImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  recipeName: {
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  modalImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  ingredientItem: {
    paddingVertical: 5,
  },
  instructionsText: {
    marginTop: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
