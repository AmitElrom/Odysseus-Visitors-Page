import React from "react";

import Value from "../value/Value";

import classes from "./TheValues.module.css";

// desktop icons
import { ReactComponent as LearningIcon } from "../../../../../../assets/values and articles/values/desktop/learning_icon.svg";
import { ReactComponent as IntegrityIcon } from "../../../../../../assets/values and articles/values/desktop/integrity_icon.svg";
import { ReactComponent as CreativityIcon } from "../../../../../../assets/values and articles/values/desktop/creativity_icon.svg";
import { ReactComponent as TriumphIcon } from "../../../../../../assets/values and articles/values/desktop/triumph_icon.svg";

// mobile icon
import { ReactComponent as LearningMobileIcon } from "../../../../../../assets/values and articles/values/mobile/learning_icon.svg";
import { ReactComponent as IntegrityMobileIcon } from "../../../../../../assets/values and articles/values/mobile/integrity_icon.svg";
import { ReactComponent as CreativityMobileIcon } from "../../../../../../assets/values and articles/values/mobile/creativity_icon.svg";
import { ReactComponent as TriumphMobileIcon } from "../../../../../../assets/values and articles/values/mobile/triumph_icon.svg";

const VALUES = [
  {
    title: "למידה",
    text1:
      "הקרן מונעת מרעב לידע ודוגלת בלמידה מתמדת, האחד מהשני וממעוררי השראה ופורצי דרך ברחבי העולם",
    text2:
      "בשבילנו, ידע הוא המפתח לחשיבה ביקורתית וקבלת החלטות שקולות. הקרן משתוקקת לבדוק וליצור רעיונות וכלים חדשים שישפרו את הייתרון התחרותי",
    Icon: LearningIcon,
    IconMobile: LearningMobileIcon,
  },
  {
    title: "יצירתיות",
    text1:
      "עובדי הקרן חושבים מחוץ , לקופסא. תוך כדי עשייה ולמידה עם חשיבה מתמדת איך לפתח את הדבר הבא בעזרת שילוב של קדמה טכנולוגית ודרכים מוכרות . יותר ומוכרות פחות ",
    text2:
      "בניגוד למתחרים, אנחנו מאמינים שישנה יותר מדרך אחת, וחוקרים את כל הדרכים בשביל לשדרג את האסטרטגיות הקיימות וליצור .אסטרטגיות חדשות",
    Icon: CreativityIcon,
    IconMobile: CreativityMobileIcon,
  },
  {
    title: "יושרה",
    text1:
      "הקרן לא מתפשרת על הדרך הנכונה, מאמינה בישירות ושקיפות מול לקוחותיה. הקרן פועלת מתוך שיקולי דעת רציונליים בהחלטות . שמתבטאים במכתבים למשקיעים",
    text2:
      "הקרן מקפידה לעבוד עם , אנשי מקצוע מהמובילים בתחומם .המאפשרים לנו לנצח ביושרה",
    Icon: IntegrityIcon,
    IconMobile: IntegrityMobileIcon,
  },
  {
    title: "נצחון",
    text1:
      "אנחנו כאן כדי לנצח! הקרן ומנהליה משתפרים באופן קבוע בשביל לגבור .על ה”יריבים” שלנו",
    text2:
      "הקרן לא מפחדת מבעיות קשות ומתעמתתת איתם בשביל לייצר את מה שנראה בלתי אפשרי למתחרים שלנו",
    Icon: TriumphIcon,
    IconMobile: TriumphMobileIcon,
  },
];

const TheValues = () => {
  const valuesList = VALUES.map((value) => {
    return <Value key={value.title} {...value} />;
  });

  return <div className={classes.values}>{valuesList}</div>;
};

export default TheValues;
