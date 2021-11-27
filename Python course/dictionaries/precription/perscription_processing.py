from prescription_data import patients

trial_patients = ["Denise", "Frank", "Georgia", "Kenny", "Frank"]

while trial_patients:
    patient = trial_patients.pop()
    print(patient, end=" : ")
    prescription = patients[patient]
    print(prescription)