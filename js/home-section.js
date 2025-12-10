// Home Section Component - Inline HTML
// Marv, mag inline component nalang tayo di ko kasi magawang component based wala kasi tayong framework
const homeSectionHTML = `
<section id="home" class="section">
  <div class="container">
    <div class="home-header">
      <h2>Japan: The Land of Rising Sun</h2>
      <p class="country-subtitle">
        Asia | Cultural Heritage and Modern Innovation
      </p>
    </div>

    <div class="project-info">
      <h3>Project Information</h3>
      <div class="info-grid">
        <div class="info-item">
          <strong>Course:</strong> The Contemporary World
        </div>
        <div class="info-item"><strong>Section:</strong> Code 1371</div>
        <div class="info-item">
          <strong>Project Type:</strong> Digital Cultural E-Portfolio
        </div>
      </div>
    </div>

    <div class="introduction">
      <h3>About This Portfolio</h3>
      <p>
        Welcome to our digital cultural exploration of
        <strong>Japan</strong>, a fascinating nation located in East Asia.
        This e-portfolio serves as a comprehensive presentation of
        Japanese culture, traditions and its significant role in our
        contemporary globalized world.
      </p>
    </div>

    <div class="why-japan">
      <h3>Why We Chose Japan</h3>
      <p>
        Japan represents a unique blend of ancient traditions and
        cutting-edge modernity. We chose to explore Japanese culture
        because it exemplifies how a nation can preserve its rich cultural
        heritage while simultaneously leading in technological innovation
        and global economic development.
      </p>
      <ul class="reasons-list">
        <li>Rich cultural heritage spanning thousands of years</li>
        <li>Unique geographical and cultural identity in Asia</li>
        <li>Strong preservation of traditional values and customs</li>
        <li>Global leader in technology and innovation</li>
        <li>
          Significant influence on global culture through anime, cuisine
          and arts
        </li>
        <li>Perfect example of balancing tradition with modernization</li>
      </ul>
    </div>

    <div class="portfolio-purpose">
      <h3>Portfolio Purpose</h3>
      <p>This digital portfolio aims to:</p>
      <ul class="purpose-list">
        <li>
          <strong>Demonstrate</strong> understanding of cultural diversity
          in the contemporary world
        </li>
        <li>
          <strong>Explain</strong> how globalization shapes and influences
          Japanese culture
        </li>
        <li>
          <strong>Present</strong> cultural information in a clear,
          creative and organized manner
        </li>
        <li>
          <strong>Reflect</strong> on cultural identity and our role as
          global citizens
        </li>
        <li>
          <strong>Apply</strong> digital literacy through creative online
          presentation
        </li>
      </ul>
    </div>

    <div class="quick-facts">
      <h3>Quick Facts About Japan</h3>
      <div class="facts-grid">
        <div class="fact-card">
          <span class="fact-icon">📍</span>
          <h4>Location</h4>
          <p>East Asia, Pacific Ocean</p>
        </div>
        <div class="fact-card">
          <span class="fact-icon">👥</span>
          <h4>Population</h4>
          <p>~125 Million</p>
        </div>
        <div class="fact-card">
          <span class="fact-icon">🗣️</span>
          <h4>Language</h4>
          <p>Japanese</p>
        </div>
        <div class="fact-card">
          <span class="fact-icon">💴</span>
          <h4>Currency</h4>
          <p>Japanese Yen (¥)</p>
        </div>
        <div class="fact-card">
          <span class="fact-icon">🏛️</span>
          <h4>Capital</h4>
          <p>Tokyo</p>
        </div>
        <div class="fact-card">
          <span class="fact-icon">🌏</span>
          <h4>Region</h4>
          <p>Asia-Pacific</p>
        </div>
      </div>
    </div>
  </div>
</section>
`;

// Load Home Section
function loadHomeSection() {
  const container = document.getElementById('home-section-container');
  if (container) {
    container.innerHTML = homeSectionHTML;
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadHomeSection);
} else {
  loadHomeSection();
}
