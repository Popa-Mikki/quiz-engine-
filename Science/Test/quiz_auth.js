
/* =====================================================
   STUDENTS COMPANION — QUIZ AUTHENTICATION

   Requires quiz_access.js to load first.

   Access allowance is deducted immediately upon success.
   Browser storage preserves deductions on this device.

   This is a basic client-side access system, not secure
   authentication or a cross-device shared counter.
===================================================== */

var QuizAuth = (function () {
    "use strict";

    var STORAGE_PREFIX = "studentsCompanionAccess_v1_";

    function normalizeName(value) {
        return String(value || "").trim().toLowerCase();
    }

    function storageKey(accessId, mode, recordName) {
        var quizId = String(accessId || "default-quiz").trim();
        return STORAGE_PREFIX +
            encodeURIComponent(quizId) + "_" +
            mode + "_" +
            encodeURIComponent(normalizeName(recordName));
    }

    function readRemaining(record, mode, accessId) {
        var initial = Number(record.passcount);
        var key = storageKey(accessId, mode, record.name);

        if (initial === -1) {
            return -1;
        }

        if (!Number.isInteger(initial) || initial < 0) {
            return 0;
        }

        try {
            var saved = localStorage.getItem(key);

            if (saved !== null) {
                var state = JSON.parse(saved);

                // If the configured allowance changes, treat
                // it as an administrator's renewal or reset.
                if (state.initial === initial) {
                    if (
                        Number.isInteger(state.remaining) &&
                        state.remaining >= 0 &&
                        state.remaining <= initial
                    ) {
                        return state.remaining;
                    }
                }
            }
        } catch (error) {
            // Fall back to the configured allowance if
            // browser storage is unavailable or unreadable.
        }

        return initial;
    }

    function saveRemaining(record, mode, accessId, remaining) {
        var initial = Number(record.passcount);
        var key = storageKey(accessId, mode, record.name);

        try {
            localStorage.setItem(key, JSON.stringify({
                initial: initial,
                remaining: remaining
            }));

            return true;
        } catch (error) {
            return false;
        }
    }

    function findRecord(records, suppliedName) {
        var requestedName = normalizeName(suppliedName);

        if (!requestedName || !Array.isArray(records)) {
            return null;
        }

        for (var i = 0; i < records.length; i++) {
            if (normalizeName(records[i].name) === requestedName) {
                return records[i];
            }
        }

        return null;
    }

    function authenticate(options) {
        options = options || {};

        var mode = options.mode;
        var accessId = options.accessId || "default-quiz";
        var suppliedName = options.name;
        var suppliedPasscode = String(options.passcode || "");

        if (mode === "open") {
            return {
                success: true,
                message: "Access granted."
            };
        }

        var records;

        if (mode === "individual") {
            records = individualPermissions;
        } else if (mode === "group") {
            records = groupPermissions;
        } else {
            return {
                success: false,
                message: "The quiz access mode is not configured correctly."
            };
        }

        var record = findRecord(records, suppliedName);

        if (!record) {
            return {
                success: false,
                message: mode === "individual"
                    ? "Learner record not found. Check your full name."
                    : "Group not found. Check the group name."
            };
        }

        if (String(record.passcode) !== suppliedPasscode) {
            return {
                success: false,
                message: "Incorrect passcode. Please try again."
            };
        }

        var remaining = readRemaining(record, mode, accessId);

        if (remaining === 0) {
            return {
                success: false,
                message: "Your access allowance has been exhausted. Please contact your quiz administrator for renewal."
            };
        }

        if (remaining > 0) {
            var updatedRemaining = remaining - 1;

            if (
                !saveRemaining(
                    record,
                    mode,
                    accessId,
                    updatedRemaining
                )
            ) {
                return {
                    success: false,
                    message: "Access could not be recorded on this device. Please enable browser storage and try again."
                };
            }
        }

        return {
            success: true,
            message: "Access granted.",
            remaining: remaining === -1 ? -1 : remaining - 1
        };
    }

    return {
        authenticate: authenticate
    };
})();
