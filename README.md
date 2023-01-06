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
conda create -n newEnv python=3.8
conda activate newEnv
pip install -r requirements.txt
```

(or)

### Alternatively, if using pip only, install requirements from the requirements.txt file:
(Highly not recommended)
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
