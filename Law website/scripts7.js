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
        healthandsafetyLaws:"Public Health and Safety Laws",
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
        healthandsafetyLaws:"सार्वजनिक स्वास्थ्य और सुरक्षा कानून",
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
        healthandsafetyLaws:"જાહેર આરોગ્ય અને સલામતી કાયદા",
    } 
};

const laws = {
    en: {
        fundamentalRights: [
            { title: "Right to Equality (Articles 14-18):", content: "<ul><b>Article 14:</b>Equality before the law.<br><b>Article 15:</b>Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.<br><b>Article 16:</b>Equality of opportunity in matters of public employment.<br><b>Article 17:</b>Abolition of untouchability.<br><b>Article 18:</b>Abolition of titles.</ul>" },
            { title: "Right to Freedom (Articles 19-22):", content: "<ul><b>Article 19:</b>Protection of certain rights regarding freedom of speech, etc.<br><b>Article 20:</b>Protection in respect of conviction for offenses.<br><b>Article 21:</b>Protection of life and personal liberty.<br><b>Article 22:</b>Protection against arrest and detention in certain cases./ul>" },
            { title: "Right against Exploitation (Articles 23-24):", content: "<ul><b>Article 23:</b>Prohibition of traffic in human beings and forced labor.<br><b>Article 24:</b>Prohibition of employment of children in factories, etc.</ul>" },
            { title: "Right to Freedom of Religion (Articles 25-28):", content: "<ul><b>Article 25:</b>Freedom of conscience and free profession, practice, and propagation of religion.<br><b>Article 26:</b>Freedom to manage religious affairs.<br><b>Article 27:</b>Freedom as to payment of taxes for promotion of any particular religion.<br><b>Article 28:</b>Freedom as to attendance at religious instruction or religious worship in certain educational institutions.</ul>" },
            { title: "Cultural and Educational Rights (Articles 29-30):", content: "<ul><b>Article 29:</b>Protection of interests of minorities.<br><b>Article 30:</b>Right of minorities to establish and administer educational institutions.</ul>" },
            { title: "Right to Constitutional Remedies (Article 32):", content: "<ul>Provides the right to move the Supreme Court of India for the enforcement of fundamental rights.</ul>" },
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
            { title: "The Indian Penal Code, 1860 (IPC)", content: "The IPC is the main criminal code in India, providing a comprehensive set of laws for the prevention and punishment of criminal offenses.<ul><br><b>Part I: General Principles:</b> Defines general principles of criminal law, such as definitions of crime, punishments, and the classification of offenses.<br><b>Part II: Offenses Against the State:</b> Includes crimes like treason, sedition, and terrorism.<br><b>Part III: Offenses Against the Body:</b> Covers offenses such as assault, murder, and grievous hurt.<br><b>Part IV: Offenses Against Property:</b> Deals with crimes like theft, burglary, and robbery.<br><b>Part V: Offenses Relating to Marriage:</b> Addresses crimes such as bigamy and adultery.<br><b>Part VI: Offenses Relating to Marriage:</b> Includes offenses like cruelty and harassment.<br><b>Part VII: Offenses Affecting the Public Health, Safety, and Morals:  </b> Includes crimes such as public nuisance and obscenity.</ul>"},
            { title: "The Code of Criminal Procedure, 1973 (CrPC)", content:"Provides the procedural framework for the investigation, prosecution, and trial of criminal offenses.<ul><br><b>Investigation:</b> Outlines procedures for the investigation of crimes by the police.<br><b>Arrest and Bail:</b> Defines the process for arresting individuals and granting bail.<br><b>Trial:</b> Details the procedures for conducting trials in various courts, including magistrate courts and sessions courts.<br><b>Appeals and Revisions:</b> Provides mechanisms for appealing against convictions and seeking revisions of court orders.</ul>"},
            {title:"The Narcotic Drugs and Psychotropic Substances Act, 1985",content:"Regulates and controls the operations related to narcotic drugs and psychotropic substances.<ul><br><b>Prohibition:</b> Prohibits the manufacture, sale, and use of narcotic drugs and psychotropic substances except for medical and scientific purposes.<br><b>Punishments:</b> Provides penalties for offenses related to trafficking, possession, and abuse of controlled substances.<br><b>Regulation:</b> Establishes procedures for the regulation of drug use and trafficking.</ul>"},
            { title: "The Protection of Children from Sexual Offences (POCSO) Act, 2012",content:"Provides protection to children from sexual abuse and exploitation.<ul><br><b>Definitions:</b> Defines various forms of sexual abuse, including penetrative and non-penetrative offenses.<br><b>Reporting: Mandates the reporting of sexual offenses against children.</b>Trial: Establishes procedures for the trial of cases involving child victims, including the creation of special courts.<br><b>Support Services:</b> Provides for the support and rehabilitation of child victims.</ul>"},
            {title:"The Juvenile Justice (Care and Protection of Children) Act, 2015",content:"Addresses the care, protection, and rehabilitation of children in conflict with the law and those in need of care.<ul><br><b>Juvenile Justice Boards:</b> Establishes boards for handling cases involving juveniles.<br><b>Care and Protection:</b> Provides for the establishment of child care institutions and adoption processes.<br><b>Rehabilitation:</b> Focuses on the rehabilitation and reintegration of juveniles into society.</ul"},
            {title:"The Domestic Violence Act, 2005",content:"Provides protection to women from domestic violence and abuse.<ul><br><b>Definition of Domestic Violence:</b> Defines various forms of domestic violence, including physical, emotional, sexual, and economic abuse.<br><b>Protection Orders:</b> Allows women to seek protection orders and residence orders.<br><b>Legal Recourse:</b> Provides for legal recourse and support for victims of domestic violence."},
            {title:"The Cyber Crime Laws",content:"<ul><b>Information Technology Act, 2000 (IT Act):</b> Addresses cybercrimes and electronic frauds.<br><b>Cyber Offenses:</b> Includes offenses related to hacking, identity theft, and data breaches.<br><b>Procedures:</b> Provides procedures for investigation and prosecution of cyber crimes.</ul>"},
            {title:"The Explosive Substances Act, 1908",content:"Regulates the manufacture, possession, and use of explosive substances.<ul><b>Regulation:</b> Provides for the regulation of explosives and penalties for unlawful possession and use.<br><b>Licensing:</b> Establishes licensing requirements for handling explosives.</ul>"},
            { title: "<h2>The Arms Act, 1959</h2>", content:"Regulates the possession, manufacture, sale, and transfer of firearms and ammunition.<ul><b>Licensing:</b> Requires individuals to obtain licenses for possessing firearms.<br><b>Regulation:</b> Establishes regulations for the safe and lawful use of firearms.</ul>"},
            {title:"<h2>The Prevention of Corruption Act, 1988</h2>",content:"Addresses corruption among public officials.<ul><b>Offenses:</b> Defines various forms of corruption, including bribery and abuse of power.<br><b>Investigation:</b> Provides procedures for investigating and prosecuting corruption-related offenses.<br><b>Penalties:</b> Prescribes penalties for convicted individuals.</ul>"},
        ],
        healthandsafetyLaws:[
            {title:"<h2>The Environment Protection Act, 1986</h2>",content:"Provides a framework for the protection and improvement of the environment and controls pollution.<ul><b>Regulation:</b> Empowers the central government to set standards for pollution control and establish regulatory bodies like the Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCBs).<br><b>Environmental Standards:</b> Sets standards for air and water quality, noise levels, and other environmental parameters.<br><b>Penalties:</b> Prescribes penalties for non-compliance with environmental standards and regulations.</ul>"},
            {title:"<h2>The Air (Prevention and Control of Pollution) Act, 1981</h2>",content:"Regulates air pollution and establishes measures to control air quality.<ul><b>Air Quality Standards:</b> Provides for the establishment of standards for air quality and emission limits for industries.<br><b>Pollution Control Boards:</b> Establishes the CPCB and SPCBs to monitor and enforce air quality standards.<br><b>Permits:</b> Requires industries to obtain permits for emission of pollutants.</ul>"},
            {title:"<h2>The Water (Prevention and Control of Pollution) Act, 1974</h2>",content:"Addresses water pollution and establishes mechanisms for water quality management.<ul><br><b>Water Quality Standards:</b>Sets standards for the quality of water and establishes guidelines for discharge of pollutants into water bodies.<br><b>Pollution Control:</b>Requires industries and local authorities to implement measures for controlling water pollution.<br><b>Regulatory Bodies:</b>Establishes the CPCB and SPCBs to oversee water pollution control efforts.</ul>"},
            {title:"<h2>The Food Safety and Standards Act, 2006</h2>",content:"Regulates food safety and standards, ensuring the availability of safe and wholesome food.<ul><b>Food Safety Standards:</b>Establishes the Food Safety and Standards Authority of India (FSSAI) to set standards for food safety, labeling, and quality.<br><b>Regulation:</b>Provides for the regulation of food production, processing, distribution, and sale.<br><b>Inspections and Enforcement:</b>Empowers FSSAI to conduct inspections and enforce food safety regulations.</ul>"},
            {title:"<h2>The Drugs and Cosmetics Act, 1940</h2>",content:" Regulates the manufacture, distribution, and sale of drugs and cosmetics to ensure their safety and efficacy.<ul><b>Drug Regulation:</b>Establishes standards for the manufacture, labeling, and testing of drugs and cosmetics.<br><b>Licensing:</b>Requires licenses for the manufacture and sale of drugs and cosmetics.<br><b>Quality Control:</b>Provides mechanisms for ensuring the quality and safety of drugs and cosmetics through inspections and testing.</ul>"},
            {title:"<h2>The National Food Security Act, 2013</h2>",content:"Ensures access to adequate food for people and provides subsidized food grains to the poor.<ul><b>Food Entitlements:</b>Provides for subsidized food grains to eligible households through the Public Distribution System (PDS).<br><b>Nutritional Support:</b>Includes provisions for nutritional support to children, pregnant women, and lactating mothers.<br><b>Implementation:</b>Mandates the establishment of a National Food Security Commission to oversee the implementation of the Act.</ul>"},
            {title:"<h2>The Tobacco Control Laws</h2>",content:"<ul><b>The Cigarettes and Other Tobacco Products Act (COTPA), 2003:</b>Regulates the advertisement, packaging, and sale of tobacco products.<br><b>Advertising Restrictions:</b>Prohibits tobacco advertising and sponsorships.<br><b>Packaging:</b>Requires health warnings on tobacco product packaging.<br><b>Sales Regulations:</b>Restricts sales to minors and regulates the sale of tobacco products in public places.</ul>"},
            {title:"<h2>The National Environmental Policy, 2006</h2>",content:"Provides a framework for environmental conservation and sustainable development.<ul><b>Sustainability:</b>Focuses on integrating environmental considerations into economic and social development policies.<br><b>Pollution Control:</b>Emphasizes the need for pollution control and sustainable use of natural resources.<br><b>Biodiversity:</b>Aims to conserve biodiversity and protect natural ecosystems.</ul>"},
            {title:"<h2>The Right to Information Act, 2005</h2>",content:"Promotes transparency and accountability in public authorities, including those responsible for health and safety.<ul><b>Access to Information:</b>Provides the right to access information held by public authorities, including information related to public health and safety.<br><b>Grievance Redressal:</b>Enables citizens to seek information and address grievances related to public health and safety issues.</ul>"},
            {title:"<h2>The Right The National Health Mission to Information Act, 2005</h2>",content:"Aims to improve healthcare delivery and access across India.<ul><b>Primary Healthcare:</b>Focuses on strengthening primary healthcare systems and improving maternal and child health.<br><b>Disease Control:</b>Includes programs for the control of communicable and non-communicable diseases.<br><b>Health Infrastructure:</b>Aims to improve health infrastructure and human resources for health.</ul>"},
        ]
    },
    hi: {
        fundamentalRights: [
            { title: "समानता का अधिकार (Articles 14-18):", content: "<ul><b>अनुच्छेद 14:</b>कानून के समक्ष समानता।<br><b>अनुच्छेद 15:</b>धर्म, मूलवंश, जाति, लिंग या जन्म स्थान के आधार पर भेदभाव का निषेध।<br><b>अनुच्छेद 16:</b>सार्वजनिक रोजगार के मामलों में अवसर की समानता।<br><b>अनुच्छेद 17:</b>अस्पृश्यता का उन्मूलन।<br><b>अनुच्छेद 18:</b>उपाधियों का उन्मूलन।</ul>" },
            { title: "स्वतंत्रता का अधिकार (अनुच्छेद 19-22):", content: "<ul><b>अनुच्छेद 19:</b>भाषण की स्वतंत्रता आदि से संबंधित कुछ अधिकारों का संरक्षण।<br><b>अनुच्छेद 20:</b>अपराधों के लिए दोषसिद्धि के संबंध में संरक्षण।<br><b>अनुच्छेद 21:</b>जीवन और व्यक्तिगत स्वतंत्रता की सुरक्षा।<br><b>अनुच्छेद 22:</b>कुछ मामलों में गिरफ्तारी और हिरासत के खिलाफ सुरक्षा।/ul>" },
            { title: "शोषण के खिलाफ अधिकार (अनुच्छेद 23-24):", content: "<ul><b>अनुच्छेद 23:</b>मानव तस्करी और जबरन श्रम का निषेध।<br><b>अनुच्छेद 24:</b>कारखानों आदि में बच्चों के रोजगार का निषेध।</ul>" },
            { title: "धर्म की स्वतंत्रता का अधिकार (अनुच्छेद 25-28):", content: "<ul><b>अनुच्छेद 25:</b>अंतरात्मा की स्वतंत्रता और धर्म के स्वतंत्र पेशे, अभ्यास और प्रचार।<br><b>अनुच्छेद 26:</b>धार्मिक मामलों का प्रबंधन करने की स्वतंत्रता।<br><b>अनुच्छेद 27:</b>किसी विशेष धर्म के प्रचार के लिए करों के भुगतान के बारे में स्वतंत्रता।<br><b>अनुच्छेद 28:</b>कुछ शैक्षणिक संस्थानों में धार्मिक शिक्षा या धार्मिक पूजा में भाग लेने की स्वतंत्रता।</ul>" },
            { title: "सांस्कृतिक और शैक्षिक अधिकार (अनुच्छेद 29-30):", content: "<ul><b>अनुच्छेद 29:</b>अल्पसंख्यकों के हितों की सुरक्षा।<br><b>अनुच्छेद 30:</b>अल्पसंख्यकों को शैक्षणिक संस्थान स्थापित करने और उनका प्रशासन करने का अधिकार।</ul>" },
            { title: "संवैधानिक उपचारों का अधिकार (अनुच्छेद 32):", content: "<ul>मौलिक अधिकारों के प्रवर्तन के लिए भारत के सर्वोच्च न्यायालय में जाने का अधिकार प्रदान करता है।</ul>" },
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
        ],
        criminalLaws:[
            { title: "<h2>भारतीय दंड संहिता, 1860 (IPC)</h2>", content: "IPC भारत में मुख्य आपराधिक संहिता है, जो आपराधिक अपराधों की रोकथाम और सजा के लिए कानूनों का एक व्यापक सेट प्रदान करती है। <ul><br><b>भाग I: सामान्य सिद्धांत:</b> आपराधिक कानून के सामान्य सिद्धांतों को परिभाषित करता है, जैसे अपराध की परिभाषा, दंड और अपराधों का वर्गीकरण।<br><b>भाग II: राज्य के खिलाफ अपराध:</b> इसमें देशद्रोह, देशद्रोह और आतंकवाद जैसे अपराध शामिल हैं। <br><b>भाग III: शरीर के खिलाफ अपराध:</b> हमला, हत्या और गंभीर चोट जैसे अपराधों को कवर करता है। <br><b>भाग IV: संपत्ति के खिलाफ अपराध:</b> चोरी, सेंधमारी और डकैती जैसे अपराधों से संबंधित है। <br><b>भाग V: विवाह से संबंधित अपराध:</b> द्विविवाह और व्यभिचार जैसे अपराधों को संबोधित करता है। <br><b>भाग VI: विवाह से संबंधित अपराध:</b> इसमें क्रूरता और उत्पीड़न जैसे अपराध शामिल हैं। <br><b>भाग VII: सार्वजनिक स्वास्थ्य, सुरक्षा और नैतिकता को प्रभावित करने वाले अपराध: </b> इसमें सार्वजनिक उपद्रव और अश्लीलता जैसे अपराध शामिल हैं।</ul>"},
            { title: "<h2>दंड प्रक्रिया संहिता, 1973 (CrPC)</h2>", content:"आपराधिक अपराधों की जांच, अभियोजन और परीक्षण के लिए प्रक्रियात्मक ढांचा प्रदान करता है। <ul><br><b>जांच:</b> पुलिस द्वारा अपराधों की जांच के लिए प्रक्रियाओं की रूपरेखा।<br><b>गिरफ्तारी और जमानत:</b> व्यक्तियों को गिरफ्तार करने और जमानत देने की प्रक्रिया को परिभाषित करता है। <br><b>विचारण:</b> मजिस्ट्रेट अदालतों और सत्र न्यायालयों सहित विभिन्न अदालतों में परीक्षण करने की प्रक्रियाओं का विवरण देता है। <br><b>अपील और संशोधन:</b> दोषसिद्धि के खिलाफ अपील करने और अदालत के आदेशों में संशोधन की मांग करने के लिए तंत्र प्रदान करता है।</ul>"},
            {title:"<h2>स्वापक औषधि और मन:प्रभावी पदार्थ अधिनियम, 1985</h2>",content:"मादक दवाओं और मन:प्रभावी पदार्थों से संबंधित कार्यों को विनियमित और नियंत्रित करता है।<ul><br><b>निषेध:</b> चिकित्सा और वैज्ञानिक उद्देश्यों को छोड़कर मादक दवाओं और मन:प्रभावी पदार्थों के निर्माण, बिक्री और उपयोग पर प्रतिबंध लगाता है।<br><b>दंड:</b> नियंत्रित पदार्थों की तस्करी, कब्जे और दुरुपयोग से संबंधित अपराधों के लिए दंड प्रदान करता है।<br><b>विनियमन:</b> नशीली दवाओं के उपयोग और तस्करी के विनियमन के लिए प्रक्रियाएं स्थापित करता है।</ul>"},
            { title: "<h2>यौन अपराधों से बच्चों का संरक्षण (POCSO) अधिनियम, 2012</h2>",content:"बच्चों को यौन दुर्व्यवहार और शोषण से सुरक्षा प्रदान करता है।<ul><br><b>परिभाषाएँ:</b> यौन दुर्व्यवहार के विभिन्न रूपों को परिभाषित करता है, जिसमें प्रवेशात्मक और गैर-प्रवेशात्मक अपराध शामिल हैं।<br><b>रिपोर्टिंग: बच्चों के खिलाफ यौन अपराधों की रिपोर्टिंग को अनिवार्य बनाता है।</b>परीक्षण: विशेष अदालतों के निर्माण सहित बाल पीड़ितों से जुड़े मामलों के परीक्षण के लिए प्रक्रियाएं स्थापित करता है।<br><b>सहायता सेवाएँ:</b> बाल पीड़ितों के समर्थन और पुनर्वास के लिए प्रावधान करता है।</ul>"},
            {title:"<h2>किशोर न्याय (बच्चों की देखभाल और संरक्षण) अधिनियम, 2015</h2>",content:"कानून के साथ संघर्षरत बच्चों और देखभाल की आवश्यकता वाले बच्चों की देखभाल, सुरक्षा और पुनर्वास को संबोधित करता है।<ul><br><b>किशोर न्याय बोर्ड:</b> किशोरों से जुड़े मामलों को संभालने के लिए बोर्ड स्थापित करता है।<br><b>देखभाल और संरक्षण:</b> बाल देखभाल संस्थानों और गोद लेने की प्रक्रियाओं की स्थापना के लिए प्रावधान करता है।<br><b>पुनर्वास:</b> किशोरों के पुनर्वास और समाज में पुनः एकीकरण पर ध्यान केंद्रित करता है।</ul>"},
            {title:"<h2>घरेलू हिंसा अधिनियम, 2005</h2>",content:"घरेलू हिंसा और दुर्व्यवहार से महिलाओं को सुरक्षा प्रदान करता है।<ul><br><b>घरेलू हिंसा की परिभाषा:</b> शारीरिक, भावनात्मक, यौन और आर्थिक दुर्व्यवहार सहित घरेलू हिंसा के विभिन्न रूपों को परिभाषित करता है।<br><b>संरक्षण आदेश:</b> महिलाओं को सुरक्षा आदेश और निवास आदेश प्राप्त करने की अनुमति देता है।<br><b>कानूनी सहारा:</b> घरेलू हिंसा के पीड़ितों के लिए कानूनी सहारा और सहायता प्रदान करता है।</ul>"},
            {title:"<h2>साइबर अपराध कानून</h2>",content:"<ul><b>सूचना प्रौद्योगिकी अधिनियम, 2000 (आईटी अधिनियम):</b> साइबर अपराधों और इलेक्ट्रॉनिक धोखाधड़ी को संबोधित करता है।<br><b>साइबर अपराध:</b> इसमें हैकिंग, पहचान की चोरी और डेटा उल्लंघन से संबंधित अपराध शामिल हैं।<br><b>प्रक्रियाएँ:</b> साइबर अपराधों की जाँच और अभियोजन के लिए प्रक्रियाएँ प्रदान करता है।</ul>"},
            {title:"<h2>विस्फोटक पदार्थ अधिनियम, 1908</h2>",content:"विस्फोटक पदार्थों के निर्माण, कब्जे और उपयोग को विनियमित करता है।<ul><b>विनियमन:</b> विस्फोटकों के विनियमन और अवैध कब्जे और उपयोग के लिए दंड का प्रावधान करता है।<br><b>लाइसेंसिंग:</b> विस्फोटकों को संभालने के लिए लाइसेंसिंग आवश्यकताओं को स्थापित करता है।</ul>"},
            { title: "<h2>शस्त्र अधिनियम, 1959</h2>", content:"आग्नेयास्त्रों और गोला-बारूद के कब्जे, निर्माण, बिक्री और हस्तांतरण को नियंत्रित करता है।<ul><b>लाइसेंसिंग:</b> व्यक्तियों को आग्नेयास्त्र रखने के लिए लाइसेंस प्राप्त करने की आवश्यकता होती है।<br><b>विनियमन:</b> आग्नेयास्त्रों के सुरक्षित और वैध उपयोग के लिए नियम स्थापित करता है।</ul>"},
            {title:"<h2>भ्रष्टाचार निवारण अधिनियम, 1988</h2>",content:"सार्वजनिक अधिकारियों के बीच भ्रष्टाचार को संबोधित करता है।<ul><b>अपराध:</b> रिश्वतखोरी और सत्ता के दुरुपयोग सहित भ्रष्टाचार के विभिन्न रूपों को परिभाषित करता है।<br><b>जांच:</b> भ्रष्टाचार से संबंधित अपराधों की जांच और मुकदमा चलाने के लिए प्रक्रियाएं प्रदान करता है।<br><b>दंड:</b> दोषी व्यक्तियों के लिए दंड निर्धारित करता है।</ul>"},    
        ],
        healthandsafetyLaws:[
            {title:"<h2>पर्यावरण संरक्षण अधिनियम, 1986",content:"पर्यावरण की सुरक्षा और सुधार के लिए एक रूपरेखा प्रदान करता है और प्रदूषण को नियंत्रित करता है।<ul><b>विनियमन:</b>केंद्र सरकार को प्रदूषण नियंत्रण के लिए मानक निर्धारित करने और केंद्रीय प्रदूषण नियंत्रण बोर्ड (CPCB) और राज्य प्रदूषण नियंत्रण बोर्ड (SPCB) जैसे नियामक निकाय स्थापित करने का अधिकार देता है।<br><b>पर्यावरण मानक:</b>वायु और जल गुणवत्ता, शोर के स्तर और अन्य पर्यावरणीय मापदंडों के लिए मानक निर्धारित करता है।<br><b>दंड:</b>पर्यावरण मानकों और विनियमों का पालन न करने पर दंड निर्धारित करता है।</ul>"},
    {title:"<h2>वायु (प्रदूषण की रोकथाम और नियंत्रण) अधिनियम, 1981",content:"वायु प्रदूषण को नियंत्रित करता है और वायु गुणवत्ता को नियंत्रित करने के उपाय स्थापित करता है।<ul><b>वायु गुणवत्ता मानक:</b>उद्योगों के लिए वायु गुणवत्ता और उत्सर्जन सीमा के लिए मानकों की स्थापना का प्रावधान करता है।<br><b>प्रदूषण नियंत्रण बोर्ड:</b>वायु गुणवत्ता मानकों की निगरानी और उन्हें लागू करने के लिए CPCB और SPCB की स्थापना करता है।<br><b>परमिट:</b>उद्योगों को प्रदूषकों के उत्सर्जन के लिए परमिट प्राप्त करने की आवश्यकता होती है।</ul>"},
    {title:"<h2>जल (प्रदूषण की रोकथाम और नियंत्रण) अधिनियम, 1974",content:"जल प्रदूषण को संबोधित करता है और जल गुणवत्ता प्रबंधन के लिए तंत्र स्थापित करता है।<ul><b>जल गुणवत्ता मानक:</b>जल की गुणवत्ता के लिए मानक निर्धारित करता है और जल निकायों में प्रदूषकों के निर्वहन के लिए दिशानिर्देश स्थापित करता है।<br><b>प्रदूषण नियंत्रण:</b>उद्योगों और स्थानीय अधिकारियों को जल प्रदूषण को नियंत्रित करने के उपायों को लागू करने की आवश्यकता होती है।<br><b>नियामक निकाय:</b>जल प्रदूषण नियंत्रण प्रयासों की देखरेख के लिए CPCB और SPCB की स्थापना करता है।</ul>"},
    {title:"<h2>खाद्य सुरक्षा और मानक अधिनियम, 2006",content:"खाद्य सुरक्षा और मानकों को विनियमित करता है, सुरक्षित और पौष्टिक भोजन की उपलब्धता सुनिश्चित करता है।<ul><b>खाद्य सुरक्षा मानक:</b>खाद्य सुरक्षा, लेबलिंग और गुणवत्ता के लिए मानक निर्धारित करने के लिए भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) की स्थापना करता है।<br><b>विनियमन:</b>खाद्य उत्पादन, प्रसंस्करण, वितरण और बिक्री के विनियमन के लिए प्रावधान करता है।<br><b>निरीक्षण और प्रवर्तन:</b>FSSAI को निरीक्षण करने और खाद्य सुरक्षा विनियमों को लागू करने का अधिकार देता है।</ul>"},
    {title:"<h2>औषधि एवं प्रसाधन सामग्री अधिनियम, 1940",content:"औषधियों एवं प्रसाधन सामग्री की सुरक्षा एवं प्रभावकारिता सुनिश्चित करने के लिए उनके निर्माण, वितरण एवं बिक्री को विनियमित करता है।<ul><b>औषधि विनियमन:</b>औषधियों एवं प्रसाधन सामग्री के निर्माण, लेबलिंग एवं परीक्षण के लिए मानक स्थापित करता है।<br><b>लाइसेंसिंग:</b>औषधियों एवं प्रसाधन सामग्री के निर्माण एवं बिक्री के लिए लाइसेंस की आवश्यकता होती है।<br><b>गुणवत्ता नियंत्रण:</b>निरीक्षण एवं परीक्षण के माध्यम से औषधियों एवं प्रसाधन सामग्री की गुणवत्ता एवं सुरक्षा सुनिश्चित करने के लिए तंत्र प्रदान करता है।</ul>"},
    {title:"<h2>राष्ट्रीय खाद्य सुरक्षा अधिनियम, 2013",content:"लोगों के लिए पर्याप्त भोजन तक पहुँच सुनिश्चित करता है तथा गरीबों को रियायती दर पर खाद्यान्न उपलब्ध कराता है।<ul><b>खाद्य अधिकार:</b>सार्वजनिक वितरण प्रणाली (पीडीएस) के माध्यम से पात्र परिवारों को रियायती दर पर खाद्यान्न उपलब्ध कराता है।<br>पोषण सहायता:</b>इसमें बच्चों, गर्भवती महिलाओं एवं स्तनपान कराने वाली माताओं को पोषण सहायता के प्रावधान शामिल हैं।<br><b>कार्यान्वयन:</b>अधिनियम के कार्यान्वयन की देखरेख के लिए राष्ट्रीय खाद्य सुरक्षा आयोग की स्थापना का आदेश देता है।</ul>"},
    {title:"<h2>तम्बाकू नियंत्रण कानून",content:"<ul><b>सिगरेट और अन्य तम्बाकू उत्पाद अधिनियम (COTPA), 2003:</b>तम्बाकू उत्पादों के विज्ञापन, पैकेजिंग और बिक्री को नियंत्रित करता है।<br><b>विज्ञापन प्रतिबंध:</b>तम्बाकू विज्ञापन और प्रायोजन पर रोक लगाता है।<br><b>पैकेजिंग:</b>तम्बाकू उत्पाद पैकेजिंग पर स्वास्थ्य चेतावनी की आवश्यकता होती है।<br><b>बिक्री विनियम:</b>नाबालिगों को बिक्री प्रतिबंधित करता है और सार्वजनिक स्थानों पर तम्बाकू उत्पादों की बिक्री को नियंत्रित करता है।</ul>"},
    {title:"<h2>राष्ट्रीय पर्यावरण नीति, 2006",content:"पर्यावरण संरक्षण और सतत विकास के लिए एक रूपरेखा प्रदान करता है।<ul><b>स्थायित्व:</b>आर्थिक और सामाजिक विकास नीतियों में पर्यावरणीय विचारों को एकीकृत करने पर ध्यान केंद्रित करता है।<br><b>प्रदूषण नियंत्रण:</b>प्रदूषण नियंत्रण और प्राकृतिक संसाधनों के सतत उपयोग की आवश्यकता पर जोर देता है।<br><b>जैव विविधता:</b>जैव विविधता को संरक्षित करने और प्राकृतिक पारिस्थितिकी तंत्र की रक्षा करने का लक्ष्य रखता है।</ul>"},
    {title:"<h2>सूचना का अधिकार अधिनियम, 2005",content:"स्वास्थ्य और सुरक्षा के लिए जिम्मेदार लोगों सहित सार्वजनिक प्राधिकरणों में पारदर्शिता और जवाबदेही को बढ़ावा देता है।<ul><b>सूचना तक पहुँच:</b>सार्वजनिक स्वास्थ्य और सुरक्षा से संबंधित जानकारी सहित सार्वजनिक प्राधिकरणों द्वारा रखी गई जानकारी तक पहुँचने का अधिकार प्रदान करता है।<br><b>शिकायत निवारण:</b>नागरिकों को सार्वजनिक स्वास्थ्य और सुरक्षा मुद्दों से संबंधित जानकारी प्राप्त करने और शिकायतों का समाधान करने में सक्षम बनाता है।</ul>"},
    {title:"<h2>राष्ट्रीय स्वास्थ्य मिशन",content:"पूरे भारत में स्वास्थ्य सेवा वितरण और पहुँच में सुधार करना।<ul><b>प्राथमिक स्वास्थ्य सेवा:</b>प्राथमिक स्वास्थ्य सेवा प्रणालियों को मजबूत करने और मातृ एवं शिशु स्वास्थ्य में सुधार करने पर ध्यान केंद्रित करता है।<br><b>रोग नियंत्रण:</b>इसमें संचारी और गैर-संचारी रोगों के नियंत्रण के लिए कार्यक्रम शामिल हैं।<br><b>स्वास्थ्य अवसंरचना:</b>इसका उद्देश्य स्वास्थ्य के लिए स्वास्थ्य अवसंरचना और मानव संसाधनों में सुधार करना है।</ul>"},
        ]
    },
    gu: {
        fundamentalRights: [
            { title: "સમાનતાનો અધિકાર (લેખ 14-18):", content: "<ul><b>કલમ 14:</b>કાયદા સમક્ષ સમાનતા.<br><b>કલમ 15:</b>ધર્મ, જાતિ, જાતિ, લિંગ અથવા જન્મ સ્થળના આધારે ભેદભાવ પર પ્રતિબંધ. <br><b>કલમ 16:</b>જાહેર રોજગારની બાબતોમાં તકની સમાનતા.<br><b>કલમ 17:</b>અસ્પૃશ્યતા નાબૂદી.<br><b>કલમ 18:</b>શીર્ષકો નાબૂદ.</ul>" },
            { title: "સ્વતંત્રતાનો અધિકાર (લેખ 19-22):", content: "<ul><b>કલમ 19:</b>ભાષણની સ્વતંત્રતા વગેરે સંબંધિત અમુક અધિકારોનું રક્ષણ.<br><b>કલમ 20:</b>ગુનાઓ માટે દોષિત ઠરાવવાના સંદર્ભમાં રક્ષણ.<br><b >કલમ 21:</b>જીવન અને વ્યક્તિગત સ્વતંત્રતાનું રક્ષણ.<br><b>કલમ 22:</b>અમુક કેસોમાં ધરપકડ અને અટકાયત સામે રક્ષણ.</ul>" },
            { title: "શોષણ સામે અધિકાર (કલમ 23-24):", content: "<ul><b>કલમ 23:</b>મનુષ્યમાં વાહનવ્યવહાર અને બળજબરીથી મજૂરી પર પ્રતિબંધ.<br><b>કલમ 24:</b>ફેક્ટરી વગેરેમાં બાળકોના રોજગાર પર પ્રતિબંધ.</ul>" },
            { title: "ધર્મની સ્વતંત્રતાનો અધિકાર (લેખ 25-28):", content: "<ul><b>કલમ 25:</b>અંતઃકરણની સ્વતંત્રતા અને મુક્ત વ્યવસાય, અભ્યાસ અને ધર્મનો પ્રચાર.<br><b>કલમ 26:</b>ધાર્મિક બાબતોનું સંચાલન કરવાની સ્વતંત્રતા.<br><b> b>કલમ 27:</b>કોઈ ચોક્કસ ધર્મના પ્રચાર માટે કર ચૂકવવાની સ્વતંત્રતા.<br><b>કલમ 28:</b>ચોક્કસ શૈક્ષણિક સંસ્થાઓમાં ધાર્મિક સૂચનાઓ અથવા ધાર્મિક પૂજામાં હાજરી આપવાની સ્વતંત્રતા. </ul>" },
            { title: "સાંસ્કૃતિક અને શૈક્ષણિક અધિકારો (લેખ 29-30):", content: "<ul><b>કલમ 29:</b>લઘુમતીઓના હિતોનું રક્ષણ.<br><b>કલમ 30:</b>શૈક્ષણિક સંસ્થાઓની સ્થાપના અને વહીવટ કરવાનો લઘુમતીઓનો અધિકાર.</ul>" },
            { title: "બંધારણીય ઉપાયોનો અધિકાર (કલમ 32):", content: "<ul>મૂળભૂત અધિકારોના અમલ માટે ભારતની સર્વોચ્ચ અદાલતમાં જવાનો અધિકાર પૂરો પાડે છે.</ul>" },
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
        ],
        criminalLaws: [
            { title: "<h2>ભારતીય દંડ સંહિતા, 1860 (IPC)</h2>", content: "IPC એ ભારતમાં મુખ્ય ફોજદારી સંહિતા છે, જે ફોજદારી ગુનાઓના નિવારણ અને સજા માટે કાયદાઓનો વ્યાપક સમૂહ પ્રદાન કરે છે.<ul><br><b>ભાગ I: સામાન્ય સિદ્ધાંતો:</b> ફોજદારી કાયદાના સામાન્ય સિદ્ધાંતોને વ્યાખ્યાયિત કરે છે , જેમ કે ગુનાની વ્યાખ્યાઓ, સજાઓ અને ગુનાઓનું વર્ગીકરણ.<br><b>ભાગ II: રાજ્ય સામેના ગુનાઓ:</b> રાજદ્રોહ, રાજદ્રોહ અને આતંકવાદ જેવા ગુનાઓનો સમાવેશ થાય છે.<br><b>ભાગ III: શરીર વિરુદ્ધના ગુનાઓ:</b> હુમલા, હત્યા અને ગંભીર ઈજા જેવા અપરાધોને આવરી લે છે.<br><b>ભાગ IV: મિલકત વિરુદ્ધના ગુનાઓ:</b> ચોરી, ઘરફોડ ચોરી અને લૂંટ જેવા ગુનાઓ સાથે વ્યવહાર કરે છે .<br><b>ભાગ V: લગ્નને લગતા ગુનાઓ:</b> લગ્નને લગતા અપરાધોને સંબોધિત કરે છે જેમ કે લગ્ન અને વ્યભિચાર.<br><b>ભાગ VI: લગ્નને લગતા ગુનાઓ:</b> ક્રૂરતા જેવા ગુનાઓ અને પજવણી.<br><b>ભાગ VII: જાહેર આરોગ્ય, સલામતી અને નૈતિકતાને અસર કરતા ગુનાઓ: </b> જાહેર ઉપદ્રવ અને અશ્લીલતા જેવા ગુનાઓનો સમાવેશ થાય છે.</ul>"},
            { title: "<h2>ફોજદારી કાર્યવાહીની સંહિતા, 1973 (CrPC)</h2>", content:"ફોજદારી ગુનાઓની તપાસ, કાર્યવાહી અને અજમાયશ માટે પ્રક્રિયાગત માળખું પૂરું પાડે છે.<ul><br><b>તપાસ:</b> પોલીસ દ્વારા ગુનાઓની તપાસ માટેની કાર્યવાહીની રૂપરેખા આપે છે.<br><b>ધરપકડ અને જામીન:</b> વ્યક્તિઓની ધરપકડ કરવા અને જામીન આપવા માટેની પ્રક્રિયાને વ્યાખ્યાયિત કરે છે.<br><b>ટ્રાયલ:</b> મેજિસ્ટ્રેટ કોર્ટ અને સેશન્સ કોર્ટ સહિત વિવિધ અદાલતોમાં ટ્રાયલ ચલાવવા માટેની પ્રક્રિયાઓની વિગતો.<br><b >અપીલ અને રિવિઝન:</b> દોષિત ઠરાવ સામે અપીલ કરવા અને કોર્ટના આદેશોમાં સુધારો કરવા માટેની પદ્ધતિઓ પ્રદાન કરે છે.</ul>"},
            {title:"નશીલા દ્રવ્યો અને મન અસરકારક પદાર્થ ધારો, 1985",content:"માદક દ્રવ્યો અને સાયકોટ્રોપિક પદાર્થો સંબંધિત કામગીરીને નિયંત્રિત અને નિયંત્રિત કરે છે.<ul><br><b>પ્રતિબંધ:</b> તબીબી અને વૈજ્ઞાનિક હેતુઓ સિવાય માદક દ્રવ્યો અને સાયકોટ્રોપિક પદાર્થોના ઉત્પાદન, વેચાણ અને ઉપયોગને પ્રતિબંધિત કરે છે.< br><b>સજાઓ:</b> નિયંત્રિત પદાર્થોની હેરફેર, કબજો અને દુરુપયોગથી સંબંધિત ગુનાઓ માટે દંડની જોગવાઈ કરે છે.<br><b>નિયમન:</b> ડ્રગના ઉપયોગ અને હેરફેરના નિયમન માટે પ્રક્રિયાઓ સ્થાપિત કરે છે. </ul>"},
            { title: "જાતીય ગુનાઓથી બાળકોનું રક્ષણ ધારો",content:"બાળકોને લૈંગિક દુર્વ્યવહાર અને શોષણથી રક્ષણ પૂરું પાડે છે.<ul><br><b>વ્યાખ્યાઓ:</b> જાતીય દુર્વ્યવહારના વિવિધ સ્વરૂપોને વ્યાખ્યાયિત કરે છે, જેમાં પેનિટ્રેટિવ અને નોન-પેનિટ્રેટિવ અપરાધોનો સમાવેશ થાય છે.<br><b>રિપોર્ટિંગ: ફરજિયાત બાળકો સામેના જાતીય અપરાધોની જાણ કરવી.</b>ટ્રાયલ: ખાસ અદાલતોની રચના સહિત બાળ પીડિતો સાથે સંકળાયેલા કેસોની સુનાવણી માટેની પ્રક્રિયાઓ સ્થાપિત કરે છે.<br><b>સહાય સેવાઓ:</b> સહાય અને પુનર્વસન માટે પ્રદાન કરે છે બાળ પીડિતોની.</ul>"},
            {title:"કિશોર ન્યાય(બાળકોની સંભાળ અને રક્ષણ) અધિનિયમ, 2015",content:"કાયદાના વિરોધમાં અને કાળજીની જરૂર હોય તેવા બાળકોની સંભાળ, સંરક્ષણ અને પુનર્વસનને સંબોધિત કરે છે.<ul><br><b>જુવેનાઇલ જસ્ટિસ બોર્ડ્સ:</b> કિશોરોને સંડોવતા કેસોના સંચાલન માટે બોર્ડની સ્થાપના કરે છે.<br> <b>સંભાળ અને સંરક્ષણ:</b> બાળ સંભાળ સંસ્થાઓ અને દત્તક લેવાની પ્રક્રિયાઓની સ્થાપના માટે પ્રદાન કરે છે.<br><b>પુનઃવસન:</b> સમાજમાં કિશોરોના પુનર્વસન અને પુનઃ એકીકરણ પર ધ્યાન કેન્દ્રિત કરે છે.</ul>"},
            {title:"<h2>ઘરેલુ હિંસા અધિનિયમ, 2005</h2>",content:"મહિલાઓને ઘરેલું હિંસા અને દુર્વ્યવહારથી રક્ષણ પૂરું પાડે છે.<ul><br><b>ઘરેલું હિંસાની વ્યાખ્યા:</b> શારીરિક, ભાવનાત્મક, જાતીય અને આર્થિક દુર્વ્યવહાર સહિત ઘરેલું હિંસાના વિવિધ સ્વરૂપોને વ્યાખ્યાયિત કરે છે.<br><b>પ્રોટેક્શન ઓર્ડર્સ:</b> મહિલાઓને પ્રોટેક્શન ઓર્ડર્સ અને રેસિડન્સ ઓર્ડર્સ મેળવવાની મંજૂરી આપે છે.<br><b>કાનૂની આશ્રય:</b> ઘરેલું હિંસાનો ભોગ બનેલી મહિલાઓ માટે કાનૂની આશ્રય અને સમર્થન પૂરું પાડે છે.</ul>"},
            {title:"<h2>સાયબર ક્રાઇમ કાયદા</h2>",content:"<ul><b>ઈન્ફોર્મેશન ટેક્નોલોજી એક્ટ, 2000 (આઈટી એક્ટ):</b> સાયબર ક્રાઈમ્સ અને ઈલેક્ટ્રોનિક છેતરપિંડીઓને સંબોધિત કરે છે.<br><b>સાયબર ગુનાઓ:</b> હેકિંગ, ઓળખની ચોરી અને ડેટા સંબંધિત ગુનાઓનો સમાવેશ કરે છે ભંગ.<br><b>પ્રક્રિયાઓ:</b> સાયબર ગુનાઓની તપાસ અને કાર્યવાહી માટે કાર્યવાહી પૂરી પાડે છે.</ul>"},
            {title:"<h2>વિસ્ફોટક પદાર્થ અધિનિયમ, 1908</h2>",content:"વિસ્ફોટક પદાર્થોના ઉત્પાદન, કબજા અને ઉપયોગને નિયંત્રિત કરે છે.<ul><b>નિયમન:</b> વિસ્ફોટકોના નિયમન અને ગેરકાયદેસર કબજા અને ઉપયોગ માટે દંડની જોગવાઈ કરે છે.<br><b>લાઈસન્સિંગ:</b> વિસ્ફોટકોને હેન્ડલ કરવા માટે લાયસન્સની આવશ્યકતાઓ સ્થાપિત કરે છે.</ul>"},
            { title: "<h2>શસ્ત્ર અધિનિયમ,1959</h2>", content:"હથિયારો અને દારૂગોળાના કબજા, ઉત્પાદન, વેચાણ અને ટ્રાન્સફરનું નિયમન કરે છે.<ul><b>લાઈસન્સિંગ:</b> વ્યક્તિઓને હથિયાર રાખવા માટે લાઇસન્સ મેળવવાની જરૂર છે.<br><b>નિયમન:</b> નિયમો સ્થાપિત કરે છે હથિયારોના સલામત અને કાયદેસર ઉપયોગ માટે.</ul>"},
            {title:"<h2>ભ્રષ્ટાચાર નિવારણ અધિનિયમ, 1988</h2>",content:"જાહેર અધિકારીઓમાં ભ્રષ્ટાચારને સંબોધિત કરે છે.<ul><b>ગુનાઓ:</b> લાંચ અને સત્તાના દુરુપયોગ સહિત ભ્રષ્ટાચારના વિવિધ સ્વરૂપોને વ્યાખ્યાયિત કરે છે.<br><b>તપાસ:</b> ભ્રષ્ટાચારની તપાસ અને કાર્યવાહી કરવા માટેની કાર્યવાહી પૂરી પાડે છે -સંબંધિત ગુનાઓ.<br><b>દંડ:</b> દોષિત વ્યક્તિઓ માટે દંડ નક્કી કરે છે.</ul>"},
        ],
        healthandsafetyLaws:[
            {title:"<h2>પર્યાવરણ સંરક્ષણ અધિનિયમ, 1986",content:"પર્યાવરણના રક્ષણ અને સુધારણા માટે એક માળખું પૂરું પાડે છે અને પ્રદૂષણને નિયંત્રિત કરે છે.<ul><b>નિયમન:</b>કેન્દ્ર સરકારને પ્રદૂષણ નિયંત્રણ માટે ધોરણો નક્કી કરવા અને કેન્દ્રીય પ્રદૂષણ નિયંત્રણ બોર્ડ (CPCB) અને રાજ્ય પ્રદૂષણ નિયંત્રણ બોર્ડ (SPCBs) જેવી નિયમનકારી સંસ્થાઓની સ્થાપના કરવાની સત્તા આપે છે.<br><b>પર્યાવરણીય ધોરણો:</b>હવા અને પાણીની ગુણવત્તા, અવાજનું સ્તર અને અન્ય પર્યાવરણીય પરિમાણો માટેના ધોરણો સેટ કરે છે.<br><b>દંડ:</b>પર્યાવરણીય ધોરણો અને નિયમોનું પાલન ન કરવા બદલ દંડ નક્કી કરે છે.</ul>"},
            {title:"<h2>હવા (પ્રદૂષણ નિવારણ અને નિયંત્રણ) અધિનિયમ, 1981",content:"વાયુ પ્રદૂષણનું નિયમન કરે છે અને હવાની ગુણવત્તાને નિયંત્રિત કરવાનાં પગલાં સ્થાપિત કરે છે.<ul><b>હવા ગુણવત્તા ધોરણો:</b>ઉદ્યોગો માટે હવાની ગુણવત્તા અને ઉત્સર્જન મર્યાદા માટેના ધોરણોની સ્થાપના માટે પ્રદાન કરે છે.<br><b>પ્રદૂષણ નિયંત્રણ બોર્ડ:</b>હવાની ગુણવત્તાના ધોરણોનું નિરીક્ષણ કરવા અને અમલ કરવા માટે CPCB અને SPCB ની સ્થાપના કરે છે.<br><b>પરમિટ:</b>ઉદ્યોગોને પ્રદૂષકોના ઉત્સર્જન માટે પરમિટ મેળવવાની જરૂર છે.</ul>"},
            {title:"<h2>પાણી (પ્રદૂષણ નિવારણ અને નિયંત્રણ) અધિનિયમ, 1974",content:"જળ પ્રદૂષણને સંબોધિત કરે છે અને પાણીની ગુણવત્તા વ્યવસ્થાપન માટેની પદ્ધતિઓ સ્થાપિત કરે છે.<ul><b>પાણીની ગુણવત્તાના ધોરણો:</b>પાણીની ગુણવત્તા માટે ધોરણો નિર્ધારિત કરે છે અને પ્રદૂષકોને જળ સંસ્થાઓમાં છોડવા માટેની માર્ગદર્શિકા સ્થાપિત કરે છે.<br><b>પ્રદૂષણ નિયંત્રણ:</b>ઉદ્યોગો અને સ્થાનિક સત્તાવાળાઓને પાણીના પ્રદૂષણને નિયંત્રિત કરવાનાં પગલાં અમલમાં મૂકવાની જરૂર છે.<br><b>નિયમનકારી સંસ્થાઓ:</b>જળ પ્રદૂષણ નિયંત્રણ પ્રયાસોની દેખરેખ રાખવા માટે CPCB અને SPCB ની સ્થાપના કરે છે.</ul>"},
            {title:"<h2>ખાદ્ય સુરક્ષા અને ધોરણ અધિનિયમ,2006",content:"સલામત અને આરોગ્યપ્રદ ખોરાકની ઉપલબ્ધતાને સુનિશ્ચિત કરીને ખાદ્ય સુરક્ષા અને ધોરણોનું નિયમન કરે છે.<ul><b>ખાદ્ય સુરક્ષા ધોરણો:</b>ફૂડ સેફ્ટી એન્ડ સ્ટાન્ડર્ડ્સ ઓથોરિટી ઑફ ઈન્ડિયા (FSSAI) ની સ્થાપના ખાદ્ય સુરક્ષા, લેબલિંગ અને ગુણવત્તા માટેના ધોરણો નક્કી કરે છે.<br><b>નિયમન:</b>ખાદ્ય ઉત્પાદન, પ્રક્રિયા, વિતરણ અને વેચાણના નિયમન માટે પ્રદાન કરે છે.<br><b>નિરીક્ષણો અને અમલીકરણ:</b>FSSAI ને નિરીક્ષણો હાથ ધરવા અને ખાદ્ય સુરક્ષા નિયમો લાગુ કરવાની સત્તા આપે છે.</ul>"},
            {title:"<h2>દવાઓ અને સૌંદર્ય પ્રસાધન અધિનિયમ,1940",content:"દવાઓ અને સૌંદર્ય પ્રસાધનોની સલામતી અને અસરકારકતાને સુનિશ્ચિત કરવા માટે ઉત્પાદન, વિતરણ અને વેચાણનું નિયમન કરે છે.<ul><b>દવા નિયમન:</b>દવાઓ અને સૌંદર્ય પ્રસાધનોના ઉત્પાદન, લેબલિંગ અને પરીક્ષણ માટેના ધોરણો સ્થાપિત કરે છે.<br><b>લાઇસન્સિંગ:</b>દવાઓ અને સૌંદર્ય પ્રસાધનોના ઉત્પાદન અને વેચાણ માટે લાયસન્સ જરૂરી છે.<br><b>ગુણવત્તા નિયંત્રણ:</b>તપાસ અને પરીક્ષણ દ્વારા દવાઓ અને સૌંદર્ય પ્રસાધનોની ગુણવત્તા અને સલામતી સુનિશ્ચિત કરવા માટેની પદ્ધતિઓ પ્રદાન કરે છે.</ul>"},
            {title:"<h2>રાષ્ટ્રીય ખાદ્ય સુરક્ષા અધિનિયમ, 2013",content:"લોકો માટે પર્યાપ્ત ખોરાકની સુલભતા સુનિશ્ચિત કરે છે અને ગરીબોને સબસિડીવાળા અનાજ પૂરું પાડે છે.<ul><b>ખાદ્યપદાર્થો:</b>પબ્લિક ડિસ્ટ્રિબ્યુશન સિસ્ટમ (PDS) દ્વારા પાત્રતા ધરાવતા પરિવારોને સબસિડીવાળા ખાદ્યપદાર્થો પૂરા પાડે છે.<br><b>પોષણ સહાય:</b>બાળકો, સગર્ભા સ્ત્રીઓ અને સ્તનપાન કરાવતી માતાઓને પોષક સહાય માટેની જોગવાઈઓનો સમાવેશ થાય છે.<br><b>અમલીકરણ:</b>અધિનિયમના અમલીકરણ પર દેખરેખ રાખવા માટે રાષ્ટ્રીય ખાદ્ય સુરક્ષા આયોગની સ્થાપના કરવાનો આદેશ આપે છે.</ul>"},
            {title:"<h2>તમાકુ નિયંત્રણ કાયદા",content:"<ul><b>સિગારેટ અને અન્ય તમાકુ ઉત્પાદનો અધિનિયમ (COTPA), 2003:</b>તમાકુ ઉત્પાદનોની જાહેરાત, પેકેજિંગ અને વેચાણનું નિયમન કરે છે.<br><b>જાહેરાત પ્રતિબંધો:</b>તમાકુની જાહેરાતો અને પ્રાયોજકોને પ્રતિબંધિત કરે છે.<br><b>પેકેજિંગ:</b>તમાકુ ઉત્પાદન પેકેજિંગ પર આરોગ્ય ચેતવણીઓ જરૂરી છે.<br><b>વેચાણના નિયમો:</b>સગીરો માટે વેચાણને પ્રતિબંધિત કરે છે અને જાહેર સ્થળોએ તમાકુ ઉત્પાદનોના વેચાણને નિયંત્રિત કરે છે.</ul>"},
            {title:"<h2>રાષ્ટ્રીય પર્યાવરણ નીતિ, 2006",content:"પર્યાવરણીય સંરક્ષણ અને ટકાઉ વિકાસ માટે માળખું પૂરું પાડે છે.<ul><b>ટકાઉપણું:</b>આર્થિક અને સામાજિક વિકાસ નીતિઓમાં પર્યાવરણીય વિચારણાઓને એકીકૃત કરવા પર ધ્યાન કેન્દ્રિત કરે છે.<br><b>પ્રદૂષણ નિયંત્રણ:</b>પ્રદૂષણ નિયંત્રણ અને કુદરતી સંસાધનોના ટકાઉ ઉપયોગની જરૂરિયાત પર ભાર મૂકે છે.<br><b>જૈવવિવિધતા:</b>જૈવવિવિધતાને બચાવવા અને કુદરતી ઇકોસિસ્ટમનું રક્ષણ કરવાનો હેતુ છે.</ul>"},
            {title:"<h2>માહિતી અધિકાર અધિનિયમ, 2005",content:"આરોગ્ય અને સલામતી માટે જવાબદાર અધિકારીઓ સહિત જાહેર સત્તાવાળાઓમાં પારદર્શિતા અને જવાબદારીને પ્રોત્સાહન આપે છે.<ul><b>માહિતીની ઍક્સેસ:</b>જાહેર આરોગ્ય અને સલામતી સંબંધિત માહિતી સહિત, જાહેર સત્તાવાળાઓ દ્વારા રાખવામાં આવેલી માહિતીને ઍક્સેસ કરવાનો અધિકાર પ્રદાન કરે છે.<br><b>ફરિયાદ નિવારણ:</b>નાગરિકોને માહિતી મેળવવા અને જાહેર આરોગ્ય અને સલામતી સંબંધિત સમસ્યાઓનું નિરાકરણ લાવવા સક્ષમ બનાવે છે.</ul>"},
            {title:"<h2>રાષ્ટ્રીય આરોગ્ય મિશન",content:"સમગ્ર ભારતમાં હેલ્થકેર ડિલિવરી અને એક્સેસ સુધારવાનો હેતુ છે.<ul><b>પ્રાથમિક આરોગ્યસંભાળ:</b>પ્રાથમિક આરોગ્યસંભાળ પ્રણાલીને મજબૂત કરવા અને માતા અને બાળકના સ્વાસ્થ્યને સુધારવા પર ધ્યાન કેન્દ્રિત કરે છે.<br><b>રોગ નિયંત્રણ:</b>ચેપી અને બિન-ચેપી રોગોના નિયંત્રણ માટેના કાર્યક્રમોનો સમાવેશ થાય છે.<br><b>આરોગ્ય આધાર-માળખું:</b>સ્વાસ્થ્ય માટે ઈન્ફ્રાસ્ટ્રક્ચર અને માનવ સંસાધનોને સુધારવાનો હેતુ છે.</ul>"},
        ]
    },
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
    }else if (criteria === 'healthandsafety') {
        contentData = laws[language].healthandsafetyLaws;
        headerText = translations[language].healthandsafetyLaws;
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
    criteriaOptions[5].textContent=translations[language].healthandsafetyLaws;
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
