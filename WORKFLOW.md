# FE-03: AI-Assisted Workflow Drill

## Objective

I built a settings form in two separate branches to compare a vague AI prompt with a precise, verification-focused prompt. The goal was to evaluate correctness, accessibility, edge-case handling, and the effort required to review AI-generated code.

## Round 1: Vague Prompt

**Branch:** `fe03-round1-vague`

I used the prompt: “Build a settings form for my project.” The AI generated a React/Vite application with TypeScript, styling, and a test. The result included a settings interface, but the initial test only checked that the settings heading and display name field rendered. This provided limited evidence that the form behaved correctly.

The scaffold also deleted the existing `CLAUDE.md` and `LICENSE` files. This was an important mistake to catch: generating a working interface should not silently remove existing project documentation.

## Round 2: Precise Prompt

**Branch:** `fe03-round2-precise`

I instructed the AI to inspect the repository first, explain its plan, reuse existing dependencies, implement validation and accessible messages, write tests, run verification commands, and report actual results. The resulting implementation used static HTML, CSS, and JavaScript rather than the React/Vite structure produced in Round 1.

The tests covered labeled fields, required-name and invalid-email validation, accessible errors, successful submission, and notification toggling. Five tests passed. The syntax check, `npm run check`, also completed successfully.

During browser testing, I caught a submission bug: clicking Save changed the URL to include form values. Although the handler already called `preventDefault()`, the JavaScript module was not executing when the page was opened directly from disk. The AI changed the script loading approach and strengthened the tests. Afterward, the success message appeared without adding form values to the URL. The message correctly stated that no data was sent to a server.

## Comparison

- **Correctness:** Round 2 provided stronger evidence through five behavior-focused tests; Round 1's single rendering test was limited.
- **Accessibility:** Round 2 explicitly addressed associated labels and field-specific validation messages. These should still be checked with keyboard and assistive-technology testing.
- **Edge cases:** Round 2 covered empty names, invalid emails, valid submission, and notification toggling. The URL-submission bug showed why browser testing matters even when code appears correct.
- **Review effort:** Round 2 required checking more behaviors and running additional verification. I did not record timed review measurements, so I cannot quantify the difference.

## Lessons Learned

A precise prompt makes requirements and verification expectations clearer, but AI output still needs review. I learned to inspect repository changes, protect existing files, test invalid as well as valid input, verify behavior in the browser, and report only checks that actually ran. The form currently demonstrates client-side behavior; it does not persist settings to a backend.