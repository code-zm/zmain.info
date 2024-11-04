const cSnippets = [
    `#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    return 0;
}`,

    `int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}`,

    `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
}`,

    `struct Node {
    int data;
    struct Node* next;
};
void printList(struct Node* n) {
    while (n != NULL) {
        printf("%d ", n->data);
        n = n->next;
    }
}`,

    `int binarySearch(int arr[], int size, int target) {
    int left = 0, right = size - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`
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

