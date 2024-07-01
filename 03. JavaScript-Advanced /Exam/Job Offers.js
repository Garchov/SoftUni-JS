class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let addedCandidates = [];

        for (const candidate of candidates) {
            const [name, education, yearsExperience] = candidate.split('-');
            const existingCandidate = this.jobCandidates.find(c => c.name === name);

            if (existingCandidate) {
                if (parseInt(yearsExperience) > existingCandidate.yearsExperience) {
                    existingCandidate.yearsExperience = parseInt(yearsExperience);
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExperience: parseInt(yearsExperience) });
                addedCandidates.push(name);
            }
        }

        return `You successfully added candidates: ${addedCandidates.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split('-');
        const candidate = this.jobCandidates.find(c => c.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (parseInt(minimalExperience) > candidate.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }

        candidate.yearsExperience = 'hired';

        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const candidate = this.jobCandidates.find(c => c.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        let salary;
        if (candidate.education === 'Bachelor') {
            salary = 50000;
        } else if (candidate.education === 'Master') {
            salary = 60000;
        } else {
            salary = 40000;
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $${salary} per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }

        const sortedCandidates = this.jobCandidates.slice().sort((a, b) => a.name.localeCompare(b.name));
        const candidateInfo = sortedCandidates.map(c => `${c.name}-${c.yearsExperience}`).join('\n');

        return `Candidates list:\n${candidateInfo}`;
    }
}

// Example usage:
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones-Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.salaryBonus("Peter Parker"));
console.log(Jobs.candidatesDatabase());


// class JobOffers {
//   constructor(employer, position, jobCandidates = []) {
//     this.employer = employer;
//     this.position = position;
//     this.jobCandidates = jobCandidates;
//   }
//   jobApplication(candidates) {
//     for (const el of candidates) {
//       //"{name}-{education}-{yearsExperience}"

//       let [name, education, yearsExperience] = el.split("-");
//       let existCandidate = this.jobCandidates.find((el) => el.name === name);
//       yearsExperience = Number(yearsExperience);
//       if (existCandidate) {
//         if (
//           existCandidate.yearsExperience !== "hired" &&
//           existCandidate.yearsExperience < yearsExperience
//         ) {
//           existCandidate.yearsExperience = yearsExperience;
//           existCandidate.yearsExperience = yearsExperience;
//         }
//       } else {
//         this.jobCandidates.push({ name, education, yearsExperience });
//       }
//     }
//     let buff = "You successfully added candidates: ";
//     this.jobCandidates.forEach((candidates, i, self) => {
//       buff +=
//         i < self.length - 1 ? `${candidates.name}, ` : `${candidates.name}.`;
//     });

//     return buff;
//   }
//   jobOffer(chosenPerson) {
//     let [name, minExperience] = chosenPerson.split("-");
//     minExperience = Number(minExperience);
//     const currentPerson = this.jobCandidates.find((x) => x.name === name);
//     if (!currentPerson) {
//       throw Error(`${name} is not in the candidates list!`);
//     } else if (minExperience > currentPerson.yearsExperience) {
//       throw new Error(
//         `${name} does not have enough experience as {position}, minimum requirement is ${minExperience} years.`
//       );
//     }
//     currentPerson.yearsExperience = "hired";
//     return `Welcome aboard, our newest employee is ${name}.`;
//   }
//   salaryBonus(name) {
//     const currentPerson = this.jobCandidates.find((x) => x.name === name);
//     if (!currentPerson) {
//       throw Error(`${name} is not in the candidates list!`);
//     }
//     if (currentPerson.education === "Bachelor") {
//       return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
//     } else {
//       return `${this.name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
//     }
//   }

//   candidatesDatabase() {
//     if (!this.jobCandidates.length) {
//       throw new Error("Candidate Database is empty!");
//     }
//     let buff = "Candidates list:\n";
//     this.jobCandidates
//       .slice()
//       .sort((a, b) => a.name.localeCompare(b.name))
//       .forEach((x) => {
//         buff += `${x.name} - ${x.yearsExperience}\n`;
//       });
//     return buff.trim();
//   }
// }
// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(
//   Jobs.jobApplication([
//     "John Doe-Bachelor-10",
//     "Peter Parker-Master-5",
//     "Daniel Jones- Bachelor-18",
//   ])
// );
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("John Jones-8"));
