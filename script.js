const data = {
  me: "Francisco Martínez Lasaca",
  title: "Industrial PhD Student",
  twitter: "https://twitter.com/fmlasaca",
  linkedin: "https://www.linkedin.com/in/fmlasaca",
  mastodon: "https://techhub.social/@fmlasaca",
  description:
    "I am a doctoral student in Computer Science at the Autonomous University of Madrid (UAM), Spain. My Ph.D. is entitled 'Scalable Cloud-Based Heterogeneous Modelling,' and it is part of the Marie Skłodowska-Curie European project Lowcomote. The project is carried out in cooperation with the Madrid-based company UGROUND.",
  education: [
    {
      degree: "PhD in Computer Science",
      institution: "Autonomous University of Madrid",
      when: "2021–",
    },
    {
      degree: "Master of Science in Computer Science",
      institution: "IT University of Copenhagen, Denmark",
      when: "2019–2021",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Polytechnic University of Catalonia, Spain",
      when: "2015–2019",
    },
  ],
};

function processUnknownJsonElement(o) {
  if (o === null) {
    return processPrimitive(o);
  }
  if (typeof o === "object") {
    if (Array.isArray(o)) {
      return processArray(o);
    } else {
      return processObject(o);
    }
  } else {
    return processPrimitive(o);
  }
}

function primitiveToText(o) {
  if (o === null) return "null";
  if (o === undefined) return "undefined";
  if (typeof o === "string") return o;
  if (typeof o === "number") return o.toString();
  if (typeof o === "boolean") return o.toString();
  return o.toString();
}

function processPrimitive(o) {
  const div = document.createElement("div");
  // Add quotes to strings
  const openQuotesSpan = document.createElement("span");
  openQuotesSpan.innerText = '"';
  openQuotesSpan.classList.add("json");

  const closeQuotesSpan = document.createElement("span");
  closeQuotesSpan.innerText = '"';
  closeQuotesSpan.classList.add("json");

  // Whatever o is, we want to display it as a string
  const oAsString = primitiveToText(o);

  // If it seems like a URL, make it a link
  if (oAsString.startsWith("http")) {
    const a = document.createElement("a");
    a.href = oAsString;
    a.innerText = oAsString;
    a.target = "_blank";
    div.appendChild(a);
  } else {
    div.innerText = oAsString
  }

  div.prepend(openQuotesSpan);
  div.appendChild(closeQuotesSpan);
  return div;
}

function processArray(a) {
  // a is an array

  const openBracketSpan = document.createElement("div");
  openBracketSpan.innerText = "[";
  openBracketSpan.classList.add("json");

  const inner = document.createElement("div");
  inner.classList.add("tableLike");
  inner.classList.add("indent");

  for (const element of a) {
    const line = document.createElement("div");
    line.classList.add("arrayEntry");
    const processed = processUnknownJsonElement(element);
    line.appendChild(processed);

    // Recursively go to the deepest level of processed to insert ","
    function insertComma(node) {
      if (node.children.length === 0) {
        const commaSpan = document.createElement("span");
        commaSpan.innerText = ",";
        commaSpan.classList.add("json");
        node.appendChild(commaSpan);
      } else {
        // Go to the last child
        insertComma(node.children[node.children.length - 1]);
      }
    }

    const isLastElement = a.indexOf(element) === a.length - 1;
    if (!isLastElement) insertComma(processed);

    inner.appendChild(line);
  }

  const closeBracketSpan = document.createElement("div");
  closeBracketSpan.innerText = "]";
  closeBracketSpan.classList.add("json");

  const div = document.createElement("div");
  div.appendChild(openBracketSpan);
  div.appendChild(inner);
  div.appendChild(closeBracketSpan);

  return div;
}

function processObject(o) {
  // o is an object

  const open = document.createElement("div");
  open.innerHTML = "{";
  open.classList.add("json");

  const inner = document.createElement("div");
  inner.classList.add("indent");
  inner.classList.add("tableLike");

  const allKeys = Object.keys(o);

  // Iterate knowing which one is the last
  for (let i = 0; i < allKeys.length; i++) {
    const key = allKeys[i];
    const value = o[key];

    const previousQuote = document.createElement("span");
    previousQuote.classList.add("json");
    previousQuote.innerText = '"';

    const keySpan = document.createElement("span");
    keySpan.classList.add("key");
    keySpan.innerText = key;

    const dotsSpan = document.createElement("span");
    dotsSpan.classList.add("json");
    dotsSpan.innerText = '": ';

    const grouped = document.createElement("div");
    grouped.appendChild(previousQuote);
    grouped.appendChild(keySpan);
    grouped.appendChild(dotsSpan);

    const valueSpan = processUnknownJsonElement(value);

    // Recursively go to the deepest level of valueSpan to insert ","

    function insertComma(span) {
      if (span.children.length === 0) {
        const commaSpan = document.createElement("span");
        commaSpan.classList.add("json");
        commaSpan.innerText = ",";
        span.appendChild(commaSpan);
      } else {
        // Insert a comma in the last child
        insertComma(span.children[span.children.length - 1]);
      }
    }

    const isLast = i === allKeys.length - 1;
    if (!isLast) insertComma(valueSpan);

    const line = document.createElement("div");
    line.classList.add("line");
    line.appendChild(grouped);
    line.appendChild(valueSpan);

    inner.appendChild(line);
  }

  const close = document.createElement("div");
  close.innerHTML = "}";
  close.classList.add("json");

  const div = document.createElement("div");
  div.appendChild(open);
  div.appendChild(inner);
  div.appendChild(close);

  return div;
}

function toggleJson() {
  document.getElementById("root").classList.toggle("showFancy");
}

// on load
window.onload = () => {
  document.getElementById("togglejson").addEventListener("click", toggleJson);
  document.getElementById("root").appendChild(processUnknownJsonElement(data));
};
