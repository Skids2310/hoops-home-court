const sessionSkillCounts = {
  10: 1,
  15: 2,
  20: 3,
};

const focusLabels = {
  ball: "Ball control",
  footwork: "Footwork",
  team: "Passing",
  shooting: "Shooting",
  defense: "Defense",
  rebounding: "Rebounding",
};

const warmups = {
  ball: {
    title: "Traffic Lights",
    body: "Green means dribble, yellow means low bounce, red means jump stop.",
  },
  footwork: {
    title: "Court Corners",
    body: "Move between four markers with slides, skips, and jump stops.",
  },
  team: {
    title: "Ready Hands",
    body: "Shuffle between markers, call for the ball, and show a clear target.",
  },
  shooting: {
    title: "Shot Shape Warm-Up",
    body: "Start close to the target and rehearse balanced feet, eyes up, and follow-through.",
  },
  defense: {
    title: "Mirror Moves",
    body: "Copy a parent's side steps, stops, and hand positions while staying balanced.",
  },
  rebounding: {
    title: "React and Chase",
    body: "Parent points left or right, then kids move quickly, land strong, and call ball.",
  },
};

const skills = [
  {
    title: "Low Dribble Lane",
    tag: "ball",
    time: "4 min",
    body: "Keep the ball below the waist while moving between two markers.",
    cue: "Parent cue: eyes up for the last three bounces.",
  },
  {
    title: "Jump Stop Garage",
    tag: "footwork",
    time: "3 min",
    body: "Jog, catch an imaginary pass, land on two feet, and freeze with balance.",
    cue: "Parent cue: quiet landing and strong stance.",
  },
  {
    title: "Wall Pass Target",
    tag: "team",
    time: "5 min",
    body: "Use tape or chalk as a safe target for chest, bounce, and overhead passes.",
    cue: "Parent cue: step toward the target.",
  },
  {
    title: "Body Wraps",
    tag: "ball",
    time: "3 min",
    body: "Move the ball around waist, knees, and head without dropping it.",
    cue: "Parent cue: quick hands, relaxed shoulders.",
  },
  {
    title: "Slide and Touch",
    tag: "footwork",
    time: "4 min",
    body: "Defensive slide to a marker, touch the ground, then slide back under control.",
    cue: "Parent cue: feet apart, chest proud.",
  },
  {
    title: "Pass and Call",
    tag: "team",
    time: "5 min",
    body: "Call a family member's name before passing, then move to open space.",
    cue: "Parent cue: loud voice and ready hands.",
  },
  {
    title: "Crossover Gate",
    tag: "ball",
    time: "4 min",
    body: "Dribble to a marker, cross the ball to the other hand, then move through the gate.",
    cue: "Parent cue: low hips and wide feet.",
  },
  {
    title: "Finger Tip Taps",
    tag: "ball",
    time: "2 min",
    body: "Tap the ball quickly between fingertips above the head, at chest height, and near knees.",
    cue: "Parent cue: soft fingertips, not palms.",
  },
  {
    title: "Protect the Ball",
    tag: "ball",
    time: "4 min",
    body: "Dribble with one hand while the other arm makes a safe shield from a pretend defender.",
    cue: "Parent cue: body between defender and ball.",
  },
  {
    title: "Pivot Clock",
    tag: "footwork",
    time: "4 min",
    body: "Keep one foot planted and pivot to point at 12, 3, 6, and 9 o'clock markers.",
    cue: "Parent cue: anchor foot stays glued.",
  },
  {
    title: "Ready Stance",
    tag: "footwork",
    time: "3 min",
    body: "Jump, land, and hold a balanced stance with knees bent and hands ready.",
    cue: "Parent cue: still body for two seconds.",
  },
  {
    title: "V-Cut Footwork",
    tag: "footwork",
    time: "5 min",
    body: "Sprint to one marker, plant the outside foot, then cut back to receive a pass.",
    cue: "Parent cue: sharp change of direction.",
  },
  {
    title: "Bounce Pass Tunnel",
    tag: "team",
    time: "5 min",
    body: "Aim bounce passes through a tunnel made with two shoes or cones.",
    cue: "Parent cue: bounce two-thirds of the way.",
  },
  {
    title: "Partner Clap Catch",
    tag: "team",
    time: "4 min",
    body: "Clap once before catching, then pass back with two hands.",
    cue: "Parent cue: eyes on the ball into hands.",
  },
  {
    title: "Lead Pass Step",
    tag: "team",
    time: "5 min",
    body: "Pass slightly ahead of a moving parent or sibling so they can catch while stepping forward.",
    cue: "Parent cue: pass to where they are going.",
  },
  {
    title: "Form Shot Hold",
    tag: "shooting",
    time: "4 min",
    body: "Shoot close to a hoop or wall target and hold the follow-through until the ball lands.",
    cue: "Parent cue: elbow under ball, fingers to target.",
  },
  {
    title: "Target Toss",
    tag: "shooting",
    time: "4 min",
    body: "Use a laundry basket, hoop, or chalk square as a target for soft shooting touch.",
    cue: "Parent cue: legs help the ball lift.",
  },
  {
    title: "Rebound Ready",
    tag: "shooting",
    time: "4 min",
    body: "After each shot or toss, chase the rebound, land balanced, and reset.",
    cue: "Parent cue: go after the ball quickly and safely.",
  },
  {
    title: "Find Space",
    tag: "game",
    time: "5 min",
    body: "Move to an open marker after passing, then show ready hands for the return pass.",
    cue: "Parent cue: pass, move, and face the ball.",
  },
  {
    title: "Coach Callout",
    tag: "game",
    time: "4 min",
    body: "React to calls like dribble, pass, pivot, shoot shape, or freeze.",
    cue: "Parent cue: listen first, then move.",
  },
  {
    title: "Decision Dribble",
    tag: "game",
    time: "5 min",
    body: "At each marker, choose to cross over, pass, pivot, or shoot shape based on the parent call.",
    cue: "Parent cue: quick choice with control.",
  },
  {
    title: "Shadow Slides",
    tag: "defense",
    time: "4 min",
    body: "Mirror a parent or sibling with short defensive slides while staying low and balanced.",
    cue: "Parent cue: chest up, feet apart, no crossing feet.",
  },
  {
    title: "Closeout Steps",
    tag: "defense",
    time: "4 min",
    body: "Start at a marker, move quickly to a parent, then finish with small choppy steps and hands high.",
    cue: "Parent cue: slow down under control at the end.",
  },
  {
    title: "Hands Active",
    tag: "defense",
    time: "3 min",
    body: "Hold a defensive stance while moving hands to block pretend passing lanes without reaching.",
    cue: "Parent cue: active hands, balanced feet.",
  },
  {
    title: "Box Out Basics",
    tag: "rebounding",
    time: "4 min",
    body: "Find a parent or marker, turn safely, make contact with hips back, then call ball.",
    cue: "Parent cue: turn, seal, then chase.",
  },
  {
    title: "Rebound Chin",
    tag: "rebounding",
    time: "3 min",
    body: "Toss the ball softly up, catch with two hands, and bring it strong under the chin.",
    cue: "Parent cue: two hands and strong elbows, no swinging.",
  },
  {
    title: "Miss and Chase",
    tag: "rebounding",
    time: "5 min",
    body: "Toss or shoot to a target, call shot, then chase the rebound and land in ready stance.",
    cue: "Parent cue: move as soon as the ball leaves the hand.",
  },
];

const games = [
  {
    title: "Treasure Dribble",
    tags: ["ball"],
    body: "Place three safe objects around the area. Dribble to collect one at a time without losing control.",
    score: "Treasures collected in 45 seconds",
  },
  {
    title: "Pass and Dash",
    tags: ["team", "footwork"],
    body: "Make five chest passes to a parent, sprint to a marker, then return for bounce passes.",
    score: "Clean pass-and-dash rounds in 60 seconds",
  },
  {
    title: "Shot Shape",
    tags: ["shooting"],
    body: "Score points for balanced feet, soft hands, and eyes on target before any basket counts.",
    score: "Great shot-shape reps in 60 seconds",
  },
  {
    title: "Freeze Coach",
    tags: ["footwork", "game"],
    body: "A parent calls freeze. Kids land in a jump stop, show balance, then restart on the whistle.",
    score: "Balanced freezes in 60 seconds",
  },
  {
    title: "Window Rush",
    tags: ["ball", "footwork"],
    body: "Use chalk gates or shoes. Dribble through as many windows as possible in 45 seconds.",
    score: "Windows dribbled through in 45 seconds",
  },
  {
    title: "Target Maker",
    tags: ["team", "shooting"],
    body: "Hit a wall target with a pass, then take a close form shot or target toss for a bonus point.",
    score: "Target-pass and shot combos in 60 seconds",
  },
  {
    title: "Pivot Escape",
    tags: ["footwork", "game"],
    body: "Start trapped on a marker. Pivot to find a passing lane, then pass to a parent or wall target.",
    score: "Pivot escapes completed in 45 seconds",
  },
  {
    title: "Traffic Light Challenge",
    tags: ["ball", "footwork"],
    body: "Green dribble, yellow low dribble, red jump stop, blue crossover, purple pivot.",
    score: "Correct traffic-light calls in 60 seconds",
  },
  {
    title: "Family Relay",
    tags: ["ball", "team", "footwork"],
    body: "Body wraps at base, slide to a marker, call a name, pass, and race back safely.",
    score: "Full relay rounds in 90 seconds",
  },
  {
    title: "Beat Your Best",
    tags: ["ball", "shooting"],
    body: "Pick one skill and one target. Record clean reps in a minute, rest, then try to beat it.",
    score: "Clean reps in 60 seconds",
  },
  {
    title: "Find the Open Spot",
    tags: ["team", "game"],
    body: "After every pass, move to a different marker and show ready hands before receiving again.",
    score: "Pass-move-catch sequences in 60 seconds",
  },
  {
    title: "Number Calls",
    tags: ["game", "ball", "team"],
    body: "Number four markers. Parent calls a number and a skill: dribble there, pivot, then pass back.",
    score: "Correct number calls in 60 seconds",
  },
  {
    title: "Rebound Race",
    tags: ["shooting", "footwork"],
    body: "Shoot or toss to a target, chase the rebound, land in ready stance, and return to base.",
    score: "Rebound resets in 60 seconds",
  },
  {
    title: "Copy Cat Handles",
    tags: ["ball"],
    body: "Parent or sibling leads with wraps, taps, low dribbles, and crossovers. Copy for 30 seconds.",
    score: "Correct handle moves in 30 seconds",
  },
  {
    title: "Coach Says",
    tags: ["game", "footwork"],
    body: "Like Simon Says: only move when the parent starts with Coach Says. Mix pivots, slides, and stops.",
    score: "Correct Coach Says moves in 60 seconds",
  },
  {
    title: "Pass Code",
    tags: ["team", "game"],
    body: "Create a three-pass pattern such as chest, bounce, overhead. Complete the code to score.",
    score: "Pass codes completed in 60 seconds",
  },
  {
    title: "Defender Mirror",
    tags: ["defense", "footwork"],
    body: "Parent leads with slow side steps. Kids mirror in a defensive stance and score for staying balanced.",
    score: "Balanced mirror changes in 45 seconds",
  },
  {
    title: "Closeout and Call",
    tags: ["defense", "game"],
    body: "Sprint to a marker, finish with choppy steps, hands high, then call ball, shot, or pass.",
    score: "Controlled closeouts in 60 seconds",
  },
  {
    title: "Passing Lane Patrol",
    tags: ["defense", "team"],
    body: "Parent points to passing lanes. Kids slide into the lane with active hands, then recover to stance.",
    score: "Passing lanes covered in 60 seconds",
  },
  {
    title: "Box Out Battle",
    tags: ["rebounding", "defense"],
    body: "On the call shot, turn to find a parent or marker, box out safely, then chase the ball.",
    score: "Box out and chase reps in 60 seconds",
  },
  {
    title: "Rebound and Outlet",
    tags: ["rebounding", "team"],
    body: "Catch a rebound with two hands, chin it, pivot, then make a safe outlet pass to a parent.",
    score: "Rebound-outlet combos in 60 seconds",
  },
  {
    title: "Board Chase",
    tags: ["rebounding", "shooting", "footwork"],
    body: "Shoot or toss, chase the rebound, land balanced, then score a bonus for a quick reset.",
    score: "Boards chased and reset in 60 seconds",
  },
];

const skillGrid = document.querySelector("#skill-grid");
const gameGrid = document.querySelector("#game-grid");
const sessionOutput = document.querySelector("#session-output");
const dailySkillName = document.querySelector("#daily-skill-name");
const dailySkillBody = document.querySelector("#daily-skill-body");
const dailySkillCue = document.querySelector("#daily-skill-cue");
const dailySkillTag = document.querySelector("#daily-skill-tag");
const dailySkillDiagram = document.querySelector("#daily-skill-diagram");
const filterButtons = document.querySelectorAll("[data-filter]");
const gameFilterButtons = document.querySelectorAll("[data-game-filter]");
const sessionButtons = document.querySelectorAll("[data-session]");
const focusButtons = document.querySelectorAll("[data-focus]");
const progressInputs = document.querySelectorAll("[data-progress]");
const meterFill = document.querySelector("#meter-fill");
const progressText = document.querySelector("#progress-text");
const resetProgress = document.querySelector("#reset-progress");
const currentStreakText = document.querySelector("#current-streak");
const bestStreakText = document.querySelector("#best-streak");
const nextGoalText = document.querySelector("#next-goal");
const badgeGrid = document.querySelector("#badge-grid");
const calendarGrid = document.querySelector("#progress-calendar");
const calendarMonthText = document.querySelector("#calendar-month");
const prevMonthButton = document.querySelector("#prev-month");
const nextMonthButton = document.querySelector("#next-month");
const streakGoals = [1, 3, 7, 14, 30, 50, 75, 100, 150, 200];
const calendarDate = new Date();
let progressWasComplete = false;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function readGameScores() {
  return JSON.parse(localStorage.getItem("homeCourtGameScores") || "{}");
}

function saveGameScores(scores) {
  localStorage.setItem("homeCourtGameScores", JSON.stringify(scores));
}

function getTopGameScores(gameId) {
  return readGameScores()[gameId] || [];
}

function formatScoreDate(dateKey) {
  const date = new Date(`${dateKey}T12:00:00`);
  return date.toLocaleDateString("en-AU", { day: "numeric", month: "short" });
}

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  return Math.floor(diff / 86400000);
}

function getSkillDiagram(skill) {
  const common = `
    <rect x="8" y="8" width="224" height="124" rx="12" />
    <path class="court-line" d="M120 8v124" />
    <circle class="marker start" cx="42" cy="70" r="8" />
  `;

  const diagrams = {
    ball: `
      ${common}
      <circle class="marker" cx="104" cy="38" r="7" />
      <circle class="marker" cx="146" cy="70" r="7" />
      <circle class="marker" cx="188" cy="102" r="7" />
      <path class="move-line" d="M42 70 C70 34 91 32 104 38 S130 73 146 70 S168 99 188 102" />
      <path class="arrow" d="M178 92l10 10-14 3" />
    `,
    footwork: `
      ${common}
      <circle class="marker" cx="80" cy="38" r="7" />
      <circle class="marker" cx="80" cy="102" r="7" />
      <circle class="marker" cx="178" cy="38" r="7" />
      <circle class="marker" cx="178" cy="102" r="7" />
      <path class="move-line" d="M42 70 L80 38 L178 38 L178 102 L80 102 L42 70" />
      <path class="arrow" d="M50 82l-8-12 14-1" />
    `,
    team: `
      ${common}
      <circle class="player" cx="72" cy="70" r="12" />
      <circle class="player" cx="174" cy="70" r="12" />
      <path class="pass-line" d="M84 70 H162" />
      <path class="arrow" d="M151 60l13 10-13 10" />
      <path class="move-line" d="M72 70 C86 48 98 38 116 34" />
    `,
    shooting: `
      ${common}
      <circle class="player" cx="76" cy="96" r="12" />
      <circle class="hoop" cx="184" cy="42" r="15" />
      <path class="pass-line" d="M84 90 C118 40 150 28 184 42" />
      <path class="arrow" d="M172 35l14 6-11 10" />
      <path class="court-line" d="M154 42h60" />
    `,
    defense: `
      ${common}
      <circle class="player" cx="78" cy="70" r="12" />
      <circle class="marker" cx="166" cy="70" r="10" />
      <path class="move-line" d="M78 70 H166" />
      <path class="move-line" d="M94 46 H150" />
      <path class="arrow" d="M140 36l12 10-12 10" />
      <path class="arrow" d="M102 84l-12-14 16-2" />
    `,
    rebounding: `
      ${common}
      <circle class="hoop" cx="180" cy="36" r="14" />
      <circle class="player" cx="92" cy="92" r="12" />
      <circle class="marker" cx="132" cy="70" r="9" />
      <path class="pass-line" d="M180 50 C166 78 146 91 104 94" />
      <path class="move-line" d="M92 92 C108 72 120 68 132 70" />
      <path class="arrow" d="M122 60l12 10-14 6" />
    `,
    game: `
      ${common}
      <circle class="marker" cx="82" cy="40" r="7" />
      <circle class="marker" cx="158" cy="40" r="7" />
      <circle class="marker" cx="158" cy="100" r="7" />
      <circle class="marker" cx="82" cy="100" r="7" />
      <path class="move-line" d="M42 70 L82 40 L158 40 L158 100 L82 100 L42 70" />
      <path class="pass-line" d="M82 100 L158 40" />
    `,
  };

  return `
    <svg viewBox="0 0 240 140" role="img" aria-label="${skill.title} practice diagram">
      ${diagrams[skill.tag] || diagrams.game}
    </svg>
  `;
}

function getGameAnimation(game) {
  const primaryTag = game.tags.find((tag) => ["ball", "team", "shooting", "footwork", "defense", "rebounding"].includes(tag)) || "game";
  const title = `${game.title} animated drill`;
  const className = `drill-animation ${primaryTag}`;

  return `
    <div class="${className}" aria-label="${title}" role="img">
      <svg viewBox="0 0 260 150" focusable="false">
        <rect class="court" x="8" y="8" width="244" height="134" rx="14" />
        <path class="court-line" d="M130 8v134" />
        <path class="key" d="M206 42h38v66h-38" />
        <circle class="hoop" cx="218" cy="75" r="12" />
        <circle class="cone cone-one" cx="48" cy="44" r="7" />
        <circle class="cone cone-two" cx="88" cy="106" r="7" />
        <circle class="cone cone-three" cx="154" cy="44" r="7" />
        <path class="route route-one" d="M42 105 C64 42 98 40 122 78 S171 112 205 74" />
        <path class="route route-two" d="M50 74 H190" />
        <path class="route route-three" d="M94 108 C112 82 143 69 178 58" />
        <circle class="player player-one" cx="42" cy="105" r="11" />
        <circle class="player player-two" cx="78" cy="72" r="10" />
        <circle class="ball" cx="42" cy="105" r="6" />
        <g class="sparkles" aria-hidden="true">
          <path d="M224 34v12M218 40h12" />
          <path d="M38 28v10M33 33h10" />
        </g>
      </svg>
    </div>
  `;
}

function renderDailySkill() {
  if (!dailySkillName || !dailySkillBody || !dailySkillCue || !dailySkillTag || !dailySkillDiagram) {
    return;
  }

  const todayIndex = (getDayOfYear() + new Date().getFullYear()) % skills.length;
  const skill = skills[todayIndex];
  dailySkillTag.textContent = `${skill.time} | ${focusLabels[skill.tag] || skill.tag}`;
  dailySkillName.textContent = skill.title;
  dailySkillDiagram.innerHTML = getSkillDiagram(skill);
  dailySkillBody.textContent = skill.body;
  dailySkillCue.textContent = skill.cue;
}

function renderScoreList(gameId) {
  const lists = document.querySelectorAll(`[data-score-list="${gameId}"]`);
  if (lists.length === 0) {
    return;
  }

  const scores = getTopGameScores(gameId);
  if (scores.length === 0) {
    lists.forEach((list) => {
      list.innerHTML = "<li>No scores yet</li>";
    });
    return;
  }

  const scoreMarkup = scores
    .map((score, index) => `<li><span>#${index + 1}</span><strong>${score.value}</strong><small>${formatScoreDate(score.date)}</small></li>`)
    .join("");

  lists.forEach((list) => {
    list.innerHTML = scoreMarkup;
  });
}

function saveGameScore(gameId, value) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue) || numericValue < 0) {
    return;
  }

  const scores = readGameScores();
  const gameScores = scores[gameId] || [];
  gameScores.push({ value: numericValue, date: getTodayKey() });
  scores[gameId] = gameScores.sort((a, b) => b.value - a.value).slice(0, 3);
  saveGameScores(scores);
  renderScoreList(gameId);
  showCelebration("Record saved. Chase the next best!");
}

function showCelebration(message) {
  let toast = document.querySelector(".fun-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "fun-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.append(toast);
  }

  toast.textContent = message;
  toast.classList.remove("show");
  window.requestAnimationFrame(() => {
    toast.classList.add("show");
  });
  window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function renderSkills(filter = "all") {
  if (!skillGrid) {
    return;
  }

  skillGrid.innerHTML = "";
  skills
    .filter((skill) => filter === "all" || skill.tag === filter)
    .forEach((skill) => {
      const card = document.createElement("article");
      card.className = "skill-card";
      card.innerHTML = `
        <span>${skill.time} | ${skill.tag}</span>
        <h3>${skill.title}</h3>
        <div class="skill-diagram" aria-hidden="true">${getSkillDiagram(skill)}</div>
        <p>${skill.body}</p>
        <div class="cue">${skill.cue}</div>
      `;
      skillGrid.append(card);
    });
}

function renderGames(filter = "all") {
  if (!gameGrid) {
    return;
  }

  gameGrid.innerHTML = "";
  games
    .filter((game) => filter === "all" || game.tags.includes(filter))
    .forEach((game, index) => {
      const gameId = slugify(game.title);
      const card = document.createElement("article");
      card.innerHTML = `
        <span class="number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${game.title}</h3>
        ${getGameAnimation(game)}
        <p>${game.body}</p>
        <div class="game-tags">${game.tags.join(" + ")}</div>
        <form class="score-form" data-score-form="${gameId}">
          <label>
            <span>${game.score}</span>
            <input type="number" min="0" step="1" inputmode="numeric" placeholder="Score" required />
          </label>
          <button class="button score-button" type="submit">Save score</button>
        </form>
        <div class="top-scores">
          <strong>Top 3</strong>
          <ol data-score-list="${gameId}"></ol>
        </div>
      `;
      gameGrid.append(card);
      renderScoreList(gameId);
    });
}

function getSessionPlan(minutes, focus) {
  const skillCount = sessionSkillCounts[minutes] || 1;
  const focusSkills = skills.filter((skill) => skill.tag === focus).slice(0, skillCount);
  const focusGame = games.find((game) => game.tags.includes(focus));
  const plan = [
    {
      label: "Warm up",
      title: warmups[focus]?.title || "Mirror Moves",
      body: warmups[focus]?.body || "Copy a parent's footwork, arm swings, and jump stops for 2 minutes.",
    },
    ...focusSkills.map((skill, index) => ({
      label: skillCount === 1 ? "Skill" : `Skill ${index + 1}`,
      title: skill.title,
      body: skill.body,
    })),
  ];

  if (focusGame) {
    plan.push({
      label: "Game",
      title: focusGame.title,
      body: `${focusGame.body} Focus: ${focusLabels[focus]}.`,
      score: focusGame.score,
      gameId: slugify(focusGame.title),
      animation: getGameAnimation(focusGame),
    });
  }

  return plan;
}

function getActiveSessionValue() {
  return document.querySelector("[data-session].active")?.dataset.session || "10";
}

function getActiveFocusValue() {
  return document.querySelector("[data-focus].active")?.dataset.focus || "ball";
}

function setSession(minutes = getActiveSessionValue(), focus = getActiveFocusValue()) {
  const plan = getSessionPlan(minutes, focus);
  if (!sessionOutput || !plan) {
    return;
  }

  sessionOutput.innerHTML = "";
  sessionOutput.dataset.steps = plan.length;

  plan.forEach((step) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <span class="step-label">${step.label}</span>
      <strong>${step.title}</strong>
      ${step.animation || ""}
      <small>${step.body}</small>
      ${
        step.gameId
          ? `
            <form class="score-form session-score-form" data-score-form="${step.gameId}">
              <label>
                <span>${step.score}</span>
                <input type="number" min="0" step="1" inputmode="numeric" placeholder="Score" required />
              </label>
              <button class="button score-button" type="submit">Save record</button>
            </form>
          `
          : ""
      }
    `;
    sessionOutput.append(card);
  });
}

function getTodayKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function shiftDateKey(dateKey, offsetDays) {
  const date = new Date(`${dateKey}T12:00:00`);
  date.setDate(date.getDate() + offsetDays);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function readProgressHistory() {
  return JSON.parse(localStorage.getItem("homeCourtProgressByDate") || "{}");
}

function saveProgressHistory(history) {
  localStorage.setItem("homeCourtProgressByDate", JSON.stringify(history));
}

function readCompletedDays() {
  return JSON.parse(localStorage.getItem("homeCourtCompletedDays") || "[]");
}

function saveCompletedDays(days) {
  localStorage.setItem("homeCourtCompletedDays", JSON.stringify([...new Set(days)].sort()));
}

function countStreakFrom(startKey, completedSet) {
  let streak = 0;
  let cursor = startKey;

  while (completedSet.has(cursor)) {
    streak += 1;
    cursor = shiftDateKey(cursor, -1);
  }

  return streak;
}

function getCurrentStreak(completedDays) {
  const completedSet = new Set(completedDays);
  const todayKey = getTodayKey();
  const startKey = completedSet.has(todayKey) ? todayKey : shiftDateKey(todayKey, -1);
  return countStreakFrom(startKey, completedSet);
}

function getBestStreak(completedDays) {
  const completedSet = new Set(completedDays);
  return completedDays.reduce((best, day) => Math.max(best, countStreakFrom(day, completedSet)), 0);
}

function renderStreaks() {
  if (!currentStreakText || !bestStreakText || !nextGoalText || !badgeGrid) {
    return;
  }

  const completedDays = readCompletedDays();
  const currentStreak = getCurrentStreak(completedDays);
  const bestStreak = getBestStreak(completedDays);
  const nextGoal = streakGoals.find((goal) => goal > bestStreak);

  currentStreakText.textContent = `${currentStreak} ${currentStreak === 1 ? "day" : "days"}`;
  bestStreakText.textContent = `${bestStreak} ${bestStreak === 1 ? "day" : "days"}`;
  nextGoalText.textContent = nextGoal ? `${nextGoal - currentStreak} days to ${nextGoal}` : "200+ days";

  badgeGrid.innerHTML = "";
  streakGoals.forEach((goal) => {
    const unlocked = bestStreak >= goal;
    const badge = document.createElement("article");
    badge.className = `badge-card${unlocked ? " unlocked" : ""}`;
    badge.innerHTML = `
      <span>${unlocked ? "Unlocked" : "Goal"}</span>
      <strong>${goal}</strong>
      <small>${goal} day streak</small>
    `;
    badgeGrid.append(badge);
  });
}

function renderCalendar() {
  if (!calendarGrid || !calendarMonthText) {
    return;
  }

  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const todayKey = getTodayKey();
  const history = readProgressHistory();
  const completedDays = new Set(readCompletedDays());
  const firstDay = new Date(year, month, 1);
  const totalDays = new Date(year, month + 1, 0).getDate();
  const leadingBlanks = (firstDay.getDay() + 6) % 7;

  calendarMonthText.textContent = firstDay.toLocaleDateString("en-AU", {
    month: "long",
    year: "numeric",
  });

  calendarGrid.innerHTML = "";
  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].forEach((day) => {
    const label = document.createElement("div");
    label.className = "calendar-weekday";
    label.textContent = day;
    calendarGrid.append(label);
  });

  for (let blank = 0; blank < leadingBlanks; blank += 1) {
    const empty = document.createElement("div");
    empty.className = "calendar-day empty";
    calendarGrid.append(empty);
  }

  for (let day = 1; day <= totalDays; day += 1) {
    const date = new Date(year, month, day);
    const dateKey = toDateKey(date);
    const dayProgress = history[dateKey] || {};
    const started = Object.values(dayProgress).some(Boolean);
    const complete = completedDays.has(dateKey);
    const dayStreak = complete ? countStreakFrom(dateKey, completedDays) : 0;
    const milestone = streakGoals.includes(dayStreak);
    const cell = document.createElement("div");
    cell.className = `calendar-day${started ? " started" : ""}${complete ? " complete" : ""}${milestone ? " milestone" : ""}${dateKey === todayKey ? " today" : ""}`;
    cell.innerHTML = `
      <strong>${day}</strong>
      <span>${
        milestone
          ? `<i class="goal-stamp" aria-label="${dayStreak} day goal reached"></i>`
          : complete
            ? '<i class="basketball-stamp" aria-label="Completed"></i>'
            : started
              ? "Started"
              : ""
      }</span>
    `;
    calendarGrid.append(cell);
  }
}

function updateProgress() {
  if (!meterFill || !progressText || progressInputs.length === 0) {
    return;
  }

  const checked = [...progressInputs].filter((input) => input.checked).length;
  const complete = checked === progressInputs.length;
  const percent = (checked / progressInputs.length) * 100;
  meterFill.style.width = `${percent}%`;
  progressText.textContent = `${checked} of ${progressInputs.length} complete`;
  const todayKey = getTodayKey();
  const history = readProgressHistory();

  history[todayKey] = [...progressInputs].reduce((data, input) => {
    data[input.dataset.progress] = input.checked;
    return data;
  }, {});

  saveProgressHistory(history);

  const completedDays = new Set(readCompletedDays());
  if (complete) {
    completedDays.add(todayKey);
  } else {
    completedDays.delete(todayKey);
  }
  saveCompletedDays([...completedDays]);
  renderStreaks();
  renderCalendar();

  if (complete && !progressWasComplete) {
    showCelebration("Daily goal complete. Streak power!");
  }
  progressWasComplete = complete;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderSkills(button.dataset.filter);
  });
});

gameFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    gameFilterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderGames(button.dataset.gameFilter);
  });
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-score-form]");
  if (!form) {
    return;
  }

  event.preventDefault();
  const input = form.querySelector("input");
  saveGameScore(form.dataset.scoreForm, input.value);
  input.value = "";
});

sessionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sessionButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    setSession(button.dataset.session, getActiveFocusValue());
  });
});

focusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    focusButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    setSession(getActiveSessionValue(), button.dataset.focus);
  });
});

progressInputs.forEach((input) => {
  input.addEventListener("change", updateProgress);
});

if (resetProgress) {
  resetProgress.addEventListener("click", () => {
    progressInputs.forEach((input) => {
      input.checked = false;
    });
    updateProgress();
  });
}

if (prevMonthButton) {
  prevMonthButton.addEventListener("click", () => {
    calendarDate.setMonth(calendarDate.getMonth() - 1);
    renderCalendar();
  });
}

if (nextMonthButton) {
  nextMonthButton.addEventListener("click", () => {
    calendarDate.setMonth(calendarDate.getMonth() + 1);
    renderCalendar();
  });
}

const savedProgress = JSON.parse(localStorage.getItem("homeCourtProgress") || "{}");
const savedHistory = readProgressHistory();
const todayProgress = savedHistory[getTodayKey()] || savedProgress;
progressInputs.forEach((input) => {
  input.checked = Boolean(todayProgress[input.dataset.progress]);
});
progressWasComplete = progressInputs.length > 0 && [...progressInputs].every((input) => input.checked);

renderSkills();
renderGames();
renderDailySkill();
setSession();
updateProgress();
renderStreaks();
renderCalendar();
