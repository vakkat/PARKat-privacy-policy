// privacy-i18n.js
// This page defines I18N; app.js reads it and applies translations.

window.I18N = {
  el: {
    nav_home: "Αρχική",
    nav_download: "Λήψη",
    nav_guide: "Οδηγίες χρήσης",
    nav_privacy: "Privacy Policy",
    pill_research: "Research pilot",

    privacy_title: "Privacy Policy",
    privacy_subtitle: "Πώς συλλέγουμε, χρησιμοποιούμε, αποθηκεύουμε και διαγράφουμε δεδομένα στο πλαίσιο του ερευνητικού πειράματος.",
    privacy_effective_label: "Effective date:",
    privacy_effective_value: " 13 February 2026",

    pp_1_title: "1. Δεδομένα που συλλέγουμε",
    pp_1_a: "Ακριβής τοποθεσία (GPS) κατά τη διάρκεια διαδρομών, συμπεριλαμβανομένης πιθανής συλλογής στο παρασκήνιο όταν είναι ενεργή η καταγραφή.",
    pp_1_b: "Χρονικές σημάνσεις (timestamps) σχετικές με την έναρξη/λήξη διαδρομών και τα επιμέρους στάδια της διαδρομής.",
    pp_1_c: "Δεδομένα κίνησης συσκευής (π.χ. accelerometer) για ερευνητική ανάλυση της συμπεριφοράς αναζήτησης στάθμευσης.",
    pp_1_d: "Αναγνωριστικό χρήστη (Firebase UID) και τεχνικά μεταδεδομένα που απαιτούνται για τη λειτουργία της εφαρμογής.",

    pp_2_title: "2. Σκοπός επεξεργασίας",
    pp_2_text: "Η συλλογή δεδομένων γίνεται αποκλειστικά για ακαδημαϊκή/ερευνητική χρήση, με στόχο την ανάλυση της συμπεριφοράς αναζήτησης στάθμευσης και τη μελέτη της αστικής κινητικότητας.",

    pp_3_title: "3. Πού αποθηκεύονται τα δεδομένα",
    pp_3_text: "Τα δεδομένα αποθηκεύονται σε υποδομή Firebase/Firestore. Η μετάδοση δεδομένων γίνεται μέσω κρυπτογραφημένης σύνδεσης (HTTPS).",

    pp_4_title: "4. Κοινοποίηση δεδομένων",
    pp_4_a: "Δεν πωλούμε δεδομένα σε τρίτους.",
    pp_4_b: "Δεν κοινοποιούμε προσωπικά δεδομένα σε τρίτους για εμπορικούς σκοπούς.",
    pp_4_c: "Μπορεί να παραχθούν ανώνυμα/συγκεντρωτικά αποτελέσματα για επιστημονικές δημοσιεύσεις και παρουσιάσεις.",

    pp_5_title: "5. Διατήρηση δεδομένων",
    pp_5_text: "Τα δεδομένα διατηρούνται μόνο για όσο απαιτείται για τους σκοπούς του ερευνητικού έργου. Όπου είναι δυνατό, τα δεδομένα παράγονται σε ανωνυμοποιημένη μορφή για επιστημονική χρήση.",

    pp_delete_title: "Διαγραφή δεδομένων",
    pp_delete_text: "Μπορείς να ζητήσεις διαγραφή των δεδομένων σου (και/ή του λογαριασμού σου) οποιαδήποτε στιγμή. Στείλε αίτημα στο παρακάτω email",
    pp_contact_label: "Contact",
    pp_contact_value: " kvakrinou@mail.ntua.gr",

    pp_6_title: "6. Τα δικαιώματά σου",
    pp_6_text: "Έχεις δικαίωμα πρόσβασης, διόρθωσης και διαγραφής των δεδομένων σου. Για οποιοδήποτε αίτημα σχετικό με τα δεδομένα σου, επικοινώνησε στο παραπάνω email.",

    pp_7_title: "7. Επικοινωνία",
    pp_7_text: "PARKat – ερευνητική εφαρμογή",

    footer_left: "© PARKat – DSAIT",
    footer_privacy: "Privacy Policy"
  },

  en: {
    nav_home: "Home",
    nav_download: "Download",
    nav_guide: "User guide",
    nav_privacy: "Privacy Policy",
    pill_research: "Research pilot",

    privacy_title: "Privacy Policy",
    privacy_subtitle: "How we collect, use, store, and delete data within the research pilot.",
    privacy_effective_label: "Effective date:",
    privacy_effective_value: " 13 February 2026",

    pp_1_title: "1. Data we collect",
    pp_1_a: "Precise location (GPS) during trips, including possible background collection while recording is active.",
    pp_1_b: "Timestamps related to trip start/end and phase segments (e.g., driving/cruising/parked-walking).",
    pp_1_c: "Device motion data (e.g., accelerometer) to support research analysis of parking-search behavior.",
    pp_1_d: "User identifier (Firebase UID) and technical metadata required to operate the app.",

    pp_2_title: "2. Purpose of processing",
    pp_2_text: "Data is collected exclusively for academic research purposes to analyze parking-search behavior and urban mobility patterns.",

    pp_3_title: "3. Where data is stored",
    pp_3_text: "Data is stored in Firebase/Firestore infrastructure. Data transmission uses encrypted connections (HTTPS).",

    pp_4_title: "4. Data sharing",
    pp_4_a: "We do not sell data to third parties.",
    pp_4_b: "We do not share personal data for commercial purposes.",
    pp_4_c: "Anonymous or aggregated outputs may be produced for scientific publications and presentations.",

    pp_5_title: "5. Data retention",
    pp_5_text: "Data is retained only as long as necessary for the research project. Data are anonymized or aggregated for scientific use.",

    pp_delete_title: "Data deletion",
    pp_delete_text: "You may request deletion of your data (and/or account) at any time. Please email us from the address used in the pilot.",
    pp_contact_label: "Contact",
    pp_contact_value: "kvakrinou@mail.ntua.gr",

    pp_6_title: "6. Your rights",
    pp_6_text: "You may request access, correction, and deletion of your data. For any request related to your data, contact the email above.",

    pp_7_title: "7. Contact",
    pp_7_text: "PARKat – research application.",

    footer_left: "© PARKat – DSAIT",
    footer_privacy: "Privacy Policy"
  }
};
