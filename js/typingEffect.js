const cSnippets = [
    'printf("Hello, World!\\n");',
    'for(int i = 0; i < 10; i++) { printf("%d ", i); }',
    'int fibonacci(int n) { return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2); }',
    'struct Node { int data; struct Node *next; };',
    'void quicksort(int arr[], int low, int high) { /* ... */ }',
    'int binarySearch(int arr[], int x) { /* binary search algorithm */ }',
    'printf("Sorting array...");',
    'while(head != NULL) { printf("%d ", head->data); head = head->next; }',
    'int factorial(int n) { return n <= 1 ? 1 : n * factorial(n - 1); }'
];

let snippetIndex = 0;
let charIndex = 0;
const typingSpeed = 100;  // milliseconds per character
const delayBetweenSnippets = 2000;  // delay before typing the next snippet
const typingTextElement = document.getElementById('typing-text');

function typeSnippet() {
    if (charIndex < cSnippets[snippetIndex].length) {
        typingTextElement.textContent += cSnippets[snippetIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeSnippet, typingSpeed);
    } else {
        // Pause, then clear and move to the next snippet
        setTimeout(() => {
            typingTextElement.textContent = '';
            charIndex = 0;
            snippetIndex = (snippetIndex + 1) % cSnippets.length;
            typeSnippet();
        }, delayBetweenSnippets);
    }
}

document.addEventListener('DOMContentLoaded', typeSnippet);

