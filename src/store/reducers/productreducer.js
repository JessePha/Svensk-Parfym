import en from "../../shared/Images/en.png";
import fröjd from "../../shared/Images/fröjd.png";
import idyll from "../../shared/Images/idyll.png";
import ljus from "../../shared/Images/ljus.png";
import prakt from "../../shared/Images/prakt.png";
import sadel from "../../shared/Images/sadel.png";
import skymning from "../../shared/Images/skymning.png";
import stilla from "../../shared/Images/stilla.png";
import virke from "../../shared/Images/virke.png";

const initialState = {
  items: [
    {
      img: en,
      name: "En",
      description:
        "En is a tribute to the Swedish juniper where all the aspects of this marvellous tree is interpreted. Juniper is a coniferous plant of the cypress family and very precious to us in Sweden, being used in fine carpentry, artisanal handicraft as well as in brewery, distillery and gastronomy. Fragrance notes and accords to be found in En are pinewood, juniper berries, juniper wood, black pepper, tobacco and oak moss. En is Swedish for junipe",
      size: ["30ml bottle", "5ml Deluxe sample"],
      price: [175, 850],
      stock: 5,
      available: true,
    },
    {
      img: fröjd,
      name: "Fröjd",
      description:
        "Fröjd is a celebration of the cherry. Cherries and cherry trees appears in Swedish history and literature as symbols of true success and wealth and, when looking into it more deeply, an inner strength from overcoming hardship. Also, big sweet cherries are amongst the most exclusive fruits of the Swedish summer - beautiful, inviting and calling for that special attention. The fragrance Fröjd features rich notes of cherry, ambergris, vetiver, dry woody notes and musk. Fröjd is Swedish",
      size: ["30ml bottle", "5ml Deluxe sample"],
      price: [175, 850],
      stock: 5,
      available: true,
    },
    {
      img: idyll,
      name: "Idyll",
      description:
        "Idyll is a comfort scent that captures the dynamics between the chilly air and the warming energy of spring. Unique to the northern parts of Sweden the extraordinary cloudberry thrives in areas between shadow and light, between cold and warmth. It seeks that sweet spot, the ideal place for a pleasurable life. Idyll features notes of cloudberries, Seville orange, warm spices, tobacco, patchouli, vetiver, musk. Idyll is Swedish for ideal place. ",
      size: ["30ml bottle", "5ml Deluxe sample"],
      price: [175, 850],
      stock: 5,
      available: true,
    },
    {
      img: ljus,
      name: "Ljus",

      description:
        "Ljus is created out of inspiration from the colourful, bright and uplifting light of springtime with its mesmerising effect on winter beaten souls. The light is transforming, exciting and warming. In the fragrance Ljus you will find wonderful and natural notes of red citruses, blood orange, red mandarin, together with neroli and coriander leaf. The fragrance is built upon a base of musk with some gentle aquatic notes and soft vetiver. Ljus is Swedish for light.",
      size: ["30ml bottle", "5ml Deluxe sample"],
      price: [175, 850],
      stock: 5,
      available: true,
    },
    {
      img: prakt,
      name: "Prakt",
      description:
        "Prakt is Swedish for magnificence. Prakt has plenty of blackcurrant berries and blackcurrant leaves, but also delicious notes of rhubarb, gooseberries, apples, rain and earthy notes. This composition is all about the fragrances that can be experienced in a Swedish summer garden. When the garden is in its fullest glory and an intense summer rain have just fallen, wonderful fragrances and sparkling lights amongst big water droplets dancing everywhere. This is the feeling I want to evoke in Prakt. ",
      size: ["30ml bottle", "5ml Deluxe sample"],
      price: [175, 850],
      stock: 5,
      available: true,
    },
    {
      img: sadel,
      name: "Sadel",
      description:
        "Sadel is a tribute to Swedish design and craftsmanship. Sadel is about letting go of all insignificant and to focus on simplicity, usability and comfort. Sadel is about clarity and engagement, about the essential connection between creator and creation, master and creature, about the connection between rider and ride. Fragrance notes and accords to be found in Sadel are leather, butterscotch, caramel, vanilla and tobacco. Sadel is Swedish for saddle. ",
      size: ["30ml bottle", "5ml Deluxe sample"],
      price: [175, 850],
      stock: 5,
      available: true,
    },
    {
      img: skymning,
      name: "Shymning",
      description:
        "Skymning was created as a manifestation of the sunset sky and its emotional effect on our lives. During a vast part of the year most parts of Sweden lacks sunlight due to grey cloudy skies. Intense colourful skies can therefore cause strong mixed emotions of awe and envy, pleasure and sadness. If this heartfelt phenomenon would be a fragrance, this would be it. It has notes of iris and violet, violet candy and musk. Skymning is Swedish for dusk.  ",
      size: ["30ml bottle", "5ml Deluxe sample"],
      price: [175, 850],
      stock: 5,
      available: true,
    },
    {
      img: stilla,
      name: "Stilla",
      description:
        "Stilla is an interpretation of early mornings and the fragrances that can be experienced in cold morning air. The fragrance has eucalyptus, lavender, cedar wood, juniper wood and musk. When the morning air is cold and drowsy, you are newly awake and the sun has just gone up, smells are experienced in a different way and that was just the experience I wanted to capture in this fragrance. Stilla is Swedish for calm",
      size: ["30ml bottle", "5ml Deluxe sample"],
      price: [175, 850],
      stock: 5,
      available: true,
    },
    {
      img: virke,
      name: "Virke",
      description:
        "Virke is a refreshing creation with raspberries, ash wood, ambergris, musk. In Virke the scent of newly picked raspberries has been interpreted in depth with all its nuances. The inspiration for Virke comes from my own fascination of picking and eating raspberries in the forest of Bokskogen around the Castle of Torup. I have always thought raspberries smells like summer. Delicious and carefree Virke was invented with the intention of making your day feel like vacation. Virke means timber. ",
      size: ["30ml bottle", "5ml Deluxe sample"],
      price: [175, 850],
      stock: 5,
      available: true,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  return state;
};

export default productReducer;
