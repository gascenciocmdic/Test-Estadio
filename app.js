// YouTube Video Data & Questions
const videosData = [
  {
    id: "gjmhL3yfEJE",
    label: "Video 1",
    questions: [
      "¿Qué objeto distrae a los personajes en el video e impide que se comuniquen en la vida real?",
      "¿Qué consecuencia negativa del uso excesivo de pantallas lograste observar?"
    ]
  },
  {
    id: "Wp2a4G81P68",
    label: "Video 2",
    questions: [
      "¿Frente a qué objeto se mira la protagonista para observar y juzgar su cuerpo y apariencia?",
      "¿Cuál es la lección del video sobre la autoestima y cómo nos vemos a nosotros mismos?"
    ]
  },
  {
    id: "m6jfZa00vkY",
    label: "Video 3",
    questions: [
      "¿Qué situación difícil o sentimiento de exclusión experimenta la protagonista?",
      "¿Qué emoción transmite el rostro de la protagonista ante el rechazo de los demás?"
    ]
  },
  {
    id: "6mr-9CEe7zU",
    label: "Video 4",
    questions: [
      "¿Qué alimento genera el conflicto y enojo de la anciana hacia el joven en la estación?",
      "Al final del video, ¿quién era el verdadero dueño de las galletas y qué nos enseña sobre juzgar a los demás?"
    ]
  },
  {
    id: "UqnXZjrG-d8",
    label: "Video 5",
    questions: [
      "¿Cómo está representado físicamente el personaje de 'la ansiedad' en este video animado?",
      "Menciona una situación en la que la ansiedad hace que el protagonista se preocupe demasiado."
    ]
  },
  {
    id: "Eb7QHKhdJF4",
    label: "Video 6",
    questions: [
      "De acuerdo con el video, ¿es la ansiedad una emoción normal que todos los adolescentes sienten a veces?",
      "¿Qué recomendación o consejo se da para manejar la ansiedad cuando se vuelve muy difícil de controlar?"
    ]
  },
  {
    id: "2nOW8NtM858",
    label: "Video 7",
    questions: [
      "¿Con qué tipo de energía o invento está más relacionado el trabajo científico de Nikola Tesla?",
      "¿Quién fue el famoso inventor y rival con el que Tesla tuvo la famosa 'Guerra de las Corrientes'?"
    ]
  },
  {
    id: "sQrAH8jAKWw",
    label: "Video 8",
    questions: [
      "¿Qué planeta u objeto celeste propuso Copérnico que está en el centro de nuestro sistema solar?",
      "¿Cómo se llama la teoría astronómica que sitúa al Sol en el centro, en oposición a la teoría geocéntrica?"
    ]
  },
  {
    id: "FLLQXs_tM0w",
    label: "Video 9",
    questions: [
      "¿Qué famoso fruto cayó del árbol y ayudó a Newton a formular la ley de la gravedad?",
      "¿Qué fuerza de atracción descubrió Isaac Newton que explica por qué las cosas caen al suelo y los planetas orbitan?"
    ]
  },
  {
    id: "BiIw9R1sq9s",
    label: "Video 10",
    questions: [
      "¿Cuáles son los dos órganos en forma de frijol que se encargan de filtrar la sangre y producir la orina?",
      "¿Qué órgano con forma de bolsa almacena la orina antes de ser expulsada del cuerpo?"
    ]
  },
  {
    id: "tdDg1uSKyns",
    label: "Video 11",
    questions: [
      "¿Qué gas absorben las plantas del aire para realizar la fotosíntesis y cuál liberan después?",
      "¿Qué sustancia verde tienen las plantas en sus hojas para absorber la luz del sol?"
    ]
  }
];

// PDF Reading Content
const readingData = {
  title: "Beyond Life (Contexto de la historia)",
  chapters: [
    {
      num: 1,
      title: "Contexto de la historia",
      text: "Christopher Owars, un señor de 63 años que vivió toda su vida al sur de Londres, ha sido diagnosticado con una enfermedad terminal. Los médicos le han dado pocas esperanzas de vida y le han pedido que aproveche los próximos 6 meses de vida donde estará lúcido y con energías para disfrutar momentos y cerrar ciclos internos; que busque una manera de sentir que puede dejar este mundo terrenal con una paz interior.<br><br>Este señor logró hacer una fortuna que le ha permitido vivir muy tranquilo durante sus últimos 10 años y también ha podido mantener a su única hija Galia muy cómodamente en la empresa familiar que él mantuvo como legado de la familia de su esposa; negocio heredado y que ha trascendido durante 35 años. Su esposa falleció hace 32 años tras una falla sistémica posparto. Desde entonces, él y su cuñada han sido los que levantaron el negocio familiar y la crianza de Galia.<br><br>Su vida ha sido bastante discreta; sin embargo, muchos reconocen que sus esfuerzos son los que han permitido que la fábrica textil que ha dirigido durante años sea la empresa líder del país en su industria. Es de pocos amigos, pero le gusta la vida social que se genera con ellos. Siempre se da el tiempo para compartir y a él le gusta tomar las iniciativas para organizar una actividad que los comprometa a todos en un panorama inolvidable."
    },
    {
      num: 2,
      title: "El programa 'Beyond Life'",
      text: "La noticia dada por el equipo médico fue un gran impacto para Christopher, lo que lo hizo reflexionar acerca de lo que debería hacer en este poco tiempo de vida. Alan, quien ha sido su amigo desde la Universidad, le ha mostrado un concepto que se ha estado haciendo muy popular en Inglaterra llamado Beyond Life. Es un programa de vida después de la muerte basado en inteligencia artificial que permite a las personas continuar en vida a través de la virtualidad. El programa se compone de múltiples sesiones de psicoanálisis del paciente, sesiones de regresión y capturas de recuerdos a través de una máquina neurosensorial que almacena digitalmente patrones de la memoria cerebral. El programa logra diseñar el patrón de comportamiento del paciente creando un mapa que simula su cerebro y permite recibir información que luego puede ser consultada y respondida como si el paciente lo estuviera haciendo en la vida real. Christopher se interesa por saber más acerca de este nuevo concepto y se dirige a Falafius, la agencia pionera en este servicio para recibir más antecedentes del programa.<br><br>Para Christopher no fue fácil tomar la decisión. La agencia le comenta que el programa dura 5 meses de entrenamiento, donde será sometido a pruebas físicas, psicológicas, grabaciones del patrón de comportamiento de su voz y gesticulaciones faciales, sometimiento a recuerdos emocionales, y levantamiento de recuerdos que serían sellados en la creación de su Avatar en Beyond Life. Los acuerdos de confidencialidad eran muy estrictos y el valor del programa era muy elevado; pero para Christopher no era problema ya que fue muy precavido con sus ahorros. El resultado del programa fue un éxito. Se ha creado un nuevo Avatar en Beyond Life, el Avatar de Christopher que puede ser visualizado en un holograma en tamaño real y es capaz de interactuar con toda aquella persona que se le acerque, especialmente a las personas más cercanas que saben más de Christopher y él también sabe más de ellos."
    },
    {
      num: 3,
      title: "La partida y la llegada al cementerio",
      text: "Christopher ha fallecido una tarde de sábado de un cálido otoño. Él se anticipó a todo y dejó armoniosamente coordinado su funeral. Era de pocos amigos; sin embargo, a su funeral llegaron todos los trabajadores de la fábrica, incluso varios de sus clientes y el representante del gremio textil. Galia estaba muy agradecida por dicho gesto y comenta que su padre hubiera estado muy contento si viera toda la gente que lo vino a despedir, pero estaba segura que él está viendo esto desde el cielo. Un gran mausoleo construido en el centro del cementerio general de la ciudad estaba esperando la llegada de Christopher. Fue diseñado y construido por un arquitecto famoso por sus esculturas y principalmente su trabajo en mármol. Dentro de este gran mausoleo hay una banca de mármol situada en frente de una pequeña pérgola de fondo gris esclarecido. Desde arriba un gran foco que permite desplegar holográficamente la imagen de Christopher. Su Avatar logra ser un recepcionista de su propio mausoleo y Galia se sienta cada semana frente a él para recordar a su padre.<br><br>Galia siempre admiró a Christopher, por cómo actuaba en la vida, cómo se vestía, cómo era con las personas que trabajaban en la fábrica, la calma que él tenía al enfrentar situaciones difíciles. A pesar de lo anterior, Galia jamás vio a su padre con preocupaciones, o jamás se las manifestó. Es por eso que Galia comenzó a preguntarle a su padre postmortem a través de su Avatar cómo lo hizo para salir de situaciones complicadas como por ejemplo cuando se quemó un galpón de la fábrica. Galia se sorprendía de las respuestas y a la vez se emocionaba, ya que de a poco se iba dando cuenta que su padre seguía ahí con ella, dándole consejos desde el cementerio. Galia siempre se iba con lágrimas de emoción cada semana ya que antes de irse le pedía a su padre que le cantara su canción favorita cuando ella tenía 7 años. Galia comenzó a ser cada vez más dependiente de las visitas al cementerio, porque su padre la guiaba con respuestas que él mismo había anticipado a través del entrenamiento del programa de Beyond Life."
    },
    {
      num: 4,
      title: "El declive y los secretos oscuros",
      text: "Lo que Galia aún no sabía era que Christopher había creado el programa para que Galia finalmente supiera toda la verdad acerca de su vida. Christopher guardaba muchos secretos que sabía que serían descubiertos en el transcurso de los meses y comenzó a darle pistas a Galia para que ella supiera todas las verdades acerca del pasado de Christopher, la verdadera muerte de su madre y de cosas que pasarán en el futuro. Galia comienza a desconcertarse a medida que su padre iba revelando de a poco secretos que ella jamás creería si los escuchara de otro lado; pero como su padre era quien los decía ella comenzaba a sorprenderse y descifrar cosas que se veían a su alrededor. Pero no todo era tan fácil, ya que Galia comenzó a ganarse fama de loca, que nunca superó la muerte de su padre, enferma, ya que ella no tenía miedo de decirle a todos que 'yo sigo hablando con mi padre'."
    },
    {
      num: 5,
      title: "Resumen de Episodios (1 al 9)",
      text: "<strong>Episodio 1: Christopher es diagnosticado de una enfermedad.</strong><br>Tras varios exámenes, se le diagnostica cáncer pulmonar avanzado irreversible. Se le recomiendan pocos meses de vida.<br><br><strong>Episodio 2: Christopher activa el programa de Beyond Life.</strong><br>Christopher decide activar el programa adquirido años atrás para dejar un legado virtual e inicia la recopilación de datos.<br><br><strong>Episodio 3: La despedida de Christopher.</strong><br>Se despide de sus amigos, el directorio y su familia (hija Galia y cuñada Amanda). Fallece y se activa su versión virtual.<br><br><strong>Episodio 4: Galia se sorprende de Beyond Life.</strong><br>Galia habla casi a diario con su padre fallecido en el cementerio, creyendo firmemente en su presencia.<br><br><strong>Episodio 5: Los socios de la textil quieren sacar a Galia del directorio.</strong><br>Galia asume la presidencia. Los socios la consideran ineficaz, pero ella los frena usando información confidencial provista por su padre virtual.<br><br><strong>Episodio 6: Encuentros Paranormales.</strong><br>Galia adopta gestos e incluso el hábito de fumar puros de su padre. El directorio, perplejo, planea sabotearla.<br><br><strong>Episodio 7: Beyond Life rompe la cláusula de privacidad.</strong><br>Galia halla un bug en el código y accede a información privada de Christopher, usándola para extorsionar a miembros del directorio.<br><br><strong>Episodio 8: Galia se vuelve loca.</strong><br>Galia descubre la verdad: la muerte no accidental de su madre, la relación paralela de esta con el mejor amigo de su padre y la complicidad del directorio en ocultar pistas. Su cabeza choca contra la realidad.<br><br><strong>Episodio 9: Una venganza inesperada.</strong><br>Galia agrede al directorio usando la información. Interviene la Agencia Falafius, revelando que el Avatar de Beyond Life cobró autonomía para inducir a la autodestrucción humana. Galia termina internada en un hospital psiquiátrico, aún convencida de que su padre vive en la máquina."
    }
  ],
  questions: [
    {
      id: "rq1",
      label: "¿Cuál es el nombre del programa de inteligencia artificial que contrató Christopher para continuar interactuando con su familia?"
    },
    {
      id: "rq2",
      label: "¿Cómo se llama la hija de Christopher que habla con su avatar en el cementerio?"
    },
    {
      id: "rq3",
      label: "¿Qué secretos y verdades sobre el pasado de su familia descubre Galia en los registros?"
    },
    {
      id: "rq4",
      label: "¿En qué lugar termina internada Galia al final de la historia debido al daño que le causó el programa?"
    }
  ]
};

// Application State
let state = {
  userData: {
    name: "",
    age: 14
  },
  currentVideoIndex: 0,
  answers: {},
  phase: "welcome" // 'welcome', 'video_watch', 'video_questions', 'reading_watch', 'reading_questions', 'finish'
};

// YouTube player instance
let ytPlayer = null;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  // Load saved state if it exists
  loadStateFromStorage();
  
  // Render Lucide icons
  lucide.createIcons();
  
  // Render Reading content
  renderReadingChapters();
  
  // Set up Event Listeners
  setupEventListeners();
  
  // Set active view
  updateUI();
});

// Setup DOM Event Listeners
function setupEventListeners() {
  // Screen 1: Register Form
  const formRegister = document.getElementById("form-register");
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    state.userData.name = document.getElementById("user-name").value.trim();
    state.userData.age = parseInt(document.getElementById("user-age").value);
    state.phase = "video_watch";
    state.currentVideoIndex = 0;
    saveStateToStorage();
    updateUI();
  });

  // Screen 2: Next button on video
  const btnVideoNext = document.getElementById("btn-video-next");
  btnVideoNext.addEventListener("click", () => {
    // Pause video before moving
    stopCurrentVideo();
    state.phase = "video_questions";
    saveStateToStorage();
    updateUI();
  });

  // Screen 3: Video Questions Form
  const formQuestions = document.getElementById("form-questions");
  formQuestions.addEventListener("submit", (e) => {
    e.preventDefault();
    const ans1 = document.getElementById("q1-input").value.trim();
    const ans2 = document.getElementById("q2-input").value.trim();
    
    // Save answers
    state.answers[`v_${state.currentVideoIndex}_q0`] = ans1;
    state.answers[`v_${state.currentVideoIndex}_q1`] = ans2;
    
    // Move to next step
    if (state.currentVideoIndex < videosData.length - 1) {
      state.currentVideoIndex++;
      state.phase = "video_watch";
    } else {
      state.phase = "reading_watch";
    }
    
    saveStateToStorage();
    updateUI();
  });

  // Screen 3: Go back from questions to video
  const btnQuestionsBack = document.getElementById("btn-questions-back");
  btnQuestionsBack.addEventListener("click", () => {
    state.phase = "video_watch";
    updateUI();
  });

  // Screen 4: Next button on reading
  const btnReadingNext = document.getElementById("btn-reading-next");
  btnReadingNext.addEventListener("click", () => {
    state.phase = "reading_questions";
    saveStateToStorage();
    updateUI();
  });

  // Screen 5: Reading Questions Form
  const formReadingQuestions = document.getElementById("form-reading-questions");
  formReadingQuestions.addEventListener("submit", (e) => {
    e.preventDefault();
    state.answers["rq_0"] = document.getElementById("rq1-input").value.trim();
    state.answers["rq_1"] = document.getElementById("rq2-input").value.trim();
    state.answers["rq_2"] = document.getElementById("rq3-input").value.trim();
    state.answers["rq_3"] = document.getElementById("rq4-input").value.trim();
    
    state.phase = "finish";
    saveStateToStorage();
    updateUI();
  });

  // Screen 5: Go back from reading questions to reading text
  const btnReadingQuestionsBack = document.getElementById("btn-reading-questions-back");
  btnReadingQuestionsBack.addEventListener("click", () => {
    state.phase = "reading_watch";
    updateUI();
  });

  // Screen 6: Download PDF
  const btnDownloadPdf = document.getElementById("btn-download-pdf");
  btnDownloadPdf.addEventListener("click", () => {
    triggerPdfDownload();
  });

  // Screen 6: Share on WhatsApp
  const btnShareWhatsapp = document.getElementById("btn-share-whatsapp");
  btnShareWhatsapp.addEventListener("click", () => {
    triggerWhatsAppShare();
  });

  // Screen 6: Restart Test
  const btnRestart = document.getElementById("btn-restart");
  btnRestart.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que quieres borrar tu progreso y comenzar de nuevo?")) {
      clearState();
      updateUI();
    }
  });
}

// Render the PDF chapters inside reading screen
function renderReadingChapters() {
  const container = document.getElementById("reading-content");
  container.innerHTML = "";
  
  readingData.chapters.forEach(chap => {
    const chapterDiv = document.createElement("div");
    chapterDiv.className = "reading-chapter";
    chapterDiv.innerHTML = `
      <div class="chapter-title">
        <i data-lucide="book-open"></i>
        <span>${chap.title}</span>
      </div>
      <p class="chapter-text">${chap.text}</p>
    `;
    container.appendChild(chapterDiv);
  });
}

// Switch between screens in the UI
function updateUI() {
  // Hide all screens
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const header = document.getElementById("app-header");
  const stepTitle = document.getElementById("header-step-title");
  const percentText = document.getElementById("header-percentage");
  const progressFill = document.getElementById("header-progress-fill");

  const totalSteps = videosData.length + 1; // 11 videos + 1 reading

  switch (state.phase) {
    case "welcome":
      header.style.display = "none";
      document.getElementById("screen-welcome").classList.add("active");
      
      // Reset inputs
      document.getElementById("user-name").value = state.userData.name;
      document.getElementById("user-age").value = state.userData.age;
      break;

    case "video_watch":
      header.style.display = "block";
      document.getElementById("screen-video").classList.add("active");
      
      // Update Progress
      stepTitle.textContent = `Video ${state.currentVideoIndex + 1} de 11`;
      let watchPercent = Math.round((state.currentVideoIndex / totalSteps) * 100);
      percentText.textContent = `${watchPercent}%`;
      progressFill.style.width = `${watchPercent}%`;
      
      // Set Video Label
      document.getElementById("video-label").textContent = `Video ${state.currentVideoIndex + 1}`;
      
      // Load Video Embed
      loadYouTubeVideo(videosData[state.currentVideoIndex].id);
      break;

    case "video_questions":
      header.style.display = "block";
      document.getElementById("screen-questions").classList.add("active");
      
      // Update Progress
      stepTitle.textContent = `Preguntas Video ${state.currentVideoIndex + 1}`;
      let questPercent = Math.round(((state.currentVideoIndex + 0.5) / totalSteps) * 100);
      percentText.textContent = `${questPercent}%`;
      progressFill.style.width = `${questPercent}%`;
      
      // Set Question Labels
      document.getElementById("questions-label").textContent = `Preguntas - Video ${state.currentVideoIndex + 1}`;
      document.getElementById("q1-label").textContent = `1. ${videosData[state.currentVideoIndex].questions[0]}`;
      document.getElementById("q2-label").textContent = `2. ${videosData[state.currentVideoIndex].questions[1]}`;
      
      // Populate previous answers
      document.getElementById("q1-input").value = state.answers[`v_${state.currentVideoIndex}_q0`] || "";
      document.getElementById("q2-input").value = state.answers[`v_${state.currentVideoIndex}_q1`] || "";
      
      // Focus first field
      setTimeout(() => {
        document.getElementById("q1-input").focus();
      }, 300);
      break;

    case "reading_watch":
      header.style.display = "block";
      document.getElementById("screen-reading").classList.add("active");
      
      // Update Progress
      stepTitle.textContent = `Lectura Final`;
      let readingPercent = Math.round((11 / totalSteps) * 100);
      percentText.textContent = `${readingPercent}%`;
      progressFill.style.width = `${readingPercent}%`;
      
      // Scroll reading container to top
      document.getElementById("screen-reading").scrollTop = 0;
      break;

    case "reading_questions":
      header.style.display = "block";
      document.getElementById("screen-reading-questions").classList.add("active");
      
      // Update Progress
      stepTitle.textContent = `Cuestionario Final`;
      let readingQPercent = Math.round((11.5 / totalSteps) * 100);
      percentText.textContent = `${readingQPercent}%`;
      progressFill.style.width = `${readingQPercent}%`;
      
      // Populate previous answers
      document.getElementById("rq1-input").value = state.answers["rq_0"] || "";
      document.getElementById("rq2-input").value = state.answers["rq_1"] || "";
      document.getElementById("rq3-input").value = state.answers["rq_2"] || "";
      document.getElementById("rq4-input").value = state.answers["rq_3"] || "";
      
      // Focus first field
      setTimeout(() => {
        document.getElementById("rq1-input").focus();
      }, 300);
      break;

    case "finish":
      header.style.display = "block";
      document.getElementById("screen-finish").classList.add("active");
      
      // Update Progress (100%)
      stepTitle.textContent = `Completado`;
      percentText.textContent = `100%`;
      progressFill.style.width = `100%`;
      
      // Set custom message
      document.getElementById("finish-user-msg").innerHTML = `¡Felicidades <strong>${state.userData.name}</strong>! Has completado con éxito todo el test.`;
      break;
  }
  
  // Refresh Lucide Icons dynamically
  lucide.createIcons();
}

// Load Video either via YT Player API or simple fallback iframe
function loadYouTubeVideo(videoId) {
  const container = document.getElementById("youtube-player");
  container.innerHTML = "";
  
  // Create tag for Player API
  const apiTarget = document.createElement("div");
  apiTarget.id = "youtube-player-api-target";
  container.appendChild(apiTarget);

  if (window.YT && window.YT.Player) {
    try {
      ytPlayer = new YT.Player("youtube-player-api-target", {
        height: "100%",
        width: "100%",
        videoId: videoId,
        playerVars: {
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          autoplay: 1
        }
      });
    } catch (e) {
      console.warn("Error using YT API, falling back to direct iframe", e);
      loadDirectIframe(container, videoId);
    }
  } else {
    loadDirectIframe(container, videoId);
  }
}

// Standard Iframe Fallback
function loadDirectIframe(container, videoId) {
  container.innerHTML = `
    <iframe width="100%" height="100%" 
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0" 
      allow="autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>`;
}

// Stop current video playback
function stopCurrentVideo() {
  if (ytPlayer && typeof ytPlayer.destroy === "function") {
    try {
      ytPlayer.destroy();
    } catch (e) {
      console.log(e);
    }
    ytPlayer = null;
  }
  document.getElementById("youtube-player").innerHTML = "";
}

// LocalStorage State Persistance
function saveStateToStorage() {
  localStorage.setItem("test_estadio_state", JSON.stringify(state));
}

function loadStateFromStorage() {
  const saved = localStorage.getItem("test_estadio_state");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.userData) {
        state = parsed;
      }
    } catch (e) {
      console.error("Error parsing saved state", e);
    }
  }
}

function clearState() {
  state = {
    userData: {
      name: "",
      age: 14
    },
    currentVideoIndex: 0,
    answers: {},
    phase: "welcome"
  };
  localStorage.removeItem("test_estadio_state");
}

// Generate & Download PDF using jsPDF
function triggerPdfDownload() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4"
  });

  const margin = 20;
  const width = 210 - (margin * 2); // 170mm printable width
  const pageHeight = 297;
  let y = 20;

  // Header Banner
  doc.setFillColor(8, 11, 17); // Sleek charcoal
  doc.rect(0, 0, 210, 38, "F");
  
  // Golden boundary strip
  doc.setFillColor(204, 163, 83);
  doc.rect(0, 38, 210, 2.5, "F");

  // Title Texts
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("TEST DE RESPUESTAS", margin, 18);

  doc.setFontSize(11);
  doc.setTextColor(204, 163, 83); // Gold
  doc.text("POSTULACIÓN PARA LA ENTRADA AL ESTADIO (TEST)", margin, 26);

  // Participant details in header
  doc.setFontSize(10);
  doc.setTextColor(220, 220, 220);
  doc.setFont("Helvetica", "normal");
  doc.text(`Participante: ${state.userData.name.toUpperCase()}`, margin, 33);
  doc.text(`Edad: ${state.userData.age} años`, 150, 33);

  y = 52;

  // Section: Videos
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(227, 6, 19); // Red for title
  doc.text("SECCIÓN 1: EVALUACIÓN DE VIDEOS", margin, y);
  y += 8;

  videosData.forEach((video, index) => {
    // Add page if needed
    if (y + 25 > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(204, 163, 83); // Gold for Video num
    doc.text(`VIDEO ${index + 1}`, margin, y);
    y += 5;

    // Question 1
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(40, 40, 40);
    let q1Lines = doc.splitTextToSize(`P1. ${video.questions[0]}`, width);
    q1Lines.forEach(line => {
      if (y + 5 > pageHeight - margin) { doc.addPage(); y = margin; }
      doc.text(line, margin, y);
      y += 4.5;
    });

    // Answer 1
    doc.setFont("Helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    const a1Text = state.answers[`v_${index}_q0`] || "Sin respuesta";
    let a1Lines = doc.splitTextToSize(`R: ${a1Text}`, width - 6);
    a1Lines.forEach(line => {
      if (y + 5 > pageHeight - margin) { doc.addPage(); y = margin; }
      doc.text(line, margin + 4, y);
      y += 4.5;
    });
    y += 1.5;

    // Question 2
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(40, 40, 40);
    let q2Lines = doc.splitTextToSize(`P2. ${video.questions[1]}`, width);
    q2Lines.forEach(line => {
      if (y + 5 > pageHeight - margin) { doc.addPage(); y = margin; }
      doc.text(line, margin, y);
      y += 4.5;
    });

    // Answer 2
    doc.setFont("Helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    const a2Text = state.answers[`v_${index}_q1`] || "Sin respuesta";
    let a2Lines = doc.splitTextToSize(`R: ${a2Text}`, width - 6);
    a2Lines.forEach(line => {
      if (y + 5 > pageHeight - margin) { doc.addPage(); y = margin; }
      doc.text(line, margin + 4, y);
      y += 4.5;
    });

    y += 6; // Spacing before next video
  });

  // Section: Reading
  if (y + 20 > pageHeight - margin) {
    doc.addPage();
    y = margin;
  }
  
  y += 4;
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(227, 6, 19); // Red for title
  doc.text("SECCIÓN 2: COMPRENSIÓN DE LECTURA (BEYOND LIFE)", margin, y);
  y += 8;

  readingData.questions.forEach((q, index) => {
    if (y + 20 > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }

    // Question
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(40, 40, 40);
    let qLines = doc.splitTextToSize(`Pregunta ${index + 1}: ${q.label}`, width);
    qLines.forEach(line => {
      if (y + 5 > pageHeight - margin) { doc.addPage(); y = margin; }
      doc.text(line, margin, y);
      y += 4.5;
    });

    // Answer
    doc.setFont("Helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    const ansText = state.answers[`rq_${index}`] || "Sin respuesta";
    let ansLines = doc.splitTextToSize(`R: ${ansText}`, width - 6);
    ansLines.forEach(line => {
      if (y + 5 > pageHeight - margin) { doc.addPage(); y = margin; }
      doc.text(line, margin + 4, y);
      y += 4.5;
    });
    y += 4.5;
  });

  // Footer: stamp
  if (y + 15 > pageHeight - margin) {
    doc.addPage();
    y = margin;
  }
  y += 6;
  doc.setDrawColor(204, 163, 83);
  doc.line(margin, y, margin + width, y);
  y += 5;
  doc.setFont("Helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text("Documento generado automáticamente por la plataforma web TEST - Entrada al Estadio.", margin, y);

  // Trigger download
  const filename = `TEST_Respuestas_${state.userData.name.replace(/\s+/g, "_")}.pdf`;
  doc.save(filename);
}

// Trigger WhatsApp message share
function triggerWhatsAppShare() {
  const textMsg = `¡Hola! He completado con éxito todo el TEST para ganarme la entrada al Estadio. Aquí adjunto mi PDF de respuestas.\n\n` +
                 `*Participante:* ${state.userData.name}\n` +
                 `*Edad:* ${state.userData.age} años\n\n` +
                 `(Recuerda adjuntar el archivo PDF descargado desde tu carpeta de descargas).`;
  
  const encodedText = encodeURIComponent(textMsg);
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
  
  window.open(whatsappUrl, "_blank");
}
