const translations = {
    en: {
        humanRightsGuide: "Human Rights Guide",
        selectLanguage: "Select Language:",
        selectCriteria: "Select Law Criteria:",
        fundamentalRights: "Fundamental Rights",
        statutoryRights: "Statutory Rights",
        commissions: "National Commissions",
        propertyLaws:"Property Laws",
        criminalLaws:"Criminal Laws",
    },
    hi: {
        humanRightsGuide: "मानव अधिकार मार्गदर्शिका",
        selectLanguage: "भाषा चुनें:",
        selectCriteria: "कानून मानदंड चुनें:",
        fundamentalRights: "मौलिक अधिकार",
        statutoryRights: "वैधानिक अधिकार",
        commissions: "राष्ट्रीय आयोग",
        propertyLaws:"संपत्ति कानून",
        criminalLaws:"आपराधिक कानून",
    },
    gu: {
        humanRightsGuide: "માનવ અધિકાર માર્ગદર્શિકા",
        selectLanguage: "ભાષા પસંદ કરો:",
        selectCriteria: "કાયદો માપદંડ પસંદ કરો:",
        fundamentalRights: "મૂળભૂત હક",
        statutoryRights: "કાયદાકીય હક",
        commissions: "રાષ્ટ્રીય આયોગ",
        propertyLaws:"મિલકતના કાયદા",
        criminalLaws:"ફોજદારી કાયદાઓ",
    } 
};

const laws = {
    en: {
        fundamentalRights: [
            { title: "Right to Equality", content: "Articles 14-18 cover equality before the law and prohibit discrimination on various grounds." },
            { title: "Right to Freedom", content: "Articles 19-22 provide freedom of speech, assembly, association, movement, residence, and profession." },
            { title: "Right against Exploitation", content: "Articles 23-24 prohibit human trafficking, forced labor, and child labor in factories and hazardous occupations." },
            { title: "Right to Freedom of Religion", content: "Articles 25-28 ensure freedom of conscience, religious practice, and manage religious affairs." },
            { title: "Cultural and Educational Rights", content: "Articles 29-30 protect the interests of minorities by allowing them to conserve their culture, language, and script, and establish and administer educational institutions." },
            { title: "Right to Constitutional Remedies", content: "Article 32 provides the right to approach the Supreme Court for enforcement of fundamental rights." },
        ],
        statutoryRights: [
            { title: "Right to Information Act, 2005", content: "Empowers citizens to request information from public authorities, promoting transparency." },
            { title: "Consumer Protection Act, 2019", content: "Provides protection to consumers against unfair trade practices and ensures their right to information, choice, and redressal of grievances." },
            { title: "Protection of Women from Domestic Violence Act, 2005", content: "Offers protection to women from domestic violence and provides legal remedies for victims." },
            { title: "Right to Education Act, 2009", content: "Ensures free and compulsory education for all children aged 6 to 14 years." },
            { title: "Maternity Benefit Act, 1961", content: "Protects the employment of women during the time of their maternity and entitles them to a 'maternity benefit' – a fully paid absence from work to take care of their child." },
            { title: "Maintenance and Welfare of Parents and Senior Citizens Act, 2007", content: "Provides effective provisions for the maintenance and welfare of parents and senior citizens." },
            { title: "Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989", content: "Prevents atrocities and discrimination against members of the Scheduled Castes and Scheduled Tribes." },
            { title: "Persons with Disabilities (Equal Opportunities, Protection of Rights and Full Participation) Act, 1995", content: "Promotes and ensures equality and full participation of persons with disabilities in society." },
        ],
        nationalCommissions:[
            { title: "National Human Rights Commission (NHRC)", content: "Protects and promotes human rights, investigates human rights violations, and recommends remedial measures." },
            { title: "National Commission for Women (NCW)", content: "Safeguards women's rights, addresses issues related to gender inequality, and provides legal and social support to women." },
            { title: "National Commission for Minorities (NCM)", content: "Ensures the protection of the rights of religious and linguistic minorities and addresses their concerns." },
            { title: "National Commission for Scheduled Castes (NCSC)", content: "Safeguards the rights and interests of Scheduled Castes and addresses issues related to discrimination and social injustice." },
            { title: "National Commission for Scheduled Tribes (NCST)", content: "Protects and promotes the rights of Scheduled Tribes, ensuring their social, economic, and educational development." },
            { title: "National Commission for Backward Classes (NCBC)", content: "Safeguards the rights of socially and educationally backward classes and recommends measures for their welfare." },
            { title: "National Commission for Protection of Child Rights (NCPCR)", content: "Protects and promotes the rights of children, ensures their safety and welfare, and addresses issues of child abuse and exploitation." },
            { title: "National Commission for Safai Karamcharis (NCSK)", content: "Addresses issues related to manual scavenging and promotes the welfare of safai karamcharis (sanitation workers)." },
        ],
        propertyLaws:[
            {title:"Transfer of Property Act, 1882",content:"Governs the transfer of property in India. It provides the legal framework for the sale, lease, mortgage, and gift of property. The Act outlines the processes and requirements for transferring property rights and ensures the rights of both the transferor and transferee are protected."},
            {title:"Registration Act, 1908",content:"Regulates the registration of documents related to the transfer of property, including sale deeds, lease deeds, and mortgage deeds. The Act mandates that certain documents must be registered to be legally valid and to ensure that the transfer of property is recognized by law."},
            {title:"Indian Succession Act, 1925",content:"Deals with the succession of property and estates after the death of an individual. It provides the rules for the distribution of a deceased person’s estate among heirs and legatees, covering both intestate (without a will) and testamentary (with a will) succession."},
            {title:"Land Acquisition Act, 2013",content:"Governs the process by which the government acquires private land for public purposes. It outlines the procedures for acquiring land, compensating landowners, and ensuring fair and just compensation and rehabilitation for affected persons."},
            {title:"Real Estate (Regulation and Development) Act, 2016 (RERA)",content:"Aims to regulate the real estate sector and ensure transparency in property transactions. RERA mandates registration of real estate projects and agents, provides mechanisms for redressal of grievances, and ensures timely delivery of projects."},
            {title:"Consumer Protection Act, 2019 (Relevant to Property)",content:"Although broader in scope, this Act includes provisions relevant to property transactions, especially concerning real estate developers and builders. It offers protection to consumers from unfair trade practices and defective services in the real estate sector."},
            {title:"The Partition Act, 1893",content:"Deals with the partition of property among co-owners. It provides the legal framework for the division of property held jointly or in common, ensuring that the partition is conducted fairly and equitably."},
            {title:"Benami Transactions (Prohibition) Act, 1988",content:"Prohibits benami transactions, which are transactions where property is held by one person on behalf of another person. The Act seeks to prevent property transactions that are intended to evade tax or conceal the true owner."},
            {title:"Hindu Succession Act, 1956",content:"Governs the succession of property among Hindus. It provides rules for the inheritance of property among Hindus and ensures that property is passed down according to specified rules, including those related to the rights of daughters and other family members."},
        ],
        criminalLaws: [
            { title: "<h2>The Indian Penal Code, 1860 (IPC)</h2>", content: "The IPC is the main criminal code in India, providing a comprehensive set of laws for the prevention and punishment of criminal offenses.<ul><br><b>Part I: General Principles:</b> Defines general principles of criminal law, such as definitions of crime, punishments, and the classification of offenses.<br><b>Part II: Offenses Against the State:</b> Includes crimes like treason, sedition, and terrorism.<br><b>Part III: Offenses Against the Body:</b> Covers offenses such as assault, murder, and grievous hurt.<br><b>Part IV: Offenses Against Property:</b> Deals with crimes like theft, burglary, and robbery.<br><b>Part V: Offenses Relating to Marriage:</b> Addresses crimes such as bigamy and adultery.<br><b>Part VI: Offenses Relating to Marriage:</b> Includes offenses like cruelty and harassment.<br><b>Part VII: Offenses Affecting the Public Health, Safety, and Morals:  </b> Includes crimes such as public nuisance and obscenity.</ul>"},
            { title: "<h2>The Code of Criminal Procedure, 1973 (CrPC)</h2>", content:"Provides the procedural framework for the investigation, prosecution, and trial of criminal offenses.<ul><br><b>Investigation:</b> Outlines procedures for the investigation of crimes by the police.<br><b>Arrest and Bail:</b> Defines the process for arresting individuals and granting bail.<br><b>Trial:</b> Details the procedures for conducting trials in various courts, including magistrate courts and sessions courts.<br><b>Appeals and Revisions:</b> Provides mechanisms for appealing against convictions and seeking revisions of court orders.</ul>"},
            {title:"<h2>The Narcotic Drugs and Psychotropic Substances Act, 1985</h2>",content:"Regulates and controls the operations related to narcotic drugs and psychotropic substances.<ul><br><b>Prohibition:</b> Prohibits the manufacture, sale, and use of narcotic drugs and psychotropic substances except for medical and scientific purposes.<br><b>Punishments:</b> Provides penalties for offenses related to trafficking, possession, and abuse of controlled substances.<br><b>Regulation:</b> Establishes procedures for the regulation of drug use and trafficking.</ul>"},
            { title: "<h2>The Protection of Children from Sexual Offences (POCSO) Act, 2012</h2>",content:"Provides protection to children from sexual abuse and exploitation.<ul><br><b>Definitions:</b> Defines various forms of sexual abuse, including penetrative and non-penetrative offenses.<br><b>Reporting: Mandates the reporting of sexual offenses against children.</b>Trial: Establishes procedures for the trial of cases involving child victims, including the creation of special courts.<br><b>Support Services:</b> Provides for the support and rehabilitation of child victims.</ul>"},
            {title:"<h2>The Juvenile Justice (Care and Protection of Children) Act, 2015</h2>",content:"Addresses the care, protection, and rehabilitation of children in conflict with the law and those in need of care.<ul><br><b>Juvenile Justice Boards:</b> Establishes boards for handling cases involving juveniles.<br><b>Care and Protection:</b> Provides for the establishment of child care institutions and adoption processes.<br><b>Rehabilitation:</b> Focuses on the rehabilitation and reintegration of juveniles into society.</ul"},
            {title:"<h2>The Domestic Violence Act, 2005</h2>",content:"Provides protection to women from domestic violence and abuse.<ul><br><b>Definition of Domestic Violence:</b> Defines various forms of domestic violence, including physical, emotional, sexual, and economic abuse.<br><b>Protection Orders:</b> Allows women to seek protection orders and residence orders.<br><b>Legal Recourse:</b> Provides for legal recourse and support for victims of domestic violence."},
            {title:"<h2>The Cyber Crime Laws</h2>",content:"<ul><b>Information Technology Act, 2000 (IT Act):</b> Addresses cybercrimes and electronic frauds.<br><b>Cyber Offenses:</b> Includes offenses related to hacking, identity theft, and data breaches.<br><b>Procedures:</b> Provides procedures for investigation and prosecution of cyber crimes."},
        ]
    },
    hi: {
        fundamentalRights: [
            { title: "समानता का अधिकार", content: "अनुच्छेद 14-18 कानून के समक्ष समानता को कवर करता है और विभिन्न आधारों पर भेदभाव को प्रतिबंधित करता है।" },
            { title: "स्वतंत्रता का अधिकार", content: "अनुच्छेद 19-22 भाषण, सभा, संघ, आंदोलन, निवास और पेशे की स्वतंत्रता प्रदान करते हैं।" },
            { title: "शोषण के विरुद्ध अधिकार", content: "अनुच्छेद 23-24 मानव तस्करी, जबरन श्रम और कारखानों और खतरनाक व्यवसायों में बाल श्रम का निषेध करते हैं।" },
            { title: "धर्म की स्वतंत्रता का अधिकार", content: "अनुच्छेद 25-28 अंतरात्मा, धार्मिक अभ्यास और धार्मिक मामलों का प्रबंधन करने की स्वतंत्रता सुनिश्चित करते हैं।" },
            { title: "सांस्कृतिक और शैक्षिक अधिकार", content: "अनुच्छेद 29-30 अल्पसंख्यकों को उनकी संस्कृति, भाषा और लिपि के संरक्षण और शैक्षिक संस्थानों की स्थापना और प्रशासन की अनुमति देकर उनके हितों की रक्षा करता है।" },
            { title: "संवैधानिक उपचार का अधिकार", content: "अनुच्छेद 32 मौलिक अधिकारों के प्रवर्तन के लिए सर्वोच्च न्यायालय से संपर्क करने का अधिकार प्रदान करता है।" },
        ],
        statutoryRights: [
            { title: "सूचना का अधिकार अधिनियम, 2005", content: "पारदर्शिता को बढ़ावा देने के लिए नागरिकों को सार्वजनिक प्राधिकरणों से जानकारी का अनुरोध करने का अधिकार देता है।" },
            { title: "उपभोक्ता संरक्षण अधिनियम, 2019", content: "उपभोक्ताओं को अनुचित व्यापार प्रथाओं से सुरक्षा प्रदान करता है और सूचना, पसंद और शिकायतों के निवारण के उनके अधिकार को सुनिश्चित करता है।" },
            { title: "घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, 2005", content: "महिलाओं को घरेलू हिंसा से सुरक्षा प्रदान करता है और पीड़ितों के लिए कानूनी उपचार प्रदान करता है।" },
            { title: "शिक्षा का अधिकार अधिनियम, 2009", content: "6 से 14 वर्ष की आयु के सभी बच्चों के लिए मुफ्त और अनिवार्य शिक्षा सुनिश्चित करता है।" },
            { title: "मातृत्व लाभ अधिनियम, 1961", content: "यह मातृत्व के समय महिलाओं के रोजगार की रक्षा करता है और उन्हें 'मातृत्व लाभ' का हकदार बनाता है – यानी अपने बच्चे की देखभाल के लिये काम से पूरी तरह से भुगतान किया गया अनुपस्थिति।" },
            { title: "माता-पिता और वरिष्ठ नागरिकों का भरण-पोषण और कल्याण अधिनियम, 2007", content: "माता-पिता और वरिष्ठ नागरिकों के रखरखाव और कल्याण के लिए प्रभावी प्रावधान प्रदान करता है।" },
            { title: "अनुसूचित जाति और अनुसूचित जनजाति (अत्याचार निवारण) अधिनियम, 1989", content: "अनुसूचित जातियों और अनुसूचित जनजातियों के सदस्यों के खिलाफ अत्याचार और भेदभाव को रोकता है।" },
            { title: "विकलांग व्यक्ति (समान अवसर, अधिकारों का संरक्षण और पूर्ण भागीदारी) अधिनियम, 1995", content: "समाज में विकलांग व्यक्तियों की समानता और पूर्ण भागीदारी को बढ़ावा देता है और सुनिश्चित करता है।" },
        ],
        nationalCommissions:[
            { title: "राष्ट्रीय मानव अधिकार आयोग (NHRC)", content: "मानवाधिकारों की रक्षा और प्रचार करता है, मानवाधिकारों के उल्लंघन की जांच करता है, और उपचारात्मक उपायों की सिफारिश करता है।" },
            { title: "राष्ट्रीय महिला आयोग (NCW)", content: "महिलाओं के अधिकारों की रक्षा करता है, लैंगिक असमानता से संबंधित मुद्दों को संबोधित करता है, और महिलाओं को कानूनी और सामाजिक समर्थन प्रदान करता है।" },
            { title: "राष्ट्रीय अल्पसंख्यक आयोग (NCM)", content: "धार्मिक और भाषाई अल्पसंख्यकों के अधिकारों की सुरक्षा सुनिश्चित करता है और उनकी चिंताओं को दूर करता है।" },
            { title: "राष्ट्रीय अनुसूचित जाति आयोग (NCSC)", content: "अनुसूचित जातियों के अधिकारों और हितों की रक्षा करता है और भेदभाव और सामाजिक अन्याय से संबंधित मुद्दों को संबोधित करता है।" },
            { title: "राष्ट्रीय अनुसूचित जनजाति आयोग (NCST)", content: "अनुसूचित जनजातियों के अधिकारों की रक्षा और संवर्धन करता है, उनके सामाजिक, आर्थिक और शैक्षिक विकास को सुनिश्चित करता है।" },
            { title: "राष्ट्रीय पिछड़ा वर्ग आयोग (NCBC)", content: "सामाजिक और शैक्षिक रूप से पिछड़े वर्गों के अधिकारों की रक्षा करता है और उनके कल्याण के उपायों की सिफारिश करता है।" },
            { title: "राष्ट्रीय बाल अधिकार संरक्षण आयोग (NCPCR)", content: "बच्चों के अधिकारों की रक्षा और प्रचार करता है, उनकी सुरक्षा और कल्याण सुनिश्चित करता है, और बाल शोषण और शोषण के मुद्दों को संबोधित करता है।" },
            { title: "राष्ट्रीय सफाई कर्मचारी आयोग (NCSK)", content: "मैनुअल स्कैवेंजिंग से संबंधित मुद्दों को संबोधित करता है और सफाई कर्मचारियों (स्वच्छता कार्यकर्ताओं) के कल्याण को बढ़ावा देता है।" },
        ],
        propertyLaws:[
            {title:"संपत्ति हस्तांतरण अधिनियम, 1882",content:"भारत में संपत्ति के हस्तांतरण को नियंत्रित करता है। यह संपत्ति की बिक्री, पट्टे, बंधक और उपहार के लिए कानूनी ढांचा प्रदान करता है। अधिनियम संपत्ति के अधिकारों को स्थानांतरित करने के लिए प्रक्रियाओं और आवश्यकताओं की रूपरेखा तैयार करता है और यह सुनिश्चित करता है कि हस्तांतरणकर्ता और हस्तांतरिती दोनों के अधिकार सुरक्षित हैं।"},
            {title:"पंजीकरण अधिनियम, 1908",content:"संपत्ति के हस्तांतरण से संबंधित दस्तावेजों के पंजीकरण को नियंत्रित करता है, जिसमें बिक्री विलेख, पट्टा विलेख और बंधक कर्म शामिल हैं। अधिनियम में कहा गया है कि कुछ दस्तावेजों को कानूनी रूप से वैध होने के लिए पंजीकृत किया जाना चाहिए और यह सुनिश्चित करने के लिए कि संपत्ति का हस्तांतरण कानून द्वारा मान्यता प्राप्त है।"},
            {title:"भारतीय उत्तराधिकार अधिनियम, 1925",content:"किसी व्यक्ति की मृत्यु के बाद संपत्ति और सम्पदा के उत्तराधिकार से संबंधित है। यह उत्तराधिकारियों और विरासत के बीच एक मृत व्यक्ति की संपत्ति के वितरण के लिए नियम प्रदान करता है, जिसमें निर्वसीयत (बिना वसीयत के) और वसीयतनामा (वसीयत के साथ) उत्तराधिकार दोनों शामिल हैं।"},
            {title:"भूमि अधिग्रहण अधिनियम, 2013",content:"उस प्रक्रिया को नियंत्रित करता है जिसके द्वारा सरकार सार्वजनिक उद्देश्यों के लिए निजी भूमि का अधिग्रहण करती है। यह भूमि अधिग्रहण, भूस्वामियों को मुआवजा देने और प्रभावित व्यक्तियों के लिए उचित और न्यायसंगत मुआवजा और पुनर्वास सुनिश्चित करने की प्रक्रियाओं को रेखांकित करता है।"},
            {title:"रियल एस्टेट (विनियमन और विकास) अधिनियम, 2016 (RERA)",content:"इसका उद्देश्य रियल एस्टेट क्षेत्र को विनियमित करना और संपत्ति लेनदेन में पारदर्शिता सुनिश्चित करना है। RERA रियल एस्टेट परियोजनाओं और एजेंटों के पंजीकरण को अनिवार्य करता है, शिकायतों के निवारण के लिए तंत्र प्रदान करता है, और परियोजनाओं का समय पर वितरण सुनिश्चित करता है।"},
            {title:"उपभोक्ता संरक्षण अधिनियम, 2019 (संपत्ति के लिए प्रासंगिक)",content:"हालांकि दायरे में व्यापक, इस अधिनियम में संपत्ति लेनदेन के लिए प्रासंगिक प्रावधान शामिल हैं, विशेष रूप से रियल एस्टेट डेवलपर्स और बिल्डरों से संबंधित। यह उपभोक्ताओं को अनुचित व्यापार प्रथाओं और अचल संपत्ति क्षेत्र में दोषपूर्ण सेवाओं से सुरक्षा प्रदान करता है।"},
            {title:"विभाजन अधिनियम, 1893",content:"सह-मालिकों के बीच संपत्ति के विभाजन से संबंधित है। यह संयुक्त रूप से या आम तौर पर आयोजित संपत्ति के विभाजन के लिए कानूनी ढांचा प्रदान करता है, यह सुनिश्चित करता है कि विभाजन निष्पक्ष और समान रूप से आयोजित किया जाता है।"},
            {title:"बेनामी लेनदेन (निषेध) अधिनियम, 1988",content:"बेनामी लेनदेन को प्रतिबंधित करता है, जो लेनदेन हैं जहां संपत्ति एक व्यक्ति द्वारा दूसरे व्यक्ति की ओर से रखी जाती है। अधिनियम संपत्ति लेनदेन को रोकने का प्रयास करता है जिसका उद्देश्य कर से बचना या वास्तविक मालिक को छिपाना है।"},
            {title:"हिंदू उत्तराधिकार अधिनियम, 1956",content:"हिंदुओं के बीच संपत्ति के उत्तराधिकार को नियंत्रित करता है। यह हिंदुओं के बीच संपत्ति की विरासत के लिए नियम प्रदान करता है और यह सुनिश्चित करता है कि संपत्ति निर्दिष्ट नियमों के अनुसार पारित की जाए, जिसमें बेटियों और परिवार के अन्य सदस्यों के अधिकारों से संबंधित नियम शामिल हैं।"},
        ]
    },
    gu: {
        fundamentalRights: [
            { title: "સમાનતાનો અધિકાર", content: "કલમ 14-18 કાયદા સમક્ષ સમાનતાને આવરી લે છે અને વિવિધ આધારો પર ભેદભાવ પર પ્રતિબંધ મૂકે છે." },
            { title: "સ્વતંત્રતાનો અધિકાર", content: "અનુચ્છેદ 19-22માં વાણી, સભા, સંગઠન, આંદોલન, રહેઠાણ અને વ્યવસાયની સ્વતંત્રતા આપવામાં આવી છે." },
            { title: "શોષણ સામેનો અધિકાર", content: "કલમ 23-24 ફેક્ટરીઓ અને જોખમી વ્યવસાયોમાં માનવ તસ્કરી, બળજબરીથી મજૂરી અને બાળ મજૂરી પર પ્રતિબંધ મૂકે છે." },
            { title: "ધર્મની સ્વતંત્રતાનો અધિકાર", content: "અનુચ્છેદ 25-28 અંતરાત્મા, ધાર્મિક આચરણની સ્વતંત્રતા અને ધાર્મિક બાબતોનું સંચાલન કરે છે." },
            { title: "સાંસ્કૃતિક અને શૈક્ષણિક અધિકારો", content: "અનુચ્છેદ 29-30 લઘુમતીઓના હિતોનું રક્ષણ કરે છે અને તેમને તેમની સંસ્કૃતિ, ભાષા અને લિપિનું સંરક્ષણ કરવાની અને શૈક્ષણિક સંસ્થાઓની સ્થાપના અને વહીવટ કરવાની મંજૂરી આપે છે." },
            { title: "બંધારણીય ઉપાયોનો અધિકાર", content: "આર્ટિકલ ૩૨ મૂળભૂત અધિકારોના અમલીકરણ માટે સુપ્રીમ કોર્ટનો સંપર્ક કરવાનો અધિકાર પૂરો પાડે છે." },
        ],
        statutoryRights: [
            { title: "માહિતીનો અધિકાર ધારો, 2005", content: "નાગરિકોને પારદર્શિતાને પ્રોત્સાહન આપવા, જાહેર સત્તાવાળાઓ પાસેથી માહિતીની વિનંતી કરવાની સત્તા આપે છે." },
            { title: "ગ્રાહક સુરક્ષા ધારો, 2019", content: "ઉપભોક્તાઓને અયોગ્ય વેપાર પદ્ધતિઓ સામે રક્ષણ પૂરું પાડે છે અને ફરિયાદોના માહિતી, પસંદગી અને નિવારણના તેમના અધિકારની ખાતરી આપે છે." },
            { title: "ઘરેલું હિંસાથી મહિલાઓનું રક્ષણ અધિનિયમ, 2005", content: "મહિલાઓને ઘરેલું હિંસાથી રક્ષણ આપે છે અને પીડિતો માટે કાનૂની ઉપાયો પ્રદાન કરે છે." },
            { title: "શિક્ષણનો અધિકાર,2009", content: "૬ થી ૧૪ વર્ષની વયના બધા બાળકો માટે મફત અને ફરજિયાત શિક્ષણની ખાતરી આપે છે." },
            { title: "માતૃત્વ લાભ ધારો, 1961", content: "પ્રસૂતિના સમય દરમિયાન મહિલાઓના રોજગારનું રક્ષણ કરે છે અને તેમને 'પ્રસૂતિ લાભ' માટે હકદાર બનાવે છે - જે તેમના બાળકની સંભાળ રાખવા માટે કામથી સંપૂર્ણ પગારની ગેરહાજરી છે." },
            { title: "માતા-પિતા અને વરિષ્ઠ નાગરિકોની જાળવણી અને કલ્યાણ ધારો, 2007", content: "માતાપિતા અને વરિષ્ઠ નાગરિકોની જાળવણી અને કલ્યાણ માટે અસરકારક જોગવાઈઓ પ્રદાન કરે છે." },
            { title: "અનુસૂચિત જાતિ અને અનુસૂચિત જનજાતિ (અત્યાચાર નિવારણ) ધારો, 1989", content: "અનુસૂચિત જાતિ અને અનુસૂચિત જનજાતિના સભ્યો પર અત્યાચાર અને ભેદભાવ અટકાવે છે." },
            { title: "વિકલાંગતા ધરાવતી વ્યક્તિઓ (સમાન તકો, અધિકારોનું રક્ષણ અને સંપૂર્ણ ભાગીદારી) ધારો, 1995", content: "સમાજમાં અપંગ વ્યક્તિઓની સમાનતા અને સંપૂર્ણ ભાગીદારીને પ્રોત્સાહન આપે છે અને ખાતરી આપે છે." },
        ],
        nationalCommissions:[
            { title: "રાષ્ટ્રીય માનવ અધિકાર પંચ (NHRC)", content: "માનવાધિકારોનું રક્ષણ કરે છે અને તેને પ્રોત્સાહન આપે છે, માનવાધિકારોના ઉલ્લંઘનની તપાસ કરે છે અને ઉપચારાત્મક પગલાંની ભલામણ કરે છે." },
            { title: "રાષ્ટ્રીય મહિલા આયોગ (NCW)", content: "મહિલાઓના અધિકારોનું રક્ષણ કરે છે, લિંગ અસમાનતાને લગતા મુદ્દાઓનું નિરાકરણ લાવે છે અને મહિલાઓને કાનૂની અને સામાજિક ટેકો પૂરો પાડે છે." },
            { title: "રાષ્ટ્રીય લઘુમતી આયોગ (NCM)", content: "ધાર્મિક અને ભાષાકીય લઘુમતીઓના અધિકારોના રક્ષણની ખાતરી આપે છે અને તેમની ચિંતાઓને દૂર કરે છે." },
            { title: "રાષ્ટ્રીય અનુસૂચિત જાતિ આયોગ (NCSC)", content: "અનુસૂચિત જાતિના અધિકારો અને હિતોનું રક્ષણ કરે છે અને ભેદભાવ અને સામાજિક અન્યાયથી સંબંધિત મુદ્દાઓને ધ્યાનમાં લે છે." },
            { title: "રાષ્ટ્રીય અનુસૂચિત જનજાતિ આયોગ (NCST)", content: "અનુસૂચિત જનજાતિના અધિકારોનું રક્ષણ કરે છે અને તેને પ્રોત્સાહન આપે છે, જેથી તેમનો સામાજિક, આર્થિક અને શૈક્ષણિક વિકાસ સુનિશ્ચિત થાય." },
            { title: "રાષ્ટ્રીય પછાત વર્ગ આયોગ (NCBC)", content: "સામાજિક અને શૈક્ષણિક રીતે પછાત વર્ગોના અધિકારોનું રક્ષણ કરે છે અને તેમના કલ્યાણ માટેનાં પગલાંની ભલામણ કરે છે." },
            { title: "રાષ્ટ્રીય બાળ અધિકાર સંરક્ષણ (NCPCR) ", content: "બાળકોના અધિકારોનું રક્ષણ કરે છે અને તેને પ્રોત્સાહન આપે છે, તેમની સલામતી અને કલ્યાણની ખાતરી આપે છે અને બાળ શોષણ અને શોષણના મુદ્દાઓને સંબોધિત કરે છે." },
            { title: "રાષ્ટ્રીય સફાઈ કર્મચારી સંરક્ષણ (NCSK)", content: "મેન્યુઅલ સ્કેવેંજિંગને લગતા મુદ્દાઓને સંબોધિત કરે છે અને સફાઈ કર્મચારીઓ (સફાઇ કામદારો) ના કલ્યાણને પ્રોત્સાહન આપે છે." },
        ],
        propertyLaws:[
            {title:"મિલકત હસ્તાંતરણ ધારો, 1882",content:"ભારતમાં મિલકતના હસ્તાંતરણનું સંચાલન કરે છે. તે મિલકતના વેચાણ, ભાડાપટ્ટા, ગીરો અને ભેટ માટે કાનૂની માળખું પૂરું પાડે છે. આ કાયદો મિલકતના અધિકારોને તબદીલ કરવા માટેની પ્રક્રિયાઓ અને જરૂરિયાતોની રૂપરેખા આપે છે અને એ સુનિશ્ચિત કરે છે કે, ટ્રાન્સફરર અને ટ્રાન્સફરી બંનેના અધિકારોનું રક્ષણ થાય છે."},
            {title:"નોંધણી ધારો, 1908",content:"સંપત્તિના સ્થાનાંતરણને લગતા દસ્તાવેજોની નોંધણીનું નિયમન કરે છે, જેમાં વેચાણ દસ્તાવેજો, ભાડાપટ્ટાના દસ્તાવેજો અને ગીરો દસ્તાવેજોનો સમાવેશ થાય છે. અધિનિયમ ફરજિયાત છે કે કેટલાક દસ્તાવેજો કાયદેસર રીતે માન્ય હોવા માટે નોંધણી કરાવવી આવશ્યક છે અને ખાતરી કરવા માટે કે સંપત્તિના સ્થાનાંતરણને કાયદા દ્વારા માન્યતા આપવામાં આવી છે."},
            {title:"ભારતીય ઉત્તરાધિકાર ધારો, 1925",content:"કોઈ વ્યક્તિના મૃત્યુ પછી સંપત્તિ અને વસાહતોના ઉત્તરાધિકાર સાથે વ્યવહાર કરે છે. તે મૃત્યુ પામેલી વ્યક્તિની જાગીરને વારસદારો અને લેગેટ્સ વચ્ચે વહેંચવા માટેના નિયમો પૂરા પાડે છે, જેમાં ઇન્ટેસ્ટેટ (વસિયતનામા વિના) અને વસિયતનામું (વસિયતનામું સાથે) ઉત્તરાધિકાર બંનેને આવરી લેવામાં આવ્યા છે."},
            {title:"જમીન સંપાદન ધારો, 2013",content:"સરકાર જાહેર હેતુ માટે ખાનગી જમીન સંપાદન કરે છે તે પ્રક્રિયાનું સંચાલન કરે છે. તે જમીન સંપાદન કરવા, જમીનમાલિકોને વળતર આપવા અને અસરગ્રસ્ત વ્યક્તિઓ માટે વાજબી અને ન્યાયી વળતર અને પુનર્વસનની ખાતરી કરવા માટેની પ્રક્રિયાઓની રૂપરેખા આપે છે."},
            {title:"સ્થાવર મિલકત(નિયમન અને વિકાસ) ધારો, 2016 (RERA)",content:"સ્થાવર મિલકત ક્ષેત્રને નિયંત્રિત કરવા અને સંપત્તિના વ્યવહારોમાં પારદર્શિતાની ખાતરી કરવાનો હેતુ છે. રેરા રિયલ એસ્ટેટ પ્રોજેક્ટ્સ અને એજન્ટોની નોંધણી ફરજિયાત કરે છે, ફરિયાદોના નિવારણ માટે વ્યવસ્થા પૂરી પાડે છે અને પ્રોજેક્ટ્સની સમયસર ડિલિવરી સુનિશ્ચિત કરે છે."},
            {title:"ગ્રાહક સુરક્ષા ધારો, 2019 (સંપત્તિ સાથે સંબંધિત)",content:"વ્યાપમાં વિસ્તૃત હોવા છતાં, આ કાયદામાં મિલકતના વ્યવહારોને લગતી જોગવાઈઓનો સમાવેશ થાય છે, ખાસ કરીને રિયલ એસ્ટેટ ડેવલપર્સ અને બિલ્ડરોને લગતી. તે ગ્રાહકોને સ્થાવર મિલકત ક્ષેત્રમાં અયોગ્ય વેપાર પદ્ધતિઓ અને ખામીયુક્ત સેવાઓથી રક્ષણ આપે છે."},
            {title:"વિભાજન ધારો, 1893",content:"સહ-માલિકો વચ્ચે સંપત્તિના વિભાજન સાથે સંબંધિત છે. તે સંયુક્ત રીતે અથવા સામાન્ય રીતે રાખવામાં આવેલી સંપત્તિના વિભાજન માટે કાનૂની માળખું પૂરું પાડે છે, જે સુનિશ્ચિત કરે છે કે પાર્ટીશન વાજબી અને સમાનરીતે હાથ ધરવામાં આવે છે."},
            {title:"બેનામી વ્યવહારો (પ્રતિબંધ) ધારો, 1988",content:"બેનામી વ્યવહારો પર પ્રતિબંધ મૂકે છે, જે એવા વ્યવહારો છે જ્યાં સંપત્તિ એક વ્યક્તિ દ્વારા બીજી વ્યક્તિ વતી રાખવામાં આવે છે. આ કાયદો સંપત્તિના વ્યવહારોને રોકવાનો પ્રયત્ન કરે છે જેનો હેતુ કરમાંથી છટકવાનો અથવા સાચા માલિકને છુપાવવાનો છે."},
            {title:"હિંદુ ઉત્તરાધિકાર ધારો, 1956",content:"હિંદુઓમાં સંપત્તિના ઉત્તરાધિકારનું સંચાલન કરે છે. તે હિન્દુઓમાં સંપત્તિના વારસા માટેના નિયમો પ્રદાન કરે છે અને સુનિશ્ચિત કરે છે કે સંપત્તિ ચોક્કસ નિયમો અનુસાર પસાર કરવામાં આવે છે, જેમાં પુત્રીઓ અને પરિવારના અન્ય સભ્યોના અધિકારો સાથે સંબંધિત નિયમોનો પણ સમાવેશ થાય છે."},
        ]
    }
};

function displayLaws(language) {
    const lawsContainer = document.getElementById('laws-container');
    lawsContainer.innerHTML = ''; // Clear the container

    // Get the selected criteria
    const criteriaSelect = document.getElementById('criteria');
    const selectedCriteria = criteriaSelect.value;

    updateLaws(language, selectedCriteria);
}

function updateLaws(language, criteria) {
    const lawsContainer = document.getElementById('laws-container');
    let lawsContentContainer = document.getElementById('laws-content-container');

    // Remove existing laws content container if it exists
    if (lawsContentContainer) {
        lawsContainer.removeChild(lawsContentContainer);
    }

    // Create a new laws content container
    lawsContentContainer = document.createElement('div');
    lawsContentContainer.id = 'laws-content-container';
    lawsContainer.appendChild(lawsContentContainer);

    let contentData = [];
    let headerText = '';

    // Determine which data to display based on the selected criteria
    if (criteria === 'fundamental-rights') {
        contentData = laws[language].fundamentalRights;
        headerText = translations[language].fundamentalRights;
    } else if (criteria === 'statutory-rights') {
        contentData = laws[language].statutoryRights;
        headerText = translations[language].statutoryRights;
    } else if (criteria === 'commissions') {
        contentData = laws[language].nationalCommissions;
        headerText = translations[language].commissions;
    }else if (criteria === 'property-laws') {
        contentData = laws[language].propertyLaws;
        headerText = translations[language].propertyLaws;
    }else if (criteria === 'criminal-laws') {
        contentData = laws[language].criminalLaws;
        headerText = translations[language].criminalLaws;
    }


    // Display the relevant header and content
    if (contentData.length > 0) {
        const header = document.createElement('h2');
        header.textContent = headerText;
        lawsContentContainer.appendChild(header);

        contentData.forEach((item) => {
            const itemContainer = document.createElement('div');
            itemContainer.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.content}</p>
            `;
            lawsContentContainer.appendChild(itemContainer);
        });
    }
}

document.getElementById('language-select').addEventListener('change',(event)=>{
    const language=event.target.value;
    updateContent(language);
});

function updateContent(language){
    const headerTitle=document.querySelector('header h1'); // added to select the header title

    const languageSelection=document.querySelector('label[for="language-select"]');
    const criteriaLabel=document.querySelector('label[for="criteria"]');
    const criteriaOptions=document.querySelectorAll('#criteria option');

    headerTitle.textContent=translations[language].humanRightsGuide; // update the header title

    languageSelection.textContent=translations[language].selectLanguage;

    criteriaLabel.textContent=translations[language].selectCriteria;

    criteriaOptions[0].textContent=translations[language].fundamentalRights;
    criteriaOptions[1].textContent=translations[language].statutoryRights;
    criteriaOptions[2].textContent=translations[language].commissions;
    criteriaOptions[3].textContent=translations[language].propertyLaws;
    criteriaOptions[4].textContent=translations[language].criminalLaws;
}

// Initial call to display laws in default language
document.getElementById('language-select').addEventListener('change', (event) => {
    const language = event.target.value;
    displayLaws(language);
});

// Update the laws when the criteria changes
document.getElementById('criteria').addEventListener('change', (event) => {
    const language = document.getElementById('language-select').value;
    const criteria = event.target.value;
    updateLaws(language, criteria);
});

// Display initial laws in default language
displayLaws('en');
