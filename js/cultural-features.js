// Cultural Features Inline Html COmponent
// Marv, mag inline component nalang tayo di ko kasi magawang component based wala kasi tayong framework
const culturalFeaturesHTML = `
<!-- Major Cultural Features Section -->
<section id="cultural-features" class="section">
  <div class="container">
    <div class="section-header">
      <h2>Major Cultural Features</h2>
      <p class="section-subtitle">
        Exploring the Rich Cultural Heritage of Japan
      </p>
    </div>

    <!-- Cultural Features Grid -->
    <div class="cultural-grid">
      <!-- 1. Food & Cuisine -->
      <div class="cultural-feature-card">
        <h3>Food & Cuisine</h3>
        <div class="feature-image">
          <img src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop" alt="Japanese Cuisine - Sushi and Traditional Food" loading="lazy">
        </div>
        <p class="feature-description">
          Japanese cuisine (Washoku) is a UNESCO Intangible Cultural Heritage,
          known for its emphasis on seasonal ingredients, beautiful
          presentation and balance of flavors. From delicate sushi to
          comforting ramen, Japanese food culture reflects deep respect for
          nature and craftsmanship.
        </p>
        <ul class="feature-highlights">
          <li>
            <strong>Sushi & Sashimi:</strong> Fresh raw fish artfully prepared
          </li>
          <li><strong>Ramen:</strong> Regional noodle soup variations</li>
          <li><strong>Kaiseki:</strong> Traditional multi-course dining</li>
          <li><strong>Street Food:</strong> Takoyaki, yakitori, okonomiyaki</li>
        </ul>
        <button class="learn-more-btn" data-feature="cuisine">
          Learn More
        </button>
      </div>

      <!-- 2. Clothing & Fashion -->
      <div class="cultural-feature-card">
        <h3>Clothing & Fashion</h3>
        <div class="feature-image">
          <img src="https://cdn.shopify.com/s/files/1/0033/2660/7409/files/purple-furisode.jpg?v=1714456705" alt="Japanese Kimono - Traditional Clothing" loading="lazy">
        </div>
        <p class="feature-description">
          Japanese fashion seamlessly blends traditional elegance with
          cutting-edge contemporary style. The kimono remains an iconic symbol
          of Japanese culture, while modern Tokyo fashion districts set global
          trends in street style and haute couture.
        </p>
        <ul class="feature-highlights">
          <li>
            <strong>Kimono:</strong> Traditional wrapped garment with deep
            symbolism
          </li>
          <li><strong>Yukata:</strong> Casual summer cotton kimono</li>
          <li><strong>Harajuku Style:</strong> Youth street fashion culture</li>
          <li>
            <strong>Contemporary Design:</strong> Minimalist and avant-garde
            fashion
          </li>
        </ul>
        <button class="learn-more-btn" data-feature="fashion">
          Learn More
        </button>
      </div>

      <!-- 3. Traditions & Customs -->
      <div class="cultural-feature-card">
        <h3>Traditions & Customs</h3>
        <div class="feature-image">
          <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop" alt="Japanese Tea Ceremony - Traditional Custom" loading="lazy">
        </div>
        <p class="feature-description">
          Japanese customs emphasize respect, harmony and social awareness.
          From the art of bowing to the ritual of tea ceremony, traditional
          practices continue to shape daily life and interpersonal relationships
          in modern Japan.
        </p>
        <ul class="feature-highlights">
          <li>
            <strong>Bowing (Ojigi):</strong> Respectful greeting and
            appreciation
          </li>
          <li>
            <strong>Tea Ceremony:</strong> Zen-influenced mindful practice
          </li>
          <li>
            <strong>Gift Giving:</strong> Thoughtful wrapping and presentation
          </li>
          <li><strong>Shoes Off:</strong> Removing footwear indoors</li>
        </ul>
        <button class="learn-more-btn" data-feature="traditions">
          Learn More
        </button>
      </div>

      <!-- 4. Festivals & Celebrations -->
      <div class="cultural-feature-card">
        <h3>Festivals & Celebrations</h3>
        <div class="feature-image">
          <img src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&h=600&fit=crop" alt="Japanese Festival - Cherry Blossoms and Celebrations" loading="lazy">
        </div>
        <p class="feature-description">
          Japanese festivals (matsuri) are vibrant celebrations that honor
          seasons, deities and historical events. These colorful events feature
          traditional music, dance, food stallsand spectacular processions
          throughout the year.
        </p>
        <ul class="feature-highlights">
          <li><strong>Hanami:</strong> Cherry blossom viewing parties</li>
          <li><strong>Tanabata:</strong> Star Festival with wish-writing</li>
          <li><strong>Obon:</strong> Festival honoring ancestors</li>
          <li><strong>New Year (Shōgatsu):</strong> Most important holiday</li>
        </ul>
        <button class="learn-more-btn" data-feature="festivals">
          Learn More
        </button>
      </div>

      <!-- 5. Arts, Music & Literature -->
      <div class="cultural-feature-card">
        <h3>Arts, Music & Literature</h3>
        <div class="feature-image">
          <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=600&fit=crop" alt="Japanese Art - Traditional Painting and Calligraphy" loading="lazy">
        </div>
        <p class="feature-description">
          Japan's artistic heritage spans from ancient poetry and woodblock
          prints to contemporary manga and anime. Traditional performing arts
          coexist with modern pop culture, creating a unique cultural landscape.
        </p>
        <ul class="feature-highlights">
          <li><strong>Ukiyo-e:</strong> Traditional woodblock prints</li>
          <li><strong>Haiku:</strong> 17-syllable poetry form</li>
          <li><strong>Noh & Kabuki:</strong> Classical theater traditions</li>
          <li><strong>Manga & Anime:</strong> Modern visual storytelling</li>
        </ul>
        <button class="learn-more-btn" data-feature="arts">Learn More</button>
      </div>

      <!-- 6. Religion, Values & Beliefs -->
      <div class="cultural-feature-card">
        <h3>Religion, Values & Beliefs</h3>
        <div class="feature-image">
          <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&h=600&fit=crop" alt="Japanese Torii Gate - Shinto Shrine" loading="lazy">
        </div>
        <p class="feature-description">
          Japan's spiritual landscape blends Shinto and Buddhism, with most
          Japanese practicing both religions harmoniously. Core values include
          harmony (wa), respect, perseverance  and attention to detail.
        </p>
        <ul class="feature-highlights">
          <li>
            <strong>Shinto:</strong> Indigenous faith honoring nature spirits
            (kami)
          </li>
          <li>
            <strong>Buddhism:</strong> Teachings on mindfulness and
            enlightenment
          </li>
          <li><strong>Harmony (Wa):</strong> Group cohesion and consensus</li>
          <li><strong>Ganbaru:</strong> Perseverance and doing one's best</li>
        </ul>
        <button class="learn-more-btn" data-feature="religion">
          Learn More
        </button>
      </div>

      <!-- 7. Architecture -->
      <div class="cultural-feature-card">
        <h3>Architecture</h3>
        <div class="feature-image">
          <img src="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&h=600&fit=crop" alt="Japanese Castle - Traditional Architecture" loading="lazy">
        </div>
        <p class="feature-description">
          Japanese architecture harmonizes with nature, emphasizing simplicity,
          natural materials and fluid indoor-outdoor spaces. From ancient
          temples to ultramodern skyscrapers, buildings reflect philosophical
          and aesthetic principles.
        </p>
        <ul class="feature-highlights">
          <li>
            <strong>Traditional Houses:</strong> Wooden structures with tatami
            mats
          </li>
          <li>
            <strong>Temples & Shrines:</strong> Sacred spaces with distinctive
            designs
          </li>
          <li><strong>Castles:</strong> Feudal-era defensive fortifications</li>
          <li>
            <strong>Modern Design:</strong> Minimalist contemporary architecture
          </li>
        </ul>
        <button class="learn-more-btn" data-feature="architecture">
          Learn More
        </button>
      </div>

      <!-- 8. Language & Communication -->
      <div class="cultural-feature-card">
        <h3>Language & Communication</h3>
        <div class="feature-image">
          <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop" alt="Japanese Calligraphy - Language and Writing" loading="lazy">
        </div>
        <p class="feature-description">
          Japanese communication emphasizes politeness, indirect expression and
          context awareness. The language features multiple levels of formality,
          honorific speech and nonverbal cues that convey respect and social
          harmony.
        </p>
        <ul class="feature-highlights">
          <li><strong>Keigo:</strong> Honorific and humble speech forms</li>
          <li>
            <strong>Reading the Air:</strong> Understanding unspoken context
          </li>
          <li>
            <strong>Tatemae vs Honne:</strong> Public face vs true feelings
          </li>
          <li>
            <strong>Body Language:</strong> Bowing, gestures and expressions
          </li>
        </ul>
        <button class="learn-more-btn" data-feature="language">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>
`;

// Load Cultural Features Component
function loadCulturalFeatures() {
  const container = document.getElementById("cultural-features-container");
  if (container) {
    container.innerHTML = culturalFeaturesHTML;
    console.log("✓ Cultural features loaded");

    // Initialize learn more buttons after loading
    initializeCulturalFeatures();
  }
}

// Cultural Features Data for Modals
const culturalFeaturesData = {
  cuisine: {
    icon: "🍱",
    title: "Japanese Food & Cuisine",
    details: `Japanese cuisine, known as "washoku," represents far more than sustenance—it's a carefully refined art form that achieved UNESCO Intangible Cultural Heritage status in 2013. The cuisine emphasizes five fundamental principles: respect for seasonal ingredients (shun), balanced nutrition, natural flavors, beautiful presentation and connection to annual events and celebrations. Each dish is meticulously prepared to honor the ingredients' inherent qualities while achieving perfect harmony of taste, texture, color and presentation. Sushi, perhaps Japan's most iconic culinary export, evolved from a humble preservation technique into a sophisticated art requiring decades of training. Master sushi chefs (itamae) undergo rigorous apprenticeships, sometimes spending years perfecting rice preparation alone before advancing to fish cutting. Ramen, originating from Chinese noodles, has transformed into a uniquely Japanese phenomenon with distinct regional styles—from Hokkaido's miso-based broth to Kyushu's rich tonkotsu pork soup. Kaiseki, the pinnacle of Japanese haute cuisine, presents seasonal ingredients through a carefully orchestrated multi-course meal reflecting tea ceremony aesthetics. Each course considers flavor progression, visual harmony, cooking techniques and seasonal awareness. Beyond these well-known dishes, Japanese food culture encompasses tempura's delicate batter technique, okonomiyaki savory pancakes, yakitori grilled chicken skewers and countless regional specialties. The concept of "umami" (the fifth taste) was identified by Japanese scientist Kikunae Ikeda, fundamentally changing global understanding of flavor. Traditional fermented foods like miso, soy sauce and natto reflect centuries of preservation wisdom and beneficial probiotics. The philosophy of "mottainai" (regret over waste) ensures every part of an ingredient is utilized respectfully. Modern Japanese cuisine continues innovating while honoring tradition, influencing global gastronomy through techniques, ingredients and aesthetic principles.`,
  },
  fashion: {
    icon: "👘",
    title: "Japanese Clothing & Fashion",
    details: `Japanese fashion represents a fascinating paradox—simultaneously honoring thousand-year-old traditions while pioneering cutting-edge contemporary styles that influence global trends. The kimono, Japan's most iconic garment, is a T-shaped wrapped robe with origins dating back over 1,000 years. Far from being merely clothing, kimonos are wearable art embodying complex symbolism through colors, patterns and wearing methods that communicate the wearer's age, marital status, formality level and season. A single formal kimono can cost thousands to tens of thousands of dollars and requires specific knowledge to wear correctly with proper undergarments, obi (decorative belt) and accessories. The yukata, a casual cotton kimono worn in summer, represents a more accessible tradition, commonly seen at festivals and hot springs. Modern Japan's fashion scene demonstrates remarkable diversity. Tokyo's Harajuku district became synonymous with youth street fashion, spawning subcultures like Lolita (Victorian-inspired dresses), Decora (excessive accessories) and Gyaru (glamorous styles). Japanese designers have profoundly influenced global haute couture—Issey Miyake revolutionized pleating techniques, Rei Kawakubo of Comme des Garçons challenged conventional silhouettes and Yohji Yamamoto pioneered deconstructed tailoring. Contemporary Japanese fashion often emphasizes minimalism, quality craftsmanship and innovative textile technology. Brands like Uniqlo democratized high-quality basics globally, while labels such as Visvim and Kapital reinterpret traditional techniques for modern audiences. The concept of "boro" (beautiful imperfection through patching and repair) has influenced sustainable fashion movements worldwide. Japanese fashion magazines like Vogue Japan and street style documentation continue shaping global trends, demonstrating how Japan balances reverence for tradition with fearless innovation.`,
  },
  traditions: {
    icon: "🙇",
    title: "Japanese Traditions & Customs",
    details: `Japanese traditions and customs create a sophisticated social framework emphasizing harmony, respect and mindfulness in daily interactions. The practice of bowing (ojigi) exemplifies this complexity—different angles and durations communicate varying levels of respect, gratitude, or apology. A casual greeting might involve a 15-degree bow, while deeper respect requires 30 or even 45 degrees. The tea ceremony (sadō or chanoyu) represents the pinnacle of ritualized mindfulness, transforming simple tea preparation into a choreographed meditation embodying Zen principles of harmony (wa), respect (kei), purity (sei) and tranquility (jaku). Every movement, from how the bowl is rotated to the angle of the ladle, carries symbolic meaning refined over centuries. Participants spend years studying proper etiquette, seasonal variations and appropriate responses. Gift-giving (omiage) in Japan involves elaborate etiquette—gifts must be wrapped beautifully (the wrapping is as important as the gift itself), presented with both hands and slight bowing and received with appropriate humble phrases. Recipients typically don't open gifts immediately, as doing so might appear greedy. The custom of removing shoes before entering homes, temples and certain restaurants reflects concerns for cleanliness and the sacred boundary between outside and inside spaces. Genkan (entrance areas) serve as transitional zones where this transformation occurs. Bathing customs emphasize cleanliness before entering communal baths (onsen or sento), where the focus shifts to relaxation and social bonding rather than washing. The concept of "omotenashi" (wholehearted hospitality) guides service interactions, anticipating needs before they're expressed. "Kuuki wo yomu" (reading the air) describes the crucial skill of understanding unspoken context and adjusting behavior accordingly. These customs, far from being archaic rules, continue shaping modern Japanese society, creating a culture of mutual respect and social harmony.`,
  },
  festivals: {
    icon: "🎆",
    title: "Japanese Festivals & Celebrations",
    details: `Japanese festivals (matsuri) create vibrant expressions of cultural identity, seasonal awareness and community bonding throughout the year. These celebrations blend Shinto religious observances, Buddhist traditions, seasonal markers and historical commemorations into joyous public events featuring music, dance, food and spectacular visual displays. Hanami, the custom of cherry blossom viewing, transforms Japan each spring into a nation-wide celebration of transient beauty. Families, friends and colleagues gather beneath blooming sakura trees for picnics, creating temporary communities united in appreciation of fleeting beauty—a practice embodying the Buddhist concept of impermanence (mujō). The phenomenon is so significant that weather forecasts track the "cherry blossom front" (sakura zensen) as it sweeps northward across the archipelago. Tanabata (Star Festival) on July 7th commemorates the legend of two celestial lovers allowed to meet once yearly across the Milky Way. People write wishes on colorful paper strips (tanzaku) and hang them on bamboo branches, creating forests of hopes and dreams. Obon in mid-August honors ancestral spirits believed to return home during this period. Families clean graves, light lanterns to guide spirits, perform traditional Bon dances and share meals, strengthening connections across generations. New Year (Shōgatsu) remains Japan's most important holiday, featuring temple visits (hatsumode), special foods (osechi), decorations (kadomatsu) and the ringing of temple bells 108 times to dispel worldly desires. Summer festivals feature spectacular fireworks displays (hanabi taikai), portable shrine processions (mikoshi), traditional dancing and food stalls selling yakisoba, takoyaki and shaved ice. Regional matsuri showcase local traditions—Kyoto's Gion Matsuri features elaborate floats, Aomori's Nebuta Matsuri displays giant illuminated warrior figures and Sapporo's Snow Festival creates massive ice sculptures. These festivals maintain community identity, pass traditions to younger generations and create spaces where formal social boundaries temporarily dissolve in shared celebration.`,
  },
  arts: {
    icon: "🎨",
    title: "Japanese Arts, Music & Literature",
    details: `Japanese artistic traditions demonstrate extraordinary refinement across visual arts, performing arts and literature, creating a cultural legacy that continues influencing global creativity. Ukiyo-e ("pictures of the floating world"), woodblock prints from the Edo period, revolutionized Western art when they reached Europe in the 19th century, inspiring Impressionists like Monet and Van Gogh. Masters like Hokusai (creator of "The Great Wave off Kanagawa") and Hiroshige perfected techniques capturing landscapes, kabuki actors, beautiful women and everyday life with bold compositions and vibrant colors. Calligraphy (shodō) elevates writing into expressive art, where brushstroke quality reveals the artist's character, emotion and spiritual cultivation. The "way of writing" emphasizes mindful preparation, breathing control and decisive execution—each stroke cannot be corrected, demanding total presence. Traditional performing arts include Noh theater, a minimalist art form using masks, stylized movements and poetic language to convey profound emotional and spiritual themes. Kabuki offers more accessible drama featuring elaborate costumes, dynamic acting and spectacular staging. Bunraku puppet theater achieves remarkable expressiveness through large puppets manipulated by visible puppeteers in perfect synchronization. Japanese literature boasts ancient classics like "The Tale of Genji" (often called the world's first novel, written around 1000 CE by Murasaki Shikibu) and haiku poetry perfected by masters like Bashō, capturing profound moments in just 17 syllables. Contemporary Japan's cultural influence expanded through manga and anime, creating global phenomena like Studio Ghibli's films, which blend traditional aesthetics with modern storytelling. J-Pop and traditional instruments like the shamisen, koto and shakuhachi flute continue evolving. Modern artists like Yayoi Kusama (infinity rooms) and Takashi Murakami (superflat movement) challenge boundaries between high and low culture. This artistic heritage demonstrates Japan's ability to honor tradition while fearlessly innovating, creating works that speak to universal human experiences through distinctly Japanese aesthetics.`,
  },
  religion: {
    icon: "⛩️",
    title: "Religion, Values & Beliefs",
    details: `Japan's spiritual landscape uniquely blends indigenous Shinto beliefs with imported Buddhism, creating a syncretic religious culture where most Japanese practice both traditions without contradiction. Shinto, meaning "the way of the gods," is an indigenous faith focusing on kami—spirits inhabiting natural phenomena, locations and ancestors. Shinto emphasizes purity, harmony with nature and reverence for tradition without requiring exclusive devotion or specific doctrines. Shrines (jinja), marked by distinctive torii gates, serve as spaces where humans encounter kami through rituals, festivals and offerings. Important life events like births and weddings often follow Shinto traditions, celebrating beginnings and vitality. Buddhism arrived from China and Korea in the 6th century, bringing concepts of karma, reincarnation and enlightenment through meditation and ethical living. Japanese Buddhism developed distinct schools like Zen (emphasizing meditation and direct insight), Pure Land (focusing on devotion to Amida Buddha) and Nichiren (centered on the Lotus Sutra). Buddhist temples conduct funerals and memorial services, addressing death and ancestral veneration. Many Japanese homes maintain both kamidana (Shinto altars) and butsudan (Buddhist altars), seamlessly integrating both traditions. Beyond organized religion, Japanese culture emphasizes core values shaping daily life and social interactions. "Wa" (harmony) prioritizes group cohesion over individual desires, influencing everything from business decisions to classroom dynamics. "Ganbaru" (perseverance, doing one's best) encourages persistent effort despite difficulties, celebrating the process as much as outcomes. "Omotenashi" (wholehearted hospitality) guides service interactions with anticipatory care. "Mottainai" (regret over waste) promotes environmental consciousness and resource appreciation. These values, whether derived from religious traditions or cultural evolution, create a society emphasizing mutual respect, social responsibility and continuous self-improvement while maintaining spiritual flexibility allowing multiple belief systems to coexist harmoniously.`,
  },
  architecture: {
    icon: "🏯",
    title: "Japanese Architecture",
    details: `Japanese architecture embodies philosophical principles harmonizing human structures with natural environments through minimalism, natural materials and fluid spatial relationships between interior and exterior. Traditional residential architecture features post-and-beam wooden construction allowing flexible interior spaces modified by sliding doors (fusuma and shōji). These translucent paper screens filter light beautifully while maintaining privacy, creating soft, meditative atmospheres. Tatami mats (woven rush flooring) standardize room dimensions and influence furniture design—people sit, sleep and dine on the floor, fostering different spatial relationships than Western interiors. The engawa, a wooden veranda transitioning between interior and exterior, blurs boundaries between building and garden, reflecting Shinto beliefs in nature's sacredness. Temple and shrine architecture demonstrates refined wooden joinery techniques, often constructing massive structures without nails using complex interlocking joints. The Phoenix Hall of Byōdō-in Temple and Tōdai-ji Temple's Great Buddha Hall showcase remarkable engineering and artistic achievement. Shinto shrines, marked by torii gates and purification fountains, create sacred spaces separated from the mundane world through design elements emphasizing natural materials and simplicity. Japanese castles, built during the feudal era, combined defensive functionality with architectural elegance. Himeji Castle, designated a UNESCO World Heritage Site, demonstrates sophisticated construction with white plastered walls, multiple defensive layers and aesthetic grace earning its nickname "White Heron Castle." Gardens constitute essential architectural elements, whether karesansui (dry landscape/Zen gardens) using rocks and raked gravel to represent water and mountains, or stroll gardens featuring carefully composed views revealed along winding paths. Modern Japanese architecture continues these traditions while incorporating contemporary materials and technologies. Architects like Tadao Ando use concrete to create minimalist spaces with dramatic light play, Kengo Kuma revitalizes traditional materials in innovative ways and SANAA creates ethereal structures challenging conventional boundaries. The philosophy of "ma" (negative space, meaningful emptiness) influences design decisions, recognizing that space between elements creates as much meaning as the elements themselves. This architectural heritage demonstrates how physical structures can embody philosophical principles, creating environments supporting mindful living and nature connection.`,
  },
  language: {
    icon: "💬",
    title: "Language & Communication",
    details: `Japanese language and communication reflect profound cultural values emphasizing social harmony, hierarchical awareness and context sensitivity. The language features multiple levels of politeness (keigo) adjusting vocabulary and grammar based on social relationships, formality and context. Casual speech among close friends differs dramatically from respectful language toward superiors or strangers, requiring speakers to constantly assess social dynamics and adjust accordingly. Honorific forms (sonkeigo) elevate others' actions, humble forms (kenjōgo) lower one's own actions and polite forms (teineigo) maintain general courtesy. This complexity can overwhelm learners but reflects deep cultural emphasis on mutual respect and social awareness. "Kuuki wo yomu" (reading the air/atmosphere) describes the crucial skill of understanding unspoken context, implicit expectations and group dynamics without explicit communication. This high-context communication style values what's left unsaid as much as spoken words, requiring attentive observation of nonverbal cues, situational context and subtle hints. The concepts of "tatemae" (public facade, socially appropriate behavior) and "honne" (true feelings) acknowledge the gap between social presentation and private truth. While Western cultures often value authentic self-expression, Japanese communication recognizes that completely honest expression might damage social harmony, so maintaining appropriate tatemae demonstrates social maturity and consideration for others. Nonverbal communication carries enormous significance. Bowing communicates respect, apology, or gratitude with varying depths and durations. Silence indicates thoughtful consideration rather than awkwardness. Minimal eye contact shows respect rather than evasiveness (prolonged eye contact may seem aggressive). Gift presentation, business card exchange (meishi) and seating arrangements all follow specific protocols communicating social awareness. Even the writing system reflects layered complexity—combining three scripts (hiragana, katakana, kanji) allows nuanced expression where the same word might be written differently to convey subtle meaning differences. This communication style, while potentially challenging for outsiders, creates a sophisticated social framework minimizing conflict, maintaining harmony and demonstrating respect through every interaction. Understanding these patterns offers insights into broader cultural values prioritizing group cohesion, hierarchical stability and social consideration over individual assertiveness.`,
  },
};

// Initialize cultural features modals
function initializeCulturalFeatures() {
  const learnMoreButtons = document.querySelectorAll(".learn-more-btn");

  learnMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const feature = this.getAttribute("data-feature");
      openCulturalFeatureModal(feature);
    });
  });
}

// Open cultural feature modal
function openCulturalFeatureModal(featureKey) {
  const feature = culturalFeaturesData[featureKey];
  if (!feature) return;

  const modal = document.getElementById("factsModal");
  const modalIcon = modal.querySelector(".modal-icon");
  const modalTitle = modal.querySelector(".modal-title");
  const modalBody = modal.querySelector(".modal-body");

  // Set content (hide icon for cultural features)
  modalIcon.style.display = "none";
  modalTitle.textContent = feature.title;
  modalBody.innerHTML = `<p class="modal-text">${feature.details}</p>`;

  // Show modal
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
}

// Load cultural features when DOM is ready
document.addEventListener("DOMContentLoaded", loadCulturalFeatures);

// Contemporary Issues & Challenges Section
const contemporaryIssuesHTML = `
<!-- Contemporary Issues & Challenges Section -->
<section id="contemporary-issues" class="section">
  <div class="container">
    <div class="section-header">
      <h2>Contemporary Issues & Challenges</h2>
      <p class="section-subtitle">
        Current Challenges Facing Japanese Culture and Society
      </p>
    </div>

    <!-- Issues Carousel -->
    <div class="issues-carousel-container">
      <button class="carousel-btn carousel-btn-prev" aria-label="Previous Issue">
        <span>‹</span>
      </button>
      
      <div class="issues-carousel">
        <div class="carousel-track">
          <!-- Issue 1: Cultural Preservation -->
          <div class="issue-card">
            <div class="issue-number">01</div>
            <h3>Cultural Preservation</h3>
            <div class="issue-image">
              <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop" alt="Traditional Japanese Temple" loading="lazy">
            </div>
            <div class="issue-content">
              <p class="issue-description">
                Japan faces the challenge of preserving its rich cultural heritage while adapting to modern times. Traditional crafts, arts and practices are at risk as younger generations pursue contemporary careers.
              </p>
              <div class="issue-details">
                <h4>Key Concerns:</h4>
                <ul>
                  <li>Declining interest in traditional arts and crafts</li>
                  <li>Loss of artisan skills and knowledge</li>
                  <li>Historic buildings requiring restoration</li>
                  <li>Maintaining traditional festivals and customs</li>
                </ul>
                <h4>Current Efforts:</h4>
                <p>
                  The government has designated "Living National Treasures" to honor and support master craftspeople. UNESCO recognition of various cultural practices helps raise awareness and funding for preservation efforts.
                </p>
              </div>
            </div>
          </div>

          <!-- Issue 2: Traditional vs. Modern Lifestyles -->
          <div class="issue-card">
            <div class="issue-number">02</div>
            <h3>Traditional vs. Modern Lifestyles</h3>
            <div class="issue-image">
              <img src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop" alt="Modern Tokyo vs Traditional Japan" loading="lazy">
            </div>
            <div class="issue-content">
              <p class="issue-description">
                Japanese society grapples with balancing traditional values like respect for elders and group harmony with modern individualism and global lifestyles.
              </p>
              <div class="issue-details">
                <h4>Key Tensions:</h4>
                <ul>
                  <li>Work-life balance vs. traditional work ethic</li>
                  <li>Individual expression vs. social conformity</li>
                  <li>Gender roles and equality expectations</li>
                  <li>Urban migration leaving rural areas depopulated</li>
                </ul>
                <h4>Societal Impact:</h4>
                <p>
                  Younger generations increasingly question practices like lifetime employment and strict hierarchies. The rise of "hikikomori" (social withdrawal) reflects tensions between social expectations and personal well-being.
                </p>
              </div>
            </div>
          </div>

          <!-- Issue 3: Globalization Pressures -->
          <div class="issue-card">
            <div class="issue-number">03</div>
            <h3>Globalization Pressures</h3>
            <div class="issue-image">
              <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop" alt="Global Influence in Japan" loading="lazy">
            </div>
            <div class="issue-content">
              <p class="issue-description">
                As Japan becomes more integrated into the global economy and culture, there are concerns about maintaining cultural distinctiveness while remaining competitive internationally.
              </p>
              <div class="issue-details">
                <h4>Challenges:</h4>
                <ul>
                  <li>Western fast food culture affecting traditional diet</li>
                  <li>English language dominance in business</li>
                  <li>International business practices vs. Japanese customs</li>
                  <li>Cultural homogenization through media and technology</li>
                </ul>
                <h4>Response:</h4>
                <p>
                  Japan has successfully exported its pop culture (anime, manga, J-pop) globally while maintaining unique cultural identity. The concept of "Cool Japan" promotes Japanese culture internationally.
                </p>
              </div>
            </div>
          </div>

          <!-- Issue 4: Stereotypes and Representation -->
          <div class="issue-card">
            <div class="issue-number">04</div>
            <h3>Stereotypes and Representation</h3>
            <div class="issue-image">
              <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&h=600&fit=crop" alt="Japanese Cultural Representation" loading="lazy">
            </div>
            <div class="issue-content">
              <p class="issue-description">
                Japan continues to address both internal and external stereotypes that misrepresent its culture and people, from the "exotic Orient" narrative to oversimplified portrayals in global media.
              </p>
              <div class="issue-details">
                <h4>Common Stereotypes:</h4>
                <ul>
                  <li>All Japanese people live in traditional settings or futuristic cities</li>
                  <li>Overemphasis on samurai, geisha and ninja imagery</li>
                  <li>Misunderstanding of politeness as passiveness</li>
                  <li>Cultural appropriation of traditional items and practices</li>
                </ul>
                <h4>Moving Forward:</h4>
                <p>
                  Japanese creators increasingly control their own narratives through global platforms, presenting authentic, nuanced portrayals of contemporary Japanese life and challenging outdated stereotypes.
                </p>
              </div>
            </div>
          </div>

          <!-- Issue 5: Aging Population & Labor Shortage -->
          <div class="issue-card">
            <div class="issue-number">05</div>
            <h3>Demographic & Economic Challenges</h3>
            <div class="issue-image">
              <img src="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?w=800&h=600&fit=crop" alt="Aging Japanese Population" loading="lazy">
            </div>
            <div class="issue-content">
              <p class="issue-description">
                Japan faces one of the world's most rapidly aging populations with a declining birth rate, creating significant economic and cultural implications for the nation's future.
              </p>
              <div class="issue-details">
                <h4>Key Issues:</h4>
                <ul>
                  <li>Over 28% of population over age 65</li>
                  <li>Declining workforce and economic productivity</li>
                  <li>Strain on healthcare and pension systems</li>
                  <li>Traditional family care systems breaking down</li>
                </ul>
                <h4>Cultural Impact:</h4>
                <p>
                  The demographic crisis affects cultural transmission as fewer young people learn traditional practices. Immigration policies are slowly changing, though cultural attitudes toward diversity remain a challenge.
                </p>
              </div>
            </div>
          </div>

          <!-- Issue 6: Environmental Sustainability -->
          <div class="issue-card">
            <div class="issue-number">06</div>
            <h3>Environmental & Natural Disaster Challenges</h3>
            <div class="issue-image">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop" alt="Japanese Natural Environment" loading="lazy">
            </div>
            <div class="issue-content">
              <p class="issue-description">
                As an island nation vulnerable to earthquakes, tsunamis and typhoons, Japan must balance economic development with environmental protection and disaster preparedness.
              </p>
              <div class="issue-details">
                <h4>Environmental Concerns:</h4>
                <ul>
                  <li>Nuclear energy policy post-Fukushima</li>
                  <li>Plastic waste and ocean pollution</li>
                  <li>Climate change impacts on traditional agriculture</li>
                  <li>Balancing development with nature conservation</li>
                </ul>
                <h4>Cultural Connection:</h4>
                <p>
                  Japan's deep cultural connection to nature (seen in Shinto beliefs and seasonal celebrations) drives strong environmental consciousness, though conflicts arise between tradition and modern economic needs.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <button class="carousel-btn carousel-btn-next" aria-label="Next Issue">
        <span>›</span>
      </button>
    </div>

    <!-- Carousel Indicators -->
    <div class="carousel-indicators">
      <button class="indicator active" data-index="0" aria-label="Issue 1"></button>
      <button class="indicator" data-index="1" aria-label="Issue 2"></button>
      <button class="indicator" data-index="2" aria-label="Issue 3"></button>
      <button class="indicator" data-index="3" aria-label="Issue 4"></button>
      <button class="indicator" data-index="4" aria-label="Issue 5"></button>
      <button class="indicator" data-index="5" aria-label="Issue 6"></button>
    </div>
  </div>
</section>
`;

// Load Contemporary Issues section
function loadContemporaryIssues() {
  const container = document.getElementById("contemporary-issues-container");
  if (container) {
    container.innerHTML = contemporaryIssuesHTML;
    initializeIssuesCarousel();
  }
}

// Initialize Issues Carousel
function initializeIssuesCarousel() {
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".issue-card");
  const prevBtn = document.querySelector(".carousel-btn-prev");
  const nextBtn = document.querySelector(".carousel-btn-next");
  const indicators = document.querySelectorAll(".indicator");

  let currentIndex = 0;
  const totalCards = cards.length;

  // Update carousel position
  function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    // Update indicators
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });

    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalCards - 1;
  }

  // Previous button
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Next button
  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Indicator buttons
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    } else if (e.key === "ArrowRight" && currentIndex < totalCards - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Touch/Swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  track.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (
      touchStartX - touchEndX > swipeThreshold &&
      currentIndex < totalCards - 1
    ) {
      currentIndex++;
      updateCarousel();
    } else if (touchEndX - touchStartX > swipeThreshold && currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  // Initialize
  updateCarousel();
}

// Load contemporary issues when DOM is ready
document.addEventListener("DOMContentLoaded", loadContemporaryIssues);
