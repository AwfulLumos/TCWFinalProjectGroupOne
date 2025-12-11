// References modal

const referencesData = [
  {
    citation:
      "Japan Meteorological Corporation. (2025). Cherry blossom forecast. https://www.japan-weather.jp/en/",
    url: "https://www.japan-weather.jp/en/",
  },
  {
    citation:
      "UNESCO World Heritage Centre. (2025). World Heritage List: Japan. https://whc.unesco.org/en/statesparties/jp",
    url: "https://whc.unesco.org/en/statesparties/jp",
  },
  {
    citation:
      "JR Central. (2025). Shinkansen overview. https://global.jr-central.co.jp/",
    url: "https://global.jr-central.co.jp/",
  },
  {
    citation:
      "Statistics Bureau of Japan. (2025). Population statistics. https://www.stat.go.jp/english/",
    url: "https://www.stat.go.jp/english/",
  },
  {
    citation:
      "Bank of Japan. (2025). Currency and monetary policy. https://www.boj.or.jp/en/",
    url: "https://www.boj.or.jp/en/",
  },
  {
    citation:
      "Agency for Cultural Affairs (Japan). (2025). Traditional arts and cultural properties. https://www.bunka.go.jp/english/",
    url: "https://www.bunka.go.jp/english/",
  },
  {
    citation:
      "Ministry of Agriculture, Forestry and Fisheries (Japan). (2013). Washoku: Traditional dietary cultures of the Japanese. https://www.maff.go.jp/e/",
    url: "https://www.maff.go.jp/e/",
  },
  {
    citation:
      "Tokyo Metropolitan Government. (2025). About Tokyo. https://www.metro.tokyo.lg.jp/english/",
    url: "https://www.metro.tokyo.lg.jp/english/",
  },
];

function createReferencesModal() {
  const modalHTML = `
    <div id="referencesModal" class="facts-modal">
      <div class="modal-content">
        <span class="modal-close">&times;</span>
        <div class="modal-header">
          <span class="modal-icon">📚</span>
          <h2 class="modal-title">References</h2>
        </div>
        <div class="modal-body">
          <ol class="references-list"></ol>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

function openReferencesModal() {
  const modal = document.getElementById("referencesModal");
  const list = modal.querySelector(".references-list");
  list.innerHTML = referencesData
    .map(
      (ref) =>
        `<li class="reference-item"><span>${ref.citation}</span> <a href="${ref.url}" target="_blank" rel="noopener noreferrer">[Link]</a></li>`
    )
    .join("");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
}

function closeReferencesModal() {
  const modal = document.getElementById("referencesModal");
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 300);
}

function initReferences() {
  createReferencesModal();
  const link = document.getElementById("references-link");
  if (link) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openReferencesModal();
    });
  }

  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("modal-close") ||
      e.target.id === "referencesModal"
    ) {
      closeReferencesModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeReferencesModal();
  });
}

document.addEventListener("DOMContentLoaded", initReferences);
