  const flowers = [
    {
        name: "",
        scientific_name: "",
        image: "images/.jpg",
        meaning: "",
        color_variations: "",
        price_range: "",
        seasonality: " ",
        uses: ""
    },
    {
        name: "Snapdragon",
        scientific_name: "Antirrhinum",
        image: "images/snapdragon.jpg",
        meaning: "Strength, Grace",
        color_variations: "Pink, Yellow, Red",
        price_range: "₱100 - ₱400",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Begonia",
        scientific_name: "Begonia",
        image: "images/begonia.jpg",
        meaning: "Caution",
        color_variations: "Red, Pink, Yellow",
        price_range: "₱80 - ₱300",
        seasonality: "Year-round",
        uses: "Ornamental"
    },
    {
        name: "Daisy",
        scientific_name: "Bellis perennis",
        image: "images/daisy.jpg",
        meaning: "Innocence, Joy",
        color_variations: "White, Yellow, Pink",
        price_range: "₱50 - ₱200",
        seasonality: "Spring, Summer",
        uses: "Garden Plants, Herbal Tea"
    },
    {
        name: "Bellflower",
        scientific_name: "Campanula",
        image: "images/bellflower.jpg",
        meaning: "Gratitude, Humility",
        color_variations: "Blue, Purple, White",
        price_range: "₱100 - ₱350",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Camellia",
        scientific_name: "Camellia",
        image: "images/camellia.jpg",
        meaning: "Admiration, Perfection",
        color_variations: "Pink, Red, White",
        price_range: "₱200 - ₱600",
        seasonality: "Winter",
        uses: "Ornamental, Tea"
    },
    {
        name: "Chili Pepper Flower",
        scientific_name: "Capsicum",
        image: "images/chili_flower.jpg",
        meaning: "Protection, Strength",
        color_variations: "White",
        price_range: "₱50 - ₱200",
        seasonality: "Summer",
        uses: "Culinary, Ornamental"
    },
    {
        name: "Celosia",
        scientific_name: "Celosia argentea",
        image: "images/celosia.jpg",
        meaning: "Warmth, Happiness",
        color_variations: "Red, Yellow, Orange",
        price_range: "₱50 - ₱250",
        seasonality: "Summer, Fall",
        uses: "Ornamental"
    },
    {
        name: "Chrysanthemum",
        scientific_name: "Chrysanthemum",
        image: "images/chrysanthemum.jpg",
        meaning: "Longevity, Happiness",
        color_variations: "Red, Yellow, White",
        price_range: "₱80 - ₱300",
        seasonality: "Fall",
        uses: "Ornamental"
    },
    {
        name: "Clivia",
        scientific_name: "Clivia miniata",
        image: "images/clivia.jpg",
        meaning: "Prosperity, Good Fortune",
        color_variations: "Orange, Yellow",
        price_range: "₱150 - ₱500",
        seasonality: "Winter, Spring",
        uses: "Ornamental"
    },
    {
        name: "Cosmos",
        scientific_name: "Cosmos bipinnatus",
        image: "images/cosmos.jpg",
        meaning: "Order, Harmony",
        color_variations: "Pink, White, Red",
        price_range: "₱50 - ₱250",
        seasonality: "Summer, Fall",
        uses: "Ornamental, Garden Plants"
    },
    {
        name: "Foxglove",
        scientific_name: "Digitalis",
        image: "images/foxglove.jpg",
        meaning: "N/A",
        color_variations: "Purple, Pink, White",
        price_range: "₱100 - ₱400",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Freesia",
        scientific_name: "Freesia",
        image: "images/freesia.jpg",
        meaning: "Friendship, Trust",
        color_variations: "Yellow, White, Pink, Purple",
        price_range: "₱150 - ₱500",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Gardenia",
        scientific_name: "Gardenia jasminoides",
        image: "images/gardenia.jpg",
        meaning: "N/A",
        color_variations: "White",
        price_range: "₱150 - ₱500",
        seasonality: "Summer",
        uses: "Perfume, Decorations"
    },
    {
        name: "Geranium",
        scientific_name: "Geranium pratense",
        image: "images/geranium.jpg",
        meaning: "Friendship, Good Health",
        color_variations: "Blue, Violet, Pink, White",
        price_range: "₱100 - ₱400",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Gladiolus",
        scientific_name: "Gladiolus",
        image: "images/gladiolus.jpg",
        meaning: "Strength, Moral Integrity",
        color_variations: "Red, Pink, Yellow, White",
        price_range: "₱100 - ₱400",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Hellebore",
        scientific_name: "Helleborus",
        image: "images/hellebore.jpg",
        meaning: "Serenity, Tranquility",
        color_variations: "White, Green, Purple",
        price_range: "₱150 - ₱500",
        seasonality: "Winter, Spring",
        uses: "Ornamental, Medicinal"
    },
    {
        name: "Amaryllis",
        scientific_name: "Hippeastrum",
        image: "images/amaryllis.jpg",
        meaning: "Determination, Pride",
        color_variations: "Red, Pink, White",
        price_range: "₱150 - ₱500",
        seasonality: "Winter, Spring",
        uses: "Ornamental"
    },
    {
        name: "Hibiscus",
        scientific_name: "Hibiscus",
        image: "images/hibiscus.jpg",
        meaning: "Delicate Beauty",
        color_variations: "Red, Yellow, Pink",
        price_range: "₱80 - ₱300",
        seasonality: "Summer",
        uses: "Tea, Skincare"
    },
    {
        name: "Hydrangea",
        scientific_name: "Hydrangea macrophylla",
        image: "images/hydrangea.jpg",
        meaning: "Gratitude, Understanding",
        color_variations: "Blue, Pink, Purple, White",
        price_range: "₱300 - ₱800",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Bluebells",
        scientific_name: "Hyacinthoides",
        image: "images/bluebell.jpg",
        meaning: "Humility",
        color_variations: "Blue",
        price_range: "₱100 - ₱400",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Iris",
        scientific_name: "Iris",
        image: "images/iris.jpg",
        meaning: "Wisdom, Hope",
        color_variations: "Purple, Blue, White",
        price_range: "₱120 - ₱500",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Jasmine",
        scientific_name: "Jasminum",
        image: "images/jasmine.jpg",
        meaning: "Love, Beauty",
        color_variations: "White, Yellow",
        price_range: "₱100 - ₱400",
        seasonality: "Spring, Summer",
        uses: "Perfumes, Aromatherapy"
    },
    {
        name: "Sweet Pea",
        scientific_name: "Lathyrus odoratus",
        image: "images/sweet_pea.jpg",
        meaning: "Delicate Pleasure",
        color_variations: "Purple, Pink, White",
        price_range: "₱50 - ₱200",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Lavander",
        scientific_name: "Lavandula",
        image: "images/lavander.jpg",
        meaning: "Calmness, Serenity",
        color_variations: "Purple, Blue",
        price_range: "₱150 - ₱500",
        seasonality: "Summer",
        uses: "Aromatherapy, Essential Oils"
    },
    {
        name: "Lily",
        scientific_name: "Lilium",
        image: "images/lily.jpg",
        meaning: "Purity and refined beauty",
        color_variations: "White, Pink, Orange, Yellow",
        price_range: "₱150 - ₱600",
        seasonality: "Summer",
        uses: "Ornamental, Perfumery"
    },
    {
        name: "Magnolia",
        scientific_name: "Magnolia",
        image: "images/magnolia.jpg",
        meaning: "Dignity, Nobility",
        color_variations: "White, Pink, Purple",
        price_range: "₱200 - ₱600",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Daffodil",
        scientific_name: "Narcissus",
        image: "images/daffodil.jpg",
        meaning: "New Beginnings",
        color_variations: "White, Yellow",
        price_range: "₱150 - ₱500",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Petunia",
        scientific_name: "Petunia",
        image: "images/petunia.jpg",
        meaning: "Resentment, Anger",
        color_variations: "Pink, Purple, White, Red",
        price_range: "₱50 - ₱200",
        seasonality: "Summer",
        uses: "Ornamental"
    },
    {
        name: "Primrose",
        scientific_name: "Primula",
        image: "images/primrose.jpg",
        meaning: "First Love",
        color_variations: "Yellow, Pink, Purple",
        price_range: "₱100 - ₱300",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Azalea",
        scientific_name: "Rhododendron",
        image: "images/azalea.jpg",
        meaning: "Temperance, Fragility",
        color_variations: "Pink, White, Red",
        price_range: "₱100 - ₱400",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Rose",
        scientific_name: "Rosa",
        image: "images/rose.jpg",
        meaning: "Love and passion",
        color_variations: "Red, Pink, White, Yellow",
        price_range: "₱150 - ₱600",
        seasonality: "Year-round",
        uses: "Ornamental"
    },
    {
        name: "Sunflower",
        scientific_name: "Helianthus",
        image: "images/sunflower.jpg",
        meaning: "Adoration, loyalty, longevity",
        color_variations: "Yellow",
        price_range: "₱50 - ₱200",
        seasonality: "Summer",
        uses: "Ornamental, Edible seeds"
    },
    {
        name: "Nasturtium",
        scientific_name: "Tropaeolum",
        image: "images/nasturtium.jpg",
        meaning: "Victory, Patriotism",
        color_variations: "Red, Yellow, Orange",
        price_range: "₱50 - ₱250",
        seasonality: "Spring, Summer",
        uses: "Ornamental"
    },
    {
        name: "Tulip",
        scientific_name: "Tulipa",
        image: "images/tulip.jpg",
        meaning: "Love, Prosperity",
        color_variations: "Red, Yellow, Pink, White",
        price_range: "₱150 - ₱500",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Violet",
        scientific_name: "Viola",
        image: "images/violet.jpg",
        meaning: "Faithfulness, Modesty",
        color_variations: "Purple, White, Yellow",
        price_range: "₱50 - ₱200",
        seasonality: "Spring",
        uses: "Ornamental"
    },
    {
        name: "Zinnia",
        scientific_name: "Zinnia",
        image: "images/zinnia.jpg",
        meaning: "Endurance, Lasting Friendship",
        color_variations: "Red, Pink, Orange, Yellow",
        price_range: "₱50 - ₱200",
        seasonality: "Summer, Fall",
        uses: "Ornamental"
    }
    ];
    document.addEventListener("DOMContentLoaded", () => {
      const resultsBody = document.getElementById("results-body");
      const noResults = document.getElementById("no-results");
      const searchInput = document.getElementById("search-input");

function renderFlowers(query = "") {
  resultsBody.innerHTML = "";
  const lowerQuery = query.toLowerCase();

  const filtered = flowers.filter(flower => {
    return (
      flower.name.toLowerCase().includes(lowerQuery) ||
      flower.scientific_name.toLowerCase().includes(lowerQuery) ||
      flower.meaning.toLowerCase().includes(lowerQuery) ||
      flower.color_variations.toLowerCase().includes(lowerQuery) ||
      flower.seasonality.toLowerCase().includes(lowerQuery) ||
      flower.uses.toLowerCase().includes(lowerQuery)
    );
  });

  if (filtered.length === 0) {
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";
  filtered.forEach(flower => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${flower.name}</strong></td>
      <td>${flower.scientific_name}</td>
      <td>
        ${
          flower.image
            ? `<img src="${flower.image}" alt="${flower.scientific_name}">`
            : `<div class="no-image">No image available</div>`
        }
      </td>
      <td>${flower.meaning}</td>
      <td>${flower.color_variations}</td>
      <td>${flower.price_range}</td>
      <td>${flower.seasonality}</td>
      <td>${flower.uses}</td>
    `;
    resultsBody.appendChild(row);
  });
}



      document.getElementById("search-form").addEventListener("submit", e => {
        e.preventDefault();
        const query = searchInput.value.trim();
        renderFlowers(query);
      });
    });