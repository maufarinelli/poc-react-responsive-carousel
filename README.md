# POC - react-responsive-carousel ADA complaint

# Slider a11y compliant

Based on [https://www.w3.org/WAI/tutorials/carousels/](https://www.w3.org/WAI/tutorials/carousels/)

## What makes a carousel accessible?

- Users must be able to pause carousel movement because it can be too fast or distracting, making text hard to read.
- All functionality, including navigating between carousel items, must be operable by keyboard.
- Changes to carousel items must be communicated to all users, including screen reader users.
- The keyboard position (“focus”) is managed in a reasonable and comprehensible fashion.

## Checklist

### Structure

- [ ] a collection of content items, carousels are typically best represented as unordered lists, using `<ul>` and `<li>`
- [ ] should be enclosed in a labeled region
- [ ] carousel items can be any content

### Functionality

- [ ] Add previous and next <button>s
- [ ] Use `aria-live="polite"` and a textContent to inform screen reader users what item is currently shown
- [ ] Add navigation buttons (dots or numbers below) containing text that is visually hidden (for screen readers).
- [ ] When users select an item with those navigation buttons, the focus should be set on the selected item.

### Animation

- [ ] Add Play/Stop button if autoplay is on
- [ ] Pause on mouse hover and keyboard focus
- [ ] Hiding transitioning elements from assistive technologies, using 'aria-hidden="true"' in transition (nice to have, but not necessary if the screen reader is able to inform users what item is currently shown )

### Styling

- [ ] Buttons and links that are not inline in a block of text should be at least 44 × 44 CSS pixels
- [ ] Ensure sufficient contrast between the foreground and the background of text, links, and buttons
- [ ] Indicate navigation buttons status both in color and shape (in addition to proper naming and labeling)
