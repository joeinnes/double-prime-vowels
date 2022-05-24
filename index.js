function doublePrimeVowels(options) {
  const { lowerCaseOffset = -0.1, upperCaseOffset = -0.3 } = options;

  const styleTag = `<style>
.hun, .hun-up {
	position: relative;
}

.hun:before {
	content: '″';
	position: absolute;
	top: ${lowerCaseOffset}em;
	left: 50%;
  transform: translateX(-45%);
}

.hun-up:before {
	content: '″';
	position: absolute;
	top: ${upperCaseOffset}em;
	left: 50%;
  transform: translateX(-45%);
}
</style>
`;

  let rawText = document.body.innerHTML;
  rawText = rawText.replaceAll("ő", '<span class="hun">o</span>');
  rawText = rawText.replaceAll("ű", '<span class="hun">u</span>');
  rawText = rawText.replaceAll("Ő", '<span class="hun-up">O</span>');
  rawText = rawText.replaceAll("Ű", '<span class="hun-up">U</span>');

  document.body.innerHTML = rawText;
  document.body.appendChild(document.createElement("style")).outerHTML =
    styleTag;
}

export default doublePrimeVowels;
