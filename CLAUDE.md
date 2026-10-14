## Code Quality

Before considering a change complete:

- Check for TypeScript errors.
- Review AI-generated code before committing.
- Verify the UI behavior.
- Check accessibility considerations.
- Avoid unnecessary code or dependencies.
- Keep the implementation simple and maintainable.

## FE-03 Settings Form Rules

1. **Accessibility:** Every form input must have a visible, associated label. Validation errors must be clear and accessible.
2. **Validation:** The display name is required, and the email must have a valid format. Invalid submissions must not show a success message.
3. **Submission:** Prevent default browser form submission. Do not put form values in the URL or claim server-side persistence; this project currently demonstrates client-side behavior only.
4. **Testing:** After changing the settings form, run `npm test` and `npm run check`. Fix failures before committing.
5. **Focused changes:** Reuse existing dependencies and avoid unrelated file deletions or unnecessary packages.
6. **Honest verification:** Report only checks that were actually run and state any remaining limitations.