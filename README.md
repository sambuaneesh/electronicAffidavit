# Instructions to Install

## 1.Clone this repository and go to the repository directory:

```bash
git clone https://github.com/stealthspectre/electronicAffidavit
cd electronicAffidavit
```

---

## 2.Inside the repository, clone yolov5 repository:

```bash
git clone https://github.com/ultralytics/yolov5
```

---

## 3.Install server dependencies:

```bash
npm install
```

---

## 4.If using conda, setup environment using the following command (recommended method):

```bash
conda env create -f environment.yml
```

(or)

### Alternatively, if using pip only, install requirements from the requirements.txt file:

```bash
pip install -r requirements.txt
```

---

## 5.Install client modules:

```bash
cd client
npm install
npm audit fix --force
```

---

## 6.To run the app, return to the base directory and run the following command:

```bash
cd ..
npm run dev
```

---
