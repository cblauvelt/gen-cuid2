# gen-cuid2

A simple CLI tool to generate [CUID2](https://github.com/paralleldrive/cuid2) IDs of customizable length.

![GitHub Actions](https://github.com/cblauvelt/gen-cuid2/actions/workflows/test.yml/badge.svg)

---

## 🚀 Features

* Generates one or more **CUID2 IDs**.
* Customize the **number of IDs** and the **length** of each ID.
* Works cross-platform (Linux, macOS, Windows).

---

## 📦 Installation

### ✅ From **npm** (recommended)

Install globally from npm:

```bash
sudo npm install -g gen-cuid2
```

Then use it:

```bash
gen-cuid2
```

### ⚙️ From **source** (for development / custom builds)

```bash
# Clone the repository
git clone https://github.com/cblauvelt/gen-cuid2.git
cd gen-cuid2

# Install dependencies
npm install

# Build the project
npm run build

# Install globally
sudo npm install -g .
```

---

## 💻 Usage

### Generate a single CUID2 (default)

```bash
gen-cuid2
```

### Generate multiple CUID2s

```bash
gen-cuid2 --count 5
```

or

```bash
gen-cuid2 -c 5
```

### Specify the length of the IDs

```bash
gen-cuid2 --length 32
```

or

```bash
gen-cuid2 -l 32
```

### Combine options

```bash
gen-cuid2 --count 3 --length 40
```

---

## 🛠️ Development

To run tests:

```bash
npm run build
npm test
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 🐛 Issues

Found a bug? Please open an issue here:
[https://github.com/cblauvelt/gen-cuid2/issues](https://github.com/cblauvelt/gen-cuid2/issues)

---

## 🌐 Links

* [NPM package (coming soon)](https://www.npmjs.com/package/gen-cuid2)
* [GitHub repository](https://github.com/cblauvelt/gen-cuid2)

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to open a pull request or an issue.

---

> **Maintainer**: [Christopher Blauvelt](https://github.com/cblauvelt)
