import React from "react";

import Value from "../value/Value";

import classes from "./TheValues.module.css";

import { ReactComponent as LearningIcon } from "../../../../../assets/values and articles/values/learning icon.svg";
import { ReactComponent as IntegrityIcon } from "../../../../../assets/values and articles/values/integrity icon.svg";
import { ReactComponent as CreativityIcon } from "../../../../../assets/values and articles/values/creativity icon.svg";
import { ReactComponent as TriumphIcon } from "../../../../../assets/values and articles/values/triumph icon.svg";
import Values from "../values/Values";

const VALUES = [
  {
    title: "למידה",
    text1:
      "הקרן מונעת מרעב לידע ודוגלת בלמידה מתמדת, האחד מהשני וממעוררי השראה ופורצי דרך ברחבי העולם",
    text2:
      "בשבילנו, ידע הוא המפתח לחשיבה ביקורתית וקבלת החלטות שקולות. הקרן משתוקקת לבדוק וליצור רעיונות וכלים חדשים שישפרו את הייתרון התחרותי",
    icon: <LearningIcon />,
  },
  {
    title: "יצירתיות",
    text1:
      "עובדי הקרן חושבים מחוץ , לקופסא. תוך כדי עשייה ולמידה עם חשיבה מתמדת איך לפתח את הדבר הבא בעזרת שילוב של קדמה טכנולוגית ודרכים מוכרות . יותר ומוכרות פחות ",
    text2:
      "בניגוד למתחרים, אנחנו מאמינים שישנה יותר מדרך אחת, וחוקרים את כל הדרכים בשביל לשדרג את האסטרטגיות הקיימות וליצור .אסטרטגיות חדשות",
    icon: <CreativityIcon />,
  },
  {
    title: "יושרה",
    text1:
      "הקרן לא מתפשרת על הדרך הנכונה, מאמינה בישירות ושקיפות מול לקוחותיה. הקרן פועלת מתוך שיקולי דעת רציונליים בהחלטות . שמתבטאים במכתבים למשקיעים",
    text2:
      "הקרן מקפידה לעבוד עם , אנשי מקצוע מהמובילים בתחומם .המאפשרים לנו לנצח ביושרה",
    icon: <IntegrityIcon />,
  },
  {
    title: "נצחון",
    text1:
      "אנחנו כאן כדי לנצח! הקרן ומנהליה משתפרים באופן קבוע בשביל לגבור .על ה”יריבים” שלנו",
    text2:
      "הקרן לא מפחדת מבעיות קשות ומתעמתתת איתם בשביל לייצר את מה שנראה בלתי אפשרי למתחרים שלנו",
    icon: <TriumphIcon />,
  },
];

const TheValues = () => {
  const valuesList = VALUES.map((value) => {
    return <Value key={value.title} {...value} />;
  });

  return <div className={classes.values}>{valuesList}</div>;
};

export default TheValues;
