import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        features: "Features",
        gallery: "Gallery",
        about: "About",
        testimonials: "Testimonials",
        contact: "Contact Us",
        download: "Download"
      },

      hero: {
        badge: "Connect with Faith Every Day",
        title1: "Daily Divine Posters",
        title2: "for a",
        titleHighlight: "Blessed Life",
        description:
          "Aalayam is your daily companion for devotional posters, temple updates, festival wishes, quotes, slokas and more. Spread devotion. Share blessings.",
        download: "Download Now",
        watch: "Watch Video"
      },

      categories: {
        explore: "EXPLORE",
        title: "Poster Categories",
        description:
          "Everything you need for your devotion and inspiration",
        more: "More",

        items: {
          ganesha: "Lord Ganesha",
          devi: "Divine Devi",
          durga: "Goddess Durga",
          karupu: "Lord Karupu",
          shiva: "Lord Shiva",
          ram: "Ram Darbar",
          ayyappa: "Lord Ayyappa",
          lakshmi: "Maha Lakshmi",
          maruthi: "Maruthi",
          saraswati: "Goddess Saraswati",
          muruga: "Lord Muruga",
          azhagar: "Lord Azhagar"
        }
      },

      features: {
        eyebrow: "Why you'll love it",
        title: "Crafted for every occasion",

        items: {
          daily: {
            title: "Daily New Posters",
            desc: "Fresh devotional posters every day"
          },

          language: {
            title: "Multi Language",
            desc: "Tamil, English & Hindi malayalam"
          },

          create: {
            title: "Create & Personalize",
            desc: "Add your name and create posters"
          },

          share: {
            title: "Share Instantly",
            desc: "WhatsApp, Facebook & more"
          },

          download: {
            title: "Download Free",
            desc: "Save as wallpaper easily"
          },

          favorites: {
            title: "Save Favorites",
            desc: "Manage your favorite posters"
          }
        }
      },

      about: {
        heroBadge: "Welcome to Aalayam",
        heroTitle: "Our Divine Vision",
        heroText:
          "Discover a world of devotion through daily posters, temple updates, festival wishes, quotes and spiritual inspiration.",
        happyUsers: "1L+ Happy Users",
        exploreAlayam: "Explore Aalayam",

        journeyTitle: "Divine Journey",
        journeyText:
          "All inspiring contents to connect you with divine thoughts, festival wishes, quotes, slokas and spiritual updates.",

        happyUsersLabel: "Happy Users",
        ratings: "Ratings",

        missionTitle: "Our Mission",
        missionText:
          "Spreading devotion and positivity through beautiful posters and spiritual content.",
        readMore: "Read More →",

        offerTitle: "What We Offer",
        offerText:
          "Daily posters, festival wishes, quotes, slokas, temple updates and more.",
        explore: "Explore →",

        storyTitle: "Our Story",
        storyText:
          "Aalayam's journey to bring devotion closer to everyone.",
        discover: "Discover →",

        dailyPosters: "Daily Posters",
        dailyPostersText:
          "Handpicked daily posters for inspiration and devotion.",

        multiLanguage: "Multi Language",
        multiLanguageText:
          "Available in multiple languages.",

        createCard: "Create Card",
        createCardText:
          "Design and customize your own devotional posters.",

        createPersonalize: "Create and Personalize"
      },

      featurePage: {
        tag: "ALAYAM FEATURES",

        title1: "Powerful Features",
        title2: "for Your Daily",
        titleHighlight: "Spiritual Journey",

        description:
          "Alayam helps you stay connected with temples, festivals, daily devotional posters and spiritual updates wherever you are.",

        download: "Download App",

        items: {
          daily: {
            title: "Daily New Posters",
            desc: "Fresh devotional posters every day."
          },

          language: {
            title: "Multi Language",
            desc: "Tamil, English, Hindi & more."
          },

          favorites: {
            title: "Save Favorites",
            desc: "Save and manage your favourite posters."
          },

          create: {
            title: "Create & Personalize",
            desc: "Add your name, photo and create posters."
          },

          download: {
            title: "Download Free",
            desc: "Download and set as wallpaper easily."
          },

          share: {
            title: "Share Instantly",
            desc: "Share on WhatsApp, Facebook & more."
          },

          temple: {
            title: "Temple Updates",
            desc: "Get latest temple news, events & timings."
          },

          festival: {
            title: "Festival Wishes",
            desc: "Special posters for all festivals."
          }
        }
      },

      whychoose: {
        subtitle: "WHY CHOOSE ALAYAM",
        title: "Why Choose Aalayam?",
        description:
          "A simple and trusted way to stay connected with devotion every day.",

        cards: {
          trusted: {
            title: "Trusted Content",
            description: "Authentic and verified devotional content"
          },

          fast: {
            title: "Fast & Easy",
            description: "Simple, fast and user friendly"
          },

          beautiful: {
            title: "Beautiful & HD",
            description: "High quality posters in HD format"
          }
        }
      },

      appPreview: {
        title: "App Preview",
        items: {
          daily: "Daily Posters",
          categories: "Explore Categories",
          create: "Create Posters",
          share: "Share with Friends"
        }
      },

      galleryPage: {
        heroTitle: "Divine Gallery",
        heroDescription:
          "Explore our collection of sacred and devotional posters for every deity",
        exploreCollection: "Explore Collection",
        title: "Poster Gallery",
        description:
          "Browse through our complete collection of divine posters",

        items: {
          ganesha: "Lord Ganesha",
          shiva: "Lord Shiva",
          saibaba: "Sai Baba",
          durga: "Goddess Durga",
          karupu: "Lord Karupu",
          ram: "Ram Darbar",
          ayyappa: "Lord Ayyappa",
          maruthi: "Maruthi",
          saraswati: "Goddess Saraswati",
          lakshmi: "Maha Lakshmi",
          muruga: "Lord Muruga",
          azhagar: "Lord Azhagar"
        }
      },

      testimonials: {
        subtitle: "WORDS OF FAITH",
        title: "Loved by Devotees"
      },

      stats: {
        happyUsers: "Happy Users",
        downloads: "Downloads",
        divinePosters: "Divine Posters",
        userRating: "User Rating"
      },

      footer: {
        description:
          "Your daily companion for devotional posters, temple updates and spiritual inspiration.",
        quickLinks: "Quick Links",
        contact: "Contact Us",
        copyright: "© 2025 Aalayam. All rights reserved."
      }
    }
  },

  ta: {
    translation: {
      nav: {
        home: "முகப்பு",
        features: "அம்சங்கள்",
        gallery: "கேலரி",
        about: "எங்களைப் பற்றி",
        testimonials: "பயனர் கருத்துகள்",
        contact: "தொடர்பு கொள்ள",
        download: "பதிவிறக்கம்"
      },

      hero: {
        badge: "தினமும் இறை நம்பிக்கையுடன் இணைந்திருங்கள்",
        title1: "தினசரி தெய்வீக போஸ்டர்கள்",
        title2: "ஒரு",
        titleHighlight: "ஆசீர்வதிக்கப்பட்ட வாழ்க்கைக்காக",
        description:
          "ஆலயம் உங்கள் தினசரி ஆன்மிக துணையாகும். பக்தி போஸ்டர்கள், கோவில் தகவல்கள், திருவிழா வாழ்த்துகள், மேற்கோள்கள், ஸ்லோகங்கள் மற்றும் பலவற்றை வழங்குகிறது. பக்தியை பரப்புங்கள். ஆசீர்வாதங்களை பகிருங்கள்.",
        download: "இப்போது பதிவிறக்கவும்",
        watch: "வீடியோவைப் பார்க்கவும்"
      },

      categories: {
        explore: "ஆராயுங்கள்",
        title: "போஸ்டர் வகைகள்",
        description:
          "உங்கள் பக்தி மற்றும் ஆன்மிகத்திற்குத் தேவையான அனைத்தும்",
        more: "மேலும்",

        items: {
          ganesha: "விநாயகர்",
          devi: "தெய்வீக தேவி",
          durga: "துர்கா தேவி",
          karupu: "கருப்பசாமி",
          shiva: "சிவபெருமான்",
          ram: "ராம தர்பார்",
          ayyappa: "ஐயப்பன்",
          lakshmi: "மகாலட்சுமி",
          maruthi: "மாருதி",
          saraswati: "சரஸ்வதி தேவி",
          muruga: "முருகப்பெருமான்",
          azhagar: "அழகர்"
        }
      },

      features: {
        eyebrow: "நீங்கள் விரும்பும் அம்சங்கள்",
        title: "ஒவ்வொரு தருணத்திற்காகவும் உருவாக்கப்பட்டது",

        items: {
          daily: {
            title: "தினசரி புதிய போஸ்டர்கள்",
            desc: "ஒவ்வொரு நாளும் புதிய பக்தி போஸ்டர்கள்"
          },

          language: {
            title: "பல மொழிகள்",
            desc: "தமிழ், ஆங்கிலம்  இந்தி மலையாளம்"
          },

          create: {
            title: "உருவாக்கி தனிப்பயனாக்குங்கள்",
            desc: "உங்கள் பெயரைச் சேர்த்து போஸ்டர்களை உருவாக்குங்கள்"
          },

          share: {
            title: "உடனடியாக பகிருங்கள்",
            desc: "WhatsApp, Facebook மற்றும் பல"
          },

          download: {
            title: "இலவசமாக பதிவிறக்குங்கள்",
            desc: "எளிதாக Wallpaper ஆக சேமிக்கலாம்"
          },

          favorites: {
            title: "விருப்பங்களில் சேமிக்கவும்",
            desc: "உங்கள் விருப்பமான போஸ்டர்களை நிர்வகிக்கவும்"
          }
        }
      },

      about: {
        heroBadge: "ஆலயத்திற்கு வரவேற்கிறோம்",
        heroTitle: "எங்கள் தெய்வீக பார்வை",
        heroText:
          "தினசரி போஸ்டர்கள், கோவில் தகவல்கள், திருவிழா வாழ்த்துகள், மேற்கோள்கள் மற்றும் ஆன்மிக ஊக்கத்தின் மூலம் பக்தியின் உலகத்தை அறிந்துகொள்ளுங்கள்.",
        happyUsers: "1 லட்சத்திற்கும் மேற்பட்ட மகிழ்ச்சியான பயனர்கள்",
        exploreAlayam: "ஆலயத்தை ஆராயுங்கள்",

        journeyTitle: "தெய்வீக பயணம்",
        journeyText:
          "தெய்வீக சிந்தனைகள், திருவிழா வாழ்த்துகள், மேற்கோள்கள், ஸ்லோகங்கள் மற்றும் ஆன்மிக தகவல்களுடன் உங்களை இணைக்கும் அனைத்து ஊக்கமளிக்கும் உள்ளடக்கங்களும்.",

        happyUsersLabel: "மகிழ்ச்சியான பயனர்கள்",
        ratings: "மதிப்பீடுகள்",

        missionTitle: "எங்கள் நோக்கம்",
        missionText:
          "அழகான போஸ்டர்கள் மற்றும் ஆன்மிக உள்ளடக்கத்தின் மூலம் பக்தியையும் நேர்மறை எண்ணங்களையும் பரப்புவது.",
        readMore: "மேலும் படிக்க →",

        offerTitle: "நாங்கள் வழங்குவது",
        offerText:
          "தினசரி போஸ்டர்கள், திருவிழா வாழ்த்துகள், மேற்கோள்கள், ஸ்லோகங்கள், கோவில் தகவல்கள் மற்றும் பல.",
        explore: "ஆராயுங்கள் →",

        storyTitle: "எங்கள் கதை",
        storyText:
          "பக்தியை அனைவருக்கும் நெருக்கமாக கொண்டு வருவதற்கான ஆலயத்தின் பயணம்.",
        discover: "கண்டறியுங்கள் →",

        dailyPosters: "தினசரி போஸ்டர்கள்",
        dailyPostersText:
          "ஊக்கத்திற்கும் பக்திக்கும் தேர்ந்தெடுக்கப்பட்ட தினசரி போஸ்டர்கள்.",

        multiLanguage: "பல மொழிகள்",
        multiLanguageText:
          "பல மொழிகளில் கிடைக்கிறது.",

        createCard: "போஸ்டரை உருவாக்குங்கள்",
        createCardText:
          "உங்கள் சொந்த பக்தி போஸ்டர்களை வடிவமைத்து தனிப்பயனாக்குங்கள்.",

        createPersonalize: "உருவாக்கி தனிப்பயனாக்குங்கள்"
      },

      featurePage: {
        tag: "ஆலயம் அம்சங்கள்",

        title1: "சிறப்பான அம்சங்கள்",
        title2: "உங்கள் தினசரி",
        titleHighlight: "ஆன்மிக பயணத்திற்காக",

        description:
          "நீங்கள் எங்கு இருந்தாலும் கோவில்கள், திருவிழாக்கள், தினசரி பக்தி போஸ்டர்கள் மற்றும் ஆன்மிக தகவல்களுடன் இணைந்திருக்க ஆலயம் உதவுகிறது.",

        download: "ஆப்பைப் பதிவிறக்கவும்",

        items: {
          daily: {
            title: "தினசரி புதிய போஸ்டர்கள்",
            desc: "ஒவ்வொரு நாளும் புதிய பக்தி போஸ்டர்கள்."
          },

          language: {
            title: "பல மொழிகள்",
            desc: "தமிழ், ஆங்கிலம், இந்தி மற்றும் பல."
          },

          favorites: {
            title: "விருப்பங்களில் சேமிக்கவும்",
            desc: "உங்கள் விருப்பமான போஸ்டர்களை சேமித்து நிர்வகிக்கவும்."
          },

          create: {
            title: "உருவாக்கி தனிப்பயனாக்குங்கள்",
            desc: "உங்கள் பெயர், புகைப்படத்தைச் சேர்த்து போஸ்டர்களை உருவாக்குங்கள்."
          },

          download: {
            title: "இலவசமாக பதிவிறக்குங்கள்",
            desc: "பதிவிறக்கம் செய்து எளிதாக Wallpaper ஆக அமைக்கலாம்."
          },

          share: {
            title: "உடனடியாக பகிருங்கள்",
            desc: "WhatsApp, Facebook மற்றும் பலவற்றில் பகிருங்கள்."
          },

          temple: {
            title: "கோவில் தகவல்கள்",
            desc: "சமீபத்திய கோவில் செய்திகள், நிகழ்வுகள் மற்றும் நேரங்களைப் பெறுங்கள்."
          },

          festival: {
            title: "திருவிழா வாழ்த்துகள்",
            desc: "அனைத்து திருவிழாக்களுக்கும் சிறப்பு போஸ்டர்கள்."
          }
        }
      },

      whychoose: {
        subtitle: "ஆலயத்தை ஏன் தேர்வு செய்ய வேண்டும்",
        title: "ஆலயத்தை ஏன் தேர்வு செய்ய வேண்டும்?",
        description:
          "தினமும் பக்தியுடன் இணைந்திருக்க எளிமையான மற்றும் நம்பகமான வழி.",

        cards: {
          trusted: {
            title: "நம்பகமான உள்ளடக்கம்",
            description: "உண்மையான மற்றும் சரிபார்க்கப்பட்ட ஆன்மிக உள்ளடக்கம்"
          },

          fast: {
            title: "வேகமான & எளிதானது",
            description: "எளிமையான, வேகமான மற்றும் பயனர் நட்பு அனுபவம்"
          },

          beautiful: {
            title: "அழகான & HD",
            description: "HD தரத்தில் உயர்தர போஸ்டர்கள்"
          }
        }
      },

      appPreview: {
        title: "ஆப் மாதிரி காட்சி",
        items: {
          daily: "தினசரி போஸ்டர்கள்",
          categories: "வகைகளை ஆராயுங்கள்",
          create: "போஸ்டர்களை உருவாக்குங்கள்",
          share: "நண்பர்களுடன் பகிருங்கள்"
        }
      },

      galleryPage: {
        heroTitle: "தெய்வீக கேலரி",
        heroDescription:
          "ஒவ்வொரு தெய்வத்திற்குமான புனித மற்றும் பக்தி போஸ்டர்களின் தொகுப்பை ஆராயுங்கள்",
        exploreCollection: "தொகுப்பை ஆராயுங்கள்",
        title: "போஸ்டர் கேலரி",
        description:
          "எங்கள் முழுமையான தெய்வீக போஸ்டர்கள் தொகுப்பை பாருங்கள்",

        items: {
          ganesha: "விநாயகர்",
          shiva: "சிவபெருமான்",
          saibaba: "சாய்பாபா",
          durga: "துர்கா தேவி",
          karupu: "கருப்பசாமி",
          ram: "ராம தர்பார்",
          ayyappa: "ஐயப்பன்",
          maruthi: "மாருதி",
          saraswati: "சரஸ்வதி தேவி",
          lakshmi: "மகாலட்சுமி",
          muruga: "முருகப்பெருமான்",
          azhagar: "அழகர்"
        }
      },

      testimonials: {
        subtitle: "நம்பிக்கையின் குரல்கள்",
        title: "பக்தர்களால் விரும்பப்படும் ஆலயம்"
      },

      stats: {
        happyUsers: "மகிழ்ச்சியான பயனர்கள்",
        downloads: "பதிவிறக்கங்கள்",
        divinePosters: "தெய்வீக போஸ்டர்கள்",
        userRating: "பயனர் மதிப்பீடு"
      },

      footer: {
        description:
          "பக்தி போஸ்டர்கள், கோவில் தகவல்கள் மற்றும் ஆன்மிக ஊக்கத்திற்கான உங்கள் தினசரி துணை.",
        quickLinks: "விரைவு இணைப்புகள்",
        contact: "தொடர்பு கொள்ள",
        copyright: "© 2025 ஆலயம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
      }
    }
  },

  hi: {
    translation: {
      nav: {
        home: "होम",
        features: "विशेषताएँ",
        gallery: "गैलरी",
        about: "हमारे बारे में",
        testimonials: "उपयोगकर्ता प्रतिक्रियाएँ",
        contact: "संपर्क करें",
        download: "डाउनलोड"
      },

      hero: {
        badge: "हर दिन आस्था से जुड़ें",
        title1: "दैनिक दिव्य पोस्टर",
        title2: "एक",
        titleHighlight: "आशीर्वादित जीवन के लिए",
        description:
          "आलयम भक्ति पोस्टर, मंदिर की जानकारी, त्योहारों की शुभकामनाएँ, उद्धरण, श्लोक और बहुत कुछ प्रदान करने वाला आपका दैनिक आध्यात्मिक साथी है। भक्ति फैलाएँ। आशीर्वाद साझा करें।",
        download: "अभी डाउनलोड करें",
        watch: "वीडियो देखें"
      },

      categories: {
        explore: "अन्वेषण करें",
        title: "पोस्टर श्रेणियाँ",
        description:
          "आपकी भक्ति और प्रेरणा के लिए आवश्यक सब कुछ",
        more: "और देखें",

        items: {
          ganesha: "भगवान गणेश",
          devi: "दिव्य देवी",
          durga: "देवी दुर्गा",
          karupu: "भगवान करुप्पु",
          shiva: "भगवान शिव",
          ram: "राम दरबार",
          ayyappa: "भगवान अयप्पा",
          lakshmi: "महा लक्ष्मी",
          maruthi: "मारुति",
          saraswati: "देवी सरस्वती",
          muruga: "भगवान मुरुगन",
          azhagar: "भगवान अळगर"
        }
      },

      features: {
        eyebrow: "आपको पसंद आने वाली विशेषताएँ",
        title: "हर अवसर के लिए बनाया गया",

        items: {
          daily: {
            title: "रोज़ नए पोस्टर",
            desc: "हर दिन नए भक्ति पोस्टर"
          },

          language: {
            title: "बहुभाषी",
            desc: "तमिल, अंग्रेज़ी और हिंदी"
          },

          create: {
            title: "बनाएँ और निजीकृत करें",
            desc: "अपना नाम जोड़कर पोस्टर बनाएँ"
          },

          share: {
            title: "तुरंत साझा करें",
            desc: "WhatsApp, Facebook और अन्य"
          },

          download: {
            title: "मुफ्त डाउनलोड",
            desc: "आसानी से Wallpaper के रूप में सेव करें"
          },

          favorites: {
            title: "पसंदीदा में सेव करें",
            desc: "अपने पसंदीदा पोस्टर व्यवस्थित करें"
          }
        }
      },

      about: {
        heroBadge: "आलयम में आपका स्वागत है",
        heroTitle: "हमारी दिव्य दृष्टि",
        heroText:
          "दैनिक पोस्टरों, मंदिर की जानकारी, त्योहारों की शुभकामनाओं, उद्धरणों और आध्यात्मिक प्रेरणा के माध्यम से भक्ति की दुनिया को जानें.",
        happyUsers: "1 लाख+ खुश उपयोगकर्ता",
        exploreAlayam: "आलयम देखें",

        journeyTitle: "दिव्य यात्रा",
        journeyText:
          "दिव्य विचारों, त्योहारों की शुभकामनाओं, उद्धरणों, श्लोकों और आध्यात्मिक जानकारी से आपको जोड़ने वाली प्रेरणादायक सामग्री।",

        happyUsersLabel: "खुश उपयोगकर्ता",
        ratings: "रेटिंग",

        missionTitle: "हमारा मिशन",
        missionText:
          "सुंदर पोस्टरों और आध्यात्मिक सामग्री के माध्यम से भक्ति और सकारात्मकता फैलाना।",
        readMore: "और पढ़ें →",

        offerTitle: "हम क्या प्रदान करते हैं",
        offerText:
          "दैनिक पोस्टर, त्योहारों की शुभकामनाएँ, उद्धरण, श्लोक, मंदिर की जानकारी और बहुत कुछ।",
        explore: "देखें →",

        storyTitle: "हमारी कहानी",
        storyText:
          "भक्ति को सभी के करीब लाने की आलयम की यात्रा।",
        discover: "जानें →",

        dailyPosters: "दैनिक पोस्टर",
        dailyPostersText:
          "प्रेरणा और भक्ति के लिए चुने गए दैनिक पोस्टर।",

        multiLanguage: "बहुभाषी",
        multiLanguageText:
          "कई भाषाओं में उपलब्ध।",

        createCard: "पोस्टर बनाएँ",
        createCardText:
          "अपने स्वयं के भक्ति पोस्टर डिज़ाइन और कस्टमाइज़ करें।",

        createPersonalize: "बनाएँ और निजीकृत करें"
      },

      featurePage: {
        tag: "आलयम की विशेषताएँ",

        title1: "शक्तिशाली विशेषताएँ",
        title2: "आपकी दैनिक",
        titleHighlight: "आध्यात्मिक यात्रा के लिए",

        description:
          "आलयम आपको कहीं से भी मंदिरों, त्योहारों, दैनिक भक्ति पोस्टरों और आध्यात्मिक अपडेट से जुड़े रहने में मदद करता है।",

        download: "ऐप डाउनलोड करें",

        items: {
          daily: {
            title: "रोज़ नए पोस्टर",
            desc: "हर दिन नए भक्ति पोस्टर।"
          },

          language: {
            title: "बहुभाषी",
            desc: "तमिल, अंग्रेज़ी, हिंदी और अन्य।"
          },

          favorites: {
            title: "पसंदीदा में सेव करें",
            desc: "अपने पसंदीदा पोस्टर सेव और व्यवस्थित करें।"
          },

          create: {
            title: "बनाएँ और निजीकृत करें",
            desc: "अपना नाम, फोटो जोड़कर पोस्टर बनाएँ।"
          },

          download: {
            title: "मुफ्त डाउनलोड",
            desc: "डाउनलोड करें और आसानी से Wallpaper के रूप में सेट करें।"
          },

          share: {
            title: "तुरंत साझा करें",
            desc: "WhatsApp, Facebook और अन्य पर साझा करें।"
          },

          temple: {
            title: "मंदिर अपडेट",
            desc: "नवीनतम मंदिर समाचार, कार्यक्रम और समय प्राप्त करें।"
          },

          festival: {
            title: "त्योहारों की शुभकामनाएँ",
            desc: "सभी त्योहारों के लिए विशेष पोस्टर।"
          }
        }
      },

      whychoose: {
        subtitle: "आलयम को क्यों चुनें",
        title: "आलयम को क्यों चुनें?",
        description:
          "हर दिन भक्ति से जुड़े रहने का एक सरल और भरोसेमंद तरीका।",

        cards: {
          trusted: {
            title: "विश्वसनीय सामग्री",
            description: "प्रामाणिक और सत्यापित भक्ति सामग्री"
          },

          fast: {
            title: "तेज़ और आसान",
            description: "सरल, तेज़ और उपयोगकर्ता के अनुकूल"
          },

          beautiful: {
            title: "सुंदर और HD",
            description: "HD गुणवत्ता में उच्च गुणवत्ता वाले पोस्टर"
          }
        }
      },

      appPreview: {
        title: "ऐप पूर्वावलोकन",
        items: {
          daily: "दैनिक पोस्टर",
          categories: "श्रेणियाँ देखें",
          create: "पोस्टर बनाएँ",
          share: "दोस्तों के साथ साझा करें"
        }
      },

      galleryPage: {
        heroTitle: "दिव्य गैलरी",
        heroDescription:
          "हर देवता के लिए पवित्र और भक्ति पोस्टरों के हमारे संग्रह को देखें",
        exploreCollection: "संग्रह देखें",
        title: "पोस्टर गैलरी",
        description:
          "हमारे दिव्य पोस्टरों के पूरे संग्रह को ब्राउज़ करें",

        items: {
          ganesha: "भगवान गणेश",
          shiva: "भगवान शिव",
          saibaba: "साईं बाबा",
          durga: "देवी दुर्गा",
          karupu: "भगवान करुप्पु",
          ram: "राम दरबार",
          ayyappa: "भगवान अयप्पा",
          maruthi: "मारुति",
          saraswati: "देवी सरस्वती",
          lakshmi: "महा लक्ष्मी",
          muruga: "भगवान मुरुगन",
          azhagar: "भगवान अळगर"
        }
      },

      testimonials: {
        subtitle: "आस्था की आवाज़",
        title: "भक्तों द्वारा पसंद किया गया"
      },

      stats: {
        happyUsers: "खुश उपयोगकर्ता",
        downloads: "डाउनलोड",
        divinePosters: "दिव्य पोस्टर",
        userRating: "उपयोगकर्ता रेटिंग"
      },

      footer: {
        description:
          "भक्ति पोस्टर, मंदिर की जानकारी और आध्यात्मिक प्रेरणा के लिए आपका दैनिक साथी।",
        quickLinks: "त्वरित लिंक",
        contact: "संपर्क करें",
        copyright: "© 2025 आलयम। सर्वाधिकार सुरक्षित।"
      }
    }
  },

  ml: {
    translation: {
      nav: {
        home: "ഹോം",
        features: "സവിശേഷതകൾ",
        gallery: "ഗാലറി",
        about: "ഞങ്ങളെക്കുറിച്ച്",
        testimonials: "ഉപയോക്തൃ അഭിപ്രായങ്ങൾ",
        contact: "ബന്ധപ്പെടുക",
        download: "ഡൗൺലോഡ്"
      },

      hero: {
        badge: "എല്ലാ ദിവസവും വിശ്വാസവുമായി ബന്ധപ്പെടൂ",
        title1: "ദൈനംദിന ദിവ്യ പോസ്റ്ററുകൾ",
        title2: "ഒരു",
        titleHighlight: "അനുഗ്രഹീത ജീവിതത്തിനായി",
        description:
          "ഭക്തി പോസ്റ്ററുകൾ, ക്ഷേത്ര വിവരങ്ങൾ, ഉത്സവ ആശംസകൾ, ഉദ്ധരണികൾ, ശ്ലോകങ്ങൾ എന്നിവയും അതിലേറെയും നൽകുന്ന നിങ്ങളുടെ ദൈനംദിന ആത്മീയ കൂട്ടുകാരനാണ് ആലയം.",
        download: "ഇപ്പോൾ ഡൗൺലോഡ് ചെയ്യുക",
        watch: "വീഡിയോ കാണുക"
      },

      categories: {
        explore: "പര്യവേക്ഷണം ചെയ്യുക",
        title: "പോസ്റ്റർ വിഭാഗങ്ങൾ",
        description:
          "നിങ്ങളുടെ ഭക്തിക്കും പ്രചോദനത്തിനും ആവശ്യമായ എല്ലാം",
        more: "കൂടുതൽ",

        items: {
          ganesha: "ഗണപതി ഭഗവാൻ",
          devi: "ദിവ്യ ദേവി",
          durga: "ദുർഗ്ഗാ ദേവി",
          karupu: "കരുപ്പുസാമി",
          shiva: "ശിവൻ",
          ram: "രാമ ദർബാർ",
          ayyappa: "അയ്യപ്പൻ",
          lakshmi: "മഹാലക്ഷ്മി",
          maruthi: "മാരുതി",
          saraswati: "സരസ്വതി ദേവി",
          muruga: "മുരുകൻ",
          azhagar: "അഴഗർ"
        }
      },

      features: {
        eyebrow: "നിങ്ങൾക്ക് ഇഷ്ടപ്പെടുന്ന സവിശേഷതകൾ",
        title: "എല്ലാ അവസരങ്ങൾക്കുമായി രൂപകൽപ്പന ചെയ്തത്",

        items: {
          daily: {
            title: "ദിവസവും പുതിയ പോസ്റ്ററുകൾ",
            desc: "എല്ലാ ദിവസവും പുതിയ ഭക്തി പോസ്റ്ററുകൾ"
          },

          language: {
            title: "ബഹുഭാഷാ പിന്തുണ",
            desc: "തമിഴ്, ഇംഗ്ലീഷ്, ഹിന്ദി"
          },

          create: {
            title: "സൃഷ്ടിച്ച് വ്യക്തിഗതമാക്കൂ",
            desc: "നിങ്ങളുടെ പേര് ചേർത്ത് പോസ്റ്ററുകൾ സൃഷ്ടിക്കൂ"
          },

          share: {
            title: "ഉടൻ പങ്കിടൂ",
            desc: "WhatsApp, Facebook എന്നിവയിലും മറ്റും"
          },

          download: {
            title: "സൗജന്യമായി ഡൗൺലോഡ് ചെയ്യൂ",
            desc: "എളുപ്പത്തിൽ Wallpaper ആയി സംരക്ഷിക്കൂ"
          },

          favorites: {
            title: "പ്രിയപ്പെട്ടവയിൽ സംരക്ഷിക്കൂ",
            desc: "നിങ്ങളുടെ പ്രിയപ്പെട്ട പോസ്റ്ററുകൾ നിയന്ത്രിക്കൂ"
          }
        }
      },

      about: {
        heroBadge: "ആലയത്തിലേക്ക് സ്വാഗതം",
        heroTitle: "ഞങ്ങളുടെ ദൈവിക കാഴ്ചപ്പാട്",
        heroText:
          "ദൈനംദിന പോസ്റ്ററുകൾ, ക്ഷേത്ര വിവരങ്ങൾ, ഉത്സവ ആശംസകൾ, ഉദ്ധരണികൾ, ആത്മീയ പ്രചോദനം എന്നിവയിലൂടെ ഭക്തിയുടെ ലോകം കണ്ടെത്തൂ.",
        happyUsers: "1 ലക്ഷം+ സന്തുഷ്ട ഉപയോക്താക്കൾ",
        exploreAlayam: "ആലയം പര്യവേക്ഷണം ചെയ്യൂ",

        journeyTitle: "ദൈവിക യാത്ര",
        journeyText:
          "ദൈവിക ചിന്തകൾ, ഉത്സവ ആശംസകൾ, ഉദ്ധരണികൾ, ശ്ലോകങ്ങൾ, ആത്മീയ വിവരങ്ങൾ എന്നിവയുമായി നിങ്ങളെ ബന്ധിപ്പിക്കുന്ന പ്രചോദനാത്മക ഉള്ളടക്കങ്ങൾ.",

        happyUsersLabel: "സന്തുഷ്ട ഉപയോക്താക്കൾ",
        ratings: "റേറ്റിംഗുകൾ",

        missionTitle: "ഞങ്ങളുടെ ദൗത്യം",
        missionText:
          "മനോഹരമായ പോസ്റ്ററുകളിലൂടെയും ആത്മീയ ഉള്ളടക്കത്തിലൂടെയും ഭക്തിയും പോസിറ്റിവിറ്റിയും പ്രചരിപ്പിക്കുക.",
        readMore: "കൂടുതൽ വായിക്കുക →",

        offerTitle: "ഞങ്ങൾ നൽകുന്നത്",
        offerText:
          "ദൈനംദിന പോസ്റ്ററുകൾ, ഉത്സവ ആശംസകൾ, ഉദ്ധരണികൾ, ശ്ലോകങ്ങൾ, ക്ഷേത്ര വിവരങ്ങൾ എന്നിവയും അതിലേറെയും.",
        explore: "പര്യവേക്ഷണം ചെയ്യൂ →",

        storyTitle: "ഞങ്ങളുടെ കഥ",
        storyText:
          "ഭക്തിയെ എല്ലാവരിലേക്കും കൂടുതൽ അടുപ്പിക്കുന്ന ആലയത്തിന്റെ യാത്ര.",
        discover: "കണ്ടെത്തൂ →",

        dailyPosters: "ദൈനംദിന പോസ്റ്ററുകൾ",
        dailyPostersText:
          "പ്രചോദനത്തിനും ഭക്തിക്കും വേണ്ടി തിരഞ്ഞെടുത്ത ദൈനംദിന പോസ്റ്ററുകൾ.",

        multiLanguage: "ബഹുഭാഷാ പിന്തുണ",
        multiLanguageText:
          "ഒന്നിലധികം ഭാഷകളിൽ ലഭ്യമാണ്.",

        createCard: "പോസ്റ്റർ സൃഷ്ടിക്കൂ",
        createCardText:
          "നിങ്ങളുടെ സ്വന്തം ഭക്തി പോസ്റ്ററുകൾ രൂപകൽപ്പന ചെയ്ത് വ്യക്തിഗതമാക്കൂ.",

        createPersonalize: "സൃഷ്ടിച്ച് വ്യക്തിഗതമാക്കൂ"
      },

      featurePage: {
        tag: "ആലയം സവിശേഷതകൾ",

        title1: "ശക്തമായ സവിശേഷതകൾ",
        title2: "നിങ്ങളുടെ ദൈനംദിന",
        titleHighlight: "ആത്മീയ യാത്രയ്ക്കായി",

        description:
          "നിങ്ങൾ എവിടെയായിരുന്നാലും ക്ഷേത്രങ്ങൾ, ഉത്സവങ്ങൾ, ദൈനംദിന ഭക്തി പോസ്റ്ററുകൾ, ആത്മീയ അപ്‌ഡേറ്റുകൾ എന്നിവയുമായി ബന്ധം നിലനിർത്താൻ ആലയം നിങ്ങളെ സഹായിക്കുന്നു.",

        download: "ആപ്പ് ഡൗൺലോഡ് ചെയ്യുക",

        items: {
          daily: {
            title: "ദിവസവും പുതിയ പോസ്റ്ററുകൾ",
            desc: "എല്ലാ ദിവസവും പുതിയ ഭക്തി പോസ്റ്ററുകൾ."
          },

          language: {
            title: "ബഹുഭാഷാ പിന്തുണ",
            desc: "തമിഴ്, ഇംഗ്ലീഷ്, ഹിന്ദി എന്നിവയും അതിലേറെയും."
          },

          favorites: {
            title: "പ്രിയപ്പെട്ടവയിൽ സംരക്ഷിക്കൂ",
            desc: "നിങ്ങളുടെ പ്രിയപ്പെട്ട പോസ്റ്ററുകൾ സംരക്ഷിച്ച് നിയന്ത്രിക്കൂ."
          },

          create: {
            title: "സൃഷ്ടിച്ച് വ്യക്തിഗതമാക്കൂ",
            desc: "നിങ്ങളുടെ പേര്, ഫോട്ടോ എന്നിവ ചേർത്ത് പോസ്റ്ററുകൾ സൃഷ്ടിക്കൂ."
          },

          download: {
            title: "സൗജന്യമായി ഡൗൺലോഡ് ചെയ്യൂ",
            desc: "ഡൗൺലോഡ് ചെയ്ത് എളുപ്പത്തിൽ Wallpaper ആയി സജ്ജമാക്കൂ."
          },

          share: {
            title: "ഉടൻ പങ്കിടൂ",
            desc: "WhatsApp, Facebook എന്നിവയിലും മറ്റും പങ്കിടൂ."
          },

          temple: {
            title: "ക്ഷേത്ര അപ്‌ഡേറ്റുകൾ",
            desc: "ഏറ്റവും പുതിയ ക്ഷേത്ര വാർത്തകൾ, പരിപാടികൾ, സമയങ്ങൾ എന്നിവ നേടൂ."
          },

          festival: {
            title: "ഉത്സവ ആശംസകൾ",
            desc: "എല്ലാ ഉത്സവങ്ങൾക്കും പ്രത്യേക പോസ്റ്ററുകൾ."
          }
        }
      },

      whychoose: {
        subtitle: "ആലയത്തെ എന്തുകൊണ്ട് തിരഞ്ഞെടുക്കണം",
        title: "ആലയത്തെ എന്തുകൊണ്ട് തിരഞ്ഞെടുക്കണം?",
        description:
          "എല്ലാ ദിവസവും ഭക്തിയുമായി ബന്ധപ്പെടാനുള്ള ലളിതവും വിശ്വസനീയവുമായ മാർഗം.",

        cards: {
          trusted: {
            title: "വിശ്വസനീയമായ ഉള്ളടക്കം",
            description: "ആധികാരികവും പരിശോധിച്ചുറപ്പിച്ചതുമായ ഭക്തി ഉള്ളടക്കം"
          },

          fast: {
            title: "വേഗത്തിലും എളുപ്പത്തിലും",
            description: "ലളിതവും വേഗതയേറിയതുമായ ഉപയോക്തൃ സൗഹൃദ അനുഭവം"
          },

          beautiful: {
            title: "മനോഹരവും HDയും",
            description: "HD നിലവാരത്തിലുള്ള ഉയർന്ന ഗുണമേന്മയുള്ള പോസ്റ്ററുകൾ"
          }
        }
      },

      appPreview: {
        title: "ആപ്പ് പ്രിവ്യൂ",
        items: {
          daily: "ദൈനംദിന പോസ്റ്ററുകൾ",
          categories: "വിഭാഗങ്ങൾ പര്യവേക്ഷണം ചെയ്യൂ",
          create: "പോസ്റ്ററുകൾ സൃഷ്ടിക്കൂ",
          share: "സുഹൃത്തുക്കളുമായി പങ്കിടൂ"
        }
      },

      galleryPage: {
        heroTitle: "ദിവ്യ ഗാലറി",
        heroDescription:
          "ഓരോ ദേവനുമുള്ള പുണ്യവും ഭക്തിനിർഭരവുമായ പോസ്റ്ററുകളുടെ ശേഖരം പര്യവേക്ഷണം ചെയ്യൂ",
        exploreCollection: "ശേഖരം പര്യവേക്ഷണം ചെയ്യൂ",
        title: "പോസ്റ്റർ ഗാലറി",
        description:
          "ഞങ്ങളുടെ സമ്പൂർണ്ണ ദിവ്യ പോസ്റ്റർ ശേഖരം പരിശോധിക്കൂ",

        items: {
          ganesha: "ഗണപതി ഭഗവാൻ",
          shiva: "ശിവൻ",
          saibaba: "സായി ബാബ",
          durga: "ദുർഗ്ഗാ ദേവി",
          karupu: "കരുപ്പുസാമി",
          ram: "രാമ ദർബാർ",
          ayyappa: "അയ്യപ്പൻ",
          maruthi: "മാരുതി",
          saraswati: "സരസ്വതി ദേവി",
          lakshmi: "മഹാലക്ഷ്മി",
          muruga: "മുരുകൻ",
          azhagar: "അഴഗർ"
        }
      },

      testimonials: {
        subtitle: "വിശ്വാസത്തിന്റെ വാക്കുകൾ",
        title: "ഭക്തർ ഇഷ്ടപ്പെടുന്ന ആലയം"
      },

      stats: {
        happyUsers: "സന്തുഷ്ട ഉപയോക്താക്കൾ",
        downloads: "ഡൗൺലോഡുകൾ",
        divinePosters: "ദിവ്യ പോസ്റ്ററുകൾ",
        userRating: "ഉപയോക്തൃ റേറ്റിംഗ്"
      },

      footer: {
        description:
          "ഭക്തി പോസ്റ്ററുകൾ, ക്ഷേത്ര വിവരങ്ങൾ, ആത്മീയ പ്രചോദനം എന്നിവയ്ക്കായുള്ള നിങ്ങളുടെ ദൈനംദിന കൂട്ടുകാരൻ.",
        quickLinks: "ദ്രുത ലിങ്കുകൾ",
        contact: "ബന്ധപ്പെടുക",
        copyright: "© 2025 ആലയം. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം."
      }
    }
  },

  kn: {
    translation: {
      nav: {
        home: "ಮುಖಪುಟ",
        features: "ವೈಶಿಷ್ಟ್ಯಗಳು",
        gallery: "ಗ್ಯಾಲರಿ",
        about: "ನಮ್ಮ ಬಗ್ಗೆ",
        testimonials: "ಬಳಕೆದಾರರ ಅಭಿಪ್ರಾಯಗಳು",
        contact: "ಸಂಪರ್ಕಿಸಿ",
        download: "ಡೌನ್‌ಲೋಡ್"
      },

      hero: {
        badge: "ಪ್ರತಿದಿನ ಭಕ್ತಿಯೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರಿ",
        title1: "ದೈನಂದಿನ ದೈವಿಕ ಪೋಸ್ಟರ್‌ಗಳು",
        title2: "ಒಂದು",
        titleHighlight: "ಆಶೀರ್ವದಿತ ಜೀವನಕ್ಕಾಗಿ",
        description:
          "ಭಕ್ತಿ ಪೋಸ್ಟರ್‌ಗಳು, ದೇವಾಲಯದ ಮಾಹಿತಿ, ಹಬ್ಬದ ಶುಭಾಶಯಗಳು, ಉಲ್ಲೇಖಗಳು, ಶ್ಲೋಕಗಳು ಮತ್ತು ಹೆಚ್ಚಿನದನ್ನು ನೀಡುವ ನಿಮ್ಮ ದೈನಂದಿನ ಆಧ್ಯಾತ್ಮಿಕ ಸಂಗಾತಿ ಆಲಯಂ.",
        download: "ಈಗ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
        watch: "ವೀಡಿಯೊ ವೀಕ್ಷಿಸಿ"
      },

      categories: {
        explore: "ಅನ್ವೇಷಿಸಿ",
        title: "ಪೋಸ್ಟರ್ ವಿಭಾಗಗಳು",
        description:
          "ನಿಮ್ಮ ಭಕ್ತಿ ಮತ್ತು ಸ್ಫೂರ್ತಿಗಾಗಿ ಬೇಕಾದ ಎಲ್ಲವೂ",
        more: "ಇನ್ನಷ್ಟು",

        items: {
          ganesha: "ಗಣೇಶ ದೇವರು",
          devi: "ದಿವ್ಯ ದೇವಿ",
          durga: "ದುರ್ಗಾ ದೇವಿ",
          karupu: "ಕರುಪ್ಪು ಸ್ವಾಮಿ",
          shiva: "ಶಿವ ದೇವರು",
          ram: "ರಾಮ ದರ್ಬಾರ್",
          ayyappa: "ಅಯ್ಯಪ್ಪ ಸ್ವಾಮಿ",
          lakshmi: "ಮಹಾಲಕ್ಷ್ಮಿ",
          maruthi: "ಮಾರುತಿ",
          saraswati: "ಸರಸ್ವತಿ ದೇವಿ",
          muruga: "ಮುರುಗನ್",
          azhagar: "ಅಳಗರ್"
        }
      },

      features: {
        eyebrow: "ನೀವು ಇಷ್ಟಪಡುವ ವೈಶಿಷ್ಟ್ಯಗಳು",
        title: "ಪ್ರತಿ ಸಂದರ್ಭಕ್ಕಾಗಿ ರೂಪಿಸಲಾಗಿದೆ",

        items: {
          daily: {
            title: "ಪ್ರತಿದಿನ ಹೊಸ ಪೋಸ್ಟರ್‌ಗಳು",
            desc: "ಪ್ರತಿದಿನ ಹೊಸ ಭಕ್ತಿ ಪೋಸ್ಟರ್‌ಗಳು"
          },

          language: {
            title: "ಬಹು ಭಾಷೆಗಳು",
            desc: "ತಮಿಳು, ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಹಿಂದಿ"
          },

          create: {
            title: "ರಚಿಸಿ ಮತ್ತು ವೈಯಕ್ತೀಕರಿಸಿ",
            desc: "ನಿಮ್ಮ ಹೆಸರನ್ನು ಸೇರಿಸಿ ಪೋಸ್ಟರ್‌ಗಳನ್ನು ರಚಿಸಿ"
          },

          share: {
            title: "ತಕ್ಷಣ ಹಂಚಿಕೊಳ್ಳಿ",
            desc: "WhatsApp, Facebook ಮತ್ತು ಇನ್ನಷ್ಟು"
          },

          download: {
            title: "ಉಚಿತವಾಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
            desc: "ಸುಲಭವಾಗಿ Wallpaper ಆಗಿ ಉಳಿಸಿ"
          },

          favorites: {
            title: "ಮೆಚ್ಚಿನವುಗಳಲ್ಲಿ ಉಳಿಸಿ",
            desc: "ನಿಮ್ಮ ಮೆಚ್ಚಿನ ಪೋಸ್ಟರ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ"
          }
        }
      },

      about: {
        heroBadge: "ಆಲಯಂಗೆ ಸ್ವಾಗತ",
        heroTitle: "ನಮ್ಮ ದೈವಿಕ ದೃಷ್ಟಿಕೋನ",
        heroText:
          "ದೈನಂದಿನ ಪೋಸ್ಟರ್‌ಗಳು, ದೇವಾಲಯದ ಮಾಹಿತಿ, ಹಬ್ಬದ ಶುಭಾಶಯಗಳು, ಉಲ್ಲೇಖಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರೇರಣೆಯ ಮೂಲಕ ಭಕ್ತಿಯ ಜಗತ್ತನ್ನು ಅನ್ವೇಷಿಸಿ.",
        happyUsers: "1 ಲಕ್ಷ+ ಸಂತೋಷದ ಬಳಕೆದಾರರು",
        exploreAlayam: "ಆಲಯಂ ಅನ್ವೇಷಿಸಿ",

        journeyTitle: "ದೈವಿಕ ಪಯಣ",
        journeyText:
          "ದೈವಿಕ ಚಿಂತನೆಗಳು, ಹಬ್ಬದ ಶುಭಾಶಯಗಳು, ಉಲ್ಲೇಖಗಳು, ಶ್ಲೋಕಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಮಾಹಿತಿಗಳೊಂದಿಗೆ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುವ ಪ್ರೇರಣಾದಾಯಕ ವಿಷಯಗಳು.",

        happyUsersLabel: "ಸಂತೋಷದ ಬಳಕೆದಾರರು",
        ratings: "ರೇಟಿಂಗ್‌ಗಳು",

        missionTitle: "ನಮ್ಮ ಉದ್ದೇಶ",
        missionText:
          "ಸುಂದರವಾದ ಪೋಸ್ಟರ್‌ಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ವಿಷಯಗಳ ಮೂಲಕ ಭಕ್ತಿ ಮತ್ತು ಸಕಾರಾತ್ಮಕತೆಯನ್ನು ಹರಡುವುದು.",
        readMore: "ಇನ್ನಷ್ಟು ಓದಿ →",

        offerTitle: "ನಾವು ನೀಡುವುದು",
        offerText:
          "ದೈನಂದಿನ ಪೋಸ್ಟರ್‌ಗಳು, ಹಬ್ಬದ ಶುಭಾಶಯಗಳು, ಉಲ್ಲೇಖಗಳು, ಶ್ಲೋಕಗಳು, ದೇವಾಲಯದ ಮಾಹಿತಿ ಮತ್ತು ಇನ್ನಷ್ಟು.",
        explore: "ಅನ್ವೇಷಿಸಿ →",

        storyTitle: "ನಮ್ಮ ಕಥೆ",
        storyText:
          "ಭಕ್ತಿಯನ್ನು ಎಲ್ಲರಿಗೂ ಹತ್ತಿರ ತರುವ ಆಲಯಂನ ಪಯಣ.",
        discover: "ಕಂಡುಹಿಡಿಯಿರಿ →",

        dailyPosters: "ದೈನಂದಿನ ಪೋಸ್ಟರ್‌ಗಳು",
        dailyPostersText:
          "ಪ್ರೇರಣೆ ಮತ್ತು ಭಕ್ತಿಗಾಗಿ ಆಯ್ಕೆ ಮಾಡಲಾದ ದೈನಂದಿನ ಪೋಸ್ಟರ್‌ಗಳು.",

        multiLanguage: "ಬಹು ಭಾಷೆಗಳು",
        multiLanguageText:
          "ಬಹು ಭಾಷೆಗಳಲ್ಲಿ ಲಭ್ಯವಿದೆ.",

        createCard: "ಪೋಸ್ಟರ್ ರಚಿಸಿ",
        createCardText:
          "ನಿಮ್ಮದೇ ಆದ ಭಕ್ತಿ ಪೋಸ್ಟರ್‌ಗಳನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಿ ಮತ್ತು ವೈಯಕ്ತೀಕರಿಸಿ.",

        createPersonalize: "ರಚಿಸಿ ಮತ್ತು ವೈಯಕ್ತೀಕರಿಸಿ"
      },

      featurePage: {
        tag: "ಆಲಯಂ ವೈಶಿಷ್ಟ್ಯಗಳು",

        title1: "ಶಕ್ತಿಯುತ ವೈಶಿಷ್ಟ್ಯಗಳು",
        title2: "ನಿಮ್ಮ ದೈನಂದಿನ",
        titleHighlight: "ಆಧ್ಯಾತ್ಮಿಕ ಪಯಣಕ್ಕಾಗಿ",

        description:
          "ನೀವು ಎಲ್ಲಿದ್ದರೂ ದೇವಾಲಯಗಳು, ಹಬ್ಬಗಳು, ದೈನಂದಿನ ಭಕ್ತಿ ಪೋಸ್ಟರ್‌ಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಅಪ್‌ಡೇಟ್‌ಗಳೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರಲು ಆಲಯಂ ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",

        download: "ಆಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",

        items: {
          daily: {
            title: "ಪ್ರತಿದಿನ ಹೊಸ ಪೋಸ್ಟರ್‌ಗಳು",
            desc: "ಪ್ರತಿದಿನ ಹೊಸ ಭಕ್ತಿ ಪೋಸ್ಟರ್‌ಗಳು."
          },

          language: {
            title: "ಬಹು ಭಾಷೆಗಳು",
            desc: "ತಮಿಳು, ಇಂಗ್ಲಿಷ್, ಹಿಂದಿ ಮತ್ತು ಇನ್ನಷ್ಟು."
          },

          favorites: {
            title: "ಮೆಚ್ಚಿನವುಗಳಲ್ಲಿ ಉಳಿಸಿ",
            desc: "ನಿಮ್ಮ ಮೆಚ್ಚಿನ ಪೋಸ್ಟರ್‌ಗಳನ್ನು ಉಳಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ."
          },

          create: {
            title: "ರಚಿಸಿ ಮತ್ತು ವೈಯಕ್ತೀಕರಿಸಿ",
            desc: "ನಿಮ್ಮ ಹೆಸರು, ಫೋಟೋ ಸೇರಿಸಿ ಪೋಸ್ಟರ್‌ಗಳನ್ನು ರಚಿಸಿ."
          },

          download: {
            title: "ಉಚಿತವಾಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
            desc: "ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ಸುಲಭವಾಗಿ Wallpaper ಆಗಿ ಹೊಂದಿಸಿ."
          },

          share: {
            title: "ತಕ್ಷಣ ಹಂಚಿಕೊಳ್ಳಿ",
            desc: "WhatsApp, Facebook ಮತ್ತು ಇತರ ಕಡೆಗಳಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ."
          },

          temple: {
            title: "ದೇವಾಲಯದ ಅಪ್‌ಡೇಟ್‌ಗಳು",
            desc: "ಇತ್ತೀಚಿನ ದೇವಾಲಯದ ಸುದ್ದಿ, ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಮಯಗಳನ್ನು ಪಡೆಯಿರಿ."
          },

          festival: {
            title: "ಹಬ್ಬದ ಶುಭಾಶಯಗಳು",
            desc: "ಎಲ್ಲಾ ಹಬ್ಬಗಳಿಗಾಗಿ ವಿಶೇಷ ಪೋಸ್ಟರ್‌ಗಳು."
          }
        }
      },

      whychoose: {
        subtitle: "ಆಲಯಂ ಅನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು",
        title: "ಆಲಯಂ ಅನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?",
        description:
          "ಪ್ರತಿದಿನ ಭಕ್ತಿಯೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರಲು ಸರಳ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಮಾರ್ಗ.",

        cards: {
          trusted: {
            title: "ವಿಶ್ವಾಸಾರ್ಹ ವಿಷಯ",
            description: "ಅಧಿಕೃತ ಮತ್ತು ಪರಿಶೀಲಿಸಲಾದ ಭಕ್ತಿ ವಿಷಯ"
          },

          fast: {
            title: "ವೇಗವಾದ ಮತ್ತು ಸುಲಭ",
            description: "ಸರಳ, ವೇಗವಾದ ಮತ್ತು ಬಳಕೆದಾರ ಸ್ನೇಹಿ ಅನುಭವ"
          },

          beautiful: {
            title: "ಸುಂದರ ಮತ್ತು HD",
            description: "HD ಗುಣಮಟ್ಟದ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಪೋಸ್ಟರ್‌ಗಳು"
          }
        }
      },

      appPreview: {
        title: "ಆಪ್ ಪೂರ್ವವೀಕ್ಷಣೆ",
        items: {
          daily: "ದೈನಂದಿನ ಪೋಸ್ಟರ್‌ಗಳು",
          categories: "ವಿಭಾಗಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
          create: "ಪೋಸ್ಟರ್‌ಗಳನ್ನು ರಚಿಸಿ",
          share: "ಸ್ನೇಹಿತರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಿ"
        }
      },

      galleryPage: {
        heroTitle: "ದೈವಿಕ ಗ್ಯಾಲರಿ",
        heroDescription:
          "ಪ್ರತಿ ದೇವರಿಗಾಗಿ ಪವಿತ್ರ ಮತ್ತು ಭಕ್ತಿ ಪೋಸ್ಟರ್‌ಗಳ ನಮ್ಮ ಸಂಗ್ರಹವನ್ನು ಅನ್ವೇಷಿಸಿ",
        exploreCollection: "ಸಂಗ್ರಹವನ್ನು ಅನ್ವೇಷಿಸಿ",
        title: "ಪೋಸ್ಟರ್ ಗ್ಯಾಲರಿ",
        description:
          "ನಮ್ಮ ಸಂಪೂರ್ಣ ದೈವಿಕ ಪೋಸ್ಟರ್ ಸಂಗ್ರಹವನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ",

        items: {
          ganesha: "ಗಣೇಶ ದೇವರು",
          shiva: "ಶಿವ ದೇವರು",
          saibaba: "ಸಾಯಿ ಬಾಬಾ",
          durga: "ದುರ್ಗಾ ದೇವಿ",
          karupu: "ಕರುಪ್ಪು ಸ್ವಾಮಿ",
          ram: "ರಾಮ ದರ್ಬಾರ್",
          ayyappa: "ಅಯ್ಯಪ್ಪ ಸ್ವಾಮಿ",
          maruthi: "ಮಾರುತಿ",
          saraswati: "ಸರಸ್ವತಿ ದೇವಿ",
          lakshmi: "ಮಹಾಲಕ್ಷ್ಮಿ",
          muruga: "ಮುರುಗನ್",
          azhagar: "ಅಳಗರ್"
        }
      },

      testimonials: {
        subtitle: "ಭಕ್ತಿಯ ಮಾತುಗಳು",
        title: "ಭಕ್ತರಿಂದ ಮೆಚ್ಚುಗೆ ಪಡೆದ ಆಲಯಂ"
      },

      stats: {
        happyUsers: "ಸಂತೋಷದ ಬಳಕೆದಾರರು",
        downloads: "ಡೌನ್‌ಲೋಡ್‌ಗಳು",
        divinePosters: "ದೈವಿಕ ಪೋಸ್ಟರ್‌ಗಳು",
        userRating: "ಬಳಕೆದಾರ ರೇಟಿಂಗ್"
      },

      footer: {
        description:
          "ಭಕ್ತಿ ಪೋಸ್ಟರ್‌ಗಳು, ದೇವಾಲಯದ ಮಾಹಿತಿ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರೇರಣೆಗಾಗಿ ನಿಮ್ಮ ದೈನಂದಿನ ಸಂಗಾತಿ.",
        quickLinks: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
        contact: "ಸಂಪರ್ಕಿಸಿ",
        copyright: "© 2025 ಆಲಯಂ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ."
      }
    }
  },

  te: {
    translation: {
      nav: {
        home: "హోమ్",
        features: "ఫీచర్లు",
        gallery: "గ్యాలరీ",
        about: "మా గురించి",
        testimonials: "వినియోగదారు అభిప్రాయాలు",
        contact: "మమ్మల్ని సంప్రదించండి",
        download: "డౌన్‌లోడ్"
      },

      hero: {
        badge: "ప్రతిరోజూ విశ్వాసంతో అనుసంధానంగా ఉండండి",
        title1: "దైనందిన దివ్య పోస్టర్లు",
        title2: "కోసం ఒక",
        titleHighlight: "ఆశీర్వదిత జీవితం",
        description:
          "ఆలయం మీ దైనందిన భక్తి పోస్టర్లు, ఆలయ నవీకరణలు, పండుగ శుభాకాంక్షలు, కోట్స్, శ్లోకాలు మరియు మరెన్నో కోసం మీ రోజువారీ తోడు. భక్తిని వ్యాప్తి చేయండి. ఆశీర్వాదాలను పంచుకోండి.",
        download: "ఇప్పుడే డౌన్‌లోడ్ చేయండి",
        watch: "వీడియో చూడండి"
      },

      categories: {
        explore: "అన్వేషించండి",
        title: "పోస్టర్ వర్గాలు",
        description:
          "మీ భక్తి మరియు ప్రేరణ కోసం అవసరమైన ప్రతిదీ",
        more: "మరిన్ని",

        items: {
          ganesha: "గణేశ్ భగవానుడు",
          devi: "దివ్య దేవి",
          durga: "దుర్గా దేవి",
          karupu: "కరుప్పు స్వామి",
          shiva: "శివ భగవానుడు",
          ram: "రామ దర్బార్",
          ayyappa: "అయ్యప్ప స్వామి",
          lakshmi: "మహా లక్ష్మి",
          maruthi: "మారుతి",
          saraswati: "సరస్వతి దేవి",
          muruga: "మురుగన్ భగవానుడు",
          azhagar: "అళగర్ భగవానుడు"
        }
      },

      features: {
        eyebrow: "మీరు ఇష్టపడే విషయాలు",
        title: "ప్రతి సందర్భం కోసం రూపొందించబడింది",

        items: {
          daily: {
            title: "ప్రతిరోజూ కొత్త పోస్టర్లు",
            desc: "ప్రతిరోజూ తాజా భక్తి పోస్టర్లు"
          },

          language: {
            title: "బహుభాషా మద్దతు",
            desc: "తమిళం, ఇంగ్లీష్ & హిందీ"
          },

          create: {
            title: "సృష్టించండి & వ్యక్తిగతీకరించండి",
            desc: "మీ పేరు జోడించి పోస్టర్లు సృష్టించండి"
          },

          share: {
            title: "తక్షణమే పంచుకోండి",
            desc: "WhatsApp, Facebook & మరిన్ని"
          },

          download: {
            title: "ఉచితంగా డౌన్‌లోడ్ చేయండి",
            desc: "వాల్‌పేపర్‌గా సులభంగా సేవ్ చేయండి"
          },

          favorites: {
            title: "ఇష్టమైనవి సేవ్ చేయండి",
            desc: "మీ ఇష్టమైన పోస్టర్లను నిర్వహించండి"
          }
        }
      },

      about: {
        heroBadge: "ఆలయంకు స్వాగతం",
        heroTitle: "మా దివ్య దృష్టి",
        heroText:
          "దైనందిన పోస్టర్లు, ఆలయ నవీకరణలు, పండుగ శుభాకాంక్షలు, కోట్స్ మరియు ఆధ్యాత్మిక ప్రేరణ ద్వారా భక్తి ప్రపంచాన్ని కనుగొనండి.",
        happyUsers: "1L+ సంతోషకరమైన వినియోగదారులు",
        exploreAlayam: "ఆలయం అన్వేషించండి",

        journeyTitle: "దివ్య యాత్ర",
        journeyText:
          "దివ్య ఆలోచనలు, పండుగ శుభాకాంక్షలు, కోట్స్, శ్లోకాలు మరియు ఆధ్యాత్మిక నవీకరణలతో మిమ్మల్ని కలుపుకునే అన్ని ప్రేరణాత్మక కంటెంట్.",

        happyUsersLabel: "సంతోషకరమైన వినియోగదారులు",
        ratings: "రేటింగ్‌లు",

        missionTitle: "మా లక్ష్యం",
        missionText:
          "అందమైన పోస్టర్లు మరియు ఆధ్యాత్మిక కంటెంట్ ద్వారా భక్తి మరియు సానుకూలతను వ్యాప్తి చేయడం.",
        readMore: "మరింత చదవండి →",

        offerTitle: "మేము అందించేది",
        offerText:
          "దైనందిన పోస్టర్లు, పండుగ శుభాకాంక్షలు, కోట్స్, శ్లోకాలు, ఆలయ నవీకరణలు మరియు మరెన్నో.",
        explore: "అన్వేషించండి →",

        storyTitle: "మా కథ",
        storyText:
          "ప్రతి ఒక్కరికి భక్తిని దగ్గర చేసే ఆలయం ప్రయాణం.",
        discover: "కనుగొనండి →",

        dailyPosters: "దైనందిన పోస్టర్లు",
        dailyPostersText:
          "ప్రేరణ మరియు భక్తి కోసం ఎంపిక చేసిన దైనందిన పోస్టర్లు.",

        multiLanguage: "బహుభాషా మద్దతు",
        multiLanguageText:
          "అనేక భాషల్లో అందుబాటులో ఉంది.",

        createCard: "పోస్టర్ సృష్టించండి",
        createCardText:
          "మీ స్వంత భక్తి పోస్టర్లను రూపొందించి వ్యక్తిగతీకరించండి.",

        createPersonalize: "సృష్టించండి & వ్యక్తిగతీకరించండి"
      },

      featurePage: {
        tag: "ఆలయం ఫీచర్లు",

        title1: "శక్తివంతమైన ఫీచర్లు",
        title2: "మీ దైనందిన",
        titleHighlight: "ఆధ్యాత్మిక యాత్ర కోసం",

        description:
          "మీరు ఎక్కడ ఉన్నా ఆలయాలు, పండుగలు, దైనందిన భక్తి పోస్టర్లు మరియు ఆధ్యాత్మిక నవీకరణలతో అనుసంధానంగా ఉండటానికి ఆలయం సహాయపడుతుంది.",

        download: "యాప్ డౌన్‌లోడ్ చేయండి",

        items: {
          daily: {
            title: "ప్రతిరోజూ కొత్త పోస్టర్లు",
            desc: "ప్రతిరోజూ తాజా భక్తి పోస్టర్లు."
          },

          language: {
            title: "బహుభాషా మద్దతు",
            desc: "తమిళం, ఇంగ్లీష్, హిందీ & మరిన్ని."
          },

          favorites: {
            title: "ఇష్టమైనవి సేవ్ చేయండి",
            desc: "మీ ఇష్టమైన పోస్టర్లను సేవ్ చేసి నిర్వహించండి."
          },

          create: {
            title: "సృష్టించండి & వ్యక్తిగతీకరించండి",
            desc: "మీ పేరు, ఫోటో జోడించి పోస్టర్లు సృష్టించండి."
          },

          download: {
            title: "ఉచితంగా డౌన్‌లోడ్ చేయండి",
            desc: "డౌన్‌లోడ్ చేసి సులభంగా వాల్‌పేపర్‌గా సెట్ చేయండి."
          },

          share: {
            title: "తక్షణమే పంచుకోండి",
            desc: "WhatsApp, Facebook & మరిన్నింటిలో పంచుకోండి."
          },

          temple: {
            title: "ఆలయ నవీకరణలు",
            desc: "తాజా ఆలయ వార్తలు, కార్యక్రమాలు & సమయాలు పొందండి."
          },

          festival: {
            title: "పండుగ శుభాకాంక్షలు",
            desc: "అన్ని పండుగలకు ప్రత్యేక పోస్టర్లు."
          }
        }
      },

      whychoose: {
        subtitle: "ఆలయం ఎందుకు ఎంచుకోవాలి",
        title: "ఆలయం ఎందుకు ఎంచుకోవాలి?",
        description:
          "ప్రతిరోజూ భక్తితో అనుసంధానంగా ఉండటానికి సరళమైన మరియు విశ్వసనీయమైన మార్గం.",

        cards: {
          trusted: {
            title: "విశ్వసనీయ కంటెంట్",
            description: "ప్రామాణికమైన మరియు ధృవీకరించబడిన భక్తి కంటెంట్"
          },

          fast: {
            title: "వేగవంతమైన & సులభమైన",
            description: "సరళమైన, వేగవంతమైన మరియు వినియోగదారు స్నేహపూర్వక"
          },

          beautiful: {
            title: "అందమైన & HD",
            description: "HD ఫార్మాట్‌లో అధిక నాణ్యత గల పోస్టర్లు"
          }
        }
      },

      appPreview: {
        title: "యాప్ ప్రివ్యూ",
        items: {
          daily: "దైనందిన పోస్టర్లు",
          categories: "వర్గాలను అన్వేషించండి",
          create: "పోస్టర్లు సృష్టించండి",
          share: "స్నేహితులతో పంచుకోండి"
        }
      },

      galleryPage: {
        heroTitle: "దివ్య గ్యాలరీ",
        heroDescription:
          "ప్రతి దేవత కోసం పవిత్రమైన మరియు భక్తి పోస్టర్ల మా సేకరణను అన్వేషించండి",
        exploreCollection: "సేకరణను అన్వేషించండి",
        title: "పోస్టర్ గ్యాలరీ",
        description:
          "మా పూర్తి దివ్య పోస్టర్ల సేకరణను బ్రౌజ్ చేయండి",

        items: {
          ganesha: "గణేశ్ భగవానుడు",
          shiva: "శివ భగవానుడు",
          saibaba: "సాయి బాబా",
          durga: "దుర్గా దేవి",
          karupu: "కరుప్పు స్వామి",
          ram: "రామ దర్బార్",
          ayyappa: "అయ్యప్ప స్వామి",
          maruthi: "మారుతి",
          saraswati: "సరస్వతి దేవి",
          lakshmi: "మహా లక్ష్మి",
          muruga: "మురుగన్ భగవానుడు",
          azhagar: "అళగర్ భగవానుడు"
        }
      },

      testimonials: {
        subtitle: "విశ్వాసపు మాటలు",
        title: "భక్తుల ప్రియమైన ఆలయం"
      },

      stats: {
        happyUsers: "సంతోషకరమైన వినియోగదారులు",
        downloads: "డౌన్‌లోడ్‌లు",
        divinePosters: "దివ్య పోస్టర్లు",
        userRating: "వినియోగదారు రేటింగ్"
      },

      footer: {
        description:
          "భక్తి పోస్టర్లు, ఆలయ నవీకరణలు మరియు ఆధ్యాత్మిక ప్రేరణ కోసం మీ దైనందిన తోడు.",
        quickLinks: "త్వరిత లింక్‌లు",
        contact: "మమ్మల్ని సంప్రదించండి",
        copyright: "© 2025 ఆలయం. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;