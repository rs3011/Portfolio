# Contributing to Dark Mode Portfolio

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check the issue list as you might find out that you don't need to create one. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots if possible**
- **Include your environment (OS, browser, Node.js version)**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and expected behavior**
- **Explain why this enhancement would be useful**

### Pull Requests

- Fill in the PR template completely
- Follow the code style conventions
- Include appropriate test cases
- Update documentation as needed
- End all files with a newline character

## Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/rs3011/DarkModePortfolio.git
   cd DarkModePortfolio
   ```

2. **Create a branch for your changes**
   ```bash
   git checkout -b feature/my-feature
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Make your changes**

5. **Run tests and checks**
   ```bash
   npm run check
   npm run build
   ```

6. **Commit your changes**
   ```bash
   git commit -m "feat: add my feature"
   ```
   Use conventional commits format: `type(scope): description`
   - `feat`: A new feature
   - `fix`: A bug fix
   - `docs`: Documentation only changes
   - `style`: Changes that don't affect code meaning (formatting, missing semicolons, etc)
   - `refactor`: A code change that neither fixes a bug nor adds a feature
   - `perf`: A code change that improves performance
   - `test`: Adding missing tests or correcting existing tests

7. **Push to your fork**
   ```bash
   git push origin feature/my-feature
   ```

8. **Submit a Pull Request**

## Code Style

### TypeScript
- Use TypeScript for all new code
- Enable strict mode in tsconfig
- Use meaningful variable names
- Add JSDoc comments for complex functions

### React Components
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use TypeScript for prop types

### Styling
- Use Tailwind CSS classes for styling
- Follow the design system defined in `design_guidelines.md`
- Maintain responsive design
- Test on multiple screen sizes

### Commit Messages
Follow the Conventional Commits specification:
```
type(scope): subject

body

footer
```

Example:
```
feat(hero): add glitch animation effect

Implement new glitch text animation for hero section
using CSS animations with reduced motion support.

Fixes #123
```

## Testing

- Write tests for new features
- Ensure existing tests pass
- Maintain or improve code coverage
- Test on multiple browsers

## Documentation

- Update README.md if adding new features
- Document API changes
- Add comments for complex logic
- Keep design guidelines updated

## Questions?

Feel free to create a discussion or open an issue for questions. The maintainers are here to help!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing! 🎉**
