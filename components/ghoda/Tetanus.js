export default function Tetanus() {
  return (
    <>
      {/* भाग १ - बीमारी की जानकारी */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            टिटनस (धनुर्वात/लॉकजॉ) - घोड़ा
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                टिटनस एक गंभीर और अक्सर जानलेवा बैक्टीरियल रोग है जो क्लोस्ट्रिडियम टिटैनी बैक्टीरिया द्वारा उत्पन्न विष (टॉक्सिन) के कारण होता है। घोड़े इस बीमारी के प्रति अत्यधिक संवेदनशील होते हैं। यह तंत्रिका तंत्र को प्रभावित करता है और मांसपेशियों में गंभीर अकड़न और ऐंठन पैदा करता है। इसे "लॉकजॉ" भी कहते हैं क्योंकि जबड़े की मांसपेशियां सख्त हो जाती हैं।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>जबड़े की मांसपेशियों में अकड़न (लॉकजॉ) - खाना-पीना मुश्किल</li>
                <li>तीसरी पलक (निक्टिटेटिंग मेम्ब्रेन) का बाहर निकलना</li>
                <li>कान सीधे और पीछे की ओर खड़े रहना</li>
                <li>नथुने फैले रहना और सांस लेने में कठिनाई</li>
                <li>पूरे शरीर की मांसपेशियों में अकड़न</li>
                <li>पैर सीधे और कड़े होना (सॉहॉर्स स्टांस)</li>
                <li>पूंछ सख्त और ऊपर उठी रहना</li>
                <li>चलने में कठिनाई, लकड़ी जैसी चाल</li>
                <li>आवाज या छूने पर ऐंठन और तेज प्रतिक्रिया</li>
                <li>खड़े होने में कठिनाई, गिरने का खतरा</li>
                <li>निगलने में समस्या, लार टपकना</li>
                <li>पसीना आना और बेचैनी</li>
                <li>बाद में लेटना और उठ न पाना</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">कारण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>क्लोस्ट्रिडियम टिटैनी बैक्टीरिया के बीजाणु (स्पोर्स)</li>
                <li>मिट्टी, धूल, और खाद में बीजाणु मौजूद रहते हैं</li>
                <li>घावों के माध्यम से शरीर में प्रवेश (खासकर गहरे घाव)</li>
                <li>तार की बाड़ से चोट, काँटे चुभना</li>
                <li>सर्जरी या कैस्ट्रेशन के बाद</li>
                <li>नाल ठोकने के दौरान घाव</li>
                <li>प्रसव के बाद संक्रमण (नाभि या गर्भाशय)</li>
                <li>कोई भी पंचर घाव जिसमें ऑक्सीजन न पहुंचे</li>
                <li>टीकाकरण न होना</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>लक्षणों की पहचान (लॉकजॉ, तीसरी पलक, अकड़न)</li>
                <li>घाव का इतिहास (हाल में कोई चोट या सर्जरी)</li>
                <li>टीकाकरण का इतिहास जांचना</li>
                <li>शरीर और पैरों की अकड़न की जांच</li>
                <li>आवाज या छूने पर प्रतिक्रिया देखना</li>
                <li>कोई विशेष लैब टेस्ट नहीं - नैदानिक लक्षण ही पुष्टि करते हैं</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* भाग २ - उपचार और बचाव */}
      <div className="bg-zinc-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            उपचार और बचाव
          </h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-zinc-800 font-semibold">
                ⚠️ महत्वपूर्ण: टिटनस एक जानलेवा आपातकालीन स्थिति है। तुरंत पशु चिकित्सक को बुलाएं। बिना इलाज मृत्यु दर 80% से अधिक है। जल्दी इलाज से बचने की संभावना बढ़ती है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">दवाइयाँ और इलाज:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. टिटनस एंटीटॉक्सिन (सबसे महत्वपूर्ण):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>टिटनस एंटीटॉक्सिन (TAT)</strong> - 10,000-100,000 IU, IV या IM</li>
                    <li>जितनी जल्दी दिया जाए उतना बेहतर</li>
                    <li>यह पहले से बने विष को बेअसर करता है</li>
                    <li>हर 1-2 दिन में दोहरा सकते हैं</li>
                    <li>कुछ हिस्सा स्पाइनल (रीढ़ में) भी दिया जा सकता है</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. एंटीबायोटिक्स (बैक्टीरिया को मारने के लिए):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>पेनिसिलिन जी</strong> - 44,000-88,000 IU/kg, IV, हर 6 घंटे</li>
                    <li><strong>मेट्रोनिडाजोल</strong> - 15-25 mg/kg, IV या मुंह से, हर 8-12 घंटे</li>
                    <li>कम से कम 7-10 दिन तक देना जरूरी</li>
                    <li>बैक्टीरिया को बढ़ने से रोकता है</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. मांसपेशियों को आराम देने वाली दवाएं:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>डायजेपाम (वैलियम)</strong> - 0.05-0.4 mg/kg, IV, हर 4-6 घंटे</li>
                    <li><strong>मिडाजोलम</strong> - 0.02-0.1 mg/kg, IV</li>
                    <li><strong>मेथोकार्बामोल</strong> - 15-25 mg/kg, IV, धीरे-धीरे</li>
                    <li><strong>गुएफेनेसिन</strong> - 50-100 mg/kg, IV (निरंतर ड्रिप)</li>
                    <li>ऐंठन और अकड़न कम करने के लिए</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. शांत करने वाली दवाएं:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>एसेप्रोमैज़ीन</strong> - 0.02-0.05 mg/kg, IM, हर 6-8 घंटे</li>
                    <li><strong>डेटोमिडीन</strong> - 0.005-0.02 mg/kg, IV</li>
                    <li><strong>ज़ाइलाज़ीन</strong> - 0.5-1.0 mg/kg, IV</li>
                    <li>घोड़े को शांत रखने और तनाव कम करने के लिए</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">५. घाव की देखभाल:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>घाव को खोलें और साफ करें (डेब्राइडमेंट)</li>
                    <li>हाइड्रोजन पेरोक्साइड से धोएं (ऑक्सीजन पहुंचाने के लिए)</li>
                    <li>बीटाडीन या क्लोरहेक्सिडिन से सफाई</li>
                    <li>घाव को खुला रखें ताकि हवा पहुंचे</li>
                    <li>रोज ड्रेसिंग करें</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">६. सहायक चिकित्सा:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>IV फ्लूइड थेरेपी</strong> - हाइड्रेशन बनाए रखने के लिए</li>
                    <li><strong>पोषण समर्थन</strong> - नासोगैस्ट्रिक ट्यूब से तरल आहार</li>
                    <li><strong>मूत्राशय की देखभाल</strong> - कैथेटर से मूत्र निकालना</li>
                    <li><strong>एनीमा</strong> - मल निकालने के लिए</li>
                    <li>इलेक्ट्रोलाइट संतुलन बनाए रखना</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">७. पर्यावरणीय प्रबंधन:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>अंधेरा, शांत, और ध्वनि-रहित वातावरण</li>
                    <li>नरम, गहरी बेडिंग (रेत या रबर मैट)</li>
                    <li>न्यूनतम हैंडलिंग और उत्तेजना</li>
                    <li>गद्देदार दीवारें (चोट से बचाव के लिए)</li>
                    <li>स्लिंग या हार्नेस (अगर खड़ा नहीं हो पा रहा)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">८. टीकाकरण (बीमारी के दौरान भी):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>टिटनस टॉक्सॉयड</strong> - सक्रिय प्रतिरक्षा के लिए</li>
                    <li>उपचार के दौरान अलग जगह पर लगाएं</li>
                    <li>भविष्य में सुरक्षा के लिए</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">नर्सिंग केयर (अत्यंत महत्वपूर्ण):</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>24/7 निगरानी और देखभाल जरूरी</li>
                <li>हर 2-3 घंटे में करवट बदलवाएं (लेटा हुआ हो तो)</li>
                <li>त्वचा को साफ और सूखा रखें (बेडसोर से बचाव)</li>
                <li>आंखों में ल्यूब्रिकेंट लगाएं (सूखने से बचाव)</li>
                <li>शांत वातावरण बनाए रखें - कम रोशनी, कम शोर</li>
                <li>तनाव कम करें - कम हैंडलिंग</li>
                <li>धैर्य रखें - ठीक होने में 3-6 सप्ताह या अधिक लग सकते हैं</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव के उपाय:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>नियमित टीकाकरण (सबसे महत्वपूर्ण):</strong></li>
                <li>प्रथम टीका - 4-6 महीने की उम्र में</li>
                <li>दूसरा टीका - 4-6 सप्ताह बाद</li>
                <li>तीसरा टीका - 6-12 महीने बाद</li>
                <li>बूस्टर डोज - हर साल या हर 2 साल में</li>
                <li>गर्भवती घोड़ी - प्रसव से 4-6 सप्ताह पहले बूस्टर</li>
                <li><strong>घाव की देखभाल:</strong></li>
                <li>किसी भी घाव को तुरंत साफ करें</li>
                <li>गहरे या गंदे घाव पर टिटनस एंटीटॉक्सिन दें (अगर टीका नहीं)</li>
                <li>सर्जरी से पहले टीकाकरण की स्थिति जांचें</li>
                <li><strong>सामान्य सावधानियां:</strong></li>
                <li>तार की बाड़ और नुकीली चीजों से बचाएं</li>
                <li>नाल ठोकते समय सावधानी</li>
                <li>बच्चों की नाभि की उचित देखभाल</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> टिटनस 100% रोकथाम योग्य बीमारी है - नियमित टीकाकरण से। लेकिन एक बार हो जाए तो बहुत गंभीर है। मृत्यु दर 50-80% है। जल्दी पहचान और आक्रामक उपचार से बचने की संभावना बढ़ती है। पूरी तरह ठीक होने में महीनों लग सकते हैं।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}