// Culture Section Component - Inline HTML
// Marv, mag inline component nalang tayo di ko kasi magawang component based wala kasi tayong framework
const cultureSectionHTML = `
<section id="culture" class="section">
  <div class="container">
    <div class="culture-header">
      <h2>Country Profile: Japan</h2>
      <p class="section-subtitle">Discover the Land of the Rising Sun</p>
    </div>

    <!-- Map and Flag -->
    <div class="map-flag-section">
      <div class="map-container">
        <h3>Location & Map</h3>
        <div class="map-placeholder">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13568513.046621015!2d130.6689579!3d36.5748441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="400"
            style="border: 0; border-radius: 10px"
            allowfullscreen=""
            loading="lazy"
          >
          </iframe>
        </div>
        <p class="map-description">
          Japan is an archipelago located in East Asia, situated in the
          Pacific Ocean. It lies to the east of the Sea of Japan, China,
          North Korea, South Korea and Russia.
        </p>
      </div>

      <div class="flag-container">
        <h3>National Flag</h3>
        <div class="flag-display">
          <div class="japan-flag">
            <div class="red-circle"></div>
          </div>
        </div>
        <h4>Hinomaru (日の丸)</h4>
        <p class="flag-description">
          The flag features a red disc (representing the sun) centered on
          a white field. Known as "Hinomaru" meaning "circle of the sun",
          it symbolizes Japan as the "Land of the Rising Sun."
        </p>
      </div>
    </div>

    <!-- Population Info -->
    <div class="population-section">
      <h3>Population Overview</h3>
      <div class="population-grid">
        <div class="pop-card">
          <span class="pop-number">125M+</span>
          <p>Total Population</p>
        </div>
        <div class="pop-card">
          <span class="pop-number">91.8%</span>
          <p>Urbanization Rate</p>
        </div>
        <div class="pop-card">
          <span class="pop-number">37M+</span>
          <p>Tokyo Metro Area</p>
        </div>
        <div class="pop-card">
          <span class="pop-number">48.7</span>
          <p>Median Age</p>
        </div>
      </div>
    </div>

    <!-- Historical Timeline -->
    <div class="timeline-section">
      <h3>Historical Timeline</h3>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-year"><span>660 BC</span></div>
          <div class="timeline-content">
            <h4>Foundation of Japan</h4>
            <p>
              Legendary founding by Emperor Jimmu, establishing the
              imperial line that continues to this day.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-year"><span>794 AD</span></div>
          <div class="timeline-content">
            <h4>Heian Period</h4>
            <p>
              Capital moved to Heian-kyō (Kyoto). Golden age of classical
              Japanese culture, art and literature.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-year"><span>1192</span></div>
          <div class="timeline-content">
            <h4>Kamakura Shogunate</h4>
            <p>
              First military government (bakufu) established, beginning
              the era of samurai rule.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-year"><span>1603</span></div>
          <div class="timeline-content">
            <h4>Edo Period Begins</h4>
            <p>
              Tokugawa Shogunate established. 250 years of peace,
              isolation and cultural development.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-year"><span>1868</span></div>
          <div class="timeline-content">
            <h4>Meiji Restoration</h4>
            <p>
              Imperial rule restored. Rapid modernization and
              industrialization begins. Tokyo becomes capital.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-year"><span>1945</span></div>
          <div class="timeline-content">
            <h4>Post-War Era</h4>
            <p>
              End of WWII. Japan's constitution established, beginning
              democratic government and economic miracle.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-year"><span>2019</span></div>
          <div class="timeline-content">
            <h4>Reiwa Era</h4>
            <p>
              Emperor Naruhito ascends to throne, beginning the Reiwa era
              meaning "beautiful harmony."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Important Facts -->
    <div class="important-facts">
      <h3>Important Facts About Japan</h3>
      <div class="facts-two-column">
        <div class="fact-item important-fact-card">
          <span class="fact-emoji">🗻</span>
          <h4>Mount Fuji</h4>
          <p>
            Japan's highest mountain (3,776m) and cultural icon,
            designated UNESCO World Heritage site in 2013.
          </p>
        </div>

        <div class="fact-item important-fact-card">
          <span class="fact-emoji">🏯</span>
          <h4>Cultural Heritage</h4>
          <p>
            25 UNESCO World Heritage Sites including historic temples,
            castles and natural wonders.
          </p>
        </div>

        <div class="fact-item important-fact-card">
          <span class="fact-emoji">🚅</span>
          <h4>Shinkansen</h4>
          <p>
            Bullet train network since 1964, reaching speeds of 320 km/h
            with an exceptional safety record.
          </p>
        </div>

        <div class="fact-item important-fact-card">
          <span class="fact-emoji">🎌</span>
          <h4>Unique Writing</h4>
          <p>
            Only country using three writing systems simultaneously:
            Hiragana, Katakana and Kanji.
          </p>
        </div>

        <div class="fact-item important-fact-card">
          <span class="fact-emoji">🌸</span>
          <h4>Cherry Blossoms</h4>
          <p>
            Sakura (cherry blossom) season is a national celebration,
            symbolizing beauty and the transience of life.
          </p>
        </div>

        <div class="fact-item important-fact-card">
          <span class="fact-emoji">🎎</span>
          <h4>Traditional Arts</h4>
          <p>
            Rich traditions including tea ceremony, calligraphy, flower
            arrangement (ikebana) and martial arts.
          </p>
        </div>

        <div class="fact-item important-fact-card">
          <span class="fact-emoji">🤖</span>
          <h4>Technology Leader</h4>
          <p>
            World leader in robotics, electronics and automotive
            industries with brands like Sony, Toyota and Honda.
          </p>
        </div>

        <div class="fact-item important-fact-card">
          <span class="fact-emoji">🍣</span>
          <h4>Culinary Excellence</h4>
          <p>
            Japanese cuisine (washoku) is UNESCO Intangible Cultural
            Heritage with most Michelin stars globally.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
`;

// Load Culture Section
function loadCultureSection() {
  const container = document.getElementById('culture-section-container');
  if (container) {
    container.innerHTML = cultureSectionHTML;
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadCultureSection);
} else {
  loadCultureSection();
}
