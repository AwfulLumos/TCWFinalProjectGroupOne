// Marv, mag inline component nalang tayo di ko kasi magawang component based wala kasi tayong framework
const factsData = {
  location: {
    icon: "📍",
    title: "Location",
    shortText: "East Asia, Pacific Ocean",
    details:
      "Japan is an island nation strategically located in East Asia, situated in the Pacific Ocean. The archipelago consists of four main islands—Honshu, Hokkaido, Kyushu and Shikoku—along with 6,852 smaller islands, stretching over 3,000 kilometers from northeast to southwest. Japan lies to the east of the Sea of Japan, positioned near China, North Korea, South Korea and Russia. This strategic location in the Pacific Rim has historically made Japan both isolated and connected, allowing it to develop a unique culture while maintaining important trade and diplomatic relationships with neighboring countries. The country's island geography has profoundly influenced its culture, economy and identity throughout history.",
  },
  population: {
    icon: "👥",
    title: "Population",
    shortText: "~125 Million",
    details:
      'Japan has a population of approximately 125 million people, making it the 10th most populous country in the world. The nation is highly urbanized, with 91.8% of the population living in cities and urban areas. The Greater Tokyo Area alone is home to over 37 million people, making it the largest metropolitan area on Earth. Japan faces unique demographic challenges as an aging society, with a median age of 48.7 years—one of the highest in the world. The population density is about 334 people per square kilometer, though this varies dramatically as most people live in coastal areas while mountainous regions remain sparsely populated. This demographic structure presents both challenges and opportunities for Japanese society as it adapts to changing population dynamics. <a href="https://www.stat.go.jp/english/" target="_blank" rel="noopener noreferrer" class="citation">[Statistics Bureau of Japan, 2025]</a>',
  },
  language: {
    icon: "🗣️",
    title: "Language",
    shortText: "Japanese",
    details:
      "The Japanese language (Nihongo) is spoken by approximately 99% of Japan's population and stands as one of the world's most unique linguistic systems. What makes Japanese particularly fascinating is its complex writing system that simultaneously employs three different scripts: Hiragana and Katakana (syllabic scripts) and Kanji (Chinese-derived characters). Educated Japanese adults typically know over 2,000 kanji characters, with the government designating 2,136 characters as essential for daily use. The language features numerous regional dialects that can be quite distinct from one another, though Standard Japanese based on the Tokyo dialect serves as the common language for media and education. English is taught as a mandatory second language in schools, reflecting Japan's engagement with the global community while maintaining its linguistic heritage.",
  },
  currency: {
    icon: "💴",
    title: "Currency",
    shortText: "Japanese Yen (¥)",
    details:
      'The Japanese Yen (JPY), symbolized by ¥, serves as Japan\'s official currency and ranks as the third most traded currency in the world\'s foreign exchange markets, after the US Dollar and Euro. Interestingly, the yen shares the same symbol (¥) with the Chinese Yuan, though they are completely different currencies with distinct values. Japan\'s currency system includes coins in denominations of ¥1, ¥5, ¥10, ¥50, ¥100 and ¥500, along with banknotes of ¥1,000, ¥2,000, ¥5,000 and ¥10,000. The yen is renowned for its stability in global markets and serves as a safe-haven currency during times of economic uncertainty. The Bank of Japan, established in 1882, manages monetary policy and maintains the currency\'s integrity in both domestic and international financial systems. <a href="https://www.boj.or.jp/en/" target="_blank" rel="noopener noreferrer" class="citation">[Bank of Japan, 2025]</a>',
  },
  capital: {
    icon: "🏛️",
    title: "Capital",
    shortText: "Tokyo",
    details:
      'Tokyo, formerly known as Edo, became Japan\'s capital in 1868 during the Meiji Restoration when Emperor Meiji moved the imperial court from Kyoto. Today, Tokyo stands as the world\'s most populous metropolitan area with over 37 million residents in its greater metro region. The city is divided into 23 special wards, 26 cities, 5 towns and 8 villages, forming a complex administrative structure that operates as both a city and a prefecture. As a global financial center and cultural hub, Tokyo seamlessly blends ultramodern skyscrapers and cutting-edge technology with historic temples and traditional neighborhoods. The city has hosted the Summer Olympics twice, first in 1964 and again in 2020 (held in 2021 due to the pandemic), showcasing its role as a world-class city that honors both innovation and tradition. <a href="https://www.metro.tokyo.lg.jp/english/" target="_blank" rel="noopener noreferrer" class="citation">[Tokyo Metropolitan Government, 2025]</a>',
  },
  region: {
    icon: "🌏",
    title: "Region",
    shortText: "Asia-Pacific",
    details:
      "Japan is geographically positioned in the East Asia region and forms a crucial part of the broader Asia-Pacific (APAC) economic and cultural zone. The nation actively participates in various regional organizations and serves as a key member of ASEAN Plus Three, which strengthens cooperation between ASEAN nations and Japan, China and South Korea. Japan's strategic location along major global trade routes has historically positioned it as a cultural and economic bridge between East and West. The country plays a vital role in regional stability, economic development and cultural exchange throughout the Asia-Pacific region. This positioning has allowed Japan to maintain strong diplomatic and economic relationships across the region while contributing significantly to international cooperation, peacekeeping efforts and sustainable development initiatives throughout Asia and beyond.",
  },
};

// Important Facts Data
const importantFactsData = {
  mountFuji: {
    icon: "🗻",
    title: "Mount Fuji",
    shortText: "Japan's highest mountain (3,776m) and cultural icon",
    details:
      "Mount Fuji, known as Fujisan in Japanese, stands majestically at 3,776 meters (12,389 feet) as Japan's highest and most iconic mountain. This perfectly conical stratovolcano has been revered as a sacred site for centuries, deeply embedded in Japanese culture, art and spirituality. Located about 100 kilometers southwest of Tokyo, Mount Fuji straddles the border between Shizuoka and Yamanashi prefectures. In 2013, UNESCO designated it as a World Heritage Site, recognizing not just its natural beauty but its profound cultural significance. The mountain has inspired countless works of art, including Katsushika Hokusai's famous woodblock print series 'Thirty-Six Views of Mount Fuji.' Each year, over 300,000 people climb to its summit during the official climbing season (July to early September), experiencing breathtaking sunrise views known as 'Goraiko.' Mount Fuji last erupted in 1707 during the Edo period and while currently dormant, it remains an active volcano monitored closely by scientists. The mountain's symmetric cone, often snow-capped, has become synonymous with Japan itself, appearing on everything from traditional paintings to modern currency.",
  },
  culturalHeritage: {
    icon: "🏯",
    title: "Cultural Heritage",
    shortText: "25 UNESCO World Heritage Sites",
    details:
      'Japan boasts an impressive collection of 25 UNESCO World Heritage Sites that showcase the nation\'s rich cultural tapestry and natural wonders. These sites span from ancient Buddhist monuments in the Historic Monuments of Ancient Nara to the pristine forests of Yakushima Island, home to ancient cedar trees over 1,000 years old. The collection includes magnificent castles like Himeji-jo, often called the \'White Heron Castle\' for its elegant white appearance and considered the finest surviving example of Japanese castle architecture. Historic villages like Shirakawa-go and Gokayama display traditional gassho-zukuri farmhouses with steep thatched roofs designed to withstand heavy snowfall. Religious sites include the Sacred Sites and Pilgrimage Routes in the Kii Mountain Range, connecting Shinto and Buddhist sacred places. Japan\'s World Heritage Sites also encompass the Atomic Bomb Dome in Hiroshima, a powerful reminder of the devastating effects of nuclear warfare and symbol of peace. More recent additions include the Munakata Island complex and the \'Hidden Christian Sites in the Nagasaki Region,\' recognizing the unique history of Christianity in Japan. These sites collectively represent Japan\'s commitment to preserving its cultural legacy while sharing it with the world. <a href="https://whc.unesco.org/en/statesparties/jp" target="_blank" rel="noopener noreferrer" class="citation">[UNESCO, 2025]</a>',
  },
  shinkansen: {
    icon: "🚅",
    title: "Shinkansen (Bullet Train)",
    shortText: "High-speed rail network since 1964",
    details:
      'The Shinkansen, commonly known as the bullet train, revolutionized rail travel when it debuted on October 1, 1964, just in time for the Tokyo Olympics. This engineering marvel was the world\'s first high-speed rail system, initially connecting Tokyo and Osaka at speeds of 210 km/h (130 mph). Today, modern Shinkansen trains reach operational speeds of up to 320 km/h (200 mph), with experimental models achieving even higher velocities. The network has expanded to cover most of Japan\'s main island, Honshu and extends to Kyushu and Hokkaido, totaling over 2,700 kilometers of track. What makes the Shinkansen truly remarkable is its impeccable safety record—in over 60 years of operation carrying billions of passengers, there has never been a single passenger fatality due to train accidents. The trains are renowned for their punctuality, with average delays measured in seconds rather than minutes. The iconic aerodynamic nose design of models like the N700 Series was inspired by the kingfisher bird\'s beak, reducing noise pollution when entering tunnels. The Shinkansen network continues to expand, with the Hokkaido Shinkansen extension and the upcoming Chuo Shinkansen maglev line, which will connect Tokyo and Osaka in just 67 minutes, traveling at speeds of 500 km/h. <a href="https://global.jr-central.co.jp/" target="_blank" rel="noopener noreferrer" class="citation">[JR Central, 2025]</a>',
  },
  uniqueWriting: {
    icon: "🎌",
    title: "Unique Writing System",
    shortText: "Three writing systems used simultaneously",
    details:
      "Japan possesses one of the world's most complex and fascinating writing systems, uniquely employing three distinct scripts simultaneously: Hiragana, Katakana and Kanji. This trilingual writing approach is virtually unprecedented globally. Hiragana, with its 46 basic characters, represents native Japanese words and grammatical elements, featuring flowing, cursive-like characters. Katakana, also comprising 46 characters, mirrors Hiragana phonetically but uses angular shapes, primarily for foreign loanwords, onomatopoeia and emphasis (similar to italics in English). Kanji, borrowed and adapted from Chinese characters over 1,500 years ago, consists of thousands of logographic characters, each representing meanings and various pronunciations. The Japanese government designates 2,136 characters as Jōyō Kanji (regular-use Chinese characters) essential for daily communication, though educated adults typically know more. A single sentence might seamlessly integrate all three scripts, demonstrating the system's complexity and elegance. For example, 'コーヒーを飲みました' (I drank coffee) uses Katakana for 'coffee' (コーヒー), Hiragana for grammatical particles (を), Kanji for 'drink' (飲) and Hiragana again for the past tense marker (ました). This intricate system, while challenging to learn, allows for nuanced expression and has profoundly shaped Japanese literature, calligraphy and cultural identity.",
  },
  cherryBlossoms: {
    icon: "🌸",
    title: "Cherry Blossoms (Sakura)",
    shortText: "National celebration of beauty and transience",
    details:
      'Cherry blossoms, or sakura, hold an almost sacred place in Japanese culture, representing far more than mere flowers—they embody profound philosophical concepts of beauty, transience and renewal. Every spring, Japan transforms into a pink and white wonderland as millions of cherry trees bloom simultaneously across the archipelago. This spectacular natural phenomenon triggers hanami, the centuries-old tradition of flower viewing, where families, friends and colleagues gather beneath blooming trees for picnics and celebrations. The Japan Meteorological Corporation issues detailed sakura forecast maps predicting the \'cherry blossom front\' as it sweeps from south to north and news programs dedicate significant coverage to bloom status reports. The fleeting nature of sakura—most blooms last only one to two weeks—embodies the Buddhist concept of mono no aware, the awareness of impermanence and the bittersweet beauty of transitory things. This symbolism has made cherry blossoms central to Japanese art, poetry and literature for over a millennium. During World War II, falling cherry blossoms became associated with fallen soldiers, adding layers of meaning to this cultural icon. Today, major viewing spots like Ueno Park in Tokyo or the Philosopher\'s Path in Kyoto attract millions of visitors. The most famous variety, Somei Yoshino, accounts for approximately 80% of Japan\'s cherry trees, creating a unified blooming spectacle across the nation each spring. <a href="https://www.japan-weather.jp/en/" target="_blank" rel="noopener noreferrer" class="citation">[Japan Meteorological Corporation, 2025]</a>',
  },
  traditionalArts: {
    icon: "🎎",
    title: "Traditional Arts",
    shortText: "Rich cultural traditions and practices",
    details:
      'Japanese traditional arts represent a sophisticated cultural heritage refined over centuries, encompassing aesthetic practices that blend philosophy, spirituality and meticulous craftsmanship. The tea ceremony (sadō or chanoyu) epitomizes this refinement—a choreographed ritual of preparing and serving matcha green tea that embodies Zen Buddhist principles of harmony (wa), respect (kei), purity (sei) and tranquility (jaku). Every movement, from the way tea is whisked to how the bowl is rotated, carries deep symbolic meaning. Ikebana, the art of flower arrangement, transcends simple decoration to become a meditative practice emphasizing minimalism, asymmetry and the beauty of negative space, with various schools like Ikenobo, Ohara and Sogetsu maintaining distinct philosophies. Calligraphy (shodō) transforms writing into artistic expression, where the quality of brushstrokes reveals the artist\'s character and spiritual state—practitioners spend years mastering the \'four treasures\': brush, ink, inkstone and paper. Traditional martial arts like kendo, judo, aikido and karate integrate physical discipline with moral and spiritual development, emphasizing respect, self-control and continuous self-improvement. Other traditional arts include Noh and Kabuki theater, both UNESCO Intangible Cultural Heritage; origami (paper folding); bonsai (miniature tree cultivation); and various textile arts like kimono-making and indigo dyeing. These practices continue thriving in modern Japan, with millions studying them domestically and internationally, ensuring these living traditions pass to future generations. <a href="https://www.bunka.go.jp/english/" target="_blank" rel="noopener noreferrer" class="citation">[Agency for Cultural Affairs, 2025]</a>',
  },
  technology: {
    icon: "🤖",
    title: "Technology Leadership",
    shortText: "Global innovation in robotics and electronics",
    details:
      "Japan stands as a global technology powerhouse, leading innovation in robotics, electronics, automotive engineering and advanced manufacturing. The nation's technological prowess emerged from post-World War II reconstruction, transforming Japan into the world's second-largest economy by the 1980s. Today, Japanese companies dominate numerous high-tech sectors: Sony revolutionized personal electronics with the Walkman, PlayStation and advanced camera sensors used in most smartphones worldwide; Toyota pioneered hybrid vehicle technology with the Prius and leads in hydrogen fuel cell development; Honda created ASIMO, one of the world's most advanced humanoid robots; Panasonic, Hitachi and Toshiba remain major players in consumer electronics and industrial equipment. Japan's robotics industry is particularly remarkable—the country produces approximately 52% of the world's industrial robots and leads in developing robots for eldercare, disaster response and companionship (like SoftBank's Pepper robot). The nation's commitment to research and development is substantial, consistently ranking among the top countries in R&D spending as percentage of GDP. Japanese innovations include the QR code (invented by Denso Wave), blue LED lighting (Nobel Prize-winning technology) and the continuous development of increasingly sophisticated bullet train technology. Japan also leads in materials science, producing advanced carbon fiber, semiconductors and precision manufacturing equipment. This technological leadership extends to entertainment technology, with companies like Nintendo revolutionizing gaming and advanced animation studios pushing boundaries in film and television production.",
  },
  culinary: {
    icon: "🍣",
    title: "Culinary Excellence",
    shortText: "UNESCO Cultural Heritage with global influence",
    details:
      "Japanese cuisine, known as washoku, received UNESCO Intangible Cultural Heritage status in 2013, recognizing it as more than mere food preparation but as a comprehensive cultural practice embodying respect for nature and seasonal cycles. The cuisine emphasizes seasonal ingredients (shun), minimal processing to honor natural flavors beautiful presentation that engages all five senses. The principle of 'ichiju-sansai' (one soup, three dishes) reflects nutritional balance and aesthetic harmony. Japan boasts more Michelin-starred restaurants than any country except France, with Tokyo alone holding more Michelin stars than Paris, London and New York combined—a testament to the nation's culinary excellence spanning from humble ramen shops to haute kaiseki restaurants. Sushi, perhaps Japan's most internationally recognized dish, evolved from a preservation technique into an art form requiring years of apprenticeship; master sushi chefs (itamae) train for decades, with some apprentices spending years just learning to properly cook rice. Beyond sushi, Japanese cuisine encompasses vast diversity: delicate kaiseki multi-course meals reflecting seasonal changes; hearty ramen with regional variations from Hokkaido's miso-based to Kyushu's tonkotsu pork broth; tempura's light, crispy batter technique; okonomiyaki savory pancakes; and wagyu beef renowned for its intense marbling. Traditional fermented foods like miso, soy sauce and natto reflect centuries of preservation wisdom. The concept of umami, the fifth taste, was identified by Japanese chemist Kikunae Ikeda in 1908, fundamentally changing global understanding of flavor. Japanese culinary philosophy of 'mottainai' (avoiding waste) and meticulous preparation techniques have profoundly influenced global gastronomy, with Japanese-trained chefs and Japanese ingredients now celebrated worldwide. <a href=\"https://www.maff.go.jp/e/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"citation\">[MAFF, 2013]</a>",
  },
};

// Create modal HTML structure
function createModal() {
  const modalHTML = `
    <div id="factsModal" class="facts-modal">
      <div class="modal-content">
        <span class="modal-close">&times;</span>
        <div class="modal-header">
          <span class="modal-icon"></span>
          <h2 class="modal-title"></h2>
        </div>
        <div class="modal-body"></div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

// Open modal with specific fact data
function openFactModal(factKey, isImportantFact = false) {
  const fact = isImportantFact
    ? importantFactsData[factKey]
    : factsData[factKey];
  if (!fact) return;

  const modal = document.getElementById("factsModal");
  const modalIcon = modal.querySelector(".modal-icon");
  const modalTitle = modal.querySelector(".modal-title");
  const modalList = modal.querySelector(".modal-facts-list");

  // Set content and ensure icon is visible
  modalIcon.style.display = "block";
  modalIcon.textContent = fact.icon;
  modalTitle.textContent = fact.title;

  // Display as paragraph text instead of list
  const modalBody = modal.querySelector(".modal-body");
  modalBody.innerHTML = `<p class="modal-text">${fact.details}</p>`;

  // Show modal
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
}

// Close modal
function closeFactModal() {
  const modal = document.getElementById("factsModal");
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 300);
}

// Initialize fact cards
function initializeFactCards() {
  const factCards = document.querySelectorAll(".fact-card");

  factCards.forEach((card, index) => {
    const factKeys = [
      "location",
      "population",
      "language",
      "currency",
      "capital",
      "region",
    ];
    const factKey = factKeys[index];

    card.style.cursor = "pointer";
    card.addEventListener("click", () => openFactModal(factKey));
  });
}

// Initialize important fact cards
function initializeImportantFactCards() {
  const importantFactCards = document.querySelectorAll(".important-fact-card");

  importantFactCards.forEach((card, index) => {
    const factKeys = [
      "mountFuji",
      "culturalHeritage",
      "shinkansen",
      "uniqueWriting",
      "cherryBlossoms",
      "traditionalArts",
      "technology",
      "culinary",
    ];
    const factKey = factKeys[index];

    card.style.cursor = "pointer";
    card.addEventListener("click", () => openFactModal(factKey, true));
  });
}

// Initialize modal functionality
function initializeModal() {
  createModal();
  initializeFactCards();
  initializeImportantFactCards();

  // Close modal when clicking X
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-close")) {
      closeFactModal();
    }
  });

  // Close modal when clicking outside
  document.addEventListener("click", function (e) {
    if (e.target.id === "factsModal") {
      closeFactModal();
    }
  });

  // Close modal with ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeFactModal();
    }
  });
}

// Initialize when DOM is loaded (for non-component version)
document.addEventListener("DOMContentLoaded", initializeModal);

// Initialize when components are loaded (for component version)
document.addEventListener("componentsLoaded", initializeModal);
