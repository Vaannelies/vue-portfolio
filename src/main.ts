import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

window.addEventListener("DOMContentLoaded", () => {
  const creativeTextEl: HTMLElement | null =
    document.querySelector(".title-creative");
  if (creativeTextEl) {
    const creativeText = "creative";
    for (let i = 0; i < creativeText.length; i++) {
      addChar(i, creativeText[i], creativeTextEl);
    }

    setTimeout(() => {
      blinkText(creativeTextEl, 3);
    }, 1000);

    setTimeout(() => {
      loopEl(creativeTextEl, 20);
    }, 1700);
  }

  setToolsContainerEventListener();
});

function addChar(index: number, char: string, parent: HTMLElement) {
  setTimeout(() => {
    const span = document.createElement("span");
    span.innerText = char;
    parent.appendChild(span);
  }, 100 * index);
}

function blinkText(el: HTMLElement, a: number) {
  const spans = el.querySelectorAll("span");
  spans.forEach((span: HTMLElement) => {
    span.classList.add("--outline");
  });

  const hero: HTMLElement | null = document.querySelector(".hero");
  hero?.setAttribute("style", "background: black");

  for (let i = 0; i < a; i++) {
    setTimeout(() => {
      hero?.setAttribute("style", "background: white");
    }, 200 * i);
    setTimeout(() => {
      hero?.setAttribute("style", "background: black");
    }, 200 * i + 100);
  }
}

function loopEl(el: HTMLElement, a: number) {
  for (let i = 0; i < a; i++) {
    setTimeout(() => {
      const newEl: any = el.cloneNode(true);
      newEl.setAttribute(
        "style",
        `top: -${10 * i}px; left: -${10 * i}px; position: absolute; opacity: ${
          1 - i / 20
        };`
      );
      el?.parentElement?.appendChild(newEl);
    }, 40 * i);
  }
}

function setToolsContainerEventListener() {
  const tools = [
    { name: "Android Studio", image: new URL("./assets/img/logo-android.svg", import.meta.url).href },
    { name: "Arduino", image: new URL("./assets/img/logo-arduino.svg", import.meta.url).href  },
    { name: "git", image: new URL("./assets/img/logo-git.svg", import.meta.url).href  },
    { name: "HTML", image: new URL("./assets/img/logo-html.svg", import.meta.url).href  },
    { name: "WordPress", image: new URL("./assets/img/logo-wp.svg", import.meta.url).href  },
    { name: "SQL", image: new URL("./assets/img/logo-sql.svg", import.meta.url).href  },
    { name: "Figma", image: new URL("./assets/img/logo-figma.svg", import.meta.url).href  },
    { name: "LESS", image: new URL("./assets/img/logo-less.svg", import.meta.url).href  },
    { name: "Processing", image: new URL("./assets/img/logo-processing.svg", import.meta.url).href  },
    { name: "CSS", image: new URL("./assets/img/logo-css.svg", import.meta.url).href  },
    { name: "Smarty", image: new URL("./assets/img/logo-smarty.svg", import.meta.url).href  },
    { name: "Twig", image: new URL("./assets/img/logo-twig.svg", import.meta.url).href  },
    { name: "PlugData", image: new URL("./assets/img/logo-pd.svg", import.meta.url).href  },
    { name: "Kotlin", image: new URL("./assets/img/logo-kotlin.svg", import.meta.url).href  },
    { name: "Laravel", image: new URL("./assets/img/logo-laravel.svg", import.meta.url).href  },
  ];

  let toolsContainerExpanded = false;
  window.addEventListener("scroll", (event) => {
    const toolsContainerEl: HTMLElement | null =
      document.querySelector(".tools__container__wrapper");
    const bottom: number =
      toolsContainerEl?.getBoundingClientRect().bottom || 0;
    if (bottom + 100 < window.innerHeight && !toolsContainerExpanded) {
      tools.forEach((tool, i) => {
        setTimeout(() => {
          const img = document.createElement("img");
          img.src = tool.image;
          const div = document.createElement("div");
          div.className = "grid-item";
          div.appendChild(img);
          div.append(tool.name);
          toolsContainerEl?.children[0]?.appendChild(div);
          div.addEventListener("mousemove", (e: MouseEvent) => {
            const { x, y } = div.getBoundingClientRect();
            div.style.setProperty("--x", (e.clientX - x).toString());
            div.style.setProperty("--y", (e.clientY - y).toString());
            console.log(x, y);
          });
        }, 50 * i);
      });

      toolsContainerExpanded = true;
      toolsContainerEl?.appendChild;

      if (toolsContainerExpanded) {
        const buttons: any = document.querySelectorAll(".grid-item");
        buttons.forEach((button: HTMLElement) => {
          button.addEventListener("mousemove", (e: MouseEvent) => {
            const { x, y } = button.getBoundingClientRect();
            button.style.setProperty("--x", (e.clientX - x).toString());
            button.style.setProperty("--y", (e.clientY - y).toString());
            console.log(x, y);
          });
        });
      }
    }
  });
}
