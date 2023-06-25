import React from "react";
import "./Section2.css";
import Faq from "react-faq-component";

function Section2() {
  const data = {
    title: "some advices for take care of a new born baby and his follow up",
    rows: [
      {
        title: "1 Feeding :",
        content:
          "Newborns need to be fed every 2-3 hours. Breastfeeding is recommended as it provides essential nutrients for the baby's growth and helps build their immune system. If you are unable to breastfeed, consult your doctor about the best formula milk for your baby.",
      },
      {
        title: "2 Sleeping",
        content:
          "Newborns sleep for most of the day, but they need to be fed every few hours. Make sure your baby is put to sleep on their back and in a safe sleeping environment, such as a crib or bassinet.        ",
      },
      {
        title: "3 Diapering:    ",
        content:
          "Eating a healthy and balanced diet is important for both the mother and the baby. This includes plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats.        ",
      },
      {
        title: "4 Bathing",
        content:
          "Newborns do not need a bath every day, but you can give them a sponge bath every 2-3 days. Make sure the water is warm, not hot, and use a mild baby soap.",
      },

      {
        title: "5 Doctor's visits:",
        content:
          "Follow up with your pediatrician regularly to monitor your baby's growth and development. Make sure your baby receives all the recommended vaccinations.",
      },

      {
        title: "6 Bonding : ",
        content:
          "Spend time bonding with your baby by talking, singing, and cuddling. This helps create a strong emotional connection and can also help with your baby's cognitive development.",
      },

      {
        title: "7 Safety:",
        content:
          "every baby is unique, and what works for one may not work for another. It's essential to trust your instincts as a parent and consult your doctor if you have any concerns about your baby's health or development.          ",
      },

      {
        title: "8 Remember",
        content:
          "Ensure that your baby is always in a safe environment. Never leave your baby unattended on a high surface, such as a changing table. Keep small objects out of reach and make sure that any cords or wires are securely tied.",
      },

      {
        title: "9 Sleeping schedule and habits:",
        content:
          "Record your baby's sleep patterns, such as how many hours they sleep at night and during naps. Share any tips you have for getting your baby to sleep or for dealing with common sleep issues like night waking.",
      },

      {
        title: "10-Playtime and activities:",
        content:
          "Share photos or videos of your baby playing and exploring, and talk about the different activities you do together to encourage your baby's development and learning.",
      },
    ],
  };

  const styles = {
     bgColor: 'white',
    titleTextColor: "#000000",
    titleTextAlign : "center",
     titleTextSize: '25px',
    rowContentColor: '#000000',
     arrowColor: "red",

  };

  const config = {
    animate: true,
    arrowIcon: "👀",
    tabFocus: true,
    openOnload: 0,
    collapseIcon: "-",
  };

  return (
    <div>
      <div className="parent-section-2">
        <div className="faq">
        <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </div>
  );
}

export default Section2;
