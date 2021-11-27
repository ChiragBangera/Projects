from prescription_data import*

trial_patients = ["Denise", "Frank", "Georgia", "Kenny", "Frank"]

for patient in trial_patients:
    prescription = patients[patient]
    try:
        prescription.remove(warfarin)
        prescription.add(edoxaban)
    except KeyError:
        print("Patient {0} is not taking Wafarin."
        "Please remove {0} from the trial".format(patient))
    print(patient, prescription)